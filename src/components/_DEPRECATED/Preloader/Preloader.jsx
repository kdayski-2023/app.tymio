import React, { useEffect } from 'react';
import logo from '../../../assets/img/icons/logo-footer.svg';
import * as Styled from './styled';

const Preloader = () => {
	useEffect(() => {
		let preloader = document.getElementById('preloader');
		setTimeout(() => {
			preloader.classList.add('preloader-hidden');
		}, 1500);

		setTimeout(() => {
			preloader.classList.add('d-none');
		}, 2500);
	}, []);

	return (
		<Styled.Preloader id="preloader">
			<img src={logo} alt="" width={300} height={100} />
		</Styled.Preloader>
	);
};

export default Preloader;
