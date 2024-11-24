import React from "react";
import classNames from "classnames";
import Link from "next/link";
import Image from "next/image";
import fonts from "../../../fonts";

const CompanyListing = ({ className = "CompanyListing" }) => {
  const classList = classNames(className, "bg-pwV2DarkGreen");

  return (
    <div data-cy="CompanyListing" className={classList}>
      <section className="pt-12 pb-10">
        <div className="container ">
          <h3
            className={`${fonts.montserrat.className} uppercase text-pwV2Font20 text-white text-center mb-6`}
          >
            {" "}
            as seen at{" "}
          </h3>
          <ul className="flex justify-center items-center md:gap-16 gap-12 flex-wrap">
            {/** Responsive Image List */}
            {["cl_1.png", "cl_2.png", "cl_3.png", "cl_4.png", "cl_5.png"].map(
              (src, index) => (
                <li key={index} className="flex-shrink-0">
                  <Link href="#">
                    <Image
                      src={`/CompanyListing/${src}`}
                      width={100}
                      height={100}
                      alt="Company Logo"
                      className="object-contain w-[80px] h-auto md:w-[100px] md:h-auto"
                    />
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default CompanyListing;
