import React from "react";
import styles from "./Navbar.module.css";
import Logo from "../Logo/Logo.jsx";

function Navbar() {
  return (
    <div className={styles.navbar}>
      <Logo />
    </div>
  );
}

export default Navbar;
