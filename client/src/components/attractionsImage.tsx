import React from "react";
import { Image } from "../components";
import * as styles from "../components/attractionsImage.module.scss";

interface IAttractionsImage {
  locationName: string;
  photo: string;
  link: string;
}

export class AttractionsImage extends React.Component<IAttractionsImage, any> {
  constructor(props: IAttractionsImage) {
    super(props);

    this.state = {
      loading: false,
      photo: ""
    }
  }

  render() {
    const { link, locationName, photo } = this.props;

    return (
      <li className={styles.attractionsCard}>
        <Image className={styles.attractionsCard_Image} filename={photo}/>            
        <div className={styles.attractionsCard_Image_Overlay}/>
        <a className={styles.attractionsCard_Link} href={link} target="_blank">
          <p>{locationName}</p>
        </a>
    </li>
    )
  }
}