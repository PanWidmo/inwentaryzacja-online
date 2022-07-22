import React from 'react';
import { LabelAboveInput } from 'components/atoms/LabelAboveInput/LabelAboveInput';
import { Wrapper } from 'components/molecules/FormSelectPermission/FormSelectPermission.styles';

export const FormSelectPermission = ({ label, name, id, value, onChange }) => {
  return (
    <Wrapper>
      <LabelAboveInput htmlFor={id}>{label}</LabelAboveInput>
      <select name={name} id={id} value={value} onChange={onChange}>
        <option value="1" label="Administrator">
          Administrator
        </option>
        <option value="2" label="Ksiegowy">
          Ksiegowy
        </option>
        <option value="3" label="Uzytkownik">
          Uzytkownik
        </option>
      </select>
    </Wrapper>
  );
};
