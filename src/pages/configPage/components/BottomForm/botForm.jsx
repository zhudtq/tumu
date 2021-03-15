import styles from "./index.module.css";

function BotForm(props) {
  let userName;
  let password;

    function onAccChange(e) {
      userName = e && e.target?.value;
    }

    function onCalc() {
      alert('还没做，界面也没有细调，先给你看下，可以了就开始正式做，很快就完事')
    }

    return (
      <div className={styles.container}>
        <div>初始参数设置</div>
          <div className={styles.lineWrap1}>
                <div className={styles.formUnit}>
                  <label>过滤风速</label>
                  <input className={styles.input} fluid placeholder='' />
                  <text className={styles.unit}>m/min</text>
                </div>
                <div className={styles.formUnit}>
                  <label>流体动力粘度</label>
                  <select >
                        <option value="1200">1200</option>
                        <option value="1400">1400</option>
                        <option value="1600">1600</option>
                        <option value="1800">1800</option>
                  </select>
                  <text className={styles.unit}>Fa*s</text>
                </div>
            </div>
            <div className={styles.lineWrap2}>
              <button onClick={onCalc} positive>计算</button>
              <button negative>重置</button>
            </div>
      </div>
    );
}

export default BotForm;