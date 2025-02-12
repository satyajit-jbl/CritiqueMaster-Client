import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Message sent successfully!');
        setFormData({ name: '', message: '' });
    };

    return (
        <div className="bg-blue-50 text-gray-800 min-h-screen">
            {/* Hero Section */}
            <section className="bg-blue-600 text-white py-16 text-center px-4">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
                    <p className="text-lg md:text-xl">
                        We’d love to hear from you. Reach out with any questions or feedback.
                    </p>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-16 px-4">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
                    {/* Contact Information */}
                    <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg">
                        <h2 className="text-3xl font-semibold mb-6">Our Office</h2>
                        <p className="text-lg mb-4">
                            Feel free to visit us or contact us through the details below.
                        </p>
                        <div className="space-y-4 text-gray-700">
                            <p><strong>📍 Address:</strong> Satish Babu Lane, Kotwali, Chattogram, GPO-4000</p>
                            <p><strong>📞 Phone:</strong> +8801819864771</p>
                            <p><strong>✉️ Email:</strong> satyajit_jbl@yahoo.com</p>
                            <p><strong>🕒 Working Hours:</strong> Sun - Thu, 10 AM - 6 PM</p>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg">
                        <h2 className="text-3xl font-semibold mb-6">Get in Touch</h2>
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label className="block text-sm font-medium mb-2">Name</label>
                                <input 
                                    type="text" 
                                    name="name" 
                                    value={formData.name} 
                                    onChange={handleChange} 
                                    required 
                                    className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-300" 
                                    placeholder="Your name" 
                                />
                            </div>
                            <div className="mt-6">
                                <label className="block text-sm font-medium mb-2">Message</label>
                                <textarea 
                                    name="message" 
                                    value={formData.message} 
                                    onChange={handleChange} 
                                    required 
                                    className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-300" 
                                    rows="5" 
                                    placeholder="Your message"
                                ></textarea>
                            </div>
                            <div className="flex flex-col sm:flex-row items-center sm:justify-start gap-4 mt-6">
                                <button 
                                    type="submit" 
                                    className="bg-primary text-white px-8 py-3 rounded-lg w-full sm:w-auto hover:bg-dark transition duration-300"
                                >
                                    Send Message
                                </button>
                                <Link to="/">
                                    <button className="bg-primary text-white px-8 py-3 rounded-lg w-full sm:w-auto hover:bg-dark transition duration-300">
                                        Back to Home
                                    </button>
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
