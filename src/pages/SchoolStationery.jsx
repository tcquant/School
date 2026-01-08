import ServicePage from '../components/ServicePage';
import heroImg from '../assets/images/stationery_hero_velvet.png';

const SchoolStationery = () => {
    const features = [
        { title: "Bulk Notebooks", description: "Customized school notebooks with high-quality paper and binding." },
        { title: "Art Supplies", description: "Paints, brushes, crayons, and craft materials for creative classes." },
        { title: "Exam Material", description: "Answer sheets, graph papers, and secure exam stationery." },
        { title: "Office Supplies", description: "Files, folders, markers, and desk essentials for staff and admin." },
        { title: "Student Kits", description: "Pre-packed stationery kits for new academic sessions." },
        { title: "Lab Records", description: "Physics, Chem, and Bio practical record notebooks." }
    ];

    const overview = `Ensure your students and staff never run out of supplies. Yuvato offers comprehensive stationery solutions for schools. We source directly from manufacturers to provide the best rates and quality.
  
  Whether you need customized notebooks with your school's branding or bulk art supplies for the entire academic year, we have you covered with reliable on-time delivery.`;

    return (
        <ServicePage
            title="School Stationery"
            subtitle="Quality Classroom & Office Supplies"
            heroImage={heroImg}
            overviewText={overview}
            overviewImage="https://images.unsplash.com/photo-1452860606245-08befc0ff44b?q=80&w=2940&auto=format&fit=crop"
            features={features}
            ctaText="Order Bulk"
        />
    );
};

export default SchoolStationery;
