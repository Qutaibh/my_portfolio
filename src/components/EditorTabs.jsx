import React, { useState } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { motion, AnimatePresence } from 'framer-motion';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';

const allTabs = [
  'About',
  'Experience',
  'Projects',
  'Education',
  'Certificates',
  'Skills',
  'Contact',
];

const aboutText = `I’m a software developer who enjoys building practical, user-focused solutions, whether it’s designing system architecture, developing responsive frontends, or optimizing database workflows.

Recently, I worked at the Jordanian Academy for Maritime Studies, where I modernized internal systems, integrated AI automation, improved legacy platforms, and supported academy-wide IT operations.
Before that, I developed Django-based platforms at Sphereka and completed a Correlation One fellowship focusing on Python, SQL, and analytics.
I’m always looking to grow, learn new technologies, and work with teams that value innovation.
If you’re working on something exciting or just want to chat about tech/memes, HIT ME UP!`;

const experience = [
  {
    company: 'Jordainan Academy for Maritime Studies',
    period: 'Jan 2025 – Jan 2026',
    title: 'Software Developer',
    details: [
      'Architected and customized a Customer Relationship Management (CRM) system using PHP and Oracle, streamlining complex data management for 50+ users.',
      'Integrated Generative AI and DeepSeek LLMs to automate internal workflows and enhance data-driven decision-making.',
      'Spearheaded FAWTARA e-invoicing system implementation, ensuring 100% regulatory compliance and automating financial processing.',
      'Modernized business-critical systems by developing new features in PHP/Oracle while maintaining high-availability legacy infrastructure.',
      'Monitored IT hardware, internet, and antivirus protection.',
    ],
  },
  {
    company: 'Sphereka',
    period: 'Oct 2024 – Jan 2025',
    title: 'Software Developer',
    details: [
      'Developed and maintained scalable Django applications, ensuring optimal back-end performance.',
      'Built responsive front-end interfaces using HTML, CSS, and JavaScript.',
      'Collaborated on an e-commerce platform and a company showcase website.',
      'Managed code repositories using Git.',
    ],
  },
  {
    company: 'Zain Cash',
    period: 'Aug 2022 – Nov 2024',
    title: 'Promoter',
    details: [
      'Demonstrated and provided information on products/services.',
      'Identified customer needs and answered inquiries.',
      'Resolved potential customer concerns effectively.',
    ],
  },
  {
    company: 'Talabat',
    period: 'Mar 2022 – May 2022',
    title: 'Call Center',
    details: [
      'Resolved customer tickets using Salesforce.',
      'Provided proper solutions and followed up on complaints.',
      'Consulted team members on complex issues.',
      'Prepared reports for escalation teams.',
    ],
  },
];

const education = [
  {
    school: 'Middle East University',
    degree: 'Computer Science',
    period: 'Oct 2021 – July 2024',
    gpa: 'GPA: 3.05',
  },
  {
    school: 'Khawarizmi College',
    degree: 'Information Technology and Network Security',
    period: 'Oct 2019 – June 2021',
    gpa: 'Comprehensive Exam: 87.8',
  },
];

