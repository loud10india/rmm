"use client";
import Image from "next/image";

export default function About() {
    return (
        <div className='row wow fadeInUp' data-wow-delay='0.5s'>
            <div className='col-lg-6 mb-md-60'>
                <div className='position-relative'>
                    {/* Image */}
                    <div className='position-relative overflow-hidden'>
                        <Image
                            width={960}
                            height={539}
                            src='/assets/images/rmm-factory.jpg'
                            className='image-fullwidth relative'
                            alt='Image Description'
                        />
                    </div>
                </div>
            </div>
            <div className='col-lg-6 col-xl-5 offset-xl-1'>
                <p className='text-gray'>
                    Since our establishment in 1970, RMM has been a pioneer in manufacturing machinery for the marble industry. Our founder, Mr. Ahmed
                    Ali, envisioned a company that would bring innovation and cutting-edge technology to the stone processing sector.
                </p>
                <p className='text-gray'>
                    With over 48 years of experience, we have developed a deep understanding of the industry, which allows us to create machines that
                    not only meet but exceed the needs of today’s market.
                </p>
            </div>
        </div>
    );
}
