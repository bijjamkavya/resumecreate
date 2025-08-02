import { useState } from "react";
import { Mail, Phone, MapPin, Linkedin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    // Show success message
    toast({
      title: "Message Sent!",
      description: "Thank you for your message! I will get back to you soon.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "lakshmidurgatirumani2005@gmail.com",
      href: "mailto:lakshmidurgatirumani2005@gmail.com"
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+91 9652104883",
      href: "tel:+919652104883"
    },
    {
      icon: MapPin,
      title: "Location",
      content: "Visakhapatnam, India",
      href: null
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      content: "Connect with me",
      href: "https://www.linkedin.com/in/lakshmi-durga-tirumani"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-navy-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-xl text-blue-100">Ready to bring your ideas to life? Let's connect!</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
              <p className="text-blue-100 leading-relaxed mb-8">
                I'm always interested in new opportunities and exciting projects. Whether you're looking for a full-stack developer for your team or need help with a specific project, I'd love to hear from you.
              </p>
            </div>
            
            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                
                return (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                      <Icon className="text-white" size={20} />
                    </div>
                    <div>
                      <p className="font-semibold">{info.title}</p>
                      {info.href ? (
                        <a 
                          href={info.href} 
                          target={info.href.startsWith('http') ? '_blank' : undefined}
                          rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="text-blue-200 hover:text-white transition-colors"
                        >
                          {info.content}
                        </a>
                      ) : (
                        <p className="text-blue-200">{info.content}</p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Name *</label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="w-full bg-white/10 border-white/20 text-white placeholder:text-blue-200 focus:ring-emerald-400 focus:border-emerald-400"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email *</label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  required
                  className="w-full bg-white/10 border-white/20 text-white placeholder:text-blue-200 focus:ring-emerald-400 focus:border-emerald-400"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                <Input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project Inquiry"
                  className="w-full bg-white/10 border-white/20 text-white placeholder:text-blue-200 focus:ring-emerald-400 focus:border-emerald-400"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message *</label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Tell me about your project..."
                  required
                  className="w-full bg-white/10 border-white/20 text-white placeholder:text-blue-200 focus:ring-emerald-400 focus:border-emerald-400 resize-none"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-navy-800"
              >
                Send Message
                <Send className="ml-2" size={16} />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
