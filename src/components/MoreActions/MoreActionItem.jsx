import React from 'react';

import * as Styled from './styled';

const MoreActionItem = ({ action, children }) => {
	return <Styled.Action onClick={action}>{children}</Styled.Action>;
};

export default MoreActionItem;
