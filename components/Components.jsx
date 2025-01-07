const skills = {
  Knowledge: [
    "Experience with Deployment and Handling of Webpages",
    "Full Stack Experience",
    "API Integration",
    "Developing Machine Learning Applications",
  ],
  Programming: [
    "Java",
    "C++",
    "Python",
    "MatLab",
    "JavaScript",
    "HTML",
    "CSS",
    "PHP",
    "Twig",
    "SQL",
  ],
  Tech: [
    "Docker",
    "Drupal",
    "Platform.sh",
    "DDev",
    "Apache Web Server",
    "Postman",
  ],
  LibrariesDatabases: [
    "MySQL",
    "Symfony",
    "Ajax",
    "jQuery",
    "NumPy",
  ],
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Object.keys(skills).map((category, index) => (
            <div key={index} className="bg-white shadow rounded-lg p-6">
              <h3 className="text-2xl font-semibold mb-4">{category}</h3>
              <ul className="list-disc list-inside">
                {skills[category].map((skill, idx) => (
                  <li key={idx} className="text-gray-700 mb-1">{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

