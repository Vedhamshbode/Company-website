import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Products = () => {
  const products = [
    {
      id: 'industrial-robots',
      name: 'Industrial Robots',
      description: 'High-precision manufacturing robots designed for automated production lines with advanced safety features',
      image: 'https://images.pexels.com/photos/2085831/pexels-photo-2085831.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Manufacturing',
    },
    {
      id: 'service-robots',
      name: 'Service Robots',
      description: 'Customer service and hospitality robots equipped with AI for seamless human interaction',
      image: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Service',
    },
    {
      id: 'ai-solutions',
      name: 'AI Solutions',
      description: 'Intelligent automation systems powered by machine learning and advanced AI algorithms',
      image: 'https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Software',
    },
    {
      id: 'automation-systems',
      name: 'Automation Systems',
      description: 'Complete automation solutions for warehouses, logistics, and material handling',
      image: 'https://images.pexels.com/photos/1488463/pexels-photo-1488463.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Automation',
    },
    {
      id: 'medical-robots',
      name: 'Medical Robots',
      description: 'Precision surgical and healthcare robots for advanced medical procedures',
      image: 'https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Healthcare',
    },
    {
      id: 'security-robots',
      name: 'Security Robots',
      description: 'Autonomous security and surveillance robots for facility protection and monitoring',
      image: 'https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Security',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Products</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Explore our comprehensive range of robotic solutions designed to transform industries 
              and enhance operational efficiency
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 
                         transform hover:-translate-y-2 overflow-hidden group"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {product.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {product.description}
                  </p>
                  
                  <Link
                    to={`/product/${product.id}`}
                    className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 
                             transition-colors duration-200 group"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let our experts help you choose the right robotic solution for your specific needs
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-lg 
                     font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all duration-200"
          >
            Get Started Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Products;