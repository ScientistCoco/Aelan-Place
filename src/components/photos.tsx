import React from 'react';
import { Carousel, Icon, Skeleton } from 'antd';
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import * as styles from "./photos.module.scss";

const Image = (imgSrc: any) => {  
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "slider-1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920, quality: 100) {
            ...GatsbyImageSharpFluid
            presentationWidth
          }
        }
      }
    }
  `)

  return <Img fluid={data.placeholderImage.childImageSharp.fluid} 
  style={{ objectFit: 'contain' }} 
  />
}

interface IPhotos {
  htmlRef?: React.Ref<any>;
  show: boolean;
}

export class Photos extends React.Component<IPhotos> {
  constructor(props: any) {
    super(props)
  }

  render() {
    const { show } = this.props;

    return (
      <div className={`${styles.photosContainer} ${show ? styles.photosContainer__show : styles.photosContainer__hide}`} 
        ref={this.props.htmlRef}
      >
        <div className={styles.photosContainer_info}>
          <h1 className={styles.photosContainer_header}>A gorgeous place to enjoy your holiday</h1>
          <p className={styles.photosContainer_description}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In dolor, iusto doloremque quo odio repudiandae sunt eveniet? Enim facilis laborum voluptate id porro, culpa maiores quis, blanditiis laboriosam alias. Sed.</p>
        </div>
        <div className={styles.photosContainer_carousel}>          
          <Carousel className={styles.photosContainer_carousel_photos} 
            effect="fade" 
            arrows={true}
            draggable={true}
            autoplay            
          >
            <Skeleton active loading={false}>
              <Image />
            </Skeleton>      
            <Skeleton active loading={false}>
              <Image />
            </Skeleton>      
            <Skeleton active loading={false}>
              <Image />
            </Skeleton>      
            <Skeleton active loading={false}>
              <Image />
            </Skeleton>      
          </Carousel>          
        </div>
      </div>
    )
  }
}

