import Footer1 from "@/components/footers/Footer1";

import dynamic from "next/dynamic";

const ParallaxContainer = dynamic(() => import("@/components/common/ParallaxContainer"), {
    ssr: false, // Disable server-side rendering
});

import Header1Multipage from "@/components/headers/Header1Multipage";
import AnimatedText from "@/components/common/AnimatedText";
import { menuItems } from "@/data/menu";
import { allBlogs } from "@/data/blogs7";
export const metadata = {
    title: "Slab Polisher Machine | High-Performance Stone Polishing Solutions",
    description:
        "Explore our slab polisher machines for high-quality marble and granite polishing. Available in single, multi-head, and automatic configurations.",
};
export default function SlabPolisher({ params }) {
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
                                                        Our <b>Slab Polishing Machines</b> are designed for multi-purpose polishing, offering superior
                                                        quality, high performance, and cost efficiency. Perfectly balanced, these machines are
                                                        suitable for polishing slabs on-site or at remote marble shops. We provide slab polishers in
                                                        various specifications to meet the diverse needs of our clients.
                                                    </p>
                                                    <div>
                                                        <div>We offer:</div>
                                                        <ul>
                                                            <li>
                                                                <b>Single Head Polisher</b>
                                                            </li>
                                                            <li>
                                                                <b>Double Head Polisher</b>
                                                            </li>
                                                            <li>
                                                                <b>4-Head Polisher</b>
                                                            </li>
                                                            <li>
                                                                <b>6-Head Line Polishing Machine</b>
                                                            </li>
                                                            <li>
                                                                <b>9-Head Automatic Line Polishing Machine</b>
                                                            </li>
                                                            <li>
                                                                <b>12-Head Line Polishing Machine </b>(Disc & Flicker Head patterns available)
                                                            </li>
                                                            <li>
                                                                <b>14-Head Line Polishing Machine</b>
                                                            </li>
                                                            <li>
                                                                <b>16-Head Automatic Line Polishing Machine </b>(Disc & Flicker Head patterns
                                                                available)
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className='mt-60'>
                                                        <h4>Single Head Polisher</h4>
                                                        <p>
                                                            A bridge-type machine for polishing and burnishing marble and granite slabs. It features
                                                            automated longitudinal, transverse, and circular polishing via PC programming.
                                                        </p>
                                                        <table className='container table-auto border-collapse border border-gray-300 w-full text-left'>
                                                            <thead>
                                                                <tr>
                                                                    <th className='px-4 py-2 border border-gray-300' style={{ fontSize: "16px" }}>
                                                                        Specifications
                                                                    </th>
                                                                    <th className='px-4 py-2 border border-gray-300' style={{ fontSize: "16px" }}>
                                                                        Details
                                                                    </th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td className='px-4 py-2 border border-gray-300' style={{ fontSize: "16px" }}>
                                                                        <b>No. of Heads</b>
                                                                    </td>
                                                                    <td className='px-4 py-2 border border-gray-300' style={{ fontSize: "16px" }}>
                                                                        1
                                                                    </td>
                                                                </tr>
                                                                <tr className='bg-gray-50'>
                                                                    <td className='px-4 py-2 border border-gray-300' style={{ fontSize: "16px" }}>
                                                                        <b>Polishing Width </b>(Inches)
                                                                    </td>
                                                                    <td className='px-4 py-2 border border-gray-300' style={{ fontSize: "16px" }}>
                                                                        48
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td className='px-4 py-2 border border-gray-300' style={{ fontSize: "16px" }}>
                                                                        <b>Main Motor Power</b>
                                                                    </td>
                                                                    <td className='px-4 py-2 border border-gray-300' style={{ fontSize: "16px" }}>
                                                                        7.5 HP
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td className='px-4 py-2 border border-gray-300' style={{ fontSize: "16px" }}>
                                                                        <b>Left-Right Motor Power</b>
                                                                    </td>
                                                                    <td className='px-4 py-2 border border-gray-300' style={{ fontSize: "16px" }}>
                                                                        1 HP (960 RPM)
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td className='px-4 py-2 border border-gray-300' style={{ fontSize: "16px" }}>
                                                                        <b>Cross Travel Motor Power</b>
                                                                    </td>
                                                                    <td className='px-4 py-2 border border-gray-300' style={{ fontSize: "16px" }}>
                                                                        1 HP (960 RPM)
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td className='px-4 py-2 border border-gray-300' style={{ fontSize: "16px" }}>
                                                                        <b>Panel PLC</b>
                                                                    </td>
                                                                    <td className='px-4 py-2 border border-gray-300' style={{ fontSize: "16px" }}>
                                                                        PLC with AC Drive
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                    <div className='mt-60'>
                                                        <h4>9-16 Head Automatic Line Polishing Machine</h4>
                                                        <p>
                                                            Suitable for polishing granite and marble slabs/tiles of different sizes and materials.
                                                            Equipped with a PLC system and LCD screen for intelligent control. High-grade cast iron
                                                            and premium electrical components ensure durability and performance.
                                                        </p>
                                                        <table className='container table-auto border-collapse border border-gray-300 w-full text-left'>
                                                            <thead>
                                                                <tr>
                                                                    <th className='px-4 py-2 border border-gray-300' style={{ fontSize: "16px" }}>
                                                                        Specifications
                                                                    </th>
                                                                    <th className='px-4 py-2 border border-gray-300' style={{ fontSize: "16px" }}>
                                                                        12 Heads
                                                                    </th>
                                                                    <th className='px-4 py-2 border border-gray-300' style={{ fontSize: "16px" }}>
                                                                        16 Heads
                                                                    </th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td className='px-4 py-2 border border-gray-300' style={{ fontSize: "16px" }}>
                                                                        <b>Useful Working Width</b>
                                                                    </td>
                                                                    <td className='px-4 py-2 border border-gray-300' style={{ fontSize: "16px" }}>
                                                                        600-2200 mm
                                                                    </td>
                                                                    <td className='px-4 py-2 border border-gray-300' style={{ fontSize: "16px" }}>
                                                                        600-2200 mm
                                                                    </td>
                                                                </tr>
                                                                <tr className='bg-gray-50'>
                                                                    <td className='px-4 py-2 border border-gray-300' style={{ fontSize: "16px" }}>
                                                                        <b>Useful Working Thickness</b>
                                                                    </td>
                                                                    <td className='px-4 py-2 border border-gray-300' style={{ fontSize: "16px" }}>
                                                                        15-40 mm
                                                                    </td>
                                                                    <td className='px-4 py-2 border border-gray-300' style={{ fontSize: "16px" }}>
                                                                        15-40 mm
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td className='px-4 py-2 border border-gray-300' style={{ fontSize: "16px" }}>
                                                                        <b>Belt Advancement Speed</b>
                                                                    </td>
                                                                    <td className='px-4 py-2 border border-gray-300' style={{ fontSize: "16px" }}>
                                                                        0-2500 mm/min
                                                                    </td>
                                                                    <td className='px-4 py-2 border border-gray-300' style={{ fontSize: "16px" }}>
                                                                        0-2500 mm/min
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td className='px-4 py-2 border border-gray-300' style={{ fontSize: "16px" }}>
                                                                        <b>Spindle Motor Power</b>
                                                                    </td>
                                                                    <td className='px-4 py-2 border border-gray-300' style={{ fontSize: "16px" }}>
                                                                        12.5 HP
                                                                    </td>
                                                                    <td className='px-4 py-2 border border-gray-300' style={{ fontSize: "16px" }}>
                                                                        12.5 HP
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td className='px-4 py-2 border border-gray-300' style={{ fontSize: "16px" }}>
                                                                        <b>Total Power</b>
                                                                    </td>
                                                                    <td className='px-4 py-2 border border-gray-300' style={{ fontSize: "16px" }}>
                                                                        175 HP
                                                                    </td>
                                                                    <td className='px-4 py-2 border border-gray-300' style={{ fontSize: "16px" }}>
                                                                        175 HP
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td className='px-4 py-2 border border-gray-300' style={{ fontSize: "16px" }}>
                                                                        <b>Water Consumption</b>
                                                                    </td>
                                                                    <td className='px-4 py-2 border border-gray-300' style={{ fontSize: "16px" }}>
                                                                        450 l/min
                                                                    </td>
                                                                    <td className='px-4 py-2 border border-gray-300' style={{ fontSize: "16px" }}>
                                                                        600 l/min
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td className='px-4 py-2 border border-gray-300' style={{ fontSize: "16px" }}>
                                                                        <b>Overall Dimensions (L x W x H)</b>
                                                                    </td>
                                                                    <td className='px-4 py-2 border border-gray-300' style={{ fontSize: "16px" }}>
                                                                        9000 x 2900 x 3000 mm
                                                                    </td>
                                                                    <td className='px-4 py-2 border border-gray-300' style={{ fontSize: "16px" }}>
                                                                        11000 x 3500 x 3000 mm
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                    <div className='mt-60'>
                                                        <h4>Disc Pattern Line Polishing Machine</h4>
                                                        <p>
                                                            Designed for polishing granite and marble slabs/tiles with versatile size adaptation.
                                                            Intelligent control with PLC and LCD system ensures precise operation.
                                                        </p>
                                                        <table className='container table-auto border-collapse border border-gray-300 w-full text-left'>
                                                            <thead>
                                                                <tr>
                                                                    <th className='px-4 py-2 border border-gray-300' style={{ fontSize: "16px" }}>
                                                                        Specifications
                                                                    </th>
                                                                    <th className='px-4 py-2 border border-gray-300' style={{ fontSize: "16px" }}>
                                                                        12 Heads
                                                                    </th>
                                                                    <th className='px-4 py-2 border border-gray-300' style={{ fontSize: "16px" }}>
                                                                        16 Heads
                                                                    </th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td className='px-4 py-2 border border-gray-300' style={{ fontSize: "16px" }}>
                                                                        <b>Useful Working Width</b>
                                                                    </td>
                                                                    <td className='px-4 py-2 border border-gray-300' style={{ fontSize: "16px" }}>
                                                                        600-1350 mm
                                                                    </td>
                                                                    <td className='px-4 py-2 border border-gray-300' style={{ fontSize: "16px" }}>
                                                                        600-1350 mm
                                                                    </td>
                                                                </tr>
                                                                <tr className='bg-gray-50'>
                                                                    <td className='px-4 py-2 border border-gray-300' style={{ fontSize: "16px" }}>
                                                                        <b>Useful Working Thickness</b>
                                                                    </td>
                                                                    <td className='px-4 py-2 border border-gray-300' style={{ fontSize: "16px" }}>
                                                                        15-40 mm
                                                                    </td>
                                                                    <td className='px-4 py-2 border border-gray-300' style={{ fontSize: "16px" }}>
                                                                        15-40 mm
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td className='px-4 py-2 border border-gray-300' style={{ fontSize: "16px" }}>
                                                                        <b>Belt Advancement Speed</b>
                                                                    </td>
                                                                    <td className='px-4 py-2 border border-gray-300' style={{ fontSize: "16px" }}>
                                                                        0-2500 mm/min
                                                                    </td>
                                                                    <td className='px-4 py-2 border border-gray-300' style={{ fontSize: "16px" }}>
                                                                        0-2500 mm/min
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td className='px-4 py-2 border border-gray-300' style={{ fontSize: "16px" }}>
                                                                        <b>Spindle Motor Power</b>
                                                                    </td>
                                                                    <td className='px-4 py-2 border border-gray-300' style={{ fontSize: "16px" }}>
                                                                        7.5 & 10 HP
                                                                    </td>
                                                                    <td className='px-4 py-2 border border-gray-300' style={{ fontSize: "16px" }}>
                                                                        7.5 & 10 HP
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td className='px-4 py-2 border border-gray-300' style={{ fontSize: "16px" }}>
                                                                        <b>Total Power</b>
                                                                    </td>
                                                                    <td className='px-4 py-2 border border-gray-300' style={{ fontSize: "16px" }}>
                                                                        100 HP
                                                                    </td>
                                                                    <td className='px-4 py-2 border border-gray-300' style={{ fontSize: "16px" }}>
                                                                        140 HP
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td className='px-4 py-2 border border-gray-300' style={{ fontSize: "16px" }}>
                                                                        <b>Water Consumption</b>
                                                                    </td>
                                                                    <td className='px-4 py-2 border border-gray-300' style={{ fontSize: "16px" }}>
                                                                        450 l/min
                                                                    </td>
                                                                    <td className='px-4 py-2 border border-gray-300' style={{ fontSize: "16px" }}>
                                                                        600 l/min
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                    <div>
                                                        <h3>Why Choose Our Slab Polishers?</h3>
                                                        <ul>
                                                            <li>High performance and low maintenance</li>
                                                            <li>Designed for precision polishing</li>
                                                            <li>Durable materials and advanced technology</li>
                                                            <li>Customizable as per client requirements</li>
                                                        </ul>
                                                        <b>Interested?</b>
                                                        <p>
                                                            <b>
                                                                <a href='/contact-us'>Get a Quote</a>
                                                            </b>{" "}
                                                            or{" "}
                                                            <b>
                                                                <a href='/contact-us'>Contact Us</a>
                                                            </b>{" "}
                                                            to discuss your needs!
                                                        </p>
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
