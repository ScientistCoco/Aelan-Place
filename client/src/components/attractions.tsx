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
      <div className={styles.attractionsContainer} ref={this.props.htmlRef} id="attractions">
        <p style={{ fontFamily: 'Mukta Mahee, arial, sans-serif', fontWeight: 'bold', color: 'slategray', paddingBottom: '20px' }}>{visitSection.title}</p>
        <div>
          <ol className={styles.attractionsContainer_list}>
            { visitSection.places.map((item: IPlaceItem) => <AttractionsImage show={show} {...item}/>)}
          </ol>
        </div>
      </div>
    )
  }
}
