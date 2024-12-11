import React from "react";
import Image from "next/image";
export default function Brands() {
    return (
        <div className='container position-relative'>
            <div className='row'>
                <div className='col-md-8 offset-md-2 text-center'>
                    <h2 className='section-title-tiny mb-30'>Our Partners</h2>
                    {/* <p>We have formed alliances with leading partners to provide you innovative solutions.</p> */}
                    <div className='logo-grid'>
                        <Image
                            className='logo-grid-img image-filter'
                            src='/assets/images/clients-logos/logo-grid/1.png'
                            width='110'
                            height='33'
                            alt='Image description is here'
                        />
                        <Image
                            className='logo-grid-img image-filter'
                            src='/assets/images/clients-logos/logo-grid/8.png'
                            width='119'
                            height='33'
                            alt='Image description is here'
                        />
                        <Image
                            className='logo-grid-img image-filter'
                            src='/assets/images/clients-logos/logo-grid/3.png'
                            width='79'
                            height='33'
                            alt='Image description is here'
                        />
                        <Image
                            className='logo-grid-img image-filter'
                            src='/assets/images/clients-logos/logo-grid/7.png'
                            width='122'
                            height='33'
                            alt='Image description is here'
                        />
                        <Image
                            className='logo-grid-img image-filter'
                            src='/assets/images/clients-logos/logo-grid/5.png'
                            width='100'
                            height='33'
                            alt='Image description is here'
                        />
                        <Image
                            className='logo-grid-img image-filter'
                            src='/assets/images/clients-logos/logo-grid/6.png'
                            width='100'
                            height='33'
                            alt='Image description is here'
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
