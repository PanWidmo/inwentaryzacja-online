import { LabelAboveInput } from 'components/atoms/LabelAboveInput/LabelAboveInput';
import { Wrapper } from 'components/molecules/FormSelects/FormSelect.styles';
import { ErrorMessage } from 'components/molecules/ErrorMessage/ErrorMessage';

export const FormSelect = ({ label, name, id, value, onChange, data, error }) => {
  return (
    <Wrapper>
      <LabelAboveInput htmlFor={id}>{label}</LabelAboveInput>
      <select name={name} id={id} value={value} onChange={onChange}>
        <option hidden>Proszę wybrać</option>
        {data.map((el) => {
          return (
            <option key={el.id} value={el.id}>
              {el.firstName} {el.surname}
            </option>
          );
        })}
      </select>
      {error ? <ErrorMessage errorMsg={error} /> : null}
    </Wrapper>
  );
};
