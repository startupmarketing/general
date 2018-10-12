var loaded = false;

const PUBLIC_FILES_URL = "https://api.messengerbot.si/public/";
const URL = "https://api.messengerbot.si/";

const BUSES = [
["1", "Mestni log", "Vižmarje"],
["1B", "Gameljne", "Mestni log"],
["1D",  "Dolgi most P+R", "Vižmarje"],
["1N",  "Bavarski dvor (Kozolec)", "Brod"],
["2", "Nove Jarše", "Zelena jama"],
["3", "Litostroj", "Rudnik"],
["3B",  "Litostroj", "Škofljica"],
["3G",  "Železna", "Grosuplje"],
["3N",  "Bavarski dvor (Kozolec)", "Rudnik"],
["N3B", "Bavarski dvor (Kozolec)", "Škofljica"],
["5", "Podutik", "Štepanjsko naselje"],
["5N",  "Podutik", "Štepanjsko naselje"],
["6", "Črnuče", "Dolgi most P+R"],
["6B",  "Železna", "Notranje Gorice"],
["7", "Nove Jarše", "Pržan"],
["7L",  "Letališka obr.", "Pržan"],
["8", "Gameljne", "Brnčičeva"],
["9", "Štepanjsko naselje", "Barje P+R"],
["11", "Ježica P+R", "Zalog"],
["11B", "Železna", "Zalog"],
["12",  "Železna", "Vevče"],
["12D", "Železna", "Dragomelj"],
["13",  "Center Stožice P+R", "Sostro"],
["14", "Savlje", "Bokalce"],
["15", "Stanežiče", "Sora"],
["18", "Kolodvor", "Center Stožice P+R"],
["18L", "Kolodvor", "Litostrojska"],
["19B", "Tomačevo", "Jezero"],
["19I", "Tomačevo", "Iška vas"],
["20", "Fužine P+R", "Nove Stožice P+R"],
["20Z", "Zalog", "Nove Stožice P+R"],
["21", "Beričevo", "Gameljne"],
["22", "Fužine P+R", "Kamna Gorica"],
["23", "Podutik", "Kamna Gorica"],
["24", "BTC-Atlantis", "Vevče"],
["25", "Medvode naselje", "Zadobrova"],
["26", "Mali Lipoglav", "Tuji Grm"],
["27", "Letališka", "NS Rudnik"],
["27K", "Bavarski dvor (Korabar)", "BTC-Atlantis"],
["30", "Medvode", "Vodice"],
["51", "Ljubljana AP", "Polhov Gradec"],
["52", "Polhov Gradec", "Črni Vrh"],
["53", "Polhov Gradec", "Suhi Dol"],
["56", "Ljubljana AP", "Šentjošt"],
["60", "Ljubljana AP", "Polje"],
["61", "Vodice", "Zapoge"]
];


//======================APPLICATION===================================

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue : "",
      line : null,
      direction1 : null,
      direction2 : null,
      directionActive : null,
      isActiveStation1 : "",
      isActiveStation2 : "",
      allStations : null,
      station : null,
      allStationsData : null,
      stationNumber : null,
      allArrivalsOnLine : null,
      allArrivalsWithoutChosenLine : null,
      allArrivalsData: null
    }
    this.handleChange = this.handleChange.bind(this);
  } 


