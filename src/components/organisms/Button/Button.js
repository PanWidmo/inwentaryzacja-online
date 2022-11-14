import { StyledButton } from 'components/organisms/Button/Button.styles';

export const Button = ({ text = 'Button', name = 'default', type = 'button', form, onClick }) => {
  return (
    <StyledButton name={name} type={type} form={form} onClick={onClick}>
      {text}
    </StyledButton>
  );
};
