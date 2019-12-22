import React from 'react';
import { Avatar } from 'antd';
import CMS from "../../content/homepageCMS.json";
import * as styles from "../components/reviews.module.scss";

interface IReviews {
  htmlRef?: React.Ref<any>;
  show: boolean;
}

interface IReviewsCMS {
  photo: string;
  name: string;
  comment: string;
}

export class Reviews extends React.Component<IReviews> {
  renderComments = () => {
    const { reviewsSection } = CMS;

    return (
      reviewsSection.reviews.map((item: IReviewsCMS, index: number) => (
        <div className={styles.reviewsComment} key={index}>
          <Avatar size={64} >
            {item.name.charAt(0).toUpperCase()}
          </Avatar>
          <p className={styles.reviewsComment_description}>“{item.comment}”</p> 
          <p className={styles.reviewsComment_user}>- {item.name}</p>
        </div>
      ))
    )
  }

  render() {
    const { htmlRef, show } = this.props;    
    const { reviewsSection } = CMS;

    return (
      <div className={`${styles.reviewsContainer} ${show ? styles.reviewsContainer__show : styles.reviewsContainer__hide}`}
        ref={htmlRef}
      >        
        <h1 className={styles.reviewsContainer_title}>{reviewsSection.title}</h1>
        <div className={styles.reviewsComment_container}>
          {this.renderComments()}
        </div>
      </div>
    )
  }
}
