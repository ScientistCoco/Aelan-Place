import React from "react";
import * as styles from "./about.module.scss";

import { Footer, Image, Layout, Navbar, Modal } from "../components";
import CMS from "../../content/aboutCMS.json";

class About extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      menuToggled: false,
    }
  }

  toggleMenu = () => {
    const { menuToggled } = this.state;

    this.setState({
      menuToggled: !menuToggled
    })
  }

  render() {
    const { menuToggled } = this.state

    return (
      <Layout className={styles.about}>
        <Navbar menuToggled={menuToggled} handleToggle={this.toggleMenu}/>
        <Modal showModal={menuToggled} />      
        {!menuToggled && 
        <>
          <div className={styles.aboutIntro_container}>
            <Image filename="aelan_13.jpg" imgStyle={{ filter: 'brightness(0.5)' }} style={{ height: '50vh' }}/>
            <div className={styles.aboutIntro_text}>
              <h1 className={styles.aboutIntro_header}>{CMS.title}</h1>
            </div>
          </div>
          <div className={styles.aboutContent_container}>
            <div className={styles.aboutContent_item}>
              <div className={styles.aboutContent_media}>
                <iframe      
                  className={styles.aboutContent_iframe}           
                  src={CMS.videoLink}
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                />
              </div>
            </div>
            <div className={styles.aboutContent_item}>
              <h2 className={styles.aboutContent_header}>{CMS.sectionTitle}</h2>
              <p>{CMS.sectionDescription}</p>
            </div>
          </div>
          <Footer />
        </>
        }
      </Layout>
    )
  }
}

export default About;