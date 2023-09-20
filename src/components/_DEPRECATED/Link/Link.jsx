import * as Styled from './styled';

const Link = ({children, ...props}) => {
  return <Styled.Link {...props}>{children}</Styled.Link>;
};

export default Link;
