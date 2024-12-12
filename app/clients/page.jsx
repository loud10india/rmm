import Footer1 from "@/components/footers/Footer1";

import dynamic from "next/dynamic";

const ParallaxContainer = dynamic(() => import("@/components/common/ParallaxContainer"), {
    ssr: false, // Disable server-side rendering
});

import Header1Multipage from "@/components/headers/Header1Multipage";
import AnimatedText from "@/components/common/AnimatedText";

import { categories } from "@/data/categories";
import { tags } from "@/data/tags";
import { archiveLinks } from "@/data/archeve";
import Slider1 from "@/components/blog/sliders/Slider1";
import Comments from "@/components/blog/Comments";
import Form9 from "@/components/blog/commentForm/Form9";
import { menuItems } from "@/data/menu";
import { allBlogs } from "@/data/blogs2";
export const metadata = {
    title: "Main Blog Single Page Full Width || Resonance &mdash; One & Multi Page React Nextjs Creative Template",
    description: "Resonance &mdash; One & Multi Page React Nextjs Creative Template",
};
export default function Clients({ params }) {
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
                                        <div className='col-lg-8 offset-lg-2'>
                                            <div className='blog-item mb-80 mb-xs-40'>
                                                <div className='blog-item-body'>
                                                    <p>
                                                        We take pride in serving some of the most renowned names in the marble and granite industry.
                                                        Their trust and satisfaction reflect the quality, reliability, and innovation we bring to
                                                        every project. Here’s a glimpse of our valued clients who inspire us to excel every day:
                                                    </p>
                                                    <table className='table-auto border-collapse border border-gray-300 w-full text-left mt-80 mb-80 container'>
                                                        <tbody className='w-full px-4'>
                                                            <tr>
                                                                <td className='px-4 py-3 border border-gray-300' style={{ fontSize: "15px" }}>
                                                                    B G GRANITE, KISHANGARH
                                                                </td>
                                                                <td className='px-4 py-3 border border-gray-300' style={{ fontSize: "15px" }}>
                                                                    PARAS GRANITE, KISHANGARH
                                                                </td>
                                                            </tr>
                                                            <tr className='bg-gray-50'>
                                                                <td className='px-4 py-3 border border-gray-300' style={{ fontSize: "15px" }}>
                                                                    SHREE AGARWAL GRENITE, KISHANGARH
                                                                </td>
                                                                <td className='px-4 py-3 border border-gray-300' style={{ fontSize: "15px" }}>
                                                                    SHYAAM GRNI MARMO, KISHANGARH
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className='px-4 py-3 border border-gray-300' style={{ fontSize: "15px" }}>
                                                                    SHASHI RAJ GRANITE, KISHANGARH
                                                                </td>
                                                                <td className='px-4 py-3 border border-gray-300' style={{ fontSize: "15px" }}>
                                                                    PARASHNATH GRANITE, KISHANGARH
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className='px-4 py-3 border border-gray-300' style={{ fontSize: "15px" }}>
                                                                    TILAK MARBLES & GRANITE, KISHANGARH
                                                                </td>
                                                                <td className='px-4 py-3 border border-gray-300' style={{ fontSize: "15px" }}>
                                                                    SHREE DAGRA GRANITE, KISHANGARH
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className='px-4 py-3 border border-gray-300' style={{ fontSize: "15px" }}>
                                                                    P V GRANITE, KISHANGARH
                                                                </td>
                                                                <td className='px-4 py-3 border border-gray-300' style={{ fontSize: "15px" }}>
                                                                    RADHA RAMAN MARBLE, KISHANGARH
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className='px-4 py-3 border border-gray-300' style={{ fontSize: "15px" }}>
                                                                    GIRDHARI GRANITE, ROOPANGARH
                                                                </td>
                                                                <td className='px-4 py-3 border border-gray-300' style={{ fontSize: "15px" }}>
                                                                    SHREE RAM GRANITE, KISHANGARH
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className='px-4 py-3 border border-gray-300' style={{ fontSize: "15px" }}>
                                                                    RAJDHANI MARBLE, RAJSAMAND
                                                                </td>
                                                                <td className='px-4 py-3 border border-gray-300' style={{ fontSize: "15px" }}>
                                                                    GANPATI MARBLLE, KISHANGARH
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className='px-4 py-3 border border-gray-300' style={{ fontSize: "15px" }}>
                                                                    CHAPARWAL MARBLE, KISHANGARH
                                                                </td>
                                                                <td className='px-4 py-3 border border-gray-300' style={{ fontSize: "15px" }}>
                                                                    RANABAI MARBLE,ROOPANGARH
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className='px-4 py-3 border border-gray-300' style={{ fontSize: "15px" }}>
                                                                    SHASHANK GRANITE, KISHANGARH
                                                                </td>
                                                                <td className='px-4 py-3 border border-gray-300' style={{ fontSize: "15px" }}>
                                                                    BAJAJ MARBLE, KISHANGARH
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className='px-4 py-3 border border-gray-300' style={{ fontSize: "15px" }}>
                                                                    LUCKY STONEX, BANGLORE
                                                                </td>
                                                                <td className='px-4 py-3 border border-gray-300' style={{ fontSize: "15px" }}>
                                                                    V.K. GUPTA MARBLE, KISHANGARH
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className='px-4 py-3 border border-gray-300' style={{ fontSize: "15px" }}>
                                                                    ANUPAM MARBLE, KISHANGARH
                                                                </td>
                                                                <td className='px-4 py-3 border border-gray-300' style={{ fontSize: "15px" }}>
                                                                    TRIMURTI MARBLE, ALWAR
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className='px-4 py-3 border border-gray-300' style={{ fontSize: "15px" }}>
                                                                    MANOJ MARBLE, KISHANGARH
                                                                </td>
                                                                <td className='px-4 py-3 border border-gray-300' style={{ fontSize: "15px" }}>
                                                                    CENTURI STONEX, KISHANGARH
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className='px-4 py-3 border border-gray-300' style={{ fontSize: "15px" }}>
                                                                    PAWANSUT MARBLE, KISHANGARH
                                                                </td>
                                                                <td className='px-4 py-3 border border-gray-300' style={{ fontSize: "15px" }}></td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                    <b className=''>Why Our Clients Choose Us</b>
                                                    <p className='mt-10'>
                                                        We are committed to delivering high-quality, durable, and innovative stone processing
                                                        solutions that meet the specific needs of our clients. By maintaining strong relationships, we
                                                        aim to ensure their continued growth and success in the industry. Want to join our growing
                                                        list of happy clients?{" "}
                                                        <b>
                                                            <a href='/contact'>Contact Us</a>
                                                        </b>{" "}
                                                        today to discuss how we can serve you!
                                                    </p>
                                                </div>
                                            </div>
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
