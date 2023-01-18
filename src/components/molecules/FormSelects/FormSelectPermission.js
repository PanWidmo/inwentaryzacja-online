import { LabelAboveInput } from 'components/atoms/LabelAboveInput/LabelAboveInput';
import { Wrapper } from 'components/molecules/FormSelects/FormSelect.styles';
import { ErrorMessage } from 'components/molecules/ErrorMessage/ErrorMessage';

export const FormSelectPermission = ({ label, name, id, value, onChange, error }) => {
  return (
    <Wrapper>
      <LabelAboveInput htmlFor={id}>{label}</LabelAboveInput>
      <select name={name} id={id} value={value} onChange={onChange}>
        <option hidden>Proszę wybrać</option>
        <option value="1" label="Użytkownik">
          Użytkownik
        </option>
        <option value="2" label="Księgowy">
          Księgowy
        </option>
        <option value="3" label="Administrator">
          Administrator
        </option>
      </select>
      {error ? <ErrorMessage errorMsg={error} /> : null}
    </Wrapper>
  );
};
