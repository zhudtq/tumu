import styles from "./index.module.css";
import { Statistic, Button, Card, Image, Form, Input } from 'semantic-ui-react'
import dataPic from '../dataPic.jpeg';

export function ConfigPage() {
  function onClickJump() {
    // this.props.history.push('/result')
    alert('还没做')
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
          <div>
            <img src={dataPic} className={styles.configPic} />
          </div>
          <div className={styles.configDetail}>
            <div className={styles.form1}>
            <Form>
              <Form.Group widths='equal'>
                <Form.Field>
                  <label>First name</label>
                  <Input fluid placeholder='First name' />
                </Form.Field>
                <Form.Field>
                  <label>Middle name</label>
                  <Input fluid placeholder='Middle name' />
                </Form.Field>
              </Form.Group>
            </Form>
            </div>
            <div className={styles.form2}>
              表格2
            </div>
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
              <Button basic color='yellow' content='Yellow' />
              <Button basic color='olive' content='Olive' />
              <Button basic color='green' content='Green' />
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