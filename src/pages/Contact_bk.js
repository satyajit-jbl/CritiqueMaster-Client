import React from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
    return (
        <div className="bg-blue-50 text-gray-800 min-h-screen">
            {/* Hero Section */}
            <section className="bg-blue-600 text-white py-16">
                <div className="container mx-auto px-6 md:px-12 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
                    <p className="text-lg md:text-xl">We’d love to hear from you. Feel free to reach out with any questions or feedback.</p>
                </div>
            </section>

            {/* Contact Form */}
            <section className="py-16">
                <div className="container mx-auto px-6 md:px-12">
                    <div className="bg-white p-8 rounded-lg shadow-lg">
                        <h2 className="text-3xl font-semibold mb-6">Get in Touch</h2>
                        <form>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium mb-2">Name</label>
                                    <input type="text" className="w-full p-3 border rounded-lg" placeholder="Your name" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-2">Email</label>
                                    <input type="email" className="w-full p-3 border rounded-lg" placeholder="Your email" />
                                </div>
                            </div>
                            <div className="mt-6">
                                <label className="block text-sm font-medium mb-2">Message</label>
                                <textarea className="w-full p-3 border rounded-lg" rows="5" placeholder="Your message"></textarea>
                            </div>
                            <div className="flex flex-col sm:flex-row items-center sm:justify-start gap-4 mt-6">
                                <button className="bg-blue-600 text-white px-8 py-3 rounded-lg w-full sm:w-auto hover:bg-blue-700">
                                    Send Message
                                </button>
                                <Link to='/'>
                                <button className="bg-blue-600 text-white px-8 py-3 rounded-lg w-full sm:w-auto hover:bg-blue-700">
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
