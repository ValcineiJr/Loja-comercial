import { FillStartIcon, HeartIcon } from "../utils/icons";

const CarouselProduct = ({ data }) => {
  return data.resources.map((resource, index) => {
    return (
      <div
        key={index}
        className="carousel-item text-center relative min-w-60 h-96 snap-start"
      >
        <div className=" h-full w-full aspect-square block absolute top-0 left-0 p-4 group ">
          <div className="flex justify-between mb-2">
            <div className="bg-secondary rounded  px-2">
              <span className="text-white text-xs"> -40%</span>
            </div>
            <HeartIcon size={30} className="ml-auto  " />
          </div>
          <a href={resource.link}>
            <img
              src="https://github.com/pedroin1.png"
              alt=""
              className="max-h-64 w-full aspect-square "
            />
          </a>

          <div className="flex flex-col items-start">
            <button className="text-white bg-black text-center  w-full p-1 rounded my-1 hidden group-hover:block ">
              Adicionar ao carrinho
            </button>
            <span className="font-medium text-base">HAVIT HV-G92 Gamepad</span>
            <div className="flex gap-3">
              <span className="text-base font-medium text-secondary">
                R$ 120
              </span>
              <span className="line-through text-base font-medium text-black/50">
                R$ 160
              </span>
            </div>

            <div className="flex gap-2 items-center">
              <FillStartIcon className="text-yellow-500" />
              <FillStartIcon className="text-yellow-500" />
              <FillStartIcon className="text-yellow-500" />
              <FillStartIcon className="text-yellow-500" />
              <FillStartIcon className="text-yellow-500" />
              <span className="text-sm font-semibold text-black/50 ">(88)</span>
            </div>
          </div>
        </div>
      </div>
    );
  });
};

export default CarouselProduct;
