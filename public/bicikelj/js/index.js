const PUBLIC_FILES_URL = "https://api.messengerbot.si/public/";
const URL = "https://api.messengerbot.si/";


//======================APPLICATION===================================

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue : "",
      allData: {markers : []},
      activeTab : "list",
      station : null,
      chosen : false
    }
    this.getAllData();
    this.handleChange = this.handleChange.bind(this);
  } 

  async getAllData(){
    var data;
    await axios.get( 'https://opendata.si/promet/bicikelj/list/.json')
      .then(function (response) {
        console.log(response.data);
        data = response.data;
      })
      .catch(function (error) {
        console.log(error);
      });
    await this.setState({allData: data});
    return;
  }

//================================================================================
//FIRST I CHECK FOR WHICH STATIONS CONTAINS SEARCH STRING THEN
//CALLBACK FUNCTION TO CREATE ARRAY OF FILTERED STATIONS
  checkSearch(search){

    var temp_array = [];

    //var temp_string_search = search.replace(/\š/gi,'s').replace(/\č/gi,'c').replace(/\ž/gi,'z').toLowerCase();

    for (var i=1; i<Object.keys(this.state.allData.markers).length; i++){
      
      var temp_string_data = this.state.allData.markers[i.toString()].fullAddress.replace(/\š/gi,'s').replace(/\č/gi,'c').replace(/\ž/gi,'z').toLowerCase();
      var temp_string_data_orig = this.state.allData.markers[i.toString()].fullAddress.toLowerCase();

      var words_in_string_orig = temp_string_data_orig.split(" ");
      for(var h=0; h<words_in_string_orig.length; h++){
          if(words_in_string_orig[h].includes("-")){
            let temp_array = words_in_string_orig[h].split("-");
            words_in_string_orig[h] = temp_array[0];
            words_in_string_orig.push(temp_array[1]);
          }
      }

      var words_in_string = temp_string_data.split(" ");
      for(var t=0; t<words_in_string.length; t++){
          if(words_in_string[t].includes("-")){
            let temp_array = words_in_string[t].split("-");
            words_in_string[t] = temp_array[0];
            words_in_string.push(temp_array[1]);
          }
      }


      var correct_characters_in_words1 = [];
      for(var a = 0; a < words_in_string_orig.length; a++) {
        correct_characters_in_words1[a] = 0;
      }

      var correct_characters_in_words2 = [];
      for(var b = 0; b < words_in_string.length; b++) {
        correct_characters_in_words2[b] = 0;
      }

      var correct_characters1 = 0;
      var correct_characters2 = 0;
      
      for(var j=0; j<search.length;j++){
        //Check first with š č ž
        if(search[j].toLowerCase() === temp_string_data_orig[j]){
          if(correct_characters1 === j){
            correct_characters1 += 1;
          }
        }

        //Check second without č š ž
        if(search[j].toLowerCase() === temp_string_data[j]){
          if(correct_characters2 === j){
            correct_characters2 += 1;
          }
        }    
      }

      for(var c=0; c<words_in_string.length; c++){
        for(var d=0; d<search.length; d++){
          if(search[d].toLowerCase() === words_in_string_orig[c][d]){
            correct_characters_in_words1[c] += 1;
          }
          if(search[d].toLowerCase() === words_in_string[c][d]){
            correct_characters_in_words2[c] += 1;
          }
        }
      }

      //Check the results of comparison
      for(var e=0; e<correct_characters_in_words1.length; e++){      
        if(correct_characters_in_words1[e] === search.length){
          if(!temp_array.includes(i)){
            temp_array.push(i);
          }
        }
        else if(correct_characters_in_words2[e] === search.length){
          if(!temp_array.includes(i)){
            temp_array.push(i);
          }
        }
        else if(correct_characters1 === search.length){
          if(!temp_array.includes(i)){
            temp_array.push(i);
          }
        }
        else if(correct_characters2 === search.length){
          if(!temp_array.includes(i)){
            temp_array.push(i);
          }
        }       
      }
    }

    if(temp_array.length > 0){
      return this.filterStations(temp_array);
    }else{
      return <div>Ne najde parkirišč<br/></div>
    }
  }

  filterStations(filtered_stations){
    var displayFilteredStations = [];
    for (var i=0; i<filtered_stations.length; i++){

      displayFilteredStations.push(
        <Station
          number={filtered_stations[i]}
          name={this.state.allData.markers[filtered_stations[i].toString()].fullAddress}
          free={this.state.allData.markers[filtered_stations[i].toString()].station.available}
          allSpaces={this.state.allData.markers[filtered_stations[i].toString()].station.total}
          chosen={this.state.chosen}
          handleClickOnStation={(number) => this.handleClickOnStation(number)}
        />
      );

    };
    return displayFilteredStations;
  }

  async handleClickOnStation(number){
    console.log(number);
    await this.setState({chosen : true});
    await this.setState({station: this.filterStations([number])});
  }

  handleChange(event) {
    return this.setState({searchValue: event.target.value});
  }

  handleChangeStations(){
    return this.setState({activeTab: "list"});
  }

  handleChangeMap(){
    return this.setState({activeTab: "map"});
  }

  async handleBack(){
    await this.setState({station : null});
    await this.setState({chosen : false})
  }

//=================================================================================

  render() {
 //first page 
    if(this.state.station){
      return(
        <div>
          <button onClick={() => this.handleBack()}>Back</button>
          {this.state.station}
          <iframe src="https://www.google.com/maps/place/Bicike(lj)/@46.0573245,14.5080687,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x930a81bae369be9e!8m2!3d46.0573245!4d14.5102574" width="640" height="480"></iframe>
        </div>);
    }
    else{ 
      if(this.state.activeTab === "list"){
        return(
          <div className="main-container">     
              <div className="page__header">
                  <button onClick={() => this.handleChangeStations()}>Postaje</button>
                  <button onClick={() => this.handleChangeMap()}>Zemljevid</button>
                  <h1 className="page__title ui-page-title">Poiščite postajo</h1>
                  
                  <input type="text" className="ui-input ui-input__ondark" placeholder="Vpiši postajališče..." value={this.state.searchValue} onChange={this.handleChange}/>
                  
              </div>
              
              <div className="page__content">
                  <h2 className="list-title">Postajališča</h2>
                  
                  <ul className="ui-list">
                      { this.checkSearch(this.state.searchValue) }
                  </ul>
              </div>
          </div>
        );
      }
      else if(this.state.activeTab === "map"){
        return(
          <div className="main-container">     
              <div className="page__header">
                  <button onClick={() => this.handleChangeStations()}>Postaje</button>
                  <button onClick={() => this.handleChangeMap()}>Zemljevid</button>
                  <h1 className="page__title ui-page-title">Poiščite postajo</h1>                
              </div>
              
              <div className="page__content">
                  <iframe src="https://www.google.com/maps/d/embed?mid=1yc5GwaM8U67g3LIzLBbmtyGhMbbo6nmu" width="640" height="480"></iframe>
              </div>
          </div>
        );
      }
    }
  }
}


ReactDOM.render(
  <App />,
  document.getElementById('app')
);



