import Sidebar from "@/ui/sidebar/Sidebar";
import styles from "@/ui/dashboard/dashboard.module.css";
import Navbar from "@/ui/navbar/Navbar";

export const metadata = {
  title: "NextJS Dashboard",
  description: "Generated by create next app",
};

const layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <Sidebar />
      </div>
      <div className={styles.nav}>
        <Navbar />
        <div className={styles.wrapper}>
          <div className={styles.main}>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default layout;
