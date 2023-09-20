/**
 * Assign the project to an employee.
 * @param {string} display - display style for any monitor resolution.
 * @param {string} lgDisplay - display style for monitor resolution less than 992.
 * @param {string} mdDisplay - display style for monitor resolution less than 768.
 * @param {string} xsDisplay - display style for monitor resolution less than 576.
 *
 * @param {string} column - grid-column style for any resolution.
 * @param {string} lgColumn - grid-column style for monitor resolution less than 992.
 * @param {string} mdColumn - grid-column style for monitor resolution less than 768.
 * @param {string} xsColumn - grid-column style for monitor resolution less than 576.
 *
 * @param {string} row - grid-row style for ant resolution.
 * @param {string} lgRow - grid-row style for monitor resolution less than 992.
 * @param {string} mdRow - grid-row style for monitor resolution less than 768.
 * @param {string} xsRow - grid-row style for monitor resolution less than 576.
 *
 * @param {string} align - text-align style for any resolution.
 * @param {string} lgAlign - text-align style for monitor resolution less than 992.
 * @param {string} mdAlign - text-align style for monitor resolution less than 768.
 * @param {string} xsAlign - text-align style for monitor resolution less than 576.
 */

import styled from 'styled-components';

const getResolutionValidProp = (resolutions, width) => {
  const { xs, md, lg, any } = resolutions;
  switch (width) {
    case 992:
      if (lg) return lg;
      if (any) return any;
      break;
    case 768:
      if (md) return md;
      if (lg) return lg;
      if (any) return any;
      break;
    case 576:
      if (xs) return xs;
      if (md) return md;
      if (lg) return lg;
      if (any) return any;
      break;
    default:
      return any || '';
  }
};

export const Grid = styled.div`
  margin: 0;
  align-items: ${({ alignItems }) => (alignItems ? alignItems : 'center')};
  display: grid;
  grid-template-columns: ${({ columns }) =>
    columns ? `repeat(${columns}, 1fr)` : 'repeat(12, 1fr)'};
  gap: ${({ gap }) => (gap ? gap : 'initial')};
  width: ${({ width }) => width};
`;

export const GridElem = styled.div`
  display: ${({ display }) => (display ? display : 'block')};
  grid-column: ${({ column }) => (column ? column : 'span 12')};
  grid-row: ${({ row }) => row};
  grid-column-start: ${({ offset }) => (offset ? offset + 1 : 0)};
  padding: 0;
  height: ${({ height }) => (height ? `${height}px` : 'auto')};
  width: ${({ inline }) => (inline ? '100%' : 'auto')};
  display: ${({ inline, display }) =>
    inline ? 'inline-grid' : display || 'block'};
  text-align: ${({ textAlign }) => textAlign || 'center'};
  margin-left: ${({ floatRight }) => floatRight && 'auto'};

  @media (max-width: 992px) {
    display: ${({ display, lgDisplay }) =>
      getResolutionValidProp({ any: display, lg: lgDisplay }, 992) || 'block'};
    grid-column: ${({ column, lgColumn }) =>
      getResolutionValidProp({ any: column, lg: lgColumn }, 992) || 'span 12'};
    grid-row: ${({ row, lgRow }) =>
      getResolutionValidProp({ any: row, lg: lgRow }, 992)};
    text-align: ${({ textAlign, lgTextAlign }) =>
      getResolutionValidProp({ any: textAlign, lg: lgTextAlign }, 992) ||
      'left'};
    grid-column-start: ${({ offset }) => (offset ? offset + 1 : 0)};
    width: auto;
  }

  @media (max-width: 768px) {
    display: ${({ display, lgDisplay, mdDisplay }) =>
      getResolutionValidProp(
        { any: display, lg: lgDisplay, md: mdDisplay },
        768
      ) || 'block'};
    grid-column: ${({ column, lgColumn, mdColumn }) =>
      getResolutionValidProp(
        { any: column, lg: lgColumn, md: mdColumn },
        768
      ) || 'span 12'};
    grid-row: ${({ row, lgRow, mdRow }) =>
      getResolutionValidProp({ any: row, lg: lgRow, md: mdRow }, 768)};
    text-align: ${({ textAlign, lgTextAlign, mdTextAlign }) =>
      getResolutionValidProp(
        { any: textAlign, lg: lgTextAlign, md: mdTextAlign },
        768
      ) || 'left'};
    grid-column-start: ${({ offset }) => (offset ? offset + 1 : 0)};
  }

  @media (max-width: 576px) {
    display: ${({ display, lgDisplay, mdDisplay, xsDisplay }) =>
      getResolutionValidProp(
        { any: display, lg: lgDisplay, md: mdDisplay, xs: xsDisplay },
        576
      ) || 'block'};
    grid-column: ${({ column, lgColumn, mdColumn, xsColumn }) =>
      getResolutionValidProp(
        { any: column, lg: lgColumn, md: mdColumn, xs: xsColumn },
        576
      ) || 'span 12'};
    grid-row: ${({ row, lgRow, mdRow, xsRow }) =>
      getResolutionValidProp(
        { any: row, lg: lgRow, md: mdRow, xs: xsRow },
        576
      )};
    text-align: ${({ textAlign, lgTextAlign, mdTextAlign, xsTextAlign }) =>
      getResolutionValidProp(
        {
          any: textAlign,
          lg: lgTextAlign,
          md: mdTextAlign,
          xs: xsTextAlign,
        },
        576
      ) || 'left'};
  }
`;
