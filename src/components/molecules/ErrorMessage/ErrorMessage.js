import { Wrapper } from 'components/molecules/ErrorMessage/ErrorMessage.styles';

export const ErrorMessage = ({ errorMsg }) => {
  return <Wrapper>{errorMsg}</Wrapper>;
};
