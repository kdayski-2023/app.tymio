import React, { useEffect, useState } from 'react';
import * as Hook from '../../../hooks';
import * as Service from '../../../services';
import { Chat, Icon } from './components';

const ChatWidget = () => {
	const [sessionToken, setSessionToken] = useState('');

	const { sessionInfo } = Hook.useSession();
	const {
		unreadMessages,
		messages,
		sendMessage,
		open,
		setOpen,
		loading,
		error,
	} = Hook.useChat(sessionToken);

	useEffect(() => {
		if (sessionInfo) {
			setSessionToken(sessionInfo.sessionToken);
		}
	}, [sessionInfo]);

	useEffect(() => {
		if (error) {
			Service.MessageDialogService.showError(error.message);
		}
	}, [error]);

	return (
		<>
			{!error && (
				<>
					<Chat
						loading={loading}
						messages={messages}
						sendMessage={sendMessage}
						open={open}
						closeClick={() => setOpen(false)}
					/>
					<Icon
						unreadMessages={unreadMessages}
						openClick={() => setOpen(true)}
						open={open}
					/>
				</>
			)}
		</>
	);
};

export default ChatWidget;
