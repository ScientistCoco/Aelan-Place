import React from "react";
import { Link } from "gatsby";
import CMS from "../../content/footerCMS.json";
import * as styles from "./footer.module.scss";

export class Footer extends React.Component<any> {
  renderContactsInfo = (header: string, description: string, link?: string) => (
  <div className={styles.footerContainer_contacts_info}>
    <h5 className={styles.footerContainer_contacts_header}>
      {header}:
    </h5>
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
    const { email, facebook } = CMS;
    
    return (
      <div className={styles.footerContainer}>
        <div className={styles.footerContainer_section}>
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
            {this.renderContactsInfo("Email", email)}
            {this.renderContactsInfo("Social Media", "Facebook", facebook)}        
          </div>
        </div>
        <hr className={styles.footerContainer_horizontalline}/>
        <div className={styles.footerContainer_footer}>
          <p>Copyright ©2019 All rights reserved</p>
          {/* <div className={styles.footerContainer_footer_links}>
            <Icon type="facebook" />
            <Icon type="ant-design" />
          </div> */}
        </div>
      </div>
    )
  }
}
