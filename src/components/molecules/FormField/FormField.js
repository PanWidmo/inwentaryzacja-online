import React from 'react';
import { LabelAboveInput } from 'components/atoms/LabelAboveInput/LabelAboveInput';
import { Input } from 'components/atoms/Input/Input';
import { Wrapper } from 'components/molecules/FormField/FormField.styles';

export const FormField = ({ label, name, id, type, value, onChange, onBlur }) => {
  return (
    <Wrapper>
      <LabelAboveInput htmlFor={id}>{label}</LabelAboveInput>
      <Input name={name} id={id} type={type} value={value} onChange={onChange} onBlur={onBlur} />
    </Wrapper>
  );
};
