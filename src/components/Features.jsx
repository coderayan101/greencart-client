import { heroSectionData } from "../assets/assets";

const Features = () => {
  return (
    <section className="hidden lg:block py-6 md:py-8 lg:py-10">
      <div className="w-[100%] max-w-[1600px] mx-auto">
        {/* Background Wrapper */}
        <div className="bg-[#F9F7F1] rounded-lg p-3 sm:p-4 md:p-6 lg:p-6">
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5">
            {heroSectionData.hero_features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <div
                  key={index}
                  className="flex flex-col sm:flex-row items-center sm:items-center text-center sm:text-left gap-3 md:gap-4 bg-white border border-[#E8E4D8] rounded-2xl p-3 md:p-5 transition-all duration-300 hover:shadow-md"
                >
                  {/* Icon */}
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-[#F5F9F1] flex items-center justify-center shrink-0">
                    <Icon className="w-6 h-6 md:w-8 md:h-8 text-[#356F23]" />
                  </div>

                  {/* Text */}
                  <div>
                    <h3 className="text-sm md:text-[17px] font-semibold text-gray-900 leading-snug">
                      {feature.title}
                    </h3>

                    <p className="mt-1 text-xs md:text-sm text-gray-500 leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;