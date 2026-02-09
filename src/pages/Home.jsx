import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiMonitor, FiBookOpen, FiClipboard, FiUsers } from 'react-icons/fi';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';

// Import Generated Realistic Assets
import heroImg from '../assets/images/hero-main.png';
import smartPanelImg from '../assets/images/service-smart-panel.png';
import cbseImg from '../assets/images/service-cbse-affiliation.png';
import auditingImg from '../assets/images/service-auditing.png';
import uniformsImg from '../assets/images/service-uniforms.png';
import stationeryImg from '../assets/images/service-stationery.png';
import advertisingImg from '../assets/images/service-advertising.png';

// Import Client Logos
import dpsLogo from '../assets/images/clients/client-dps.png';
import ryanLogo from '../assets/images/clients/client-ryan.png';
import xaviersLogo from '../assets/images/clients/client-xaviers.png';
import mountLiteraLogo from '../assets/images/clients/client-mount-litera.png';
import heritageLogo from '../assets/images/clients/client-heritage.png';

// Import Certification Logos
import makeInIndiaLogo from '../assets/images/cert-make-in-india.png';
import cleanIndiaLogo from '../assets/images/cert-clean-india.png';
import isoLogo from '../assets/images/cert-iso.png';
import ceLogo from '../assets/images/cert-ce.png';

const HeroSection = () => (
    <section className="relative min-h-[90vh] flex items-center bg-[var(--color-bg-light)] overflow-hidden">
        {/* Floating Background Elements */}
        <div className="absolute top-20 right-0 w-[800px] h-[800px] bg-[var(--color-blue-soft)] rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 -left-20 w-[600px] h-[600px] bg-[var(--color-pink-soft)] rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-32 left-1/3 w-[600px] h-[600px] bg-[var(--color-green-soft)] rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

        <div className="container relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center lg:text-left"
            >
                <span className="inline-block py-1 px-3 rounded-full bg-white border border-gray-200 text-[var(--color-accent)] font-semibold text-sm mb-6 shadow-sm">
                    ✨ Transforming Education
                </span>
                <h1 className="text-5xl lg:text-7xl font-extrabold mb-6 leading-[1.1] text-gray-900">
                    The Smart Choice for <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-accent)] to-[#2C7A7B]">
                        Modern Schools
                    </span>
                </h1>
                <p className="text-xl text-gray-600 mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                    Elevate your institution with premium infrastructure, seamless compliance, and smart technology solutions.
                </p>
                <div className="flex gap-4 flex-col sm:flex-row justify-center lg:justify-start">
                    <button onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })} className="btn btn-primary px-8 py-4 text-lg">
                        Explore Our Services
                    </button>
                    <button
                        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                        className="btn btn-outline bg-white px-8 py-4 text-lg hover:bg-gray-50 shadow-sm border-gray-200 text-gray-700"
                    >
                        Get in Touch
                    </button>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative hidden lg:block"
            >
                {/* 3D Illustration */}
                <div className="relative z-10">
                    <img
                        src={heroImg}
                        alt="Smart Classroom 3D"
                        className="rounded-[2.5rem] shadow-2xl transition-transform duration-500 border-8 border-white"
                    />
                    {/* Removed Trusted by 500+ scools tile as requested */}
                </div>
            </motion.div>
        </div>
    </section>
);

const serviceList = [
    {
        title: "Smart Panels",
        desc: "Interactive 4K displays with Android 13.0 and Windows Dual OS.",
        image: smartPanelImg,
        link: "/smart-panels",
        color: "bg-[var(--color-blue-soft)]"
    },
    {
        title: "CBSE Affiliation",
        desc: "Complete guidance for new registrations and affiliation upgradation.",
        image: cbseImg,
        link: "/cbse-affiliation",
        color: "bg-[var(--color-green-soft)]"
    },
    {
        title: "School Auditing",
        desc: "Infrastructure, safety, and documentation audits for compliance.",
        image: auditingImg,
        link: "/auditing",
        color: "bg-[var(--color-yellow-soft)]"
    },
    {
        title: "Uniforms",
        desc: "Premium, comfortable & durable uniforms and sportswear.",
        image: uniformsImg,
        link: "/uniforms",
        color: "bg-[var(--color-purple-soft)]"
    },
    {
        title: "Stationery",
        desc: "All-in-one supply of books, notebooks, and supply kits.",
        image: stationeryImg,
        link: "/stationery",
        color: "bg-[var(--color-orange-soft)]"
    },
    {
        title: "Advertising",
        desc: "Digital and print marketing to boost admission numbers.",
        image: advertisingImg,
        link: "/advertising",
        color: "bg-[var(--color-pink-soft)]"
    },
];

