import { useState } from "react";
import { Home } from "./components/Home";
import { Portfolio } from "./components/Portfolio";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Button } from "./components/ui/button";
import { Menu, X } from "lucide-react";

export default function App() {
  const [activeTab, setActiveTab] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "portfolio", label: "Portfolio" },
    { id: "about", label: "About" },
    { id: "contact", label: "Contact" }
  ];

  const handleNavigate = (tab: string) => {
    setActiveTab(tab);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <nav className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-pink-200 to-pink-300 rounded-lg flex items-center justify-center">
                <span className="text-pink-700">P</span>
              </div>
              <span className="text-xl text-pink-700">Portfolio</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <Button
                  key={item.id}
                  variant={activeTab === item.id ? "default" : "ghost"}
                  onClick={() => handleNavigate(item.id)}
                  className={
                    activeTab === item.id
                      ? "bg-pink-300 text-pink-800 hover:bg-pink-400"
                      : "hover:bg-pink-50 hover:text-pink-700"
                  }
                >
                  {item.label}
                </Button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-2">
              {navItems.map((item) => (
                <Button
                  key={item.id}
                  variant={activeTab === item.id ? "default" : "ghost"}
                  onClick={() => handleNavigate(item.id)}
                  className={`w-full justify-start ${
                    activeTab === item.id
                      ? "bg-pink-300 text-pink-800 hover:bg-pink-400"
                      : "hover:bg-pink-50"
                  }`}
                >
                  {item.label}
                </Button>
              ))}
            </div>
          )}
        </nav>
      </header>

      {/* Main Content */}
      <main>
        {activeTab === "home" && <Home onNavigate={handleNavigate} />}
        {activeTab === "portfolio" && <Portfolio />}
        {activeTab === "about" && <About />}
        {activeTab === "contact" && <Contact />}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-pink-200 to-pink-300 rounded-lg flex items-center justify-center">
                  <span className="text-pink-700">P</span>
                </div>
                <span className="text-xl">Portfolio</span>
              </div>
              <p className="text-gray-400">
                Design student passionate about creating beautiful and functional digital experiences.
              </p>
            </div>

            <div>
              <h3 className="mb-4">Quick Links</h3>
              <div className="space-y-2">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavigate(item.id)}
                    className="block text-gray-400 hover:text-pink-300 transition-colors"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="mb-4">Connect</h3>
              <p className="text-gray-400 mb-4">
                Let's work together on your next project!
              </p>
              <Button
                onClick={() => handleNavigate("contact")}
                className="bg-pink-300 text-pink-800 hover:bg-pink-400"
              >
                Get In Touch
              </Button>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Portfolio. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
