import React, { useEffect, useRef } from 'react';
import * as TymioUI from '../../../_DEPRECATED';
import * as Styled from '../styled';
import useSupportFormik from '../hooks/useFormik';

const Chat = ({ messages, sendMessage, open, closeClick, loading }) => {
	const { formik, error } = useSupportFormik(sendMessage);
	const chatDiv = useRef(null);

	const handleChange = async (e) => {
		await formik.setFieldValue('message', e.target.value);
		formik.setFieldTouched('message');
	};

	useEffect(() => {
		chatDiv.current?.scrollIntoView();
	}, [messages]);

	return (
		<Styled.Chat open={open} onSubmit={formik.handleSubmit}>
			<TymioUI.Card>
				<Styled.Close onClick={closeClick}>&raquo;</Styled.Close>
				<TymioUI.Card.Header align="center">
					<Styled.Title>Support</Styled.Title>
				</TymioUI.Card.Header>
				<TymioUI.Card.Body>
					{loading && <TymioUI.LoadingSpinner />}
					{!loading && (
						<Styled.Messages>
							{messages.map(({ message, sender }, i) => (
								<Styled.Message key={i} sender={sender}>
									{message}
								</Styled.Message>
							))}
							<span ref={chatDiv}></span>
						</Styled.Messages>
					)}
				</TymioUI.Card.Body>
				<TymioUI.Card.Footer>
					<TymioUI.Grid width={'100%'} gap={'12px'} columns={1}>
						<TymioUI.Input
							type="textarea"
							value={formik.values.message}
							onChange={handleChange}
							placeholder="Write message..."
							error={formik.errors.message || error}
						/>
						<TymioUI.Button type="submit" disabled={!formik.isValid}>
							Send
						</TymioUI.Button>
					</TymioUI.Grid>
				</TymioUI.Card.Footer>
			</TymioUI.Card>
		</Styled.Chat>
	);
};

export default Chat;
