import { SunIcon } from "@heroicons/react/16/solid";
import {
    IconButton,
    Navbar,
    Typography,
} from "@material-tailwind/react";

function NavItem({ label }: { label: string }) {
    return (
        <a href="#">
            <Typography as="li" color="blue-gray" className="p-1 font-medium">
                {label}
            </Typography>
        </a>
    );
}

function NavList() {
    return (
        <ul className="mb-4 mt-2 flex flex-col gap-3 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-8">
            <NavItem label="My50 Calculator" />
            <NavItem label="Working..." />
            <NavItem label="Working..." />
        </ul>
    );
}

export default function NavbarComponent() {

    return (
        <Navbar color="transparent" fullWidth className="shadow-lg z-999">
            <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
                <Typography
                    as="a"
                    href="#"
                    color="blue-gray"
                    className="mr-4 cursor-pointer text-lg font-bold"
                >
                    DIY Tools
                </Typography>
                <div className="hidden lg:block">
                    <NavList />
                </div>
                <div>
                    <IconButton className="bg-black rounded-full !size-7">
                        <SunIcon className="size-5 text-white" />
                    </IconButton>
                </div>
            </div>
        </Navbar>
    );
}