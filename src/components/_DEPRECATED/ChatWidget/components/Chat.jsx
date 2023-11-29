import React, { useEffect, useRef, useState } from 'react';
import * as TymioUI from '../../../_DEPRECATED';
import * as Styled from '../styled';
import useSupportFormik from '../hooks/useFormik';
import { COLORS } from '../../../../models/colors';
import Close from '../../../../assets/img/icons/cross-close.svg';
import { Typography } from '../../../Typography/Typography/styled';
import { TYPOGRAPHY_SIZE } from '../../../../models/types';

const Chat = ({
	messages,
	sendMessage,
	open,
	localError,
	closeClick,
	loading,
}) => {
	const { formik, error: submitError } = useSupportFormik(sendMessage);
	const chatDiv = useRef(null);
	const [error, setError] = useState(null);

	const handleChange = async (e) => {
		await formik.setFieldValue('message', e.target.value);
		formik.setFieldTouched('message');
	};

	useEffect(() => {
		chatDiv.current?.scrollIntoView();
	}, [messages]);

	useEffect(() => {
		setError(localError || submitError);
	}, [submitError, localError]);

	return (
		<Styled.Chat open={open} onSubmit={formik.handleSubmit}>
			<TymioUI.Card
				background={COLORS.RICH_PURPLE}
				padding={'40px 20px 20px'}
				flex
				justify={'flex-start'}
				height={'100%'}>
				<Styled.Close onClick={closeClick}>
					<img src={Close} alt="" width={20} height={20} />
				</Styled.Close>
				<TymioUI.Card.Header display={'flex'} gap={'10px'} direction={'column'}>
					<Typography color={COLORS.LEMON}>SUPPORT</Typography>
					<Typography color={COLORS.GRAY} size={TYPOGRAPHY_SIZE.SMALL}>
						Working hours from 9:00 am till 7 pm UTC
					</Typography>
				</TymioUI.Card.Header>
				{messages.length ? (
					<TymioUI.Card.Body>
						<Styled.Messages>
							{messages.map(({ message, sender }, i) => (
								<Styled.Message key={i} sender={sender}>
									<Typography size={TYPOGRAPHY_SIZE.SMALL} color={COLORS.BLACK}>
										{message}
									</Typography>
								</Styled.Message>
							))}
							<span ref={chatDiv}></span>
						</Styled.Messages>
					</TymioUI.Card.Body>
				) : (
					<></>
				)}
				<TymioUI.Card.Footer>
					<TymioUI.Grid
						width={'100%'}
						gap={'10px'}
						columns={1}
						style={{ position: 'relative' }}>
						{error && (
							<Typography
								color={COLORS.RED}
								size={TYPOGRAPHY_SIZE.SMALL}
								style={{ position: 'absolute', top: '-20px', right: '0' }}>
								{error}
							</Typography>
						)}
						<TymioUI.Input
							type="textarea"
							value={formik.values.message}
							onChange={handleChange}
							placeholder="Write a message"
						/>
						<TymioUI.Button type="submit" disabled={!formik.isValid}>
							<Typography>SEND</Typography>
						</TymioUI.Button>
					</TymioUI.Grid>
				</TymioUI.Card.Footer>
			</TymioUI.Card>
		</Styled.Chat>
	);
};

export default Chat;
