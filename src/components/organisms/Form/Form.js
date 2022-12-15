import { StyledForm } from 'components/organisms/Form/Form.styles';

export const Form = ({ id, onSubmit, children }) => {
  return (
    <StyledForm id={id} onSubmit={onSubmit}>
      {children}
    </StyledForm>
  );
};
