import {
  Instagram,
  Mail,
  MapPin,
  Heart,
  MessageCircle,
  Youtube,
  Users,
  Compass,
  ArrowRight,
  Music
} from "lucide-react";

const socialLinks = [
  {
    name: "Instagram",
    username: "eurekasmartcommunity",
    label: "@eurekasmartcommunity",
    baseUrl: "https://www.instagram.com/",
    Icon: Instagram,
    hover: "hover:text-pink-500",
    iconColor: "text-pink-400"
  },
  {
    name: "YouTube",
    username: "eurekasmartcommunity",
    label: "@eurekasmartcommunity",
    baseUrl: "https://www.youtube.com/@",
    Icon: Youtube,
    hover: "hover:text-blue-500",
    iconColor: "text-blue-400"
  },
  {
    name: "TikTok",
    username: "eurekasmartcommunity",
    label: "@eurekasmartcommunity",
    baseUrl: "https://www.tiktok.com/@",
    Icon: Music,
    hover: "hover:text-blue-500",
    iconColor: "text-blue-400"
  },
  {
    name: "Email",
    username: "eurekasmartcommunity@gmail.com",
    label: "eurekasmartcommunity@gmail.com",
    baseUrl: "mailto:",
    Icon: Mail,
    hover: "hover:text-teal-600",
    iconColor: "text-teal-400",
    external: false
  }
];

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-white via-[#f0f9f9] to-[#e6f0f5] pt-20 pb-10 border-t border-teal-50">
      <div className="container mx-auto px-6">
        <div className="grid gap-12 md:grid-cols-4 mb-16">

          {/* Brand Section */}
          <div className="space-y-6 md:col-span-1">
            <div className="flex items-center gap-2">
              <div className="p-1.5 bg-teal-500 rounded-lg">
                <Heart className="text-white" size={20} fill="currentColor" />
              </div>
              <span className="text-2xl font-serif font-bold tracking-tight text-teal-900">
                Eureka<span className="text-pink-400">.</span>
              </span>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed font-light">
              Ruang bertumbuh untuk jiwa yang lebih sehat. Kami percaya setiap individu berhak atas komunitas yang mendukung kesehatan mental dan kebahagiaan.
            </p>
          </div>

          {/* Community Links */}
          <div>
            <h4 className="mb-6 text-[11px] font-bold tracking-[0.2em] uppercase text-teal-800/60">
              Our Community
            </h4>
            <ul className="space-y-4 text-sm font-medium text-slate-600">
              {["Support Groups", "Webinar Psikologi", "Mental Health Toolkit", "Volunteer"].map(
                (item, i) => (
                  <li key={i}>
                    <a
                      href="#"
                      className="hover:text-teal-600 transition-all duration-300 flex items-center group"
                    >
                      <span className="w-0 group-hover:w-4 transition-all duration-300 overflow-hidden text-teal-500 mr-0 group-hover:mr-2">
                        <ArrowRight size={14} />
                      </span>
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Social Connect */}
          <div>
            <h4 className="mb-6 text-[11px] font-bold tracking-[0.2em] uppercase text-teal-800/60">
              Get Connected
            </h4>

            <div className="space-y-4 text-sm font-medium text-slate-600">
              {socialLinks.map(
                ({ name, username, label, baseUrl, Icon, hover, iconColor, external }) => (
                  <a
                    key={name}
                    href={`${baseUrl}${username}`}
                    target={external === false ? undefined : "_blank"}
                    rel={external === false ? undefined : "noopener noreferrer"}
                    className={`flex items-center gap-3 transition-colors ${hover}`}
                  >
                    <Icon size={18} className={iconColor} />
                    <span>{label}</span>
                  </a>
                )
              )}
            </div>
          </div>

          {/* Join CTA Section */}
          <div className="bg-white/50 p-6 rounded-2xl border border-white backdrop-blur-sm shadow-sm">
            <h4 className="mb-4 text-sm font-bold text-teal-900 font-serif">
              Siap untuk bertumbuh?
            </h4>
            <p className="text-xs text-slate-500 mb-6 leading-relaxed">
              Bergabunglah dengan ribuan anggota lainnya di grup WhatsApp eksklusif kami.
            </p>
            <a
              href="https://wa.me/your-link"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 px-4 bg-gradient-to-r from-teal-500 to-blue-500 text-white rounded-xl text-xs font-bold shadow-lg shadow-teal-100 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
            >
              <MessageCircle size={16} />
              GABUNG KOMUNITAS
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-teal-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <Compass size={14} className="text-teal-400" />
            <p className="text-[10px] font-medium tracking-wider text-slate-400 uppercase font-sans">
              © {new Date().getFullYear()} Eureka Smart Community. Be Kind to Your Mind.
            </p>
          </div>
          
          <div className="flex gap-8 text-[10px] font-bold text-teal-700/50 uppercase tracking-[0.1em]">
            <a href="#" className="hover:text-pink-400 transition-colors">Safe Space Policy</a>
            <a href="#" className="hover:text-pink-400 transition-colors">Privacy</a>
            <a href="#" className="hover:text-pink-400 transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;