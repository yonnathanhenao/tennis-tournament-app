import styles from "./styles.module.css";

export enum ButtonColor {
  prymary,
  secondary,
  red,
}

export enum ButtonSize {
  small,
  medium,
  large,
}

type IButtonProps = {
  text: string;
  color?: ButtonColor;
  size?: ButtonSize;
  onClick?: () => void;
};

function Button({
  text,
  onClick,
  color = ButtonColor.prymary,
  size = ButtonSize.medium,
}: IButtonProps) {
  let buttonColor;
  let buttonSize;

  switch (color) {
    case ButtonColor.prymary:
      buttonColor = styles.primary;
      break;
    case ButtonColor.secondary:
      buttonColor = styles.secondary;
      break;
    case ButtonColor.red:
      buttonColor = styles.red;
      break;
    default:
      buttonColor = styles.primary;
      break;
  }

  switch (size) {
    case ButtonSize.small:
      buttonSize = styles.small;
      break;
    case ButtonSize.medium:
      buttonSize = styles.medium;
      break;
    case ButtonSize.large:
      buttonSize = styles.large;
      break;
    default:
      buttonSize = ButtonSize.medium;
      break;
  }
  return (
    <div>
      <button
        className={[styles.button, buttonColor, buttonSize].join(" ").trimEnd()}
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
}

function PrimaryButton({ text, onClick }: IButtonProps) {
  return <Button text={text} onClick={onClick} color={ButtonColor.prymary} />;
}

function SecondaryButton({ text, onClick }: IButtonProps) {
  return <Button text={text} onClick={onClick} color={ButtonColor.secondary} />;
}

export { Button, PrimaryButton, SecondaryButton };
