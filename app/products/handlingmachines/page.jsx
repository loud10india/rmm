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
import { allBlogs } from "@/data/blog3";
export const metadata = {
    title: "Main Blog Single Page Full Width || Resonance &mdash; One & Multi Page React Nextjs Creative Template",
    description: "Resonance &mdash; One & Multi Page React Nextjs Creative Template",
};
export default function HandlingMachines({ params }) {
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
                                    backgroundImage: "url(/assets/images/full-width-images/section-bg-1.jpg)",
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
                                                        At RMM, we offer a diverse range of high-quality handling cranes designed for maximum
                                                        performance, reliability, and safety. With a focus on advanced engineering and the safety of
                                                        operators, our handling machines ensure seamless operations for marble and granite stone
                                                        processing.
                                                    </p>
                                                    <p>
                                                        We manufacture the following <b>high-performance marble slab handling cranes</b> with long
                                                        working life:
                                                    </p>
                                                    <ul>
                                                        <b>
                                                            <li>Gantry Cranes</li>
                                                        </b>
                                                        <b>
                                                            <li>EOT Cranes</li>
                                                        </b>
                                                        <b>
                                                            <li>ARM Cranes</li>
                                                        </b>
                                                    </ul>
                                                </div>
                                                <h3>Gantry Cranes</h3>
                                                <div className='row mt-20'>
                                                    <div className='col-lg-6'>
                                                        <img
                                                            src='/assets/images/gantry-crane.jpg'
                                                            alt='Gantry Crane'
                                                            className='rounded-lg shadow-lg max-w-sm'
                                                            style={{ width: "200px", height: "auto" }}
                                                        />
                                                    </div>
                                                    <div className='col-lg-6'>
                                                        <p className='text-gray-700'>
                                                            Gantry Cranes are built for heavy-duty lifting, providing reliable solutions for moving
                                                            large stone slabs efficiently. These cranes are engineered with precision to ensure
                                                            safety, performance, and durability.
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className='mt-80 mb-80'>
                                                    <h6>Specifications</h6>
                                                    <table className='table-auto border-collapse border border-gray-300 w-full text-left text-[8px] '>
                                                        <tbody>
                                                            <tr>
                                                                <td className='px-4 py-2 border border-gray-300'>Feature</td>
                                                                <td className='px-4 py-2 border border-gray-300'>30 MT</td>
                                                                <td className='px-4 py-2 border border-gray-300'>50 MT</td>
                                                            </tr>
                                                            <tr className='bg-gray-50'>
                                                                <td className='px-4 py-2 border border-gray-300'>Capacity</td>
                                                                <td className='px-4 py-2 border border-gray-300'>30 MT</td>
                                                                <td className='px-4 py-2 border border-gray-300'>50 MT</td>
                                                            </tr>
                                                            <tr>
                                                                <td className='px-4 py-2 border border-gray-300'>Span of Beam</td>
                                                                <td className='px-4 py-2 border border-gray-300'>10-30 Mtrs</td>
                                                                <td className='px-4 py-2 border border-gray-300'>10-30 Mtrs</td>
                                                            </tr>
                                                            <tr>
                                                                <td className='px-4 py-2 border border-gray-300'>Cantilever Overhang</td>
                                                                <td className='px-4 py-2 border border-gray-300'>3-6 Mtrs</td>
                                                                <td className='px-4 py-2 border border-gray-300'>3-6 Mtrs</td>
                                                            </tr>
                                                            <tr>
                                                                <td className='px-4 py-2 border border-gray-300'>Lifting Height</td>
                                                                <td className='px-4 py-2 border border-gray-300'>5.5 - 7 Mtrs</td>
                                                                <td className='px-4 py-2 border border-gray-300'>5.5 - 7 Mtrs</td>
                                                            </tr>
                                                            <tr>
                                                                <td className='px-4 py-2 border border-gray-300'>Long Travel Speed</td>
                                                                <td className='px-4 py-2 border border-gray-300'>10.0/18.8 Mtrs/Min</td>
                                                                <td className='px-4 py-2 border border-gray-300'>10.0/18.8 Mtrs/Min</td>
                                                            </tr>
                                                            <tr>
                                                                <td className='px-4 py-2 border border-gray-300'>Cross Travel Speed</td>
                                                                <td className='px-4 py-2 border border-gray-300'>8.7/16.0 Mtrs/Min</td>
                                                                <td className='px-4 py-2 border border-gray-300'>8.7/16.0 Mtrs/Min</td>
                                                            </tr>
                                                            <tr>
                                                                <td className='px-4 py-2 border border-gray-300'>Lift Travel Speed</td>
                                                                <td className='px-4 py-2 border border-gray-300'>2.2/2.78 Mtrs/Min</td>
                                                                <td className='px-4 py-2 border border-gray-300'>2.2/2.78 Mtrs/Min</td>
                                                            </tr>
                                                            <tr>
                                                                <td className='px-4 py-2 border border-gray-300'>Motor Power - Long Travel</td>
                                                                <td className='px-4 py-2 border border-gray-300'>2 HP * 2</td>
                                                                <td className='px-4 py-2 border border-gray-300'>3 HP * 2</td>
                                                            </tr>
                                                            <tr>
                                                                <td className='px-4 py-2 border border-gray-300'>Motor Power - Cross Travel</td>
                                                                <td className='px-4 py-2 border border-gray-300'>2 HP</td>
                                                                <td className='px-4 py-2 border border-gray-300'>2 HP</td>
                                                            </tr>
                                                            <tr>
                                                                <td className='px-4 py-2 border border-gray-300'>Motor Power - Lift Travel</td>
                                                                <td className='px-4 py-2 border border-gray-300'>20 HP</td>
                                                                <td className='px-4 py-2 border border-gray-300'>20 HP</td>
                                                            </tr>
                                                            <tr>
                                                                <td className='px-4 py-2 border border-gray-300'>Total Installed Power</td>
                                                                <td className='px-4 py-2 border border-gray-300'>26 HP</td>
                                                                <td className='px-4 py-2 border border-gray-300'>34 HP</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                                <h3>EOT Crane</h3>
                                                <div className='row mt-20'>
                                                    <div className='col-lg-6'>
                                                        <img
                                                            src='/assets/images/eot-crane.jpg'
                                                            alt='Eot Crane'
                                                            className='rounded-lg shadow-lg max-w-sm'
                                                            style={{ width: "200px", height: "auto" }}
                                                        />
                                                    </div>
                                                    <div className='col-lg-6'>
                                                        <p className='text-gray-700'>
                                                            The Electric Overhead Traveling (EOT) Crane is one of the most commonly used bridge
                                                            cranes, designed to span across parallel runways with precision and strength. Manufactured
                                                            with advanced materials, our EOT cranes are ideal for various heavy-duty lifting tasks.
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className='mt-80 mb-80'>
                                                    <h6>Specifications</h6>
                                                    <table className='table-auto border-collapse border border-gray-300 w-full text-left text-sm'>
                                                        <thead>
                                                            <tr>
                                                                <th className='px-4 py-2 border border-gray-300'>Feature</th>
                                                                <th className='px-4 py-2 border border-gray-300'>Details</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td className='px-4 py-2 border border-gray-300'>Span of Beam</td>
                                                                <td className='px-4 py-2 border border-gray-300'>10-20 Mtrs</td>
                                                            </tr>
                                                            <tr className='bg-gray-50'>
                                                                <td className='px-4 py-2 border border-gray-300'>Capacity</td>
                                                                <td className='px-4 py-2 border border-gray-300'>2-50 Ton</td>
                                                            </tr>
                                                            <tr>
                                                                <td className='px-4 py-2 border border-gray-300'>Height of Lift</td>
                                                                <td className='px-4 py-2 border border-gray-300'>8 Mtrs</td>
                                                            </tr>
                                                            <tr className='bg-gray-50'>
                                                                <td className='px-4 py-2 border border-gray-300'>Cross Travel Speed</td>
                                                                <td className='px-4 py-2 border border-gray-300'>8 to 10 Mtrs/Min</td>
                                                            </tr>
                                                            <tr>
                                                                <td className='px-4 py-2 border border-gray-300'>Hoist Speed</td>
                                                                <td className='px-4 py-2 border border-gray-300'>2 to 3 Mtrs/Min</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                                <h3>ARM Crane</h3>
                                                <div className='row mt-20'>
                                                    <div className='col-lg-6'>
                                                        <img
                                                            src='/assets/images/arm-crane.png'
                                                            alt='Arm Crane'
                                                            className='rounded-lg shadow-lg max-w-sm'
                                                            style={{ width: "200px", height: "auto" }}
                                                        />
                                                    </div>
                                                    <div className='col-lg-6'>
                                                        <p className='text-gray-700'>
                                                            The Single Arm Electric Stone Lifting Crane is ideal for short-distance transportation,
                                                            featuring a 360° rotating single beam for versatile operations. Its compact design and
                                                            stable performance make it easy to use for lifting tasks within a 9-meter diameter.
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className='mt-80 mb-80'>
                                                    <h6>Specifications</h6>
                                                    <table className='table-auto border-collapse border border-gray-300 w-full text-left text-sm'>
                                                        <thead>
                                                            <tr>
                                                                <th className='px-4 py-2 border border-gray-300'>Feature</th>
                                                                <th className='px-4 py-2 border border-gray-300'>Details</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td className='px-4 py-2 border border-gray-300'>Span of Beam</td>
                                                                <td className='px-4 py-2 border border-gray-300'>4.5 Mtrs</td>
                                                            </tr>
                                                            <tr className='bg-gray-50'>
                                                                <td className='px-4 py-2 border border-gray-300'>Capacity</td>
                                                                <td className='px-4 py-2 border border-gray-300'>1 Ton</td>
                                                            </tr>
                                                            <tr>
                                                                <td className='px-4 py-2 border border-gray-300'>Height of Lift</td>
                                                                <td className='px-4 py-2 border border-gray-300'>5 Mtrs</td>
                                                            </tr>
                                                            <tr className='bg-gray-50'>
                                                                <td className='px-4 py-2 border border-gray-300'>Power</td>
                                                                <td className='px-4 py-2 border border-gray-300'>1.5 KW</td>
                                                            </tr>
                                                            <tr>
                                                                <td className='px-4 py-2 border border-gray-300'>Lead Time</td>
                                                                <td className='px-4 py-2 border border-gray-300'>15 Days</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                                <b>
                                                    <b>
                                                        <a href='/contact'>Contact us</a>&nbsp;
                                                    </b>
                                                    today to learn more about our handling machines and find the best solution for your needs!
                                                </b>
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
