import Link from "next/link";

const MENU_LIST = [
  { text: "Home", href: "/" },
  { text: "Page 1", href: "/page1" },
  { text: "Page 2", href: "/page2" },
];

export const Navbar = () => {
  return (
    <header>
      <nav>
        {MENU_LIST.map((menuItem) => (
          <Link key={menuItem.href} href={menuItem.href}>
            {menuItem.text}
          </Link>
        ))}
      </nav>
    </header>
  );
};
