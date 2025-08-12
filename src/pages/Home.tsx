import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, Users, Award, BookOpen, Star } from 'lucide-react';

const Home = () => {
  const products = [
    {
      title: 'Industrial Robots',
      description: 'High-precision manufacturing robots for automated production lines',
      image: 'https://images.pexels.com/photos/2085831/pexels-photo-2085831.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      title: 'Service Robots',
      description: 'Customer service and hospitality robots for modern businesses',
      image: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      title: 'AI Solutions',
      description: 'Intelligent automation systems powered by advanced AI',
      image: 'https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
  ];

  const values = [
    {
      icon: <Target className="h-8 w-8 text-blue-600" />,
      title: 'Innovation',
      description: 'Pushing the boundaries of robotics technology with cutting-edge solutions',
    },
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: 'Collaboration',
      description: 'Working closely with clients to deliver customized robotic solutions',
    },
    {
      icon: <Award className="h-8 w-8 text-blue-600" />,
      title: 'Excellence',
      description: 'Maintaining the highest standards in product quality and service delivery',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Future of <span className="text-blue-600">Robotics</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Transform your business with our advanced robotic solutions. From industrial automation 
              to service robots, we deliver cutting-edge technology that drives efficiency and innovation.
            </p>
            <Link
              to="/products"
              className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold 
                       hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Explore Our Products
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Products Brief */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Product Range</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our comprehensive suite of robotic solutions designed to revolutionize your industry
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 
                         transform hover:-translate-y-2 overflow-hidden border border-gray-100"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{product.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{product.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/products"
              className="inline-flex items-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white 
                       px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 
                       transform hover:scale-105 transition-all duration-200 shadow-lg"
            >
              Explore Our Products
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Company Description */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">About RoboTech Solutions</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                With over a decade of experience in robotics and automation, RoboTech Solutions stands 
                at the forefront of technological innovation. We specialize in developing intelligent 
                robotic systems that enhance productivity, reduce costs, and improve safety across 
                various industries.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our team of expert engineers and researchers work tirelessly to create solutions that 
                not only meet today's challenges but anticipate tomorrow's needs. From concept to 
                deployment, we're your trusted partner in the journey towards automation excellence.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/2085832/pexels-photo-2085832.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Robotics team"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute inset-0 bg-blue-600 opacity-10 rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide our work and define our commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center p-8 bg-gray-50 rounded-xl hover:bg-white hover:shadow-lg 
                         transition-all duration-300 border border-gray-100"
              >
                <div className="flex justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Resources & Insights</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Stay updated with the latest trends, insights, and innovations in robotics
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-800 rounded-xl p-8 hover:bg-gray-700 transition-colors duration-300">
              <div className="flex items-center mb-4">
                <BookOpen className="h-6 w-6 text-blue-400 mr-3" />
                <h3 className="text-xl font-semibold">Technical Blogs</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Deep dive into robotics technology, implementation guides, and industry best practices
              </p>
              <div className="text-blue-400 text-sm">Latest: "AI Integration in Manufacturing Robots"</div>
            </div>

            <div className="bg-gray-800 rounded-xl p-8 hover:bg-gray-700 transition-colors duration-300">
              <div className="flex items-center mb-4">
                <Star className="h-6 w-6 text-blue-400 mr-3" />
                <h3 className="text-xl font-semibold">Client Reviews</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Real success stories and testimonials from our satisfied clients worldwide
              </p>
              <div className="text-blue-400 text-sm">⭐⭐⭐⭐⭐ "Exceptional automation solutions"</div>
            </div>
          </div>

          <div className="text-center">
            <Link
              to="/resources"
              className="inline-flex items-center bg-blue-600 text-white px-8 py-3 rounded-lg 
                       font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all duration-200"
            >
              View All Resources
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;