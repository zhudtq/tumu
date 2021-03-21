import styles from './index.module.css';
import { useHistory } from 'react-router-dom';
import {useState} from 'react';
var remote = {};
let companyData1 = [
  ['北京五金公司', '张智成'],
  ['上东钢条发展有限公司', '王婷'],
  ['汕头钢铁厂', '李迪'],
  ['青岛海天公司', '赵勇']
]
let companyData2 = [
  ['安徽五金建材厂', '朱浩田'],
  ['蚌埠钢材厂', '单乃霜'],
  ['五河器械发展公司', '王天'],
  ['上海建材厂', '梁天']
]
let companyData3 = [
  ['丰田土建公司', '朱田'],
  ['云南钢材厂', '朱赤'],
  ['安徽器械公司', '王天一'],
  ['上海五金厂', '梁天天']
]
let companyData4 = [
  ['安徽土木发展厂', '孙浩'],
  ['江西天天企业', '孙处'],
  ['昆明建材厂', '张芳'],
  ['合肥发展公司', '王小虎']
]
let companyData5 = [
  ['固镇金属器械公司', '刘晶晶'],
  ['南京金属加工厂', '刘浩天'],
  ['北京五金厂', '胡一帆'],
  ['天牛公司', '昊凯']
]

export function ResultPage() {
  let history = useHistory();
  const passingItem = history.location.query.item;
  const fengliang = history.location.query.fengliang
  let [item, setItem] = useState(passingItem);
  let [selectedIndex, setIndex] = useState(-1);
  let unit = Math.ceil(+fengliang / +item.a);
  let companyInfo = []
  if (item.l == 1200) {
    companyInfo = companyData1
  }
  if (item.l == 1400) {
    companyInfo = companyData2
  }
  if (item.l == 1600) {
    companyInfo = companyData3
  }
  if (item.l == 1800) {
    companyInfo = companyData4
  }
  if (item.l == 2000) {
    companyInfo = companyData5
  }
  console.log('nicky 1', item, fengliang, unit)
  // console.log('nicky 2', item)
  function getBack () {
    history.goBack();
  }

  function componentDidMount() {
    console.log('nicky zz')
  }

  function shutDown() {
    window.close();
  }

  function onsel(i) {
    setIndex(i)
    console.log('nicky selectedI', selectedIndex)
  }

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        选型汇总
      </div>
      <div className={styles.tableWrap}>
        <div className={styles.flexBox}>
          <div className={styles.name}>产品名称：</div>
          <div className={`${styles.longInput} ${styles.normal}`}>新型微孔膜滤板</div>
        </div>
        <div className={styles.flexBox}>
          <div className={styles.name}>产品型号：</div>
          <div className={`${styles.middleInput} ${styles.normal}`}>{item.type}</div>
        </div>
        <div className={styles.flexBox}>
          <div className={styles.name}>
            滤板长L：
          </div>
          <div className={`${styles.shortInput} ${styles.normal}`}>
            {item.l}
          </div>
          <div>mm</div>
          <div className={styles.name}>
            过滤面积：
          </div>
          <div className={`${styles.shortInput} ${styles.normal}`}>
            {item.s}
          </div>
          <div>m2</div>
        </div>
        <div className={styles.flexBox}>
          <div className={styles.name}>
            滤板宽L1
          </div>
          <div className={`${styles.shortInput} ${styles.normal}`}>{item.l1}</div>
          <div>mm</div>
          <div className={styles.name}>
            滤板个数：
          </div>
          <div className={`${styles.shortInput} ${styles.normal}`}>{unit}</div>
          <div>个</div>
        </div>
      </div>
      
      <div className={styles.companyWrap}>
        <div className={`${styles.flexBox} ${styles.line}`}>
          <div className={styles.id}>ID</div>
          <div className={styles.item}>生产厂商</div>
          <div className={styles.item}>联系人</div>
        </div>
        {companyInfo && companyInfo.length && companyInfo.map((i, index) => {
          return (
            <div onClick={()=>{onsel(index)}} key={`${index}-`} className={`${styles.flexBox} ${styles.line1} ${selectedIndex==index?styles.highLight:''}`}>
              <div className={styles.id}>{index+1}</div>
              <div className={styles.item}>{i[0]}</div>
              <div className={styles.item}>{i[1]}</div>
            </div>
          )
        })}
        
      </div>
      <div className={styles.btnWrap}>
        <button className={styles.btn}>确定</button>
        <button className={styles.btn} onClick={getBack}>返回</button>
        <button className={styles.btn} onClick={shutDown}>关闭</button>
      </div>
    </div>
  );
}