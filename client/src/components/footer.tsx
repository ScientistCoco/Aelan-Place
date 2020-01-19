import React from "react";
import { Icon } from "antd";
import { Link } from "gatsby";
import CMS from "../../content/footerCMS.json";
import * as styles from "./footer.module.scss";
import { FacebookLogo, AirBnbLogo, AelanPlaceLogo } from "../../assets";

export class Footer extends React.Component<any> {
  renderContactsInfo = (header: string, description: any, link?: string) => (
  <div className={styles.footerContainer_contacts_info}>
    {header && <h1 className={styles.footerContainer_contacts_header}>{header}</h1>}
    { link ? 
      <p>
        <a href={link} target="__blank" className={styles.footerContainer_section_item_link}>
          {description}
        </a>
      </p>
      :
      <p>{description}</p>
    }
  </div>
  );

  render() {
    const { airbnb, email, facebook } = CMS;
    
    return (
      <div className={styles.footerContainer}>
        <hr className={styles.footerContainer_horizontalline}/>
        <div className={styles.footerContainer_section}>
          <div className={`${styles.footerContainer_section_item} ${styles.footerContainer_section__space}`}>
            <Icon component={AelanPlaceLogo} className={styles.footerContainer_aelanLogo}/>
          </div>          
          <div className={styles.footerContainer_section_item}>
            <p>
              <Link to="/about/" className={styles.footerContainer_section_item_link}>
                About
              </Link>
            </p>
            <p>
              <Link to="/apartments/" className={styles.footerContainer_section_item_link}>
                Apartments
              </Link>
            </p>
            <p>
              <Link to="/contact/" className={styles.footerContainer_section_item_link}>
                Contact Us
              </Link>
            </p>
          </div>
          <div className={styles.footerContainer_section_item}>
            {this.renderContactsInfo("Have a question?", email)}
            <div className={styles.footerContainer_section_socialmedia}>
              {this.renderContactsInfo("", <Icon component={AirBnbLogo} className={styles.footerContainer_section_socialmedia_icon}/>, airbnb)}        
              {this.renderContactsInfo("", <Icon component={FacebookLogo} className={styles.footerContainer_section_socialmedia_icon}/>, facebook)}        
            </div>
          </div>
        </div>
      </div>
    )
  }
}
