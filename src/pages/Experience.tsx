import React from 'react';
import { Briefcase, Server, Code, Cpu } from 'lucide-react';

export default function Experience() {
  return (
    <div className="space-y-12">
      <h2 className="text-3xl font-bold flex items-center space-x-2">
        <Briefcase className="w-8 h-8" />
        <span>Professional Experience</span>
      </h2>

      <div className="space-y-8">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-xl font-semibold">Technical Support Specialist</h3>
              <p className="text-gray-600 dark:text-gray-400">PrismCode Info Solutions Pvt. Ltd</p>
            </div>
            <span className="text-sm text-gray-500 dark:text-gray-500">Jan 2024 - Aug 2024</span>
          </div>
          <ul className="mt-4 space-y-2 list-disc list-inside text-gray-600 dark:text-gray-400">
            <li>Provided technical assistance for hardware, software, and network-related issues</li>
            <li>Resolved OS errors, connectivity problems, and application bugs using remote desktop tools</li>
            <li>Handled complex L2 support issues including database connectivity and server configurations</li>
            <li>Performed root cause analysis, patch management, and network security configurations</li>
          </ul>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-xl font-semibold">Cloud Infrastructure and Security Intern</h3>
              <p className="text-gray-600 dark:text-gray-400">Celebal Technologies</p>
            </div>
            <span className="text-sm text-gray-500 dark:text-gray-500">June 2023 - Aug 2023</span>
          </div>
          <ul className="mt-4 space-y-2 list-disc list-inside text-gray-600 dark:text-gray-400">
            <li>Facilitated VNet pairing and Hub-and-Spoke architecture setup in Azure</li>
            <li>Implemented secure cross-premises connections through Azure ExpressRoute</li>
            <li>Configured route propagation and traffic filtering for network segmentation</li>
          </ul>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-xl font-semibold">Embedded System Developer</h3>
              <p className="text-gray-600 dark:text-gray-400">Birdhouse Shelter Pvt. Ltd</p>
            </div>
            <span className="text-sm text-gray-500 dark:text-gray-500">July 2020 - Jan 2022</span>
          </div>
          <ul className="mt-4 space-y-2 list-disc list-inside text-gray-600 dark:text-gray-400">
            <li>Developed smart cart project for automated food delivery to customer rooms</li>
            <li>Implemented advanced biometric authentication for smart lock systems</li>
            <li>Integrated facial recognition and fingerprint technology for enhanced security</li>
          </ul>
        </div>
      </div>
    </div>
  );
}