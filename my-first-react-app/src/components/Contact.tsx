import { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Mail, MapPin, Linkedin, Github, Instagram, Send, CheckCircle2 } from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl mb-4">Get In Touch</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            I'm open to internship opportunities and collaborations. Let's connect and create something amazing together!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl mb-6">Send Me a Message</h2>
              
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl mb-2">Message Sent!</h3>
                  <p className="text-gray-600">Thank you for reaching out. I'll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      placeholder="What's this about?"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell me about your project or opportunity..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="mt-2"
                    />
                  </div>

                  <Button 
                    type="submit"
                    className="w-full bg-pink-300 text-pink-800 hover:bg-pink-400"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Contact Details Card */}
            <Card className="bg-gradient-to-br from-pink-50 to-pink-100 border border-pink-200">
              <CardContent className="p-8">
                <h2 className="text-2xl mb-6 text-pink-700">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-pink-300 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-pink-700" />
                    </div>
                    <div>
                      <h3 className="mb-1 text-pink-700">Email</h3>
                      <p className="text-gray-600">your.email@example.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-pink-300 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-pink-700" />
                    </div>
                    <div>
                      <h3 className="mb-1 text-pink-700">Location</h3>
                      <p className="text-gray-600">Singapore</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Media Card */}
            <Card className="border-pink-200">
              <CardContent className="p-8">
                <h2 className="text-2xl mb-6 text-pink-700">Connect With Me</h2>
                <div className="space-y-4">
                  <a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-lg hover:bg-pink-50 transition-colors duration-200 group"
                  >
                    <div className="w-12 h-12 bg-[#0077B5] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                      <Linkedin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="mb-1 text-pink-700">LinkedIn</h3>
                      <p className="text-sm text-gray-600">Connect professionally</p>
                    </div>
                  </a>

                  <a 
                    href="https://github.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-lg hover:bg-pink-50 transition-colors duration-200 group"
                  >
                    <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                      <Github className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="mb-1 text-pink-700">GitHub</h3>
                      <p className="text-sm text-gray-600">View my code projects</p>
                    </div>
                  </a>

                  <a 
                    href="https://instagram.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-lg hover:bg-pink-50 transition-colors duration-200 group"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-pink-200 to-pink-400 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                      <Instagram className="w-6 h-6 text-pink-700" />
                    </div>
                    <div>
                      <h3 className="mb-1 text-pink-700">Instagram</h3>
                      <p className="text-sm text-gray-600">See my creative work</p>
                    </div>
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Availability Card */}
            <Card className="bg-gradient-to-br from-pink-200 to-pink-300 border border-pink-300">
              <CardContent className="p-8">
                <h2 className="text-2xl mb-4 text-pink-800">Open to Opportunities</h2>
                <p className="text-pink-700 leading-relaxed">
                  I'm actively seeking internship opportunities in design and web development. 
                  Whether it's a creative project, collaborative work, or a learning opportunity, 
                  I'm excited to contribute and grow!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
