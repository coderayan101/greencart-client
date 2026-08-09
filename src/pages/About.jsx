import { Leaf, Wheat, CircleCheck, Circle, HeartHandshake } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";

const About = () => {
  return (
    <section className="px-6 md:px-16 lg:px-24 xl:px-36 pt-6">
      <div className="bg-white">
        {/* Banner */}
        <section className="relative">
          <img
            src="/about-banner.png"
            alt="About Palli Seva"
            className="w-full h-[260px] md:h-[280px] object-cover rounded-2xl"
          />

          <div className="absolute inset-0 bg-black/35 flex items-center justify-center rounded-2xl">
            <h1 className="text-3xl md:text-4xl font-bold text-white">
              আমাদের সম্পর্কে
            </h1>
          </div>
        </section>

        {/* Content */}
        <section className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-14">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Left - Company Info */}
            <div className="lg:col-span-2">
              <div className="flex flex-col items-end w-max">
                <h2 className="text-2xl font-bold text-gray-900">
                  পল্লীসেবা সম্পর্কে
                </h2>
                <div className="w-16 h-0.5 bg-primary rounded-full"></div>
              </div>

              <div className="space-y-5 text-gray-700 leading-8 mt-5">
                <div className="flex items-center gap-2 mb-3">
                  <Circle className="w-6 h-6 text-green-600 fill-green-600" />
                  <span className="font-semibold text-shadow-lg text-gray-900">
                    পল্লিসেবায় আপনাকে স্বাগতম
                  </span>
                </div>
                <p>
                  পল্লিসেবা শুধুমাত্র একটি অনলাইন সবজি ও নিত্যপ্রয়োজনীয় পণ্যের
                  ডেলিভারি পরিষেবা নয়—এটি কৃষক এবং গ্রাহকের মধ্যে একটি
                  বিশ্বাসের সেতুবন্ধন। আমাদের লক্ষ্য হলো কৃষকের কাছ থেকে যতটা
                  সম্ভব সরাসরি তাজা সবজি ও অন্যান্য প্রয়োজনীয় পণ্য সংগ্রহ করে,
                  ন্যায্য দামে আপনার বাড়ির দরজায় পৌঁছে দেওয়া। মধ্যস্বত্বভোগী
                  কমিয়ে আমরা চেষ্টা করি কৃষক যেন তাঁর উৎপাদনের সঠিক মূল্য পান
                  এবং গ্রাহক যেন পান আরও তাজা পণ্য, সঠিক দাম এবং নির্ভরযোগ্য
                  পরিষেবা। আমরা বিশ্বাস করি, ভালো খাবারের শুরু হয় ভালো উৎস
                  থেকে। তাই প্রতিদিনের বাজারকে আমরা আরও সহজ, স্বচ্ছ এবং
                  ঝামেলামুক্ত করার জন্য কাজ করছি।
                </p>

                <div className="flex items-center gap-2 my-3">
                  <Circle className="w-6 h-6 text-green-600 fill-green-600" />
                  <span className="font-semibold text-shadow-lg text-gray-900">
                    কেন পল্লিসেবা?
                  </span>
                </div>
                <ul className="space-y-4 text-gray-700 leading-7 px-8">
                  <li className="flex items-start gap-3">
                    <CircleCheck className="w-5 h-5 text-green-600 mt-1 shrink-0" />
                    <span>প্রতিদিনের তাজা সবজি ও নিত্যপ্রয়োজনীয় পণ্য</span>
                  </li>

                  <li className="flex items-start gap-3">
                    <CircleCheck className="w-5 h-5 text-green-600 mt-1 shrink-0" />
                    <span>কৃষকের কাছ থেকে সরাসরি সংগ্রহের প্রচেষ্টা</span>
                  </li>

                  <li className="flex items-start gap-3">
                    <CircleCheck className="w-5 h-5 text-green-600 mt-1 shrink-0" />
                    <span>ন্যায্য ও স্বচ্ছ মূল্য</span>
                  </li>

                  <li className="flex items-start gap-3">
                    <CircleCheck className="w-5 h-5 text-green-600 mt-1 shrink-0" />
                    <span>দ্রুত হোম ডেলিভারি</span>
                  </li>

                  <li className="flex items-start gap-3">
                    <CircleCheck className="w-5 h-5 text-green-600 mt-1 shrink-0" />
                    <span>সহজ WhatsApp অর্ডার ব্যবস্থা</span>
                  </li>

                  <li className="flex items-start gap-3">
                    <CircleCheck className="w-5 h-5 text-green-600 mt-1 shrink-0" />
                    <span>গ্রাহকের সন্তুষ্টিই আমাদের সর্বোচ্চ অগ্রাধিকার</span>
                  </li>
                </ul>

                <div className="flex items-center gap-2 mb-3">
                  <Circle className="w-6 h-6 text-green-600 fill-green-600" />
                  <span className="font-semibold text-shadow-lg text-gray-900">
                    আমাদের লক্ষ্য
                  </span>
                </div>
                <p>
                  প্রতিটি পরিবারের জন্য সহজ, সাশ্রয়ী এবং নির্ভরযোগ্য বাজার
                  ব্যবস্থা গড়ে তোলা, যেখানে কৃষক ও গ্রাহক—উভয়েই লাভবান হন।
                  "পল্লিসেবা — চাষির কাছ থেকে সরাসরি আপনার দরজায়।"
                </p>

                <div className="flex items-center gap-2 mb-3">
                  <Circle className="w-6 h-6 text-green-600 fill-green-600" />
                  <span className="font-semibold text-shadow-lg text-gray-900">
                    আমাদের গল্প
                  </span>
                </div>
                <p>
                  পল্লিসেবার যাত্রা শুরু হয়েছে একটি সহজ চিন্তা থেকে—গ্রাহকের
                  হাতে আরও তাজা ও ভালো মানের পণ্য পৌঁছে দেওয়া।
                </p>
                <p>
                  আমরা লক্ষ্য করেছি, অনেক সময় বাজারে আগের দিনের অবিক্রিত সবজি
                  নতুন সবজির সঙ্গে মিশিয়ে বিক্রি করা হয়। এর ফলে গ্রাহকের পক্ষে
                  কোনটি সত্যিই টাটকা তা বোঝা কঠিন হয়ে যায়।
                </p>
                <p>এই অভিজ্ঞতা থেকেই পল্লিসেবার ধারণার জন্ম।</p>
                <p>
                  আমাদের লক্ষ্য হলো প্রতিদিন যতটা সম্ভব নতুন ও মানসম্মত পণ্য
                  সংগ্রহ করা এবং গ্রাহকের কাছে সঠিক মানের পণ্য পৌঁছে দেওয়া।
                  পাশাপাশি, আমরা কৃষক ও স্থানীয় উৎপাদকদের কাছ থেকে সরাসরি
                  সংগ্রহকে অগ্রাধিকার দিই, যাতে পণ্যের গুণমান ও ন্যায্য মূল্য
                  নিশ্চিত করা যায়। পল্লিসেবার কাছে প্রতিটি অর্ডার শুধু একটি
                  বিক্রি নয়—এটি আমাদের প্রতি আপনার বিশ্বাসের প্রতিফলন।
                </p>

                <div className="flex items-start sm:items-center gap-2 mb-4">
                  <HeartHandshake className="w-6 h-6 text-green-600 shrink-0 mt-1 sm:mt-0" />
                  <span className="text-gray-600 text-sm sm:text-base leading-6">
                    পল্লিসেবা — বিশ্বাস, সতেজতা এবং সেবার একটি নতুন অভিজ্ঞতা।
                  </span>
                </div>
              </div>
            </div>

            {/* Right - Contact & Map */}
            <div className="lg:border-l lg:border-gray-200 lg:pl-8">
              <div className="flex flex-col items-end w-max">
                <h2 className="text-2xl font-bold text-gray-900">
                  অবস্থান ও যোগাযোগ
                </h2>
                <div className="w-16 h-0.5 bg-primary rounded-full"></div>
              </div>

              <div className="space-y-4 text-gray-700 mt-5">
                <div>
                  <p className="font-semibold text-gray-900">ঠিকানা:</p>
                  <p>
                    পল্লীসেবা কার্যালয়
                    <br />
                    কসবা, এগরা
                    <br />
                    721426, পূর্ব মেদিনীপুর
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-gray-900">ফোন নম্বর:</p>
                  <p>+91 9670271784</p>
                </div>

                <div>
                  <p className="font-semibold text-gray-900">ইমেল:</p>
                  <a
                    href="mailto:customersupport.palliseva@gmail.com"
                    className="text-green-700 hover:text-green-800 hover:underline transition-colors"
                  >
                    customersupport.palliseva@gmail.com
                  </a>
                </div>

                {/* ===== Contact From ===== */}
                <div className="pt-4">
                  <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      আমাদের সাথে যোগাযোগ করুন
                    </h3>

                    <form className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          আপনার নাম
                        </label>
                        <input
                          type="text"
                          placeholder="আপনার নাম লিখুন"
                          className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-green-600 focus:border-green-600 transition"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          ফোন নম্বর
                        </label>
                        <input
                          type="tel"
                          placeholder="আপনার ফোন নম্বর"
                          className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-green-600 focus:border-green-600 transition"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          আপনার বার্তা
                        </label>
                        <textarea
                          rows="4"
                          placeholder="আপনার বার্তা লিখুন"
                          className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none resize-none focus:ring-2 focus:ring-green-600 focus:border-green-600 transition"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full bg-primary hover:bg-primary-dull text-white font-medium py-3 rounded-xl transition"
                      >
                        বার্তা পাঠান
                      </button>
                    </form>
                  </div>
                </div>

                {/* Google Map */}
                <div className="pt-5">
                  <iframe
                    title="Palli Seva Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3702.1777275449763!2d87.54625667473778!3d21.889230857670636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1d2b5031c17d91%3A0x9d4dd38f095f94be!2sEgra%20Church%2FHouse%20Of%20Prayer%20at%20Egra!5e0!3m2!1sen!2sin!4v1786128397083!5m2!1sen!2sin"
                    className="w-full h-64 rounded-2xl border border-gray-200"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>

                {/* Social Links */}
                <div className="pt-6 border-t border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    আমাদের সাথে যুক্ত থাকুন
                  </h3>

                  <p className="text-gray-600 text-sm mb-5">
                    সর্বশেষ অফার, নতুন পণ্য এবং আপডেট পেতে আমাদের সামাজিক
                    মাধ্যমে অনুসরণ করুন।
                  </p>

                  <div className="flex items-center gap-4">
                    <a
                      href="https://facebook.com/yourpage"
                      target="_blank"
                      rel="noreferrer"
                      className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center hover:bg-primary-dull transition duration-300"
                    >
                      <FaFacebookF className="text-lg" />
                    </a>

                    <a
                      href="https://instagram.com/yourpage"
                      target="_blank"
                      rel="noreferrer"
                      className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center hover:bg-primary-dull transition duration-300"
                    >
                      <FaInstagram className="text-lg" />
                    </a>

                    <a
                      href="https://wa.me/919670271784"
                      target="_blank"
                      rel="noreferrer"
                      className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center hover:bg-primary-dull transition duration-300"
                    >
                      <FaWhatsapp className="text-lg" />
                    </a>

                    <a
                      href="https://youtube.com/@yourchannel"
                      target="_blank"
                      rel="noreferrer"
                      className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center hover:bg-primary-dull transition duration-300"
                    >
                      <FaYoutube className="text-lg" />
                    </a>
                  </div>
                </div>
                {/* ===== Contact From ===== */}
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default About;
