import React from "react";
import { Spin, Icon } from "antd";
import * as styles from "./loading.module.scss";

interface ILoadingProps {
  loading: boolean;
  message: string;
}

const spinIcon = <Icon type="loading" style={{ fontSize: 72, color: 'rgba(255, 255, 255, 0.80)' }} spin />

export const Loading = (props: ILoadingProps) => {      
  const { loading, message } = props;

  return (
    <div className={`${styles.loadingContainer} 
      ${loading ? styles.loadingContainer__show : styles.loading_container__hide}`}>
        <Spin className={styles.loadingContainer_spinner} 
          indicator={spinIcon} 
          tip={message}
          style={{ color: 'rgba(255, 255, 255, 0.80' }}
        />
    </div>
  );
}