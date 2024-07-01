import { PhoneIcon } from "../utils/icons";

const CarouselCategories = ({ data }) => {
  return data.resources.map((resource, index) => {
    return (
      <a
        key={index}
        href="#"
        className="group transition-all duration-300 hover:bg-secondary carousel-item text-center relative min-w-36 h-36 snap-start border border-black flex items-center justify-center flex-col"
      >
        <PhoneIcon size={50} className="group-hover:text-white" />
        <span className="group-hover:text-white">Telemóvel</span>
      </a>
    );
  });
};

export default CarouselCategories;
