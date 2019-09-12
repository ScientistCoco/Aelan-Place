import React from "react";
import { Icon } from 'antd';
import * as styles from "./navbar.module.scss";

interface INavbar {
  handleToggle: any;
  menuToggled: boolean;  
}

export const Navbar = (props: INavbar) => (
  <div className={styles.navbar}>
    <Icon type="gitlab" className={styles.navbar_icon}/>
    <div className={
      `${styles.navbar_icon} ${styles.menu_icon} 
        ${props.menuToggled ? styles.menu_icon__open : styles.menu_icon__closed}`
      } 
      onClick={props.handleToggle}>
      <span/>
      <span/>
      <span/>
      <span/>
    </div>
  </div>
)
