import React from 'react';

import Table from 'components/atoms/Table/Table';
import { Button } from 'components/atoms/Button/Button';
import { Wrapper, InnerWrapper, StyledFooter } from 'assets/styles/TableComponents';
import { assets } from 'mocks/data/assets';
import { useAuth } from 'hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const AdminPanelFixedAssets = () => {
  const dane = assets;
  const navigate = useNavigate();
  const { signOutUser } = useAuth();

  const handleLogout = () => {
    signOutUser();
  };

  const handleAddAssets = () => {
    navigate('/NewAssetsAdding');
  };

  return (
    <Wrapper>
      <div>
        <h2>Środki Trwałe</h2>
        <h4>Firma XYZ, ul. Wąsacza 1A/20002255</h4>
        <Button name="red" where="1" onClick={handleLogout}>
          Wyloguj
        </Button>
      </div>
      <InnerWrapper>
        <Table dane={dane} />

        <Button name="blue" onClick={handleAddAssets}>
          Dodaj
        </Button>
      </InnerWrapper>
      <StyledFooter>
        <Button name="red" where="3">
          Cofnij
        </Button>
        <Button name="green" where="5">
          Zatwierdź
        </Button>
      </StyledFooter>
    </Wrapper>
  );
};

export default AdminPanelFixedAssets;
