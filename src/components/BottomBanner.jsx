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
    <section className="mt-14 md:mt-20">
      <div className="max-w-8xl mx-auto">
        {/* Mobile Card */}
        <div className="md:hidden bg-[#FCFCF8] border border-[#E7E7DF] rounded-3xl p-6">
          <h2 className="text-2xl font-bold text-primary mb-5">
            কেন পল্লিসেবা?
          </h2>

          <div className="space-y-3">
            {features.map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircleIcon
                  sx={{
                    color: "#356F23",
                    fontSize: 22,
                  }}
                />
                <p className="text-gray-700 text-base">{item}</p>
              </div>
            ))}
          </div>

          <div className="border-t border-gray-200 mt-6 pt-6 text-center">
            {/* <p className="text-primary text-lg font-semibold">
              আমাদের WhatsApp গ্রুপে
            </p> */}

            {/* <h3 className="text-3xl font-bold text-primary mt-2">
              জয়েন করুন
            </h3> */}

            <p className="text-gray-600 mt-3 leading-6">
              নিয়মিত আপডেট, অফার ও নতুন পণ্যের তথ্য পেতে আমাদের WhatsApp গ্রুপে
              জয়েন করুন।
            </p>

            <a
              href="https://chat.whatsapp.com/F2RBAfuXirT3BYmN03oHRy"
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center justify-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-medium hover:bg-primary/90 transition"
            >
              <WhatsAppIcon />
              গ্রুপ জয়েন করুন
            </a>
          </div>
        </div>

        {/* Tablet Card */}
        {/* <div className="hidden md:block lg:hidden bg-[#FCFCF8] border border-[#E7E7DF] rounded-3xl p-6">
          <h2 className="text-2xl font-bold text-primary mb-5">
            কেন পল্লিসেবা?
          </h2>

          <div className="space-y-3">
            {features.map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircleIcon
                  sx={{
                    color: "#356F23",
                    fontSize: 22,
                  }}
                />
                <p className="text-gray-700 text-base">{item}</p>
              </div>
            ))}
          </div>

          <div className="border-t border-gray-200 mt-6 pt-6 text-center">

            <p className="text-gray-600 mt-3 leading-6">
              নিয়মিত আপডেট, অফার ও নতুন পণ্যের তথ্য পেতে আমাদের WhatsApp গ্রুপে জয়েন করুন।
            </p>

            <a
              href="https://chat.whatsapp.com/F2RBAfuXirT3BYmN03oHRy"
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center justify-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-medium hover:bg-primary/90 transition"
            >
              <WhatsAppIcon />
              গ্রুপ জয়েন করুন
            </a>
          </div>
        </div> */}
        {/* Tablet card */}
        <div className="hidden md:block lg:hidden bg-[#FCFCF8] border border-[#E7E7DF] rounded-3xl p-8">
  {/* Top row */}
  <div className="flex items-start justify-between gap-10">

    {/* Left side */}
    <div className="flex-1">
      <h2 className="text-3xl font-bold text-primary mb-6">
        কেন পল্লিসেবা?
      </h2>

      <div className="space-y-4">
        {features.map((item, index) => (
          <div key={index} className="flex items-center gap-3">
            <CheckCircleIcon sx={{ color: "#356F23", fontSize: 22 }} />
            <p className="text-gray-700 text-lg">{item}</p>
          </div>
        ))}
      </div>
    </div>

    {/* Right side */}
    <div className="w-56 flex flex-col items-center text-center shrink-0">
      <div className="bg-white rounded-2xl shadow-md border border-[#E7E7DF] p-4">
        <img
          src="/qr-code.png"
          alt="WhatsApp QR Code"
          className="w-40 h-40 object-contain"
        />
      </div>

      <p className="text-primary font-semibold mt-4">
        QR কোড স্ক্যান করুন
      </p>

      <p className="text-gray-600 text-sm leading-6 mt-2">
        নিয়মিত আপডেট, অফার ও নতুন পণ্যের তথ্য পেতে আমাদের WhatsApp গ্রুপে জয়েন করুন।
      </p>
    </div>
  </div>

  {/* Centered button across the whole card */}
  <div className="border-t border-gray-200 mt-8 pt-6 flex justify-center">
    <a
      href="https://chat.whatsapp.com/F2RBAfuXirT3BYmN03oHRy"
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center justify-center gap-3 bg-primary text-white px-8 py-3 rounded-full hover:bg-primary/90 transition"
    >
      <WhatsAppIcon />
      <span>গ্রুপ জয়েন করুন</span>
    </a>
  </div>
</div>

        {/* Desktop Cards */}
        <div className="hidden lg:flex flex-col lg:flex-row gap-8">
          {/* Left Card */}
          <div className="bg-[#FCFCF8] border border-[#E7E7DF] rounded-3xl p-6 md:p-8 md:py-4 flex flex-col md:flex-row items-center justify-between flex-1">
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-primary mb-6">
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

                    <p className="text-sm text-gray-700">{item}</p>
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
          <div className="bg-[#FCFCF8] border border-[#D9E5D1] rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between flex-1">
            <div className="flex-1">
              <p className="text-primary text-xl font-semibold">
                আমাদের WhatsApp গ্রুপে
              </p>

              <h2 className="text-2xl font-bold text-primary mt-2">
                জয়েন করুন
              </h2>

              <p className="text-gray-700 mt-4 leading-8 max-w-md">
                নিয়মিত আপডেট, অফার ও নতুন পণ্যের তথ্য পেতে এখনই জয়েন করুন।
              </p>

              <a
                href="https://chat.whatsapp.com/F2RBAfuXirT3BYmN03oHRy"
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex items-center gap-3 bg-primary text-white px-5 py-3 rounded-full hover:bg-primary/90 transition"
              >
                <WhatsAppIcon />
                গ্রুপ জয়েন করুন
              </a>
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
      </div>
    </section>
  );
};

export default BottomBanner;
