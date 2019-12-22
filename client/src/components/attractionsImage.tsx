import React from "react";
import { Card } from "antd";
import * as styles from "../components/attractionsImage.module.scss";

interface IAttractionsImage {
  locationName: string;
  photo: string;
  link: string;
  show: boolean;
}

export class AttractionsImage extends React.Component<IAttractionsImage, any> {
  constructor(props: IAttractionsImage) {
    super(props);

    this.state = {
      loading: true,
      photo: ""
    }
  }

  async componentDidMount() {
    const { photo } = this.props;

    const resp = await fetch(`https://cors-anywhere.herokuapp.com/${photo}`);
    const blob = await resp.blob();
    const localURl = URL.createObjectURL(blob);
    
    this.setState({
      loading: false,
      photo: localURl
    })
  }

  render() {
    const { loading, photo } = this.state;
    const { show, link, locationName } = this.props;

    return (
      <li className={`${styles.attractionsImage} ${show ? styles.attractionsImage__show : styles.attractionsImage__hide}`}>
        <Card         
          bodyStyle={{ padding: 0, width: '300px', height: '170px' }} 
          loading={loading} 
          bordered={loading}
        >
          {photo ? 
            <img className={styles.attractionsCard_Image} src={photo} 
            />
            :
            <img className={styles.attractionsCard_Image} 
              onLoad={() => this.setState({ loading: false })}
              src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"/>
          }
        </Card>
        <br/>
        <a href={link} target="_blank">
          <p>{locationName}</p>
        </a>
    </li>
    )
  }
}