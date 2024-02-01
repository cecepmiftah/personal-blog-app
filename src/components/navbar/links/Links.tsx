import { DarkToggle } from "../darkToggle/DarkToggle";
import { NavLink } from "../navlink/NavLink";

export const links = [
  { title: "Blog", path: "/" },
  { title: "Projects", path: "/projects" },
  { title: "About", path: "/about" },
  { title: "Contact", path: "/contact" },
];

export const Links = () => {
  return (
    <div className="flex gap-7 items-center">
      {links.map((link) => (
        <NavLink path={link.path} title={link.title} key={link.title} />
      ))}
      <div className="hidden md:block lg:hidden">
        <DarkToggle toggleType="md" />
      </div>
      <div className="hidden lg:block">
        <DarkToggle toggleType="lg" />
      </div>
    </div>
  );
};
