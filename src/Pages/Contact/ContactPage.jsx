import { useForm } from "react-hook-form";
import { BiLogoGmail } from "react-icons/bi";
import { FaFacebookF, FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      // Send email or perform other actions with the form data
      console.log("Form data:", data);

      // Reset the form and display success toast message
      reset();
      toast.success("Message sent successfully!");
    } catch (error) {
      console.error("Failed to send message:", error);
      toast.error("Failed to send message. Please try again later.");
    }
  };

  return (
    <div className="bg-gray-900 min-h-screen flex items-center justify-center">
      <div className="max-w-md mx-auto p-6">
        <h2 className="text-2xl font-bold mb-4 text-white">Contact Form</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Social media links */}

          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-300 font-bold mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              {...register("name", { required: true })}
            />
            {errors.name && (
              <span className="text-red-500">Name is required</span>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-300 font-bold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
            />
            {errors.email && (
              <span className="text-red-500">Valid email is required</span>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-gray-300 font-bold mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              {...register("message", { required: true })}
            />
            {errors.message && (
              <span className="text-red-500">Message is required</span>
            )}
          </div>

          <button
            type="submit"
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 text-white font-medium rounded-lg text-sm px-5 py-2.5"
          >
            Contact me
          </button>
        </form>
        <br />
        <span className="font-bold text-white items-center">Or</span>
        <div className="mt-3 flex text-white">
          <a
            href="https://www.facebook.com/Rafsan0/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF className="rounded-full hover:bg-gradient-to-l from-purple-500 to-pink-500 p-1 h-8 w-8" />
          </a>
          <a
            href="https://www.linkedin.com/in/md-omar-faruk-610239280/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn className="rounded-full hover:bg-gradient-to-l from-purple-500 to-pink-500 p-1 h-8 w-8" />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="rounded-full hover:bg-gradient-to-l from-purple-500 to-pink-500 p-1 h-8 w-8" />
          </a>
          <a
            href="https://github.com/Rafsanfaruk"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="rounded-full hover:bg-gradient-to-l from-purple-500 to-pink-500 p-1 h-8 w-8" />
          </a>
          <a href="mailto:mdomarfaruk2084@gmail.com">
            <BiLogoGmail className="rounded-full hover:bg-gradient-to-l from-purple-500 to-pink-500 p-1 h-8 w-8" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
