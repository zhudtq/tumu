import "./index.css";
import React from 'react';
import {withRouter} from 'react-router-dom';
import LoginForm from './components/form';

class HomeClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  gotoConfig = () => {
    this.props.history.push('/config')
  }

  onTapLogin = ()=>{
    console.log('nicky 父组件跳转啦');
    this.gotoConfig()
  }

  render() {
    return (
      <div className="container flex">
        <div className="box-container flex">
          <div className="display-pic">
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