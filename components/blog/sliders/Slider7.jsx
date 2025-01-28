"use client";

import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
const images = [
    {
        src: "/assets/images/portfolio/hm.jpg",
        alt: "Image Description",
    },
];
import Image from "next/image";
export default function Slider1() {
    return (
        <>
            <Swiper
                spaceBetween={0}
                slidesPerView={1}
                modules={[Navigation, Pagination]}
                navigation={{
                    prevEl: ".snbp1",
                    nextEl: ".snbn1",
                }}
                watchSlidesProgress
                resizeObserver
                className='clearlist content-slider owl-carousel owl-theme overflow-hidden'
                style={{
                    opacity: 1,
                    display: "block",
                }}
                pagination={{
                    el: ".sp1",
                    clickable: true,
                    bulletActiveClass: "active",
                    renderBullet: (index, className) => {
                        return `<div class=" owl-page ${className}">
                   <span></span>
                  </div>`;
                    },
                }}
            >
                {/* Team item */}
                {images.map((image, index) => (
                    <SwiperSlide className='owl-item' key={index}>
                        <Image src={image.src} width={1350} height={865} alt='Image Description' />
                    </SwiperSlide>
                ))}

                {/* End Team item */}
            </Swiper>
        </>
    );
}
