"use client";
import { AlignJustify, X } from "lucide-react";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const Navbar = () => {
  const pathName = usePathname();
  const disableNavbar = ["/signin", "/signup"];
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleNavbar = () => {
    setIsOpen(!isOpen);
  };
  const { status }: { status: string } = useSession();

  return (
    !disableNavbar.includes(pathName) && (
      <nav
        className={`container flex items-center justify-between py-[60px]`}
      >
        <Link href={"/"} className="text-2xl text-purple">
          <Image
            src={"/destinify-logo.png"}
            width={145}
            height={37}
            alt="logo"
          />
        </Link>
        <div className="hidden lg:flex gap-4 items-center">
          <Link href={"/"} className="text-white">
            Beranda
          </Link>
          <Link href={"/transaction"} className="text-white">
            Transaksi
          </Link>
          <Link href={"/profile"} className="text-white">
            Profil
          </Link>
        </div>
        {status === "authenticated" ? (
          <button
            onClick={() => signOut()}
            className="bg-primary text-white py-2 px-16 rounded-[40px] hidden md:block"
          >
            Keluar
          </button>
        ) : (
          <button
            onClick={() => signIn()}
            className="bg-primary text-white py-2 px-16 rounded-[40px] hidden md:block"
          >
            Masuk
          </button>
        )}
        {/* <AlignJustify
          size={40}
          className="text-white lg:hidden"
          onClick={handleNavbar}
        /> */}
        {/* {isOpen ? (
          <div className="absolute w-full flex flex-col ">
            <X
              size={40}
              className="text-black bg-white"
              onClick={handleNavbar}
            />
            <div className="flex flex-col lg:hidden gap-4 items-center bg-white py-10">
              <Link href={"/"} className="text-purple">
                Beranda
              </Link>
              <Link href={"/transaction"} className="text-purple">
                Transaksi
              </Link>
              <Link href={"/profile"} className="text-purple">
                Profil
              </Link>
              {status === "authenticated" ? (
                <button
                  onClick={() => signOut()}
                  className="bg-primary text-white py-2 px-16 rounded-[40px]"
                >
                  Keluar
                </button>
              ) : (
                <button
                  onClick={() => signIn()}
                  className="bg-primary text-white py-2 px-16 rounded-[40px]"
                >
                  Masuk
                </button>
              )}
            </div>
          </div>
        ) : null} */}
      </nav>
    )
  );
};

export default Navbar;
