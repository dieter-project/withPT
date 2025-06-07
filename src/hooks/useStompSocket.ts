import { useState, useEffect, useRef, useCallback } from "react";
import { Client, IFrame, IMessage, IStompSocket, Stomp } from "@stomp/stompjs";
import SockJS from "sockjs-client";
import { getCookie } from "@/utils/cookie";

interface Message {
  sender: string;
  content: string;
  timestamp?: string;
}

export const useWebSocketChat = (roomId: number) => {
  console.log('roomId: ', roomId);
  const [messages, setMessages] = useState<Message[]>([]);
  const clientRef = useRef<Client | null>(null);

  const SOCKET_URL = "http://13.124.80.64/ws-stomp/";
  const CHAT_SUB_URL = `/exchange/chat.exchange/room.${roomId}`;
  const CHAT_SEND_URL = "/pub/chat/sendMessage";
  const CHAT_READ_URL = "/pub/chat/readMessage";
  const token = getCookie("access");

  useEffect(() => {
    // const socket = new SockJS(SOCKET_URL);
    const client = new Client({
      brokerURL: "ws://13.124.80.64/ws-stomp",
      // webSocketFactory: () => socket as IStompSocket,
      connectHeaders: {
        Authorization: `Bearer ${token}`,
      },
      debug: (str) => {
        console.log("STOMP Debug: ", str);
      },
      reconnectDelay: 5000,
      heartbeatIncoming: 4000,
      heartbeatOutgoing: 4000,

      onConnect: (conn: IFrame) => {
        console.log("[+] WebSocket 연결이 되었습니다.", conn);
        client.subscribe(CHAT_SUB_URL, (message: IMessage) => {
          const receiveData = JSON.parse(message.body);
          setMessages(prevMessages => [
            ...prevMessages,
            {
              content: receiveData.content,
              sender: receiveData.sender,
            },
          ]);
        });
      },
      // onDisconnect: () => console.log("WebSocket 연결 해제"),
      onWebSocketClose: close => {
        console.log("[-] WebSocket 연결이 종료 되었습니다.", close);
      },
      // 웹 소켓 연결 에러
      onWebSocketError: error => {
        console.error("[-] 웹 소켓 연결 오류가 발생하였습니다.", error);
      },
      // STOMP 프로토콜 에러
      onStompError: frame => {
        console.error("Broker reported error: " + frame.headers["message"]);
        console.error("Additional details: " + frame.body);
      },
    });

    // if (typeof WebSocket !== "function") {
    //   // For SockJS you need to set a factory that creates a new SockJS instance
    //   // to be used for each (re)connect
    //   client.webSocketFactory = function () {
    //     return new SockJS(SOCKET_URL) as unknown as IStompSocket;
    //   };
    // }

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
