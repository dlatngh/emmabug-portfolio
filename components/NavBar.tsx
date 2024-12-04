import Link from "next/link";

const navigation = [
    { name: "gallery", href: "/" },
    { name: "about / contact", href: "/about" },
    { name: "commissions", href: "/commissions", }
];

export default function NavBar() {
    return (
        <nav className="navbar">
            <ul className="navbar-menu flex flex-row space-x-2 lg:space-x-2 ">
                {navigation.map((item, index) => (
                    <Link
                        href={item.href}
                        key={index}
                        className={"navbar-item border-pink-200 border-2 px-3 py-2 text-center w-32 sm:w-48 text-sm sm:text-lg lg:text-2xl"}
                    >
                        <h1>{item.name}</h1>
                    </Link>
                ))}
            </ul>
        </nav>
    );
}
