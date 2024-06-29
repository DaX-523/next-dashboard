import Image from "next/image";
import styles from "./sidebar.module.css";
import {
  MdAttachMoney,
  MdDashboard,
  MdShoppingBag,
  MdSupervisedUserCircle,
} from "react-icons/md";
import Link from "next/link";
import MenuLink from "./menuLink/MenuLink";

const menuItems = [
  {
    title: "Users",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <MdDashboard />,
      },
      {
        title: "Users",
        path: "/dashboard/users",
        icon: <MdSupervisedUserCircle />,
      },
      {
        title: "Products",
        path: "/dashboard/products",
        icon: <MdShoppingBag />,
      },
      {
        title: "Transictions",
        path: "/dashboard/transactions",
        icon: <MdAttachMoney />,
      },
    ],
  },
];

const Sidebar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.userInfo}>
        <Image src="/avatar.png" alt="Logo" width={50} height={50} />
        <div className={styles.userName}>
          <span className={styles.userTitle}>Hello</span>
          <span className={styles.userSubTitle}>World</span>
        </div>
      </div>
      <div className={styles.menu}>
        {menuItems.map((item, index) => {
          return (
            <ul className={styles.menuList} key={index}>
              <span className={styles.menuItem}>{item.title}</span>
              {item.list.map((i, ind) => (
                <MenuLink
                  icon={i.icon}
                  path={i.path}
                  title={i.title}
                  key={ind}
                ></MenuLink>
              ))}
            </ul>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
