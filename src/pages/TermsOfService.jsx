import React from 'react';

const TermsOfService = () => {
  return (
    <div className="bg-blue-50 text-gray-800 min-h-screen">
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Service</h1>
          <p className="text-lg md:text-xl">Please read our terms carefully before using CritiqueMaster.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-3xl font-semibold mb-6">Introduction</h2>
          <p className="text-lg mb-4">
            By accessing and using CritiqueMaster, you agree to the following terms and conditions.
          </p>

          <h3 className="text-2xl font-semibold mb-4">User Responsibilities</h3>
          <ul className="list-disc list-inside space-y-2 text-lg">
            <li>Provide accurate information when creating an account</li>
            <li>Respect others and avoid posting inappropriate content</li>
            <li>Follow all applicable laws and regulations</li>
          </ul>

          <h3 className="text-2xl font-semibold mt-8 mb-4">Limitation of Liability</h3>
          <p className="text-lg">
            CritiqueMaster is not liable for any user-generated content or third-party interactions on the platform.
          </p>
        </div>
      </section>
    </div>
  );
};

export default TermsOfService;
