"use client";

import { logout } from "@/features/user/actions/user";
import { MdLogout, MdNotifications } from "react-icons/md";
import styles from "./styles.module.css";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.icons}>
        <MdNotifications size={20} />
      </div>
      <form action={logout}>
        <button className={styles.logout}>
          <MdLogout />
          Salir
        </button>
      </form>
    </div>
  );
};

export default Navbar;
