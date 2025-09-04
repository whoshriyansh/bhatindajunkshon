import chef from "../assets/chef.jpg";

const AwardsSection = () => {
  return (
    <div className="py-10 w-full bg-gradient-to-b from-primary-red via-secondary-red to-accent-red">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center gap-2">
          <div className="flex items-center justify-center">
            <img
              src={chef}
              alt="Beverage"
              className="w-96 h-96 object-cover rounded-md brightness-75"
            />
          </div>
          <div className="text-primary-golden flex flex-col items-center justify-center w-full px-4 md:px-0 md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-normal font-playfair text-right">
              Chef Sanjyoot
            </h2>
            <p className="text-sm font-thin leading-relaxed text-seconday-golden text-center">
              In addition to sake, we offer a diverse range of Japanese beer,
              spirits and liqueurs as well as vibrant cocktails and a fine
              selection of wines – all carefully selected to enhance your meal.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AwardsSection;
