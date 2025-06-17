import { TypeAnimation } from "react-type-animation";

const Home = () => {
  const handleDownloadResume = () => {
    const fileId = "1jjvrJRAVd0rUtR03qNUxmLRaNHb8lpKM";
    window.open(`https://drive.google.com/file/d/${fileId}/preview`, "_blank");
  
    const a = document.createElement("a");
    a.href = `https://drive.google.com/uc?export=download&id=${fileId}`;
    a.download = "Saurabh-Shambharkar-Resume.pdf";
    a.click();
  };
  
  // https://drive.google.com/file/d/1jjvrJRAVd0rUtR03qNUxmLRaNHb8lpKM/view?usp=sharing
  
  return (
    <div name="home" className="h-screen flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <img
          src="/Profile.jpeg"
          alt="Saurabh"
          className="border-8 border-gray-500 rounded-full mx-auto my-6 w-80 h-80"
        />
        <h1 className="text-5xl font-bold mb-4">Hi I'm Saurabh Shambharkar</h1>
        <div className="text-3xl text-red-700 h-12">
          <TypeAnimation
            sequence={["MERN Stack Developer", 2000, "", 500]}
            speed={50}
            repeat={Infinity}
            wrapper="span"
          />
        </div>
        <button
          onClick={handleDownloadResume}
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 mt-8 rounded-lg transition-colors"
        >
          Download Resume
        </button>
      </div>
    </div>
  );
};

export default Home;