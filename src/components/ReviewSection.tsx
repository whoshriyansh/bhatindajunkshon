import Slider from "react-slick";
import { Quote } from "lucide-react";
import bgImage from "../assets/img2.jpg";
import Button from "./ui/Button";

interface Review {
  id: number;
  text: string;
  author: string;
  avatar: string;
}

const reviews: Review[] = [
  {
    id: 1,
    text: "Great food and great ambience. Being a native North Indian I can vouch for the food. Probably the best North Indian food.",
    author: "PRATYAKSH R",
    avatar: "https://picsum.photos/80/80",
  },
  {
    id: 2,
    text: "The taste is authentic and service is excellent. A must-visit restaurant for family dinners.",
    author: "SHRIYANSH",
    avatar: "https://picsum.photos/81/81",
  },
  {
    id: 3,
    text: "Every bite felt like home. The spices, the aroma, everything on point and the staff is very friendly",
    author: "ANIKA K",
    avatar: "https://picsum.photos/82/82",
  },
];

const NextArrow = ({ onClick }: { onClick?: () => void }) => (
  <div className="absolute right-4 bottom-20 z-20 -translate-y-1/2">
    <Button iconName="MoveRight" onClick={onClick} />
  </div>
);

const PrevArrow = ({ onClick }: { onClick?: () => void }) => (
  <div className="absolute left-4 bottom-20 z-20 -translate-y-1/2">
    <Button iconName="MoveLeft" onClick={onClick} />
  </div>
);

const ReviewSection = () => {
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    autoplay: true,
    autoplaySpeed: 5000,
    customPaging: () => (
      <div className="w-2 h-2 mx-1 rounded-full bg-white/40 hover:bg-white transition-all" />
    ),
    dotsClass: "slick-dots absolute bottom-4 flex justify-center w-full",
  };

  return (
    <section
      className="relative w-full h-[50vh] md:h-[65vh] flex items-center justify-center bg-fixed bg-center bg-cover"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Carousel content */}
      <div className="relative z-10 w-full max-w-2xl text-center text-foreground px-4">
        <Quote className="mx-auto mb-6 text-seconday-golden w-10 h-10 sm:w-16 sm:h-16 lg:w-24 lg:h-24" />
        <Slider {...settings}>
          {reviews.map((review) => (
            <div key={review.id}>
              <p className="lg:text-3xl md:text-xl text-base italic text-seconday-golden leading-relaxed">
                {review.text}
              </p>
              <div className="mt-6 flex flex-col items-center">
                <img
                  src={review.avatar}
                  alt={review.author}
                  className="w-14 h-14 rounded-full border-2 border-white shadow-lg"
                />
                <div className="mt-3 font-semibold tracking-wide">
                  {review.author}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default ReviewSection;
