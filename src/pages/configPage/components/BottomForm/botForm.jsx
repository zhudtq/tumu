import styles from "./index.module.css";
import React from 'react';

class BotForm extends React.Component {
  constructor(props) {
    super(props);
    const { onCalcData } = props;
    this.onCalcData = onCalcData;
    this.state = {
      options: [
        {key: 'a1200', value: 1200},
        {key: 'a1400', value: 1400},
        {key: 'a1600', value: 1600},
        {key: 'a1800', value: 1800},
        {key: 'a2000', value: 2000}
      ],
      option: {key:'a1200', value:1200}
    }
  }

    onCalc = ()=>{
      // console.log('nicky 当前的粘度是:', this.state.option.value)
      this.onCalcData(this.state.option.key)
    }

    getSelectedValue = (e) => {
      const value = e.target.value;
      const item = this.state.options.find((i) => {
        return i.key == value
      })
      this.setState({
        option: item
      })
    }

    render() {
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
                    <select value={this.state.option} onChange={this.getSelectedValue}>
                      {this.state.options.map((item, index) => {
                        return <option value={item.key} key={index}>{item.value}</option>
                      })}
                    </select>
                    <text className={styles.unit}>Fa*s</text>
                  </div>
              </div>
              <div className={styles.lineWrap2}>
                <button onClick={this.onCalc} positive>计算</button>
                <button negative>重置</button>
              </div>
        </div>
      );
    }
}

export default BotForm;