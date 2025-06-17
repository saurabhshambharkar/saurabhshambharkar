const About = () => {
  return (
    <div name="about" className= "max-w-7xl mx-auto py-40">
      <h2 className="text-4xl font-bold mb-12 text-center relative pb-4">
        About Me
        <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-red-500 to-red-700"></span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start ">
        <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <p className="text-lg text-gray-700 mb-4 hover:translate-x-2 transition-transform dark:text-white">
            <strong className="text-red-500">Name:</strong> Saurabh Shambharkar
          </p>
          <p className="text-lg text-gray-700 mb-4 hover:translate-x-2 transition-transform dark:text-white">
            <strong className="text-red-500">Higher Education:</strong> Bachelor
            of Engineering (Electronics and Telecommunication Engineering)
          </p>
          <p className="text-lg text-gray-700 mb-4 hover:translate-x-2 transition-transform dark:text-white">
            <strong className="text-red-500">Address:</strong> Maharashtra,
            India.
          </p>
        </div>

        <div className="p-4 animate-fadeIn delay-400">
          <p className="text-lg text-gray-600 dark:text-white leading-relaxed text-justify">
           I’m Saurabh Shambharkar, a MERN Stack Developer passionate about creating responsive and visually engaging web applications. 
           I started my development journey in 2024, combining creativity with code to build smooth and user-friendly digital experiences. 
           Skilled in MongoDB, Express.js, React.js, Node.js, HTML, CSS, and JavaScript, I focus on clean design, performance, and scalable architecture. Always eager to learn and collaborate on impactful projects.
          </p>
          <p className="text-lg text-gray-600 dark:text-white leading-relaxed text-justify mt-6">
           I specialize in HTML, CSS, JavaScript, React.js, Redux, and have also gained hands-on experience with Node.js, Express, and MongoDB. I focus on building clean, responsive, and user-friendly interfaces, 
           and I'm always eager to learn, explore new technologies, and turn ideas into meaningful digital experiences.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
