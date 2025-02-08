import React from 'react';
import { Terminal, Shield, ExternalLink } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: "Wi-Fi Guardian",
      description: "An ethical Wi-Fi security analysis tool built with Raspberry Pi and open-source security tools. Strengthens wireless network protection through comprehensive vulnerability assessment.",
      icon: Shield,
      tags: ["Python", "Raspberry Pi", "Network Security"]
    },
    {
      title: "Cyber Attack Geolocator",
      description: "SIEM implementation using Azure Sentinel with custom PowerShell scripts and Log Analytics workbooks to visualize and track global cyber-attacks in real-time.",
      icon: Terminal,
      tags: ["Azure Sentinel", "PowerShell", "SIEM"]
    },
    {
      title: "Decentralized Voting System",
      description: "Developed Ethereum-based, unbiased, transparent, secure, and accessible decentralized voting system.",
      icon: Shield,
      tags: ["Blockchain", "Ethereum", "Smart Contracts"]
    },
    {
      title: "Smart Cart",
      description: "Innovative shopping system integrating facial recognition and advanced biometrics for efficient, secure, and personalized experiences.",
      icon: Terminal,
      tags: ["IoT", "Computer Vision", "Biometrics"]
    },
    {
      title: "DeliverBot",
      description: "Designed a Node MCU-powered smart food delivery cart for efficient in-room dining service in hotels.",
      icon: Terminal,
      tags: ["IoT", "NodeMCU", "Automation"]
    }
  ];

  return (
    <div className="space-y-12">
      <h2 className="text-3xl font-bold flex items-center space-x-2">
        <Terminal className="w-8 h-8" />
        <span>Security Projects</span>
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300 group">
            <div className="flex items-center space-x-2 mb-4">
              <project.icon className="w-6 h-6 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{project.title}</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, tagIndex) => (
                <span key={tagIndex} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <section className="space-y-6">
        <h3 className="text-2xl font-bold">Technical Achievements</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 transition-colors">
            <p className="text-gray-600 dark:text-gray-400">Workshop Assistant Trainer at ECSGA, Concordia University Montreal</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 transition-colors">
            <p className="text-gray-600 dark:text-gray-400">Coordinator for Hack Infinity at IIT Bombay</p>
          </div>
        </div>
      </section>
    </div>
  );
}
