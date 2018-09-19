const PUBLIC_FILES_URL = "https://api.messengerbot.si/public/";
const URL = "https://api.messengerbot.si/";

const PRICES = {
"PH Kozolec" : "\nDnevna: 1,20 €/uro\n Nočna(19.00 do 7.00): 1,8 €/noč",
"Tivoli I" : "\nDnevna(6.00 do 22.00): Prvi dve uri 0,60 €, vsaka naslednja ura 0,60 €",
"Kranjčeva" : "\nDnevna(7.00 do 19.00): Prvi dve uri: 0,60 € vsaka naslednja ura: 0,60 € \n Nočna(19.00 do 7.00): 1,80 €/noč",
"Mirje" : "\nDnevna(7.00 do 19.00): 0,70 €/uro\n Nočna(19.00 do 7.00): 1,8 €/noč",
"P+R Studenec" : "\nDnevna: 2,40 €/dan",
"Trg MDB" : "\nDnevna(7.00 do 19.00): 0,70 €/uro\n Nočna(19.00 do 7.00): 1,8 €/noč",
"Gospodarsko raz." : "\nDnevna(7.00 do 19.00): Do 1 ure - 1,00 €\nOd 1 do 3 ur - 2,00 €\r\nOd 3 do 5 ur - 2,50 €\r\nOd 5 do 8 ur - 3,00 €\r\nNad 8 ur - 3,50 €\r\n Nočna(19.00 do 7.00): 1,50 €/noč\r\nV času sejma na GR : prvi dve uri/ 1,00 €, vsaka naslednja ura 1,00 €",
"Bežigrad" : "\nDnevna(7.00 do 19.00): 0,70 €/uro\n Nočna(19.00 do 7.00): 1,8 €/noč",
"Trg preko. brigad  " : "\nDnevna(7.00 do 19.00): Za prvi dve uri 0,60 €, vsaka naslednja ura 0,60 €\r\n Nočna(19.00 do 7.00): 1,8 €/noč",
"Sanatorij Emona" : "\nDnevna(7.00 do 19.00): 1,20 €/uro\n Nočna(19.00 do 7.00): 1,8 €/noč",
"Petkovskovo  II" : "\nDnevna(7.00 do 19.00): 1,20 €/uro\n Nočna(19.00 do 7.00): 1,8 €/noč",
"P+R Dolgi most" : "\n1,20 €/dan",
"Parkomati" : "\nCONA 1: 0,70 €/uro\r\nObratovalni čas CONA 1: 8.00 do 18.00 ponedeljek - petek, od 8:00 do 13:00 ure sobota\r\nCONA 2: 0,40 €/uro\r\nObratovalni čas CONA 2: od 7:00 do 17:00 ure ponedeljek - petek",
"Tivoli II" : "\nDnevna(6.00 do 22.00): Prvi dve uri 0,60 €, vsaka naslednja ura 0,60 €\r\nAvtobus dnevna(6.00 do 22.00) 4,80 €/uro\r\nParkirnina avtodom: 3,60 €/uro",
"Žale II" : "\nPrvi dve uri 0,60 €,\r\nVsaka naslednja ura 0,60 €",
"Žale I" : "\nPrvi dve uri 0,60 €,\r\nVsaka naslednja ura 0,60 €",
"NUK" : "\nDnevna(7.00 do 19.00): 1,20 €/uro\r\nNočna(19.00 do 7.00): 1,80 €/noč",
"Žale III" : "\nPrvi dve uri 0,60 €,\r\nVsaka naslednja ura 0,60 €",
"Center Stožice" : "\nP+R: 1,20 €/dan\r\nOstali uporabniki:\r\nDnevna(7.00 ure do 19.00): 1,20 €/uro\r\nNočna(19.00 ure do 7.00): 1,80 €/noč\r\nAvtobusi(7.00 do 19.00): 4,80 €/uro",
"Žale IV": "\nPrvi dve uri 0,60 €,\r\nVsaka naslednja ura 0,60 €",
"PH Kongresni trg" : "\nDnevna(7.00 ure do 24.00) do 3 ure: 1,20 €/uro\r\nNad 3 ure: 2,40 €/uro\r\nNočna(24.00 do 7.00): 1,80 €/noč\r\n",
"Linhartova" : "\nDnevna(7.00 ure do 19.00):\r\nDo 1 ure - 1,00 €\r\nOd 1 do 3 ur - 2,00 €\r\nOd 3 do 5 ur - 2,50 €\r\nOd 5 do 8 ur - 3,00 €\r\nNad 8 ur - 3,50 €\r\nNočna(19.00 do 7.00): 1,50 €/noč\r\nV času sejma na GR : Prvi dve uri/ 1,00 €, vsaka naslednja ura 1,00 €",
"Gosarjeva ulica" : "\nDnevna(7.00 ure do 19.00): 0,60 €/uro\r\nNočna(19.00 ure do 7.00): 1,80 €/noč\r\nLetna - abonenti: 180 €/leto",
"Štembalova" : "\nMesečna - abonenti: 25,00 € /mes\r\n",
"PH Kolezija" : "\nOb nakupu karte za kopanje: 0,40 €/uro\nDnevna(8.00 do 22.00): 0,70 €/uro\r\nNočna(22.00 do 8.00): 1,80 €/noč",
"Barje" : "\nEnotna tarifa(00.00 do 24.00): 1,20 €/dan\r\nSobota in Nedelja - brezplačno",
"Gosarjeva ulica II" : "\nDnevna(7.00 do 19.00): Za prvi dve uri 0,60 €, vsaka naslednja ura 0,60 €\r\nNočna(19.00 do 07.00): 1,80 €/noč\r\nLetna - abonenti: 180 €/leto",
"GR - Abonenti" : "",
"Slovenčeva ulica" : "\nDnevna(7.00 do 19.00): Za prvi dve uri 0,60 €, vsaka naslednja ura 0,60 €,\nNočna(19.00 do 7.00): 1,80 €/noč"
};

