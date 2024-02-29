"use client";
import Input from "@/components/Input";
import { UserAuthData } from "@/models/UserAuthData";
import { postAuth } from "@/services/api/postData";
import { useMutation } from "@tanstack/react-query";
import Link from "next/link";
import { ChangeEvent, useState } from "react";

export default function SignIn() {
  const [formData, setFormData] = useState<UserAuthData>({
    email: "",
    password: "",
  });
  const { mutateAsync } = useMutation({
    mutationFn: async () => {
      postAuth("login", formData);
    },
    onSuccess:async () => {
      console.log("berhasil login")
    },
  });
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "email" || name === "password") {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const onSubmit = () => {
    mutateAsync();
  };

  console.log(data);
  return (
    <main className="flex min-h-screen justify-center items-center">
      <div className="flex flex-col justify-between items-center gap-12 shadow-xl p-16 rounded-xl">
        <h1 className="text-4xl font-semibold">Sign In</h1>
        <form className="flex flex-col items-center gap-2">
          <Input
            type="email"
            name="email"
            label="email"
            required
            onChange={handleChange}
          />
          <Input
            type="password"
            name="password"
            label="password"
            required
            onChange={handleChange}
          />
        </form>
        <button
          className="py-2 px-3 border-2 mt-4 rounded-md"
          onClick={onSubmit}
        >
          Sign In
        </button>
        <p className="text-center">
          Already Have Account?
          <Link href={"/signup"} className="text-blue-500">
            {` Sign Up`}
          </Link>
        </p>
      </div>
    </main>
  );
}
