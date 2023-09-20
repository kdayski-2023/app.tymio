import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import useRoutes from './hooks/useRoutes';
import BurgerMenu from './components/BurgerMenu';
import SellBuyLink from './components/SellBuyLink';
import * as TymioUI from '..';
import * as Styled from './styled';
// import { useWallet } from '../../hooks';

const Header = () => {
  const { routes } = useRoutes();
  // const { connected, userAddress } = useWallet();
  const [active, setActive] = useState('');
  const location = useLocation();

  useEffect(() => {
    setActive(location.pathname);
  }, [location]);

  return (
    <Styled.Container>
      <Styled.Flex>
        <NavLink to={'/'}>
          <TymioUI.LogoIcon />
        </NavLink>
        <Styled.Actions>
          <SellBuyLink />
          {routes.map(({ title, path }, i) => (
            <Styled.Link
              key={i}
              to={path}
              active={path === active ? 'true' : undefined}
            >
              {title}
            </Styled.Link>
          ))}
          {/* {connected && userAddress ? (
            <Styled.Link
              to={`/ref`}
              active={`/ref` === active ? 'true' : undefined}
            >
              Ref
            </Styled.Link>
          ) : null} */}

          <TymioUI.WalletButton />
          <TymioUI.NetworkButton />
        </Styled.Actions>
        <Styled.MobileActions>
          <BurgerMenu />
        </Styled.MobileActions>
      </Styled.Flex>
    </Styled.Container>
  );
};

export default Header;
