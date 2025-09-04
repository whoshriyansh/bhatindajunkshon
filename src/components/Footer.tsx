import logo from "../assets/logo2.png";

const Footer = () => {
  return (
    <footer className="relative h-[80vh] bg-primary text-foreground flex flex-col items-center justify-center">
      {/* Brand Name */}
      <div className="h-auto w-96 mb-4">
        <img src={logo} alt="" />
      </div>

      {/* Description */}
      <p className="text-center max-w-md mb-8 text-base md:text-lg text-seconday-golden font-thin md:font-normal">
        A delicious WP theme especially designed for true culinary experts,
        restaurants, master chefs and all with a passion for cooking.
      </p>

      {/* Social Links */}
      <div className="flex gap-8 text-golden tracking-widest text-sm font-semibold mb-10 text-foreground">
        <a href="#" className="hover:text-primary-golden">
          FACEBOOK
        </a>
        <a href="#" className="hover:text-primary-golden">
          TWITTER
        </a>
        <a href="#" className="hover:text-primary-golden">
          INSTAGRAM
        </a>
      </div>

      {/* Bottom strip */}
      <div className="absolute bottom-4 text-xs text-foreground font-thin">
        © {new Date().getFullYear()} Your Restaurant Name. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
