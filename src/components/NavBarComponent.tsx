import { Bars3Icon, SunIcon, XMarkIcon } from "@heroicons/react/16/solid";
import {
    Collapse,
    IconButton,
    Navbar,
    Typography,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export default function NavbarComponent() {
    const [darkMode, setDarkMode] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const theme = localStorage.getItem("theme");
        if (theme === 'dark') {
            setDarkMode(true);
            document.documentElement.classList.add("dark");
        }
    }, []);

    useEffect(() => {
        const theme = darkMode ? "dark" : "light";
        document.documentElement.classList.toggle("dark", darkMode);
        localStorage.setItem("theme", theme);
    }, [darkMode]);

    function NavList() {
        return (
            <ul className="p-2 gap-y-4 flex flex-col gap-1 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-8 text-black dark:text-white ">
                <NavLink to="/My50"> My50 Calculator </ NavLink>
                <NavLink to="/1"> Working... </ NavLink>
                <NavLink to="/2"> Working... </ NavLink>
            </ul>
        );
    }

    return (
        <Navbar color="transparent" fullWidth className="shadow-lg z-999 dark:border-b dark:border-white/5">
            <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
                <Typography
                    as="a"
                    href="/"
                    color="blue-gray"
                    className="mr-4 cursor-pointer text-lg font-bold text-black dark:text-white"
                >
                    DIY Tools
                </Typography>
                <div className="hidden lg:block">
                    <NavList />
                </div>
                <div className="">
                    <IconButton
                        className="bg-gray-800 rounded-full !size-7 ml-auto"
                        onClick={() => setDarkMode(!darkMode)}
                    >
                        <SunIcon className="size-5 text-gray-200" />
                    </IconButton>
                    <IconButton
                        size="sm"
                        variant="text"
                        color="blue-gray"
                        onClick={() => setOpen(!open)}
                        className="text-blue-gray-900 dark:text-white lg:hidden ml-4"
                    >
                        {open ? (
                            <XMarkIcon className="size-6" strokeWidth={2} />
                        ) : (
                            <Bars3Icon className="size-6" strokeWidth={2} />
                        )}
                    </IconButton>
                </div>
            </div>
            <Collapse open={open}>
                <div className="bg-transparent p-4">
                    <NavList />
                </div>
            </Collapse>
        </Navbar>
    );
}