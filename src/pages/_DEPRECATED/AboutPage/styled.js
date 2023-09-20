import styled from 'styled-components';

export const CardWrapper = styled.div`
  display: block;
  margin: 0 auto;
  width: 1004px;
  height: 652px;

  div {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 1200px) {
    width: 100%;
    height: 572px;
  }

  @media (max-width: 1024px) {
    height: 510px;
  }

  @media (max-width: 900px) {
    height: 444px;
  }

  @media (max-width: 768px) {
    height: 360px;
  }

  @media (max-width: 600px) {
    height: 300px;
  }

  @media (max-width: 480px) {
    height: 285px;
  }
`;

export const IFrame = styled.iframe`
  display: block;
  margin: 0 auto;
  width: 944px;
  height: 592px;

  @media (max-width: 1200px) {
    width: 100%;
    height: 512px;
  }

  @media (max-width: 1024px) {
    height: 450px;
  }

  @media (max-width: 900px) {
    height: 384px;
  }

  @media (max-width: 768px) {
    height: 300px;
  }

  @media (max-width: 600px) {
    height: 240px;
  }

  @media (max-width: 480px) {
    height: 225px;
  }
`;
