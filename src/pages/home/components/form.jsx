import styles from "./index.module.css";
import { Input, Button } from 'semantic-ui-react'

function LoginForm(props) {
    function onClickLogin (){
        console.log('nicky')
        const { onTapLogin } = props;
        onTapLogin();
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
          />
          <Input 
            icon='keyboard outline' 
            iconPosition='left' 
            placeholder='密码' 
            type='password'
            className={styles.password}
          />
          <div className={styles.buttonWrap}>
            <Button color='teal' onClick={onClickLogin}>登录</Button>
            <Button color='grey'>注册</Button>
          </div>
      </div>
    );
}

export default LoginForm;