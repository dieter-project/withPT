"use client";
import React, { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useDispatch } from "react-redux";
import { api } from "@/utils/axios";
import { signupActions } from "@/redux/reducers/trainerSignupSlice";
import { useCookies } from "react-cookie";

export default function page() {
  const searchParams = useSearchParams();
  const dispatch = useDispatch();
  const router = useRouter();
  const [coockies, setCookie] = useCookies(["access"])

  const code = searchParams.get("code");
  const role = window.sessionStorage.getItem("role");

  const handleGetAuthCode = async () => {
    try {
      const response = await api.post(
        "http://43.200.45.234/api/v1/oauth/google",
        {
          authorizationCode: code,
          role: "TRAINER",
        },
      );

      if (response.data.accessToken) {
        setCookie("access", response.data.accessToken);
        router.replace("/trainer/main");
      } else {
        dispatch(
          signupActions.saveSignupState({
            email: response.data.email,
            oauthProvider: response.data.oauthProvider,
            role: response.data.role,
          }),
        );
        router.replace("/trainer/signup/step1");
      }

      console.log("response: ", response);
    } catch (error) {
      console.log("error: ", error);
    }
  };
  useEffect(() => {
    console.log("code: ", code);
    handleGetAuthCode();
  }, []);

  return <div>구글 보내주는 페이지</div>;
}
