import styles from "./index.module.css";
import { Input, Form } from 'semantic-ui-react'

function topForm(props, that) {
  let userName;
  let password;

    function onAccChange(e) {
      userName = e && e.target?.value;
    }

    function onPassChange(e) {
      password = e && e.target?.value;
    }

    return (
      <div className={styles.container}>
          <div className={styles.title}>
            工作环境参数设置
          </div>
          <Form>
          <div className={styles.lineWrap}>
                <div className={styles.formUnit}>
                  <label>过滤风速</label>
                  <Input className={styles.input} fluid placeholder='' />
                  <text className={styles.unit}>m/min</text>
                </div>
                <div className={styles.formUnit}>
                  <label>流体动力粘度</label>
                  <Input className={styles.input} fluid placeholder='' />
                  <text className={styles.unit}>Fa*s</text>
                </div>
            </div>
            <div className={styles.lineWrap}>
                <div className={styles.formUnit}>
                  <label>过滤风速</label>
                  <Input className={styles.input} fluid placeholder='' />
                  <text className={styles.unit}>m/min</text>
                </div>
                <div className={styles.formUnit}>
                  <label>流体动力粘度</label>
                  <Input className={styles.input} fluid placeholder='' />
                  <text className={styles.unit}>Fa*s</text>
                </div>
            </div>
          </Form>
      </div>
    );
}

export default topForm;