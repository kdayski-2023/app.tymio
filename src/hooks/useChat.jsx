import { useEffect, useRef, useState } from 'react';
import socketIOClient from 'socket.io-client';
import * as Service from '../services';

const NEW_CHAT_MESSAGE_EVENT = 'newChatMessage';
const OPEN_CHAT = 'openChat';
const SOCKET_SERVER_URL = process.env.REACT_APP_SOCKET_URL;

const useChat = (sessionToken) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState(null);
  const [unreadMessages, setUnreadMessages] = useState([]);
  const socketRef = useRef();

  const setAllMessages = (messages) => {
    setMessages(messages);
    setUnreadMessages(messages.filter(({ unread }) => unread));
  };

  const isLastMessageFromManager = (messages) => {
    return (
      messages &&
      messages.length &&
      messages[messages.length - 1]['sender'] === 'manager'
    );
  };

  useEffect(() => {
    const chat$ = Service.ChatService.state$.subscribe((state) => {
      setError(state.error);
      setLoading(state.loading);
      setAllMessages(state.messages);
    });

    return () => {
      chat$.unsubscribe();
    };
  }, []);

  useEffect(() => {
    if (sessionToken) {
      Service.ChatService.getChat();
    }
  }, [sessionToken]);

  useEffect(() => {
    if (open) {
      openChat();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, newMessage]);

  const sendMessage = (message) => {
    socketRef.current.emit(NEW_CHAT_MESSAGE_EVENT, {
      message,
      sender: 'user',
      unread: false,
    });
  };

  const openChat = () => {
    if (sessionToken && socketRef.current && unreadMessages.length) {
      socketRef.current.emit(OPEN_CHAT);
    }
    if (sessionToken && !socketRef.current) {
      socketRef.current = socketIOClient(SOCKET_SERVER_URL, {
        query: { sessionToken },
      });

      socketRef.current.on('init', (messages) => {
        setAllMessages(messages);
      });

      socketRef.current.on(NEW_CHAT_MESSAGE_EVENT, (messages) => {
        setAllMessages(messages);
        if (isLastMessageFromManager(messages)) {
          setNewMessage(messages[messages.length - 1]);
        }
      });

      socketRef.current.on(OPEN_CHAT, (messages) => {
        setAllMessages(messages);
      });

      socketRef.current.emit(OPEN_CHAT);

      return () => {
        socketRef.current.disconnect();
      };
    }
  };

  return {
    messages,
    sendMessage,
    unreadMessages,
    open,
    setOpen,
    loading,
    error,
  };
};

export default useChat;
