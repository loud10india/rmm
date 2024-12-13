import Footer1 from "@/components/footers/Footer1";

import dynamic from "next/dynamic";

const ParallaxContainer = dynamic(() => import("@/components/common/ParallaxContainer"), {
    ssr: false, // Disable server-side rendering
});

import Header1Multipage from "@/components/headers/Header1Multipage";
import AnimatedText from "@/components/common/AnimatedText";
import { menuItems } from "@/data/menu";
import { allBlogs } from "@/data/blogs8";
export const metadata = {
    title: "Stone Cutting Machines | Durable and Efficient Solutions",
    description:
        "Choose from our range of multi-blade and single-blade stone cutters for precise marble and granite cutting. Built for performance and longevity.",
};
export default function StoneCutter({ params }) {
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
                            {/* Section */}
                            <section className='page-section'>
                                <div className='container relative'>
                                    <div className='row'>
                                        {/* Content */}
                                        <div className='col-lg-8 offset-lg-2'>
                                            {/* Post */}
                                            <div className='blog-item mb-80 mb-xs-40'>
                                                <div className='blog-item-body'>
                                                    {/* Media Gallery */}
                                                    {/* <div className='blog-media mb-40 mb-xs-30'>
                                                        <Slider1 />
                                                    </div> */}
                                                    <p className='lead'>
                                                        At Rajasthan Machine Manufacturer, we offer an extensive range of high-quality Stone Cutters
                                                        designed to meet the demanding needs of the stone processing industry. Our cutters are
                                                        manufactured using advanced technology and premium-grade materials, ensuring exceptional
                                                        precision, durability, and performance.
                                                    </p>
                                                    <p>
                                                        Whether you need to cut marble or granite, our stone cutters are tailored to deliver superior
                                                        results. Available in multiple configurations, we have the perfect cutter for every
                                                        requirement.
                                                    </p>
                                                    <h3>Our Product Range</h3>
                                                    <ul>
                                                        <li>
                                                            <b>Multi 10 Blade Block Cutter</b>
                                                        </li>
                                                        <li>
                                                            <b>Multi 7 Blade Cutter</b>
                                                        </li>
                                                        <li>
                                                            <b>Multi 5 Blade Cutter</b>
                                                        </li>
                                                        <li>
                                                            <b>Single Blade Block Dresser 1.3</b>
                                                        </li>
                                                        <li>
                                                            <b>Single Blade Block Dresser 1.6 </b>
                                                        </li>
                                                        <li>
                                                            <b>Single Blade Block Dresser 2.5</b>
                                                        </li>
                                                        <li>
                                                            <b>Single Blade Block Dresser 3.5</b>
                                                        </li>
                                                    </ul>

                                                    <div className='mt-60'>
                                                        <h4>Specifications</h4>
                                                        <table className='container table-auto border-collapse border border-gray-300 w-full text-left'>
                                                            <thead>
                                                                <tr>
                                                                    <th className='px-4 py-2 border border-gray-300' style={{ fontSize: "16px" }}>
                                                                        Model
                                                                    </th>
                                                                    <th className='px-4 py-2 border border-gray-300' style={{ fontSize: "16px" }}>
                                                                        2400/C-09
                                                                    </th>
                                                                    <th className='px-4 py-2 border border-gray-300' style={{ fontSize: "16px" }}>
                                                                        2200/C-05
                                                                    </th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td className='px-4 py-2 border border-gray-300' style={{ fontSize: "16px" }}>
                                                                        <b>Blade Max Diameter (mm)</b>
                                                                    </td>
                                                                    <td className='px-4 py-2 border border-gray-300' style={{ fontSize: "16px" }}>
                                                                        2400
                                                                    </td>
                                                                    <td className='px-4 py-2 border border-gray-300' style={{ fontSize: "16px" }}>
                                                                        2200, 1800, 1382, 1040, 680
                                                                    </td>
                                                                </tr>
                                                                <tr className='bg-gray-50'>
                                                                    <td className='px-4 py-2 border border-gray-300' style={{ fontSize: "16px" }}>
                                                                        <b>Number of Blades</b>
                                                                    </td>
                                                                    <td className='px-4 py-2 border border-gray-300' style={{ fontSize: "16px" }}>
                                                                        9
                                                                    </td>
                                                                    <td className='px-4 py-2 border border-gray-300' style={{ fontSize: "16px" }}>
                                                                        5
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td className='px-4 py-2 border border-gray-300' style={{ fontSize: "16px" }}>
                                                                        <b>Lifting Stroke (mm)</b>
                                                                    </td>
                                                                    <td className='px-4 py-2 border border-gray-300' style={{ fontSize: "16px" }}>
                                                                        1700
                                                                    </td>
                                                                    <td className='px-4 py-2 border border-gray-300' style={{ fontSize: "16px" }}>
                                                                        1700
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td className='px-4 py-2 border border-gray-300' style={{ fontSize: "16px" }}>
                                                                        <b>Transverse Cutting Travel (mm)</b>
                                                                    </td>
                                                                    <td className='px-4 py-2 border border-gray-300' style={{ fontSize: "16px" }}>
                                                                        4200
                                                                    </td>
                                                                    <td className='px-4 py-2 border border-gray-300' style={{ fontSize: "16px" }}>
                                                                        4200
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td className='px-4 py-2 border border-gray-300' style={{ fontSize: "16px" }}>
                                                                        <b>Max Cutting Size (mm)</b>
                                                                    </td>
                                                                    <td className='px-4 py-2 border border-gray-300' style={{ fontSize: "16px" }}>
                                                                        4000 x 2500 x 2000
                                                                    </td>
                                                                    <td className='px-4 py-2 border border-gray-300' style={{ fontSize: "16px" }}>
                                                                        4000 x 2500 x 2000
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td className='px-4 py-2 border border-gray-300' style={{ fontSize: "16px" }}>
                                                                        <b>Spindle Drive Motor (HP)</b>
                                                                    </td>
                                                                    <td className='px-4 py-2 border border-gray-300' style={{ fontSize: "16px" }}>
                                                                        75
                                                                    </td>
                                                                    <td className='px-4 py-2 border border-gray-300' style={{ fontSize: "16px" }}>
                                                                        50
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td className='px-4 py-2 border border-gray-300' style={{ fontSize: "16px" }}>
                                                                        <b>Gross Weight (kg)</b>
                                                                    </td>
                                                                    <td className='px-4 py-2 border border-gray-300' style={{ fontSize: "16px" }}>
                                                                        22,000
                                                                    </td>
                                                                    <td className='px-4 py-2 border border-gray-300' style={{ fontSize: "16px" }}>
                                                                        20,000
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                    <div>
                                                        <h3>Why Choose Our Stone Cutters?</h3>
                                                        <ul>
                                                            <li>
                                                                <b>Precision Engineering: </b>Designed to meet international standards, ensuring
                                                                accuracy in every cut.
                                                            </li>
                                                            <li>
                                                                <b>Durable & Reliable: </b>Built with premium materials to withstand rigorous
                                                                operations.
                                                            </li>
                                                            <li>
                                                                <b>Customizable: </b>Tailored to meet your specific needs and requirements.
                                                            </li>
                                                            <li>
                                                                <b>Advanced Technology: </b>Equipped with state-of-the-art mechanisms for efficient
                                                                stone cutting.
                                                            </li>
                                                        </ul>
                                                        <h4>Talk to Our Experts</h4>
                                                        <p>
                                                            Need help choosing the right stone cutter for your business?{" "}
                                                            <b>
                                                                <a href='/contact-us'>Contact us</a>
                                                            </b>{" "}
                                                            today to discuss your needs and explore customized solutions.
                                                        </p>
                                                        <ul>
                                                            <li>
                                                                <b>Call Us: </b>+91 98872 19894
                                                            </li>
                                                            <li>
                                                                <b>Email Us: </b>
                                                                <a href='mailto: info@rajasthanmm.com'> info@rajasthanmm.com</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* End Post */}
                                        </div>
                                        {/* End Content */}
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
