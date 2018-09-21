class Station extends React.Component {
  constructor(props) {
    super(props);
  } 

  render() {
    if(this.props.chosen){
      return(
        <div onClick={() => this.props.handleClickOnStation(this.props.number)} id="parkirisce">
          <strong>{this.props.name}:</strong><br/> 
          Prosto: {this.props.free}/{this.props.allSpaces}<br/>
          <hr/>
        </div>
      );
    }
    else{
      return(
        <div onClick={() => this.props.handleClickOnStation(this.props.number)} id="parkirisce">
          <br/><strong>{this.props.name} </strong><br/>
          - Prosta kolesa: {this.props.free}<br/>
          - Proste postaje: {(this.props.allSpaces - this.props.free)}<br/>
          <br/><hr/>
        </div>
      );      
    }
  
  }
}