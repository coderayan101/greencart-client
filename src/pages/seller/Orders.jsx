import { useEffect, useState } from "react";
import { useAppContext } from "../../context/AppContext";
import { assets } from "../../assets/assets";
import toast from "react-hot-toast";
import { CircleCheck } from "lucide-react";

const Orders = () => {
  const { currency, axios } = useAppContext();
  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
    try {
      const { data } = await axios.get("/api/order/seller");

      if (data.success) {
        setOrders(data.orders);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const updateStatus = async (orderId) => {
    try {
      const { data } = await axios.post("/api/order/update-status", {
        orderId,
        status: "Delivered",
      });

      if (data.success) {
        setOrders((prev) =>
          prev.map((order) =>
            order._id === orderId
              ? {
                  ...order,
                  status: "Delivered",
                  isPaid: true,
                }
              : order,
          ),
        );

        toast.success("Order marked as delivered");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div className="no-scrollbar flex-1 h-[95vh] overflow-y-scroll">
      <div className="p-4 md:p-6 lg:p-10 space-y-4">
        <h2 className="text-lg font-medium">Orders List</h2>

        {orders.map((order) => (
          <div
            key={order._id}
            className={`flex flex-col md:items-center md:flex-row gap-5 justify-between p-5 max-w-5xl rounded-xl border transition-all duration-300 ${
              order.status === "Delivered"
                ? "bg-green-50 border-green-500"
                : "bg-white border-gray-300"
            }`}
          >
            {/* Products */}
            <div className="flex gap-5 max-w-96">
              {/* <img
                className="w-12 h-12 object-cover"
                src={assets.box_icon}
                alt="boxIcon"
              /> */}

              <div className="space-y-3">
                {order.items.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    {/* Product Image */}
                    <div className="w-12 h-12 rounded-md overflow-hidden border border-gray-200 bg-gray-50 flex-shrink-0">
                      {item.image ? (
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <img
                          src={assets.box_icon}
                          alt="Product"
                          className="w-full h-full object-contain p-2"
                        />
                      )}
                    </div>

                    {/* Product Details */}
                    {/* <div>
                      <p className="font-medium">
                        {item.name}
                        <span className="text-gray-500">
                          {" - "}
                          {item.weight}
                        </span>
                      </p>

                      <div className="text-sm text-gray-500">
                        <span>
                          Qty: {item.quantity}
                        </span>

                        <span className="mx-2">•</span>

                        <span>
                          Price: {currency}
                          {item.price}
                        </span>

                        <span className="mx-2">•</span>

                        <span>
                          Total: {currency}
                          {item.price * item.quantity}
                        </span>
                      </div>
                    </div> */}
                    <div className="min-w-0 flex-1">
                      <p className="font-medium text-sm md:text-sm lg:text-base truncate">
                        {item.name}
                        <span className="text-gray-500">
                          {" - "}
                          {item.weight}
                        </span>
                      </p>

                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1 text-xs md:text-xs lg:text-sm text-gray-500">
                        <span>Qty: {item.quantity}</span>

                        <span className="hidden md:inline">•</span>

                        <span>
                          Price: {currency}
                          {item.price}
                        </span>

                        <span className="hidden md:inline">•</span>

                        <span>
                          Total: {currency}
                          {item.price * item.quantity}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Address */}
            <div className="text-sm md:text-base text-black/60">
              <h3 className="font-semibold">Address:</h3>

              <p className="text-black/80">
                {order.address?.firstName} {order.address?.lastName}
              </p>

              <p>
                {order.address?.street}, {order.address?.city}
              </p>

              <p>
                {order.address?.state}, {order.address?.zipcode},{" "}
                {order.address?.country}
              </p>

              <p>{order.address?.phone}</p>
            </div>

            {/* Amount */}
            <p className="font-medium text-lg my-auto">
              Amount: {currency}
              {order.amount}
            </p>

            {/* Order Information */}
            <div className="flex flex-col text-sm md:text-base text-black/60">
              <p>
                <span className="font-medium">Order ID:</span>{" "}
                {order.orderNumber}
              </p>

              <p>
                <span className="font-medium">Method:</span> {order.paymentType}
              </p>

              <p>
                <span className="font-medium">Date:</span>{" "}
                {new Date(order.createdAt).toLocaleString()}
              </p>

              <p>
                <span className="font-medium">Payment:</span>{" "}
                {order.isPaid ? "Paid" : "Pending"}
              </p>

              <p>
                <span className="font-medium">Status:</span> {order.status}
              </p>

              <button
                onClick={() => updateStatus(order._id)}
                disabled={order.status === "Delivered"}
                className={`mt-2 flex items-center justify-center gap-2 px-4 py-2 rounded-lg font-medium transition ${
                  order.status === "Delivered"
                    ? "bg-green-600 text-white cursor-default"
                    : "bg-gray-100 text-gray-700 hover:bg-green-100"
                }`}
              >
                <CircleCheck className="w-5 h-5" />

                {order.status === "Delivered" ? "Delivered" : "Delivered"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
