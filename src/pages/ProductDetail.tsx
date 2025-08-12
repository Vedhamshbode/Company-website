import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Check, Star, Shield, Zap, Settings } from 'lucide-react';

const ProductDetail = () => {
  const { id } = useParams();

  const productData: { [key: string]: any } = {
    'industrial-robots': {
      name: 'Industrial Robots',
      category: 'Manufacturing',
      tagline: 'Precision Engineering for Modern Manufacturing',
      description: 'Our industrial robots represent the pinnacle of manufacturing automation technology. Designed for high-precision operations, these robots deliver consistent quality, enhanced safety, and unprecedented efficiency in production environments.',
      longDescription: 'Built with advanced servo motors, precision sensors, and intelligent control systems, our industrial robots can handle complex manufacturing tasks with micron-level accuracy. From assembly and welding to quality inspection and packaging, these robots adapt to various production requirements while maintaining the highest standards of reliability and performance.',
      images: [
        'https://images.pexels.com/photos/2085831/pexels-photo-2085831.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1634861/pexels-photo-1634861.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1642125/pexels-photo-1642125.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      features: [
        'High-precision servo motors with 0.1mm accuracy',
        '6-axis articulated arm design for maximum flexibility',
        'Advanced safety systems with collision detection',
        'Integration with existing manufacturing systems',
        '24/7 operation capability with minimal maintenance',
        'Real-time quality control and monitoring'
      ],
      specifications: {
        'Payload Capacity': 'Up to 50kg',
        'Reach': '1.8m maximum reach',
        'Repeatability': '±0.05mm',
        'Operating Temperature': '-10°C to +50°C',
        'Protection Rating': 'IP65',
        'Power Consumption': '3.5kW average'
      },
      applications: ['Automotive Assembly', 'Electronics Manufacturing', 'Metal Fabrication', 'Quality Inspection']
    },
    'service-robots': {
      name: 'Service Robots',
      category: 'Service',
      tagline: 'Intelligent Assistants for Enhanced Customer Experience',
      description: 'Our service robots combine advanced AI with intuitive design to deliver exceptional customer service experiences. Perfect for hospitality, retail, and healthcare environments.',
      longDescription: 'Equipped with natural language processing, computer vision, and emotional intelligence capabilities, our service robots can engage customers naturally, provide information, and assist with various tasks. Their sleek design and friendly interface make them perfect ambassadors for your brand.',
      images: [
        'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/8439093/pexels-photo-8439093.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/8386422/pexels-photo-8386422.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      features: [
        'Natural language processing in 25+ languages',
        'Facial recognition and emotion detection',
        'Interactive touchscreen interface',
        'Autonomous navigation with obstacle avoidance',
        'Cloud-based AI with continuous learning',
        'Customizable personality and responses'
      ],
      specifications: {
        'Height': '1.6m',
        'Weight': '65kg',
        'Battery Life': '12 hours continuous operation',
        'Display': '21-inch 4K touchscreen',
        'Connectivity': 'Wi-Fi 6, 5G, Bluetooth 5.0',
        'Sensors': 'LiDAR, cameras, microphones'
      },
      applications: ['Hotel Reception', 'Retail Assistance', 'Healthcare Support', 'Information Kiosks']
    },
    'ai-solutions': {
      name: 'AI Solutions',
      category: 'Software',
      tagline: 'Intelligent Automation Powered by Advanced AI',
      description: 'Comprehensive AI-powered automation platform that transforms business processes through machine learning, predictive analytics, and intelligent decision-making capabilities.',
      longDescription: 'Our AI Solutions platform integrates seamlessly with existing infrastructure to provide intelligent automation across various business functions. From predictive maintenance and quality control to supply chain optimization and customer insights, our AI algorithms continuously learn and adapt to improve operational efficiency.',
      images: [
        'https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/518244/pexels-photo-518244.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      features: [
        'Machine learning algorithms for predictive analytics',
        'Real-time data processing and analysis',
        'Computer vision for quality control',
        'Natural language processing for document analysis',
        'Automated decision-making workflows',
        'Integration APIs for existing systems'
      ],
      specifications: {
        'Processing Speed': 'Real-time analysis',
        'Data Capacity': 'Unlimited cloud storage',
        'API Endpoints': '500+ integration points',
        'Accuracy Rate': '99.5% average accuracy',
        'Deployment': 'Cloud, on-premise, hybrid',
        'Security': 'Enterprise-grade encryption'
      },
      applications: ['Predictive Maintenance', 'Quality Assurance', 'Supply Chain Optimization', 'Customer Analytics']
    },
    'automation-systems': {
      name: 'Automation Systems',
      category: 'Automation',
      tagline: 'Complete Automation Solutions for Modern Operations',
      description: 'End-to-end automation systems designed for warehouses, logistics, and material handling operations. Streamline your operations with intelligent automation.',
      longDescription: 'Our comprehensive automation systems integrate conveyor systems, sorting mechanisms, robotic arms, and intelligent control software to create seamless automated workflows. From inventory management to order fulfillment, our systems reduce manual labor while increasing accuracy and throughput.',
      images: [
        'https://images.pexels.com/photos/1488463/pexels-photo-1488463.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      features: [
        'Modular conveyor system design',
        'Intelligent sorting and routing',
        'RFID and barcode tracking integration',
        'Real-time inventory management',
        'Automated picking and packing',
        'Centralized control dashboard'
      ],
      specifications: {
        'Throughput': 'Up to 10,000 items/hour',
        'Sorting Accuracy': '99.9%',
        'System Uptime': '99.5% availability',
        'Integration': 'WMS, ERP, TMS compatible',
        'Scalability': 'Modular expansion capability',
        'Control System': 'PLC-based with HMI'
      },
      applications: ['E-commerce Fulfillment', 'Distribution Centers', 'Manufacturing Logistics', 'Airport Baggage']
    },
    'medical-robots': {
      name: 'Medical Robots',
      category: 'Healthcare',
      tagline: 'Precision Healthcare Technology for Better Patient Outcomes',
      description: 'State-of-the-art medical robots designed for surgical precision, rehabilitation, and healthcare assistance. Enhancing medical procedures with robotic precision.',
      longDescription: 'Our medical robots combine precision engineering with medical expertise to assist healthcare professionals in delivering superior patient care. From minimally invasive surgical procedures to rehabilitation therapy, our robots provide the accuracy and consistency needed in medical environments.',
      images: [
        'https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      features: [
        'Sub-millimeter surgical precision',
        'Haptic feedback for surgeons',
        '3D visualization systems',
        'Sterile operation protocols',
        'Integration with hospital systems',
        'FDA-approved medical grade components'
      ],
      specifications: {
        'Precision': '0.01mm accuracy',
        'Degrees of Freedom': '7 DOF per arm',
        'Sterilization': 'Autoclave compatible',
        'Imaging': '4K 3D surgical cameras',
        'Compliance': 'FDA Class II medical device',
        'Training': 'VR-based surgeon training'
      },
      applications: ['Minimally Invasive Surgery', 'Rehabilitation Therapy', 'Diagnostic Assistance', 'Laboratory Automation']
    },
    'security-robots': {
      name: 'Security Robots',
      category: 'Security',
      tagline: 'Autonomous Security Solutions for Enhanced Protection',
      description: 'Advanced autonomous security robots equipped with AI-powered surveillance, threat detection, and patrol capabilities for comprehensive facility protection.',
      longDescription: 'Our security robots provide 24/7 autonomous surveillance and patrol services with advanced threat detection capabilities. Equipped with multiple sensors, cameras, and AI algorithms, they can identify suspicious activities, respond to security incidents, and provide real-time alerts to security personnel.',
      images: [
        'https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/430205/pexels-photo-430205.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      features: [
        'AI-powered threat detection',
        '360-degree surveillance cameras',
        'Autonomous patrol routes',
        'Real-time alert system',
        'Night vision capabilities',
        'Integration with security systems'
      ],
      specifications: {
        'Operating Time': '24 hours autonomous',
        'Detection Range': '50m perimeter',
        'Camera Resolution': '4K with 30x zoom',
        'Speed': 'Up to 5 km/h patrol speed',
        'Weather Rating': 'IP66 outdoor rated',
        'Alert Response': 'Sub-second detection'
      },
      applications: ['Corporate Security', 'Warehouse Monitoring', 'Perimeter Protection', 'Event Security']
    }
  };

  const product = productData[id || ''];

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h1>
          <Link to="/products" className="text-blue-600 hover:text-blue-700">
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/products"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Products
          </Link>
        </div>
      </div>

      {/* Product Header */}
      <section className="py-12 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-block bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
              {product.category}
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-yellow-300">
              {product.name}
            </h1>
            <p className="text-2xl text-blue-100 mb-6">{product.tagline}</p>
            <p className="text-lg text-blue-100 max-w-3xl mx-auto leading-relaxed">
              {product.description}
            </p>
          </div>
        </div>
      </section>

      {/* Product Images */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {product.images.map((image: string, index: number) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl 
                         transition-all duration-300 transform hover:-translate-y-2"
              >
                <img
                  src={image}
                  alt={`${product.name} ${index + 1}`}
                  className="w-full h-64 object-cover hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Description */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Product Overview</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                {product.longDescription}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm">
                  <Shield className="h-6 w-6 text-blue-600" />
                  <span className="text-gray-700">Enterprise Security</span>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm">
                  <Zap className="h-6 w-6 text-blue-600" />
                  <span className="text-gray-700">High Performance</span>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm">
                  <Settings className="h-6 w-6 text-blue-600" />
                  <span className="text-gray-700">Easy Integration</span>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm">
                  <Star className="h-6 w-6 text-blue-600" />
                  <span className="text-gray-700">Premium Quality</span>
                </div>
              </div>
            </div>

            {/* Features */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Features</h2>
              <div className="space-y-4">
                {product.features.map((feature: string, index: number) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Check className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Technical Specifications */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Technical Specifications</h2>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="divide-y divide-gray-200">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="px-6 py-4 flex justify-between items-center">
                      <span className="font-medium text-gray-900">{key}</span>
                      <span className="text-gray-600">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Applications */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Applications</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {product.applications.map((application: string, index: number) => (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow 
                             border border-gray-100 hover:border-blue-200"
                  >
                    <h3 className="font-semibold text-gray-900 mb-2">{application}</h3>
                    <div className="w-full bg-blue-100 h-1 rounded-full">
                      <div className="bg-blue-600 h-1 rounded-full w-3/4"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Interested in {product.name}?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Get in touch with our experts to learn more about how this solution can transform your operations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-lg 
                       font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all duration-200"
            >
              Request Quote
            </Link>
            <Link
              to="/products"
              className="inline-flex items-center border border-gray-400 text-white px-8 py-4 rounded-lg 
                       font-semibold hover:bg-white hover:text-gray-900 transition-all duration-200"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;