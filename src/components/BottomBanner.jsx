import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const BottomBanner = () => {
  const features = [
    "সরাসরি চাষির কাছ থেকে সংগ্রহ",
    "তাজা ও মানসম্মত পণ্য নিশ্চিত",
    "বাজারের সেরা দামে",
    "ফ্রি হোম ডেলিভারি",
    "ক্যাশ অন ডেলিভারির সুবিধা",
  ];

  return (
    <section className="mt-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* Left Card */}

        <div className="bg-[#FCFCF8] border border-[#E7E7DF] rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between">

          <div className="flex-1">

            <h2 className="text-3xl font-bold text-primary mb-6">
              কেন পল্লিসেবা?
            </h2>

            <div className="space-y-4">

              {features.map((item, index) => (

                <div key={index} className="flex items-center gap-3">

                  <CheckCircleIcon
                    sx={{
                      color: "#356F23",
                      fontSize: 24,
                    }}
                  />

                  <p className="text-lg text-gray-700">
                    {item}
                  </p>

                </div>

              ))}

            </div>

          </div>

          <div className="mt-8 md:mt-0 md:ml-8">

            <img
              src="/bottom_banner_image_sm.png"
              alt="Farmer"
              className="w-64 md:w-72"
            />

          </div>

        </div>

        {/* Right Card */}

        <div className="bg-[#FCFCF8] border border-[#D9E5D1] rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between">

          <div className="flex-1">

            <p className="text-primary text-xl font-semibold">
              আমাদের WhatsApp গ্রুপে
            </p>

            <h2 className="text-4xl font-bold text-primary mt-2">
              জয়েন করুন
            </h2>

            <p className="text-gray-700 mt-4 leading-8 max-w-md">
              নিয়মিত আপডেট, অফার ও নতুন
              পণ্যের তথ্য পেতে এখনই
              জয়েন করুন।
            </p>

            <button className="mt-8 bg-primary text-white px-8 py-4 rounded-full flex items-center gap-3 hover:bg-primary/90 transition">

              <WhatsAppIcon />

              গ্রুপ জয়েন করুন

            </button>

          </div>

          <div className="mt-8 md:mt-0 md:ml-10 bg-white rounded-2xl shadow p-4">

            <img
              src="/qr-code.png"
              alt="QR Code"
              className="w-40 h-40 object-contain"
            />

          </div>

        </div>

      </div>
    </section>
  );
};

export default BottomBanner;