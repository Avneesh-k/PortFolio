import { Instagram, Linkedin, Mail, MapPin, Phone, X } from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-1 gap-12">
          <div className="space-y-8">
            {/* Contact Info - Centered */}
            <div className="flex flex-col sm:flex-row sm:justify-center sm:items-center gap-8 text-center">
              
              {/* Email */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-3">
                <div className="p-3 rounded-full bg-primary/10 mx-auto sm:mx-0">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:ak1555672@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    ak1555672@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-3">
                <div className="p-3 rounded-full bg-primary/10 mx-auto sm:mx-0">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <a
                    href="tel:9794558583"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    9794558583
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-3">
                <div className="p-3 rounded-full bg-primary/10 mx-auto sm:mx-0">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <span className="text-muted-foreground hover:text-primary transition-colors cursor-default">
                    Haseran, Kannauj
                  </span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-6">
              <h4 className="font-medium mb-4 text-center">Connect With Me</h4>
              <div className="flex space-x-4 justify-center">
                <a
                  href="https://www.linkedin.com/in/avneesh-kumar-6238602b2/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin />
                </a>
                <a
                  href="https://x.com/ak1555672"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <X className="w-6 h-6" />
                </a>
                <a href="#">
                  <Instagram />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
