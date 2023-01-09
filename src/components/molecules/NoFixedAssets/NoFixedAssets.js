import { Wrapper } from 'components/molecules/NoFixedAssets/NoFixedAssets.styles';
import emptyIcon from 'assets/icons/empty.png';

export const NoFixedAssets = ({ msg = 'Nie posiadasz żadnych środków trwałych.' }) => {
  return (
    <Wrapper>
      <img src={emptyIcon} alt="Empty icon" />

      <p>{msg}</p>
    </Wrapper>
  );
};
