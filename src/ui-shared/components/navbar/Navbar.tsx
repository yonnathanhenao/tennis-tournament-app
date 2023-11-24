"use client";

import styles from "./styles.module.css";
import { MdNotifications, MdLogout } from "react-icons/md";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.icons}>
        <MdNotifications size={20} />
      </div>
      <form action={async () => {}}>
        <button className={styles.logout}>
          <MdLogout />
          Salir
        </button>
      </form>
    </div>
  );
};

export default Navbar;