const projects = [
  {
    name: '“ACS Construction Co. – Django-powered website',
    stack: 'Django, PostgreSQL, HTML, CSS, JavaScript',
    period: 'Mar 2025 – May 2025',
    details: [
      'Dynamic galleries for featured and recent projects with rich visual and descriptive content.',
      'Blog system for delivering updates, stories, and trends with date-based sorting.',
      'Embedded multimedia (“Work in Action”) to bring projects to life.',
      'Contact form facilitating direct communication with the company.',
      'Clean navigation and responsive design ensure seamless UX across devices.',

    ],
  },
  {
    name: 'Wedding Planning Platform',
    stack: 'Django, HTML, CSS, JavaScript',
    period: 'Freelance Project',
    details: [
      'Developed full-stack wedding planning website with vendor management and booking system.',
      'Implemented responsive frontend and backend database for service listings.',
      'Designed user-friendly interface for wedding service discovery and coordination.',

    ],
  },
  {
    name: 'BloodShare',
    stack: 'Flutter, MySQL, PHP',
    period: 'Dec 2023 – July 2024',
    details: [
      'Developed a full-stack mobile application using Flutter and PHP.',
      'Implemented secure login and signup features.',
      'Enabled posting and responding to blood donation requests.',
    ],
  },
  {
    name: 'QR Code Attendance System',
    stack: 'JavaScript, Google Sheets',
    period: 'Jan 2024 – Feb 2024',
    details: [
      'Designed a QR code-based attendance system integrated with Google Sheets.',
      'Developed a web-based portal for teachers to manage attendance.',
    ],
  },
];
const certificates = [
  {
    name: 'Qualify You Bootcamp',
    type: 'Online Bootcamp',
    date: 'December 2025',
    details: [
      'Developing RESTful APIs for real-time task management and user presence tracking using asynchronous processing.',
      'Implementing secure authentication systems with granular role-based access control (RBAC) for organizational hierarchies.',

    ],
  },
  {
    name: 'The Complete Web Development Bootcamp',
    type: 'Online Udemy Course',
    date: 'In Progress',
    details: [
      'Comprehensive 62+ hour full-stack web development course covering front-end and back-end technologies.',
      'Technologies: HTML5, CSS3, JavaScript ES6, Node.js, React, PostgreSQL, Git, Web3, and Blockchain.',
      'Building portfolio of 32+ real-world projects including full-stack applications and responsive websites.',
    ],
  },
  {
    name: 'AWS AI Practitioner',
    type: 'Online',
    date: 'In Progress',
    details: [
      'Comprehensive training in AWS AI services.',
      'Covered machine learning fundamentals and cloud AI solutions.',
    ],
  },
  {
    name: 'Correlation One — Tech for Jobs',
    type: 'Online',
    date: 'Mar 2025',
    details: [
      'Earned an Honors Certificate in Advanced Data Analytics after completing a 250+ hour intensive fellowship.',
      'Covered topics including Excel, SQL, Python, Data Visualization, Dashboard Design, EDA, and Generative AI.',
    ],
  },
  {
    name: 'Jordainan Academy Professional Development',
    type: 'On Field',
    date: '2025',
    details: [
      'Communication Skills & Business Ethics.',
      'Time Management: prioritization and productivity techniques.',
      'Quality Management Systems: ISO 9001 standards and continuous improvement.',
    ],
  },
  {
    name: 'Orange Digital Village',
    type: 'On Field',
    date: 'July 2022',
    details: [
      'Completed training in Technical Writing, Communication, and Presentation Skills.',
    ],
  },
  {
    name: 'Cisco',
    type: 'Online',
    date: 'Aug 2020',
    details: [
      'Successfully completed the "Introduction to Cybersecurity" certification.',
    ],
  },
];


const skills = [
  'Dart', 'Python', 'C/C++', 'SQL', 'PHP', 'Oracle', 'JavaScript', 'HTML/CSS',
  'Flutter', 'Django', 'Database Management', 'Excel', 'Git',
  'Android Studio', 'VS Code', 'Postman', 'XAMPP', 'WAMP','JIRA', 'AGILE',
];

const languages = [
  { name: 'Arabic', level: 'Native proficiency' },
  { name: 'English', level: 'Intermediate Proficiency' },
];

const contact = {
  email: 'qutaibh.subeh@gmail.com',
  phone: '+9627-78932194',
  linkedin: 'linkedin.com/in/qutaibh',
  github: 'github.com/Qutaibh',
};

