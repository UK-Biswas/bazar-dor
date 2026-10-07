import Image from "next/image";
import { Button } from "@heroui/react";
import Navlinks from "./NavLinks";
import Link from "next/link";

const Header = () => {
    const date = new Date().toLocaleDateString("bn-BD", {
        dateStyle: "full",
    });

    return (
        <header className="border-b border-gray-200 bg-white container mx-auto">
            <div className="flex min-h-[60px]  items-center justify-between gap-3 ">

                {/* Logo + Name */}
                <Link href={"/"}>
                    <div className="flex shrink-0 items-center gap-2 sm:gap-3">

                        <Image
                            src="/assets/logo-icon.png"
                            alt="বাজার দর"
                            width={50}
                            height={50}
                            className="h-10 w-10 rounded-xl bg-green-700 object-contain p-2 sm:h-12 sm:w-12"
                        />

                        <div>
                            <h1 className="text-lg font-bold text-gray-900 sm:text-2xl">
                                বাজার দর
                            </h1>

                            {/* Desktop Date */}
                            <p className="hidden text-xs text-gray-500 sm:block">
                                {date}
                            </p>
                        </div>

                    </div>
                </Link>

                {/* Mobile Center Date */}
                <div className="flex flex-1 items-center justify-center sm:hidden">
                    <p className="text-center text-[9px] font-medium text-gray-500">
                        {date}
                    </p>
                </div>

                {/* Auth Buttons */}
                <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">

                    <Button
                        variant="bordered"
                        size="sm"
                        className="rounded-lg px-2 text-xs font-medium sm:px-3 sm:text-sm p-2"
                    >
                        সাইন ইন
                    </Button>

                    <Button
                        size="sm"
                        className="rounded-lg bg-green-700 px-2 text-xs font-medium text-white hover:bg-green-800 sm:px-3 sm:text-sm p-2"
                    >
                        সাইন আপ
                    </Button>

                </div>

            </div>
            <Navlinks></Navlinks>
        </header>
    );
};

export default Header;