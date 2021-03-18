import styles from "./index.module.css";

function topForm(props, that) {
  let userName;
  let password;

    function onAccChange(e) {
      userName = e && e.target?.value;
    }

    function onPassChange(e) {
      password = e && e.target?.value;
    }

    return (
      <div className={styles.container}>
          <div className={styles.title}>
            工作环境参数设置
          </div>
          <div className={styles.lineWrap}>
                <div className={styles.formUnit}>
                  <label>过滤风速</label>
                  <input className={styles.input} placeholder='' />
                  <text className={styles.unit}>m/min</text>
                </div>
                <div className={styles.formUnit}>
                  <label>流体动力粘度</label>
                  <input className={styles.input} placeholder='' />
                  <text className={styles.unit}>Pa*s</text>
                </div>
            </div>
            <div className={styles.lineWrap}>
                <div className={styles.formUnit}>
                  <label>流体密度p</label>
                  <input className={styles.input} placeholder='' />
                  <text className={styles.unit}>kg/m3</text>
                </div>
                <div className={styles.formUnit}>
                  <label>过滤介质厚度D</label>
                  <input className={styles.input} placeholder='' />
                  <text className={styles.unit}>m</text>
                </div>
            </div>
      </div>
    );
}

export default topForm;