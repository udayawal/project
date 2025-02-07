import React from 'react';
import { Terminal, Shield, ExternalLink } from 'lucide-react';

export default function Projects() {
  return (
    <div className="space-y-12">
      <h2 className="text-3xl font-bold flex items-center space-x-2">
        <Terminal className="w-8 h-8" />
        <span>Security Projects</span>
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
          <div className="flex items-center space-x-2 mb-4">
            <Shield className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            <h3 className="text-xl font-semibold">Wi-Fi Guardian</h3>
          </div>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            An ethical Wi-Fi security analysis tool built with Raspberry Pi and open-source security tools. 
            Strengthens wireless network protection through comprehensive vulnerability assessment.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm">Python</span>
            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm">Raspberry Pi</span>
            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm">Network Security</span>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
          <div className="flex items-center space-x-2 mb-4">
            <Terminal className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            <h3 className="text-xl font-semibold">Cyber Attack Geolocator</h3>
          </div>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            SIEM implementation using Azure Sentinel with custom PowerShell scripts and Log Analytics workbooks 
            to visualize and track global cyber-attacks in real-time.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm">Azure Sentinel</span>
            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm">PowerShell</span>
            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm">SIEM</span>
          </div>
        </div>
      </div>

      <section className="space-y-6">
        <h3 className="text-2xl font-bold">Technical Achievements</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
            <p className="text-gray-600 dark:text-gray-400">Workshop Assistant Trainer at ECSGA, Concordia University Montreal</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
            <p className="text-gray-600 dark:text-gray-400">Coordinator for Hack Infinity at IIT Bombay</p>
          </div>
        </div>
      </section>
    </div>
  );
}