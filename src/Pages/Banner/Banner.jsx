import pic from "../../assets/image (1).png";
import { FaFacebookF, FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

const Banner = () => {
  return (
    <section className="bg-gray-900 py-10 px-8 md:px-16 lg:px-32 xl:px-48">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2">
          <div className="text-center md:text-left text-white">
            <h1 className="text-4xl font-bold mb-6">Hello, it's me</h1>
            <p className="text-lg mb-4">
              Md. Omar Faruk and I am a dedicated front-end developer. I
              specialize in creating modern and responsive web applications
              using the latest technologies.
            </p>
            <a
              href="https://drive.google.com/uc?export=download&id=1VHCWxgJFR4Dt4NS-S23qr6otCbH6KlSI"
              className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              Download Resume
            </a>
            <div className="mt-3 flex">
              <a href="https://www.facebook.com/Rafsan0/">
                <FaFacebookF className="rounded-full hover:bg-gradient-to-l from-purple-500 to-pink-500 p-1 h-8 w-8" />
              </a>
              <a href="https://www.linkedin.com/in/md-omar-faruk-610239280/">
                <FaLinkedinIn className="rounded-full hover:bg-gradient-to-l from-purple-500 to-pink-500 p-1 h-8 w-8" />
              </a>
              <a href="https://www.twitter.com">
                <FaTwitter className="rounded-full hover:bg-gradient-to-l from-purple-500 to-pink-500 p-1 h-8 w-8" />
              </a>
              <a href="https://github.com/Rafsanfaruk">
                <FaGithub className="rounded-full hover:bg-gradient-to-l from-purple-500 to-pink-500 p-1 h-8 w-8" />
              </a>
              <a href="mailto:mdomarfaruk2084@gmail.com">
                <BiLogoGmail className="rounded-full hover:bg-gradient-to-l from-purple-500 to-pink-500 p-1 h-8 w-8" />
              </a>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 bg-opacity-50 hover:bg-opacity-75 bg-cover bg-center">
          <img className="h-full w-full rounded-full" src={pic} alt="Profile" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
