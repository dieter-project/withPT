import { useState, useEffect, useRef, useCallback } from "react";
import { Client, IFrame, IMessage } from "@stomp/stompjs";
import SockJS from "sockjs-client";
import { client } from "stompjs";
import { getCookie } from "@/utils/cookie";

interface Message {
  sender: string;
  content: string;
  timestamp?: string;
}

export const useWebSocketChat = (roomId: number) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const clientRef = useRef<Client | null>(null);

  const SOCKET_URL = "http://13.124.80.64/ws-stomp";
  const CHAT_SUB_URL = `/exchange/chat.exchange/room.${roomId}`;
  const CHAT_SEND_URL = "/pub/chat/sendMessage";
  const CHAT_READ_URL = "/pub/chat/readMessage";
  const token = getCookie("access");

  useEffect(() => {
    const socket = new SockJS(SOCKET_URL);
    const client = new Client({
      brokerURL: 'ws://13.124.80.64/ws-stomp',
      // webSocketFactory: () => socket,
      // connectHeaders: {
      //   Authorization: `Bearer ${token}`,
      // },
      reconnectDelay: 5000,
      heartbeatIncoming: 4000,
      heartbeatOutgoing: 4000,

      onConnect: (conn: IFrame) => {
        console.log('[+] WebSocket 연결이 되었습니다.', conn);
        client.subscribe(CHAT_SUB_URL, (message: IMessage) => {
          const receiveData = JSON.parse(message.body);
          setMessages((prevMessages) => [
            ...prevMessages,
            {
              content: receiveData.content,
              sender: receiveData.sender,
            },
          ]);
        });
      },
      onDisconnect: () => console.log("WebSocket 연결 해제"),
      onStompError: frame => console.error("STOMP 오류", frame),
    });

    // client.onConnect = frame => {
    //   console.log("WebSocket 연결됨", frame);
    //   clientRef.current = client;

    //   client.subscribe(CHAT_TOPIC, message => {
    //     const receivedMessage: Message = JSON.parse(message.body);
    //     setMessages(prev => [...prev, receivedMessage]);
    //   });
    // };

    client.onStompError = frame => {
      console.error("Broker reported error:", frame.headers["message"]);
      console.error("Additional details:", frame.body);
    };

    client.onDisconnect = frame => {
      console.log("Disconnected:", frame);
    };
    client.activate();

    return () => {
      client.deactivate();
    };
  }, [roomId]);

  const sendMessage = useCallback((sender: string, content: string) => {
    if (clientRef.current && clientRef.current.connected) {
      const message: Message = {
        sender,
        content,
        timestamp: new Date().toISOString(),
      };
      clientRef.current.publish({
        destination: CHAT_SEND_URL,
        body: JSON.stringify(message),
      });
    } else {
      console.error("STOMP 연결되지 않음");
    }
  }, []);

  return { messages, sendMessage };
};
