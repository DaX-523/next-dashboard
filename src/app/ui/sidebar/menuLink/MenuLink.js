"use client";
import React from "react";
import Link from "next/link";
import styles from "./menulink.module.css";

const MenuLink = ({ icon, path, title }) => {
  return (
    <Link href={path} className={styles.item}>
      <li>
        {icon} {title}
      </li>
    </Link>
  );
};

export default MenuLink;
