// import Image from "next/image";
import MenuLink from "./menu-link/MenuLink";
import styles from "./styles.module.css";
import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdAccountCircle,
  MdShoppingBag,
  MdLogout,
} from "react-icons/md";
// import { auth, signOut } from "@/app/auth";

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
  // const { user } = await auth();
  return (
    <div className={styles.container}>
      <div className={styles.user}>
        {/* <Image
          className={styles.userImage}
          src={user.img || "/noavatar.png"}
          alt=""
          width="50"
          height="50"
        /> */}
        <MdAccountCircle className={styles.userIcon} />
        <div className={styles.userDetail}>
          <span className={styles.username}>{"user.username"}</span>
          <span className={styles.userTitle}>Administrator</span>
        </div>
      </div>
      <ul className={styles.list}>
        {menuItems.map((item) => (
          <MenuLink item={item} key={item.title} />
        ))}
      </ul>
      <form
        action={async () => {
          "use server";
          // await signOut();
        }}
      >
        <button className={styles.logout}>
          <MdLogout />
          Logout
        </button>
      </form>
    </div>
  );
};

export default Sidebar;
