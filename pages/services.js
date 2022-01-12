import Layout from "../components/Layout";

export default function Services({ }) {

    const servicesArray = [
        { title: "Artificial Intelligence", descriptiom: "Make your software smart.", image: "/images/ai.jpg" },
        { title: "Application Services", descriptiom: "Build better software that is designed with your users in mind.", image: "/images/as.png" },
        { title: "Automation", descriptiom: "Understand your processes better and get intelligent systems that work for you.", image: "/images/automation.jpg" },
        { title: "Blockchain Technology", descriptiom: "Secure and distribute your records better.", image: "/images/blockchain.jpg" },
        { title: "Cloud Computing", descriptiom: "Get better data storage and computing power according to your needs.", image: "/images/cloud.jpg" },
        { title: "Customer Experience", descriptiom: "Interacting with customers in all phases of consumption to ensure better customer experience.", image: "/images/customerexp.jpeg" },
        { title: "Cybersecurity", descriptiom: "Protect yourself and your customers’ information", image: "/images/cyber.jpeg" },
        { title: "Data & Analytics", descriptiom: "Get organized and processed information to make effective decisions.", image: "/images/analysis.jpg" },
        { title: "Infrastructure", descriptiom: "Support your systems and ensure their sustainability.", image: "/images/infrastructure.jpg" },
        { title: "Consulting & Training", descriptiom: "Understand the application of technology in your business.", image: "/images/consulting.png" },

    ]
    return (
        <Layout title="About Us">

            <section className="text-left">
                <h2>This is what we do!</h2>
                <p> Bridging the growing gap between your business and technology.</p>

                <div className="d-flex flex-row justify-space-around w-100" style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between" }}>
                    {
                        servicesArray.map((service, index) => (
                            <div className="text-center" style={{ width: "30%" }}>
                                <h3>{service.title}</h3>
                                <img src={service?.image} alt="IMG" />
                                <p>{service.descriptiom}</p>
                            </div>
                        ))
                    }
                </div>

            </section>

        </Layout>
    );
}