const ServicesSection = () => (
    <section id="services" className="py-24 bg-white relative">
        <div className="container">
            <div className="text-center mb-16 max-w-3xl mx-auto">
                <span className="text-[var(--color-accent)] font-bold tracking-widest uppercase text-sm">Our Expertise</span>
                <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-6">Complete School Solutions</h2>
                <p className="text-gray-500 text-lg">Under One Roof: Everything you need to run a modern educational institution.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {serviceList.map((service, index) => (
                    <Link to={service.link} key={index} className="group">
                        <motion.div
                            whileHover={{ y: -10 }}
                            className="card-3d h-full overflow-hidden flex flex-col"
                        >
                            <div className="h-48 overflow-hidden relative">
                                <div className={`absolute inset-0 ${service.color} opacity-20 z-10`}></div>
                                <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                            </div>
                            <div className="p-8 flex-1 flex flex-col">
                                <h3 className="text-2xl font-bold mb-3 text-gray-800">{service.title}</h3>
                                <p className="text-gray-500 mb-6 leading-relaxed">{service.desc}</p>
                                <span className="mt-auto inline-flex items-center gap-2 text-[var(--color-accent)] font-bold text-sm uppercase tracking-wide group-hover:gap-4 transition-all">
                                    View Details <FiArrowRight />
                                </span>
                            </div>
                        </motion.div>
                    </Link>
                ))}
            </div>
        </div>
    </section>
);

const ClientsSection = () => {
    // Increase duplication for smoother loop
    const logos = [dpsLogo, ryanLogo, xaviersLogo, mountLiteraLogo, heritageLogo, dpsLogo, ryanLogo, xaviersLogo, mountLiteraLogo, heritageLogo];

    return (
        <section id="clients" className="py-20 bg-[var(--color-bg-offset)] overflow-hidden">
            <div className="container mb-8">
                <h2 className="text-3xl font-bold text-center text-[var(--color-primary)]">Trusted by Leading Schools</h2>
            </div>

            <div className="max-w-[1400px] mx-auto px-4">
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={1}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 100,
                        modifier: 1.5,
                        slideShadows: false,
                    }}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    modules={[Autoplay, EffectCoverflow]}
                    className="client-swiper py-12"
                    breakpoints={{
                        640: {
                            slidesPerView: 3,
                        },
                        1024: {
                            slidesPerView: 5,
                        },
                    }}
                >
                    {logos.map((logo, index) => (
                        <SwiperSlide key={index} className="flex items-center justify-center">
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center justify-center aspect-square w-full max-w-[240px] transition-all duration-300">
                                <img
                                    src={logo}
                                    alt="Client Logo"
                                    className="max-h-24 max-w-full object-contain"
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <style>{`
                .client-swiper .swiper-slide {
                    transition: all 0.3s;
                    opacity: 0.5;
                    transform: scale(0.8);
                }
                .client-swiper .swiper-slide-active {
                    opacity: 1;
                    transform: scale(1.1);
                    z-index: 10;
                }
                .client-swiper .swiper-slide-active .bg-white {
                    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
                    border-color: var(--color-accent);
                }
            `}</style>
        </section>
    );
};

const ContactSection = () => (
    <section id="contact" className="py-24 bg-white">
        <div className="container grid md:grid-cols-2 gap-16">
            <div>
                <h2 className="text-4xl font-bold mb-6 text-[var(--color-primary)]">Get in Touch</h2>
                <p className="text-lg text-gray-600 mb-8">
                    Ready to upgrade your school's infrastructure? Contact us for a free consultation and demo.
                </p>
                <div className="space-y-6">
                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-xl">📍</div>
                        <div>
                            <h4 className="font-bold text-lg">Visit Us</h4>
                            <p className="text-gray-600">Unit No 06, 5th Floor Cosmo Mall, Zirakpur, Punjab</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 text-xl">📞</div>
                        <div>
                            <h4 className="font-bold text-lg">Call Us</h4>
                            <p className="text-gray-600">+91 91104-13537</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 text-xl">✉️</div>
                        <div>
                            <h4 className="font-bold text-lg">Email Us</h4>
                            <p className="text-gray-600">info@yuvatoindia.com</p>
                        </div>
                    </div>
                </div>
            </div>

            <form className="bg-gray-50 p-8 rounded-2xl shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
                <div className="grid gap-6">
                    <input type="text" placeholder="Your Name" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[var(--color-primary)]" />
                    <input type="email" placeholder="Email Address" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[var(--color-primary)]" />
                    <textarea rows="4" placeholder="How can we help?" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[var(--color-primary)]"></textarea>
                    <button type="submit" className="btn btn-primary w-full py-4 text-lg">Send Message</button>
                </div>
            </form>
        </div>
    </section>
);

const TrustCertifications = () => (
    <section className="py-12 bg-white border-t border-gray-100">
        <div className="container">
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 transition-all duration-500">
                <div className="flex flex-col items-center gap-2">
                    <img
                        src={makeInIndiaLogo}
                        alt="Make in India"
                        className="h-16 w-auto object-contain"
                    />
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">Proudly Indian</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                    <img
                        src={cleanIndiaLogo}
                        alt="Clean India"
                        className="h-14 w-auto object-contain"
                    />
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">Clean India</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                    <img
                        src={isoLogo}
                        alt="ISO Certified"
                        className="h-16 w-auto object-contain"
                    />
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">Quality Certified</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                    <img
                        src={ceLogo}
                        alt="CE Certified"
                        className="h-14 w-auto object-contain"
                    />
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">Safety Standards</span>
                </div>
            </div>
        </div>
    </section>
);

const Home = () => (
    <div>
        <HeroSection />
        <ServicesSection />
        <ClientsSection />
        <TrustCertifications />
        <ContactSection />
    </div>
);

export default Home;
