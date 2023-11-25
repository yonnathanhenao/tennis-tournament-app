"use client";

import { useFormState, useFormStatus } from "react-dom";

import { PrimaryButton } from "@/ui-shared/components/button/Button";
import inputStyles from "@/ui-shared/components/text-field/style.module.css";
import { authenticate } from "../../actions/auth.actions";
import styles from "./styles.module.css";

function LoginForm() {
  const [_, formAction] = useFormState(authenticate, null);

  return (
    <div className={styles.container}>
      <form action={formAction} className={styles.form}>
        <h1>Iniciar sesión</h1>
        <div className={inputStyles.formInput}>
          <label htmlFor="email">Correo</label>
          <input type="email" name="email" required />
        </div>
        <div className={inputStyles.formInput}>
          <label htmlFor="password">Contraseña</label>
          <input type="password" name="password" required />
        </div>
        <br />
        <PrimaryButton text="Ingresar" fullWidth />
      </form>
    </div>
  );
}

function LoginButton() {
  const { pending } = useFormStatus();

  return <button aria-disabled={pending}>Ingresar</button>;
}

export default LoginForm;
