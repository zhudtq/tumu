import styles from "./index.module.css";

function LoginForm(props, that) {
  let userName;
  let password;
    function onClickLogin (){
        const { onTapLogin } = props;
        let userInfo = {
          userName,
          password
        }
        console.log('nicky userinfo', userInfo)
        if (userName == 'admain' && password == 'admain') {
          onTapLogin(true);
        }
        else {
          onTapLogin(false);
          document.getElementById('account').value = '';
          document.getElementById('password').value = '';
        }
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
          <div className={styles.title}>
            新型微孔膜滤板系列化及选型设计
          </div>
          <input 
            placeholder='账号'
            className={styles.account}
            id='account'
            onChange={(e)=>{onAccChange(e)}}
          />
          <input 
            placeholder='密码' 
            type='password'
            id='password'
            className={styles.password}
            onChange={(e)=>{onPassChange(e)}}
          />
          <div className={styles.buttonWrap}>
            <button color='teal' onClick={onClickLogin}>登录</button>
          </div>
      </div>
    );
}

export default LoginForm;