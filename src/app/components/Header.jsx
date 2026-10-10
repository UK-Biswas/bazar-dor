
import Image from "next/image";
import Navlinks from "./NavLinks";
import Link from "next/link";
import AuthHeader from "./AuthHeader";


const Header = () => {
    const date = new Date().toLocaleDateString("bn-BD", {
        dateStyle: "full",
    });

    return (
        <header className="border-b pt-4 border-gray-200 bg-white container mx-auto">
            <div className="flex min-h-[60px] items-center justify-between gap-3">

                {/* Logo + Name */}
                <Link href="/">
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

                {/* Authentication */}
                <div className="shrink-0">
                    <AuthHeader></AuthHeader>
                </div>

            </div>

            {/* Navigation */}
            <Navlinks></Navlinks>
        </header>
    );
};

export default Header;