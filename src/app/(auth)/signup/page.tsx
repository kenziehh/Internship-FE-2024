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
  const { mutateAsync } = useMutation({
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
    if (
      name === "email" ||
      name === "password" ||
      name === "name" ||
      name === "telp" ||
      name === "check"
    ) {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    mutateAsync();
  };

  return (
    <main className="container flex min-h-screen justify-between items-center">
      <div className="flex flex-col gap-[110px]">
        <div className="flex flex-col gap-7">
          <h1 className="text-5xl">
            Welcome to <span className="font-bold">Destinify!</span>
          </h1>
          <p className="max-w-[516px] text-2xl text-gray">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod!
          </p>
        </div>
        <img src="https://placekitten.com/g/516/400" alt="" className="" />
      </div>
      <div className="flex flex-col items-center gap-8">
        <h1 className="text-4xl font-semibold">Daftar</h1>
        <form className="flex flex-col items-center gap-2">
          <Input
            type="email"
            name="email"
            label="Email"
            required
            onChange={handleChange}
            className="max-w-[500px]"
          />
          <Input
            type="text"
            name="name"
            label="Nama Lengkap"
            required
            onChange={handleChange}
            className="max-w-[500px]"
          />
          <Input
            type="number"
            name="telp"
            label="Nomor Telepon"
            required
            onChange={handleChange}
            className="max-w-[500px]"
          />
          <Input
            type="password"
            name="password"
            label="Password"
            required
            onChange={handleChange}
            className="max-w-[500px]"
          />
          <Input
            type="password"
            name="confirmpassword"
            label="Confirm Password"
            required
            onChange={handleChange}
            className="max-w-[500px]"
          />
          <div className="flex items-center">
            <input type="checkbox" />
            <p className="text-gray text-sm">
              By registering. You agree to our
              <span className="text-black"> Terms & Privacy Policy</span>
            </p>
          </div>
          <button
            className="py-2 px-3 border-2 mt-4 rounded-md bg-black self-stretch text-white"
            onClick={onSubmit}
          >
            Daftar
          </button>
        </form>
        <p className="text-center">
          Sudah Punya Akun?
          <Link href={"/signin"} className="text-blue-500">
            {` Masuk`}
          </Link>
        </p>
      </div>
    </main>
  );
}
