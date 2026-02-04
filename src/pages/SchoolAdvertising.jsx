import ServicePage from '../components/ServicePage';
import heroImg from '../assets/images/service-advertising.png';
import overviewImg from '../assets/images/overview-advertising.png';

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
            heroImage={heroImg}
            overviewText={overview}
            overviewImage={overviewImg}
            features={features}
            ctaText="Plan Campaign"
        />
    );
};

export default SchoolAdvertising;
