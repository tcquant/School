import ServicePage from '../components/ServicePage';
import heroImg from '../assets/images/service-stationery.png';
import notebookImg from '../assets/images/product-notebooks.png';
import pensImg from '../assets/images/product-pens.png';
import artImg from '../assets/images/product-art.png';
import officeImg from '../assets/images/product-office.png';
import labImg from '../assets/images/product-lab.png';
import kitImg from '../assets/images/product-kit.png';
import overviewImg from '../assets/images/overview-stationery.png';
import { motion } from 'framer-motion';

const SchoolStationery = () => {
    const features = [
        { title: "Bulk Notebooks", description: "Customized school notebooks with high-quality paper and binding." },
        { title: "Art Supplies", description: "Paints, brushes, crayons, and craft materials for creative classes." },
        { title: "Exam Material", description: "Answer sheets, graph papers, and secure exam stationery." },
        { title: "Office Supplies", description: "Files, folders, markers, and desk essentials for staff and admin." },
        { title: "Student Kits", description: "Pre-packed stationery kits for new academic sessions." },
        { title: "Lab Records", description: "Physics, Chem, and Bio practical record notebooks." }
    ];

    const products = [
        {
            title: "Customized Notebooks",
            description: "Premium quality notebooks with school branding, available in various sizes and rulings.",
            image: notebookImg
        },
        {
            title: "Writing Instruments",
            description: "High-quality pens, pencils, erasers, and sharpeners for students of all ages.",
            image: pensImg
        },
        {
            title: "Art & Craft Supplies",
            description: "Comprehensive range of drawing papers, paints, brushes, and craft tools.",
            image: artImg
        },
        {
            title: "Exam & Office Supplies",
            description: "Oats, answer sheets, files, folders, and administrative stationery essentials.",
            image: officeImg
        },
        {
            title: "Laboratory Records",
            description: "Standardized practical record books for Science and Computer laboratories.",
            image: labImg
        },
        {
            title: "Annual Student Kits",
            description: "Curated stationery bundles containing all essentials for a specific grade.",
            image: kitImg
        }
    ];

    const overview = `Ensure your students and staff never run out of supplies. Yuvato offers comprehensive stationery solutions for schools. We source directly from manufacturers to provide the best rates and quality.
  
  Whether you need customized notebooks with your school's branding or bulk art supplies for the entire academic year, we have you covered with reliable on-time delivery.`;

    return (
        <ServicePage
            title="School Stationery"
            subtitle="Quality Classroom & Office Supplies"
            heroImage={heroImg}
            overviewText={overview}
            overviewImage={overviewImg}
            features={features}
            ctaText="Order Bulk"
            midSection={
                <section className="py-20 bg-gray-50">
                    <div className="container">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold mb-4 text-[var(--color-primary)]">Essential School Stationery</h2>
                            <p className="text-gray-600 max-w-2xl mx-auto mb-8">From customized notebooks to specialized lab records, we provide everything needed for a productive academic environment.</p>
                            <div className="w-20 h-1 bg-[var(--color-accent)] mx-auto rounded-full" />
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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

export default SchoolStationery;
