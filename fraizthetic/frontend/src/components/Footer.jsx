import {
  Instagram,
  Globe,
  Mail,
  MapPin,
  Sparkles,
  Phone,
  ShoppingBag,
  Music,
  MessageCircle
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-white to-purple-50 pt-20 pb-10 border-t border-purple-100">
      <div className="container mx-auto px-6">
        <div className="grid gap-12 md:grid-cols-4 mb-16">

          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <Sparkles className="text-purple-500" size={24} />
              <span className="text-2xl font-bold tracking-tight bg-gradient-to-r from-purple-700 via-purple-600 to-pink-500 bg-clip-text text-transparent">
                Fraizthetic
              </span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              Wujudkan kulit impian dengan sentuhan teknologi medis terkini.
              Harmoni antara kesehatan dan estetika untuk kecantikan alami Anda.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-6 text-xs font-bold tracking-widest uppercase text-purple-900">
              Discover
            </h4>
            <ul className="space-y-3 text-sm font-medium text-slate-500">
              {["Treatments", "Specialists", "Skin Products", "Testimonials"].map(
                (item, i) => (
                  <li key={i}>
                    <a
                      href="#"
                      className="hover:text-purple-600 hover:translate-x-1 transition-all duration-300 inline-block"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-6 text-xs font-bold tracking-widest uppercase text-purple-900">
              Contact Us
            </h4>
            <div className="space-y-4 text-sm font-medium text-slate-500">

              {/* Instagram */}
              <a
                href="https://www.instagram.com/fraizthetic/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-purple-600 transition-colors group"
              >
                <div className="w-8 h-8 rounded-full bg-purple-50 flex items-center justify-center text-purple-500 group-hover:bg-purple-100 transition-colors">
                  <Instagram size={16} />
                </div>
                <span>@fraizthetic</span>
              </a>

              {/* TikTok */}
              <a
                href="https://www.tiktok.com/@fraizthetic"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-purple-600 transition-colors group"
              >
                <div className="w-8 h-8 rounded-full bg-purple-50 flex items-center justify-center text-purple-500 group-hover:bg-purple-100 transition-colors">
                  <Music size={16} />
                </div>
                <span>@fraizthetic</span>
              </a>

              {/* Shopee */}
              <a
                href="https://shopee.co.id/fraizthetic"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-purple-600 transition-colors group"
              >
                <div className="w-8 h-8 rounded-full bg-purple-50 flex items-center justify-center text-purple-500 group-hover:bg-purple-100 transition-colors">
                  <ShoppingBag size={16} />
                </div>
                <span>Shopee Store</span>
              </a>

              {/* Email */}
              <a
                href="mailto:fraizthetic@gmail.com"
                className="flex items-center gap-3 hover:text-purple-600 transition-colors group"
              >
                <div className="w-8 h-8 rounded-full bg-purple-50 flex items-center justify-center text-purple-500 group-hover:bg-purple-100 transition-colors">
                  <Mail size={16} />
                </div>
                <span>fraizthetic@gmail.com</span>
              </a>

              {/* Phone */}
              <div className="flex items-center gap-3 text-slate-500">
                <div className="w-8 h-8 rounded-full bg-purple-50 flex items-center justify-center text-purple-500">
                  <Phone size={16} />
                </div>
                <span>+62 815-9777-945</span>
              </div>
            </div>
          </div>

          {/* Location & CTA */}
          <div>
            <h4 className="mb-6 text-xs font-bold tracking-widest uppercase text-purple-900">
              Visit Us
            </h4>

            <div className="flex gap-3 mb-6 items-start text-slate-500 text-sm">
              <MapPin size={18} className="text-purple-500 mt-1 shrink-0" />
              <p>
                Golden Boulevard<br />
                Serpong Utara, Tangerang Selatan<br />
                Banten, Indonesia
              </p>
            </div>

            <div className="flex gap-3 mb-6 items-start text-slate-500 text-sm">
              <MapPin size={18} className="text-purple-500 mt-1 shrink-0" />
              <p>
                Rolling Hills Metro<br />
                Tamalate, Makassar<br />
                Sulawesi Selatan, Indonesia
              </p>
            </div>

            {/* Social Icons / CTA Buttons */}
            <div className="flex gap-3">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/fraizthetic/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white shadow-lg shadow-purple-200 hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <Instagram size={18} />
              </a>

              {/* Website */}
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white shadow-lg shadow-purple-200 hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <Globe size={18} />
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/6281597777945"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center text-white shadow-lg shadow-green-200 hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <MessageCircle size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-purple-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] font-semibold tracking-wider text-slate-400 uppercase">
            © {new Date().getFullYear()} Fraizthetic Aesthetic Clinic.
          </p>
          <div className="flex gap-6 text-[10px] font-bold text-purple-400 uppercase tracking-wider">
            <a href="#" className="hover:text-purple-600 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-purple-600 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
