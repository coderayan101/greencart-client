import { assets, footerLinks } from "../assets/assets";

const Footer = () => {

    return (
        <div className="px-6 md:px-16 lg:px-24 xl:px-32 mt-24 bg-primary/10">
            <div className="flex flex-col md:flex-row items-start justify-between gap-10 py-10 border-b border-gray-500/30 text-gray-500">
                <div>
                    {/* <img className="w-34 md:w-32" src={assets.logo} alt="logo" /> */}
                    <svg
  width="132"
  height="30"
  viewBox="0 0 132 30"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <text
    x="0"
    y="26"
    font-family="Georgia, 'Times New Roman', serif"
    font-size="25"
    font-weight="700"
    letter-spacing="0.5"
  >
    <tspan fill="#4FBF8B">Palli</tspan>
    <tspan fill="#2B3441">Seva</tspan>
  </text>
                    </svg>
                    <p className="max-w-[410px] mt-6">
                        We deliver fresh groceries and snacks straight to your door. Trusted by thousands, we aim to make your shopping experience simple and affordable.
                    </p>
                </div>
                <div className="flex flex-wrap justify-between w-full md:w-[45%] gap-5">
                    {footerLinks.map((section, index) => (
                        <div key={index}>
                            <h3 className="font-semibold text-base text-gray-900 md:mb-5 mb-2">{section.title}</h3>
                            <ul className="text-sm space-y-1">
                                {section.links.map((link, i) => (
                                    <li key={i}>
                                        <a href={link.url} className="hover:underline transition">{link.text}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
            <p className="py-4 text-center text-sm md:text-base text-gray-500/80">
                Copyright {new Date().getFullYear()} © <a href="https://palliseva.com">PalliSeva.com</a> All Right Reserved. Developed by - <a href="https://apexcoder.in" target="_blank">Ayan Maity</a>
            </p>
        </div>
    );
}

export default Footer;