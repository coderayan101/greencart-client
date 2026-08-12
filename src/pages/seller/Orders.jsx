import { useEffect, useState } from "react";
import { useAppContext } from "../../context/AppContext";
import { assets, dummyOrders } from "../../assets/assets";
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
              ? { ...order, status: "Delivered", isPaid: true }
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
      <div className="md:p-10 p-4 space-y-4">
        <h2 className="text-lg font-medium">Orders List</h2>
        {orders.map((order, index) => (
          <div
            key={index}
            className={`flex flex-col md:items-center md:flex-row gap-5 justify-between p-5 max-w-4xl rounded-xl border transition-all duration-300 ${
              order.status === "Delivered"
                ? "bg-green-50 border-green-500"
                : "bg-white border-gray-300"
            }`}
          >
            <div className="flex gap-5 max-w-80">
              <img
                className="w-12 h-12 object-cover"
                src={assets.box_icon}
                alt="boxIcon"
              />
              <div>
                {order.items.map((item, index) => (
                  <div key={index} className="flex flex-col">
                    {item.product ? (
                      <p className="font-medium">
                        {item.product.name}{" - "}{item.product.weight}
                        <span className="text-primary"> x {item.quantity}</span>
                      </p>
                    ) : (
                      <p className="font-medium text-red-500">
                        Deleted Product
                        <span className="text-primary">x {item.quantity}</span>
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="text-sm md:text-base text-black/60">
              <h3 className="font-semibold">Address:</h3>
              <p className="text-black/80">
                {order.address.firstName} {order.address.lastName}
              </p>
              <p>
                {order.address.street}, {order.address.city}{" "}
              </p>
              <p>
                {order.address.state}, {order.address.zipcode},{" "}
                {order.address.country}
              </p>
              <p></p>
              <p>{order.address.phone}</p>
            </div>

            <p className="font-medium text-lg my-auto">
              Amount: {currency}
              {order.amount}
            </p>

            <div className="flex flex-col text-sm md:text-base text-black/60">
              <p>Method: {order.paymentType}</p>
              <p>Date: {new Date(order.createdAt).toLocaleString()}</p>
              <p>Payment: {order.isPaid ? "Paid" : "Pending"}</p>
              <p>Status: {order.status}</p>

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
                {order.status === "Delivered" ? "Delivered" : "Mark delivered"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
