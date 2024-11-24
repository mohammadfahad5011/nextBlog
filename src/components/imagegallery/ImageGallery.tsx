import React from "react";
import classNames from "classnames";
import Image from "next/image";

const ImageGallery = ({ className = "ImageGallery" }) => {
    const classList = classNames(className, 'bg-pwV2DarkGreen');

    return <div data-cy="ImageGallery" className={classList}>
        <section className="py-20">
            <div className="container lg:px-4 px-8">
                <div className="grid grid-cols-4 gap-4  max-w-[1200px] w-full mx-auto">
                    <div className="md:col-span-1 col-span-2 order-3 md:order-none">
                        <Image 
                            src="/imageGallery/ig_1.png" 
                            alt="Speaker at podium" 
                            width={398}
                            height={100}
                            className=" w-full h-full" />
                    </div>
                    <div className="md:col-span-1 col-span-2 order-4 md:order-none">
                        <Image 
                            src="/imageGallery/ig_2.png" 
                            width={398} 
                            height={100} 
                            alt="Speaker at podium" 
                            className="w-full h-full" />
                    </div>

                    <div className="md:col-span-1 col-span-2 ">
                        <Image 
                            src="/imageGallery/ig_3.png"  
                            width={398} 
                            height={100} 
                            alt="person with prize" 
                            className="w-full h-full" 
                        />
                    </div>
                    <div className="md:col-span-1 col-span-2 ">
                        <Image 
                            src="/imageGallery/ig_4.png"  
                            width={398} 
                            height={100} 
                            alt="Person on stage" 
                            className="w-full h-full" 
                        />
                    </div>
                    <div className="md:col-span-2 col-span-4">
                        <Image 
                            src="/imageGallery/ig_5.png"  
                            width={398} 
                            height={100} 
                            alt="Group on stage" 
                            className="w-full h-full" 
                        />
                    </div>
                    <div className="md:col-span-2 col-span-4">
                        <Image 
                            src="/imageGallery/ig_6.png"  
                            width={398} 
                            height={100} 
                            alt="Person with book" 
                            className="w-full h-full" 
                        />
                    </div>
                </div>
            </div>
        </section>
    </div>;
};

export default ImageGallery;