"use server";

export const signUp = async (form: FormData) => {
  const name = form.get("name");
  const email = form.get("email");
  const password = form.get("password");

  try {
    const res = await fetch(" http://localhost:8000/api/v1/user/sign-up", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
      }),
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

