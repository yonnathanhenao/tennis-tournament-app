import MenuLink from "./menu-link/MenuLink";
import styles from "./styles.module.css";
import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdAccountCircle,
  MdShoppingBag,
} from "react-icons/md";

const menuItems = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: <MdDashboard />,
  },
  {
    title: "Usuarios",
    path: "/dashboard/users",
    icon: <MdSupervisedUserCircle />,
  },
  {
    title: "Torneos",
    path: "/dashboard/tournaments",
    icon: <MdShoppingBag />,
  },
];

const Sidebar = async () => {
  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <MdAccountCircle className={styles.userIcon} />
        <div className={styles.userDetail}>
          <span className={styles.username}>{"user.username"}</span>
          <span className={styles.userTitle}>Administrator</span>
        </div>
      </div>
      <ul>
        {menuItems.map((item) => (
          <MenuLink item={item} key={item.title} />
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
