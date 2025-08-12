import React from 'react';
import { Users, Target, Award, Lightbulb } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">About Us</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Leading the future of robotics with innovative solutions and cutting-edge technology
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="text-center lg:text-left">
              <Target className="h-12 w-12 text-blue-600 mb-4 mx-auto lg:mx-0" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                To revolutionize industries through innovative robotic solutions that enhance productivity, 
                safety, and efficiency while creating a better future for businesses and society.
              </p>
            </div>
            <div className="text-center lg:text-left">
              <Lightbulb className="h-12 w-12 text-blue-600 mb-4 mx-auto lg:mx-0" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                To be the global leader in robotics innovation, creating intelligent automation solutions 
                that seamlessly integrate into everyday operations across all industries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Story</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From a small startup to a global robotics leader
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Company founders"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Founded in 2010 by a team of passionate engineers and robotics enthusiasts, RoboTech Solutions 
                began with a simple vision: to make advanced robotics accessible to businesses of all sizes. 
                What started as a small research lab has grown into a global company serving clients across 
                multiple industries.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Today, we continue to push the boundaries of what's possible in robotics, combining cutting-edge 
                AI with precision engineering to create solutions that not only meet current needs but anticipate 
                future challenges. Our commitment to innovation and excellence has made us a trusted partner for 
                companies worldwide.
              </p>
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
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gray-50 rounded-xl">
              <Target className="h-12 w-12 text-blue-600 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Innovation</h3>
              <p className="text-gray-600">
                Continuously pushing technological boundaries to create groundbreaking solutions
              </p>
            </div>
            <div className="text-center p-8 bg-gray-50 rounded-xl">
              <Users className="h-12 w-12 text-blue-600 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Collaboration</h3>
              <p className="text-gray-600">
                Working closely with clients to understand their unique needs and challenges
              </p>
            </div>
            <div className="text-center p-8 bg-gray-50 rounded-xl">
              <Award className="h-12 w-12 text-blue-600 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Excellence</h3>
              <p className="text-gray-600">
                Maintaining the highest standards in product quality and customer service
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Leadership Team</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Meet the visionaries leading our robotics revolution
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Dr. Sarah Chen',
                role: 'Chief Executive Officer',
                image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=400',
                bio: 'Former MIT robotics professor with 15+ years in AI research'
              },
              {
                name: 'Michael Rodriguez',
                role: 'Chief Technology Officer',
                image: 'https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=400',
                bio: 'Pioneer in industrial automation with 12 patents in robotics'
              },
              {
                name: 'Dr. Emily Watson',
                role: 'Head of Research',
                image: 'https://images.pexels.com/photos/3861458/pexels-photo-3861458.jpeg?auto=compress&cs=tinysrgb&w=400',
                bio: 'Leading expert in machine learning and computer vision'
              }
            ].map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;