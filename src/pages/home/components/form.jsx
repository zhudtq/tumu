import styles from "./index.module.css";
import { Input, Button } from 'semantic-ui-react'

function LoginForm(props, that) {
  let userName;
  let password;
    function onClickLogin (){
        const { onTapLogin } = props;
        let userInfo = {
          userName,
          password
        }
        onTapLogin(userInfo);
    }

    function onAccChange(e) {
      userName = e && e.target?.value;
    }

    function onPassChange(e) {
      password = e && e.target?.value;
    }

    return (
      <div className={styles.container}>
          <div className={styles.avatarImg}>
          </div>
          <Input 
            icon='user outline' 
            iconPosition='left' 
            placeholder='账号' 
            className={styles.account}
            onChange={onAccChange}
          />
          <Input 
            icon='keyboard outline' 
            iconPosition='left' 
            placeholder='密码' 
            type='password'
            className={styles.password}
            onChange={onPassChange}
          />
          <div className={styles.buttonWrap}>
            <Button color='teal' onClick={onClickLogin}>登录</Button>
            <Button color='grey'>注册</Button>
          </div>
      </div>
    );
}

export default LoginForm;