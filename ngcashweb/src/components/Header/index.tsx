import React from "react";
import logo from "public/assets/black-logo.svg";

export default function Header() {
    return (
        <div className="line-center bg-white w-screen h-12 absolute">
            <img height="60" width="60" src={logo.src} />
        </div>
    );
}
