import React from 'react';
// Replace with the path to your mission image

const About = () => {
  // Fictional data for the company's journey and milestones
  // ... (same as previous example)
  const journeyData = [
   
    
    {
      id: 7,
      year: '2020',
      title: 'Innovative Designs and Smart Devices',
      description:
        'MobileTech continued to push the boundaries of innovation, introducing sleek and futuristic designs while integrating AI and smart technologies into its devices for a more seamless user experience.',
    },
    {
      id: 8,
      year: '2025',
      title: 'Empowering Digital Lifestyles',
      description:
        'As we look ahead, MobileTech remains committed to empowering digital lifestyles through cutting-edge mobile devices that enrich people’s lives with seamless experiences.',
    },
  ];
  
  return (
    <div className="container">
      <h2 className="mb-4">About Us</h2>
      <section className="mb-5">
        <h3 className="mb-3">Our Journey</h3>
        <div className="row">
          <div className="col-md-6">
            <img src={"https://image01.realme.net/general/20230213/1676286242143.jpg"} alt="Journey" className="img-fluid rounded" />
          </div>
          <div className="col-md-6">
            {journeyData.map((milestone) => (
              <div key={milestone.id} className="mb-4">
                <h5 className="mb-2">{milestone.year}</h5>
                <h6 className="mb-3">{milestone.title}</h6>
                <p>{milestone.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="mb-5">
        <h3 className="mb-3">Our Vision</h3>
        <div className="row">
          <div className="col-md-6">
            <img src={"https://image01.realme.net/general/20221014/1665734897811.svg"} alt="Vision" className="img-fluid rounded" />
          </div>
          <div className="col-md-6">
            <p>
              At MobileTech, our vision is to be the leading mobile manufacturing company that shapes the future of
              communication and technology. We aim to create user-centric, innovative, and sustainable mobile devices that
              elevate digital experiences for our customers worldwide.
            </p>
          </div>
        </div>
      </section>
      <section>
        <h3 className="mb-3">Our Mission</h3>
        <div className="row">
          <div className="col-md-6">
            <img src={"https://image01.realme.net/general/20230323/1679547564258.jpg"} alt="Mission" className="img-fluid rounded" />
          </div>
          <div className="col-md-6">
            <p>
              Our mission is to deliver high-quality mobile devices that empower people to connect, communicate, and explore
              the world effortlessly. We are committed to continuous innovation, eco-conscious practices, and fostering a
              culture of excellence, teamwork, and customer-centricity.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
