import React from "react"
import  Image  from "next/image"
import Logo from "./logo.webp"
import { geistSans } from "./layout"


export const Header = () => {
  return (
    <header className="main-header h-14 flex items-center px-10 sticky top-0 z-[1000]">
      <div className="flex items-center ">
        <Image src={Logo} alt="Logo" height={50} width={50} />
        <span className={`${geistSans.variable} text-2xl font-bold mt-2`}>Darwish</span>
      </div>
      <div></div>
    </header>
  )
}
