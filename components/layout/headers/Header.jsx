"use client";
import React from "react";
import { HeaderExplore } from "../component/header-explore";

import SearchToggle from "../component/SearchToggle";
import CartToggle from "../component/CartToggle";
import Menu from "../component/Menu";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import MobileMenu from "../component/MobileMenu";
import { sidebarItems } from "@/data/homeSidebarItems";
import { useClerk } from "@clerk/nextjs";
import { useAuth } from "@clerk/clerk-react";
import { useRouter } from "next/navigation";

export default function Header() {
  const [activeMobileMenu, setActiveMobileMenu] = useState(false);
  const [isOnProfile, setIsOnProfile] = useState(false);
  const { isSignedIn } = useAuth();
  const { signOut } = useClerk();
  const router = useRouter();

  return (
    <>
      <header className="header -type-1 ">
        <div className="header__container">
          <div className="row justify-between items-center">
            <div className="col-auto">
              <div className="header-left">
                <div className="header__logo ">
                  <Link href="/">
                    <Image
                      width={140}
                      height={50}
                      src="/assets/img/general/logo.svg"
                      alt="logo"
                    />
                  </Link>
                </div>

                {/* header explore start */}
                <HeaderExplore
                  allClasses={
                    "header__explore text-green-1 ml-60 xl:ml-30 xl:d-none"
                  }
                />
                {/* header explore end */}
              </div>
            </div>

            <Menu allClasses={"menu__nav text-white -is-active"} />
            <MobileMenu
              setActiveMobileMenu={setActiveMobileMenu}
              activeMobileMenu={activeMobileMenu}
            />

            <div className="col-auto">
              <div className="header-right d-flex items-center">
                <div className="header-right__icons text-white d-flex items-center">
                  {/* search toggle start */}
                  <SearchToggle />
                  {/* search toggle end */}

                  {/* cart toggle start */}
                  <CartToggle
                    parentClassess={"relative ml-30 xl:ml-20"}
                    allClasses={"d-flex items-center text-white"}
                  />
                  {/* cart toggle end */}

                  <div className="d-none xl:d-block ml-20">
                    <button
                      onClick={() => setActiveMobileMenu(true)}
                      className="text-white items-center"
                      data-el-toggle=".js-mobile-menu-toggle"
                    >
                      <i className="text-11 icon icon-mobile-menu"></i>
                    </button>
                  </div>
                </div>

                <div className="header-right__buttons d-flex items-center ml-30 md:d-none">
                  {isSignedIn ? (
                    <div
                      className="relative d-flex items-center ml-10"
                      onClick={() => setIsOnProfile((pre) => !pre)}
                    >
                      <button data-el-toggle=".js-profile-toggle">
                        <Image
                          width={50}
                          height={50}
                          className="size-50"
                          src="/assets/img/misc/user-profile.png"
                          alt="image"
                        />
                      </button>

                      <div
                        className={`toggle-element js-profile-toggle ${
                          isOnProfile ? "-is-el-visible" : ""
                        } -`}
                      >
                        <div className="toggle-bottom -profile bg-white shadow-4 border-light rounded-8 mt-10">
                          <div className="px-30 py-30">
                            <div className="sidebar -dashboard">
                              {sidebarItems.map((elm, i) => (
                                <div
                                  key={i}
                                  className={`sidebar__item ${
                                    elm.id == 1
                                      ? "-is-active -dark-bg-dark-2"
                                      : ""
                                  }`}
                                >
                                  {elm.id == 8 ? (
                                    <Link
                                      href={elm.href}
                                      className="d-flex items-center text-17 lh-1 fw-500"
                                      onClick={() =>
                                        signOut(() => router.push("/"))
                                      }
                                    >
                                      <i
                                        className={elm.iconClass}
                                        style={{
                                          marginRight: "10px",
                                        }}
                                      ></i>

                                      {elm.text}
                                    </Link>
                                  ) : (
                                    <Link
                                      href={elm.href}
                                      className="d-flex items-center text-17 lh-1 fw-500"
                                    >
                                      <i
                                        className={elm.iconClass}
                                        style={{
                                          marginRight: "10px",
                                        }}
                                      ></i>

                                      {elm.text}
                                    </Link>
                                  )}
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <>
                      <Link
                        href="/login"
                        className="button -underline text-white"
                      >
                        Log in
                      </Link>
                      <Link
                        href="/signup"
                        className="button -sm -white text-dark-1 ml-30"
                      >
                        Sign up
                      </Link>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
