class Station extends React.Component {
  constructor(props) {
    super(props);

  } 

  render() {
    if((this.props.numberInArray === 0) || (this.props.lastStation)){
      return (
        <div onClick={() => this.props.clicked(this.props.numberInArray)}>
            <li>{this.props.nameOfStation}</li>      
        </div>
      );
    }else{
      return (
        <div onClick={() => this.props.clicked(this.props.numberInArray)}>
            <li><img src="/public/lpp/images/i_tree.svg" height="18" alt="" className="icon-tree"/>{this.props.nameOfStation}</li>      
        </div>
      );
    }
  }
}