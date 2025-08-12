import React from 'react';
import { MapPin, Clock, Users, Award, Lightbulb, Heart, Briefcase, GraduationCap } from 'lucide-react';

const Career = () => {
  const jobOpenings = [
    {
      title: 'Senior Robotics Engineer',
      department: 'Engineering',
      location: 'San Francisco, CA',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Lead the development of next-generation industrial robots with advanced AI capabilities.',
    },
    {
      title: 'AI/ML Research Scientist',
      department: 'Research & Development',
      location: 'San Francisco, CA',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Develop cutting-edge machine learning algorithms for robotic perception and decision-making.',
    },
    {
      title: 'Product Manager - Service Robots',
      department: 'Product',
      location: 'London, UK',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Drive product strategy and roadmap for our service robot portfolio.',
    },
    {
      title: 'Field Service Technician',
      department: 'Customer Support',
      location: 'Multiple Locations',
      type: 'Full-time',
      experience: '2+ years',
      description: 'Provide on-site installation, maintenance, and support for robotic systems.',
    },
    {
      title: 'Sales Engineer',
      department: 'Sales',
      location: 'Tokyo, Japan',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Work with clients to understand their automation needs and propose technical solutions.',
    },
    {
      title: 'Software Developer - Robotics',
      department: 'Engineering',
      location: 'San Francisco, CA',
      type: 'Full-time',
      experience: '2+ years',
      description: 'Develop control software and user interfaces for robotic systems.',
    },
  ];

  const benefits = [
    {
      icon: <Award className="h-8 w-8 text-blue-600" />,
      title: 'Competitive Compensation',
      description: 'Industry-leading salaries with performance bonuses and equity options',
    },
    {
      icon: <Heart className="h-8 w-8 text-blue-600" />,
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance, dental, vision, and wellness programs',
    },
    {
      icon: <GraduationCap className="h-8 w-8 text-blue-600" />,
      title: 'Learning & Development',
      description: 'Continuous learning opportunities, conferences, and skill development programs',
    },
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: 'Collaborative Culture',
      description: 'Work with brilliant minds in a supportive, innovative environment',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Join Our Team</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Shape the future of robotics and automation with innovative minds
            </p>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Join RoboTech Solutions?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              At RoboTech Solutions, we're not just building robots – we're creating the future of human-machine 
              collaboration. Join a team of passionate innovators who are transforming industries through 
              cutting-edge robotics and AI technology.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Mission-Driven Culture</h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We believe in empowering our team members to push boundaries, think creatively, and make a 
                meaningful impact on the world. Our collaborative environment encourages innovation while 
                providing the support and resources needed to turn ambitious ideas into reality.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                From flexible work arrangements to cutting-edge research facilities, we invest in our people 
                because we know that great technology comes from great teams. Join us in building solutions 
                that will define the next generation of automation.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Team collaboration"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute inset-0 bg-blue-600 opacity-10 rounded-lg"></div>
            </div>
          </div>

          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="text-center p-6 bg-gray-50 rounded-xl hover:bg-white hover:shadow-lg 
                         transition-all duration-300 border border-gray-100"
              >
                <div className="flex justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Current Job Openings</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore exciting opportunities to advance your career in robotics and automation
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {jobOpenings.map((job, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 
                         transform hover:-translate-y-1 p-8 border border-gray-100"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{job.title}</h3>
                    <p className="text-blue-600 font-semibold">{job.department}</p>
                  </div>
                  <Briefcase className="h-6 w-6 text-gray-400" />
                </div>
                
                <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    {job.location}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {job.type}
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-1" />
                    {job.experience}
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">{job.description}</p>
                
                <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold 
                                 hover:bg-blue-700 transform hover:scale-105 transition-all duration-200">
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Life at Company */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Life at RoboTech Solutions</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experience a workplace where innovation meets collaboration, and every day brings new challenges and opportunities
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <img
                src="https://images.pexels.com/photos/3861458/pexels-photo-3861458.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Innovation lab"
                className="w-full h-64 object-cover rounded-lg shadow-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Innovation Labs</h3>
              <p className="text-gray-600">
                State-of-the-art research facilities equipped with the latest robotics technology and prototyping tools
              </p>
            </div>
            
            <div className="text-center">
              <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Team collaboration"
                className="w-full h-64 object-cover rounded-lg shadow-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Collaborative Spaces</h3>
              <p className="text-gray-600">
                Open workspaces designed to foster creativity, collaboration, and cross-team innovation
              </p>
            </div>
            
            <div className="text-center">
              <img
                src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Learning environment"
                className="w-full h-64 object-cover rounded-lg shadow-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Continuous Learning</h3>
              <p className="text-gray-600">
                Regular workshops, tech talks, and learning sessions to keep you at the forefront of technology
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Shape the Future?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Join our team of innovators and help us build the next generation of robotic solutions. 
              Your career in robotics starts here.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold 
                               hover:bg-gray-100 transform hover:scale-105 transition-all duration-200">
                View All Positions
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold 
                               hover:bg-white hover:text-blue-600 transition-all duration-200">
                Submit Resume
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Career;