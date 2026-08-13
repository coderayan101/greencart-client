import { Truck, BadgeIndianRupee, ShieldCheck } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const TopBar = () => {
  return (
    <div className="bg-primary text-white">
      <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-24 xl:px-2 py-2 md:py-0 md:h-9 flex flex-col md:flex-row items-center justify-between gap-2 md:gap-0">
        {/* Left Side */}
        <div className="flex w-full md:w-auto items-center justify-between md:justify-start text-[10px] sm:text-[11px] md:text-sm">
          <div className="flex items-center justify-center gap-1 md:gap-2 px-2 md:px-4 border-r-2 border-white/30 flex-1 md:flex-none">
            <Truck size={14} />
            <span className="whitespace-nowrap">ফ্রি ডেলিভারি</span>
          </div>

          <div className="flex items-center justify-center gap-1 md:gap-2 px-2 md:px-4 border-r-2 border-white/30 flex-1 md:flex-none">
            <BadgeIndianRupee size={14} />
            <span className="whitespace-nowrap">ক্যাশ অন ডেলিভারি</span>
          </div>

          <div className="flex items-center justify-center gap-1 md:gap-2 px-2 md:px-4 flex-1 md:flex-none">
            <ShieldCheck size={14} />
            <span className="whitespace-nowrap">তাজা ও মানসম্মত পণ্য</span>
          </div>
        </div>

        {/* Right Side */}
        <a
          href="https://chat.whatsapp.com/F2RBAfuXirT3BYmN03oHRy"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex items-center gap-2 text-[11px] md:text-sm hover:opacity-90 transition"
        >
          <span>আমাদের WhatsApp গ্রুপে জয়েন করুন</span>
          <FaWhatsapp className="text-lg md:text-xl" />
        </a>
      </div>
    </div>
  );
};

export default TopBar;
