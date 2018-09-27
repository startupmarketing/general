class Station extends React.Component {
  constructor(props) {
    super(props);
  } 

  render() {
    var name = this.props.name.split('-').join(' - ');
    if(this.props.chosen){
      window.scrollTo(0, 0);
      return(
        <div>
          <div className="page__header">
              <div className="ui-back"><img onClick={() => this.props.handleBack()} src="/public/bicikelj/img/i_arrow-back.svg" height="24" width="24" alt=""/></div>

              <h1 className="page__title ui-page-title title-bicycle">{name}</h1>
              

              <div className="header__image">
                  <img src="/public/bicikelj/img/i_bicikelj.png" height="50" alt=""/>
              </div>
          </div>

          <div className="page__content">
              <h2 className="list-title">Trenutno stanje</h2>
              
              <ul className="ui-list">
                  <li>Prosta kolesa: <strong>{this.props.free}</strong></li>
                  <li>Proste postaje: <strong>{(this.props.allSpaces - this.props.free)}</strong></li>
              </ul>
              
              <h2 className="list-title">Zemljevid</h2>

          </div>
        </div>
      );
    }
    else{
      if(this.props.free < 5){
        return(
          <li onClick={() => this.props.handleClickOnStation(this.props.number)}>
            <div className="parking-name">{name}</div>
            <div className="available">
              <img src="/public/bicikelj/img/i_tree2.svg" alt="" height="20"/>
              <div className="col"><span className="available-label">Prosta kolesa:</span><span className="available-value value-alert">{this.props.free}</span></div>
              <div className="col"><span className="available-label">Proste postaje:</span><span className="available-value">{(this.props.allSpaces - this.props.free)}</span></div>
            </div>
          </li>
        );
      }
      else if((this.props.allSpaces - this.props.free)<5){
        return(
            <li onClick={() => this.props.handleClickOnStation(this.props.number)}>
                <div className="parking-name">{name}</div>
                <div className="available">
                    <img src="/public/bicikelj/img/i_tree2.svg" alt="" height="20"/>
                    <div className="col"><span className="available-label">Prosta kolesa:</span><span className="available-value">{this.props.free}</span></div>
                    <div className="col"><span className="available-label">Proste postaje:</span><span className="available-value value-alert">{(this.props.allSpaces - this.props.free)}</span></div>
                </div>
            </li>
        );
      }
      else{
        return(
          <li onClick={() => this.props.handleClickOnStation(this.props.number)} id="parkirisce">
            <div className="parking-name">{name}</div>
            <div className="available">
              <img src="/public/bicikelj/img/i_tree2.svg" alt="" height="20"/>
              <div className="col"><span className="available-label">Prosta kolesa:</span><span className="available-value">{this.props.free}</span></div>
              <div className="col"><span className="available-label">Proste postaje:</span><span className="available-value">{(this.props.allSpaces - this.props.free)}</span></div>
            </div>
          </li>
        );    
      }  
    }
  
  }
}