"use client";

import { useFormState, useFormStatus } from "react-dom";

import { authenticate } from "../../actions/auth.actions";
import styles from "./styles.module.css";

function LoginForm() {
  const [_, formAction] = useFormState(authenticate, null);

  return (
    <div className={styles.container}>
      <form action={formAction} className={styles.form}>
        <label htmlFor="email">Nombre</label>
        <input type="text" name="email" />
        <label htmlFor="password">Password</label>
        <input type="text" name="password" />
        <LoginButton />
      </form>
    </div>
  );
}

function LoginButton() {
  const { pending } = useFormStatus();

  return <button aria-disabled={pending}>Ingresar</button>;
}

export default LoginForm;
