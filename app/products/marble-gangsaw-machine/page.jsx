import Footer1 from "@/components/footers/Footer1";

import dynamic from "next/dynamic";

const ParallaxContainer = dynamic(() => import("@/components/common/ParallaxContainer"), {
    ssr: false, // Disable server-side rendering
});
import Slider1 from "@/components/blog/sliders/Slider1";

import Header1Multipage from "@/components/headers/Header1Multipage";
import AnimatedText from "@/components/common/AnimatedText";
import { menuItems } from "@/data/menu";
import { allBlogs } from "@/data/blogs5";
export const metadata = {
    title: "Marble Gangsaw Machine | Precision Stone Cutting Solutions",
    description:
        "Discover our advanced marble gangsaw machines for cutting slabs with precision and efficiency. Customizable to your requirements for maximum productivity.",
};
export default function MarbleGangsawMachine({ params }) {
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
                                                    {/* Media Gallery */}
                                                    <div className='blog-media mb-40 mb-xs-30'>
                                                        <Slider1 />
                                                    </div>
                                                    <p className='lead'>
                                                        At Rajasthan Machine Manufacturer (RMM), we specialize in crafting high-performance Diamond
                                                        Gangsaw Machines designed for precision and efficiency in marble cutting. Our machines are
                                                        capable of cutting stone blocks measuring up to 10 feet x 6 feet x 6 feet, producing 100
                                                        marble slabs in a single cycle with impeccable accuracy.
                                                    </p>
                                                    <p>
                                                        Engineered with advanced technology, our Gangsaw Machines deliver smooth operations and
                                                        exceptional durability. Each machine is equipped with high-endurance components, including
                                                        sharp, durable blades for precise cuts, ensuring superior results every time.
                                                    </p>
                                                    <p>
                                                        {" "}
                                                        <b>Why Choose RMM’s Marble Gangsaw Machines?</b>
                                                    </p>
                                                    <ul>
                                                        <li>
                                                            <b>Precision Engineering: </b>
                                                            <span className='s' style={{ fontSize: "18px" }}>
                                                                Accurately cuts large stone blocks into uniform slabs.
                                                            </span>
                                                        </li>
                                                        <li>
                                                            <b>Durable Construction: </b>
                                                            <span className='s' style={{ fontSize: "18px" }}>
                                                                Built to handle tough cutting tasks with ease and longevity.
                                                            </span>
                                                        </li>
                                                        <li>
                                                            <b>Customization: </b>
                                                            <span className='s' style={{ fontSize: "18px" }}>
                                                                Machines can be tailored to your specific business needs.
                                                            </span>
                                                        </li>
                                                        <li>
                                                            <b>Continuous Improvement: </b>
                                                            <span className='s' style={{ fontSize: "18px" }}>
                                                                We constantly innovate to provide you with the latest in cutting-edge technology.
                                                            </span>
                                                        </li>
                                                    </ul>
                                                    <p>
                                                        Our Gangsaw Machines are designed for reliability and optimized performance, making them
                                                        indispensable for the cutting and processing of marble stones.
                                                    </p>
                                                    <p>Our Gangsaw machinery can be customized as your request.</p>
                                                    <div>
                                                        <h4 className='mb-20'>Specifications</h4>
                                                        <table className='table-auto border-collapse border border-gray-300 w-full text-left text-sm container mb-40'>
                                                            <tbody>
                                                                <tr>
                                                                    <td className='px-4 py-3 border border-gray-300' style={{ fontSize: "16px" }}>
                                                                        Length of Blades: 4100/4200 * 180MM
                                                                    </td>
                                                                    <td className='px-4 py-3 border border-gray-300' style={{ fontSize: "16px" }}>
                                                                        Thickness of Slab: 20MM
                                                                    </td>
                                                                </tr>
                                                                <tr className='bg-gray-50'>
                                                                    <td className='px-4 py-3 border border-gray-300' style={{ fontSize: "16px" }}>
                                                                        Rotation speed of Driving Shaft: 90RPM
                                                                    </td>
                                                                    <td className='px-4 py-3 border border-gray-300' style={{ fontSize: "16px" }}>
                                                                        Stroke Length: 700
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td className='px-4 py-3 border border-gray-300' style={{ fontSize: "16px" }}>
                                                                        Tensioning of Blade: 10-15 Tons Blades
                                                                    </td>
                                                                    <td className='px-4 py-3 border border-gray-300' style={{ fontSize: "16px" }}>
                                                                        Tensioning Device of Blades: Mechanical
                                                                    </td>
                                                                </tr>
                                                                <tr className='bg-gray-50'>
                                                                    <td className='px-4 py-3 border border-gray-300' style={{ fontSize: "16px" }}>
                                                                        Water Consumption: 10Ltrs / Blade
                                                                    </td>
                                                                    <td className='px-4 py-3 border border-gray-300' style={{ fontSize: "16px" }}>
                                                                        Lubricating System: Grease
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td className='px-4 py-3 border border-gray-300' style={{ fontSize: "16px" }}>
                                                                        Blade Holder Frame Motion: TO & PRO on Articuated Guide
                                                                    </td>
                                                                    <td className='px-4 py-3 border border-gray-300' style={{ fontSize: "16px" }}>
                                                                        Cut Down Feed Speed: 50 to 700 MM/HR
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td className='px-4 py-3 border border-gray-300' style={{ fontSize: "16px" }}>
                                                                        Fast Lowering Moter Power: 7.5/10 KW/HP
                                                                    </td>
                                                                    <td className='px-4 py-3 border border-gray-300' style={{ fontSize: "16px" }}>
                                                                        Cut Down Feed Moter Power: 2.2/3 KW/HP
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td className='px-4 py-3 border border-gray-300' style={{ fontSize: "16px" }}>
                                                                        Trolley Translation Speed: 4 Mtrs/MIN
                                                                    </td>
                                                                    <td className='px-4 py-3 border border-gray-300' style={{ fontSize: "16px" }}>
                                                                        Total Iastalled Power: 132/180 KW/HP
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                        <div>
                                                            <b>See Our Machines in Action</b>
                                                            <div>
                                                                Watch our Gangsaw Machines in operation :
                                                                {/* <ul>
                                                                    <li>
                                                                        <a
                                                                            href='https://www.youtube.com/watch?v=fbQrgRO4YBc&t=3s'
                                                                            target='_blank'
                                                                            style={{ color: "blue", fontSize: "17px" }}
                                                                        >
                                                                            https://www.youtube.com/watch?v=fbQrgRO4YBc&t=3s
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            href='https://www.youtube.com/watch?v=l6X2hsr_2q0&t=7s'
                                                                            target='_blank'
                                                                            style={{ color: "blue", fontSize: "17px" }}
                                                                        >
                                                                            https://www.youtube.com/watch?v=l6X2hsr_2q0&t=7s
                                                                        </a>
                                                                    </li>
                                                                </ul> */}
                                                                <div className='mt-20 mb-20 mt-md-10 mm-md-10'>
                                                                    <iframe
                                                                        width='560'
                                                                        height='315'
                                                                        src='https://www.youtube.com/embed/fbQrgRO4YBc?si=thVC6tKsjgCbmV1Y'
                                                                        title='YouTube video player'
                                                                        frameborder='0'
                                                                        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                                                                        referrerpolicy='strict-origin-when-cross-origin'
                                                                        allowfullscreen
                                                                    ></iframe>
                                                                </div>
                                                                <div className='mt-20 mb-20 mt-md-10 mm-md-10'>
                                                                    <iframe
                                                                        width='560'
                                                                        height='315'
                                                                        src='https://www.youtube.com/embed/l6X2hsr_2q0?si=UbEmtni9QCeKh5l7'
                                                                        title='YouTube video player'
                                                                        frameborder='0'
                                                                        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                                                                        referrerpolicy='strict-origin-when-cross-origin'
                                                                        allowfullscreen
                                                                    ></iframe>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <p>
                                                            Note: <b>All specifications are customizable based on your requirements.</b>
                                                        </p>

                                                        <p>
                                                            Not sure what equipment fits your business best? Call us for personalized advice and
                                                            tailored solutions. At RMM, we’re here to ensure you invest in the right machinery for
                                                            your success.
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
