import React from 'react'

const Skills = () => {
  return (
    
      <div className="flex flex-col items-center md:items-start p-8 bg-gray-200">
  <h2 className="text-3xl font-bold mb-6 ">Skills</h2>
  
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    
    <div className="p-4 bg-gray-100 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-2 text-cyan-700">HTML</h3>
      <p className="text-gray-700">I have learned HTML and am comfortable creating the structure of web pages.</p>
    </div>

    <div className="p-4 bg-gray-100 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-2 text-cyan-700">CSS</h3>
      <p className="text-gray-700">I am proficient in CSS and can style websites to be visually appealing and responsive.</p>
    </div>
    
    <div className="p-4 bg-gray-100 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-2 text-cyan-700">TypeScript</h3>
      <p className="text-gray-700">I have learned TypeScript and can use it for type-safe JavaScript development.</p>
    </div>
    
    <div className="p-4 bg-gray-100 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-2 text-cyan-700">GitHub</h3>
      <p className="text-gray-700">I am familiar with GitHub and understand version control for managing code projects.</p>
    </div>

    <div className="p-4 bg-gray-100 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-2 text-cyan-700">Next.js</h3>
      <p className="text-gray-700">I am currently learning Next.js for building fast and scalable web applications.</p>
    </div>

  </div>
</div>

    
  )
}

export default Skills
