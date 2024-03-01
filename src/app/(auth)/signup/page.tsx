"use client";
import Input from "@/components/Input";
import { UserAuthData } from "@/models/UserAuthData";
import { useMutation } from "@tanstack/react-query";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";

export default function SignUp() {
  const [formData, setFormData] = useState<UserAuthData>({
    email: "",
    password: "",
  });
  const { push } = useRouter();
  const { mutateAsync, data } = useMutation({
    mutationFn: async () => {
      fetch("/api/signup", {
        method: "POST",
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      });
    },
    onSuccess: async () => {
      console.log("berhasil signup");
      push("/signin");
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

  const onSubmit = (e: any) => {
    e.preventDefault();
    mutateAsync();
    console.log(data);
  };

  return (
    <main className="flex min-h-screen justify-center items-center">
      <div className="flex flex-col items-center gap-8 shadow-xl p-16 rounded-xl">
        <h1 className="text-4xl font-semibold">Sign Up</h1>
        <form className="flex flex-col items-center gap-2">
          <Input
            type="email"
            name="email"
            label="Email"
            required
            onChange={handleChange}
          />
          <Input
            type="password"
            name="password"
            label="Password"
            required
            onChange={handleChange}
          />
          <Input
            type="password"
            name="confirmpassword"
            label="Confirm Password"
            required
            onChange={handleChange}
          />
          <button
            className="py-2 px-3 border-2 mt-4 rounded-md"
            onClick={onSubmit}
          >
            Sign Up
          </button>
        </form>
        <p className="text-center">
          Didn't Have Account?
          <Link href={"/signin"} className="text-blue-500">
            {` Sign In`}
          </Link>
        </p>
      </div>
    </main>
  );
}
