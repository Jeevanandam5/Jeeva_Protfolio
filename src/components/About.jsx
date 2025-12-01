import React from "react";


const skills = {
  frontend: ["HTML5/CSS3", "Tailwind CSS", "Materialize CSS", "Bootstrap", "JavaScript (ES6+)", "React.js", "Redux Toolkit",],
  backend: ["Node.js", "Express.js", "RESTful APIs"],
  database: ["MongoDB", "Mongoose"],
  tools: ["Git/GitHub", "VS Code", "Postman", "Vite", "Figma"],
};

const Pill = ({ children }) => (
  <span className="inline-block px-3 py-1 rounded-full bg-gray-100 border border-gray-200 hover:bg-orange-400 hover:text-black text-gray-700 text-sm">
    {children}
  </span>
);

const SkillCard = ({ title, items }) => (
  <div className="bg-white rounded-2xl p-7 border border-gray-100 hover:border-gray-200 hover:shadow-lg shadow-sm">
    <div className="flex items-center gap-3 mb-6">
      <span className="w-1.5 h-8 bg-orange-400 rounded-md" />
      <h3 className="text-gray-900 text-lg font-semibold mt-2">{title}</h3>
    </div>
    <div className="flex flex-wrap gap-3 cursor-pointer">
      {items.map((it) => (
        <Pill key={it}>{it}</Pill>
      ))}
    </div>
  </div>
);

const About = () => {
  return (
    <section className="w-full bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">

        {/* About  */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl text-center font-extrabold text-gray-900">About Me</h2>

          <p className="text-gray-700 leading-relaxed font-bold text-base md:text-lg">
            I’m{" "}
            <span className="text-orange-400 font-semibold">Jeevanandam</span>, a passionate{" "}
            <span className="text-orange-400 font-semibold">MERN Stack developer</span> skilled in building
            responsive and scalable web applications. With strong expertise in{" "}
            <span className="text-orange-400 font-semibold">React.js</span>, Tailwind CSS, Node.js, Express.js,
            and MongoDB, I’ve developed real-world{" "}
            <span className="text-orange-400 font-semibold">full-stack projects</span> including e-commerce
            platforms and movie applications. I focus on clean UI design, efficient API integration, and smooth
            user experiences. As a <span className="text-orange-400 font-semibold">fresher</span>, I’m constantly
            learning, improving, and committed to building meaningful digital solutions that solve real-world problems.
          </p>
        </div>

        {/* Skill section */}
        <div className="relative mt-10">

          <div className="relative p-6 md:p-8">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-extrabold text-gray-900">My Skills</h3>
              <div className="mx-auto w-25 h-1 bg-orange-400 rounded-full mt-3" />
            </div>

            {/* skills grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 ">
              <SkillCard title="Frontend" items={skills.frontend} />
              <SkillCard title="Backend" items={skills.backend} />
              <SkillCard title="Database" items={skills.database} />
              <SkillCard title="Tools & Cloud" items={skills.tools} />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
