import { useEffect, useState } from "react";
import { useAppContext } from "../context/AppContext";
import { assets, dummyOrders } from "../assets/assets";

const MyOrders = () => {
  const [myOrders, setMyOrders] = useState([]);
  const { currency, axios, user } = useAppContext();

  const fetchMyOrders = async () => {
    try {
      const { data } = await axios.post("/api/order/user", {
        userId: user._id,
      });
      if (data.success) {
        setMyOrders(data.orders);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user) {
      fetchMyOrders();
    }
  }, [user]);

  return (
    <div className="mt-6 pb-16 px-6 md:px-16 lg:px-24 xl:px-36">
      <div className="flex flex-col items-end w-max mb-8">
        <p className="text-lg md:text-2xl font-bold uppercase">আমার অর্ডারসমূহ</p>
        <div className="w-16 h-0.5 bg-primary rounded-full"></div>
      </div>

      {myOrders.map((order, index) => (
        <div
          key={index}
          className="border border-primary rounded-lg mb-10 p-4 py-3 max-w-4xl"
        >
          <span className="font-semibold">OrderId: {order.orderNumber}</span>
          <p className="flex justify-between md:items-center text-gray-500 md:font-medium max-md:flex-col bg-secondary p-2 mt-2 rounded-lg">
            {/* <span className="font-semibold">OrderId: {order._id}</span> */}
            <span className="font-semibold">
              Total Amount: {currency}
              {order.amount}
            </span>
            <span className="">Payment: {order.paymentType}</span>
            <span>Date: {new Date(order.createdAt).toLocaleDateString()}</span>
            <span className="">Status: {order.status}</span>
          </p>

          {order.items.map((item, index) => {
            if (!item.product) {
              return (
                <div
                  key={index}
                  className={`${
                    order.items.length !== index + 1 ? "border-b" : ""
                  } border-gray-200 py-5`}
                >
                  <div className="flex items-center gap-4">
                    {/* Blank image box */}
                    <div className="w-20 h-20 md:w-24 md:h-24 border border-gray-300 rounded-lg bg-gray-100 flex items-center justify-center">
                      <span className="text-gray-400 text-xs text-center px-2">
                        No Image
                      </span>
                    </div>

                    {/* Product unavailable text */}
                    <div>
                      <h2 className="text-lg md:text-xl font-medium text-gray-500">
                        এই পণ্যটি আর উপলব্ধ নেই
                      </h2>

                      <div className="flex items-center gap-8 mt-2 text-gray-500 text-sm md:text-base">
                        <p>
                          <span className="font-medium text-gray-700">
                            Quantity:
                          </span>{" "}
                          {item.quantity}
                        </p>
                        <p>
                          <span className="font-medium text-gray-700">
                            Weight:
                          </span>{" "}
                          --
                        </p>
                        <p>
                          <span className="font-medium text-gray-700">
                            Amount:
                          </span>{" "}
                          {currency}0
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <div
                key={index}
                className={`${
                  order.items.length !== index + 1 ? "border-b" : ""
                } border-gray-200 py-5`}
              >
                <div className="flex items-center justify-between gap-6">
                  <div className="flex items-center gap-4">
                    <div className="w-20 h-20 md:w-24 md:h-24 border border-gray-300 rounded-lg overflow-hidden bg-gray-50 flex items-center justify-center">
                      <img
                        src={item.product.image[0]}
                        alt={item.product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div>
                      <h2 className="text-lg md:text-xl font-medium text-gray-800">
                        {item.product.name}
                      </h2>

                      <div className="flex items-center gap-6 md:gap-8 mt-2 text-gray-600 text-sm md:text-base">
                        <p>
                          <span className="text-sm font-semibold text-gray-800">
                            Qty:
                          </span>{" "}
                          {item.quantity}
                        </p>
                        <p>
                          <span className="text-sm font-semibold text-gray-800">
                            ওজন:
                          </span>{" "}
                          {item.product.weight}
                        </p>
                        <p>
                          <span className="text-sm font-semibold text-gray-800">
                            দাম:
                          </span>{" "}
                          {currency}
                          {item.product.offerPrice * item.quantity}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default MyOrders;
