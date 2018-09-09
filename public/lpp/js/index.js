var loaded = false;

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

/*
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






class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue : ""
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
            clicked={(number) => this.handleClick(number)}
            numberInArray={filtered_lines[i]}
            line={BUSES[filtered_lines[i]][0]}
            direction1={BUSES[filtered_lines[i]][1]}
            direction2={BUSES[filtered_lines[i]][2]}
          />
      );
    };
    return displayFilteredBuses;
  }

//================================================================================

  handleChange(event) {
    this.setState({searchValue: event.target.value});
  }

  handleClick(number){
    console.log("Clicked number " + number);
  }

  render() {
    
    return (
      <div>
        Prosimo poiščite ali izberite linijo!
        <input type="text" value={this.state.searchValue} onChange={this.handleChange} />

        { this.checkSearch(this.state.searchValue.toLowerCase()) }
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);



