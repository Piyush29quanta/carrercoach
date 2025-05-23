import React from 'react';
import { Droplets, SunMedium, Home, Wrench, ChevronRight, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin as LinkedIn } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="bg-white shadow-md fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-blue-600">ADV Cleaning Co.</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-gray-700 hover:text-blue-600">Services</a>
              <a href="#technology" className="text-gray-700 hover:text-blue-600">Technology</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600">About</a>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Revolutionary Cleaning Solutions Powered by Technology
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Transforming the cleaning industry with smart solutions for water tanks, solar panels, and residential spaces.
              </p>
              <button className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg hover:bg-blue-700 transition flex items-center">
                Learn More <ChevronRight className="ml-2" />
              </button>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80"
                alt="Smart Cleaning Technology"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Smart Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition">
              <Droplets className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Water Tank Cleaning</h3>
              <p className="text-gray-600">Advanced robotics and IoT sensors for thorough and efficient water tank maintenance.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition">
              <SunMedium className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Solar Panel Cleaning</h3>
              <p className="text-gray-600">Automated cleaning systems that optimize solar panel efficiency and performance.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition">
              <Home className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-4">House Cleaning</h3>
              <p className="text-gray-600">Smart scheduling and AI-powered cleaning solutions for residential spaces.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section id="technology" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Technology Edge</h2>
            <p className="text-xl text-gray-600">Leveraging cutting-edge technology for superior cleaning results</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <img 
              src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80"
              alt="Cleaning Technology"
              className="rounded-lg shadow-xl"
            />
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Wrench className="w-8 h-8 text-blue-600 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Smart Automation</h3>
                  <p className="text-gray-600">IoT-enabled cleaning devices with real-time monitoring and reporting.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Wrench className="w-8 h-8 text-blue-600 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">AI-Powered Solutions</h3>
                  <p className="text-gray-600">Machine learning algorithms for optimal cleaning patterns and resource utilization.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Wrench className="w-8 h-8 text-blue-600 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Data Analytics</h3>
                  <p className="text-gray-600">Comprehensive analytics dashboard for performance tracking and optimization.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">ADV Cleaning Co.</h3>
              <p className="text-gray-400">Revolutionizing the cleaning industry through technology and innovation.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 mr-2" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 mr-2" />
                  <span>info@advcleaningco.com</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 mr-2" />
                  <span>123 Tech Street, Innovation City</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                <li>Water Tank Cleaning</li>
                <li>Solar Panel Cleaning</li>
                <li>House Cleaning</li>
                <li>Commercial Solutions</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <Facebook className="w-6 h-6 cursor-pointer hover:text-blue-400" />
                <Twitter className="w-6 h-6 cursor-pointer hover:text-blue-400" />
                <Instagram className="w-6 h-6 cursor-pointer hover:text-blue-400" />
                <LinkedIn className="w-6 h-6 cursor-pointer hover:text-blue-400" />
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">&copy; 2025 ADV Cleaning Co. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;