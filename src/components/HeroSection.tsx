import Slider from "react-slick";
import { motion } from "motion/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import logo from "../assets/logo2.png";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.png";
import Button from "./ui/Button";

const NextArrow = ({ onClick }: { onClick?: () => void }) => (
  <div className="absolute right-4 bottom-20 z-20 -translate-y-1/2">
    <Button iconName="MoveRight" onClick={onClick} />
  </div>
);

const HeroSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <></>,
  };

  const logoVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 1, ease: "easeOut" as any },
    },
  };

  const textVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 1, ease: "easeOut" as any, delay: 0.1 },
    },
  };

  const slides = [img1, img2, img3];

  return (
    <div className="relative h-[calc(100vh-60px)] w-full overflow-hidden">
      <Slider {...settings}>
        {slides.map((src, index) => (
          <div key={index} className="relative h-screen w-full">
            <img
              src={src}
              alt={`slide-${index}`}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-70 pointer-events-none" />
          </div>
        ))}
      </Slider>

      <div className="pointer-events-none absolute inset-0 z-30 flex flex-col items-center justify-center text-center">
        <div className="pointer-events-auto">
          <motion.img
            variants={logoVariants}
            initial="hidden"
            animate="visible"
            src={logo}
            alt="logo"
            className="mb-4 h-32 md:h-32 w-auto mx-auto"
          />
          <motion.h1
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="text-2xl md:text-4xl font-normal text-primary-golden font-playfair"
          >
            Enter the world of culinary soothing Indian Dishes
          </motion.h1>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
