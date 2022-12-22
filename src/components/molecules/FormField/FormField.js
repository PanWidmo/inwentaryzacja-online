import { LabelAboveInput } from 'components/atoms/LabelAboveInput/LabelAboveInput';
import { Input } from 'components/atoms/Input/Input';
import { Wrapper } from 'components/molecules/FormField/FormField.styles';
import { ErrorMessage } from 'components/molecules/ErrorMessage/ErrorMessage';

export const FormField = ({ label, name, id, type, value, onChange, onBlur, error, disabled }) => {
  return (
    <Wrapper>
      <LabelAboveInput htmlFor={id}>{label}</LabelAboveInput>
      <Input name={name} id={id} type={type} value={value} onChange={onChange} onBlur={onBlur} disabled={disabled} />
      {error ? <ErrorMessage errorMsg={error} /> : null}
    </Wrapper>
  );
};
