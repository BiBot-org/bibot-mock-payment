"use client";
import { useFormik } from "formik";
import * as Yup from "yup";
import { signIn } from "next-auth/react";
import Swal from "sweetalert2";

export const AuthForm = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      submit: null,
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("유효한 이메일을 입력 하셔야 합니다.")
        .max(255)
        .required("이메일을 입력 해 주세요."),
      password: Yup.string().max(255).required("비밀번호를 입력 해 주세요."),
    }),
    onSubmit: async (values) => {
      const result = await signIn("keycloak", {
        username: values.email,
        password: values.password,
        callbackUrl: "/",
      });

      if (result?.error) {
        Swal.fire({
          title: "Error",
          text: "아이디와 비밀번호를 확인하세요",
          icon: "error",
        });
      } else {
        Swal.fire({
          title: "Success",
          text: "환영합니다!",
          icon: "success",
        });
      }
    },
  });

  return (
    <div className="p-4 space-y-4 md:space-y-4 sm:p-8">
      <h2 className="text-xl text-bibot-black font-bold leading-tight tracking-tight  md:text-2xl">
        Bibot 가상 결제 서비스
      </h2>
      <h3 className="text-xl text-bibot-black font-bold leading-tight tracking-tight  md:text-2xl">
        환영합니다
      </h3>
      <form className="space-y-4 md:space-y-6" onSubmit={formik.handleSubmit}>
        <div>
          <label className="block mb-2 text-sm font-medium text-bibot-black">
            email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="bg-bibot-gray border border-bibot-white text-bibot-black sm:text-sm rounded-lg focus:bibot-red focus:border-bibot-red block w-full p-2.5"
            placeholder="이메일을 입력하세요"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            required
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-bibot-black">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="••••••••"
            className="bg-bibot-gray border border-bibot-white text-bibot-black sm:text-sm rounded-lg focus:bibot-red focus:border-bibot-red block w-full p-2.5"
            required
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="w-1/2 text-bibot-black bg-bibot-gray hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
          >
            Sign in
          </button>
        </div>
      </form>
    </div>
  );
};
