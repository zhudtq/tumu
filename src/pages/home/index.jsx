import "./index.css";
import React from 'react';
import {withRouter} from 'react-router-dom';
import LoginForm from './components/form';
import dataPic from './dataPic.jpeg';

class HomeClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  gotoConfig = () => {
    this.props.history.push('/config')
  }

  checkUserInfo = new Promise(res => {
    console.log('res')
  }, rej => {
    console.log('rej')
  })

  onTapLogin = (userInfo)=>{
    console.log('nicky check', this.checkUserInfo)
    this.checkUserInfo(userInfo).then()
    // this.gotoConfig()
  }

  render() {
    return (
      <div className="container flex">
        <div className="box-container flex">
          <div className="display-pic flex">
            <img src={dataPic} className="dataImg"/>
          </div>
          <div className="form-wrap flex">
            <LoginForm onTapLogin={this.onTapLogin} />
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(HomeClass);