//======================APPLICATION===================================

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue : "",
      allData: {Parkirisca : []},
      activeTab : "list",
      parking_place : null,
    }
    this.getAllData();
    this.handleChange = this.handleChange.bind(this);
  } 

  async getAllData(){
    var data;
    await axios.get( 'https://opendata.si/promet/parkirisca/lpt/')
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

    var temp_string_search = search.replace(/\š/gi,'s').replace(/\č/gi,'c').replace(/\ž/gi,'z').toLowerCase();

    for (var i=0; i<Object.keys(this.state.allData.Parkirisca).length; i++){
      
      var temp_string_data = this.state.allData.Parkirisca[i.toString()].Ime.replace(/\š/gi,'s').replace(/\č/gi,'c').replace(/\ž/gi,'z').toLowerCase();

      var temp_string_data_orig = this.state.allData.Parkirisca[i.toString()].Ime.toLowerCase();

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
        if(temp_string_search[j] === temp_string_data[j]){
          if(correct_characters2 === j){
            correct_characters2 += 1;
          }
        }    
      }
      //Check the results of comparison
      if(correct_characters1 === search.length){
        temp_array.push(i);
      }
      else if(correct_characters2 === search.length){
        temp_array.push(i);
      }
    }

    if(temp_array.length > 0){
      return this.filterParkingPlaces(temp_array);
    }else{
      return <div>Ne najde parkirišč<br/></div>
    }
  }
/
  filterParkingPlaces(filtered_parking_places){
    var displayFilteredParkingPlaces = [];
    for (var i=0; i<filtered_parking_places.length; i++){

      if(this.state.allData.Parkirisca[filtered_parking_places[i].toString()].zasedenost){

        displayFilteredParkingPlaces.push(
          <ParkingPlace1
            name={this.state.allData.Parkirisca[filtered_parking_places[i].toString()].Ime}
            number={i}
            handleClickOnParkingPlace={(number) => this.handleClickOnParkingPlace(number)}
            price={PRICES[this.state.allData.Parkirisca[filtered_parking_places[i].toString()].Ime.toString()]}
            free={this.state.allData.Parkirisca[filtered_parking_places[i].toString()].zasedenost.P_kratkotrajniki}
            allSpaces={this.state.allData.Parkirisca[filtered_parking_places[i].toString()].St_mest}
            invalidi={this.state.allData.Parkirisca[filtered_parking_places[i].toString()].Invalidi_St_mest}
          />
        );
      }else{
        displayFilteredParkingPlaces.push(
          <ParkingPlace2
            handleClickOnParkingPlace={(number) => this.handleClickOnParkingPlace(number)}
            name={this.state.allData.Parkirisca[filtered_parking_places[i].toString()].Ime}
            number={i}
            price={PRICES[this.state.allData.Parkirisca[filtered_parking_places[i].toString()].Ime.toString()]}
            allSpaces={this.state.allData.Parkirisca[filtered_parking_places[i].toString()].St_mest}
            invalidi={this.state.allData.Parkirisca[filtered_parking_places[i].toString()].Invalidi_St_mest}
          />
        );
      }
    };
    return displayFilteredParkingPlaces;
  }

  async handleClickOnParkingPlace(number){
    console.log(number);
    await this.setState({parking_place: this.filterParkingPlaces([number])});
  }

  handleChange(event) {
    return this.setState({searchValue: event.target.value});
  }

  handleChangeParking(){
    return this.setState({activeTab: "list"});
  }

  handleChangeMap(){
    return this.setState({activeTab: "map"});
  }

  handleBack(){
    this.setState({parking_place : null})
  }

//===========================================================================

  render() {
 //first page 
    if(this.state.parking_place){
      return(
        <div>
          <button onClick={() => this.handleBack()}>Back</button>
          {this.state.parking_place}
          <iframe src="https://www.google.com/maps/d/embed?mid=1yc5GwaM8U67g3LIzLBbmtyGhMbbo6nmu" width="640" height="480"></iframe>
        </div>);
    }
    else{ 
      if(this.state.activeTab === "list"){
        return(
          <div className="main-container">     
              <div className="page__header">
                  <button onClick={() => this.handleChangeParking()}>Parkirišča</button>
                  <button onClick={() => this.handleChangeMap()}>Zemljevid</button>
                  <h1 className="page__title ui-page-title">Poiščite parkirišče</h1>
                  
                  <input type="text" className="ui-input ui-input__ondark" placeholder="Vpiši postajališče..." value={this.state.searchValue} onChange={this.handleChange}/>
                  
              </div>
              
              <div className="page__content">
                  <h2 className="list-title">Parkirišča</h2>
                  
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
                  <button onClick={() => this.handleChangeParking()}>Parkirišča</button>
                  <button onClick={() => this.handleChangeMap()}>Zemljevid</button>
                  <h1 className="page__title ui-page-title">Poiščite parkirišče</h1>                
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



