import { Wrapper } from 'components/molecules/LoadingorError/LoadingOrError.styles';
import loadingGif from 'assets/icons/loading.gif';

export const LoadingOrError = ({ msg }) => {
  return (
    <Wrapper>
      <img src={loadingGif} alt="Loading icon" />
      <p>{msg}</p>
    </Wrapper>
  );
};
