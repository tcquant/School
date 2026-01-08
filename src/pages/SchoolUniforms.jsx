import ServicePage from '../components/ServicePage';
import heroImg from '../assets/images/school_uniforms_real.png';

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

    return (
        <ServicePage
            title="School Uniforms"
            subtitle="Smart, Durable, and Comfortable School Wear"
            heroImage={heroImg}
            overviewText={overview}
            overviewImage="https://images.unsplash.com/photo-1544027993-37dbfe43562a?q=80&w=2940&auto=format&fit=crop"
            features={features}
            ctaText="View Catalogue"
        />
    );
};

export default SchoolUniforms;
