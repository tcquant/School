import ServicePage from '../components/ServicePage';

const SmartPanels = () => {
    const features = [
        { title: "4K UHD Resolution", description: "Crystal clear visuals with 3840x2160 resolution for immersive learning." },
        { title: "20-Point Multi-Touch", description: "Collaborative learning with highly responsive zero-bonding touch technology." },
        { title: "Dual OS Support", description: "Seamlessly switch between Android 13 and Windows 11 OPS." },
        { title: "Anti-Glare Glass", description: "Mohs 7 toughened glass protecting eyes and screen longevity." },
        { title: "Wireless Casting", description: "Cast from any device (Phone/Laptop) instantly without cables." },
        { title: "Interactive Software", description: "Includes whiteboard tools, mathematics instruments, and annotation features." }
    ];

    const overview = `Transform traditional classrooms into interactive smart hubs. Our Interactive Flat Panels (IFP) are designed specifically for Indian schools, offering durability, ease of use, and powerful teaching tools.
  
  Unlike standard projectors, our panels require zero maintenance (no bulb changes), offer higher brightness, and come with built-in educational software. Teachers can write, draw, play videos, and save lessons with a single tap.`;

    return (
        <ServicePage
            title="Interactive Smart Panels"
            subtitle="The Future of Classroom Learning"
            heroImage="https://images.unsplash.com/photo-1577896334614-201901dd28f2?q=80&w=2940&auto=format&fit=crop"
            overviewText={overview}
            overviewImage="https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=2940&auto=format&fit=crop"
            features={features}
            ctaText="Request Demo"
        />
    );
};

export default SmartPanels;
