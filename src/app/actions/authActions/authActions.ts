"use server";

import { BACKEND_URL } from "@/lib/url";
import { fetchPost } from "@/lib/utils";

export const signUp = async (form: FormData) => {
  const name = form.get("name");
  const email = form.get("email");
  const password = form.get("password");

  try {
    const res = await fetchPost(`${BACKEND_URL}/api/v1/user/sign-up`, {
      name: name,
      email: email,
      password: password,
    });

    const data = await res.json();
    if (res.status === 200) {
      return {
        status: "200",
        message: "signup Sucessfully",
      };
    } else {
      return {
        status: "400",
        message: data?.message,
      };
    }
  } catch (error) {
    return {
      message: "Internal server error",
    };
  }
};

export const Login = async (form: FormData) => {
  const email = form.get("email");
  const password = form.get("password");
  try {
    const res = await fetchPost(`${BACKEND_URL}/api/v1/user/sign-in`, {
      email,
      password,
    });

    const data = await res.json();
    if (res.status === 200) {
      return {
        status: "200",
        message: "Login Sucessfully",
      };
    } else {
      return {
        status: "400",
        message: data?.message,
      };
    }
  } catch (error) {
    return {
      message: "Internal server error",
    };
  }
};
