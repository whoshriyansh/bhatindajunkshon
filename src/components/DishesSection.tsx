import Slider from "react-slick";
import { Instagram } from "lucide-react";
import dish1 from "../assets/dishes/dish1.jpg";
import dish2 from "../assets/dishes/dish2.jpg";
import dish3 from "../assets/dishes/dish3.jpg";
import dish4 from "../assets/dishes/dish4.jpg";
import dish5 from "../assets/dishes/dish5.jpg";
import dish6 from "../assets/dishes/dish6.jpg";
import dish7 from "../assets/dishes/dish7.jpg";
import dish8 from "../assets/dishes/dish8.jpg";
import dish9 from "../assets/dishes/dish9.jpg";
import dish10 from "../assets/dishes/dish10.jpg";
import Button from "./ui/Button";

interface DishProps {
  img: string;
  name: string;
  link: string;
}

const DishCard: React.FC<DishProps> = ({ img, name, link }) => {
  return (
    <div className="group relative w-96 h-96 md:w-64 md:h-80 overflow-hidden rounded-lg shadow-lg cursor-pointer mx-auto">
      <img
        src={img}
        alt={name}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-90"
      />
      <div className="absolute inset-0 bg-primary-golden flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <h2 className="text-2xl font-playfair font-semibold text-primary">
          {name}
        </h2>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 flex items-center gap-2 px-3 py-1 rounded-full text-primary-red hover:bg-primary-red hover:text-primary-golden transition-colors font-mono"
        >
          View Dish <Instagram size={24} />
        </a>
      </div>
    </div>
  );
};

const NextArrow = ({ onClick }: { onClick?: () => void }) => (
  <div className="absolute right-4 top-1/2 z-20 -translate-y-1/2">
    <Button iconName="MoveRight" onClick={onClick} />
  </div>
);

const DishesSection = () => {
  interface MyDishes {
    id: number;
    img: string;
    name: string;
    link: string;
  }

  const dishes: MyDishes[] = [
    {
      id: 1,
      img: dish1,
      name: "Bahtinda Baingan",
      link: "https://instagram.com",
    },
    {
      id: 2,
      img: dish2,
      name: "Amritsari Kulcha",
      link: "https://instagram.com",
    },
    { id: 3, img: dish3, name: "Makki di Roti", link: "https://instagram.com" },
    {
      id: 4,
      img: dish4,
      name: "Sarson da Saag",
      link: "https://instagram.com",
    },
    { id: 5, img: dish5, name: "Pindi Chole", link: "https://instagram.com" },
    { id: 6, img: dish6, name: "Lassi Patiala", link: "https://instagram.com" },
    {
      id: 7,
      img: dish7,
      name: "Tandoori Chicken",
      link: "https://instagram.com",
    },
    { id: 8, img: dish8, name: "Paneer Tikka", link: "https://instagram.com" },
    { id: 9, img: dish9, name: "Dal Makhani", link: "https://instagram.com" },
    {
      id: 10,
      img: dish10,
      name: "Bhutte da Kees",
      link: "https://instagram.com",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <></>,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="py-5 md:py-10 w-full bg-gradient-to-b from-primary-red via-secondary-red to-accent-red">
      <div className="container mx-auto flex flex-col gap-4 px-4">
        <h1 className="text-4xl font-normal font-playfair text-center">
          Our Dishes
        </h1>
        <div className="">
          <Slider {...settings}>
            {dishes.map((dish) => (
              <DishCard
                key={dish.id}
                img={dish.img}
                name={dish.name}
                link={dish.link}
              />
            ))}
          </Slider>
        </div>

        <h2 className="text-xl text-seconday-golden font-normal font-playfair text-center flex items-center justify-center gap-2">
          Look more on :
          <span className="hover:scale-125 transition-all duration-300 cursor-pointer">
            <Instagram size={18} />
          </span>
        </h2>
      </div>
    </div>
  );
};

export default DishesSection;