//================================================================================
//FIRST I CHECK FOR WHICH LINES CONTAINS SEARCH STRING THEN
//CALLBACK FUNCTION TO CREATE ARRAY OF FILTERED LINES
  checkSearch(search){
    var temp_array = [];


    for (var i=0; i<BUSES.length; i++){
      var temp_string_buses0 = BUSES[i][0].replace(/\š/gi,'s').replace(/\č/gi,'c').replace(/\ž/gi,'z').toLowerCase();
      var temp_string_buses1 = BUSES[i][1].replace(/\š/gi,'s').replace(/\č/gi,'c').replace(/\ž/gi,'z').toLowerCase();
      var temp_string_buses2 = BUSES[i][2].replace(/\š/gi,'s').replace(/\č/gi,'c').replace(/\ž/gi,'z').toLowerCase();
  
      var temp_string_buses1orig = BUSES[i][1].toLowerCase();
      var temp_string_buses2orig = BUSES[i][2].toLowerCase();


      var correct_characters1 = 0;
      var correct_characters2 = 0;

//Check every character in search and compare it to data
      
      for(var j=0; j<search.length;j++){
      //Check first direction  
        if(search[j] === temp_string_buses1[j]){
          if(correct_characters1 === j){
            correct_characters1 += 1;
          }
        }
        else if(search[j] === temp_string_buses1orig[j]){
          if(correct_characters1 === j){
            correct_characters1 += 1;
          }
        }
        //Check second direction  
        if(search[j] === temp_string_buses2[j]){
          if(correct_characters2 === j){
            correct_characters2 += 1;
          }
        }    
        else if(search[j] === temp_string_buses2orig[j]){
          if(correct_characters2 === j){
            correct_characters2 += 1;
          }
        }
      }
      //Check the results of comparison
      if(temp_string_buses0.includes(search)){
        temp_array.push(i);
      }
      else if(BUSES[i][0].toLowerCase().includes(search)){
        temp_array.push(i);
      }
      else if(correct_characters1 === search.length){
        temp_array.push(i);
      }
      else if(correct_characters2 === search.length){
        temp_array.push(i);
      }
    };
    if(temp_array.length > 0){
      return this.filterLines(temp_array);
    }else{
      return <li>Ne najde linije<br/></li>
    }
  }

  filterLines(filtered_lines){
    var displayFilteredBuses = [];
    for (var i=0; i<filtered_lines.length; i++){
      //
      displayFilteredBuses.push(
          <BusLine
            clicked={(number) => this.handleClickLine(number)}
            numberInArray={filtered_lines[i]}
            line={BUSES[filtered_lines[i]][0]}
            direction1={BUSES[filtered_lines[i]][1]}
            direction2={BUSES[filtered_lines[i]][2]}
          />
      );
    };
    return displayFilteredBuses;
  }

//=======================Handle functions=======================================
  async handleChangeActive1(){
    //console.log("Clicked Active Button");

//We check if stations is already active or not, and make it active if its not

    if(this.state.isActiveStation1 !== "active"){
      await this.setState({directionActive: this.state.direction1});
      await this.setState({isActiveStation1: "active"});
      await this.setState({isActiveStation2: ""});
      //await console.log(this.state.isActiveStation1);
      //await console.log(this.state.isActiveStation2);
      await this.getStations();

//We check if station is already chosen

      if(this.state.station){
        var setStations = [];
      
        for (var i=0; i<this.state.allStationsData.length; i++){
          //console.log(this.state.allStationsData[i].station);

          if(this.state.station === (this.state.allStationsData[i].station)){
            this.handleClickStation(i);
          };
        };
      };
    };
  }

  async handleChangeActive2(){
    //console.log("Clicked Active Button");
//We check if stations is already active or not, and make it active if its not

    if (this.state.isActiveStation2 !== "active"){
      await this.setState({directionActive: this.state.direction2});
      await this.setState({isActiveStation1: ""});
      await this.setState({isActiveStation2: "active"});
      //await console.log(this.state.isActiveStation1);
      //await console.log(this.state.isActiveStation2);
      await this.getStations();

//We check if station is already chosen

      if(this.state.station){
        var setStations = [];
      
        for (var i=0; i<this.state.allStationsData.length; i++){
          //console.log(this.state.allStationsData[i].station)

          if(this.state.station === (this.state.allStationsData[i].station)){
            this.handleClickStation(i)
          }
        };
      };
    }
  }

  async handleBack(){
    if(this.state.station)
    {
      await this.setState({allArrivalsData: null});
      await this.setState({station: null});
    }else{
      await this.setState({searchValue: ""});
      await this.setState({line: null});
      await this.setState({directionActive: null});
      await this.setState({isActiveStation1: ""});
      await this.setState({isActiveStation2: ""});
    }
  }

  handleChange(event) {
    this.setState({searchValue: event.target.value});
  }

  async handleClickLine(number){
    
    //console.log("Clicked number " + number);
    await this.setState({line: BUSES[number][0]});
    await this.setState({direction1: BUSES[number][1]});
    await this.setState({direction2: BUSES[number][2]});
    await this.setState({directionActive: BUSES[number][1]});
    await this.setState({isActiveStation1: "active"});
    await this.getStations();
  }

  async handleClickStation(number){
    //console.log("Station number is: " + this.state.allStationsData[number].number);
    //console.log("Station name is: " + this.state.allStationsData[number].station)
    await this.setState({station: this.state.allStationsData[number].station});
    await this.setState({stationNumber: this.state.allStationsData[number].number});
    await this.getArrivals();
  }

  async changeDirections(){
    var temp_directionFrom = this.state.direction1;
    var temp_directionTo = this.state.direction2;
    
    await this.setState({direction1: temp_directionTo});
    await this.setState({direction2: temp_directionFrom});
    this.getStations();
  }

