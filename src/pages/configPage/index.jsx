import styles from "./index.module.css";
import dataPic from '../dataPic.jpeg';
import TopForm from './components/TopForm/topForm.jsx';
import BotForm from './components/BottomForm/botForm.jsx';
import Table from './components/Table/index.jsx';
import dataTableImport from '../data';

export function ConfigPage(props) {
  let dataTable = dataTableImport
  function onClickJump() {
    // this.props.history.push('/result')
    // alert('还没做')
  }

  function onCalcData(data) {
    console.log('nicky 页面接收到了', data, dataTable)
    const dataStack = dataTable[data];
    console.log('nicky datastack', dataStack);
  }

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
            <BotForm onCalcData={onCalcData} />
          </div>
        </div>
        <div className={`${styles.dataWrap}`}>
          <Table></Table>
        </div>
        <div className={`${styles.buttonWrap}`}>
        </div>
      </div>
    </div>
  );
}

function clickMe() {
    console.log('nicky home')
}

