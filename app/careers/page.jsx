import Footer1 from "@/components/footers/Footer1";

import dynamic from "next/dynamic";

const ParallaxContainer = dynamic(() => import("@/components/common/ParallaxContainer"), {
    ssr: false, // Disable server-side rendering
});

import Header1Multipage from "@/components/headers/Header1Multipage";
import AnimatedText from "@/components/common/AnimatedText";
import { menuItems } from "@/data/menu";
import { allBlogs } from "@/data/blogs6";
export const metadata = {
    title: "Careers at Rajasthan Machine Manufacturer | Join Our Team",
    description: "Be a part of Rajasthan Machine Manufacturer’s journey. Explore career opportunities in the stone processing machinery industry.",
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
                                                    <p>
                                                        We believe that personal, professional and company growth all go hand in hand. So we develop,
                                                        challenge and incentivize our people to deliver the very best for our loyal customers.
                                                    </p>
                                                    <p>
                                                        Take your first step into a vibrant and varied career with exciting opportunities in a growing
                                                        company. If your ideas are ahead of their time, we’ll get them carefully patented so we can
                                                        work on developing them into innovations of the future. You’ll be involved in developing
                                                        products through their entire life cycle, with tangible results every time. It means a huge
                                                        sense of accomplishment and a unique insight into how the world is built.
                                                    </p>
                                                    <p>
                                                        There are many ways to join our team, depending on your skills, strengths, interests and
                                                        ambitions. Our main job roles and opportunities are in ENGINEERING, R&D INNOVATION, SALES and
                                                        CLIENT SERVICING.
                                                    </p>
                                                    <p>
                                                        Please send your resume to <a href='mailto:info@rajasthanmm.com'>info@rajasthanmm.com</a>
                                                    </p>
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
