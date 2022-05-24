import React from 'react';
import { LabelAboveInput } from 'components/atoms/LabelAboveInput/LabelAboveInput';
import { Input } from 'components/atoms/Input/Input';
import { Wrapper } from 'components/molecules/FormField/FormField.styles';

export const FormField = React.forwardRef(({ label, name, id, type, value }, ref) => {
  return (
    <Wrapper>
      <LabelAboveInput htmlFor={id}>{label}</LabelAboveInput>
      <Input name={name} id={id} type={type} value={value} ref={ref} />
    </Wrapper>
  );
});
