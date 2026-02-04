import ServicePage from '../components/ServicePage';
import heroImg from '../assets/images/service-uniforms.png';
// Import new product images
import uniformImg from '../assets/images/product-uniform.png';
import shoesImg from '../assets/images/product-shoes.png';
import idCardImg from '../assets/images/product-id-card.png';
import overviewImg from '../assets/images/overview-uniforms.png';
import { motion } from 'framer-motion';

const SchoolUniforms = () => {
    const features = [
        { title: "Premium Fabric", description: "Durable, breathable, and color-fast fabrics suitable for Indian weather." },
        { title: "Custom Branding", description: "Embroidery and screen printing of school logos with high precision." },
        { title: "Complete Sets", description: "Shirts, trousers, skirts, blazers, ties, socks, and sports kits." },
        { title: "Size Inclusivity", description: "Wide range of sizes to fit students of all ages comfortably." },
        { title: "Winter & Summer", description: "Specialized collections for different seasons." },
        { title: "Bulk Manufacturing", description: "Timely delivery for large orders before the academic session begins." }
    ];

    const overview = `Your school's uniform is its identity. At Yuvato, we understand the importance of quality and consistency. We provide high-quality, comfortable, and smart uniforms that students feel proud to wear.
  
  From design consultation to fabric selection and final manufacturing, we handle everything. Our uniforms are designed to withstand the wear and tear of daily school life while maintaining a sharp look.`;

    const products = [
        {
            title: "School Uniforms",
            description: "Smartly designed shirts, trousers, and skirts with custom school branding.",
            image: uniformImg
        },
        {
            title: "School Shoes & Socks",
            description: "Durable leather shoes and high-quality cotton socks for all-day comfort.",
            image: shoesImg
        },
        {
            title: "School ID Cards",
            description: "High-quality printed ID cards with customized lanyards and holders.",
            image: idCardImg
        }
    ];

    return (
        <ServicePage
            title="School Uniforms & Essentials"
            subtitle="Smart, Durable, and Comfortable School Wear & Accessories"
            heroImage={heroImg}
            overviewText={overview}
            overviewImage={overviewImg}
            features={features}
            ctaText="View Catalogue"
            midSection={
                <section className="py-20 bg-gray-50">
                    <div className="container">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold mb-4 text-[var(--color-primary)]">Complete Student Essentials</h2>
                            <p className="text-gray-600 max-w-2xl mx-auto mb-8">Beyond uniforms, we provide a complete range of high-quality student accessories customized for your institution.</p>
                            <div className="w-20 h-1 bg-[var(--color-accent)] mx-auto rounded-full" />
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
                            {products.map((product, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-white rounded-xl shadow-lg overflow-hidden group hover:-translate-y-2 transition-transform duration-300"
                                >
                                    <div className="h-64 overflow-hidden">
                                        <img
                                            src={product.image}
                                            alt={product.title}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                    </div>
                                    <div className="p-6 text-center">
                                        <h3 className="text-xl font-bold text-[var(--color-primary)] mb-2">{product.title}</h3>
                                        <p className="text-gray-600 text-sm">{product.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            }
        />
    );
};

export default SchoolUniforms;
