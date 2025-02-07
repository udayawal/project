import React from 'react';
import { Shield, Terminal, Lock } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-center space-y-8">
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
          Cybersecurity Professional & Full Stack Developer
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-4 max-w-2xl">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 flex items-center space-x-4">
          <Terminal className="w-8 h-8 text-blue-600 dark:text-blue-400" />
          <div>
            <h3 className="font-semibold">Security+</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">CompTIA Certified</p>
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 flex items-center space-x-4">
          <Lock className="w-8 h-8 text-blue-600 dark:text-blue-400" />
          <div>
            <h3 className="font-semibold">Azure Security</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Microsoft Certified</p>
          </div>
        </div>
      </div>

      <div className="w-full max-w-2xl mx-auto bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
        <h3 className="font-semibold mb-4 text-lg">TryHackMe Profile</h3>
        <iframe 
          src="https://tryhackme.com/api/v2/badges/public-profile?userPublicId=1310059" 
          className="w-full h-[150px] border-none"
          title="TryHackMe Profile"
        />
      </div>

      <div className="typing-effect overflow-hidden border-r-2 border-blue-600 dark:border-blue-400 animate-cursor">
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400">
          Protecting digital assets through innovative security solutions
        </p>
      </div>
    </div>
  );
}