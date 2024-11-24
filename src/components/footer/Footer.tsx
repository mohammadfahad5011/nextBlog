import React from "react";
import classNames from "classnames";
import Link from "next/link";
import fonts from "../../../fonts";
// import "./Footer.scss";

const Footer = ({ className = "Footer" }) => {
  const classList = classNames(
    className,
    "bg-pwV2DarkGreen pt-12 md:pt-24 pb-[55px] mb:pb-14"
  );

  return (
    <div data-cy="Footer" className={classList}>
      <footer>
        <div className="container max-w-[1264px] w-full">
          <div className="grid grid-cols-12 gap-4">
            <div className="md:col-span-6 col-span-12 order-2 md:order-none py-5 md:py-0">
              <h3
                className={`${fonts.productSansBold.className} text-pwV2Font32 text-white mb-1 font-bold`}
              >
                Subscribe to my Newsletter
              </h3>
              <p
                className={`${fonts.montserrat.className} text-white font-light text-pwV2Font16`}
              >
                I’ll mail you once a week. No spam. Promise.
              </p>
            </div>

            <div className="md:col-span-6 col-span-12 order-1 md:order-none">
              <div className="overflow-hidden">
                <div className="w-full">
                  <div className="relative">
                    <input
                      type="email"
                      className="bg-white h-14 w-full px-4 pr-40 rounded-md focus:outline-none"
                      name=""
                      placeholder="Enter your email"
                    />
                    <button
                      className={`${fonts.montserrat.className} bg-pwV2Purple absolute h-full text-pwV2Font24 right-0 px-5 text-white hover:bg-[#9180eb]`}
                    >
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden md:block col-span-6"></div>
            <div className="md:col-span-6 col-span-12 order-3 md:order-none">
              <div className="grid grid-cols-12">
                <div className="lg:col-span-5 col-span-6">
                  <ul className="text-white text-xs md:text-sm font-normal flex flex-col gap-2">
                    <li>
                      <Link
                        href="#"
                        className={`${fonts.montserrat.className}`}
                      >
                        About
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className={`${fonts.montserrat.className}`}
                      >
                        The P.Watson Podcast
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className={`${fonts.montserrat.className}`}
                      >
                        Success Stories
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className={`${fonts.montserrat.className}`}
                      >
                        Services
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="lg:col-span-7 col-span-6">
                  <div className="grid grid-cols-12 gap-y-2">
                    <div className="lg:col-span-6 col-span-12">
                      <ul className="text-white text-xs md:text-sm font-normal flex flex-col gap-2">
                        <li>
                          <Link
                            href="#"
                            className={`${fonts.montserrat.className}`}
                          >
                            About Paulette
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="#"
                            className={`${fonts.montserrat.className}`}
                          >
                            Press & Media
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="#"
                            className={`${fonts.montserrat.className}`}
                          >
                            Giving Back
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="lg:col-span-6 col-span-12">
                      <ul className="text-white text-xs md:text-sm font-normal flex flex-col gap-2">
                        <li>
                          <Link
                            href="#"
                            className={`${fonts.montserrat.className}`}
                          >
                            Academy Achievers
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="#"
                            className={`${fonts.montserrat.className}`}
                          >
                            SheDisrupts
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-start justify-between mt-24 border-t bottom-1 border-white pt-3 flex-wrap gap-8">
            <ul
              className={`${fonts.montserrat.className} flex flex-wrap gap-3 md:gap-4 text-white text-xs font-normal uppercase`}
            >
              <li>
                <Link href="#">terms</Link>
              </li>
              <li>
                <Link href="#">privacy</Link>
              </li>
              <li>
                <Link href="#">cookie policy</Link>
              </li>
              <li>
                <Link href="#">support</Link>
              </li>
              <li>
                <Link href="#">cookies settings</Link>
              </li>
            </ul>

            <p
              className={`${fonts.montserrat.className} text-white text-xs font-normal`}
            >
              {" "}
              © {new Date().getFullYear()} PAULETTE WATSON INTERNATIONAL
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
