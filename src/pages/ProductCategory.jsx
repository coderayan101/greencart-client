import { useParams } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import { assets, categories, subCategories } from "../assets/assets";
import ProductCart from "../components/ProductCart";

const ProductCategory = () => {
  const { products, navigate } = useAppContext();
  const { category, subcategory } = useParams();

  const searchCategory = categories.find(
    (item) => item.path.toLowerCase() === category,
  );
  const currentSubCategories = subCategories[searchCategory?.path] || [];

  const filteredProducts = products.filter((product) => {
    const categoryMatch =
      product.category?.toLowerCase() === category?.toLowerCase();

    const subcategoryMatch =
      !subcategory ||
      product.subcategory?.toLowerCase() === subcategory.toLowerCase();

    return categoryMatch && subcategoryMatch;
  });

  return (
    <div className="mt-2 md:mt-10 px-6 md:px-16 lg:px-24 xl:px-36">
      {/* Main Category */}
      {searchCategory && (
        <div className="flex flex-col items-end w-max mt-6">
          <p className="text-2xl font-medium">{searchCategory.text}</p>

          <div className="w-16 h-0.5 bg-primary rounded-full"></div>
        </div>
      )}

      {/* Subcategories */}
      {currentSubCategories.length > 0 && (
        <div className="mt-6">
          <div className="grid grid-cols-4 gap-4 md:flex md:flex-wrap md:justify-center md:gap-8 lg:gap-12">
            {currentSubCategories.map((subcategoryItem, index) => (
              <div
                key={index}
                className={`group cursor-pointer flex flex-col items-center text-center w-[72px] md:w-[96px] ${
                  subcategory === subcategoryItem.path.toLowerCase()
                    ? "scale-105"
                    : ""
                }`}
                onClick={() => {
                  navigate(
                    `/products/${category}/${subcategoryItem.path.toLowerCase()}`,
                  );
                  scrollTo(0, 0);
                }}
              >
                {/* Image */}
                <div
                  className={`w-15 h-15 md:w-24 md:h-24 rounded-full flex items-center justify-center shadow-md transition-all duration-300 ${
                    subcategory === subcategoryItem.path.toLowerCase()
                      ? "bg-primary ring-4 ring-primary/30"
                      : "bg-[#5BAA5B] group-hover:scale-105"
                  }`}
                >
                  <div className="w-[54px] h-[54px] md:w-[88px] md:h-[88px] rounded-full bg-[#1F8F4A] flex items-center justify-center border-2 border-[#A8D5A8]">
                    <div className="w-[44px] h-[44px] md:w-[76px] md:h-[76px] rounded-full overflow-hidden bg-[#2EA85F]">
                      <img
                        src={subcategoryItem.image}
                        alt={subcategoryItem.text}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  </div>
                </div>

                {/* Subcategory Name */}
                <p
                  className={`mt-3 text-xs md:text-sm font-medium ${
                    subcategory === subcategoryItem.path.toLowerCase()
                      ? "text-primary font-bold"
                      : "text-gray-700"
                  }`}
                >
                  {subcategoryItem.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Products */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-6 mt-6">
          {filteredProducts.map((product) => (
            <ProductCart key={product._id} product={product} />
          ))}
        </div>
      ) : (
        <div className="flex items-center justify-center h-[60vh]">
          <p className="text-2xl font-medium text-primary">
            No products found in this category.
          </p>
        </div>
      )}

      {/* Back button */}
      <button
        onClick={() => {
          navigate("/");
          scrollTo(0, 0);
        }}
        className="group cursor-pointer flex items-center mt-8 gap-2 text-primary font-medium"
      >
        <img
          className="group-hover:-translate-x-1 transition"
          src={assets.arrow_right_icon_colored}
          alt="arrow"
        />
        ফিরে যান
      </button>
    </div>
  );
};

export default ProductCategory;
