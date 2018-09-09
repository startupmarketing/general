class Station extends React.Component {
  constructor(props) {
    super(props);

  } 

  render() {

    return (
      <div onClick={() => this.props.clicked(this.props.numberInArray)}>
        {this.props.nameOfStation}
      </div>
    );
  }
}