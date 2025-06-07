"use client";

import PageHeader from "@/components/member/layout/PageHeader";
import { NOTIFICATIONS_TYPE } from "@/constants/notification";
import { reqGetNotifications } from "@/services/member/notifications";
import { BaseContentWrap } from "@/styles/Layout";
import { Notification } from "@/types/member/notification";
import React, { useEffect, useMemo, useState } from "react";
import { styled } from "styled-components";

const NotificationList = styled.ul`
  li {
    padding: 0.75rem 0;

    &:not(:last-child) {
      border-bottom: 1px solid var(--border-gray300);
    }
    > div {
      &:first-child {
        display: flex;
        justify-content: space-between;
        font-size: var(--font-xs);
        color: #707070;

        > div {
          display: flex;
          gap: 0.25rem;
          align-items: center;
        }
      }
      &:last-child {
        font-size: var(--font-s);
        margin-top: 0.5rem;
      }
    }
  }
`;

const UnreadMarker = styled.div`
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  background-color: var(--block-red);
`;

const page = () => {
  const title = "알림";
  const [notifications, setNotifications] = useState<Notification[]>([]);

  const getNotification = async () => {
    const {
      data: { data },
    } = await reqGetNotifications();
    setNotifications(data.notifications.content);
  };

  const dayFormat = [
    { text: "방금 전", max: 1000 * 60, devide: null },
    { text: "분 전", max: 1000 * 60 * 60, devide: 1000 * 60 },
    { text: "시간 전", max: 1000 * 60 * 60 * 24, devide: 1000 * 60 * 60 },
    {
      text: "일 전",
      max: 1000 * 60 * 60 * 24 * 30,
      devide: 1000 * 60 * 60 * 24,
    },
    {
      text: "개월 전",
      max: 1000 * 60 * 60 * 24 * 30 * 364,
      devide: 1000 * 60 * 60 * 24 * 30,
    },
  ];

  const beforeTimeFormat = (time: string) => {
    const now = Date.now();
    const timeDate = new Date(time).getTime();
    const before = now - timeDate;
    let output = "";

    for (const day of dayFormat) {
      if (before < day.max) {
        const formatDate = day.devide ? Math.floor(before / day.devide) : "";
        output = `${formatDate} ${day.text}`;
        break;
      }
    }
    return output;
  };

  const noticetype = (notifications: Notification) => {
    return NOTIFICATIONS_TYPE.find(type => type.value === notifications.type)
      ?.title;
  };

  useEffect(() => {
    getNotification();
  }, []);

  return (
    <>
      <PageHeader back={true} title={title} />
      <BaseContentWrap>
        <NotificationList>
          {notifications?.map(notification => {
            return (
              <li key={notification.id}>
                <div>
                  <div>
                    <div className="category">{noticetype(notification)}</div>
                    {!notification.read && <UnreadMarker />}
                  </div>
                  <div className="time">
                    {beforeTimeFormat(notification.createdAt)}
                  </div>
                </div>
                <div>{notification.message}</div>
              </li>
            );
          })}
        </NotificationList>
      </BaseContentWrap>
    </>
  );
};

export default page;
