import styles from "./index.module.css";
import React from 'react';

class BotForm extends React.Component {
  constructor(props) {
    super(props);
    const { onCalcData, reset } = props;
    this.onCalcData = onCalcData;
    this.onReset = reset;
    this.fengliang = ''
    this.state = {
      options: [
        {key: 'a1200', value: 1200},
        {key: 'a1400', value: 1400},
        {key: 'a1600', value: 1600},
        {key: 'a1800', value: 1800},
        {key: 'a2000', value: 2000}
      ],
      option: 'a1200'
    }
  }

    onCalc = ()=>{
      this.fengliang = document.getElementById('fengliang').value
      if (!this.fengliang) {
        return
      }
      this.onCalcData(this.state.option, this.fengliang)
      console.log('nicky 当前的粘度是:', this.state.option, '风量', this.fengliang)
    }

    reset = () => {
      document.getElementById('fengliang').value = '';
      this.onReset()
    }

    getSelectedValue = (e) => {
      const value = e.target.value;
      const item = this.state.options.find((i) => {
        return i.key == value
      })
      console.log('当前切换的是', item)
      this.setState({
        option: item.key
      }, () => {
        console.log('当前option是', this.state.option)
      })
    }

    render() {
      return (
        <div className={styles.container}>
          <div>初始参数设置</div>
            <div className={styles.lineWrap1}>
                  <div className={styles.formUnit}>
                    <label>风量Q</label>
                    <input id='fengliang' className={styles.input} placeholder='' />
                    <text className={styles.unit}>m3/h</text>
                  </div>
                  <div className={styles.formUnit}>
                    <label>滤板长度L</label>
                    <select onChange={this.getSelectedValue}>
                      {this.state.options.map((item, index) => {
                        return <option value={item.key} key={index}>{item.value}</option>
                      })}
                    </select>
                    <text className={styles.unit}>mm</text>
                  </div>
              </div>
              <div className={styles.lineWrap2}>
                <button onClick={this.onCalc} positive>计算</button>
                <button onClick={this.reset} negative>重置</button>
              </div>
        </div>
      );
    }
}

export default BotForm;