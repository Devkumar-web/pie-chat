import Image from "next/image";
import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Head>
        <title>PiChat - Connect Instantly</title>
        <meta name="description" content="PiChat: A modern chat app for seamless communication." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-indigo-100 to-purple-100 py-24 px-6 md:px-24 text-center">
          <div className="container mx-auto">
            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800 mb-6">
              Instant Connections with PiChat
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              Experience seamless and secure communication. Connect with friends, family, and colleagues instantly.
            </p>
            <div className="flex justify-center space-x-4">
              <Link href="/rooms" className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold py-3 px-6 rounded-full transition duration-300">
                Start Chatting
              </Link>
              <Link href="/features" className="bg-white text-indigo-600 font-semibold py-3 px-6 rounded-full border border-indigo-600 hover:bg-indigo-50 transition duration-300">
                Learn More
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-6 md:px-24 bg-white">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-semibold text-gray-800 mb-8">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-2">Real-time Messaging</h3>
                <p className="text-gray-700">Instantly send and receive messages.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Secure Communication</h3>
                <p className="text-gray-700">End-to-end encryption for your privacy.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Group Chats</h3>
                <p className="text-gray-700">Connect with multiple people at once.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">File Sharing</h3>
                <p className="text-gray-700">Share documents, images, and more.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Voice and Video Calls</h3>
                <p className="text-gray-700">Enjoy crystal-clear voice and video calls.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Customizable Notifications</h3>
                <p className="text-gray-700">Tailor notifications to your preferences.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 px-6 md:px-24 bg-gray-100">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-semibold text-gray-800 mb-8">Pricing Plans</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Basic Plan */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-2xl font-semibold mb-4">Basic</h3>
                <p className="text-gray-700 mb-4">Free</p>
                <ul className="list-disc list-inside text-gray-700 mb-6">
                  <li>Unlimited text messaging</li>
                  <li>Group chats</li>
                </ul>
                <Link href="/signup" className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-2 px-4 rounded-full transition duration-300">
                  Sign Up
                </Link>
              </div>

              {/* Pro Plan */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-2xl font-semibold mb-4">Pro</h3>
                <p className="text-gray-600 mb-4">$9.99/month</p>
                <ul className="list-disc list-inside text-gray-600 mb-6">
                  <li>All Basic features</li>
                  <li>Voice and video calls</li>
                  <li>File sharing</li>
                  <li>Priority support</li>
                </ul>
                <Link href="/signup" className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-2 px-4 rounded-full transition duration-300">
                  Get Started
                </Link>
              </div>

              {/* Enterprise Plan */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-2xl font-semibold mb-4">Enterprise</h3>
                <p className="text-gray-600 mb-4">Contact Us</p>
                <ul className="list-disc list-inside text-gray-600 mb-6">
                  <li>All Pro features</li>
                  <li>Custom integrations</li>
                  <li>Dedicated support</li>
                  <li>Advanced analytics</li>
                </ul>
                <Link href="/contact" className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-2 px-4 rounded-full transition duration-300">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export const metadata = {
  title: 'Home - Piechat',
  description: 'Piechat is a chat application that allows you to chat with your friends and family.',
}


