import React from "react";

const certifications = [
    {
        id: 1,
        title: "JavaScript Certification",
        pdf:"https://www.hackerrank.com/certificates/ea0e3cd8b32a",
        description: "Completed JavaScript Basics certification on HackerRank, demonstrating strong knowledge of core JavaScript concepts.",
    }
      ,
  {
    id: 2,
    title: "Achievement",
    pdf:"https://drive.google.com/file/d/1ekQIDE3w4GD-h7rhfJ2ztC77K-VfCg-Y/view?usp=drive_link",
    description: "Won 1st prize in both paper and project presentation at Veda 2k24 in Aditya University.",
  },
  {
    id: 3,
    title: "C++ Certification",
    pdf:'https://www.hackerrank.com/profile/sifiyan100',
    description: "Completed C++ certification on HackerRank, demonstrating proficiency in programming with C++.",
  },
  
  {
    id: 4,
    title: "Java Certification",
    pdf:"https://www.hackerrank.com/certificates/63dc642dc96d",
    description: "Completed java certification on HackerRank, demonstrating proficiency in programming with java.",
  },
];

const Certification = () => {
  return (
    <div className="bg-black text-white py-20" id="certification">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Certifications & Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {certifications.map((certification) => (
            <div
              key={certification.id}
              className="bg-gray-800 px-6 pb-6 rounded-lg hover:shadow-lg transform 
              transition-transform duration-300 hover:scale-105"
            >
              <div
                className="text-right text-2xl font-bold text-transparent bg-clip-text 
              bg-gradient-to-r from-green-600 to-blue-400"
              >
                {certification.id}
              </div>
              <h3 className="mt-2 text-2xl font-bold text-transparent bg-clip-text 
              bg-gradient-to-r from-green-400 to-blue-500">
                {certification.title}
              </h3>
              <p className="mt-2 text-gray-300">{certification.description}</p>
              <a href={certification.pdf} className="mt-4 inline-block bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 mx-2 rounded-full hover:opacity-80 transition duration-300">Check It</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certification;
