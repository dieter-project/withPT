import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { SetStateAction } from "react";
import { BackButton, BellIcon, BookmarkIcon, CalendarIcon, HomeHeader, PageHeader, SettingIcon } from "../../common/layout/Header.style";

interface HeaderProps {
  title?: string;
  back?: boolean;
  page?: string;
  bookmark?: boolean;
  calendar?: boolean;
  setting?: boolean;
  setIsPopupMenuOpen?: SetStateAction<boolean>;
}

const Header = ({
  title,
  back,
  page,
  bookmark,
  calendar,
  setting,
  setIsPopupMenuOpen,
}: HeaderProps) => {
  const router = useRouter();

  if (page === "home") {
    return (
      <HomeHeader>
        <h1>
          <Image src={"/svgs/logo.svg"} width={64} height={21} alt="Logo" />
        </h1>
        <BellIcon onClick={() => router.push('/member/notification')}>알림</BellIcon>
      </HomeHeader>
    );
  } else {
    return (
      <PageHeader>
        <div>
          {back && (
            <BackButton onClick={() => router.back()} className="back-btn">
              뒤로
            </BackButton>
          )}
        </div>
        <h1>{title}</h1>
        <div>
          {bookmark && <BookmarkIcon>북마크</BookmarkIcon>}
          {calendar && <CalendarIcon>달력</CalendarIcon>}
          {setting && <SettingIcon>설정</SettingIcon>}
        </div>
      </PageHeader>
    );
  }
};

export default Header;
