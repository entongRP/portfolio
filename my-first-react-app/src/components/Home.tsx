import { Button } from "./ui/button";
import { ArrowRight, Code, Palette, Sparkles } from "lucide-react";

interface HomeProps {
  onNavigate: (tab: string) => void;
}

export function Home({ onNavigate }: HomeProps) {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-pink-50 via-pink-25 to-pink-100 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-pink-100 text-pink-600 px-4 py-2 rounded-full">
                <Sparkles className="w-4 h-4" />
                <span>Design Student & Creative Developer</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl">
                Hello, I'm a
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-pink-500">
                  Designer & Developer
                </span>
              </h1>
              
              <p className="text-lg text-gray-600 max-w-xl">
                I'm a student at Republic Polytechnic's School of Infocom with a passion for design and a solid foundation in technology. 
                I combine creativity with technology to create visuals and experiences that are both attractive and user-friendly.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button 
                  onClick={() => onNavigate("portfolio")}
                  className="bg-pink-300 text-pink-800 hover:bg-pink-400"
                >
                  View My Work
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => onNavigate("contact")}
                  className="border-pink-300 text-pink-600 hover:bg-pink-50"
                >
                  Get In Touch
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1621111848501-8d3634f82336?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGRlc2lnbmVyJTIwd29ya3NwYWNlfGVufDF8fHx8MTc2MTgzNDI3Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Creative workspace"
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white p-6 rounded-xl shadow-lg border border-pink-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-200 to-pink-300 rounded-lg flex items-center justify-center">
                    <Palette className="w-6 h-6 text-pink-700" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Available for</p>
                    <p className="text-pink-700">Internships</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Highlight Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4">What I Do</h2>
            <p className="text-gray-600">Bridging creativity and technology</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-8 rounded-2xl border border-pink-200">
              <div className="w-14 h-14 bg-pink-300 rounded-xl flex items-center justify-center mb-6">
                <Palette className="w-7 h-7 text-pink-700" />
              </div>
              <h3 className="text-2xl mb-4 text-pink-700">Design</h3>
              <p className="text-gray-700 mb-6">
                My focus is on design with expertise in principles of design, Gestalt principles, color theory, 
                typography, brand and character design using Adobe Illustrator.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-pink-400 rounded-full"></div>
                  Graphic Design
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-pink-400 rounded-full"></div>
                  Brand Identity
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-pink-400 rounded-full"></div>
                  Character Design
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-pink-400 rounded-full"></div>
                  Typography
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-8 rounded-2xl border border-pink-200">
              <div className="w-14 h-14 bg-pink-300 rounded-xl flex items-center justify-center mb-6">
                <Code className="w-7 h-7 text-pink-700" />
              </div>
              <h3 className="text-2xl mb-4 text-pink-700">Development</h3>
              <p className="text-gray-700 mb-6">
                Solid programming skills with JavaScript, HTML, CSS, and JSON. 
                Experience building responsive websites using Bootstrap and modern web technologies.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-pink-400 rounded-full"></div>
                  Web Development
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-pink-400 rounded-full"></div>
                  JavaScript & HTML/CSS
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-pink-400 rounded-full"></div>
                  Bootstrap Framework
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-pink-400 rounded-full"></div>
                  Responsive Design
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-pink-200 to-pink-300">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl mb-6 text-pink-800">Let's Create Something Amazing</h2>
          <p className="text-xl mb-8 text-pink-700">
            I'm eager to grow my skills further through internship opportunities and collaborations.
          </p>
          <Button 
            onClick={() => onNavigate("contact")}
            size="lg"
            className="bg-white text-pink-700 hover:bg-pink-50 border border-pink-300"
          >
            Start a Conversation
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>
    </div>
  );
}
