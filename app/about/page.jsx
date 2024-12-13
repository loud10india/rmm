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
                                                    <div className='blog-media mb-40 mb-xs-30'>
                                                        <Slider1 />
                                                    </div>
                                                    <p className='lead'>
                                                        RAJASTHAN MACHINE MANUFECTURER (RMM) started its operation in 1970 in KISHANGARH (Rajasthan)
                                                        by our visionary founder Mr. Ahmed Ali on the desire to make innovative machines for the
                                                        marble industry. We feel dignified as the company has more than 48 years of experience in the
                                                        industry with wide technical knowledge. RMM began manufacturing Diamond Gangsaw, stone cutter,
                                                        slab polisher, and handling machines which are used in handling of marbles and stones. Over
                                                        the years, we have worked on cutting-edge technology in the market, offering high reliability
                                                        and good quality products. These products have enabled the company to create new productivity
                                                        standards in the industry.
                                                    </p>
                                                    <p>
                                                        We are built around a culture of continuous improvement, quality and exceptional customer
                                                        service and listen closely to our customers to create products that are smartly engineered and
                                                        need-based.
                                                    </p>
                                                    {/* <p>
                                                        Fusce non ante sed lorem rutrum feugiat. Vestibulum pellentesque, purus ut&nbsp;dignissim
                                                        consectetur, nulla erat ultrices purus, ut&nbsp;consequat sem elit non sem. Morbi lacus massa,
                                                        euismod ut turpis molestie, tristique sodales est. Integer sit amet mi id sapien tempor
                                                        molestie in nec massa. Fusce non ante sed lorem rutrum feugiat.
                                                    </p>
                                                    <blockquote>
                                                        <p>
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a&nbsp;ante.
                                                            Vestibulum pellentesque, purus ut dignissim consectetur, nulla erat ultrices purus.
                                                        </p>
                                                        <footer>
                                                            Someone famous in
                                                            <cite title='Source Title'> Source Title </cite>
                                                        </footer>
                                                    </blockquote> */}
                                                    {/* <p>
                                                        Praesent ultricies ut ipsum non laoreet. Nunc ac
                                                        <a href='#'>ultricies</a> leo. Nulla ac ultrices arcu. Nullam adipiscing lacus in consectetur
                                                        posuere. Nunc malesuada tellus turpis, ac pretium orci molestie vel. Morbi lacus massa,
                                                        euismod ut turpis molestie, tristique sodales est. Integer sit amet mi id sapien tempor
                                                        molestie in nec massa. Fusce non ante sed lorem rutrum feugiat.
                                                    </p>
                                                    <ul>
                                                        <li>First item of the list</li>
                                                        <li>Second item of the list</li>
                                                        <li>Third item of the list</li>
                                                    </ul>
                                                    <p>
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non laoreet dui. Morbi lacus
                                                        massa, euismod ut turpis molestie, tristique sodales est. Integer sit amet mi id sapien tempor
                                                        molestie in nec massa. Fusce non ante sed lorem rutrum feugiat. Vestibulum pellentesque, purus
                                                        ut&nbsp;dignissim consectetur, nulla erat ultrices purus, ut&nbsp;consequat sem elit non sem.
                                                    </p> */}
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
