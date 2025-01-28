"use client";
import { useEffect } from "react";
import "swiper/css";
import "../public/assets/css/styles.css";
import "jarallax/dist/jarallax.min.css";
import "swiper/css/effect-fade";
import "react-modal-video/css/modal-video.css";
import "photoswipe/dist/photoswipe.css";
import { usePathname } from "next/navigation";
import { parallaxMouseMovement, parallaxScroll } from "@/utlis/parallax";
import { MainLayout } from "@/components/homes/layout/mainLayout/main.layout.jsx";
import "tippy.js/dist/tippy.css";
import { init_wow } from "@/utlis/initWowjs";
import { headerChangeOnScroll } from "@/utlis/changeHeaderOnScroll";
import WhatsappLive from "./WhatsappLive";
import Script from "next/script";

export default function RootLayout({ children }) {
    const path = usePathname();

    useEffect(() => {
        init_wow();
        parallaxMouseMovement();
        var mainNav = document.querySelector(".main-nav");
        if (mainNav?.classList.contains("transparent")) {
            mainNav.classList.add("js-transparent");
        } else if (!mainNav?.classList?.contains("dark")) {
            mainNav?.classList.add("js-no-transparent-white");
        }

        window.addEventListener("scroll", headerChangeOnScroll);
        parallaxScroll();
        return () => {
            window.removeEventListener("scroll", headerChangeOnScroll);
        };
    }, [path]);
    useEffect(() => {
        if (typeof window !== "undefined") {
            // Import the script only on the client side
            import("bootstrap/dist/js/bootstrap.esm").then(() => {
                // Module is imported, you can access any exported functionality if
            });
        }
    }, []);

    return (
        <html lang='en' className='no-mobile no-touch '>
            <head>
                <link href='https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap' rel='stylesheet' />
                <link href='https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;1,400;1,500&display=swap' rel='stylesheet' />
                <link href='https://fonts.googleapis.com/css2?family=Epilogue:wght@400;500&family=Poppins&display=swap' rel='stylesheet' />
                <link href='https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap' rel='stylesheet' />
                <link
                    href='https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,400;0,500;0,600;1,400&display=swap'
                    rel='stylesheet'
                />
                <link
                    href='https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;1,400&display=swap'
                    rel='stylesheet'
                />
                <link rel='icon' href='/favicon.ico' sizes='any' />

                {/* Google tag (gtag.js) */}
                <Script async src='https://www.googletagmanager.com/gtag/js?id=G-H0WTG5YR1G'></Script>
                <Script id='google-analytics'>
                    {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());

                        gtag('config', 'G-H0WTG5YR1G');
                    `}
                </Script>
            </head>
            <body className='appear-animate body'>
                <MainLayout>
                    {children}
                    <WhatsappLive />
                </MainLayout>
            </body>
        </html>
    );
}
