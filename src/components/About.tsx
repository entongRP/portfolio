import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { GraduationCap, Heart, Lightbulb, Palette, Code, Layout, BookOpen } from "lucide-react";

export function About() {
  const skills = {
    design: [
      { name: "Adobe Illustrator", level: "Advanced" },
      { name: "Principles of Design", level: "Proficient" },
      { name: "Gestalt Principles", level: "Proficient" },
      { name: "Color Theory", level: "Advanced" },
      { name: "Typography", level: "Advanced" },
      { name: "Brand Design", level: "Proficient" },
      { name: "Character Design", level: "Intermediate" },
    ],
    development: [
      { name: "HTML", level: "Advanced" },
      { name: "CSS", level: "Advanced" },
      { name: "JavaScript", level: "Proficient" },
      { name: "Bootstrap", level: "Proficient" },
      { name: "JSON", level: "Intermediate" },
      { name: "Responsive Design", level: "Advanced" },
    ]
  };

  const interests = [
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Visual Design",
      description: "Exploring the intersection of art and communication through graphic design, focusing on creating meaningful visual experiences."
    },
    {
      icon: <Layout className="w-6 h-6" />,
      title: "User Experience",
      description: "Passionate about designing intuitive interfaces that prioritize user needs and enhance digital interactions."
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Web Technologies",
      description: "Constantly learning new web development techniques and staying updated with modern frameworks and best practices."
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Creative Problem Solving",
      description: "Combining analytical thinking with creative approaches to solve design and development challenges."
    }
  ];

  return (
    <div className="min-h-screen py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto space-y-20">
        {/* Introduction */}
        <section>
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl mb-4">About Me</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A passionate design student bridging creativity and technology
            </p>
          </div>

          <Card className="bg-gradient-to-br from-pink-50 to-pink-100 border border-pink-200">
            <CardContent className="p-8 md:p-12">
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-gray-700 leading-relaxed">
                  I'm a student at <span className="text-pink-500">Republic Polytechnic's School of Infocom</span> with 
                  a passion for design and a solid foundation in technology. My focus is on design, where I've learned 
                  key concepts like <span className="text-pink-500">principles of design, Gestalt principles, color theory, 
                  typography, brand and character design</span>, mainly using Adobe Illustrator.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mt-4">
                  At the same time, I've picked up programming skills with <span className="text-pink-500">JavaScript, HTML, CSS, 
                  and JSON</span>, and built websites using Bootstrap. I enjoy combining creativity with technology to create 
                  visuals and experiences that are both attractive and user-friendly. I'm eager to grow these skills further 
                  through internship opportunities.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Skills Section */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-pink-300 rounded-xl flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-pink-700" />
            </div>
            <h2 className="text-3xl text-pink-700">Skills</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Design Skills */}
            <Card className="border-pink-200">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Palette className="w-6 h-6 text-pink-500" />
                  <h3 className="text-2xl text-pink-700">Design Skills</h3>
                </div>
                <div className="space-y-4">
                  {skills.design.map((skill, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span className="text-gray-700">{skill.name}</span>
                      <Badge variant="secondary" className="bg-pink-100 text-pink-600">
                        {skill.level}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Development Skills */}
            <Card className="border-pink-200">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Code className="w-6 h-6 text-pink-500" />
                  <h3 className="text-2xl text-pink-700">Development Skills</h3>
                </div>
                <div className="space-y-4">
                  {skills.development.map((skill, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span className="text-gray-700">{skill.name}</span>
                      <Badge variant="secondary" className="bg-pink-100 text-pink-600">
                        {skill.level}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Education Section */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-pink-300 rounded-xl flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-pink-700" />
            </div>
            <h2 className="text-3xl text-pink-700">Education</h2>
          </div>

          <Card className="bg-gradient-to-br from-pink-50 to-pink-100 border border-pink-200">
            <CardContent className="p-8">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-white rounded-xl shadow-lg flex items-center justify-center flex-shrink-0 border border-pink-200">
                  <GraduationCap className="w-8 h-8 text-pink-500" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl mb-2 text-pink-700">Republic Polytechnic</h3>
                  <p className="text-lg text-pink-500 mb-4">School of Infocom</p>
                  <p className="text-gray-700 leading-relaxed">
                    Currently pursuing studies in Information and Communications Technology with a focus on 
                    design and web development. Gaining comprehensive knowledge in both creative design 
                    principles and technical programming skills.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <Badge className="bg-pink-200 text-pink-700 hover:bg-pink-300">Design</Badge>
                    <Badge className="bg-pink-300 text-pink-800 hover:bg-pink-400">Web Development</Badge>
                    <Badge className="bg-pink-200 text-pink-700 hover:bg-pink-300">Technology</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Interests Section */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-gradient-to-br from-pink-200 to-pink-300 rounded-xl flex items-center justify-center">
              <Heart className="w-6 h-6 text-pink-700" />
            </div>
            <h2 className="text-3xl text-pink-700">Interests</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {interests.map((interest, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-pink-200">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-pink-100 to-pink-200 rounded-lg flex items-center justify-center flex-shrink-0 text-pink-600">
                      {interest.icon}
                    </div>
                    <div>
                      <h3 className="text-xl mb-2 text-pink-700">{interest.title}</h3>
                      <p className="text-gray-600">{interest.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center py-12">
          <Card className="bg-gradient-to-br from-pink-200 to-pink-300 border border-pink-300">
            <CardContent className="p-12">
              <h2 className="text-3xl mb-4 text-pink-800">Ready to Collaborate?</h2>
              <p className="text-xl text-pink-700 mb-6">
                I'm actively seeking internship opportunities to apply and expand my skills in real-world projects.
              </p>
              <p className="text-lg text-pink-700">
                Let's create something amazing together!
              </p>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
