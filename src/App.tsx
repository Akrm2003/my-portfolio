import { useState, useEffect } from 'react';
import { Github, Linkedin, Download, Mail, ChevronDown, Code, Brain, Trophy, Briefcase } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { Section } from './components/Section';
import { Card } from './components/Card';
import { SkillBadge } from './components/SkillBadge';
import { Theme } from './types';
import { projects, skills, experiences, achievements } from './data';

function App() {
  const [theme, setTheme] = useState<Theme>('dark');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="min-h-screen bg-gradient-radial from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-white transition-colors">
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center pt-16 relative">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-8 relative">
            <div className="absolute inset-0 bg-blue-500 rounded-full blur-2xl opacity-10 dark:opacity-20"></div>
            <img
              src="/akram.png"
              alt="Akram Sid Ahmed"
              className="w-48 h-48 rounded-full mx-auto object-cover shadow-lg relative"
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 animate-fade-in">
            Akram Sid Ahmed
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 animate-slide-up">
            Computer Science Student & Problem Solver
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="#contact"
              className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all transform hover:scale-105 shadow-md"
            >
              Get in Touch
            </a>
            <a
              href="#projects"
              className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 px-8 py-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-all transform hover:scale-105 shadow-md"
            >
              View Projects
            </a>
          </div>
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-subtle">
            <ChevronDown className="w-8 h-8 text-gray-400" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <Section id="about" title="About Me" icon={<Brain className="w-6 h-6" />}>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg leading-relaxed">
            I'm Akram Sid Ahmed, a computer science student at both Khartoum University and 42 Abu Dhabi. 
            Passionate about technology, problem-solving, and AI. I constantly seek to expand my knowledge 
            and build impactful projects.
          </p>
        </div>
      </Section>

      {/* Qualifications Section */}
      <Section id="qualifications" title="Qualifications" icon={<Code className="w-6 h-6" />}>
        <div className="grid md:grid-cols-2 gap-6">
          <Card
            title="42 Abu Dhabi"
            description="Ongoing Diploma in Software Engineering"
            className="border-t-4 border-blue-500"
          />
          <Card
            title="Khartoum University"
            description="Ongoing Bachelor's Degree in Computer Science"
            className="border-t-4 border-purple-500"
          />
        </div>
      </Section>

      {/* Skills Section */}
      <Section id="skills" title="Skills" icon={<Brain className="w-6 h-6" />}>
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <span className="bg-blue-100 dark:bg-blue-900 p-2 rounded-lg mr-2">
                <Brain className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </span>
              Soft Skills
            </h3>
            <div className="flex flex-wrap gap-3">
              {skills.filter(skill => skill.type === 'soft').map(skill => (
                <SkillBadge key={skill.name} skill={skill} />
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <span className="bg-green-100 dark:bg-green-900 p-2 rounded-lg mr-2">
                <Code className="w-5 h-5 text-green-600 dark:text-green-400" />
              </span>
              Hard Skills
            </h3>
            <div className="flex flex-wrap gap-3">
              {skills.filter(skill => skill.type === 'hard').map(skill => (
                <SkillBadge key={skill.name} skill={skill} />
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Experience Section */}
      <Section id="experience" title="Work Experience" icon={<Briefcase className="w-6 h-6" />}>
        <div className="grid md:grid-cols-2 gap-6">
          {experiences.map(exp => (
            <Card
              key={exp.title}
              title={exp.title}
              description={exp.description}
              className="border-l-4 border-blue-500"
            />
          ))}
        </div>
      </Section>

      {/* Projects Section */}
      <Section id="projects" title="Projects" icon={<Code className="w-6 h-6" />}>
        <div className="space-y-12">
          <div>
            <h3 className="text-xl font-semibold mb-6 flex items-center">
              <span className="bg-purple-100 dark:bg-purple-900 p-2 rounded-lg mr-2">
                <Code className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              </span>
              42 Projects
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.filter(project => project.category === '42').map(project => (
                <Card
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  className="border-t-4 border-purple-500"
                />
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-6 flex items-center">
              <span className="bg-blue-100 dark:bg-blue-900 p-2 rounded-lg mr-2">
                <Code className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </span>
              Personal Projects
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.filter(project => project.category === 'Personal').map(project => (
                <Card
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  className="border-t-4 border-blue-500"
                />
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Achievements Section */}
      <Section id="achievements" title="Achievements" icon={<Trophy className="w-6 h-6" />}>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map(achievement => (
            <Card
              key={achievement.title}
              title={achievement.title}
              description={achievement.description}
              className="border-l-4 border-yellow-500"
            />
          ))}
        </div>
      </Section>

      {/* Reflections Section */}
      <Section id="reflections" title="Reflections" icon={<Brain className="w-6 h-6" />}>
        <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
          <p className="text-lg leading-relaxed">
            My journey as a programmer has been full of ups and downs. Learning from failure has been 
            one of the most important lessons. At 42 Abu Dhabi, I've learned how to give and receive 
            feedback, work in teams, and manage my time effectively. Each project taught me something 
            new, and I look forward to what the future holds.
          </p>
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact" title="Contact & Links" icon={<Mail className="w-6 h-6" />}>
        <div className="flex flex-col items-center space-y-6">
          <div className="flex space-x-6">
            <a
              href="https://github.com/akrm2003"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-100 dark:bg-gray-800 p-4 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-all transform hover:scale-110"
            >
              <Github className="w-8 h-8" />
            </a>
            <a
              href="https://www.linkedin.com/in/%D8%A7%D9%83%D8%B1%D9%85-%D9%85%D8%AD%D9%85%D8%AF-%D8%B9%D9%84%D9%8A-63393530b/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-100 dark:bg-gray-800 p-4 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-all transform hover:scale-110"
            >
              <Linkedin className="w-8 h-8" />
            </a>
            <a
              href="mailto:mhmdlyakrm5@gmail.com"
              className="bg-gray-100 dark:bg-gray-800 p-4 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-all transform hover:scale-110"
            >
              <Mail className="w-8 h-8" />
            </a>
          </div>
          <a
          href="/Akram-CV.pdf" // This should still work if the file is inside /public
          download="Akram-CV.pdf"
          className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all transform hover:scale-105 shadow-md"
          >
          <Download className="w-5 h-5" />
          <span>Download CV</span>
        </a>
        </div>
      </Section>
    </div>
  );
}

export default App;