import React from "react";
import { Icon } from "antd";
import * as styles from "./carousel.module.scss";

interface ICarousel extends React.Props<ICarousel> {
  children: any;
  className?: any;
  dots?: boolean;
  name: string;
}

export class Carousel extends React.Component<ICarousel, any> {
  static defaultProps: ICarousel;

  constructor(props: ICarousel) {
    super(props);
    this.state = {
      checkedIndex: 0,
    }
  }

  handleChange = (event: any) => {
    this.setState({ checkedIndex: event.target.value });
  }

  handleRightArrowClick = () => {
    const { checkedIndex } = this.state;
    const { children } = this.props;

    const newIndex = (checkedIndex + 1) % children.length;
    this.setState({checkedIndex: newIndex });
  }

  handleLeftArrowClick = () => {
    const { checkedIndex } = this.state;
    const { children } = this.props;

    const newIndex = checkedIndex === 0 ? children.length - 1 : (checkedIndex - 1) % children.length;

    this.setState({ checkedIndex: newIndex });
  }  

  render() {
    const { children, className, dots, name } = this.props;
    const { checkedIndex } = this.state;    
      
    return (
      <div className={`${!dots && styles.Carousel__flex} ${className}`}>
        {!dots && <button className={styles.Carousel_Arrows} onClick={this.handleLeftArrowClick}><Icon type="left" /></button>}
        <ul className={styles.Carousel_Slides}>
          {children.map((item: any, index: number) => (
            <>
              <input type="radio" 
                name={`${name}_radio_buttons`}
                id={`${name}_Carousel_Img_${index}`}
                value={index}
                onChange={this.handleChange}
                className={styles.Carousel_Slide_Input}
                checked={Number(checkedIndex) === index}
              />
              <li className={styles.Carousel_Slide_Container}>
                <div className={styles.Carousel_Slide_Image}>
                  {item}
                </div>
              </li>
            </>
          ))}
          {dots && 
            <div className={styles.Carousel_Dots}>
              {children.map((item: any, index: number) => (
                <label 
                  htmlFor={`${name}_Carousel_Img_${index}`} 
                  className={`${styles.Carousel_Dots_Item} 
                    ${Number(checkedIndex) === index ? styles.Carousel_Dots_Item__active: styles.Carousel_Dots_Item__inactive}`} 
                />
              ))}
            </div>
          }
        </ul>
        {!dots && <button className={styles.Carousel_Arrows} onClick={this.handleRightArrowClick}><Icon type="right" /></button>}
      </div>
    )
  }
}

Carousel.defaultProps = {
  dots: true,
  children: [],
  name: ''
};