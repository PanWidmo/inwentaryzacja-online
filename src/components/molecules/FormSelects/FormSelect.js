import { LabelAboveInput } from 'components/atoms/LabelAboveInput/LabelAboveInput';
import { Wrapper } from 'components/molecules/FormSelects/FormSelect.styles';

export const FormSelect = ({ label, name, id, value, onChange, data }) => {
  return (
    <Wrapper>
      <LabelAboveInput htmlFor={id}>{label}</LabelAboveInput>
      <select name={name} id={id} value={value} onChange={onChange}>
        {data.map((el) => {
          return (
            <option key={el.id} value={el.id}>
              {el.name} {el.surname}
            </option>
          );
        })}
      </select>
    </Wrapper>
  );
};
