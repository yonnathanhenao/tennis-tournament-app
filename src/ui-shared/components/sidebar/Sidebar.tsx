import {
  MdAccountCircle,
  MdDashboard,
  MdSportsTennis,
  MdSupervisedUserCircle,
} from "react-icons/md";

import { IUserInfo } from "@/hooks/auth";
import MenuLink from "./menu-link/MenuLink";
import styles from "./styles.module.css";
import Link from "next/link";

const menuItems = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: <MdDashboard />,
  },
  {
    title: "Usuarios",
    path: "/users",
    icon: <MdSupervisedUserCircle />,
  },
  {
    title: "Torneos",
    path: "/tournaments",
    icon: <MdSportsTennis />,
  },
];

type SidebarProps = {
  user: IUserInfo;
};

const Sidebar = async ({ user }: SidebarProps) => {
  return (
    <div className={styles.container}>
      <Link href={"/dashboard"}>
        <div className={styles.user}>
          <MdAccountCircle className={styles.userIcon} />
          <div className={styles.userDetail}>
            <span className={styles.username}>{user.name}</span>
            <span className={styles.userTitle}>Administrator</span>
          </div>
        </div>
      </Link>
      <ul>
        {menuItems.map((item) => (
          <MenuLink item={item} key={item.title} />
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
