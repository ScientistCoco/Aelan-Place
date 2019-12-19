import React from 'react';
import { Avatar } from 'antd';
import * as styles from "../components/reviews.module.scss";

interface IReviews {
  htmlRef?: React.Ref<any>;
  show: boolean;
}

export class Reviews extends React.Component<IReviews> {
  renderComments = () => {
    const list = [1, 2, 3]

    return (
      list.map(i => (
        <div className={styles.reviewsComment}>
          <Avatar size={64} icon="user" />
          <p className={styles.reviewsComment_description}>“Et quidem, impedit eum fugiat excepturi iste aliquid suscipit, tempore, delectus rem soluta voluptatem distinctio sed dolores, magni fugit nemo cum expedita. Totam a accusantium sunt aut autem placeat officia.”</p> 
          <p className={styles.reviewsComment_user}>- User Smith</p>
        </div>
      ))
    )
  }

  render() {
    const { htmlRef, show } = this.props;

    return (
      <div className={`${styles.reviewsContainer} ${show ? styles.reviewsContainer__show : styles.reviewsContainer__hide}`}
        ref={htmlRef}
      >        
        <h1 className={styles.reviewsContainer_title}>Reviews</h1>
        <div className={styles.reviewsComment_container}>
          {this.renderComments()}
        </div>
      </div>
    )
  }
}
