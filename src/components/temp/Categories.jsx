import { categories } from "../assets/assets";
import { useAppContext } from "../context/AppContext";

const Categories = () => {
  const { navigate } = useAppContext();

  return (
    <div className="mt-10 md:mt-4">
      <div className="flex flex-col items-center justify-center w-full mb-8">
        <p className="text-lg md:text-2xl font-bold text-center">
          ক্যাটাগরিস
        </p>
        <div className="w-16 h-0.5 bg-primary rounded-full mt-1"></div>
      </div>

      {/* Categories Grid */}
      <div className="mt-6 flex flex-wrap justify-center gap-8 md:gap-8 lg:gap-12">
        {categories.map((category, index) => (
          <div
            key={index}
            className="group cursor-pointer flex flex-col items-center text-center w-[72px] md:w-[96px]"
            onClick={() => {
              navigate(`/products/${category.path.toLowerCase()}`);
              scrollTo(0, 0);
            }}
          >
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-[#5BAA5B] flex items-center justify-center shadow-md transition-transform duration-300 group-hover:scale-105">
              <div className="w-[74px] h-[74px] md:w-[88px] md:h-[88px] rounded-full bg-[#1F8F4A] flex items-center justify-center border-2 border-[#A8D5A8]">
                <div className="w-[64px] h-[64px] md:w-[76px] md:h-[76px] rounded-full overflow-hidden bg-[#2EA85F]">
                  <img
                    src={category.image}
                    alt={category.text}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>

            <p className="mt-3 text-xs md:text-sm font-medium text-gray-700">
              {category.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