function TabContent({ tab, profileImage }) {
  switch (tab) {
    case 'About':
      return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', width: '100%' }}>
          <div className="about-header-responsive" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#0f1419', border: '1px solid #222', borderRadius: 8, padding: '0.75rem 1rem', boxShadow: '0 4px 16px #0004', flexWrap: 'wrap', gap: '0.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#9cdcfe', fontWeight: 600 }}>
              <span style={{ height: 10, width: 10, borderRadius: '50%', background: '#4FC3F7', boxShadow: '0 0 8px #4FC3F7' }} />
              about.md
            </div>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              <span style={{ background: '#1e1e1e', color: '#FFD700', padding: '0.25rem 0.55rem', borderRadius: 6, fontWeight: 700, fontSize: 12 }}>Personal</span>
              <span style={{ background: '#1e1e1e', color: '#4FC3F7', padding: '0.25rem 0.55rem', borderRadius: 6, fontWeight: 700, fontSize: 12 }}>VS Code</span>
            </div>
          </div>

          <div className="about-content-grid" style={{ display: 'grid', gridTemplateColumns: '260px 1fr', gap: '1.2rem', alignItems: 'start', flexWrap: 'wrap' }}>
            <div className="about-profile-card" style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(145deg, #1b1f24 0%, #11161c 100%)', border: '1px solid #23272e', borderRadius: 12, padding: '1rem', boxShadow: '0 10px 30px #0005', minWidth: 240, width: '100%' }}>
              <img
                src={profileImage}
                srcSet={`${profileImage} 1x, ${profileImage} 2x`}
                sizes="(max-width: 600px) 150px, 180px"
                alt="Profile"
                loading="eager"
                decoding="async"
                className="profile-image-responsive"
                style={{
                  height: 180,
                  borderRadius: '16px',
                  objectFit: 'cover',
                  border: '3px solid #4FC3F7',
                  boxShadow: '0 6px 20px #0006',
                  background: 'linear-gradient(135deg, #23272e 0%, #1e1e1e 100%)',
                }}
              />
              <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                <span style={{ background: '#1e1e1e', color: '#4FC3F7', padding: '0.3rem 0.6rem', borderRadius: 6, fontWeight: 700, fontSize: 12 }}>Software Developer</span>
                <span style={{ background: '#1e1e1e', color: '#B392F0', padding: '0.3rem 0.6rem', borderRadius: 6, fontWeight: 700, fontSize: 12 }}>Data Explorer</span>
                <span style={{ background: '#1e1e1e', color: '#FFD700', padding: '0.3rem 0.6rem', borderRadius: 6, fontWeight: 700, fontSize: 12 }}>AI Enthusiast</span>
              </div>
            </div>

            <div className="about-text-content" style={{ background: 'linear-gradient(145deg, #1b1f24 0%, #11161c 100%)', border: '1px solid #23272e', borderRadius: 12, padding: '1.2rem', boxShadow: '0 10px 30px #0005', display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%' }}>
              <div className="about-title-responsive" style={{ fontWeight: 'bold', fontSize: '1.35rem', color: '#4FC3F7' }}>
              <Typewriter
                words={["Hi, I'm Qutaiba Subuh."]}
                loop={1}
                cursor
                cursorStyle='|'
                typeSpeed={60}
                deleteSpeed={50}
                delaySpeed={1200}
              />
              </div>
              {aboutText.split('\n\n').map((p, i) => (
                <p key={i} style={{ margin: '0 0 0.75rem 0', lineHeight: 1.7, color: '#d4d4d4' }}>{p}</p>
              ))}
              <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
                <a href={`https://${contact.linkedin}`} target="_blank" rel="noopener noreferrer" style={{
                  background: '#0f1419', border: '1px solid #4FC3F7', color: '#4FC3F7', fontWeight: 'bold', padding: '0.55rem 0.9rem', borderRadius: 6, textDecoration: 'none', boxShadow: '0 4px 12px #0004'
                }}>Connect</a>
                <a href={`https://${contact.github}`} target="_blank" rel="noopener noreferrer" style={{
                  background: '#0f1419', border: '1px solid #B392F0', color: '#B392F0', fontWeight: 'bold', padding: '0.55rem 0.9rem', borderRadius: 6, textDecoration: 'none', boxShadow: '0 4px 12px #0004'
                }}>GitHub</a>
                <a href={`mailto:${contact.email}`} style={{
                  background: '#0f1419', border: '1px solid #FFD700', color: '#FFD700', fontWeight: 'bold', padding: '0.55rem 0.9rem', borderRadius: 6, textDecoration: 'none', boxShadow: '0 4px 12px #0004'
                }}>Email</a>
              </div>
            </div>
          </div>
        </div>
      );
    case 'Experience':
      return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, background: '#0f1419', border: '1px solid #222', borderRadius: 8, padding: '0.65rem 0.9rem', color: '#9cdcfe', fontWeight: 600 }}>
            <span style={{ height: 9, width: 9, borderRadius: '50%', background: '#4FC3F7', boxShadow: '0 0 8px #4FC3F7' }} />
            experience.log
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '0.9rem' }}>
          {experience.map((exp) => (
              <div key={exp.company} style={{ background: '#0f1419', border: '1px solid #23272e', borderRadius: 10, padding: '1rem', boxShadow: '0 10px 30px #0005', display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 8 }}>
                  <div style={{ fontWeight: 700, color: '#4FC3F7' }}>{exp.company}</div>
                  <span style={{ background: '#1e1e1e', color: '#FFD700', padding: '0.25rem 0.55rem', borderRadius: 6, fontSize: 12, fontWeight: 700 }}>{exp.period}</span>
                </div>
                <div style={{ color: '#B392F0', fontSize: '0.95rem', fontWeight: 600 }}>{exp.title}</div>
                <ul style={{ margin: '0.25rem 0 0 1.1rem', padding: 0, color: '#d4d4d4', lineHeight: 1.5 }}>
                {exp.details.map((d, i) => <li key={i}>{d}</li>)}
              </ul>
            </div>
          ))}
          </div>
        </div>
      );
    case 'Projects':
      return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, background: '#0f1419', border: '1px solid #222', borderRadius: 8, padding: '0.65rem 0.9rem', color: '#9cdcfe', fontWeight: 600 }}>
            <span style={{ height: 9, width: 9, borderRadius: '50%', background: '#B392F0', boxShadow: '0 0 8px #B392F0' }} />
            projects.json
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem' }}>
          {projects.map((proj) => (
              <div key={proj.name} style={{ background: 'linear-gradient(145deg, #1b1f24 0%, #11161c 100%)', border: '1px solid #23272e', borderRadius: 10, padding: '1rem 1.1rem', boxShadow: '0 10px 30px #0005', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 10 }}>
                  <div style={{ fontWeight: 700, color: '#FFD700', fontSize: '1.05rem' }}>{proj.name}</div>
                  <span style={{ background: '#1e1e1e', color: '#4FC3F7', padding: '0.25rem 0.55rem', borderRadius: 6, fontSize: 12, fontWeight: 700 }}>{proj.period}</span>
                </div>
                <div style={{ color: '#B392F0', fontSize: '0.95rem', fontWeight: 600 }}>{proj.stack}</div>
                <ul style={{ margin: '0.2rem 0 0 1rem', padding: 0, color: '#d4d4d4', lineHeight: 1.5 }}>
                {proj.details.map((d, i) => <li key={i}>{d}</li>)}
              </ul>
            </div>
          ))}
          </div>
        </div>
      );
    case 'Education':
      return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, background: '#0f1419', border: '1px solid #222', borderRadius: 8, padding: '0.65rem 0.9rem', color: '#9cdcfe', fontWeight: 600 }}>
            <span style={{ height: 9, width: 9, borderRadius: '50%', background: '#FFD700', boxShadow: '0 0 8px #FFD700' }} />
            education.md
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem', paddingLeft: '0.4rem' }}>
            {education.map((edu, index) => (
              <div key={edu.school} style={{ position: 'relative', paddingLeft: '1.5rem' }}>
                <span style={{ position: 'absolute', left: 0, top: 8, height: 12, width: 12, borderRadius: '50%', background: '#FFD700', boxShadow: '0 0 10px #FFD700' }} />
                {index !== education.length - 1 && (
                  <span style={{ position: 'absolute', left: 5.5, top: 20, bottom: -18, width: 1, background: '#23272e' }} />
                )}
                <div style={{ background: '#0f1419', border: '1px solid #23272e', borderRadius: 10, padding: '0.9rem 1rem', boxShadow: '0 8px 24px #0005', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                  <div style={{ fontWeight: 700, color: '#FFD700' }}>{edu.school}</div>
                  <div style={{ color: '#4FC3F7', fontSize: '0.95rem', fontWeight: 600 }}>{edu.degree}</div>
              <div style={{ color: '#B392F0', fontSize: '0.9rem' }}>{edu.period} | {edu.gpa}</div>
                </div>
            </div>
          ))}
          </div>
        </div>
      );
      case 'Certificates':
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, background: '#0f1419', border: '1px solid #222', borderRadius: 8, padding: '0.65rem 0.9rem', color: '#9cdcfe', fontWeight: 600 }}>
              <span style={{ height: 9, width: 9, borderRadius: '50%', background: '#4FC3F7', boxShadow: '0 0 8px #4FC3F7' }} />
              certificates.json
            </div>
      
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem' }}>
              {certificates.map((cert) => (
                <div key={cert.name} style={{ background: '#0f1419', border: '1px solid #23272e', borderRadius: 10, padding: '1rem', boxShadow: '0 10px 30px #0005', display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                  
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ fontWeight: 700, color: '#4FC3F7' }}>{cert.name}</div>
                    <span style={{ background: '#1e1e1e', color: '#FFD700', padding: '0.25rem 0.55rem', borderRadius: 6, fontSize: 12, fontWeight: 700 }}>{cert.date}</span>
                  </div>
      
                  <div style={{ color: '#B392F0', fontSize: '0.95rem', fontWeight: 600 }}>
                    {cert.type}
                  </div>
      
                  <ul style={{ margin: '0.3rem 0 0 1rem', padding: 0, color: '#d4d4d4', lineHeight: 1.5 }}>
                    {cert.details.map((d, i) => <li key={i}>{d}</li>)}
                  </ul>
      
                </div>
              ))}
            </div>
          </div>
        );
      
    case 'Skills':
      return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, background: '#0f1419', border: '1px solid #222', borderRadius: 8, padding: '0.65rem 0.9rem', color: '#9cdcfe', fontWeight: 600 }}>
            <span style={{ height: 9, width: 9, borderRadius: '50%', background: '#4FC3F7', boxShadow: '0 0 8px #4FC3F7' }} />
            skills.ts
          </div>
               <div className="skills-grid-responsive" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '1rem', alignItems: 'flex-start' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', background: '#0f1419', border: '1px solid #23272e', borderRadius: 10, padding: '1rem', boxShadow: '0 8px 24px #0005' }}>
          {skills.map((skill) => (
                <span key={skill} style={{ background: '#1e1e1e', color: '#4FC3F7', borderRadius: 6, padding: '0.35rem 0.75rem', fontSize: '0.98rem', fontWeight: 'bold', boxShadow: '0 4px 12px #0004' }}>{skill}</span>
          ))}
            </div>
            <div style={{ background: '#0f1419', border: '1px solid #23272e', borderRadius: 10, padding: '1rem', boxShadow: '0 8px 24px #0005', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <div style={{ color: '#FFD700', fontWeight: 'bold', fontSize: '1rem' }}>Languages</div>
            {languages.map((lang) => (
                <div key={lang.name} style={{ color: '#d4d4d4', fontSize: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span>{lang.name}</span>
                  <span style={{ color: '#B392F0', fontWeight: 600 }}>{lang.level}</span>
                </div>
            ))}
            </div>
          </div>
        </div>
      );
    case 'Contact': {
      const contactMethods = [
        { label: 'Email', value: contact.email, href: `mailto:${contact.email}`, accent: '#4FC3F7', icon: '✉️' },
        { label: 'Phone', value: contact.phone, href: `tel:${contact.phone}`, accent: '#FFD700', icon: '📞' },
        { label: 'LinkedIn', value: contact.linkedin, href: `https://${contact.linkedin}`, accent: '#4FC3F7', icon: '💼' },
        { label: 'GitHub', value: contact.github, href: `https://${contact.github}`, accent: '#B392F0', icon: '🐙' },
      ];

      return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', color: '#d4d4d4' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#0f1419', border: '1px solid #222', borderRadius: 8, padding: '0.75rem 1rem', boxShadow: '0 4px 16px #0004' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#9cdcfe', fontWeight: 600 }}>
              <span style={{ height: 10, width: 10, borderRadius: '50%', background: '#4FC3F7', boxShadow: '0 0 8px #4FC3F7' }} />
              contact.json
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ fontSize: 12, color: '#8b949e', letterSpacing: 0.3 }}>VS Code theme</span>
              <span style={{ padding: '0.25rem 0.55rem', borderRadius: 6, background: '#1e1e1e', color: '#4FC3F7', fontWeight: 600, fontSize: 12 }}>Ready</span>
            </div>
          </div>

          <div style={{ background: 'linear-gradient(145deg, #1b1f24 0%, #11161c 100%)', border: '1px solid #23272e', borderRadius: 10, padding: '1.1rem', boxShadow: '0 10px 30px #0005', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap' }}>
              <div style={{ fontWeight: 700, color: '#4FC3F7', fontSize: '1.1rem', letterSpacing: 0.4 }}>Pick a channel, let’s ship something great.</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <span style={{ height: 9, width: 9, borderRadius: '50%', background: '#22c55e', boxShadow: '0 0 10px #22c55e' }} />
                <span style={{ color: '#9cdcfe', fontSize: 13 }}>Status: Online</span>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.9rem' }}>
              {contactMethods.map((method) => (
                <div key={method.label} style={{ background: '#0f1419', border: `1px solid ${method.accent}22`, borderRadius: 10, padding: '0.95rem', display: 'flex', flexDirection: 'column', gap: 10, transition: 'border-color 0.2s, transform 0.2s', boxShadow: '0 4px 14px #0004' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: '#c5cbd3', fontWeight: 600 }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <span style={{ fontSize: 18 }}>{method.icon}</span>
                      {method.label}
                    </span>
                    <span style={{ padding: '0.15rem 0.55rem', borderRadius: 999, background: `${method.accent}22`, color: method.accent, fontSize: 12, fontWeight: 700 }}>Open</span>
                  </div>
                  <a href={method.href} target={method.label === 'Email' || method.label === 'Phone' ? '_self' : '_blank'} rel="noopener noreferrer" style={{ color: '#d4d4d4', textDecoration: 'none', wordBreak: 'break-word', fontFamily: 'Segoe UI, monospace' }}>
                    {method.value}
                  </a>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: 10, background: '#0c1015', border: '1px solid #23272e', borderRadius: 8, padding: '0.75rem 1rem', color: '#9cdcfe', fontSize: 13 }}>
              <span style={{ background: '#007acc', color: '#ffffff', padding: '0.25rem 0.45rem', borderRadius: 4, fontWeight: 700, fontSize: 12 }}>Ctrl + P</span>
              <span style={{ color: '#c5cbd3' }}>Open the Command Palette in this portfolio to jump to any section.</span>
            </div>
          </div>
        </div>
      );
    }
    default:
      return null;
  }
}

export default function EditorTabs({ activeTab, setActiveTab, profileImage }) {
  const [openTabs, setOpenTabs] = useState([allTabs[0]]);

  // Open tab if not already open
  React.useEffect(() => {
    if (!openTabs.includes(activeTab)) {
      setOpenTabs((prev) => [...prev, activeTab]);
    }
  }, [activeTab]);

  // Handle tab close
  const closeTab = (tab) => {
    setOpenTabs((prev) => {
      const idx = prev.indexOf(tab);
      const newTabs = prev.filter((t) => t !== tab);
      if (activeTab === tab) {
        setActiveTab(newTabs[idx - 1] || newTabs[0] || allTabs[0]);
      }
      return newTabs;
    });
  };

  // Handle drag end
  const onDragEnd = (result) => {
    if (!result.destination) return;
    const reordered = Array.from(openTabs);
    const [removed] = reordered.splice(result.source.index, 1);
    reordered.splice(result.destination.index, 0, removed);
    setOpenTabs(reordered);
  };

  return (
    <div className="editor-tabs-wrapper" style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden', minWidth: 0 }}>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="tabs" direction="horizontal">
          {(provided) => (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              className="editor-tabs-container"
              style={{ display: 'flex', background: '#23272e', borderBottom: '1.5px solid #222', overflowX: 'auto' }}
            >
              {openTabs.map((tab, idx) => (
                <Draggable key={tab} draggableId={tab} index={idx}>
                  {(dragProvided) => (
                    <div
                      ref={dragProvided.innerRef}
                      {...dragProvided.draggableProps}
                      {...dragProvided.dragHandleProps}
                      onClick={() => setActiveTab(tab)}
                      style={{
                        padding: '0.7rem 1.2rem',
                        cursor: 'pointer',
                        background: activeTab === tab ? '#1e1e1e' : 'transparent',
                        borderTop: activeTab === tab ? '2.5px solid #4FC3F7' : '2.5px solid transparent',
                        color: activeTab === tab ? '#4FC3F7' : '#d4d4d4',
                        fontWeight: activeTab === tab ? 'bold' : 'normal',
                        transition: 'all 0.2s',
                        minWidth: 100,
                        textAlign: 'center',
                        flex: '0 0 auto',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 8,
                        position: 'relative',
                      }}
                    >
                      {tab}
                      {idx > 0 && (
                        <button
                          onClick={e => { e.stopPropagation(); closeTab(tab); }}
                          style={{
                            marginLeft: 8,
                            background: 'none',
                            border: 'none',
                            color: '#888',
                            fontSize: 16,
                            cursor: 'pointer',
                          }}
                          aria-label={`Close ${tab} tab`}
                        >
                          ×
                        </button>
                      )}
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
      <div className="editor-content-responsive" style={{ flex: 1, padding: '2rem', overflowY: 'auto', minWidth: 0 }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35 }}
            style={{ height: '100%' }}
          >
            <TabContent tab={activeTab} profileImage={profileImage} />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
} 