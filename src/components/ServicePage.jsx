import { motion } from 'framer-motion';
import { FiCheck } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const ServicePage = ({
    title,
    subtitle,
    heroImage,
    overviewText,
    overviewImage,
    features = [],
    ctaText = "Contact Us Now",
    ctaLink = "/#contact"
}) => {
    return (
        <div className="pt-0">
            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center bg-gray-900 text-white overflow-hidden">
                <div className="absolute inset-0 bg-black/50 z-10" />
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${heroImage || 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2940&auto=format&fit=crop'})` }}
                />
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative z-20 text-center container px-4"
                >
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">{title}</h1>
                    <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">{subtitle}</p>
                </motion.div>
            </section>

            {/* Overview Section */}
            <section className="py-20 bg-white">
                <div className="container grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl font-bold mb-6 text-[var(--color-primary)]">Overview</h2>
                        <p className="text-lg text-gray-600 leading-relaxed whitespace-pre-line">
                            {overviewText}
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl"
                    >
                        <img
                            src={overviewImage || "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=2946&auto=format&fit=crop"}
                            alt="Service Overview"
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                        />
                    </motion.div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-20 bg-[var(--color-bg-offset)]">
                <div className="container">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4 text-[var(--color-primary)]">Key Features & Benefits</h2>
                        <div className="w-20 h-1 bg-[var(--color-accent)] mx-auto rounded-full" />
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-[var(--color-success)]"
                            >
                                <div className="mb-4 text-[var(--color-success)] text-3xl">
                                    <FiCheck />
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-[var(--color-primary)]">{feature.title}</h3>
                                <p className="text-gray-600">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-[var(--color-primary)] text-white text-center">
                <div className="container">
                    <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Institution?</h2>
                    <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">Get detailed information about our services and how we can help your school grow.</p>
                    <Link
                        to={ctaLink}
                        className="inline-block bg-[var(--color-accent)] text-white font-bold py-4 px-8 rounded-lg text-lg hover:bg-red-600 transition-colors shadow-lg hover:shadow-red-500/50"
                    >
                        {ctaText}
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default ServicePage;
