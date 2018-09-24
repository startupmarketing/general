class ParkingPlace1 extends React.Component {
  constructor(props) {
    super(props);
  } 

  render() {
    if(this.props.chosen){
      if(this.props.invalidi && this.props.priceNight){
        return(
          <div id="parkirisce">
            <div className="page__header">
              <h1 className="page__title ui-page-title title-parking">Parkirišče <strong>{this.props.name}</strong></h1>
              
              <div className="ui-back"><img onClick={() => this.props.handleBack()} src="/public/lj-parkirisca/img/i_arrow-back.svg" height="24" width="24" alt=""/></div>
        
              <div className="header__image">
                  <img src="/public/lj-parkirisca/img/i_parking.svg" height="50" alt=""/>
              </div>
            </div>

            <div className="page__content">
              <h2 className="list-title">Cena</h2>
              
              <ul className="ui-list">
                  <li>{this.props.priceDay}</li>
                  <li>{this.props.priceNight}</li>
              </ul>
              
              <h2 className="list-title">Prosto</h2>
              
              <ul className="ui-list">
                  <li><strong>{this.props.free}</strong> / {this.props.allSpaces}</li>
              </ul>
              
              <h2 className="list-title">Invalidi</h2>
              
                <ul className="ui-list">
                    <li>{this.props.invalidi}</li>
                </ul>
              
              <h2 className="list-title">Zemljevid</h2>

            </div>
          </div>
        );
      }
      else if(this.props.invalidi && !this.props.priceNight){
        return(
          <div id="parkirisce">
            <div className="page__header">
              <h1 className="page__title ui-page-title title-parking">Parkirišče <strong>{this.props.name}</strong></h1>
              
              <div className="ui-back"><img onClick={() => this.props.handleBack()} src="/public/lj-parkirisca/img/i_arrow-back.svg" height="24" width="24" alt=""/></div>
        
              <div className="header__image">
                  <img src="/public/lj-parkirisca/img/i_parking.svg" height="50" alt=""/>
              </div>
            </div>

            <div className="page__content">
              <h2 className="list-title">Cena</h2>
              
              <ul className="ui-list">
                  <li>{this.props.priceDay}</li>
              </ul>
              
              <h2 className="list-title">Prosto</h2>
              
              <ul className="ui-list">
                  <li><strong>{this.props.free}</strong> / {this.props.allSpaces}</li>
              </ul>
              
              <h2 className="list-title">Invalidi</h2>
              
                <ul className="ui-list">
                    <li>{this.props.invalidi}</li>
                </ul>
              
              <h2 className="list-title">Zemljevid</h2>

            </div>
          </div>
        );
      }
      else if(!this.props.invalidi && this.props.priceNight){
        return(
          <div id="parkirisce">
            <div className="page__header">
              <h1 className="page__title ui-page-title title-parking">Parkirišče <strong>{this.props.name}</strong></h1>
              
              <div className="ui-back"><img onClick={() => this.props.handleBack()} src="/public/lj-parkirisca/img/i_arrow-back.svg" height="24" width="24" alt=""/></div>
        
              <div className="header__image">
                  <img src="/public/lj-parkirisca/img/i_parking.svg" height="50" alt=""/>
              </div>
            </div>

            <div className="page__content">
              <h2 className="list-title">Cena</h2>
              
              <ul className="ui-list">
                  <li>{this.props.priceDay}</li>
                  <li>{this.props.priceNight}</li>
              </ul>
              
              <h2 className="list-title">Prosto</h2>
              
              <ul className="ui-list">
                  <li><strong>{this.props.free}</strong> / {this.props.allSpaces}</li>
              </ul>
              
              <h2 className="list-title">Zemljevid</h2>

            </div>
          </div>
        );
      }
      else if(!this.props.invalidi && !this.props.priceNight){
        return(
          <div id="parkirisce">
            <div className="page__header">
              <h1 className="page__title ui-page-title title-parking">Parkirišče <strong>{this.props.name}</strong></h1>
              
              <div className="ui-back"><img onClick={() => this.props.handleBack()} src="/public/lj-parkirisca/img/i_arrow-back.svg" height="24" width="24" alt=""/></div>
        
              <div className="header__image">
                  <img src="/public/lj-parkirisca/img/i_parking.svg" height="50" alt=""/>
              </div>
            </div>

            <div className="page__content">
              <h2 className="list-title">Cena</h2>
              
              <ul className="ui-list">
                  <li>{this.props.priceDay}</li>
              </ul>
              
              <h2 className="list-title">Prosto</h2>
              
              <ul className="ui-list">
                  <li><strong>{this.props.free}</strong> / {this.props.allSpaces}</li>
              </ul>
              
              <h2 className="list-title">Zemljevid</h2>

            </div>
          </div>
        );
      }
    }

    else if(this.props.chosen === false){
        if(this.props.free < 5 && (this.props.invalidi === 0 || this.props.invalidi === null)){
          return(
            <li onClick={() => this.props.handleClickOnParkingPlace(this.props.number)}>
              
                <div className="parking-name">{this.props.name}</div>
                <div className="available">
                  <div className="col"><span className="available-label"></span><span className="available-value"></span></div>
                  <div className="col"><span className="available-label">Prosto</span><span className="available-value value-alert">{this.props.free}</span></div>
                </div> 
              
            </li>
          );
        }
        else if(this.props.invalidi === 0 || this.props.invalidi === null){
          return(
            <li onClick={() => this.props.handleClickOnParkingPlace(this.props.number)}>
              
                <div className="parking-name">{this.props.name}</div>
                <div className="available">
                  <div className="col"><span className="available-label"></span><span className="available-value"></span></div>
                  <div className="col"><span className="available-label">Prosto</span><span className="available-value">{this.props.free}</span></div>
                </div> 
              
            </li>
          );
        }
        else if(this.props.free < 5){
          return(
            <li onClick={() => this.props.handleClickOnParkingPlace(this.props.number)}>
              
                <div className="parking-name">{this.props.name}</div>
                <div className="available">
                  <div className="col"><span className="available-label"><img src="/public/lj-parkirisca/img/i_invalidi.svg" height="18" alt=""/></span><span className="available-value">{this.props.invalidi}</span></div>
                  <div className="col"><span className="available-label">Prosto</span><span className="available-value value-alert">{this.props.free}</span></div>
                </div> 
              
            </li>
          );
        }
        else{
          return(
            <li onClick={() => this.props.handleClickOnParkingPlace(this.props.number)}>
              
                <div className="parking-name">{this.props.name}</div>
                <div className="available">
                  <div className="col"><span className="available-label"><img src="/public/lj-parkirisca/img/i_invalidi.svg" height="18" alt=""/></span><span className="available-value">{this.props.invalidi}</span></div>
                  <div className="col"><span className="available-label">Prosto</span><span className="available-value">{this.props.free}</span></div>
                </div> 
              
            </li>
          );
        }
    }
  }
}