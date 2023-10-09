import React from 'react';
import { NavLink } from 'react-router-dom';

import * as Styled from './styled';
import FooterLogo from '../../assets/img/icons/footer-logo.png';

const Footer = () => {
	return (
		<Styled.Footer>
			<Styled.HR />
			<Styled.Content>
				<Styled.Logo width={168} height={112} src={FooterLogo} alt={''} />
				<Styled.Links>
					<Styled.Column>
						<NavLink to={'https://tymio.com/'} target="_blank">
							How it works
						</NavLink>
						<NavLink to={'https://tymio.com/'} target="_blank">
							Use cases
						</NavLink>
						<NavLink to={'https://tymio.com/'} target="_blank">
							Safety
						</NavLink>
						<NavLink to={'https://tymio.com/'} target="_blank">
							FAQ
						</NavLink>
					</Styled.Column>
					<Styled.Column>
						<NavLink to={'https://tymio.com/'} target="_blank">
							Ambassadors
						</NavLink>
						<NavLink to={'https://tymio.com/'} target="_blank">
							White Paper
						</NavLink>
						<NavLink to={'https://tymio.com/'} target="_blank">
							Terms Of Use
						</NavLink>
					</Styled.Column>
				</Styled.Links>
				<Styled.Socials>
					<NavLink to={'https://tymio.com/'} target="_blank">
						Medium
					</NavLink>
					<NavLink to={'https://tymio.com/'} target="_blank">
						Telegram
					</NavLink>
					<NavLink to={'https://tymio.com/'} target="_blank">
						Twitter
					</NavLink>
					<NavLink to={'https://tymio.com/'} target="_blank">
						info@Tymio.com
					</NavLink>
				</Styled.Socials>
			</Styled.Content>
			<Styled.Copyrights>© 2023 Tymio. All rights reserved</Styled.Copyrights>
		</Styled.Footer>
	);
};

export default Footer;
