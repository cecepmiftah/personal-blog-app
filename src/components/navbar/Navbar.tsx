import { Links } from "./links/Links";
import { MobileNav } from "./mobileNav/MobileNav";

export const Navbar = () => {
  return (
    <div className="w-full lg:max-w-[1216px] xl:max-w-[1440px] mx-auto sticky top-0 bg-inherit z-50">
      <div className="h-16 flex justify-between items-center mx-5">
        <div>
          <h1 className="font-semibold text-lg lg:text-xl leading-6">
            Cecep M
          </h1>
        </div>
        {/* Links */}
        <div className="hidden md:block">
          <Links />
        </div>
        {/* Mobile */}
        <div className="md:hidden">
          <MobileNav />
        </div>
      </div>
    </div>
  );
};
