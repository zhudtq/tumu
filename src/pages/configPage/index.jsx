import styles from "./index.module.css";
import { Statistic, Button, Card, Image, Form, Input } from 'semantic-ui-react'
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
        <Statistic color='grey'>
          <Statistic.Label>新型微孔膜滤板选型设计</Statistic.Label>
        </Statistic>
        </div>
        <div className={`${styles.configWrap} flex`}>
          <img src={dataPic} className={styles.configPic} />
          <div className={styles.configDetail}>
            <TopForm />
            <BotForm />
          </div>
        </div>
        <div className={`${styles.dataWrap}`}>
          <Card className={styles.zzz}>
            <Card.Content>
              <Image
                floated='right'
                size='mini'
                src='/images/avatar/large/molly.png'
              />
              <Card.Header>生成的数据</Card.Header>
              <Card.Meta>New User</Card.Meta>
              <Card.Description>
                Molly wants to add you to the group <strong>musicians</strong>
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <div className='ui two buttons'>
              <Button onClick={onClickJump} basic color='red' content='下一页' />
              <Button basic color='orange' content='各种按钮' />
              </div>
            </Card.Content>
          </Card>
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