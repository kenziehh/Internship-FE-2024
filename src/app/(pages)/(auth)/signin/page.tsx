"use client";
import Input from "@/components/Input";
import { UserAuthData } from "@/models/UserAuthData";
import { useMutation } from "@tanstack/react-query";
import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";

export default function SignIn() {
  const [formData, setFormData] = useState<UserAuthData>({
    email: "",
    password: "",
  });
  const { mutateAsync } = useMutation({
    mutationFn: async () => {
      fetch("/api/signin", {
        method: "POST",
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      });
      
    },
    onSuccess: async () => {
      console.log("berhasil login");
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
  const { push } = useRouter();
  const onSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await signIn("credentials", {
        redirect: false,
        email: formData.email,
        password: formData.password,
        callbackUrl: "/",
      });
      if (!response?.error) {
        push("/");
      } else {
        console.log(response.error);
      }
      mutateAsync();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className="">
      <div className="flex flex-col">
        <div className="flex flex-col gap-10 lg:flex-row lg:gap-16 xl:gap-0 justify-between mt-[115px]">
          <div className="flex flex-col items-center gap-20">
            <div className="flex flex-col gap-7">
              <h1 className="text-white text-center md:text-start">
                Selamat datang di <span className="bold">Destinify</span>!
              </h1>
              <p className="text-neutral max-w-[510px] text-2xl text-center md:text-start">
                Ayo jelajahi keindahan tersembunyi di setiap sudut destinasi
                bersama kami!
              </p>
            </div>
            <Image
              src={"/images/mascot.png"}
              alt=""
              width={500}
              height={570}
              className="max-w-auto max-h-auto self-center"
            />
          </div>
          <div className="flex flex-col items-stretch gap-16 shadow-xl rounded-xl ">
            <div className="flex flex-col gap-5 text-center items-center px-8">
              <h1 className="text-4xl font-semibold text-white">Masuk</h1>
              <h3 className="text-2xl text-neutral">
                Silahkan masuk terlebih dahulu
              </h3>
            </div>
            <form className="flex flex-col items-stretch gap-5">
              <div className="">
                <p className="l2 text-neutral">Email</p>
                <Input
                  type="email"
                  name="email"
                  label="Masukkan Email"
                  required
                  onChange={handleChange}
                />
              </div>
              <div>
                <p className="l2 text-neutral">Password</p>
                <Input
                  type="password"
                  name="password"
                  label="Masukkan Password"
                  required
                  onChange={handleChange}
                />
              </div>
              <Link
                href={"/reset"}
                className="underline text-neutral self-end l2"
              >
                Lupa kata sandi?
              </Link>
              <button
                className="p-3 bg-purple text-white rounded-[40px]"
                onClick={onSubmit}
              >
                Masuk
              </button>
            </form>
            <div className="flex flex-col gap-8 -mt-8">
              <p className="text-neutral separatorBetween">or</p>
              <p className="text-center text-white">
                Belum punya akun?
                <Link href={"/signup"} className="medium">
                  {` Daftar`}
                </Link>
              </p>
            </div>
          </div>
        </div>

        <div className="halfRadialGradient absolute -z-10 w-[70%] -bottom-[40%]"></div>
      </div>
    </main>
  );
}