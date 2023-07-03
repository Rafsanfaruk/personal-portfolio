import Banner from "../Banner/Banner";
import Card from "../Card/Card";
import ContactForm from "../ContactForm/ContactForm";

const HomePage = () => {
    return (
        <div>
            <Banner />
          <div> 
            <h2 className="bg-gray-900 text-center font-bold text-3xl items-center text-white">My Project Here</h2>
          <Card />
          </div>
            <ContactForm />
        </div>
    );
};

export default HomePage;