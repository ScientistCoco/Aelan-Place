import React from "react";
import { Icon } from 'antd';
import * as styles from "./footer.module.scss";

export class Footer extends React.Component<any> {
  renderContactsInfo = (header: string, description: string) => (
  <div className={styles.footerContainer_contacts_info}>
    <h5 className={styles.footerContainer_contacts_header}>
      {header}:
    </h5>
    <p>{description}</p>
  </div>
  );

  render() {
    return (
      <div className={styles.footerContainer}>
        <div className={styles.footerContainer_section}>
          <div className={styles.footerContainer_section_item}>
            <p>Rooms</p>
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
          </div>
          <div className={styles.footerContainer_section_item}>
            {this.renderContactsInfo("Email", "info@yourdomain.com")}
            {this.renderContactsInfo("Social Media", "Facebook")}        
          </div>
        </div>
        <hr className={styles.footerContainer_horizontalline}/>
        <div className={styles.footerContainer_footer}>
          <p>Copyright ©2019 All rights reserved</p>
          <div className={styles.footerContainer_footer_links}>
            <Icon type="facebook" />
            <Icon type="ant-design" />
          </div>
        </div>
      </div>
    )
  }
}
