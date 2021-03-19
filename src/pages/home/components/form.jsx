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
          <div className={styles.title}>
            新型微孔膜滤板选型设计
          </div>
          <input 
            placeholder='账号' 
            className={styles.account}
            onChange={onAccChange}
          />
          <input 
            placeholder='密码' 
            type='password'
            className={styles.password}
            onChange={onPassChange}
          />
          <div className={styles.buttonWrap}>
            <button color='teal' onClick={onClickLogin}>登录</button>
          </div>
      </div>
    );
}

export default LoginForm;