"use client";

import { usePathname } from "next/navigation";
import styles from "./styles.module.css";
import {
  MdNotifications,
  MdOutlineChat,
  MdPublic,
  MdLogout,
} from "react-icons/md";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className={styles.container}>
      <div className={styles.title}>{pathname.split("/").pop()}</div>
      <div className={styles.menu}>
        <div className={styles.icons}>
          <MdOutlineChat size={20} />
          <MdNotifications size={20} />
          <MdPublic size={20} />
        </div>
        <form action={async () => {}}>
          <button className={styles.logout}>
            <MdLogout />
            Salir
          </button>
        </form>
      </div>
    </div>
  );
};

export default Navbar;
