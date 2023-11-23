import Footer from "@/features/dashboard/ui/footer/Footer";
import Navbar from "@/features/dashboard/ui/navbar/Navbar";
import Sidebar from "@/features/dashboard/ui/sidebar/Sidebar";
import styles from "./styles.module.css";

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <Sidebar />
      </div>
      <div className={styles.content}>
        <Navbar />
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
