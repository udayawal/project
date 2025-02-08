import React from 'react';
import { GraduationCap, Award, Shield, FileText } from 'lucide-react';

export default function About() {
  const certifications = [
    { title: 'CompTIA Security+ (SY0-601)', icon: Shield },
    { title: 'Microsoft: Security, Compliance, and Identity Fundamentals (SC-900)', icon: Shield },
    { title: 'Microsoft: Azure Fundamentals (AZ-900)', icon: Shield },
    { title: 'Microsoft: Azure AI Fundamentals (AI-900)', icon: Shield },
    { title: 'KPMG: Lean Six Sigma Green Belt', icon: Award },
    { title: 'Scrum Foundation Professional Certification', icon: Award }
  ];

  return (
    <div className="space-y-12">
      <section className="space-y-6">
        <h2 className="text-3xl font-bold flex items-center space-x-2">
          <GraduationCap className="w-8 h-8" />
          <span>Education</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
            <h3 className="font-semibold text-xl">Master of Information Systems Security</h3>
            <p className="text-gray-600 dark:text-gray-400">Concordia University, Montreal</p>
            <p className="text-sm text-gray-500 dark:text-gray-500">Sep 2024 - May 2026</p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
            <h3 className="font-semibold text-xl">B.Tech in Computer Science</h3>
            <p className="text-gray-600 dark:text-gray-400">Amity University Haryana</p>
            <p className="text-sm text-gray-500 dark:text-gray-500">Aug 2020 - May 2024</p>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold flex items-center space-x-2">
          <Award className="w-8 h-8" />
          <span>Certifications</span>
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 transition-colors">
              <cert.icon className="w-6 h-6 text-blue-600 dark:text-blue-400 mb-2" />
              <p className="font-medium">{cert.title}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold flex items-center space-x-2">
          <FileText className="w-8 h-8" />
          <span>Patent</span>
        </h2>
        
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
          <h3 className="font-semibold text-xl mb-2">Multipurpose Network Security Device</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-2">Patent No: 202441031471 · Filed Apr 19, 2024</p>
          <p className="text-gray-600 dark:text-gray-400">
            The innovation introduces a cutting-edge network security device powered by Raspberry Pi, revolutionizing cybersecurity with its all-in-one functionality. 
            Conduct network penetration tests, prevent intrusions, and verify USB device integrity seamlessly. With its user-friendly touch screen interface, 
            it's perfect for both professionals and enthusiasts. Stay ahead of evolving threats with our compact and versatile solution.
          </p>
        </div>
      </section>
    </div>
  );
}