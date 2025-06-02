const About = () => {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">About Us</h1>
        
        <div className="prose prose-lg">
          <p className="text-gray-600 mb-6">
            Welcome to our Full Stack Template, a comprehensive solution for modern web development. 
            This template is designed to provide developers with a robust starting point for building 
            scalable web applications.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Our Mission</h2>
          <p className="text-gray-600 mb-6">
            Our mission is to streamline the development process by providing a well-structured, 
            maintainable, and scalable template that follows industry best practices.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Technology Stack</h2>
          <ul className="space-y-4 text-gray-600">
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span><strong>Frontend:</strong> React with Vite for lightning-fast development</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span><strong>Styling:</strong> Tailwind CSS for utility-first styling</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span><strong>Backend:</strong> Express.js for robust server-side operations</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span><strong>Routing:</strong> React Router for seamless navigation</span>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default About; 