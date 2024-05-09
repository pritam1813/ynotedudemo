"use client";

import { sidebarItems } from "@/data/dashBoardSidebar";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { useClerk } from "@clerk/clerk-react";
import { useRouter } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  const { signOut } = useClerk();
  const router = useRouter();

  return (
    <div className="sidebar -dashboard">
      {sidebarItems.map((elm, i) => (
        <div
          key={i}
          className={`sidebar__item   ${
            pathname == elm.href ? "-is-active" : ""
          } `}
        >
          {elm.id == 8 ? (
            <Link href={elm.href} onClick={() => signOut(() => router.push("/"))}>
              <i className={`${elm.iconClass} mr-15`}></i>
              {elm.text}
            </Link>
          ) : (
            <Link
              key={i}
              href={elm.href}
              className="d-flex items-center text-17 lh-1 fw-500 "
            >
              <i className={`${elm.iconClass} mr-15`}></i>
              {elm.text}
            </Link>
          )}
        </div>
      ))}
    </div>
  );
}
