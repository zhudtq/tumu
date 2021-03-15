import styles from "./index.module.css";
import React from 'react';

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showModal: 'hideModal'};
    this.arr = ['滤板型号L', 'L', 'L1', 'S3/L1', 'S2/L', 'S2/L3', '过滤面积']
  }

  gotoConfig = () => {
    this.props.history.push('/config')
  }

  render() {
    return (
      <div className={styles.container}>
            <div className={styles.line}>
                {this.arr.map((item, index) => {
                    return <div className={styles.item} key={index}>{item}</div>
                })}
            </div>
      </div>
    );
  }
}

export default Table;