"use client";
import React, { useEffect, useState } from "react";
import useFcmToken from "@/hooks/useFcmToken";
// import { getMessaging, onMessage } from 'firebase/messaging';
import firebaseApp from "@/lib/firebase";
import { BaseContentWrap, ButtonAreaFixed, RoundBox } from "@/styles/Layout";
import { styled } from "styled-components";
import { useRouter } from "next/navigation";
import { getMessaging, onMessage } from "@firebase/messaging";
import { Button } from "@/styles/Button";
import RoleSelectPage from "@/components/common/RoleSelectPage";

export default function Home() {
  const { fcmToken, notificationPermissionStatus } = useFcmToken();
  fcmToken && console.log("FCM token:", fcmToken);

  // if ('serviceWorker' in navigator) {
  //   window.addEventListener('load', () => {
  //     navigator.serviceWorker.register('/firebase-messaging-sw.js');
  //   });
  // }

  useEffect(() => {
    // requestNotificationPermission()
    if (typeof window !== "undefined" && "serviceWorker" in navigator) {
      const messaging = getMessaging(firebaseApp);
      const unsubscribe = onMessage(messaging, payload => {
        // console.log('Foreground push notification received:', payload);
        // Handle the received push notification while the app is in the foreground
        // You can display a notification or update the UI based on the payload
      });

      return () => {
        unsubscribe(); // Unsubscribe from the onMessage event
      };
    }
  }, []);

  return <RoleSelectPage />;
}
