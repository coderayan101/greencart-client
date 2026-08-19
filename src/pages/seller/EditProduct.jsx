import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import { assets, categories, subCategories } from "../../assets/assets";
import { useAppContext } from "../../context/AppContext";

const EditProduct = () => {
  const { id } = useParams();

  const { products, axios, fetchProducts } = useAppContext();

  const [files, setFiles] = useState([]);
  const [existingImages, setExistingImages] = useState([]);

  const [name, setName] = useState("");
  const [weight, setWeight] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [subcategory, setSubcategory] = useState("");
  const [price, setPrice] = useState("");
  const [offerPrice, setOfferPrice] = useState("");

  const currentSubCategories = subCategories[category] || [];

  useEffect(() => {
    const product = products.find((product) => product._id === id);

    if (!product) return;

    setName(product.name || "");
    setWeight(product.weight || "");
    setDescription(
      Array.isArray(product.description)
        ? product.description.join("\n")
        : product.description || "",
    );
    setCategory(product.category || "");
    setSubcategory(product.subcategory || "");
    setPrice(product.price || "");
    setOfferPrice(product.offerPrice || "");
    setExistingImages(product.image || []);
  }, [id, products]);

  const handleFileChange = (index, file) => {
    const updatedFiles = [...files];
    updatedFiles[index] = file;
    setFiles(updatedFiles);
  };

  const onSubmitHandler = async (event) => {
    try {
      event.preventDefault();

      const productData = {
        name,
        weight,
        description: description.split("\n"),
        category,
        subcategory,
        price,
        offerPrice,
      };

      const formData = new FormData();

      formData.append("id", id);
      formData.append("productData", JSON.stringify(productData));

      for (let i = 0; i < files.length; i++) {
        if (files[i]) {
          formData.append("images", files[i]);
        }
      }

      const { data } = await axios.put("/api/product/update", formData);

      if (data.success) {
        toast.success(data.message);

        await fetchProducts();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="no-scrollbar flex-1 h-[95vh] overflow-y-scroll flex flex-col justify-between">
      <form
        onSubmit={onSubmitHandler}
        className="md:p-10 p-4 space-y-5 max-w-lg"
      >
        <h2 className="text-xl font-semibold">Edit Product</h2>

        {/* Product Images */}
        <div>
          <p className="text-base font-medium">Product Image</p>

          <div className="flex flex-wrap items-center gap-3 mt-2">
            {Array(4)
              .fill("")
              .map((_, index) => (
                <label key={index} htmlFor={`edit-image${index}`}>
                  <input
                    onChange={(e) => handleFileChange(index, e.target.files[0])}
                    type="file"
                    id={`edit-image${index}`}
                    hidden
                    accept="image/*"
                  />

                  <img
                    className="w-24 h-24 object-cover cursor-pointer rounded border"
                    src={
                      files[index]
                        ? URL.createObjectURL(files[index])
                        : existingImages[index] || assets.upload_area
                    }
                    alt="Product"
                  />
                </label>
              ))}
          </div>
        </div>

        {/* Product Name */}
        <div className="flex flex-col gap-1 max-w-md">
          <label className="text-base font-medium" htmlFor="product-name">
            Product Name
          </label>

          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            id="product-name"
            type="text"
            placeholder="Type here"
            className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40"
            required
          />
        </div>

        {/* Product Weight */}
        <div className="flex flex-col gap-1 max-w-md">
          <label className="text-base font-medium" htmlFor="product-weight">
            Product Weight
          </label>

          <input
            onChange={(e) => setWeight(e.target.value)}
            value={weight}
            id="product-weight"
            type="text"
            placeholder="Type here"
            className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40"
            required
          />
        </div>

        {/* Product Description */}
        <div className="flex flex-col gap-1 max-w-md">
          <label
            className="text-base font-medium"
            htmlFor="product-description"
          >
            Product Description
          </label>

          <textarea
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            id="product-description"
            rows={3}
            className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40 resize-none"
            placeholder="Type here"
          />
        </div>

        {/* Category */}
        <div className="w-full flex flex-col gap-1">
          <label className="text-base font-medium" htmlFor="category">
            Category
          </label>

          <select
            onChange={(e) => {
              setCategory(e.target.value);
              setSubcategory("");
            }}
            value={category}
            id="category"
            className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40"
          >
            <option value="">Select Category</option>

            {categories.map((item, index) => (
              <option key={index} value={item.path}>
                {item.path}
              </option>
            ))}
          </select>
        </div>
        
        {/* Subcategory */}
        {currentSubCategories.length > 0 && (
          <div className="w-full flex flex-col gap-1">
            <label className="text-base font-medium" htmlFor="subcategory">
              Subcategory
            </label>

            <select
              onChange={(e) => setSubcategory(e.target.value)}
              value={subcategory}
              id="subcategory"
              className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40"
              required
            >
              <option value="">Select Subcategory</option>

              {currentSubCategories.map((item, index) => (
                <option key={index} value={item.path}>
                  {item.text}
                </option>
              ))}
            </select>
          </div>
        )}

        {/* Prices */}
        <div className="flex items-center gap-5 flex-wrap">
          <div className="flex-1 flex flex-col gap-1 w-32">
            <label className="text-base font-medium" htmlFor="product-price">
              Product Price
            </label>

            <input
              onChange={(e) => setPrice(e.target.value)}
              value={price}
              id="product-price"
              type="number"
              placeholder="0"
              className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40"
              required
            />
          </div>

          <div className="flex-1 flex flex-col gap-1 w-32">
            <label className="text-base font-medium" htmlFor="offer-price">
              Offer Price
            </label>

            <input
              onChange={(e) => setOfferPrice(e.target.value)}
              value={offerPrice}
              id="offer-price"
              type="number"
              placeholder="0"
              className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40"
              required
            />
          </div>
        </div>

        {/* Save Button */}
        <button
          type="submit"
          className="px-8 py-2.5 bg-primary text-white font-medium rounded cursor-pointer"
        >
          SAVE CHANGES
        </button>
      </form>
    </div>
  );
};

export default EditProduct;
