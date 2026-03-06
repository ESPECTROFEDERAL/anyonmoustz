import React from "react";

// --- Topics Data ---
const topics = [
  "Ethical Hacking Foundations",
  "Footprinting & Reconnaissance (OSINT)",
  "Network Scanning & Enumeration",
  "Vulnerability Analysis",
  "System Hacking (Windows & Linux)",
  "Malware Threats (Viruses, Trojans & RATs)",
  "Packet Sniffing & MitM Attacks",
  "Social Engineering (Phishing & Baiting)",
  "Denial-of-Service (DoS/DDoS) Attacks",
  "Session Hijacking",
  "Web Server & Web Application Hacking",
  "SQL Injection (SQLi)",
  "Wireless (Wi-Fi) Hacking",
  "Mobile Platform Hacking (Android / iOS)",
  "IoT & OT Hacking",
  "Cloud Computing Security",
  "Cryptography & Encryption Cracking",
  "Active Directory Hacking",
  "Dark Web Operations",
  "Post-Exploitation & Persistence",
  "Anti-Forensics & Covering Tracks",
  "Blue Team: Incident Response"
];

// --- TopicCard Component ---
const TopicCard: React.FC<{ title: string }> = ({ title }) => (
  <div className="bg-gray-800 text-white p-4 rounded shadow hover:bg-gray-700 transition">
    <h2 className="text-lg font-bold">{title}</h2>
  </div>
);

// --- App Component ---
const App: React.FC = () => (
  <div className="container mx-auto p-6">
    <h1 className="text-3xl font-bold mb-6 text-center">
      Ethical Hacking & Cybersecurity Topics
    </h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {topics.map((topic, idx) => (
        <TopicCard key={idx} title={topic} />
      ))}
    </div>
    <p className="mt-8 text-center text-gray-400">
      Share this channel link with your friends and colleagues!
    </p>
  </div>
);

export default App;
