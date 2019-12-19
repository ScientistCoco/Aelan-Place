import React from "react";
import { Card } from 'antd';
import * as styles from "../components/attractions.module.scss";

interface IAttractions {
  show: boolean;
  htmlRef?: React.Ref<any>;
}

export class Attractions extends React.Component<IAttractions> {
  render() {        
    const getItems = () => (
      <li className={`${styles.attractionsImage} ${show ? styles.attractionsImage__show : styles.attractionsImage__hide}`} >
        <Card         
          bodyStyle={{ padding: 0 }} 
          loading={loading} 
          bordered={loading}
        >
          <img src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />
        </Card>
        <p>Restaurant</p>
      </li>
    )
    
    const { show } = this.props;
    const loading = true;

    return (
      <div className={styles.attractionsContainer} ref={this.props.htmlRef}>
        <p style={{ fontFamily: 'Mukta Mahee, arial, sans-serif', fontWeight: 'bold', color: 'slategray', paddingBottom: '20px' }}>YOU CAN VISIT</p>
        <div>
          <ol className={styles.attractionsContainer_list}>
            {Array.from({length: 4}, (item, index) => getItems())}
          </ol>
        </div>
      </div>
    )
  }
}
