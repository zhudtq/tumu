import styles from "./index.module.css";
import dataPic from '../dataPic.jpeg';
import React from 'react';
import TopForm from './components/TopForm/topForm.jsx';
import BotForm from './components/BottomForm/botForm.jsx';
import dataTableImport from '../data';
import {withRouter} from 'react-router-dom';

class ConfigPage extends React.Component {
  constructor(props) {
    super(props);
    this.dataTable = dataTableImport;
    this.arr = ['滤板型号L', 'L', 'L1', 'S3/L1', 'S2/L', 'S2/L3', '过滤面积','平均风量'];
    this.state = {
      showModal: 'hideModal',
      dataStack: this.dataTable['a1200']
    };
  }
  
  onClickJump = () => {
    // this.props.history.push('/result')
    // alert('还没做')
  }

  onCalcData = (data) => {
    console.log('nicky 页面接收到了', data, this.dataTable)
    // this.dataStack = this.dataTable[data];
    this.setState({
      dataStack: this.dataTable[data]
    })
    console.log('nicky datastack', this.state.dataStack);
  }

  onConfirm = () => {
    this.props.history.push('/result')
    console.log('nicky history', this.props.history)
  }

  onReturnBack = () => {
    this.props.history.goBack()
  }

  render() {
    return (
      <div className={`${styles.container} flex`}>
        <div className={`${styles.content}`}>
          <div className={`${styles.title}`}>
          <div>
            新型微孔膜滤板选型设计
          </div>
          </div>
          <div className={`${styles.configWrap} flex`}>
            <img src={dataPic} className={styles.configPic} />
            <div className={styles.configDetail}>
              <TopForm />
              <BotForm onCalcData={this.onCalcData} />
            </div>
          </div>
          <div className={`${styles.dataWrap}`}>
            {/* 生成的数据 */}
            <div className={styles.tableWrap}>
                <div className={styles.line}>
                    {this.arr.map((item, index) => {
                        return <div className={styles.item} key={index}>{item}</div>
                    })}
                </div>
                <div>
                  {this.state.dataStack.map((sta, i) => {
                    return <div key={i} className={`${styles.line} ${styles.highLight}`}>
                      <div className={styles.item}>{sta.type}</div>
                      <div className={styles.item}>{sta.l}</div>
                      <div className={styles.item}>{sta.l1}</div>
                      <div className={styles.item}>{sta.s3l1}</div>
                      <div className={styles.item}>{sta.s2l}</div>
                      <div className={styles.item}>{sta.s2s3}</div>
                      <div className={styles.item}>{sta.s}</div>
                      <div className={styles.item}>{sta.average}</div>
                    </div>
                  })}
                </div>
            </div>
  
          </div>
          <div className={`${styles.buttonWrap}`}>

            <button onClick={this.onConfirm} className={styles.confirmBtn}>确定</button>
            <button onClick={this.onReturnBack}>返回</button>

          </div>
        </div>
      </div>
    );
  }

}

export default withRouter(ConfigPage)

