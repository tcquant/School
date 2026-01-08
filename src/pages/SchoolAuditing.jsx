import ServicePage from '../components/ServicePage';

const SchoolAuditing = () => {
    const features = [
        { title: "Academic Audit", description: "Review of curriculum delivery, teacher quality, and learning outcomes." },
        { title: "Financial Audit", description: "Comprehensive analysis of fee collections, expenses, and budget planning." },
        { title: "Safety Audit", description: "Inspection of school buses, building safety, and fire norms." },
        { title: "Regulatory Compliance", description: "Ensuring adherence to RTE Act and State Education Board rules." },
        { title: "Gap Analysis", description: "Identifying areas of improvement before official inspections." },
        { title: "Process Optimization", description: "Streamlining admin processes to reduce cost and improve efficiency." }
    ];

    const overview = `Our "AuditMySchool" service is designed to help school management understand the true health of their institution. We go beyond simple accounting.
  
  We perform 360-degree audits covering Academic Standards, Infrastructure Safety, and Financial Integrity. Whether you are preparing for a CBSE inspection or just want to improve quality, our detailed reports provide actionable insights to elevate your school's standing.`;

    return (
        <ServicePage
            title="School Audit Services"
            subtitle="Comprehensive Academic & Financial Auditing"
            heroImage="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2940&auto=format&fit=crop"
            overviewText={overview}
            overviewImage="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2940&auto=format&fit=crop"
            features={features}
            ctaText="Schedule an Audit"
        />
    );
};

export default SchoolAuditing;
