import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="bg-blue-50 text-gray-800 min-h-screen">
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-lg md:text-xl">Your privacy is important to us. Read how we protect and handle your data.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-3xl font-semibold mb-6">Introduction</h2>
          <p className="text-lg mb-4">
            This Privacy Policy explains how CritiqueMaster collects, uses, and protects your information. By using our platform, you agree to this policy.
          </p>
          <h3 className="text-2xl font-semibold mb-4">What Information We Collect</h3>
          <ul className="list-disc list-inside space-y-2 text-lg">
            <li>Personal information you provide (name, email, etc.)</li>
            <li>Service usage data</li>
            <li>Cookies and tracking information</li>
          </ul>

          <h3 className="text-2xl font-semibold mt-8 mb-4">How We Use Your Information</h3>
          <p className="text-lg">
            We use your data to enhance your experience, improve our services, and ensure secure interactions.
          </p>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
