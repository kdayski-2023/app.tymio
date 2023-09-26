import React from 'react';
import * as TymioUI from '../';
import { useNavigate } from 'react-router-dom';
import { TYPOGRAPHY_SIZE } from '../../models/types';

const RouteMenu = ({ options, active, ...props }) => {
	const navigate = useNavigate();
	return (
		<TymioUI.Menu {...props}>
			{options.map(({ path, label }, index) => (
				<TymioUI.Menu.Item
					key={index}
					active={path === active}
					onClick={() => navigate(path)}>
					<TymioUI.Typography size={TYPOGRAPHY_SIZE.SMALL}>
						{label}
					</TymioUI.Typography>
				</TymioUI.Menu.Item>
			))}
		</TymioUI.Menu>
	);
};

export default RouteMenu;
