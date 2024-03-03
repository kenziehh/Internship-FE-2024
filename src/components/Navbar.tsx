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
      <nav className="flex items-center justify-between container p-8">
        <Link href={"/"} className="text-4xl">Destinify</Link>
        <div className="flex gap-12">
          <Link href={"/"}>Beranda</Link>
          <Link href={"/transaction"}>Transaksi</Link>
          <Link href={"/profile"}>Profil</Link>
        </div>
        {status === "authenticated" ? (
          <button onClick={() => signOut()}>Sign Out</button>
        ) : (
          <button onClick={() => signIn()}>Sign In</button>
        )}
      </nav>
    )
  );
};

export default Navbar;
