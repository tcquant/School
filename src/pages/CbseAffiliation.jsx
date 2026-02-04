import ServicePage from '../components/ServicePage';
import heroImg from '../assets/images/service-cbse-affiliation.png';
import overviewImg from '../assets/images/overview-cbse.png';

const CbseAffiliation = () => {
    const features = [
        { title: "New Affiliation", description: "Complete step-by-step guidance for schools seeking initial CBSE registration." },
        { title: "Affiliation Upgradation", description: "Expert support for upgrading from Middle to Secondary or Senior Secondary levels." },
        { title: "Documentation Support", description: "Preparation and verification of Land, Fire, and Building Safety certificates." },
        { title: "Bye-laws Compliance", description: "Ensuring school operations align perfectly with latest CBSE by-laws." },
        { title: "SARAS Application", description: "End-to-hand holding through the entire online SARAS portal process." },
        { title: "Documentation Audit", description: "Pre-submission review to ensure error-free applications." }
    ];

    const overview = `Obtaining or upgrading CBSE affiliation is a complex legal and administrative journey. Yuvato provides professional consultancy to navigate these requirements with ease.
  
  Our expertise covers new affiliation applications, upgradation requests, and ensuring total compliance with CBSE infrastructure and documentation norms. We help schools prepare all necessary certificates—from Land and Fire NOCs to Building Safety—ensuring you are inspection-ready from day one.`;

    return (
        <ServicePage
            title="CBSE Affiliation Consultants"
            subtitle="Expert Guidance for School Affiliation & Compliance"
            heroImage={heroImg}
            overviewText={overview}
            overviewImage={overviewImg}
            features={features}
            ctaText="Check Eligibility"
        />
    );
};

export default CbseAffiliation;
