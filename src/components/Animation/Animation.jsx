import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';

import * as Styled from './styled';

const Animation = ({ children, type, delay, ...props }) => {
	const ref = useRef();
	const [textAnimEnd, setTextAnimEnd] = useState(false);
	const [inUserVision, setInUserVision] = useState(false);
	const [hasTriggeredAnimation, setHasTriggeredAnimation] = useState(false);
	const [animationActive, setAnimationActive] = useState(false);
	const prevScrollY = useRef(window.scrollY);

	// Trigger animation on scroll in view
	useLayoutEffect(() => {
		const updateVisibility = () => {
			if (!hasTriggeredAnimation) {
				const rect = ref.current.getBoundingClientRect();
				const isScrollingDown = window.scrollY >= prevScrollY.current;

				if (
					(isScrollingDown &&
						rect.top <= window.innerHeight &&
						rect.top >= 0) ||
					(!isScrollingDown &&
						rect.bottom <= window.innerHeight &&
						rect.bottom >= 0)
				) {
					setInUserVision(true);
					setHasTriggeredAnimation(true);
				} else {
					setInUserVision(false);
				}
			}
			prevScrollY.current = window.scrollY;
		};
		updateVisibility();
		window.addEventListener('scroll', updateVisibility);
		return () => {
			window.removeEventListener('scroll', updateVisibility);
		};
	}, [hasTriggeredAnimation]);

	// Text animation
	useEffect(() => {
		if (type === 'text' && inUserVision && hasTriggeredAnimation) {
			const arr = ref.current.innerHTML.split('');
			ref.current.innerHTML = '';
			let count = 0;
			setTimeout(() => {
				setAnimationActive(true);
				const inter = setInterval(() => {
					if (ref.current) {
						ref.current.innerHTML += arr[count] === ' ' ? '&nbsp;' : arr[count];
						count++;
						if (count >= arr.length) {
							setTimeout(() => {
								setTextAnimEnd(true);
							}, 300);
							clearInterval(inter);
						}
					} else {
						clearInterval(inter);
					}
				}, 20);
			}, 600 + (delay || 0) * 1000);
		}
	}, [type, inUserVision, hasTriggeredAnimation, delay]);

	return (
		<Styled.Wrapper type={type}>
			<Styled.Animation
				active={inUserVision && hasTriggeredAnimation}
				ref={ref}
				type={type}
				{...props}>
				{children}
			</Styled.Animation>
			{type === 'text' && !textAnimEnd && animationActive && <Styled.Slash />}
		</Styled.Wrapper>
	);
};

export default Animation;
