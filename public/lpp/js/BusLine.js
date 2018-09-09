class BusLine extends React.Component {
  constructor(props) {
    super(props);

  } 

  render() {

    return (
      <div onClick={() => this.props.clicked(this.props.numberInArray)}>
        {this.props.line}  {this.props.direction1} - {this.props.direction2}
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);