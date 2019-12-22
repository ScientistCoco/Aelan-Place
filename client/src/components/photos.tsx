import React from 'react';
import { Carousel, Skeleton } from 'antd';
import { Image } from "../components";
import CMS from "../../content/homepageCMS.json";
import * as styles from "./photos.module.scss";

interface IPhotos {
  htmlRef?: React.Ref<any>;
  show: boolean;
}

export class Photos extends React.Component<IPhotos> {
  constructor(props: any) {
    super(props)
  }

  render() {
    const { show } = this.props;
    const { photosSection } = CMS;

    return (
      <div className={`${styles.photosContainer} ${show ? styles.photosContainer__show : styles.photosContainer__hide}`} 
        ref={this.props.htmlRef}
      >
        <div className={styles.photosContainer_info}>
          <h1 className={styles.photosContainer_header}>{photosSection.title}</h1>
          <p className={styles.photosContainer_description}>{photosSection.subtitle}</p>
        </div>
        <div className={styles.photosContainer_carousel}>          
          <Carousel className={styles.photosContainer_carousel_photos} 
            effect="fade" 
            arrows={true}
            draggable={true}
            autoplay            
          >
            <Skeleton active loading={false}>
              <Image filename="aelan_1.jpg" />
            </Skeleton>      
            <Skeleton active loading={false}>
              <Image filename="aelan_6.jpg"/>
            </Skeleton>      
            <Skeleton active loading={false}>
              <Image filename="aelan_4.jpg"/>
            </Skeleton>         
          </Carousel>          
        </div>
      </div>
    )
  }
}

