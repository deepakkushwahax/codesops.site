import React, { useState } from 'react';
import { Rocket, Cloud, Shield, ArrowRight, Github, Linkedin, Youtube, Instagram, Server, Code, Database, Cpu } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const slides = [
    {
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=80",
      title: "Your Gateway to Scalable Cloud Solutions",
      subtitle: "Transform your business with our comprehensive cloud services"
    },
    {
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1920&q=80",
      title: "Enterprise-Grade DevOps Solutions",
      subtitle: "Accelerate your development pipeline with modern tools"
    },
    {
      image: "https://images.unsplash.com/photo-1560732488-6b0df240254a?auto=format&fit=crop&w=1920&q=80",
      title: "Secure Infrastructure as a Service",
      subtitle: "Build your future on a foundation of reliability"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800">
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Code className="h-8 w-8 text-blue-500" />
            <span className="ml-2 text-2xl font-bold text-white">Codesops</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <div className="relative group">
              <button className="text-gray-300 hover:text-white">Services</button>
              <div className="absolute left-0 mt-2 w-48 bg-slate-800 rounded-lg shadow-xl py-2 hidden group-hover:block">
                <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-slate-700 hover:text-white">
                  <Server className="inline-block w-4 h-4 mr-2" />
                  Cloud Services
                </a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-slate-700 hover:text-white">
                  <Cpu className="inline-block w-4 h-4 mr-2" />
                  DevOps
                </a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-slate-700 hover:text-white">
                  <Database className="inline-block w-4 h-4 mr-2" />
                  IaaS
                </a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-slate-700 hover:text-white">
                  <Shield className="inline-block w-4 h-4 mr-2" />
                  Security
                </a>
              </div>
            </div>
            <a href="#" className="text-gray-300 hover:text-white">About</a>
            <a href="#contact" className="text-gray-300 hover:text-white">Contact</a>
          </div>
          <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors">
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero Section with Slider */}
      <div className="relative">
        <Swiper
          modules={[Autoplay, EffectFade, Navigation]}
          effect="fade"
          navigation
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop
          className="h-[600px]"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="relative h-full">
                <div className="absolute inset-0">
                  <img 
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                </div>
                <div className="relative container mx-auto px-6 h-full flex items-center">
                  <div className="max-w-2xl">
                    <div className="inline-flex items-center bg-blue-900/30 px-4 py-2 rounded-full mb-6">
                      <Shield className="h-5 w-5 text-blue-400 mr-2" />
                      <span className="text-blue-400">Enterprise Solutions</span>
                    </div>
                    <h1 className="text-5xl font-bold text-white mb-6">
                      {slide.title}
                    </h1>
                    <p className="text-gray-300 mb-8 text-lg">
                      {slide.subtitle}
                    </p>
                    <div className="flex space-x-4">
                      <button className="bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition-colors flex items-center">
                        Get Started <ArrowRight className="ml-2 h-5 w-5" />
                      </button>
                      <button className="border border-gray-600 text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors">
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="bg-slate-800/50 p-8 rounded-xl">
            <div className="bg-blue-500/10 p-3 rounded-lg w-fit">
              <Rocket className="h-6 w-6 text-blue-500" />
            </div>
            <h3 className="text-xl font-bold text-white mt-4">Cloud Migration</h3>
            <p className="text-gray-400 mt-2">Seamlessly migrate your infrastructure to the cloud with zero downtime.</p>
          </div>
          <div className="bg-slate-800/50 p-8 rounded-xl">
            <div className="bg-blue-500/10 p-3 rounded-lg w-fit">
              <Shield className="h-6 w-6 text-blue-500" />
            </div>
            <h3 className="text-xl font-bold text-white mt-4">Security</h3>
            <p className="text-gray-400 mt-2">Enterprise-grade security solutions to protect your valuable data.</p>
          </div>
          <div className="bg-slate-800/50 p-8 rounded-xl">
            <div className="bg-blue-500/10 p-3 rounded-lg w-fit">
              <Cloud className="h-6 w-6 text-blue-500" />
            </div>
            <h3 className="text-xl font-bold text-white mt-4">Optimization</h3>
            <p className="text-gray-400 mt-2">Optimize your cloud resources for maximum efficiency and cost savings.</p>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div id="contact" className="container mx-auto px-6 py-20">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Get in Touch</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md bg-slate-800 border border-slate-600 text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md bg-slate-800 border border-slate-600 text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-300">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md bg-slate-800 border border-slate-600 text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="mt-1 block w-full rounded-md bg-slate-800 border border-slate-600 text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-800">
        <div className="container mx-auto px-6 py-8">
          <div className="flex justify-between items-center">
            <div className="text-gray-400">© 2024 Codesops. All rights reserved.</div>
            <div className="flex space-x-4">
              <Github className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
              <Linkedin className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
              <Youtube className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
              <Instagram className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;