var loaded = false;

const PUBLIC_FILES_URL = "http://localhost:8000/public/";
const URL = "https://api.messengerbot.si/";

const BUSES = [
["1", "Mestni log", "Vižmarje"],
["1B", "Gameljne", "Mestni log"],
["1D",  "Dolgi most P+R", "Vižmarje"],
["N1",  "Bavarski dvor (Kozolec)", "Brod"],
["2", "Nove Jarše", "Zelena jama"],
["3", "Litostroj", "Rudnik"],
["3B",  "Litostroj", "Škofljica"],
["3G",  "Železna", "Grosuplje"],
["N3",  "Bavarski dvor (Kozolec)", "Rudnik"],
["N3B", "Bavarski dvor (Kozolec)", "Škofljica"],
["5", "Podutik", "Štepanjsko naselje"],
["N5",  "Podutik", "Štepanjsko naselje"],
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

/*
//for loading Mssenger Extension SDK functions
(function(d, s, id){
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) {return;}
        js = d.createElement(s); js.id = id;
        js.src = "//connect.facebook.net/en_US/messenger.Extensions.js";
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'Messenger'));

window.extAsyncInit = function() {
  console.log("Messenger extensions are ready!");

  window.MessengerExtensions.getSupportedFeatures(function success(result) {
    let features = result.supported_features;
    console.log(features);
    if(features.includes("context")){
      loaded = true;
    }
  }, function error(err) {
      console.log(err);
  });
};


// Close webview function
function closeWebview(){
  if(loaded){
    window.MessengerExtensions.requestCloseBrowser(function success() {
          console.log("Window will be closed!");
        }, function error(err) {
          console.log(err);
        });
  }else{
    alert("Webview can be viewed only on mobile devices on messenger app 113+. Please use it on mobile device and/or update your messenger app");
  }
}


  sendData(data){
    axios.post( URL + '/quiz-template-broadcast', {data, broadcast_data})
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
    console.log(data);
  }
*/




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
      allArrivals : null
    }
    this.handleChange = this.handleChange.bind(this);
  } 


//================================================================================
//FIRST I CHECK FOR WHICH LINES CONTAINS SEARCH STRING THEN
//CALLBACK FUNCTION TO CREATE ARRAY OF FILTERED LINES
  checkSearch(search){
    var temp_array = [];
    for (var i=0; i<BUSES.length; i++){
      if(BUSES[i][0].toLowerCase().includes(search)){
        temp_array.push(i);
      }
      else if(BUSES[i][1].toLowerCase().includes(search)){
        temp_array.push(i);
      }
      else if(BUSES[i][2].toLowerCase().includes(search)){
        temp_array.push(i);
      }
    };
    if(temp_array.length > 0){
      return this.filterLines(temp_array);
    }else{
      return <div>Ne najde linije<br/></div>
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
    console.log("Clicked Active Button");
    if(this.state.isActiveStation1 !== "active"){
      await this.setState({directionActive: this.state.direction1});
      await this.setState({isActiveStation1: "active"});
      await this.setState({isActiveStation2: ""});
      await console.log(this.state.isActiveStation1);
      await console.log(this.state.isActiveStation2);
      await this.getStations();
    }
  }

  async handleChangeActive2(){
    console.log("Clicked Active Button");
    if (this.state.isActiveStation2 !== "active"){
      await this.setState({directionActive: this.state.direction2});
      await this.setState({isActiveStation1: ""});
      await this.setState({isActiveStation2: "active"});
      await console.log(this.state.isActiveStation1);
      await console.log(this.state.isActiveStation2);
      await this.getStations();
    }
  }

  async handleBack(){
    if(this.state.station)
    {
      await this.setState({allArrivals: null});
      await this.setState({station: null});
      await this.setState({directionActive: null});
      await this.setState({isActiveStation1: ""});
      await this.setState({isActiveStation2: ""});
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
    
    console.log("Clicked number " + number);
    await this.setState({line: BUSES[number][0]});
    await this.setState({direction1: BUSES[number][1]});
    await this.setState({direction2: BUSES[number][2]});
    await this.setState({directionActive: BUSES[number][1]});
    await this.setState({isActiveStation1: "active"});
    await this.getStations();
  }

  async handleClickStation(number){
    console.log(this.state.allStationsData[number].number);
    await this.setState({station: true});
    await this.setState({stationNumber: this.state.allStationsData[number].number});
    this.getArrivals();
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
      console.log(data[i].station)
      setStations.push(
          <Station
            clicked={(number) => this.handleClickStation(number)}
            numberInArray={i}
            nameOfStation={data[i].station}
          /> 
      );
    };
    await this.setState({allStationsData: data});
    return await this.setState({allStations: setStations});  
  }

  async getStations(){
    var data;
    console.log(this.state.line + this.state.directionActive + '.json');
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
  setArrivals(data){
    var setArrivals = [];
  
    for (var i=0; i<data.stations[0].buses.length; i++){

      if(this.state.line === data.stations[0].buses[i].number){
        console.log(this.state.line);
        console.log(data.stations[0].buses[i]);
        console.log(data.stations[0].buses[i].arrivals)
        if (data.stations[0].buses[i].arrivals.length > 0) {
          for(var j=0; j < data.stations[0].buses[i].arrivals.length; j++){
            setArrivals.push(
              <div>
                {data.stations[0].buses[i].number} {data.stations[0].buses[i].direction} {data.stations[0].buses[i].arrivals[j]} minut
              </div>
            );
          }
        }
      }
    }
    if(setArrivals.length === 0){
      return this.setState({allArrivals: "Trenutno ni prihodov"});
    }
    return this.setState({allArrivals: setArrivals});
  }

  async getArrivals(){
    var data;
    var lineNumber = this.state.line;
    lineNumber = lineNumber.replace(/[^\d]/g, '');
    var lpp_url = 'https://www.trola.si/' + this.state.stationNumber + '/' + lineNumber + '/';
    console.log(lpp_url);
    await axios.get( URL + 'lpp/bus-arrivals?url=' + lpp_url)
    .then(function (response) {
      console.log(response.data.stations[0]);
      data = response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
    
    return this.setArrivals(data);
  }

//===========================================================================

  render() {

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
                        <li>MESTNI LOG</li>
                        <li><img src="/public/lpp/images/i_tree.svg" height="18" alt="" className="icon-tree"/>Tbilisijska</li>
                        <li><img src="/public/lpp/images/i_tree.svg" height="18" alt="" className="icon-tree"/>Koprska</li>
                        
                        <li>VIŽMARJE</li>
                    </ul>
                </div>


          </div>
            <div>
              Linija {this.state.line} V smeri: <button onClick={() => this.handleBack()}>Back</button><br/>
              Spremeni smer:<br/>
              <img onClick={() => this.changeDirections()} src="/public/lpp/images/i_arrow-back.svg"/><br/>
              Proti: {this.state.directionActive}<br/>
              <hr/>
              {this.state.allStations}
            </div>
        </div>
      );
    }

//Here we render last page where he gets informations about arrivals=========================================

    else if(this.state.line && this.state.station){
      if(this.state.allArrivals === null){
        return(
          <div>
            Loading...
          </div>
        );
      }

      return (
      <div>
        Prihodi<br/>
        <button onClick={() => this.handleBack()}>Back</button>
        <hr/>
        Naslednji čez:<br/>
        {this.state.allArrivals}
      </div>);
    }

//Here we render first page, where clinet chooses bus line===========================================

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



