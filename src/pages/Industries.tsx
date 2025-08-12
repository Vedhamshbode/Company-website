import React from 'react';
import { Factory, Car, Building2, Plane, ShoppingCart, Shield, Heart, Zap } from 'lucide-react';

const Industries = () => {
  const industries = [
    {
      icon: <Factory className="h-12 w-12 text-blue-600" />,
      name: 'Manufacturing',
      description: 'Advanced industrial robots for precision manufacturing, assembly lines, and quality control processes.',
      image: 'https://images.pexels.com/photos/2085831/pexels-photo-2085831.jpeg?auto=compress&cs=tinysrgb&w=800',
      applications: ['Assembly Automation', 'Quality Inspection', 'Material Handling', 'Welding & Fabrication'],
      stats: '40% efficiency increase'
    },
    {
      icon: <Car className="h-12 w-12 text-blue-600" />,
      name: 'Automotive',
      description: 'Robotic solutions for vehicle assembly, painting, welding, and testing in automotive production.',
      image: 'https://images.pexels.com/photos/1634861/pexels-photo-1634861.jpeg?auto=compress&cs=tinysrgb&w=800',
      applications: ['Vehicle Assembly', 'Paint Systems', 'Engine Manufacturing', 'Quality Testing'],
      stats: '60% faster production'
    },
    {
      icon: <Heart className="h-12 w-12 text-blue-600" />,
      name: 'Healthcare',
      description: 'Medical robots for surgical procedures, patient care, rehabilitation, and laboratory automation.',
      image: 'https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=800',
      applications: ['Surgical Assistance', 'Patient Care', 'Laboratory Automation', 'Rehabilitation'],
      stats: '95% precision rate'
    },
    {
      icon: <ShoppingCart className="h-12 w-12 text-blue-600" />,
      name: 'E-commerce & Logistics',
      description: 'Warehouse automation, order fulfillment, and logistics robots for efficient supply chain management.',
      image: 'https://images.pexels.com/photos/1488463/pexels-photo-1488463.jpeg?auto=compress&cs=tinysrgb&w=800',
      applications: ['Warehouse Automation', 'Order Fulfillment', 'Inventory Management', 'Last-Mile Delivery'],
      stats: '70% faster processing'
    },
    {
      icon: <Building2 className="h-12 w-12 text-blue-600" />,
      name: 'Hospitality',
      description: 'Service robots for hotels, restaurants, and entertainment venues to enhance customer experience.',
      image: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=800',
      applications: ['Guest Services', 'Room Service', 'Concierge Assistance', 'Entertainment'],
      stats: '24/7 service availability'
    },
    {
      icon: <Shield className="h-12 w-12 text-blue-600" />,
      name: 'Security & Defense',
      description: 'Autonomous security robots for surveillance, patrol, and threat detection in various environments.',
      image: 'https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=800',
      applications: ['Perimeter Security', 'Surveillance Systems', 'Threat Detection', 'Emergency Response'],
      stats: '99.8% detection accuracy'
    },
    {
      icon: <Plane className="h-12 w-12 text-blue-600" />,
      name: 'Aerospace',
      description: 'Precision robotics for aircraft manufacturing, maintenance, and space exploration applications.',
      image: 'https://images.pexels.com/photos/2159065/pexels-photo-2159065.jpeg?auto=compress&cs=tinysrgb&w=800',
      applications: ['Aircraft Assembly', 'Component Testing', 'Maintenance Operations', 'Space Applications'],
      stats: '0.01mm precision'
    },
    {
      icon: <Zap className="h-12 w-12 text-blue-600" />,
      name: 'Energy & Utilities',
      description: 'Robotic solutions for power generation, maintenance, and inspection in energy infrastructure.',
      image: 'https://images.pexels.com/photos/2159062/pexels-photo-2159062.jpeg?auto=compress&cs=tinysrgb&w=800',
      applications: ['Power Plant Maintenance', 'Pipeline Inspection', 'Solar Panel Cleaning', 'Grid Monitoring'],
      stats: '50% maintenance cost reduction'
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Industries We Serve</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Transforming operations across diverse industries with cutting-edge robotic solutions
            </p>
          </div>
        </div>
      </section>

      {/* Industries Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Revolutionizing Industries Worldwide</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our robotic solutions are deployed across multiple industries, helping organizations achieve 
              unprecedented levels of efficiency, precision, and innovation. From manufacturing floors to 
              hospital operating rooms, our robots are making a difference.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center p-6 bg-blue-50 rounded-xl">
              <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-700">Active Deployments</div>
            </div>
            <div className="text-center p-6 bg-blue-50 rounded-xl">
              <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-700">Countries Served</div>
            </div>
            <div className="text-center p-6 bg-blue-50 rounded-xl">
              <div className="text-3xl font-bold text-blue-600 mb-2">99.5%</div>
              <div className="text-gray-700">Uptime Average</div>
            </div>
            <div className="text-center p-6 bg-blue-50 rounded-xl">
              <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-gray-700">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 
                         transform hover:-translate-y-2 overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={industry.image}
                    alt={industry.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-white p-2 rounded-lg shadow-lg">
                    {industry.icon}
                  </div>
                  <div className="absolute bottom-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {industry.stats}
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{industry.name}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{industry.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Applications:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {industry.applications.map((app, appIndex) => (
                        <div key={appIndex} className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                          {app}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold 
                                   hover:bg-blue-700 transform hover:scale-105 transition-all duration-200">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real results from our industry partnerships
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white p-8 rounded-xl">
              <Factory className="h-12 w-12 mb-4" />
              <h3 className="text-xl font-bold mb-3">Global Manufacturing Corp</h3>
              <p className="text-blue-100 mb-4">
                "RoboTech's industrial robots increased our production efficiency by 40% while reducing defects by 60%."
              </p>
              <div className="text-sm text-blue-200">Manufacturing Industry</div>
            </div>

            <div className="bg-gradient-to-br from-green-600 to-teal-700 text-white p-8 rounded-xl">
              <Heart className="h-12 w-12 mb-4" />
              <h3 className="text-xl font-bold mb-3">Metropolitan Hospital</h3>
              <p className="text-green-100 mb-4">
                "The surgical robots have revolutionized our operating procedures with 95% precision in complex surgeries."
              </p>
              <div className="text-sm text-green-200">Healthcare Industry</div>
            </div>

            <div className="bg-gradient-to-br from-purple-600 to-pink-700 text-white p-8 rounded-xl">
              <ShoppingCart className="h-12 w-12 mb-4" />
              <h3 className="text-xl font-bold mb-3">E-Commerce Giant</h3>
              <p className="text-purple-100 mb-4">
                "Warehouse automation reduced order processing time by 70% and improved accuracy to 99.9%."
              </p>
              <div className="text-sm text-purple-200">Logistics Industry</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Industry?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let our experts help you identify the perfect robotic solution for your industry needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold 
                             hover:bg-blue-700 transform hover:scale-105 transition-all duration-200">
              Schedule Consultation
            </button>
            <button className="border border-gray-400 text-white px-8 py-4 rounded-lg font-semibold 
                             hover:bg-white hover:text-gray-900 transition-all duration-200">
              Download Industry Guide
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Industries;