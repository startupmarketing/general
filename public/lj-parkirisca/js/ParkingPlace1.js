class ParkingPlace1 extends React.Component {
  constructor(props) {
    super(props);
  } 

  render() {
    return(
      <div onClick={() => this.props.handleClickOnParkingPlace(this.props.number)} id="parkirisce">
        <strong>{this.props.name}:</strong><br/> 
        - Cena: {this.props.price}
        <br/>
        - Prosto: {this.props.free}/{this.props.allSpaces}<br/>
        - Invalidi: {this.props.invalidi}
        <br/><hr/>
      </div>
    );
  }
}