import Footer1 from "@/components/footers/Footer1";
import Home1 from "@/components/homes/home-1";
import dynamic from "next/dynamic";
const ParallaxContainer = dynamic(() => import("@/components/common/ParallaxContainer"), {
    ssr: false, // Disable server-side rendering
});

import Header1Multipage from "@/components/headers/Header1Multipage";
import { menuItems } from "@/data/menu";
import Hero6 from "@/components/homes/home-1/heros/Hero6";

export const metadata = {
    title: "Rajasthan Machine Manufacturer | Stone Processing Machinery Experts",
    description:
        "Explore Rajasthan Machine Manufacturer for advanced marble and granite processing solutions. High-performance machinery for cutting, polishing, and handling stones.",
};
export default function Home1BGVideoMultiPage() {
    return (
        <>
            <div className='theme-main'>
                <div className='page' id='top'>
                    <nav className='main-nav dark light-after-scroll transparent stick-fixed wow-menubar'>
                        <Header1Multipage links={menuItems} />
                    </nav>{" "}
                    <main id='main'>
                        <ParallaxContainer
                            className='home-section bg-gray-light-1 bg-light-alpha-90 parallax-5 parallax-mousemove-scene scrollSpysection'
                            style={{
                                backgroundImage: "url(/assets/images/full-width-images/section-bg-1.jpg)",
                            }}
                            id='home'
                        >
                            <Hero6 />
                        </ParallaxContainer>
                        <Home1 />
                    </main>
                    <Footer1 />
                </div>{" "}
            </div>
        </>
    );
}
