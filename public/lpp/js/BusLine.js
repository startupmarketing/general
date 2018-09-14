class BusLine extends React.Component {
  constructor(props) {
    super(props);

  } 

  render() {

    return (
      <div onClick={() => this.props.clicked(this.props.numberInArray)}>
        <li><span className="bus-num">{this.props.line}</span> {this.props.direction1} - {this.props.direction2}</li>
      </div>
    );
  }
}
