import React from 'react';
import * as Styled from './styled';
import { useNavigate } from 'react-router-dom';

const MenuWeb = ({ light }) => {
  const linkData = [
    { label: 'how it works', path: '/ui' },
    { label: 'Use cases', path: '/ui' },
    { label: 'Safety', path: '/ui' },
    { label: 'Ambassadors', path: '/ui' },
    { label: 'FAQ', path: '/ui' },
  ];
  const navigate = useNavigate();
  return (
    <Styled.Container light={light}>
      {linkData.map((item, index) => (
        <Styled.Link
          key={index}
          light={light}
          onClick={() => navigate(item.path)}
        >
          {item.label}
        </Styled.Link>
      ))}
    </Styled.Container>
  );
};

export default MenuWeb;
