"use client";
import Input from "@/components/Input";
import { UserAuthData } from "@/models/UserAuthData";
import { useMutation } from "@tanstack/react-query";
import Image from "next/image";
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
    <main className="h-screen">
      <div className="flex flex-col">
        <div className="flex flex-col gap-10 lg:flex-row lg:gap-16 xl:gap-0 justify-between mt-[115px]">
          <div className="flex flex-col items-center gap-20">
            <div className="flex flex-col gap-7">
              <h1 className="text-white text-center md:text-start">
                Selamat datang di <span className="bold">Destinify</span>!
              </h1>
              <p className="text-neutral max-w-[510px] text-2xl text-center md:text-start">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod!
              </p>
            </div>
            <Image src={"/images/mascot.png"} alt="" width={570} height={570}/>
          </div>
          <div className="flex flex-col items-stretch gap-16 shadow-xl rounded-xl ">
            <div className="flex flex-col gap-5 text-center items-center px-8">
              <h1 className="text-4xl font-semibold text-white">Daftar</h1>
              <h3 className="text-2xl text-neutral">
                Masukkan inputan dengan benar
              </h3>
            </div>
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
              <div className="flex items-center py-2 mt-2 gap-4">
                <input type="checkbox" />
                <p className="text-neutral text-sm">
                  By registering. You agree to our
                  <span className="text-white medium"> Terms & Privacy Policy</span>
                </p>
              </div>
              <button
                className="py-2 px-3 border-2 mt-4 rounded-md bg-black self-stretch text-white"
                onClick={onSubmit}
              >
                Daftar
              </button>
            </form>

            <div className="flex flex-col gap-8 -mt-8">
              <p className="text-neutral separatorBetween">or</p>

              {/* <div>google</div> */}
              <p className="text-center text-white">
                Sudah punya akun?
                <Link href={"/signin"} className="medium">
                  {` Masuk`}
                </Link>
              </p>
            </div>
          </div>
        </div>

        <div className="halfRadialGradient absolute -z-10 w-[90%] -bottom-[50%]"></div>
      </div>
    </main>
  );
}
{
  /* <form className="flex flex-col items-stretch gap-5">
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
            </form> */
}
