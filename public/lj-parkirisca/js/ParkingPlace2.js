class ParkingPlace2 extends React.Component {
  constructor(props) {
    super(props);

  } 

  render() {
    if(this.props.chosen === false){
        if(this.props.invalidi === 0 || this.props.invalidi === null){
            return(
              <li onClick={() => this.props.handleClickOnParkingPlace(this.props.number)}>
                
                  <div className="parking-name">{this.props.name}</div>
                  <div className="available">
                    <div className="col"><span className="available-label"></span><span className="available-value"></span></div>
                    <div className="col"><span className="available-label"><strong>Št. mest</strong></span><span className="available-value">{this.props.allSpaces}</span></div>
                  </div> 
                
              </li>
            );    
        }else{
          return(
              <li onClick={() => this.props.handleClickOnParkingPlace(this.props.number)}>
                
                  <div className="parking-name">{this.props.name}</div>
                  <div className="available">
                    <div className="col"><span className="available-label"><img src="/public/lj-parkirisca/img/i_invalidi.svg" height="18" alt=""/></span><span className="available-value">{this.props.invalidi}</span></div>
                    <div className="col"><span className="available-label"><strong>Št. mest</strong></span><span className="available-value">{this.props.allSpaces}</span></div>
                  </div> 
                
              </li>
          );
        }
    }
    else if(this.props.chosen){
      window.scrollTo(0, 0);
      if((this.props.invalidi !== null) && (this.props.priceNight !== null)){
        return(
          <div id="parkirisce">
            <div className="page__header">
              <h1 className="page__title ui-page-title title-parking">Parkirišče <strong>{this.props.name}</strong></h1>
              
              <div onClick={() => this.props.handleBack()} className="ui-back"><img src="/public/lj-parkirisca/img/i_arrow-back.svg" height="24" width="24" alt=""/></div>

             
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
                
                <h2 className="list-title">Število parkirišč</h2>
                
                <ul className="ui-list">
                    <li><strong>{this.props.allSpaces}</strong></li>
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
      else if((this.props.invalidi !== null) && (this.props.priceNight === null)){
        return(
          <div id="parkirisce">
            <div className="page__header">
              <h1 className="page__title ui-page-title title-parking">Parkirišče <strong>{this.props.name}</strong></h1>
              
              <div onClick={() => this.props.handleBack()} className="ui-back"><img src="/public/lj-parkirisca/img/i_arrow-back.svg" height="24" width="24" alt=""/></div>

             
              <div className="header__image">
                  <img src="/public/lj-parkirisca/img/i_parking.svg" height="50" alt=""/>
              </div>
            </div>

            <div className="page__content">
                <h2 className="list-title">Cena</h2>
                
                <ul className="ui-list">
                    <li>{this.props.priceDay}</li>
                </ul>
                
                <h2 className="list-title">Število parkirišč</h2>
                
                <ul className="ui-list">
                    <li><strong>{this.props.allSpaces}</strong></li>
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
      else if((this.props.invalidi === null) && this.props.priceNight === null){
        return(
          <div id="parkirisce">
            <div className="page__header">
              <h1 className="page__title ui-page-title title-parking">Parkirišče <strong>{this.props.name}</strong></h1>
              
              <div onClick={() => this.props.handleBack()} className="ui-back"><img src="/public/lj-parkirisca/img/i_arrow-back.svg" height="24" width="24" alt=""/></div>

             
              <div className="header__image">
                  <img src="/public/lj-parkirisca/img/i_parking.svg" height="50" alt=""/>
              </div>
            </div>

            <div className="page__content">
                <h2 className="list-title">Cena</h2>
                
                <ul className="ui-list">
                    <li>{this.props.priceDay}</li>
                </ul>
                
                <h2 className="list-title">Število parkirišč</h2>
                
                <ul className="ui-list">
                    <li><strong>{this.props.allSpaces}</strong></li>
                </ul>
                
                <h2 className="list-title">Zemljevid</h2>
            </div>
          </div>
        );         
      }
      else{
        return(
          <div id="parkirisce">
            <div className="page__header">
              <h1 className="page__title ui-page-title title-parking">Parkirišče <strong>{this.props.name}</strong></h1>
              
              <div onClick={() => this.props.handleBack()} className="ui-back"><img src="/public/lj-parkirisca/img/i_arrow-back.svg" height="24" width="24" alt=""/></div>

             
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
                
                <h2 className="list-title">Število parkirišč</h2>
                
                <ul className="ui-list">
                    <li><strong>{this.props.allSpaces}</strong></li>
                </ul>
                
                <h2 className="list-title">Zemljevid</h2>
            </div>
          </div>
        );         
      }
    }
  }
}