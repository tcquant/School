import ServicePage from '../components/ServicePage';

const CbseAffiliation = () => {
    const features = [
        { title: "Land Requirements Guide", description: "Consultation on minimum 1.5 acres (or 1 acre in urban areas) norms." },
        { title: "Infrastructure Audit", description: "Verifying classroom sizes (500 sqft) and lab dimensions (600 sqft)." },
        { title: "Documentation Support", description: "Assistance with Land Certificate, Fire NOC, and Building Safety Certificates." },
        { title: "Staff Qualification", description: "Guidance on recruiting qualified staff as per CBSE by-laws." },
        { title: "Website Compliance", description: "Setting up mandatory disclosure section on your school website." },
        { title: "Online Application", description: "Complete hand-holding during the SARAS online application process." }
    ];

    const overview = `Obtaining CBSE affiliation is a rigorous process requiring strict adherence to land, infrastructure, and academic standards. Yuvato provides end-to-end consultancy to simplified this journey.

  We guide schools in preparing:
  • Society/Trust Registration Documents
  • Land Certificate (Standard CBSE Format)
  • Building, Fire, and Health Safety Certificates
  • Staff Lists and Service Rules
  • Financial Audit Reports (Last 3 years)

  From the initial 'Permission to Establish' to the final inspection, we ensure your school meets every criterion set by the board.`;

    return (
        <ServicePage
            title="CBSE Affiliation Consultants"
            subtitle="Expert Guidance for School Affiliation & Compliance"
            heroImage="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2940&auto=format&fit=crop"
            overviewText={overview}
            overviewImage="https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=2932&auto=format&fit=crop"
            features={features}
            ctaText="Check Eligibility"
        />
    );
};

export default CbseAffiliation;
