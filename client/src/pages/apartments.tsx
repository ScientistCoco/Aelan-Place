import React from "react";
import { Button, Icon } from 'antd';
import { Bathtub, Bed, Key, Suitcase } from "../../assets";
import CMS from "../../content/apartmentsCMS.json";
import * as styles from "./apartments.module.scss";

import { Footer, Image, Layout, Navbar, Modal } from "../components";

interface IApartmentItemCMS {
  name: string,
  description: string,
  image: string,
  button: string,
  link: string,
  guests: string,
  bedrooms: string,
  beds: string,
  bath: string
}

class Apartments extends React.Component<any, any> {
  private apartmentRefs: Array<React.RefObject<HTMLDivElement>>;

  constructor(props: any) {
    super(props);
    this.state = {
      menuToggled: false,
      showApartment: new Array(CMS.apartments.length).fill(true)
    }
    this.apartmentRefs = Array.from({length: CMS.apartments.length}, () => React.createRef())
  }

  toggleMenu = () => {
    const { menuToggled } = this.state;

    this.setState({
      menuToggled: !menuToggled
    })
  }

  renderApartmentImage = (image: string, show: boolean) => (
    <div className={`${styles.apartmentsRoom_container_item} ${show ? styles.apartmentsRoom_container_item_image__show : styles.apartmentsRoom_container_item_image__hide}`}>
      <Image filename={image} style={{ height: '60vh' }}/>
    </div>    
  )

  renderApartmentTitle = (show: boolean, apartment: IApartmentItemCMS) => (
    <div className={`${styles.apartmentsRoom_container_item} ${show ? styles.apartmentsRoom_container_item_title__show : styles.apartmentsRoom_container_item_title__hide}`}>
      <div className={styles.apartmentsRoom_content}>
        <h1 className={styles.apartmentsRoom_content_header}>{apartment.name}</h1>
        <div className={styles.apartmentsRoom_content_features}>
          <span className={styles.apartmentsRoom_content_features_item}>
            <Icon component={Suitcase} style={{ fontSize: '1.5rem', color: 'rgb(24, 144, 255)'}}/>
            <p className={styles.apartmentsRoom_content_features_item_text}>{apartment.guests} guests</p>
          </span>
          <span className={styles.apartmentsRoom_content_features_item}>
            <Icon component={Key} style={{ fontSize: '1.5rem', color: 'rgb(24, 144, 255)'}}/>
            <p className={styles.apartmentsRoom_content_features_item_text}>{apartment.bedrooms} bedrooms</p>
          </span>
          <span className={styles.apartmentsRoom_content_features_item}>
            <Icon component={Bed} style={{ fontSize: '1.5rem', color: 'rgb(24, 144, 255)'}}/>
            <p className={styles.apartmentsRoom_content_features_item_text}>{apartment.beds} beds</p>
          </span>
          <span className={styles.apartmentsRoom_content_features_item}>
            <Icon component={Bathtub} style={{ fontSize: '1.5rem', color: 'rgb(24, 144, 255)', fontWeight: 'bold' }}/>
            <p className={styles.apartmentsRoom_content_features_item_text}>{apartment.bath} bathroom</p>
          </span>
        </div>
        <p>{apartment.description}</p>
        <Button type="primary" shape="round" size="large">
          <a href={apartment.link} target="__blank">
            {apartment.button}
          </a>
        </Button>
      </div>
    </div>
  )

  renderApartments = () => {
    const { showApartment } = this.state;

    return (
      CMS.apartments.map((apartment: any, index: number) => (      
        <div className={styles.apartmentsRoom_container} ref={this.apartmentRefs[index]}>              
          {index % 2 === 0 ? 
          <>
            {this.renderApartmentTitle(showApartment[index], apartment)}
            {this.renderApartmentImage(apartment.image, showApartment[index])}
          </>
          : 
          <>
            {this.renderApartmentImage(apartment.image, showApartment[index])}
            {this.renderApartmentTitle(showApartment[index], apartment)}
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
              <h1 className={styles.apartmentsIntro_header}>{CMS.title}</h1>
              <p className={styles.apartmentsIntro_subtitle}>{CMS.subtitle}</p>
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