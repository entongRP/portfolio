import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { ExternalLink, Palette, Code } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Portfolio() {
  const [activeSubTab, setActiveSubTab] = useState("design");

  const designWorks = [
    {
      id: 1,
      title: "Brand Identity System",
      description: "Complete brand identity including logo, color palette, and typography guidelines",
      image: "https://images.unsplash.com/photo-1633533447057-56ccf997f4fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZCUyMGlkZW50aXR5JTIwZGVzaWdufGVufDF8fHx8MTc2MTc5NjE0M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Branding", "Adobe Illustrator", "Typography"],
      category: "design"
    },
    {
      id: 2,
      title: "Typography Poster Series",
      description: "Experimental typography posters exploring Gestalt principles and visual hierarchy",
      image: "https://images.unsplash.com/photo-1738003667850-a2fb736e31b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0eXBvZ3JhcGh5JTIwZGVzaWdufGVufDF8fHx8MTc2MTc3MDE4MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Typography", "Gestalt Principles", "Print Design"],
      category: "design"
    },
    {
      id: 3,
      title: "Character Design Collection",
      description: "Original character designs showcasing personality through color theory and form",
      image: "https://images.unsplash.com/photo-1652805363265-b8fbf9bbdfac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFwaGljJTIwZGVzaWduJTIwcG9ydGZvbGlvfGVufDF8fHx8MTc2MTcyOTcwOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Character Design", "Color Theory", "Illustration"],
      category: "design"
    },
    {
      id: 4,
      title: "Logo Design Portfolio",
      description: "Collection of logo designs applying principles of design and brand strategy",
      image: "https://images.unsplash.com/photo-1633533447057-56ccf997f4fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZCUyMGlkZW50aXR5JTIwZGVzaWdufGVufDF8fHx8MTc2MTc5NjE0M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Logo Design", "Branding", "Adobe Illustrator"],
      category: "design"
    }
  ];

  const webProjects = [
    {
      id: 5,
      title: "Responsive Portfolio Website",
      description: "Fully responsive portfolio built with HTML, CSS, and Bootstrap framework",
      image: "https://images.unsplash.com/photo-1707836868495-3307d371aba4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWJzaXRlJTIwbW9ja3VwJTIwZGVzaWdufGVufDF8fHx8MTc2MTcyNTE4Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["HTML", "CSS", "Bootstrap"],
      category: "web"
    },
    {
      id: 6,
      title: "Interactive Web Application",
      description: "Dynamic web app with JavaScript functionality and JSON data integration",
      image: "https://images.unsplash.com/photo-1593720213681-e9a8778330a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGluZ3xlbnwxfHx8fDE3NjE3OTYzMjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["JavaScript", "JSON", "Web Development"],
      category: "web"
    },
    {
      id: 7,
      title: "E-commerce Landing Page",
      description: "Modern landing page with responsive design and interactive elements",
      image: "https://images.unsplash.com/photo-1707836868495-3307d371aba4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWJzaXRlJTIwbW9ja3VwJTIwZGVzaWdufGVufDF8fHx8MTc2MTcyNTE4Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["HTML", "CSS", "Responsive Design"],
      category: "web"
    },
    {
      id: 8,
      title: "Dashboard Interface",
      description: "Clean dashboard UI built with modern web technologies and data visualization",
      image: "https://images.unsplash.com/photo-1593720213681-e9a8778330a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGluZ3xlbnwxfHx8fDE3NjE3OTYzMjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["JavaScript", "UI Design", "Web Development"],
      category: "web"
    }
  ];

  return (
    <div className="min-h-screen py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl mb-4">My Portfolio</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A showcase of my design and web development projects, combining creativity with technical expertise
          </p>
        </div>

        {/* Sub-navigation Tabs */}
        <Tabs value={activeSubTab} onValueChange={setActiveSubTab} className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
            <TabsTrigger value="design" className="flex items-center gap-2">
              <Palette className="w-4 h-4" />
              Design Works
            </TabsTrigger>
            <TabsTrigger value="web" className="flex items-center gap-2">
              <Code className="w-4 h-4" />
              Web Projects
            </TabsTrigger>
          </TabsList>

          {/* Design Works */}
          <TabsContent value="design" className="space-y-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
              {designWorks.map((project) => (
                <Card key={project.id} className="overflow-hidden group hover:shadow-xl transition-shadow duration-300">
                  <div className="relative aspect-video overflow-hidden bg-gray-100">
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                      <button className="bg-white text-gray-900 px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-100">
                        View Details
                        <ExternalLink className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl mb-2">{project.title}</h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, index) => (
                        <Badge key={index} variant="secondary" className="bg-pink-100 text-pink-600">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Web Projects */}
          <TabsContent value="web" className="space-y-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
              {webProjects.map((project) => (
                <Card key={project.id} className="overflow-hidden group hover:shadow-xl transition-shadow duration-300">
                  <div className="relative aspect-video overflow-hidden bg-gray-100">
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                      <button className="bg-white text-gray-900 px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-100">
                        View Project
                        <ExternalLink className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl mb-2">{project.title}</h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, index) => (
                        <Badge key={index} variant="secondary" className="bg-pink-100 text-pink-600">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
