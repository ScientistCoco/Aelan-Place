import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link } from "gatsby";
import * as styles from "./index.module.scss";

import { Attractions, Layout, Image, Navbar, Modal, Photos, Reviews, Footer, SEO } from "../components";
import { AelanPlaceFontLogo } from "../../assets";
import { post } from "../helpers";
import CMS from "../../content/homepageCMS.json";

class IndexPage extends React.Component<any, any> {  
  private attractionsRef: React.RefObject<HTMLDivElement>;
  private photosRef: React.RefObject<HTMLDivElement>;
  private reviewsRef: React.RefObject<HTMLDivElement>;

  constructor(props: any) {
    super(props);
    this.state = {
      menuToggled: false,
      showAttractions: false,
      showPhotos: false,
      showReviews: false,
    }

    this.attractionsRef = React.createRef();
    this.photosRef = React.createRef();
    this.reviewsRef = React.createRef();
  }

  toggleMenu = () => {
    const { menuToggled } = this.state;

    this.setState({
      menuToggled: !menuToggled
    })
  }

  handleScroll = () => {
    const attractionsRef = this.attractionsRef.current;
    const photosRef = this.photosRef.current;
    const reviewsRef = this.reviewsRef.current;

    if (!attractionsRef || !photosRef || !reviewsRef ) { return; }

    const { showAttractions, showPhotos, showReviews } = this.state;

    const hasReachedShowAttractions = (window.scrollY + attractionsRef.getBoundingClientRect().top) / 3 < window.scrollY;
    const hasReachedShowPhotos = (window.scrollY + photosRef.getBoundingClientRect().top) / 2 < window.scrollY;
    const hasReachedShowReviews = (window.scrollY + reviewsRef.getBoundingClientRect().top) / 2 < window.scrollY;

    if (showAttractions !== hasReachedShowAttractions) {
      this.setState({ showAttractions: hasReachedShowAttractions });
    }

    if (showPhotos !== hasReachedShowPhotos) {
      this.setState({ showPhotos: hasReachedShowPhotos });
    }

    if (showReviews !== hasReachedShowReviews) {
      this.setState({ showReviews: hasReachedShowReviews });
    }
  }

  componentDidMount() {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', this.handleScroll);
    }    
  }

  // fetchAvailabilities = async () => {    
  //   const data = { 
  //     listing_id: "39097100",
  //     month: "12",
  //     year: "2020",
  //     count: "3"
  //   }

  //   const res = await (await post("/api/availabilities", data, {})).json();

  //   console.log(res);
  // }

  componentWillUnmount() {
    if (typeof window !== 'undefined') {
      window.removeEventListener('scroll', this.handleScroll);
    }
  }

  render() {
    const { menuToggled, showAttractions, showPhotos, showReviews } = this.state;

    return (
      <Layout>
          <SEO title="Overview" />
          <Modal showModal={menuToggled} />
          <Navbar menuToggled={menuToggled} handleToggle={this.toggleMenu}/>      
          {!menuToggled &&
            <>
              <div className={styles.introContainer}>          
                <Image filename="aelan_8.jpg" imgStyle={{ filter: 'brightness(0.5)'}} style={{ height: '100vh' }}/> 
                <div className={styles.introContainer_main}>
                  <h1 className={styles.introContainer_title}>{CMS.landingTitle}</h1>                  
                  <AelanPlaceFontLogo className={styles.introContainer_locationName}/>
                  <h1 className={styles.introContainer_title}>{CMS.landingSubtitle}</h1>
                  <br/>
                  <div className={styles.introContainer_links}>
                    <Link to="/apartments" className={styles.introContainer_links_item}>{CMS.exploreBtn}</Link>
                    <Link to="/contact" className={styles.introContainer_links_item}>{CMS.contactBtn}</Link>
                    {/* <Button type="primary" shape="round" size="large" onClick={this.fetchAvailabilities}>Test</Button> */}
                  </div>
                </div>
                <ScrollLink className={styles.introContainer_scroll} to="photos_section" smooth={true}><span className={styles.introContainer_scroll_arrow}/></ScrollLink>                
              </div>
              <Photos show={showPhotos} htmlRef={this.photosRef}/>
              <Attractions show={showAttractions} htmlRef={this.attractionsRef}/>
              <Reviews show={showReviews} htmlRef={this.reviewsRef}/>
              <Footer />
            </>
          } 
      </Layout>
    )
  }
}

export default IndexPage
