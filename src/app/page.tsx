// app/page.tsx
'use client';

import Link from 'next/link';
import { FaEnvelope, FaGithub, FaLinkedin, FaShieldAlt, FaPhone, FaNetworkWired, FaCode } from 'react-icons/fa';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 to-slate-900 text-white font-sans relative overflow-hidden">
      {/* Cyber Security Background Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj48cGF0aCBkPSJNNTAgMEwxMDAgMjVMMTAwIDc1TDUgMTAwTDAgNzVMMCAyNUw1MCAwIiBmaWxsPSJub25lIiBzdHJva2U9IiMwZGRjZGIiIHN0cm9rZS13aWR0aD0iMC41Ii8+PC9zdmc+')]"></div>
        
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div 
              key={i}
              className="absolute text-cyan-400/10 text-xs font-mono whitespace-nowrap"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `scroll ${15 + Math.random() * 20}s linear infinite`,
                animationDelay: `${Math.random() * 5}s`
              }}
            >
              {Array(50).fill(0).map(() => Math.random() > 0.5 ? '1' : '0').join('')}
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        {/* Header */}
        <header className="relative overflow-hidden bg-slate-900/80 py-10 shadow-lg border-b border-cyan-400/20 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-32 h-32 rounded-full bg-slate-800 border-2 border-cyan-400/50 flex items-center justify-center">
                <FaShieldAlt className="text-5xl text-cyan-400" />
              </div>
              
              <div className="flex-1">
                <h1 className="text-4xl font-extrabold text-cyan-400 tracking-tight">Toe Zayar Moe</h1>
                <p className="text-xl mt-1 text-slate-300 font-mono">&lt;Cyber Security Analyst/&gt;</p>
                
                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-2">
                  <div className="flex items-center text-slate-300">
                    <FaEnvelope className="mr-2 text-cyan-400" />
                    <Link href="mailto:toezayarmoe@gmail.com" className="hover:text-white transition-colors font-mono text-sm">
                      toezayarmoe@gmail.com
                    </Link>
                  </div>
                  <div className="flex items-center text-slate-300">
                    <FaPhone className="mr-2 text-cyan-400" />
                    <span className="font-mono text-sm">09-967713145</span>
                  </div>
                </div>
                
                <div className="mt-4 flex gap-4">
                  <Link href="https://www.linkedin.com/in/toe-zayar-moe-lbb8ba228" className="text-cyan-300 hover:text-white transition-colors">
                    <FaLinkedin className="text-xl" />
                  </Link>
                  <Link href="https://github.com/toezayarmoe" className="text-cyan-300 hover:text-white transition-colors">
                    <FaGithub className="text-xl" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </header>

        <main className="max-w-6xl mx-auto px-6 py-10 space-y-12">
          {/* Career Objective */}
          <section className="bg-slate-800/80 p-6 rounded-xl border border-cyan-400/20 backdrop-blur-sm">
            <h2 className="text-2xl font-semibold text-cyan-300 mb-4 flex items-center">
              <FaShieldAlt className="mr-3" /> Profile
            </h2>
            <p className="text-slate-300 leading-relaxed">
              I am a Cyber Security Analyst with a strong passion for ensuring the safety and integrity of online systems. 
              With a deep understanding of web vulnerabilities and emerging threats, I have a proven track record of 
              identifying and mitigating risks to protect sensitive information.
            </p>
          </section>

          {/* Experience */}
          <section>
            <h2 className="text-2xl font-semibold text-cyan-300 mb-6 flex items-center">
              <FaShieldAlt className="mr-3" /> Professional Experience
            </h2>
            
            <div className="space-y-6">
              {/* AYA Bank */}
              <div className="bg-slate-800/80 p-6 rounded-xl border border-cyan-400/20 backdrop-blur-sm">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-semibold text-cyan-200">Ayeyarwady Bank</h3>
                  <span className="bg-cyan-400/10 text-cyan-300 px-3 py-1 rounded-full text-sm font-mono">
                    Feb 2025 - Present
                  </span>
                </div>
                <p className="text-slate-400 font-mono text-sm mt-1">Cyber Security Analyst</p>
                
                <div className="mt-4 grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-cyan-300 font-medium mb-2">Penetration Testing</h4>
                    <ul className="space-y-2">
                      <li className="text-slate-300 text-sm before:content-['>'] before:text-cyan-400 before:mr-2">
                        Web Application Penetration Testing
                      </li>
                      <li className="text-slate-300 text-sm before:content-['>'] before:text-cyan-400 before:mr-2">
                        Mobile Application Testing
                      </li>
                      <li className="text-slate-300 text-sm before:content-['>'] before:text-cyan-400 before:mr-2">
                        Network Penetration Testing
                      </li>
                      <li className="text-slate-300 text-sm before:content-['>'] before:text-cyan-400 before:mr-2">
                        API Penetration Testing
                      </li>
                      <li className="text-slate-300 text-sm before:content-['>'] before:text-cyan-400 before:mr-2">
                        Active Directory Penetration Testing
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-cyan-300 font-medium mb-2">Security Operations</h4>
                    <ul className="space-y-2">
                      <li className="text-slate-300 text-sm before:content-['>'] before:text-cyan-400 before:mr-2">
                        Grafana Dashboard Creation Using API
                      </li>
                      <li className="text-slate-300 text-sm before:content-['>'] before:text-cyan-400 before:mr-2">
                        Dark Web Monitoring
                      </li>
                      <li className="text-slate-300 text-sm before:content-['>'] before:text-cyan-400 before:mr-2">
                        SonarQube Integration with GitLab CI/CD
                      </li>
                      <li className="text-slate-300 text-sm before:content-['>'] before:text-cyan-400 before:mr-2">
                        Vulnerability Management
                      </li>
                      <li className="text-slate-300 text-sm before:content-['>'] before:text-cyan-400 before:mr-2">
                        Internal Pentest and PCI-DSS Compliance
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* AFDB Bank */}
              <div className="bg-slate-800/80 p-6 rounded-xl border border-cyan-400/20 backdrop-blur-sm">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-semibold text-cyan-200">Ayarwaddy Farmer Development Bank</h3>
                  <span className="bg-cyan-400/10 text-cyan-300 px-3 py-1 rounded-full text-sm font-mono">
                    Sep 2023 - Feb 2025
                  </span>
                </div>
                <p className="text-slate-400 font-mono text-sm mt-1">Cyber Security Analyst</p>
                
                <div className="mt-4 grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-cyan-300 font-medium mb-2">Penetration Testing</h4>
                    <ul className="space-y-2">
                      <li className="text-slate-300 text-sm before:content-['>'] before:text-cyan-400 before:mr-2">
                        Web Application Penetration Testing
                      </li>
                      <li className="text-slate-300 text-sm before:content-['>'] before:text-cyan-400 before:mr-2">
                        Mobile Application Penetration Testing
                      </li>
                      <li className="text-slate-300 text-sm before:content-['>'] before:text-cyan-400 before:mr-2">
                        Network Penetration Testing
                      </li>
                      <li className="text-slate-300 text-sm before:content-['>'] before:text-cyan-400 before:mr-2">
                        API Penetration Testing
                      </li>
                      <li className="text-slate-300 text-sm before:content-['>'] before:text-cyan-400 before:mr-2">
                        Active Directory Penetration Testing
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-cyan-300 font-medium mb-2">Security Operations</h4>
                    <ul className="space-y-2">
                      <li className="text-slate-300 text-sm before:content-['>'] before:text-cyan-400 before:mr-2">
                        Grafana Dashboard Creation Using API
                      </li>
                      <li className="text-slate-300 text-sm before:content-['>'] before:text-cyan-400 before:mr-2">
                        TrendMicro Integration with Wazuh
                      </li>
                      <li className="text-slate-300 text-sm before:content-['>'] before:text-cyan-400 before:mr-2">
                        SonarQube Integration with GitLab CI/CD
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Hapeye Co.Ltd */}
              <div className="bg-slate-800/80 p-6 rounded-xl border border-cyan-400/20 backdrop-blur-sm">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-semibold text-cyan-200">Hapeye Co.Ltd</h3>
                  <span className="bg-cyan-400/10 text-cyan-300 px-3 py-1 rounded-full text-sm font-mono">
                    Apr 2023 - Aug 2023
                  </span>
                </div>
                <p className="text-slate-400 font-mono text-sm mt-1">Flutter Developer</p>
                
                <div className="mt-4 space-y-4">
                  <div>
                    <ul className="space-y-2">
                      <li className="text-slate-300 text-sm before:content-['>'] before:text-cyan-400 before:mr-2">
                        Creating application with Flutter
                      </li>
                      <li className="text-slate-300 text-sm before:content-['>'] before:text-cyan-400 before:mr-2">
                        Implement Ads Services
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Certifications */}
          <section>
            <h2 className="text-2xl font-semibold text-cyan-300 mb-6 flex items-center">
              <FaShieldAlt className="mr-3" /> Certifications
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "Certified in Cybersecurity (ISC)②",
                "Certified Professional Penetration Tester (INE)③",
                "Office Wireless Professional (OSWP)④",
                "Certified Red Team Professional (CRTP)⑤",
                "Certified AppSec Practitioner (CAP)"
              ].map((cert, index) => (
                <div key={index} className="bg-slate-800/80 p-4 rounded-lg border border-cyan-400/20 hover:border-cyan-400/40 transition-all group">
                  <div className="flex items-center">
                    <div className="bg-cyan-400/10 p-2 rounded-lg mr-4 group-hover:bg-cyan-400/20 transition-all">
                      <FaShieldAlt className="text-cyan-400" />
                    </div>
                    <span className="font-mono text-cyan-300">{cert}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Education */}
          <section>
            <h2 className="text-2xl font-semibold text-cyan-300 mb-6 flex items-center">
              <FaNetworkWired className="mr-3" /> Education
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-slate-800/80 p-5 rounded-xl border border-cyan-400/20">
                <h3 className="text-cyan-400 font-medium mb-2">B.Sc (Geology)</h3>
                <p className="text-slate-300 font-mono text-sm">Dagon University</p>
              </div>
              <div className="bg-slate-800/80 p-5 rounded-xl border border-cyan-400/20">
                <h3 className="text-cyan-400 font-medium mb-2">Level 4 Diploma in Computing</h3>
                <p className="text-slate-300 font-mono text-sm">KBTC College</p>
              </div>
            </div>
          </section>

          {/* Skills */}
          <section>
            <h2 className="text-2xl font-semibold text-cyan-300 mb-6 flex items-center">
              <FaShieldAlt className="mr-3" /> Technical Skills
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "Web Application Penetration Testing",
                "Active Directory Penetration Testing",
                "Network Penetration Testing",
                "Mobile Application Penetration Testing",
                "Golang",
                "Python",
                "Flutter/Dart",
                "Grafana Dashboard Creation",
                "SonarQube Integration",
                "Dark Web Monitoring",
                "PCI-DSS Compliance",
                "Vulnerability Management"
              ].map((skill, index) => (
                <div key={index} className="bg-slate-800/80 p-3 rounded-lg border border-cyan-400/20">
                  <p className="text-slate-300 font-mono text-sm flex items-center">
                    <span className="text-cyan-400 mr-2">▹</span>
                    {skill}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Languages */}
          <section className="bg-slate-800/80 p-6 rounded-xl border border-cyan-400/20 backdrop-blur-sm">
            <h2 className="text-2xl font-semibold text-cyan-300 mb-4 flex items-center">
              <FaCode className="mr-3" /> Languages
            </h2>
            <div className="flex flex-wrap gap-4">
              <div className="bg-cyan-400/10 px-4 py-2 rounded-full border border-cyan-400/20">
                <p className="text-cyan-300 font-mono">English</p>
              </div>
            </div>
          </section>
        </main>
      </div>

      <style jsx global>{`
        @keyframes scroll {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100vh); }
        }
        .font-mono {
          font-family: 'Courier New', monospace;
        }
      `}</style>
    </div>
  );
}
