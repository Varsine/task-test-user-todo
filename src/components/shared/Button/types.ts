type ButtonType = 'submit' | 'reset' | 'button';

export interface IButtonProps {
  type?: ButtonType;
  disabled?: boolean;
  className?: string;
  onClick?: () => void;
}
