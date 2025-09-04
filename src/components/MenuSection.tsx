import { motion } from "framer-motion";
import beverageImg from "../assets/wine.jpg";
import punjabiDish from "../assets/punjabiDish.jpg";
import Button from "./ui/Button";

const MenuSection = () => {
  const leftVariant = {
    hidden: { x: -200, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 1, ease: "easeOut" as any },
    },
  };

  const rightVariant = {
    hidden: { x: 200, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 1, ease: "easeOut" as any },
    },
  };

  return (
    <div className="py-16 w-full">
      <div className="container mx-auto space-y-10 md:space-y-24 px-4">
        {/* Beverage Menu (Image Left) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
          <motion.div
            variants={leftVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex items-center justify-center"
          >
            <img
              src={beverageImg}
              alt="Beverage"
              className="rounded-md w-96 h-96 brightness-75"
            />
          </motion.div>
          <div className="text-primary-golden flex flex-col item-start md:items-end gap-4">
            <h2 className="text-3xl md:text-4xl font-normal font-playfair">
              Our Curated Beverage Menu
            </h2>
            <p className="text-base font-thin leading-relaxed text-seconday-golden text-left md:text-right">
              At Sono, we believe that a true Japanese dining experience is
              complemented by an exquisite selection of beverages. Our curated
              sake list features a variety of premium options, ranging from
              crisp and refreshing to rich and complex, ensuring that there is a
              perfect pairing for every dish. In addition to sake, we offer a
              diverse range of Japanese beer, spirits and liqueurs as well as
              vibrant cocktails and a fine selection of wines – all carefully
              selected to enhance your meal.
            </p>
            <div>
              <Button name="Beverage Menu" />
            </div>
          </div>
        </div>

        {/* Food Menu (Image Right) */}
        <div className="grid grid-col-1 md:grid-cols-2 gap-4 items-center">
          <div className="text-primary-golden flex flex-col items-start gap-4 order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-normal font-playfair">
              Our Curated Beverage Menu
            </h2>
            <p className="text-base font-thin leading-relaxed text-seconday-golden">
              At Sono, we believe that a true Japanese dining experience is
              complemented by an exquisite selection of beverages. Our curated
              sake list features a variety of premium options, ranging from
              crisp and refreshing to rich and complex, ensuring that there is a
              perfect pairing for every dish. In addition to sake, we offer a
              diverse range of Japanese beer, spirits and liqueurs as well as
              vibrant cocktails and a fine selection of wines – all carefully
              selected to enhance your meal.
            </p>
            <Button name="Food Menu" />
          </div>
          <motion.div
            variants={rightVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex items-center justify-center order-1 md:order-2"
          >
            <img
              src={punjabiDish}
              alt="Food"
              className="w-96 h-96 object-cover rounded-md brightness-75"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default MenuSection;
