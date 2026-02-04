import ServicePage from '../components/ServicePage';
import heroImg from '../assets/images/service-auditing.png';
import overviewImg from '../assets/images/overview-auditing.png';

const SchoolAuditing = () => {
    const features = [
        { title: "Infrastructure Audit", description: "Verifying classroom sizes, laboratory dimensions, and building standards as per norms." },
        { title: "Safety Audit", description: "Comprehensive inspection of school buses, fire safety systems, and structural safety." },
        { title: "Documentation Audit", description: "Review of all mandatory registers, certificates, and compliance documents." },
        { title: "Gap Analysis", description: "Identifying deficiencies and providing corrective action plans to meet standards." },
        { title: "Inspection Readiness", description: "Mock inspections to prepare the school for official board observations." },
        { title: "Academic Standards", description: "Evaluating curriculum delivery and teacher quality against benchmarks." }
    ];

    const overview = `Yuvato's auditing services help school managements ensure their institution meets the highest standards of safety and compliance. We provide a rigorous 360-degree evaluation of your school's physical and administrative health.
  
  Our audits go beyond simple checks; we perform detailed infrastructure assessments, safety verifications, and documentation reviews. Through professional gap analysis and corrective action planning, we ensure your school is not only compliant with government and board regulations but also provides a safe, high-quality environment for students.`;

    return (
        <ServicePage
            title="School Audit Services"
            subtitle="Comprehensive Academic & Financial Auditing"
            heroImage={heroImg}
            overviewText={overview}
            overviewImage={overviewImg}
            features={features}
            ctaText="Schedule an Audit"
        />
    );
};

export default SchoolAuditing;
