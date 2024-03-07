"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
  const pathName = usePathname();
  const disableNavbar = ["/signin", "/signup"];
  const { status }: { status: string } = useSession();

  return (
    !disableNavbar.includes(pathName) && (
      <nav className="flex items-center justify-between py-[60px]">
        <Link href={"/"} className="text-2xl text-purple">
          Destinify
        </Link>
        <div className="hidden lg:flex gap-4">
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
      </nav>
    )
  );
};

export default Navbar;
