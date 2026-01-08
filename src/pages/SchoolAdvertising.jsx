import ServicePage from '../components/ServicePage';

const SchoolAdvertising = () => {
    const features = [
        { title: "Outdoor Branding", description: "Hoardings, banners, and pole kiosks at strategic locations." },
        { title: "Digital Marketing", description: "Social media campaigns (FB/Insta) and Google Ads for admissions." },
        { title: "Print Media", description: "Design and printing of flyers, brochures, and prospectus." },
        { title: "Event Promotion", description: "Branding for annual days, sports meets, and school fairs." },
        { title: "Video Production", description: "Professional campus tour videos and promotional ad films." },
        { title: "Website Design", description: "SEO-friendly school websites with admission portals (like this one!)." }
    ];

    const overview = `In a competitive educational landscape, visibility is key. Our specialized School Advertising services help you reach parents and fill seats.
  
  We create cohesive branding strategies that highlight your school's unique strengths. From visible outdoor hoardings to targeted digital campaigns during admission season, we ensure your message reaches the right audience effectively.`;

    return (
        <ServicePage
            title="School Advertising"
            subtitle="Boost Admissions and Build Your Brand"
            heroImage="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2940&auto=format&fit=crop"
            overviewText={overview}
            overviewImage="https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=2940&auto=format&fit=crop"
            features={features}
            ctaText="Plan Campaign"
        />
    );
};

export default SchoolAdvertising;
