import React from "react";
import * as styles from "./about.module.scss";

import { Footer, Image, Layout, Navbar, Modal } from "../components";

const LoremIpsumText = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit aliquid, est reiciendis repellat sapiente consequatur aperiam, ducimus, id minima eligendi officiis, qui expedita sint culpa illum magnam ipsam adipisci possimus? Sit aspernatur eaque id sunt fuga facere hic laudantium, aperiam! Provident dolor aperiam similique maiores quasi. Quo repudiandae fuga commodi itaque dolores accusamus, dolor esse adipisci labore harum blanditiis in totam ipsum vero necessitatibus incidunt reprehenderit, id iste quas, ab, non! Voluptates, reiciendis culpa iure deserunt voluptatum itaque. Quos, soluta.";

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
            <Image filename="hero_2.jpg" imgStyle={{ filter: 'brightness(0.5)' }} style={{ height: '50vh' }}/>
            <div className={styles.aboutIntro_text}>
              <h1 className={styles.aboutIntro_header}>About us</h1>
            </div>
          </div>
          <div className={styles.aboutContent_container}>
            <div className={styles.aboutContent_item}>
              <div className={styles.aboutContent_media}>
                <iframe      
                  className={styles.aboutContent_iframe}           
                  src="https://www.youtube.com/embed/yRYEodHlUSY" 
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                />
              </div>
            </div>
            <div className={styles.aboutContent_item}>
              <h2 className={styles.aboutContent_header}>What we do</h2>
              <p>{LoremIpsumText}</p>
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