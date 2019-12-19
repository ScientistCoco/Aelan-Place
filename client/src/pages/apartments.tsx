import React from "react";
import { Button } from 'antd';
import * as styles from "./apartments.module.scss";

import { Footer, Image, Layout, Navbar, Modal } from "../components";

const LoremIpsumText = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit aliquid, est reiciendis repellat sapiente consequatur aperiam, ducimus, id minima eligendi officiis, qui expedita sint culpa illum magnam ipsam adipisci possimus? Sit aspernatur eaque id sunt fuga facere hic laudantium, aperiam! Provident dolor aperiam similique maiores quasi. Quo repudiandae fuga commodi itaque dolores accusamus, dolor esse adipisci labore harum blanditiis in totam ipsum vero necessitatibus incidunt reprehenderit, id iste quas, ab, non! Voluptates, reiciendis culpa iure deserunt voluptatum itaque. Quos, soluta.";

const apartments = [
  {
    filename: "aelan_1.jpg",
    name: "Aelan Place #5"
  },
  {
    filename: "aelan_2.jpg",
    name: "Aelan Place #6"
  }
];

class Apartments extends React.Component<any, any> {
  private apartmentRefs: Array<React.RefObject<HTMLDivElement>>;

  constructor(props: any) {
    super(props);
    this.state = {
      menuToggled: false,
      showApartment: new Array(apartments.length).fill(true)
    }
    this.apartmentRefs = Array.from({length: apartments.length}, () => React.createRef())
  }

  toggleMenu = () => {
    const { menuToggled } = this.state;

    this.setState({
      menuToggled: !menuToggled
    })
  }

  renderApartmentImage = (filename: string, show: boolean) => (
    <div className={`${styles.apartmentsRoom_container_item} ${show ? styles.apartmentsRoom_container_item_image__show : styles.apartmentsRoom_container_item_image__hide}`}>
      <Image filename={filename} style={{ height: '60vh' }}/>
    </div>    
  )

  renderApartmentTitle = (name: string, show: boolean) => (
    <div className={`${styles.apartmentsRoom_container_item} ${show ? styles.apartmentsRoom_container_item_title__show : styles.apartmentsRoom_container_item_title__hide}`}>
      <div className={styles.apartmentsRoom_content}>
        <h1 className={styles.apartmentsRoom_content_header}>{name}</h1>
        <p>{LoremIpsumText}</p>
        <Button type="primary" shape="round" size="large">Learn more</Button>
      </div>
    </div>
  )

  renderApartments = () => {
    const { showApartment } = this.state;

    return (
      apartments.map((apartment: any, index: number) => (      
        <div className={styles.apartmentsRoom_container} ref={this.apartmentRefs[index]}>              
          {index % 2 === 0 ? 
          <>
            {this.renderApartmentTitle(apartment.name, showApartment[index])}
            {this.renderApartmentImage(apartment.filename, showApartment[index])}
          </>
          : 
          <>
            {this.renderApartmentImage(apartment.filename, showApartment[index])}
            {this.renderApartmentTitle(apartment.name, showApartment[index])}
          </>        
          }
        </div>      
      )
    )
  )}

  handleScroll = () => {
    const { showApartment } = this.state;

    this.apartmentRefs.forEach((apartment: React.RefObject<HTMLDivElement>, index: number) => {
        if (apartment.current && index !== 0) {
          showApartment[index] = (window.scrollY + apartment.current.getBoundingClientRect().top) / 2 < window.scrollY
        }
    })

    this.setState({
      showApartment: showApartment
    })
  }

  componentDidMount() {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', this.handleScroll);
    }    
  }

  componentWillUnmount() {
    if (typeof window !== 'undefined') {
      window.removeEventListener('scroll', this.handleScroll);
    }
  }

  render() {
    const { menuToggled } = this.state;

    return (  
      <Layout className={styles.apartments}>
        <Navbar menuToggled={menuToggled} handleToggle={this.toggleMenu}/>
        <Modal showModal={menuToggled} />      
        {!menuToggled && 
        <>
          <div className={styles.apartmentsIntro_container}>
            <Image filename="aelan_3.jpg" imgStyle={{ filter: 'brightness(0.5)' }} style={{ height: '50vh' }}/>
            <div className={styles.apartmentsIntro_text}>
              <h1 className={styles.apartmentsIntro_header}>Apartments</h1>
              <p className={styles.apartmentsIntro_subtitle}>Enjoy your stay</p>
            </div>
          </div>
          {this.renderApartments()}
          <Footer />
        </>
        }
      </Layout>
    )
  }
}

export default Apartments;