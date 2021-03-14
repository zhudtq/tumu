import "./index.css";
import React from 'react';
import {withRouter} from 'react-router-dom';
import LoginForm from './components/form';
import ModalExampleBasic from './modal/index';
import dataPic from '../dataPic.jpeg';
import { Button, Header, Icon, Modal } from 'semantic-ui-react';

class HomeClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  gotoConfig = () => {
    this.props.history.push('/config')
  }

  checkUserInfo = (userInfo) => {
    return new Promise((res, rej) => {
      const { userName='', password='' } = userInfo;
      if (userName !== 'admain' || password !=='admain') {
        rej();
      }
      res();
    })
  }

  onTapLogin = (userInfo)=>{
    console.log('nicky check', userInfo)
    this.checkUserInfo(userInfo).then(
      () => {
        console.warn('登录成功')
        this.gotoConfig()
      }
    ).catch(
      () => {
        console.warn('用户名错误')
      }
    )
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

        <div className='modal flex'>
          <div className='modal-content'>
            按钮
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(HomeClass);