//===================Get and set stations for display====================

  async setStations(data){
    var setStations = [];
  
    for (var i=0; i<data.length; i++){
      //console.log(data[i].station)
      let lastStation = false;
      if(i === (data.length-1)){
        lastStation = true;
      }

      setStations.push(
          <Station
            clicked={(number) => this.handleClickStation(number)}
            numberInArray={i}
            lastStation={lastStation}
            nameOfStation={data[i].station}
          /> 
      );
    };
    await this.setState({allStationsData: data});
    return await this.setState({allStations: setStations});  
  }

  async getStations(){
    var data;
    //console.log(this.state.line + this.state.directionActive + '.json');
    await axios.get( PUBLIC_FILES_URL + 'lpp/js/stations/' + this.state.line + this.state.directionActive + '.json')
    .then(function (response) {
      console.log(response.data);
      data = response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
    return this.setStations(data);
  }

//=======================================Arrivals functions===================================

  allArrivalsOnLine(){
    var setArrivals = [];
    var timeOfArrivals = [];
    //console.log(this.state.allArrivalsData);
    for (var i=0; i<this.state.allArrivalsData.stations[0].buses.length; i++){
    
    //here we arrange arrivals by ascending time
      if(this.state.line === this.state.allArrivalsData.stations[0].buses[i].number){
        for(var t=0; t<this.state.allArrivalsData.stations[0].buses[i].arrivals.length; t++){
          timeOfArrivals.push([this.state.allArrivalsData.stations[0].buses[i].arrivals[t], i]);
          //console.log(this.state.allArrivalsData.stations[0].buses[i].arrivals[t], i);
        }
        /*
        console.log(this.state.allArrivalsData.stations[0].buses[i].arrivals);
        if (this.state.allArrivalsData.stations[0].buses[i].arrivals.length > 0) {
          for(var j=0; j < this.state.allArrivalsData.stations[0].buses[i].arrivals.length; j++){ 
            setArrivals.push(
              <div>
                <li>
                  <img src="/public/lpp/images/i_clock.svg" height="20" alt="" className="icon-time"/> 
                  {this.state.allArrivalsData.stations[0].buses[i].arrivals[j]} min 
                  <span className="bus-direction">
                    smer {this.state.allArrivalsData.stations[0].buses[i].direction}
                  </span>
                </li>
              </div>
            );
          }
        }
        */
      }
    }

    timeOfArrivals.sort(function(a, b) {
      return a[0] - b[0];
    });
    console.log(timeOfArrivals);

    for(var g=0; g<timeOfArrivals.length; g++){
      setArrivals.push(
              <div>
                <li>
                  <img src="/public/lpp/images/i_clock.svg" height="20" alt="" className="icon-time"/> 
                  {timeOfArrivals[g][0]} min 
                  <span className="bus-direction">
                    smer {this.state.allArrivalsData.stations[0].buses[timeOfArrivals[g][1]].direction}
                  </span>
                </li>
              </div>
      );
    }

    if(setArrivals.length === 0){
      return this.setState({allArrivalsOnLine: "Trenutno ni prihodov"});
    }
    return this.setState({allArrivalsOnLine: setArrivals});
  }

  allArrivalsWithoutChosenLine(){
    var setArrivals = [];
    var timeOfArrivals = [];
    for (var i=0; i<this.state.allArrivalsData.stations[0].buses.length; i++){

      if(this.state.line !== this.state.allArrivalsData.stations[0].buses[i].number){
        
        for(var t=0; t<this.state.allArrivalsData.stations[0].buses[i].arrivals.length; t++){
          timeOfArrivals.push([this.state.allArrivalsData.stations[0].buses[i].arrivals[t], i]);
          console.log(this.state.allArrivalsData.stations[0].buses[i].arrivals[t], i);
        }
        /*
        if (this.state.allArrivalsData.stations[0].buses[i].arrivals.length > 0) {
          for(var j=0; j < this.state.allArrivalsData.stations[0].buses[i].arrivals.length; j++){
            setArrivals.push(
              <div>
                <li>
                   
                  Linija {this.state.allArrivalsData.stations[0].buses[i].number} <img src="/public/lpp/images/i_clock.svg" height="20" alt="" className="icon-time"/> {this.state.allArrivalsData.stations[0].buses[i].arrivals[j]} min
                  <span className="bus-direction">
                     smer {this.state.allArrivalsData.stations[0].buses[i].direction}
                  </span>
                </li>
              </div>
            );
          }
        }
        */
      }
    }
    timeOfArrivals.sort(function(a, b) {
      return a[0] - b[0];
    });

    for(var g=0; g<timeOfArrivals.length;g++){

      setArrivals.push(
        <div>
          <li>             
            Linija {this.state.allArrivalsData.stations[0].buses[timeOfArrivals[g][1]].number} <img src="/public/lpp/images/i_clock.svg" height="20" alt="" className="icon-time"/> {timeOfArrivals[g][0]} min
            <span className="bus-direction">
              smer {this.state.allArrivalsData.stations[0].buses[timeOfArrivals[g][1]].direction}
            </span>
          </li>
        </div>
      );
    }
    if(setArrivals.length === 0){
      return this.setState({allArrivalsWithoutChosenLine: null});
    }
    return this.setState({allArrivalsWithoutChosenLine: setArrivals});
  }


  async getArrivals(){
    var data;
    var lineNumber = this.state.line;
    lineNumber = lineNumber.replace(/[^\d]/g, '');
    var lpp_url = 'https://www.trola.si/' + this.state.stationNumber + '/';
    //console.log(lpp_url);
    await axios.get( URL + 'lpp/bus-arrivals?url=' + lpp_url)
    .then(function (response) {
      console.log(response.data.stations[0]);
      data = response.data;
    })
    .catch(function (error) {
      console.log(error);
    });

    await this.setState({allArrivalsData: data});
    await this.allArrivalsOnLine();
    await this.allArrivalsWithoutChosenLine();
    return; 
  }

//Other buses on station

  otherBuses(){
    if(this.state.allArrivalsWithoutChosenLine){
      return(
          <div>  
            <h2 className="list-title">Ostali avtobusi na postajališču:</h2>

            <ul className="ui-list">
                {this.state.allArrivalsWithoutChosenLine}
            </ul>
          </div>
      );
    }
    else{
      return(
          <div>  

          </div>
          );
    }
  }

  async refresh(){
    await this.setState({allArrivalsData : null});
    await this.getArrivals();
  }

//===========================================================================

  render() {
    var refreshStyle = {
      "float" : "right",
      "margin-top" : "2px"
    };
//Here we render second page, where client chooses stations and direction========================================

    if(this.state.line && !this.state.station){
      let toggleStationClass1 = ["station"];
        if(this.state.isActiveStation1 === "active") {
          toggleStationClass1.push('active');
        }

      let toggleStationClass2 = ["station"];
        if(this.state.isActiveStation2 === "active") {
          toggleStationClass2.push('active');
        }

      return(
        <div>
          <div className="main-container">
            <div className="page__header">
                <h1 className="page__title ui-page-title ui-title-left"><strong>Linija {this.state.line}</strong> v smeri</h1>
                
                <div className="ui-back"><img src="/public/lpp/images/i_arrow-back.svg" height="24" width="24" alt="" onClick={() => this.handleBack()}/></div>

                
                <div className="station-toggle">
                    <div className={toggleStationClass1.join(' ')} onClick={() => this.handleChangeActive1()}>{this.state.direction1}</div>
                    <div className={toggleStationClass2.join(' ')} onClick={() => this.handleChangeActive2()}>{this.state.direction2}</div>
                </div>
               
                <div className="header__image">
                    <img src="/public/lpp/images/i_bus.svg" height="50" alt=""/>
                </div>
            </div>

            <div className="page__content">
                <h2 className="list-title">Izberi postajališče</h2>
                    
                  <ul className="ui-list">
                    {this.state.allStations}
                  </ul>
            </div>


          </div>
        </div>
      );
    }

//Here we render last page where he gets informations about arrivals=========================================

    else if(this.state.line && this.state.station){
      if(this.state.allArrivalsData === null){
        return(
        <div className="loading-screen">

            <div className="loading-icon">
                <img src="/public/lpp/images/i_bus-loading.gif" alt=""/>
                Nalagam...
            </div>
        </div>
        );
      }

      return (
      <div>
        <div className="main-container">

          <div className="page__header">
              <h1 className="page__title ui-page-title ui-title-left"><strong>Linija {this.state.line}</strong> v smeri</h1>
              
              <div className="ui-back"><img src="/public/lpp/images/i_arrow-back.svg" height="24" width="24" alt="" onClick={() => this.handleBack()}/></div>
              
              <div className="station-toggle">
                  <div className="station selected">{this.state.directionActive}</div>
              </div>
             
              <div className="header__image">
                  <img src="/public/lpp/images/i_bus.svg" height="50" alt=""/>
              </div>
          </div>


          <div className="page__content">
            <h2 className="list-title">
              <img onClick={() => this.refresh()} src="/public/lpp/images/i_refresh-dark.svg" height="22" width="22" alt="Refresh" style={refreshStyle} />
              Prihodi za postajališče: {this.state.station}
            </h2>
        
            <ul className="ui-list">
                {this.state.allArrivalsOnLine}
            </ul>
            {this.otherBuses()}
          </div>


        </div>
      </div>);
    }

//Here we render first page, where client chooses bus line===========================================

    else{
      return (

<div className="main-container">
   
   <div className="page__header">
        <h1 className="page__title ui-page-title">Prosim poiščite ali izberite linijo!</h1>
        <input type="text" className="ui-input ui-input__ondark" placeholder="Vpiši linijo ali končno postajo..." value={this.state.searchValue} onChange={this.handleChange}/>
        <div className="header__image">
            <img src="/public/lpp/images/i_bus.svg" height="50" alt=""/>
        </div>
    </div>

    <div className="page__content">
        <h2 className="list-title">Relacije</h2>
        
        <ul className="ui-list">
            { this.checkSearch(this.state.searchValue.toLowerCase()) }
        </ul>
    </div>


</div>
      );
    }
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);



