import "./index.css";
import React from 'react';
import {withRouter} from 'react-router-dom';
import LoginForm from './components/form';
import dataPic from '../dataPic.jpeg';

class HomeClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showModal: 'hideModal'};
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
        this.setState({
          showModal: 'modal'
        })
      }
    )
  }

  closeModal = () => {
    this.setState({
      showModal: 'hideModal'
    })
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

        <div className={`${this.state.showModal}`}>
          <div className='modal-content flex'>
            <div className='modal-text'>
              密码错误
            </div>
            <button onClick={this.closeModal}>
              确定
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(HomeClass);