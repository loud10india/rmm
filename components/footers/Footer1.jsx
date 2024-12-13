import React from "react";
import Image from "next/image";
import FooterSocials from "./FooterSocials";
import Link from "next/link";
import { footerLinks, navigationLinks } from "@/data/footer";

export default function Footer1({ dark = false }) {
    return (
        <footer className={`page-section footer ${dark ? "bg-dark-2 light-content dark" : "bg-gray-light-1"}  pb-30`}>
            <div className='container'>
                <div className='row pb-120 pb-sm-80 pb-xs-50'>
                    <div className='col-md-4 col-lg-3  mb-sm-50'>
                        {/* <Link href={"/"} className='mb-30'>
                            <Image src='/assets/images/logo-blue.svg' width={105} height={34} className='light-mode-logo' alt='Your Company Logo' />

                            <Image src='/assets/images/logo-white.svg' width={105} height={34} className='dark-mode-logo' alt='Your Company Logo' />
                        </Link> */}
                        <h3 className='fw-title'>Rajasthan Machine Manufacturing</h3>
                        <p>
                            Let's discuss how we can provide you with cutting-edge stone processing machines. Reach out for detailed product
                            information, pricing, and customized solutions.
                        </p>
                        <div className='clearlinks'>
                            <strong>T.</strong>
                            <a href='tel:+91 98872 19894'>+91 98872 19894</a>
                        </div>
                        <div className='clearlinks'>
                            <strong>E.</strong>
                            <a href='mailto:info@rajasthanmm.com'>info@rajasthanmm.com</a>
                        </div>
                    </div>
                    <div className='col-md-7 offset-md-1 offset-lg-2'>
                        <div className='row mt-n30'>
                            {/* Footer Widget */}
                            <div className='col-sm-6 mt-30'>
                                <h3 className='fw-title'>Products</h3>
                                <ul className='fw-menu clearlist local-scroll'>
                                    {navigationLinks.map((elm, i) => (
                                        <li key={i}>
                                            <a href={elm.href}>{elm.text}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            {/* End Footer Widget */}
                            {/* Footer Widget */}
                            <div className='col-sm-6 mt-30'>
                                <h3 className='fw-title'>Legal &amp; Press</h3>
                                <ul className='fw-menu clearlist'>
                                    {footerLinks.map((elm, i) => (
                                        <li key={i}>
                                            <a href={elm.path}>{elm.name}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            {/* End Footer Widget */}
                        </div>
                    </div>
                </div>
                {/* Footer Text */}
                <div className='row text-gray'>
                    <div className='col-md-4 col-lg-3'>
                        <b>© {new Date().getFullYear()} Rajasthan Machine Manufacture. All Rights Reserved.</b>
                    </div>
                    <div className='col-md-7 offset-md-1 offset-lg-2 clearfix'>
                        <b>Website Design by WEB2ATTRACT</b>
                        {/* Back to Top Link */}
                        <div className='local-scroll float-end mt-n20 mt-sm-10'>
                            <a href='#top' className='link-to-top'>
                                <i className='mi-arrow-up size-24' />
                                <span className='visually-hidden'>Scroll to top</span>
                            </a>
                        </div>
                        {/* End Back to Top Link */}
                    </div>
                </div>
                {/* End Footer Text */}
            </div>
        </footer>
    );
}
