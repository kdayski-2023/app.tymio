import React, { useEffect, useState } from 'react';
import * as Hook from '../../../hooks';
import * as Service from '../../../services';
import { Chat, Icon } from './components';
import { Play, VideoClose, VideoModal, IFrame } from './styled';
import PlayIcon from '../../../assets/img/icons/play.svg';
import CloseIcon from '../../../assets/img/icons/cross-close.svg';

const ChatWidget = ({ sessionInfo }) => {
	const [show, setShow] = useState(false);
	const {
		unreadMessages,
		messages,
		sendMessage,
		open,
		setOpen,
		loading,
		error,
		localError,
	} = Hook.useChat(sessionInfo.sessionToken);

	useEffect(() => {
		if (error) {
			Service.MessageDialogService.showError(error.message);
		}
	}, [error]);

	const handleClick = () => {
		setShow((prevState) => !prevState);
	};

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
						localError={localError}
					/>
					<Icon
						unreadMessages={unreadMessages}
						openClick={() => setOpen(true)}
						open={open || show}
					/>
				</>
			)}
			<Play onClick={handleClick} open={open || show}>
				<img src={PlayIcon} alt="" width={30} height={30} />
			</Play>
			<VideoModal open={show}>
				<VideoClose onClick={() => setShow(false)}>
					<img src={CloseIcon} alt="" width={25} height={25} />
				</VideoClose>
				<IFrame
					src={`https://www.youtube.com/embed/kE0TBjPMox4`}
					frameBorder="0"
					allow="autoplay; encrypted-media"
					allowFullScreen
					title="video"
				/>
			</VideoModal>
		</>
	);
};

export default ChatWidget;
