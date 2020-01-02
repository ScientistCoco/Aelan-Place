import React from "react";
import { Link } from "gatsby";
import CMS from "../../content/footerCMS.json";
import * as styles from "./modal.module.scss";

interface IModal {
  showModal: boolean;
}

export const Modal = (props: IModal) => (
  <div className={`${styles.menuModal} ${props.showModal ? styles.menuModal_open : styles.menuModal_closed}`}>
    <div className={styles.menuContainer}>
      <ol className={styles.menuActions}>
        <li className={styles.menuActions_li}><Link to="/">Home</Link></li>
        <li className={styles.menuActions_li}><Link to="/about/">About</Link></li>
        <li className={styles.menuActions_li}><Link to="/apartments/">Apartments</Link></li>
      </ol>
      <div className={styles.menuContacts}>
        <div className={styles.menuContacts_Info}>
          <h5 className={styles.menuContacts_header}>CONTACT INFO</h5>
          <p>{CMS.email}</p>
        </div>            
        <div className={styles.menuContacts_SocialMedia}>
          <h5 className={styles.menuContacts_header}>CONNECT WITH US</h5>
          <p>
            <a href={CMS.facebook} target="__blank" className={styles.menuContainer_connect_item}>
              Facebook
            </a>
          </p>
          <p>
            <a href={CMS.airbnb} target="__blank" className={styles.menuContainer_connect_item}>
              AirBnb
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
)
