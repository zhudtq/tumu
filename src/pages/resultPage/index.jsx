import styles from './index.module.css';
import { useHistory } from 'react-router-dom';
import { app } from 'electron';
// import { ipcRenderer} from 'electron';


export function ResultPage() {
  let history = useHistory();
  function getBack () {
    history.goBack();
  }

  function shutDown() {
    // app.quit()
  }

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        选型汇总
      </div>
      <div className={styles.tableWrap}>
        <div className={styles.flexBox}>
          <div>产品名称：</div>
          <div className={styles.nameValue}></div>
        </div>
        <div className={styles.flexBox}>
          <div>产品型号：</div>
          <div className={styles.nameValue}></div>
        </div>
      </div>
      <div className={styles.companyWrap}>

      </div>


      {/* <button>确定</button>
      <button onClick={getBack}>返回</button>
      <button onClick={shutDown}>关闭</button> */}
    </div>
  );
}