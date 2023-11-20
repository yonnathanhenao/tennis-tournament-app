import styles from "./styles.module.css";

function LoginForm() {
  return (
    <div className={styles.container}>
      <form action="" className={styles.form}>
        <label htmlFor="email">Nombre</label>
        <input type="text" name="email" />
        <label htmlFor="password">Password</label>
        <input type="text" name="password" />
        <button>Ingresar</button>
      </form>
    </div>
  );
}

export default LoginForm;
