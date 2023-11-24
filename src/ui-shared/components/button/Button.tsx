import styles from "./styles.module.css";

type IButtonProps = {
  text: string;
  color?: string;
  onClick?: () => void;
};

function Button({ text, onClick, color = "" }: IButtonProps) {
  return (
    <div>
      <button
        className={[styles.button, color].join(" ").trimEnd()}
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
}

function PrimaryButton({ text, onClick }: IButtonProps) {
  return <Button text={text} onClick={onClick} color={styles.primary} />;
}

function SecondaryButton({ text, onClick }: IButtonProps) {
  return <Button text={text} onClick={onClick} color={styles.secondary} />;
}

export { Button, PrimaryButton, SecondaryButton };
