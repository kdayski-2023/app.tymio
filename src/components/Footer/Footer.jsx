import React from 'react';
import { NavLink } from 'react-router-dom';

import * as Styled from './styled';
import FooterLogo from '../../assets/img/icons/footer-logo.png';
import { useRoutes } from '../../hooks';

const Footer = () => {
	const { footer, media } = useRoutes();

	return (
		<Styled.Footer>
			<Styled.HR />
			<Styled.Content>
				<Styled.Logo width={168} height={112} src={FooterLogo} alt={''} />
				<Styled.Links>
					<Styled.RoutesLinks>
						{footer.map((item, index) => (
							<Styled.Route key={index}>
								<NavLink
									key={index}
									to={item.path}
									target={item.target || '_self'}>
									{item.label}
								</NavLink>
							</Styled.Route>
						))}
					</Styled.RoutesLinks>
				</Styled.Links>
				<Styled.Socials>
					{media.map((item, i) => (
						<NavLink key={i} to={item.path} target={item.target || '_self'}>
							{item.label}
						</NavLink>
					))}
				</Styled.Socials>
			</Styled.Content>
			<Styled.Copyrights>© 2023 Tymio. All rights reserved</Styled.Copyrights>
		</Styled.Footer>
	);
};

export default Footer;
