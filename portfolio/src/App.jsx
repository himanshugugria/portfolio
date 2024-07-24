import React from 'react';
import './App.css';
import { motion } from 'framer-motion';

function App() {
  return (
    <div className="bg-gray-100 text-gray-900">
      <header className="bg-teal-600 shadow fixed w-full z-10">
        <div className="container mx-auto px-6 py-3 flex justify-between items-center">
          <div className="text-lg font-semibold text-white">My Portfolio</div>
          <nav className="flex space-x-4">
            <a href="#projects" className="text-white hover:text-gray-200 transition-colors duration-200">Projects</a>
            <a href="#about" className="text-white hover:text-gray-200 transition-colors duration-200">About</a>
            <a href="#contact" className="text-white hover:text-gray-200 transition-colors duration-200">Contact</a>
          </nav>
        </div>
      </header>

      <section className="bg-cover bg-center h-screen">
        <div className="flex items-center justify-center h-full bg-gray-900">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            <h1 className="text-5xl font-bold text-white">Himanshu Gugria</h1>
            <p className="text-lg text-gray-300 mt-4">Backend Developer | MERN Stack Enthusiast</p>
            <div className="mt-6 flex justify-center space-x-4">
              <a href="https://www.linkedin.com/in/himanshu-gugria-b4674624b/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.23 0H1.77C.8 0 0 .78 0 1.75v20.5C0 23.22.8 24 1.77 24h20.46c.97 0 1.77-.78 1.77-1.75V1.75C24 .78 23.2 0 22.23 0zM7.12 20.44H3.56V9h3.56v11.44zm-1.78-13.1c-1.14 0-1.85-.75-1.85-1.68 0-.95.74-1.68 1.9-1.68 1.16 0 1.85.74 1.87 1.68 0 .93-.71 1.68-1.9 1.68zm15.13 13.1h-3.56v-6.21c0-1.56-.56-2.62-1.96-2.62-1.07 0-1.71.72-1.99 1.42-.1.23-.13.54-.13.85v6.56H9.6s.05-10.65 0-11.75h3.55v1.66c.47-.73 1.31-1.77 3.19-1.77 2.33 0 4.07 1.53 4.07 4.83v7.03z" />
                </svg>
              </a>
              <a href="https://github.com/himanshugugria" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.045c-3.338.724-4.033-1.415-4.033-1.415-.546-1.387-1.333-1.757-1.333-1.757-1.086-.742.083-.727.083-.727 1.205.086 1.838 1.234 1.838 1.234 1.067 1.829 2.803 1.3 3.49.997.107-.775.417-1.3.76-1.6-2.665-.3-5.467-1.332-5.467-5.93 0-1.31.468-2.38 1.236-3.22-.124-.303-.536-1.52.116-3.176 0 0 1.01-.322 3.31 1.23.957-.266 1.98-.399 3-.404 1.02.005 2.043.138 3 .404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.656.241 2.873.118 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.807 5.625-5.479 5.92.429.371.814 1.1.814 2.215v3.293c0 .322.217.694.825.576 4.765-1.591 8.2-6.084 8.2-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a href="mailto:himanshugugria@gmail.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 13.065L0 5v13h24V5l-12 8.065zM12 0C5.373 0 0 4.617 0 10.312v.124l12 8.075 12-8.075v-.124C24 4.617 18.627 0 12 0z" />
                </svg>
              </a>
            </div>
            <a href="#projects" className="mt-6 inline-block bg-teal-500 text-white px-6 py-3 rounded-full hover:bg-teal-700 transition-colors duration-200">View Projects</a>
          </motion.div>
        </div>
      </section>

      <section id="projects" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-semibold text-gray-700 text-center">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            <motion.div 
              className="bg-gray-100 shadow-md rounded-lg overflow-hidden"
              whileHover={{ scale: 1.05 }}
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">Cart</h3>
                <p className="mt-2 text-gray-600">React-redux based shopping cart</p>
                <a href="https://github.com/himanshugugria/react_learn/tree/7a9ec7390bda7ce59d35282e940d99e7b3651110/projectTut" target="_blank" rel="noopener noreferrer" className="mt-4 inline-block bg-teal-500 text-white px-4 py-2 rounded-full hover:bg-teal-700 transition-colors duration-200">
                  View on GitHub
                </a>
              </div>
            </motion.div>

            <motion.div 
              className="bg-gray-100 shadow-md rounded-lg overflow-hidden"
              whileHover={{ scale: 1.05 }}
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">E-commerce Backend</h3>
                <p className="mt-2 text-gray-600">Backend for e-commerce site using Node.js, Express.js, MongoDB Atlas</p>
                <a href="https://github.com/himanshugugria/e-commerce-MERN" target="_blank" rel="noopener noreferrer" className="mt-4 inline-block bg-teal-500 text-white px-4 py-2 rounded-full hover:bg-teal-700 transition-colors duration-200">
                  View on GitHub
                </a>
              </div>
            </motion.div>

            <motion.div 
              className="bg-gray-100 shadow-md rounded-lg overflow-hidden"
              whileHover={{ scale: 1.05 }}
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">Todos</h3>
                <p className="mt-2 text-gray-600">Todo-fullstack (MERN)</p>
                <a href="https://github.com/himanshugugria/todo-MERN" target="_blank" rel="noopener noreferrer" className="mt-4 inline-block bg-teal-500 text-white px-4 py-2 rounded-full hover:bg-teal-700 transition-colors duration-200">
                  View on GitHub
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="about" className="bg-teal-100 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-semibold text-gray-700 text-center">About Me</h2>
          <motion.p 
            className="mt-6 text-center text-gray-700"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Hello! My name is Himanshu Gugria.<br />I am a BTech undergrad at the National Institute of Technology Delhi.<br />I am a full-stack engineer. My tech stack is MERN.
          </motion.p>
        </div>
      </section>

      <section id="contact" className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-semibold text-gray-700 text-center">Contact</h2>
          <form className="max-w-lg mx-auto mt-6">
            <input type="text" placeholder="Your Name" className="w-full p-3 bg-gray-100 rounded-md border border-gray-300 mt-4" />
            <input type="email" placeholder="Your Email" className="w-full p-3 bg-gray-100 rounded-md border border-gray-300 mt-4" />
            <textarea placeholder="Your Message" className="w-full p-3 bg-gray-100 rounded-md border border-gray-300 mt-4"></textarea>
            <button type="submit" className="w-full p-3 bg-teal-600 text-white rounded-md mt-4 hover:bg-teal-700 transition-colors duration-200">Send Message</button>
          </form>
        </div>
      </section>

      <footer className="bg-gray-800 py-4">
        <div className="container mx-auto px-6 text-center text-white">
          &copy; 2024 Himanshu Gugria. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;
