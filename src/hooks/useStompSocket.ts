import React, { useEffect, useRef } from "react";
import { Client } from "@stomp/stompjs";

export default function useStompSocket({ roomId }: { roomId: number }) {
  const socket = useRef<Client>();

  useEffect(() => {
    if (socket.current) return;

    const client = new Client({
      brokerURL: "",
      connectHeaders: {
        roomId: String(roomId),
      },
      debug: message => {
        console.log("message: ", message);
      },
      onConnect: () => {
        client.subscribe("/", message =>
          console.log(`Received: ${message.body}`),
        );
        client.publish({ destination: "/topic/test01", body: "First Message" });
      },
      onStompError: error => {
        console.log("error: ", error);
      },
      onDisconnect: () => {
        console.log("disconnected");
      },
      onWebSocketError: error => {
        console.log("error: ", error);
      },
      onUnhandledMessage: message => {
        console.log("message: ", message);
      },
    });

    client.activate();
    socket.current = client;

    return () => {
      if (socket.current && socket.current.connected) {
        socket.current.deactivate();
        socket.current = undefined;
      }
    };
  }, []);
  
  return socket.current;
}
