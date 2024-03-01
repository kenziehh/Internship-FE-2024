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
        <Link href={"/"}>Logo</Link>
        <div className="flex gap-4">
          <Link href={"/"}>Home</Link>
          <Link href={"/protected"}>Protected</Link>
        </div>
        {status === "authenticated" ? (
          <button onClick={() => signOut()}>Sign Out</button>
        ) : (
          <div className="flex gap-8">
            <button onClick={() => signIn()}>Sign In</button>
            <Link href={"/signup"}>Sign Up</Link>
          </div>
        )}
      </nav>
    )
  );
};

export default Navbar;
