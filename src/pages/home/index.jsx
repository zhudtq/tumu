import "./index.css";
import React from 'react';
import {withRouter} from 'react-router-dom'

class HomeClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  clickMe = ()=>{
    this.props.history.push('/config')
    console.log('nicky props', this)
  }

  render() {
    return (
      <div className="container">
        <div className="header">首页</div>
        <div className="body">
          <button onClick={this.clickMe}>点击我哦</button>
          <div className="link">
            链接
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(HomeClass);