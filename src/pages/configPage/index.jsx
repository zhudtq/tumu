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
    this.arr = ['滤板型号', 'L(mm)', 'S3/L1', 'S2/L', '过滤面积(m2)','处理风量(m3/h)'];
    this.selectedItem = {};
    this.state = {
      showModal: 'hideModal',
      dataStack: this.dataTable['a1200'],
      showData: 'block'
    };
  }

  onCalcData = (data) => {
    console.log('nicky 页面接收到了', data, this.dataTable)
    this.setState({
      dataStack: this.dataTable[data],
      selectedIndex: -1,
      selectedItem: null
    })
    console.log('nicky datastack', this.state.dataStack);
  }

  onConfirm = () => {
    if (+this.state.selectedIndex >= 0) {
      this.props.history.push('/result')
    }
    else {
      alert('你还没有选择哦')
    }
  }

  onReturnBack = () => {
    this.props.history.goBack()
  }

  onSelectItem = (i) => {
    console.log('nicky e', i)
    this.setState({
      selectedIndex: i,
      selectedItem: this.state.dataStack[i]
    }, () => {
      console.log('选中的是, ', this.state.selectedItem, this.state.selectedIndex)
    })
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
                  {this.state.dataStack?.length && this.state.dataStack.map((sta, i) => {
                    return <div onClick={()=>{this.onSelectItem(i)}} key={i} className={`${styles.line} ${styles.highLight} ${this.state.selectedIndex==i?styles.selected:''}`}>
                      <div className={styles.item}>{sta.type}</div>
                      <div className={styles.item}>{sta.l}</div>
                      <div className={styles.item}>{sta.s3l1}</div>
                      <div className={styles.item}>{sta.s2l}</div>
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

