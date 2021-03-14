import styles from "./index.module.css";
import dataPic from '../dataPic.jpeg';
import TopForm from './components/TopForm/topForm.jsx';
import BotForm from './components/BottomForm/botForm.jsx';

export function ConfigPage(props) {
  function onClickJump() {
    // this.props.history.push('/result')
    // alert('还没做')
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
            <BotForm />
          </div>
        </div>
        <div className={`${styles.dataWrap}`}>
          
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