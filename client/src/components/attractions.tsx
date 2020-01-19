import React from "react";
import { AttractionsImage } from "../components";
import CMS from "../../content/homepageCMS.json";
import * as styles from "../components/attractions.module.scss";

interface IAttractions {
  show: boolean;
  htmlRef?: React.Ref<any>;
}

interface IPlaceItem {
  locationName: string;
  photo: string;
  link: string;
}

export class Attractions extends React.Component<IAttractions> {
  render() {        
    const { show } = this.props;
    const { visitSection } = CMS;

    return (
      <div className={`${styles.attractionsContainer} ${show ? styles.attractionsContainer__show : styles.attractionsContainer__hide}`} 
        ref={this.props.htmlRef} 
        id="attractions"
      >
        <h1 className={styles.attractionsContainer_Header}>{visitSection.title}</h1>
        <p className={styles.attractionsContainer_Description}>{visitSection.subtitle}</p>
        <div>
          <ol className={styles.attractionsContainer_list}>
            { visitSection.places.map((item: IPlaceItem) => <AttractionsImage {...item}/>)}
          </ol>
        </div>
      </div>
    )
  }
}
