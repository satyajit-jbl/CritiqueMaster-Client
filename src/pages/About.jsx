import React from 'react';

const About = () => {
  return (
    <div className="bg-blue-50 text-gray-800 min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About CritiqueMaster</h1>
          <p className="text-lg md:text-xl">
            Empowering you to make better decisions through honest service reviews.
          </p>
        </div>
      </section>

      {/* About Description */}
      <section className="py-16">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
              <p className="text-lg leading-relaxed">
                At CritiqueMaster, our mission is to create a transparent and reliable platform where users can share their genuine experiences with services. Whether you're looking to find the best services or warn others about bad experiences, we’ve got you covered.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-semibold mb-4">What We Offer</h2>
              <ul className="list-disc list-inside space-y-2 text-lg">
                <li>Comprehensive service listings</li>
                <li>User authentication for secure interactions</li>
                <li>Post and manage reviews with ease</li>
                <li>Real-time service feedback from other users</li>
                <li>A community-driven approach to reviews</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-blue-100 py-16">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl font-semibold mb-6">Why Choose CritiqueMaster?</h2>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-2">Trusted Reviews</h3>
              <p>All reviews are from real users to ensure trust and authenticity.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-2">User-Friendly Platform</h3>
              <p>An intuitive interface makes adding and managing reviews simple.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-2">Secure Interactions</h3>
              <p>Your data is protected with modern security standards.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl font-semibold mb-4">Join Our Community Today</h2>
          <p className="text-lg mb-6">
            Start sharing your experiences and explore what others have to say about various services.
          </p>
          <a href="/register" className="bg-white text-blue-600 px-8 py-3 rounded-lg text-lg font-bold hover:bg-blue-100">
            Get Started
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;
