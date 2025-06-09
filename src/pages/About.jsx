export default function About() {
  return (
    <section className="p-8 bg-white min-h-screen">
       <div className="mb-12">
        <h1 className="text-4xl font-light text-gray-800 mb-4 tracking-wide">ABOUT</h1>
        <div className="h-1 w-24 bg-gradient-to-r from-teal-500 to-cyan-500 rounded"></div>
      </div>
      <div className="bg-white grid grid-cols-1 p-6 text-gray-800 font-light text-lg leading-relaxed" style={{ backgroundImage: "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)", backgroundSize: "20px 20px" }}>
        
        <blockquote className="border-l-4 border-rose-700 pl-4 text-2xl text-rose-700 mb-6">
          Mission-driven full stack developer with a passion for crafting clean UI, building smart factory tools, and solving real-world challenges through code.
        </blockquote>

        <p className="mb-4">
          My career path has been anything but linear—beginning in the chemical engineering space and evolving through data science, analytics, and full stack web development. Along the way, I’ve had the privilege of working with global teams in industries like manufacturing, market research, and chemicals.
        </p>

        <p className="mb-4">
          Whether developing smart factory applications from scratch, automating processes using Python, or deploying dashboards with Google Cloud, I strive to deliver reliable and meaningful digital solutions. I bring a strong foundation in both frontend technologies like Vue.js and React, and backend services using Flask, MongoDB, and Docker.
        </p>

        <p className="mb-4">
          I’ve always enjoyed working at the intersection of data, design, and collaboration—whether I’m enhancing user experiences with reusable UI components, or reducing hours of manual work with efficient automation scripts.
        </p>

        <p className="mb-4">
          Currently based in Toronto, I’m always eager to learn new technologies and collaborate on impactful software products.
        </p>
      </div>
    </section>
  );
}
