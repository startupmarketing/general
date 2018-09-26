const PUBLIC_FILES_URL = "https://api.messengerbot.si/public/";
const URL = "https://api.messengerbot.si/";

const PRICES = {
"PH Kozolec" :  {  
                  "Dnevna" : "Dnevna: 1,20 €/uro",
                  "Nocna" : "Nočna (19.00 do 7.00): 1,8 €/noč"
                },
"Tivoli I" :    {
                  "Dnevna" : "Dnevna (6.00 do 22.00): Prvi dve uri 0,60 €, vsaka naslednja ura 0,60 €",
                  "Nocna" : null
                },
"Kranjčeva" : {
                "Dnevna" : "Dnevna (7.00 do 19.00): Prvi dve uri: 0,60 € vsaka naslednja ura: 0,60 €",
                "Nocna" : "Nočna (19.00 do 7.00): 1,80 €/noč"
              },
"Mirje" : {
            "Dnevna" : "Dnevna (7.00 do 19.00): 0,70 €/uro",
            "Nocna" : "Nočna (19.00 do 7.00): 1,8 €/noč"
          },
"P+R Studenec" :  {
                    "Dnevna" : "Dnevna: 2,40 €/dan",
                    "Nocna" : null
                  },
"Trg MDB" : {
              "Dnevna" : "Dnevna (7.00 do 19.00): 0,70 €/uro", 
              "Nocna" : "Nočna (19.00 do 7.00): 1,8 €/noč"
            },
"Gospodarsko raz." :  {
                        "Dnevna" : "Dnevna (7.00 do 19.00): Do 1 ure - 1,00 €\nOd 1 do 3 ur - 2,00 €\r\nOd 3 do 5 ur - 2,50 €\r\nOd 5 do 8 ur - 3,00 €\r\nNad 8 ur - 3,50 €\r\n", 
                        "Nocna" : "Nočna (19.00 do 7.00): 1,50 €/noč\r\nV času sejma na GR : prvi dve uri/ 1,00 €, vsaka naslednja ura 1,00 €"
                      },
"Bežigrad" :  {
                "Dnevna" : "Dnevna (7.00 do 19.00): 0,70 €/uro",
                "Nocna" : "Nočna (19.00 do 7.00): 1,8 €/noč"
              },
"Trg preko. brigad  " : {
                          "Dnevna" : "Dnevna (7.00 do 19.00): Za prvi dve uri 0,60 €, vsaka naslednja ura 0,60 €",
                          "Nocna" : "Nočna (19.00 do 7.00): 1,8 €/noč"
                        },
"Sanatorij Emona" : {
                      "Dnevna" : "Dnevna (7.00 do 19.00): 1,20 €/uro",
                      "Nocna" : "Nočna (19.00 do 7.00): 1,8 €/noč"
                    },
"Petkovskovo  II" : {
                      "Dnevna" : "Dnevna (7.00 do 19.00): 1,20 €/uro",
                      "Nocna" : "Nočna (19.00 do 7.00): 1,8 €/noč"
                    },
"P+R Dolgi most" :  {
                      "Dnevna" : "1,20 €/dan",
                      "Nocna" : null
                    },
"Parkomati" : {
                "Dnevna" : "CONA 1: 0,70 €/uro\r\nObratovalni čas CONA 1: 8.00 do 18.00 ponedeljek - petek, od 8:00 do 13:00 ure sobota\r\nCONA 2: 0,40 €/uro\r\nObratovalni čas CONA 2: od 7:00 do 17:00 ure ponedeljek - petek",
                "Nocna" : null
              },
"Tivoli II" : {
                "Dnevna" : "Dnevna (6.00 do 22.00): Prvi dve uri 0,60 €, vsaka naslednja ura 0,60 €\r\nAvtobus dnevna(6.00 do 22.00) 4,80 €/uro\r\nParkirnina avtodom: 3,60 €/uro",
                "Nocna" : null
              },
"Žale II" : {
              "Dnevna" : "Prvi dve uri 0,60 €,\r\nVsaka naslednja ura 0,60 €",
              "Nocna" : null
            },
"Žale I" :  {
              "Dnevna" : "Prvi dve uri 0,60 €,\r\nVsaka naslednja ura 0,60 €",
              "Nocna" : null
            },
"NUK" : {
          "Dnevna" : "Dnevna (7.00 do 19.00): 1,20 €/uro\r\nNočna (19.00 do 7.00): 1,80 €/noč",
          "Nocna" : null
        },
"Žale III" :  {
                "Dnevna" : "Prvi dve uri 0,60 €,\r\nVsaka naslednja ura 0,60 €",
                "Nocna" : null
              },
"Center Stožice" :  {
                      "Dnevna" : "P+R: 1,20 €/dan\r\nOstali uporabniki:\r\nDnevna (7.00 ure do 19.00): 1,20 €/uro",
                      "Nocna" : "Nočna (19.00 ure do 7.00): 1,80 €/noč\r\nAvtobusi (7.00 do 19.00): 4,80 €/uro"
                    },
"Žale IV":  {
              "Dnevna" : "Prvi dve uri 0,60 €,\r\nVsaka naslednja ura 0,60 €",
              "Nocna" : null
            },
"PH Kongresni trg" :  {
                        "Dnevna" : "Dnevna (7.00 ure do 24.00) do 3 ure: 1,20 €/uro\r\nNad 3 ure: 2,40 €/uro",
                        "Nocna" : "Nočna (24.00 do 7.00): 1,80 €/noč\r\n"
                      },
"Linhartova" :  {
                  "Dnevna" : "Dnevna (7.00 ure do 19.00):\r\nDo 1 ure - 1,00 €\r\nOd 1 do 3 ur - 2,00 €\r\nOd 3 do 5 ur - 2,50 €\r\nOd 5 do 8 ur - 3,00 €\r\nNad 8 ur - 3,50 €",
                  "Nocna" : "Nočna (19.00 do 7.00): 1,50 €/noč\r\nV času sejma na GR : Prvi dve uri/ 1,00 €, vsaka naslednja ura 1,00 €"
                },
"Gosarjeva ulica" : {
                      "Dnevna" : "Dnevna (7.00 ure do 19.00): 0,60 €/uro",
                      "Nocna" : "Nočna (19.00 ure do 7.00): 1,80 €/noč\r\nLetna - abonenti: 180 €/leto"
                    },
"Štembalova" :  {
                  "Dnevna" : "Mesečna - abonenti: 25,00 € /mes\r\n",
                  "Nocna" : null
                },
"PH Kolezija" : {
                  "Dnevna" : "Ob nakupu karte za kopanje: 0,40 €/uro\nDnevna (8.00 do 22.00): 0,70 €/uro",
                  "Nocna" : "Nočna (22.00 do 8.00): 1,80 €/noč"
                },
"Barje" : {
            "Dnevna" : "Enotna tarifa (00.00 do 24.00): 1,20 €/dan\r\nSobota in Nedelja - brezplačno",
            "Nocna" : null
          },
"Gosarjeva ulica II" :  {
                          "Dnevna" : "Dnevna (7.00 do 19.00): Za prvi dve uri 0,60 €, vsaka naslednja ura 0,60 €",
                          "Nocna" : "Nočna (19.00 do 07.00): 1,80 €/noč\r\nLetna - abonenti: 180 €/leto"
                        },
"GR - Abonenti" : {
                    "Dnevna" : "Ni podatka",
                    "Nocna" : null
                  },
"Slovenčeva ulica" :  {
                        "Dnevna" : "Dnevna (7.00 do 19.00): Za prvi dve uri 0,60 €, vsaka naslednja ura 0,60 €",
                        "Nocna" : "Nočna (19.00 do 7.00): 1,80 €/noč"
                      },
"Povšetova ulica" : {
  "Dnevna" : "Dnevna (7.00 do 19.00): Za prvi dve uri 0,60 €, vsaka naslednja ura 0,60 €",
  "Nocna" : "Nočna (19.00 do 7.00): 1,80 €/noč"
}

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
      chosen : false,
      isActiveList : "active",
      isActiveMap : null
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

    //var temp_string_search = search.replace(/\š/gi,'s').replace(/\č/gi,'c').replace(/\ž/gi,'z').toLowerCase();

    for (var i=0; i<Object.keys(this.state.allData.Parkirisca).length; i++){
      
      var temp_string_data = this.state.allData.Parkirisca[i.toString()].Ime.replace(/\š/gi,'s').replace(/\č/gi,'c').replace(/\ž/gi,'z').toLowerCase();

      var temp_string_data_orig = this.state.allData.Parkirisca[i.toString()].Ime.toLowerCase();

      //console.log(temp_string_data_orig + " " + temp_string_data);
      
      var words_in_string_orig = temp_string_data_orig.split(" ");
      var words_in_string = temp_string_data.split(" ");

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
        //Check with š č ž
        if(search[j].toLowerCase() === temp_string_data_orig[j]){
          if(correct_characters1 === j){
            correct_characters1 += 1;
          }
        }

        //Check without č š ž
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
      return this.filterParkingPlaces(temp_array);
    }else{
      return <li>Ne najde parkirišč<br/></li>
    }
  }

  filterParkingPlaces(filtered_parking_places){
    var displayFilteredParkingPlaces = [];
    for (var i=0; i<filtered_parking_places.length; i++){

      if(this.state.allData.Parkirisca[filtered_parking_places[i].toString()].zasedenost){
        let temp_free;
        if(this.state.allData.Parkirisca[filtered_parking_places[i].toString()].zasedenost.P_kratkotrajniki < 0){
          temp_free = 0;
        }
        else{
          temp_free = this.state.allData.Parkirisca[filtered_parking_places[i].toString()].zasedenost.P_kratkotrajniki;
        }
        displayFilteredParkingPlaces.push(
          <ParkingPlace1
            handleBack={() => this.handleBack()}
            chosen={this.state.chosen}
            name={this.state.allData.Parkirisca[filtered_parking_places[i].toString()].Ime}
            number={filtered_parking_places[i]}
            handleClickOnParkingPlace={(number) => this.handleClickOnParkingPlace(number)}
            priceDay={PRICES[this.state.allData.Parkirisca[filtered_parking_places[i].toString()].Ime.toString()]["Dnevna"]}
            priceNight={PRICES[this.state.allData.Parkirisca[filtered_parking_places[i].toString()].Ime.toString()]["Nocna"]}
            free={temp_free}
            allSpaces={this.state.allData.Parkirisca[filtered_parking_places[i].toString()].St_mest}
            invalidi={this.state.allData.Parkirisca[filtered_parking_places[i].toString()].Invalidi_St_mest}
          />
        );
      }else{
        displayFilteredParkingPlaces.push(
          <ParkingPlace2
            chosen={this.state.chosen}
            handleClickOnParkingPlace={(number) => this.handleClickOnParkingPlace(number)}
            handleBack={() => this.handleBack()}
            name={this.state.allData.Parkirisca[filtered_parking_places[i].toString()].Ime}
            number={filtered_parking_places[i]}
            priceDay={PRICES[this.state.allData.Parkirisca[filtered_parking_places[i].toString()].Ime.toString()]["Dnevna"]}
            priceNight={PRICES[this.state.allData.Parkirisca[filtered_parking_places[i].toString()].Ime.toString()]["Nocna"]}
            allSpaces={this.state.allData.Parkirisca[filtered_parking_places[i].toString()].St_mest}
            invalidi={this.state.allData.Parkirisca[filtered_parking_places[i].toString()].Invalidi_St_mest}
          />
        );
      }
    };
    return displayFilteredParkingPlaces;
  }

  async handleClickOnParkingPlace(number){
    await this.setState({chosen : true});
    await this.setState({parking_place_name: this.state.allData.Parkirisca[number.toString()].Ime});
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

  async handleBack(){
    await this.setState({parking_place : null});
    await this.setState({chosen : false})
  }

  async changeToggleButton1(){
    if(!this.state.list){
      await this.setState({isActiveList : "active"});
      await this.setState({isActiveMap : null});
      return await this.setState({activeTab: "list"});
    }
  }

  async changeToggleButton2(){
    if(!this.state.map){
      await this.setState({isActiveMap : "active"});
      await this.setState({isActiveList : null});
      return await this.setState({activeTab: "map"});
    }
  }

//===========================================================================

  render() {
 //first page 
    var toggleButtonClass1 = ["station"];
      if(this.state.isActiveList === "active") {
        toggleButtonClass1.push('active');
      }

    var toggleButtonClass2 = ["station"];
      if(this.state.isActiveMap === "active") {
        toggleButtonClass2.push('active');
      }


    if(this.state.parking_place){
      return(
        <div id="parkirisce">
          {this.state.parking_place}
          <iframe src="https://www.google.com/maps/embed/v1/place/Parkirna+hi%C5%A1a+Kozolec/@46.0567897,14.5027459,17z/data=!3m1!4b1!4m5!3m4!1s0x4765329ef2f92c19:0xe93b35d4c04299b!8m2!3d46.0567897!4d14.5049346&output=embed" width="100%" height="480"></iframe>
        </div>);
    }
    else{ 
      if(this.state.activeTab === "list"){
        return(
          <div id="parkirisce" className="main-container">
              <div className="page__header">
                 
                  <div className="station-toggle">
                      <div className={toggleButtonClass1.join(' ')} onClick={() => this.changeToggleButton1()}>Parkirišča</div>
                      <div className={toggleButtonClass2.join(' ')} onClick={() => this.changeToggleButton2()}>Zemljevid</div>
                  </div>
                  
                  <h1 className="page__title ui-page-title">Poiščite parkirišče</h1>
                  <input value={this.state.searchValue} onChange={this.handleChange} type="text" className="ui-input ui-input__ondark" placeholder="Vpiši parkirišče..."/>
                  <div className="header__image">
                      <img src="/public/lj-parkirisca/img/i_parking.svg" height="50" alt=""/>
                  </div>
              </div>
              
              <div className="page__content">
                  <h2 className="list-title">Parkirišča</h2>
                  
                  <ul className="ui-list parking-spaces">
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
                 
                  <div className="station-toggle">
                      <div className={toggleButtonClass1.join(' ')} onClick={() => this.changeToggleButton1()}>Parkirišča</div>
                      <div className={toggleButtonClass2.join(' ')} onClick={() => this.changeToggleButton2()}>Zemljevid</div>
                  </div>
                  
                  <h1 className="page__title ui-page-title">Poiščite parkirišče</h1>
                  
                  <div className="header__image">
                      <img src="/public/lj-parkirisca/img/i_parking.svg" height="50" alt=""/>
                  </div><br/>
              </div>
              
              <div className="page__content">
                  <iframe src="https://www.google.com/maps/d/u/2/embed?mid=1xBpXwxQPmg20ERJvzWzU7pkInumwS9ho" width="100%" height="480"></iframe>
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



