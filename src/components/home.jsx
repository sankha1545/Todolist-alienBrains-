import { Link } from "react-router-dom";
import homeImg from "../assets/home2.jpg";
import aboutImg from "../assets/about.jpg"; // Add an image for the About Us section
import "@fortawesome/fontawesome-free/css/all.min.css";


function Home() {
  return (
    <>
      {/* Navbar */}
      <nav className=" bg-slate-100 py-4 shadow-md">
        <div className="container mx-auto px-6 flex items-center">
          <div className="text-2xl font-bold text-amber-600" data-aos="zoom-in" data-aos-duration="1000">
            PLANO
          </div>
        </div>
      </nav>

      {/* Main Section */}
      <div className="flex flex-col lg:flex-row w-full min-h-screen bg-gradient-to-r from-white to-orange-100">
        {/* Left Content Box */}
        <div className="bg-orange-100 w-full lg:w-1/2 p-8 flex flex-col justify-center">
          <h1 className="text-4xl font-semibold text-brown-800 mb-6">
            Get ready to <b className="text-gray-500">supercharge</b> your goal-setting and planning with <b className="text-yellow-500">PLANO</b>
          </h1>
          <Link to="/todo">
            <button className="mt-6 px-6 py-3 bg-yellow-400 text-white rounded-full hover:bg-yellow-500 shadow-md transition duration-300">
              Get Started
            </button>
          </Link>
          <p className="text-gray-500 mt-4">Boost your efficiency with our Productivity website</p>
        </div>

        {/* Right Image Box */}
        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <img src={homeImg} alt="PLANO" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* About Us Section */}
      <section className="bg-white py-16 px-6 md:px-12">
        <div className="container mx-auto flex flex-col lg:flex-row items-center">
          {/* Left Image */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <img src={aboutImg} alt="About Us" className="rounded-lg shadow-lg w-full md:w-[80%] object-cover" />
          </div>

          {/* Right Content */}
          <div className="w-full lg:w-1/2 mt-8 lg:mt-0 lg:pl-12 text-center lg:text-left">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">About <span className="text-yellow-500">PLANO</span></h2>
            <p className="text-gray-600 text-lg mb-6">
              PLANO is a cutting-edge productivity tool designed to help individuals and teams streamline their goal-setting and task management.
              Our mission is to empower users with intuitive features that make organization effortless.
            </p>
            <div className="flex justify-center lg:justify-start space-x-4">
              <Link to="/about">
                <button className="px-6 py-3 bg-yellow-400 text-white rounded-full hover:bg-yellow-500 shadow-md transition duration-300">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-white to-orange-200 py-16 mt-40 w-full">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
          <div>
            <h1 className="text-yellow-500 text-3xl font-bold">PLANO</h1>
            <p className="text-sm text-black mt-4">
            PLANO is a productivity-focused to-do list website designed to help users efficiently manage tasks and stay organized. With a clean and user-friendly interface, it allows users to add, track, and complete tasks seamlessly, boosting productivity and simplifying goal-setting.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-4">Company</h4>
            <ul className="text-gray-700 space-y-2">
              <li><a href="#" className="hover:text-red-500">About Us</a></li>
              <li><a href="#" className="hover:text-red-500">Our Services</a></li>
              <li><a href="#" className="hover:text-red-500">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-red-500">Affiliate Program</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-4">Get In Touch</h4>
            <ul className="text-gray-700 space-y-2">
              <li>+91 0123-4567-89</li>
              <li>sankhasubhradas1@gmail.com</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-200 p-3 rounded-full hover:bg-white transition duration-300"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="bg-gray-200 p-3 rounded-full hover:bg-white transition duration-300"><i className="fab fa-twitter"></i></a>
              <a href="#" className="bg-gray-200 p-3 rounded-full hover:bg-white transition duration-300"><i className="fab fa-instagram"></i></a>
              <a href="#" className="bg-gray-200 p-3 rounded-full hover:bg-white transition duration-300"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Home;
