import AnimatedText from "@/components/common/AnimatedText";
import About from "@/components/homes/home-1/About";
import Benefits from "@/components/homes/home-1/Benefits";
import Blog from "@/components/homes/home-1/Blog";
import Brands from "@/components/homes/home-1/Brands";
import Contact from "@/components/homes/home-1/Contact";

import Facts from "@/components/homes/home-1/Facts";
import Faq from "@/components/homes/home-1/Faq";
import Features from "@/components/homes/home-1/Features";
import NewsLetter from "@/components/homes/home-1/NewsLetter";
import Portfolio from "@/components/homes/home-1/Portfolio";
import Promo from "@/components/homes/home-1/Promo";
import Service from "@/components/homes/home-1/Service";
import Team from "@/components/homes/home-1/Team";
import Testimonials from "@/components/homes/home-1/Testimonials";
import Link from "next/link";
import Testimonials2 from "./Teatimonials2";
import Brands2 from "./Brands2";
import dynamic from "next/dynamic";
import Image from "next/image";
const ParallaxContainer = dynamic(() => import("@/components/common/ParallaxContainer"), {
    ssr: false, // Disable server-side rendering
});
export default function Home1({ onePage = false, dark = false }) {
    return (
        <>
            <section className={`page-section scrollSpysection ${dark ? "bg-dark-1 light-content" : ""}`} id='about'>
                <div className='container position-relative'>
                    <div className='row mb-60 mb-xs-30'>
                        <div className='col-md-6'>
                            <h2 className='section-caption mb-xs-10'>About Us</h2>
                            <h3 className='section-title mb-0'>
                                <AnimatedText text='Decades of Expertise, Groundbreaking Technology' />
                            </h3>
                        </div>
                        <div className='col-md-5 offset-md-1 relative text-start text-md-end pt-40 pt-sm-20 local-scroll'>
                            {/* Decorative Dots */}
                            <div className='decoration-2 d-none d-md-block' data-rellax-y='' data-rellax-speed='0.7' data-rellax-percentage='-0.2'>
                                <Image width='103' height='223' src='/assets/images/decoration-2.svg' alt='' />
                            </div>
                            {/* End Decorative Dots */}

                            {onePage ? (
                                <a href='/about' className='link-hover-anim underline align-middle' data-link-animate='y'>
                                    <span className='link-strong link-strong-unhovered'>
                                        Learn more about us <i className='mi-arrow-right size-18' aria-hidden='true'></i>
                                    </span>
                                    <span className='link-strong link-strong-hovered' aria-hidden='true'>
                                        Learn more about us <i className='mi-arrow-right size-18' aria-hidden='true'></i>
                                    </span>
                                </a>
                            ) : (
                                <Link href={`/about${dark ? "-dark" : ""}`} className='link-hover-anim underline align-middle' data-link-animate='y'>
                                    <span className='link-strong link-strong-unhovered'>
                                        Learn more about us <i className='mi-arrow-right size-18' aria-hidden='true'></i>
                                    </span>
                                    <span className='link-strong link-strong-hovered' aria-hidden='true'>
                                        Learn more about us <i className='mi-arrow-right size-18' aria-hidden='true'></i>
                                    </span>
                                </Link>
                            )}
                        </div>
                    </div>
                    <About />
                </div>
            </section>
            <section className={`page-section  scrollSpysection  ${dark ? "bg-dark-2 light-content" : "bg-gray-light-1 "}`} id='team'>
                <Team />
            </section>
            <section className={`page-section  ${dark ? "bg-dark-1 light-content" : ""}`}>
                <Benefits />{" "}
            </section>
            <section className={`page-section pt-0 pb-0  ${dark ? "light-content" : ""}`}> {dark ? <Testimonials2 /> : <Testimonials />}</section>
            <section className={`page-section  ${dark ? " light-content" : ""}`}>{dark ? <Brands2 /> : <Brands />}</section>

            <hr className={`mt-0 mb-0 ${dark ? "white" : ""}`} />
            <section className={`page-section  scrollSpysection  ${dark ? "bg-dark-1 light-content" : ""}`} id='contact'>
                <Contact />{" "}
            </section>
        </>
    );
}
