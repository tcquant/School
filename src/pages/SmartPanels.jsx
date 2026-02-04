import { useState } from 'react';
import ServicePage from '../components/ServicePage';
import { FiDownload, FiEye, FiX, FiCheck } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import heroImg from '../assets/images/service-smart-panel.png';
import overviewImg from '../assets/images/smart-panel-overview.png';

const SmartPanels = () => {
    const features = [
        { title: "4K UHD Resolution", description: "Crystal clear visuals with Zero Bonding technology for natural writing." },
        { title: "Android 13.0 Support", description: "Latest Android OS with high-speed performance and security." },
        { title: "Dual OS Capability", description: "Seamlessly switch between built-in Android and optional Windows OPS." },
        { title: "20-Point Multi-Touch", description: "Highly responsive touch technology for multiple users." },
        { title: "OPS Compatibility", description: "Supports OPS VDE and OPS-C Series (i3/i5/i7) for powerful computing." },
        { title: "Accessories", description: "Compatible with wireless dongles and adjustable mobile stands." }
    ];

    const overview = `Elevate classroom engagement with Yuvato Interactive Flat Panels. Available in 65", 75", and 86", our panels are designed for reliability and ease of use in educational environments.
  
  Featuring 4K resolution and zero-bonding technology, they provide a premium writing experience. With dual OS support and powerful OPS computing options, teachers have all the tools they need under one roof.`;

    const catalogs = [
        { size: "55\"", file: "smart-panel-55-inch.pdf" },
        { size: "65\"", file: "smart-panel-65-inch.pdf" },
        { size: "75\"", file: "smart-panel-75-inch.pdf" },
        { size: "86\"", file: "smart-panel-86-inch.pdf" },
        { size: "98\"", file: "smart-panel-98-inch.pdf" }
    ];

    return (
        <ServicePage
            title="Interactive Smart Panels"
            subtitle="The Future of Classroom Learning"
            heroImage={heroImg}
            overviewText={overview}
            overviewImage={overviewImg}
            features={features}
            ctaText="Request Demo"
        >
            <section className="py-20 bg-gray-50" id="catalogs">
                <div className="container">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4 text-[var(--color-primary)]">Product Models & Downloads</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto mb-8">Detailed technical specifications and brochures for all our panel sizes from 55" to 98".</p>
                        <div className="w-20 h-1 bg-[var(--color-accent)] mx-auto rounded-full" />
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
                        {catalogs.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow flex flex-col p-8"
                            >
                                <div className="flex-1">
                                    <h3 className="text-2xl font-bold text-[var(--color-primary)] mb-6">{item.size} Interactive Series</h3>
                                    <ul className="text-sm text-gray-600 space-y-4 mb-8">
                                        <li className="flex items-center gap-3">
                                            <FiCheck className="text-[var(--color-success)] text-lg" />
                                            <span>4K Ultra HD Resolution</span>
                                        </li>
                                        <li className="flex items-center gap-3">
                                            <FiCheck className="text-[var(--color-success)] text-lg" />
                                            <span>Android 13.0 + Windows Dual OS</span>
                                        </li>
                                        <li className="flex items-center gap-3">
                                            <FiCheck className="text-[var(--color-success)] text-lg" />
                                            <span>20-Point Zero Bonding Touch</span>
                                        </li>
                                    </ul>
                                </div>

                                <a
                                    href={`catalogs/${item.file}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full inline-flex items-center justify-center gap-2 bg-[var(--color-primary)] text-white py-4 px-6 rounded-lg hover:bg-gray-800 transition-colors text-sm font-bold"
                                >
                                    <FiEye className="text-xl" /> View Brochure
                                </a>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

        </ServicePage>
    );
};

export default SmartPanels;
