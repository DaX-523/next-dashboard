"use client";
import React from "react";
import {
  MdNotifications,
  MdOutlineChat,
  MdPublic,
  MdSearch,
} from "react-icons/md";
import styles from "./navbar.module.css";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname()
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>{pathname.split('/').pop()}</h2>
      <div className={styles.utilities}>
        <div className={styles.search}>
          <MdSearch size={20} />
          <input className={styles.input} placeholder="Search..."></input>
        </div>
        <div className={styles.icons}>
          <MdOutlineChat size={20} />
          <MdNotifications size={20} />
          <MdPublic size={20} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
