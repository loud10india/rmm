import Footer1 from "@/components/footers/Footer1";
import Benefits from "@/components/homes/home-1/Benefits";
import dynamic from "next/dynamic";
import Faq from "@/components/common/Faq";

const ParallaxContainer = dynamic(() => import("@/components/common/ParallaxContainer"), {
    ssr: false, // Disable server-side rendering
});

import Header1Multipage from "@/components/headers/Header1Multipage";
import AnimatedText from "@/components/common/AnimatedText";
const dark = false;
import About from "@/components/homes/home-5/About";
import MarqueeDark from "@/components/homes/home-5/MarqueeDark";
import Marquee from "@/components/homes/home-5/Marquee";

import { menuItems } from "@/data/menu";
import { allBlogs } from "@/data/blogs";
export const metadata = {
    title: "About Rajasthan Machine Manufacturer | 50+ Years of Expertise",
    description:
        "Discover the legacy of Rajasthan Machine Manufacturer, pioneers in the marble and stone processing industry. Trusted since 1970 for innovative machinery.",
};
export default function MainBlogSinglePageFullWidth({ params }) {
    const blog = allBlogs.filter((elm) => elm.id == params.id)[0] || allBlogs[0];
    return (
        <>
            <div className='theme-main'>
                <div className='page' id='top'>
                    <nav className='main-nav transparent stick-fixed wow-menubar'>
                        <Header1Multipage links={menuItems} />
                    </nav>
                    <main id='main'>
                        <section className='page-section pt-0 pb-0' id='home'>
                            <ParallaxContainer
                                className='page-section bg-gray-light-1 bg-light-alpha-90 parallax-5'
                                style={{
                                    backgroundImage: "url(/assets/images/demo-fancy/bg-shape-1.svg)",
                                }}
                            >
                                <div className='container position-relative pt-30 pt-sm-50'>
                                    {/* Section Content */}
                                    <div className='text-center'>
                                        <div className='row'>
                                            {/* Page Title */}
                                            <div className='col-md-8 offset-md-2'>
                                                <h1 className='hs-title-1 mb-20'>
                                                    <span className='wow charsAnimIn' data-splitting='chars'>
                                                        <AnimatedText text={blog.title || blog.postTitle} />
                                                    </span>
                                                </h1>
                                            </div>
                                            {/* End Page Title */}
                                        </div>
                                    </div>
                                    {/* End Section Content */}
                                </div>
                            </ParallaxContainer>
                        </section>
                        <>
                            <section className={`page-section  scrollSpysection pb-0 ${dark ? "bg-dark-1 light-content" : ""} `} id='about'>
                                <div className='container position-relative'>
                                    <div className='row'>
                                        <div className='col-lg-5 d-flex align-items-center mb-md-50'>
                                            <div>
                                                <div className='wow linesAnimIn' data-splitting='lines'>
                                                    <h2 className='section-title mb-30 mb-sm-20'>
                                                        <span className='text-gray'>About</span> us
                                                    </h2>
                                                    <div className='text-gray mb-30 mb-sm-20'>
                                                        <p className='mb-0'>
                                                            RAJASTHAN MACHINE MANUFECTURER (RMM) started its operation in 1970 in KISHANGARH
                                                            (Rajasthan) by our visionary founder Mr. Ahmed Ali on the desire to make innovative
                                                            machines for the marble industry. We feel dignified as the company has more than 48 years
                                                            of experience in the industry with wide technical knowledge. RMM began manufacturing
                                                            Diamond Gangsaw, stone cutter, slab polisher, and handling machines which are used in
                                                            handling of marbles and stones. Over the years, we have worked on cutting-edge technology
                                                            in the market, offering high reliability and good quality products. These products have
                                                            enabled the company to create new productivity standards in the industry.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <About />
                                    </div>
                                </div>
                            </section>
                            <section>
                                <div className='page-section overflow-hidden'>{<Marquee />}</div>
                            </section>
                            <section className='mb-80'>
                                <Benefits />{" "}
                            </section>
                            <section className='page-section z-index-1'>
                                <div className='container position-relative'>
                                    <div className='row position-relative'>
                                        <div className='col-md-6 col-lg-5 mb-md-50 mb-sm-30'>
                                            <h3 className='section-title mb-30'>Frequently Asked Questions</h3>

                                            <p className='text-gray mb-0'>
                                                Curious about how a business consulting firm can help your growth? Our FAQs provide insights into our
                                                services, process, and expertise. Discover how Mibugo Consulting empowers businesses to overcome
                                                challenges and achieve success.
                                            </p>
                                        </div>

                                        <div className='col-md-6 offset-lg-1 pt-10 pt-sm-0'>
                                            {/* <!-- Accordion --> */}
                                            <Faq />
                                            {/* <!-- End Accordion --> */}
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </>
                    </main>
                    <Footer1 />
                </div>{" "}
            </div>
        </>
    );
}
