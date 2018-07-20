var urlParams = new URLSearchParams(window.location.search);
const URL = 'http://localhost:8000';
var loaded = false;

const USER_ID = urlParams.get('userId');
const CHATFUEL_BOT_ID = urlParams.get('chatfuel_bot_id');
const CHATFUEL_TOKEN = urlParams.get('chatfuel_token');



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

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date : "",
      month : "",
      year : ""
    }
    this.handleChangeDate = this.handleChangeDate.bind(this);
    this.handleChangeMonth = this.handleChangeMonth.bind(this);
    this.handleChangeYear = this.handleChangeYear.bind(this);
  }

  handleChangeDate (event) {
    this.setState({date: event.target.value});
  }

  handleChangeMonth(event){
    this.setState({month: event.target.value});
  }

  handleChangeYear (event) {
    this.setState({year: event.target.value});
  }

  //sending data to server

  sendData(data){
    var temp_month;
    if(this.state.month > 9){
      temp_month = this.state.month;
    }else{
      temp_month = '0' + this.state.month;
    }

    var temp_date;
    if(this.state.date > 9){
      temp_date = this.state.date;
    }else{
      temp_date = '0' + this.state.date;
    }
    var date = this.state.year + "-" + temp_month + "-" + temp_date + "T15:11:00.000Z"

    var data = {
      messenger_id: USER_ID,
      chatfuel_bot_id: CHATFUEL_BOT_ID,
      chatfuel_token: CHATFUEL_TOKEN,
      first_name: "Rok",
      last_name: "Keglevič",
      arrival_location: "Ljubljana",
      date_of_arrival: date,
      timezone: 2,
      block_name: "Timetest",
      language: "ENG"
    }

    axios.post( URL + '/schedule/arrivalSchedules', data)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render() {
    return (
      <div>
        Hello, please input date of arrival<br/>
        Day:   
        <input type="text" value={this.state.date} onChange={this.handleChangeDate}/><br/>
        Month:   
        <input type="text" value={this.state.month} onChange={this.handleChangeMonth}/><br/>
        Year:   
        <input type="text" value={this.state.year} onChange={this.handleChangeYear}/><br/>
        <button onClick={() => this.sendData()}>Submit</button>
      </div>
    );
  }
}

ReactDOM.render(
  <Calendar />,
  document.getElementById('app')
);