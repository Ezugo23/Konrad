import { StyledButton } from "./button.styled"

export default function Button({ label, size = "sm", variant = "default" }) {
  return (
    <StyledButton size={size} variant={variant}>
      {label}
    </StyledButton>
  );
}