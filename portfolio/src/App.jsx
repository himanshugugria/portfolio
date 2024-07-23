import React from 'react';
import './App.css';

function App() {
    return (
        <div className="bg-gray-100 text-gray-900">
            <header className="bg-white shadow fixed w-full z-10">
                <div className="container mx-auto px-6 py-3 flex justify-between items-center">
                    <div className="text-lg font-semibold text-gray-700">My Portfolio</div>
                    <nav className="flex space-x-4">
                        <a href="#projects" className="text-gray-700 hover:text-gray-900">Projects</a>
                        <a href="#about" className="text-gray-700 hover:text-gray-900">About</a>
                        <a href="#contact" className="text-gray-700 hover:text-gray-900">Contact</a>
                    </nav>
                </div>
            </header>

            <section className="bg-cover bg-center h-screen">
                <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold text-white">Welcome to My Portfolio</h1>
                        <p className="text-lg text-gray-300 mt-4">Showcasing my work and projects</p>
                        <a href="#projects" className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded-full">View Projects</a>
                    </div>
                </div>
            </section>

            <section id="projects" className="py-16">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-semibold text-gray-700 text-center">Projects</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                        <div className="bg-white shadow-md rounded-lg overflow-hidden">
                            {/* <img src="assets/images/project1.jpg" alt="Project 1" className="w-full h-48 object-cover" /> */}
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-gray-800">cart</h3>
                                <p className="mt-2 text-gray-600">React-redux based shopping cart</p>
                                <a href="https://github.com/himanshugugria/react_learn/tree/7a9ec7390bda7ce59d35282e940d99e7b3651110/projectTut" target="_blank" rel="noopener noreferrer" className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700">
                                    View on GitHub
                                </a>
                            </div>

                        </div>
                        <div className="bg-white shadow-md rounded-lg overflow-hidden">
                            {/* <img src="assets/images/project2.jpg" alt="Project 2" className="w-full h-48 object-cover" /> */}
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-gray-800">e-commerce Backend</h3>
                                <p className="mt-2 text-gray-600">Backend for e-commerce site using node.js express.js MongoDB atlas</p>
                                <a href="https://github.com/himanshugugria/e-commerce-MERN" target="_blank" rel="noopener noreferrer" className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700">
                                    View on GitHub
                                </a>
                            </div>

                        </div>
                        <div className="bg-white shadow-md rounded-lg overflow-hidden">
                            {/* <img src="assets/images/project3.jpg" alt="Project 3" className="w-full h-48 object-cover" /> */}
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-gray-800">Todos</h3>
                                <p className="mt-2 text-gray-600">todo-fullstack (MERN)</p>
                                <a href="https://github.com/himanshugugria/todo-MERN" target="_blank" rel="noopener noreferrer" className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700">
                                    View on GitHub
                                </a>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <section id="about" className="bg-gray-200 py-16">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-semibold text-gray-700 text-center">About Me</h2>
                    <p className="mt-6 text-center text-black">Hello! My name is Himanshu Gugria.<br/>I am a BTech undergrad at National Institute of Technology Delhi.<br/>I am a fullStack Engineer.My tech. stack is MERN</p>
                </div>
            </section>

            <section id="contact" className="py-16">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-semibold text-gray-700 text-center">Contact</h2>
                    <form className="max-w-lg mx-auto mt-6">
                        <input type="text" placeholder="Your Name" className="w-full p-3 bg-gray-100 rounded-md border border-gray-300 mt-4" />
                        <input type="email" placeholder="Your Email" className="w-full p-3 bg-gray-100 rounded-md border border-gray-300 mt-4" />
                        <textarea placeholder="Your Message" className="w-full p-3 bg-gray-100 rounded-md border border-gray-300 mt-4"></textarea>
                        <button type="submit" className="w-full p-3 bg-blue-600 text-white rounded-md mt-4">Send Message</button>
                    </form>
                </div>
            </section>

            <footer className="bg-gray-800 py-4">
                <div className="container mx-auto px-6 text-center text-white">
                    &copy; 2024 My Portfolio. All rights reserved.
                </div>
            </footer>
        </div>
    );
}

export default App;
