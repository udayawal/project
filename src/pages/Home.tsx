import React from 'react';
import { Shield, Terminal, Lock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-center space-y-12">
      <div className="relative">
        <div className="absolute inset-0 animate-ping">
          <Shield className="w-24 h-24 text-blue-500/20" />
        </div>
        <Shield className="w-24 h-24 text-blue-600 dark:text-blue-400" />
      </div>
      
      <div className="space-y-4">
        <h1 className="text-4xl md:text-6xl font-bold">
          Uday Awal
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400">
          Cybersecurity Professional 
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full px-4">
        <Link to="/about" 
          className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 
                   transition-all duration-300 hover:scale-105 hover:border-blue-500 dark:hover:border-blue-400 group">
          <div className="flex items-center space-x-4">
            <Terminal className="w-8 h-8 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform" />
            <div className="text-left">
              <h3 className="font-semibold text-xl group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Technical Skills</h3>
              <p className="text-gray-600 dark:text-gray-400">Explore my expertise in cybersecurity and development</p>
            </div>
            <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity ml-auto" />
          </div>
        </Link>
        
        <Link to="/experience" 
          className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 
                   transition-all duration-300 hover:scale-105 hover:border-blue-500 dark:hover:border-blue-400 group">
          <div className="flex items-center space-x-4">
            <Lock className="w-8 h-8 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform" />
            <div className="text-left">
              <h3 className="font-semibold text-xl group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Professional Journey</h3>
              <p className="text-gray-600 dark:text-gray-400">View my work experience and achievements</p>
            </div>
            <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity ml-auto" />
          </div>
        </Link>
      </div>

      <div className="max-w-4xl w-full px-4">
        <Link to="/projects"
          className="block bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 
                   transition-all duration-300 hover:scale-105 hover:border-blue-500 dark:hover:border-blue-400 group">
          <div className="flex items-center space-x-4">
            <Shield className="w-8 h-8 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform" />
            <div className="text-left">
              <h3 className="font-semibold text-xl group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Security Projects</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Discover my cybersecurity projects including Wi-Fi Guardian and Cyber Attack Geolocator
              </p>
            </div>
            <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity ml-auto" />
          </div>
        </Link>
      </div>

      <div className="typing-effect overflow-hidden border-r-2 border-blue-600 dark:border-blue-400 animate-cursor">
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400">
          Protecting digital assets through innovative security solutions
        </p>
      </div>
    </div>
  );
}