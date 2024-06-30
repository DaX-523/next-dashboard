"use client";
import React from "react";
import Link from "next/link";
import styles from "./menulink.module.css";
import { usePathname } from "next/navigation";

const MenuLink = ({ icon, path, title }) => {
  const pathname = usePathname();
  return (
    <Link
      href={path}
      className={`${styles.item} ${pathname === path && styles.active}`}
    >
      <li>
        {icon} {title}
      </li>
    </Link>
  );
};

export default MenuLink;
