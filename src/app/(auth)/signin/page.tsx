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

{
  /* <main className="container flex max-h-screen justify-between items-center">
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
          <button
            className="py-2 px-3 border-2 mt-4 rounded-md"
            onClick={onSubmit}
          >
            Sign In
          </button>
        </form>
        <p className="text-center">
          Already Have Account?
          <Link href={"/signup"} className="text-blue-500">
            {` Sign Up`}
          </Link>
        </p>
      </div>
    </main> */
}
