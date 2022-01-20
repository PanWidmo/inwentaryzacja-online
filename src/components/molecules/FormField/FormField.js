import React from 'react';
import { LabelAboveInput } from 'components/atoms/LabelAboveInput/LabelAboveInput';
import { Input } from 'components/atoms/Input/Input';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1em 0;
`;

const FormField = ({ label, name, id, type, value }) => {
  return (
    <Wrapper>
      <LabelAboveInput htmlFor={id} name={name}>
        {label}
      </LabelAboveInput>
      <Input name={name} id={id} type={type} value={value} />
    </Wrapper>
  );
};

export default FormField;
