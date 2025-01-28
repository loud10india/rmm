import React from "react";
import Image from "next/image";
import FooterSocials from "./FooterSocials";
import Link from "next/link";
import { footerLinks, navigationLinks } from "@/data/footer";

export default function Footer1({ dark = false }) {
    return (
        <footer className={`page-section footer pb-30`} style={{ backgroundColor: "#2B4587", color: "white" }}>
            <div className='container'>
                <div className='row pb-120 pb-sm-80 pb-xs-50'>
                    <div className='col-md-6 col-lg-4  mb-sm-50'>
                        <h3 className='fw-title'>Rajasthan Machine Manufacturing</h3>
                        <p>
                            Let's discuss how we can provide you with cutting-edge stone processing machines. Reach out for detailed product
                            information, pricing, and customized solutions.
                        </p>
                        <div className='clearlinks'>
                            <strong>T. </strong>
                            <a href='tel:+91 98872 19894'>+91 98872 19894</a>
                        </div>
                        <div className='clearlinks'>
                            <strong>E. </strong>
                            <a href='mailto:info@rajasthanmm.com'>info@rajasthanmm.com</a>
                        </div>
                    </div>
                    <div className='col-md-5 offset-md-1 offset-lg-2'>
                        <div className='row mt-n30'>
                            {/* Footer Widget */}
                            <div className='col-sm-8 mt-30'>
                                <h3 className='fw-title'>Products</h3>
                                <ul className='fw-menu clearlist local-scroll'>
                                    {navigationLinks.map((elm, i) => (
                                        <li key={i}>
                                            <a style={{ color: "white" }} href={elm.href}>
                                                {elm.text}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            {/* End Footer Widget */}
                            {/* Footer Widget */}
                            <div className='col-sm-4 mt-30'>
                                <h3 className='fw-title'>Company</h3>
                                <ul className='fw-menu clearlist'>
                                    {footerLinks.map((elm, i) => (
                                        <li key={i}>
                                            <a style={{ color: "white" }} href={elm.path}>
                                                {elm.name}
                                            </a>
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
                    <div className='col-md-6 col-lg-4'>
                        <b style={{ fontWeight: "bold", color: "white" }}>© {new Date().getFullYear()} Rajasthan Machine Manufacture.</b>
                    </div>
                    <div className='col-md-6  offset-md-1 offset-lg-1 clearfix'>
                        <b style={{ fontWeight: "bold", color: "white" }}>
                            Website Design by{" "}
                            <Link className='link' target='_blank' href='https://web2attract.com/' style={{ textDecoration: "none", color: "white" }}>
                                WEB2ATTRACT
                            </Link>
                        </b>
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
