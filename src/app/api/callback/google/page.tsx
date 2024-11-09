"use client";
import React, { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useDispatch } from "react-redux";
import { api } from "@/utils/axios";
import { signupActions } from "@/redux/reducers/trainerSignupSlice";
import { trainerActions } from "@/redux/reducers/trainerSlice";
import { setCookie } from "@/utils/cookie";

const page = () => {
  const searchParams = useSearchParams();
  const dispatch = useDispatch();
  const router = useRouter();

  const code = searchParams.get("code");
  const role = window.sessionStorage.getItem("role");

  const handleGetAuthCode = async () => {
    try {
      const response = await api.post("/api/v1/oauth/google", {
        authorizationCode: code,
        role: "TRAINER",
      });

      if (response.data.accessToken) {
        setCookie("access", response.data.accessToken, { path: "/" });
        router.replace("/trainer/main");
      } else {
        dispatch(
          signupActions.saveSignupState({
            email: response.data.data.email,
            oauthProvider: response.data.data.oauthProvider,
            role: response.data.data.role,
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
};

export default page;
