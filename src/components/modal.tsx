import React from "react";
import * as styles from "./modal.module.scss";

interface Modal {
  showModal: boolean;
}

export const Modal = (props: Modal) => (
  <div className={`${styles.menuModal} ${props.showModal ? styles.menuModal_open : styles.menuModal_closed}`}>
    <div className={styles.menuContainer}>
      <ol className={styles.menuActions}>
        <li>Home</li>
        <li>About</li>
        <li>Apartments</li>
      </ol>
      <div className={styles.menuContacts}>
        <div className={styles.menuContacts_Info}>
          <h5 className={styles.menuContacts_header}>CONTACT INFO</h5>
          <p>info@yourdomain.com</p>
        </div>            
        <div className={styles.menuContacts_SocialMedia}>
          <h5 className={styles.menuContacts_header}>CONNECT WITH US</h5>
          <p>Facebook</p>
          <p>AirBnb</p>
        </div>
      </div>
    </div>
  </div>
)
