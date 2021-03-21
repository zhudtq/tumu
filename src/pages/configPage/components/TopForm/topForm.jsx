import styles from "./index.module.css";
import React from 'react';

class topForm extends React.Component {
    reset = () => {
      document.getElementById('aSpeed').value = '';
      document.getElementById('aStick').value = '';
      document.getElementById('aMidu').value = '';
      document.getElementById('aHoudu').value = '';
    }

    render() {
      return (
        <div className={styles.container}>
            <div className={styles.title}>
              工作环境参数设置
            </div>
            <div className={styles.lineWrap}>
                  <div className={styles.formUnit}>
                    <label className={styles.label1}>过滤风速</label>
                    <input id='aSpeed' className={styles.input} placeholder='' />
                    <text className={styles.unit}>m/min</text>
                  </div>
                  <div className={styles.formUnit}>
                    <label className={styles.label}>流体动力粘度</label>
                    <input id='aStick' className={styles.input} placeholder='' />
                    <text className={styles.unit}>Pa*s</text>
                  </div>
              </div>
              <div className={styles.lineWrap}>
                  <div className={styles.formUnit}>
                    <label className={styles.label1}>流体密度p</label>
                    <input id='aMidu' className={styles.input} placeholder='' />
                    <text className={styles.unit}>kg/m3</text>
                  </div>
                  <div className={styles.formUnit}>
                    <label className={styles.label}>过滤介质厚度D</label>
                    <input id='aHoudu' className={styles.input} placeholder='' />
                    <text className={styles.unit}>m</text>
                  </div>
              </div>
        </div>
      );
    }
}

export default topForm;