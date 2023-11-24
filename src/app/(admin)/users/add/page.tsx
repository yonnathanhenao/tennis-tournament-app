import styles from "./styles.module.css";

function AddUserPage() {
  return (
    <div className={styles.container}>
      <form action="" className={styles.form}>
        <label htmlFor="name">Nombre</label>
        <input type="text" name="name" />
        <label htmlFor="lastName">lastName</label>
        <input type="text" name="lastName" />
        <label htmlFor="email">email</label>
        <input type="text" name="email" />
        <label htmlFor="password">password</label>
        <input type="text" name="password" />
        <label htmlFor="birthDate">birthDate</label>
        <input type="text" name="birthDate" />
        <label htmlFor="address">address</label>
        <input type="text" name="address" />

        <button>Guardar</button>
      </form>
    </div>
  );
}

export default AddUserPage;
