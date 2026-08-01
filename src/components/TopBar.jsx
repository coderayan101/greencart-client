import { Truck, BadgeIndianRupee, ShieldCheck } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const TopBar = () => {
  return (
    <div className="bg-primary text-white">
      <div className="max-w-[1400px] mx-auto px-4 md:px-16 lg:px-24 xl:px-2 py-2 md:py-0 md:h-9 flex flex-col md:flex-row items-center justify-between gap-2 md:gap-0">

        {/* Left Side */}
        <div className="flex flex-wrap justify-center md:justify-start items-center gap-x-4 gap-y-1 text-[11px] md:text-sm">

          <div className="flex items-center gap-1 md:gap-2 md:px-4 md:border-r md:border-white/30">
            <Truck size={15} />
            <span>ফ্রি ডেলিভারি</span>
          </div>

          <div className="flex items-center gap-1 md:gap-2 md:px-4 md:border-r md:border-white/30">
            <BadgeIndianRupee size={15} />
            <span>ক্যাশ অন ডেলিভারি</span>
          </div>

          <div className="flex items-center gap-1 md:gap-2">
            <ShieldCheck size={15} />
            <span>তাজা ও মানসম্মত পণ্য</span>
          </div>

        </div>

        {/* Right Side */}
        <a
          href="https://wa.me/8801XXXXXXXXX"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-[11px] md:text-sm hover:opacity-90 transition"
        >
          <span>আমাদের WhatsApp গ্রুপে জয়েন করুন</span>
          <FaWhatsapp className="text-lg md:text-xl" />
        </a>

      </div>
    </div>
  );
};

export default TopBar;