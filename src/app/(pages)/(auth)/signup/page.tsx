"use client";
import Button from "@/components/Button";
import Input from "@/components/Input";
import { User } from "@/models/interface/user/User";
import { useMutation } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";

export default function SignUp() {
  const [formData, setFormData] = useState<User>({
    email: "",
    password: "",
    confirm_password: "",
    name: "",
    hp: "",
  });
  const { push } = useRouter();
  const { mutateAsync } = useMutation({
    mutationFn: async () => {
      fetch("/api/signup", {
        method: "POST",
        body: JSON.stringify({
          hp: formData.hp,
          name: formData.name,
          email: formData.email,
          password: formData.password,
          confirm_password: formData.confirm_password,
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
      name === "hp" ||
      name === "confirm_password"
    ) {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
    console.log(formData);
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    mutateAsync();
  };

  return (
    <main className="h-screen">
      <div className="flex flex-col">
        <div className="flex flex-col gap-10 lg:flex-row lg:gap-16 xl:gap-0 justify-between mt-[115px]">
          <div className="flex flex-col items-start gap-20">
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
              <h1 className="text-4xl font-semibold text-white">Daftar</h1>
              <h3 className="text-2xl text-neutral">
                Masukkan inputan dengan benar
              </h3>
            </div>
            <form className="flex flex-col items-stretch gap-2">
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
                type="text"
                name="hp"
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
                name="confirm_password"
                label="Confirm Password"
                required
                onChange={handleChange}
                className="max-w-[500px]"
              />
              <div className="flex items-center py-2 mt-2 gap-4">
                <input type="checkbox" />
                <p className="text-neutral text-sm">
                  By registering. You agree to our
                  <span className="text-white medium">
                    {" "}
                    Terms & Privacy Policy
                  </span>
                </p>
              </div>
              <Button onClick={onSubmit}>Daftar</Button>
            </form>

            <div className="flex flex-col gap-8 -mt-8">
              <p className="text-neutral separatorBetween">atau</p>
              <p className="text-center text-white">
                Sudah punya akun?
                <Link href={"/signin"} className="medium">
                  {` Masuk`}
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
