import React from "react"
import { Button } from 'antd';
import { Link } from "gatsby"
import * as styles from "./index.module.scss";

import { Attractions, Layout, Image, Navbar, Modal, Photos, Reviews, Footer } from "../components";

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

  componentWillUnmount() {
    if (typeof window !== 'undefined') {
      window.removeEventListener('scroll', this.handleScroll);
    }
  }

  render() {
    const { menuToggled, showAttractions, showPhotos, showReviews } = this.state;

    return (
      <Layout>
          <Navbar menuToggled={menuToggled} handleToggle={this.toggleMenu}/>      
          <Modal showModal={menuToggled} />
          {!menuToggled &&
            <>
              <div className={styles.introContainer}>          
                <Image/>
                <div className={styles.introContainer_main}>
                  <h1 className={styles.introContainer_title}>Welcome to Aelan Place</h1>
                  <p className={styles.introContainer_subtitle}>Cosy tropical apartments</p>
                  <div className={styles.introContainer_buttons}>
                    <Button type="primary" shape="round" size="large">Explore the beauty</Button>
                    <Button ghost shape="round" size="large">Contact us</Button>
                  </div>
                </div>
              </div>
              <Attractions show={showAttractions} htmlRef={this.attractionsRef}/>
              <Photos show={showPhotos} htmlRef={this.photosRef}/>
              <Reviews show={showReviews} htmlRef={this.reviewsRef}/>
              <Link to="/page-2/">Go to page 2</Link>
              <Footer />
            </>
          } 
      </Layout>
    )
  }
}

export default IndexPage
