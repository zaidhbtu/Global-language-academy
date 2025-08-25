import { Link } from "react-router-dom";
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from "react-icons/fi";

export default function Footer() {
  const languageLinks = [
    { name: "Spanish", href: "/languages#spanish" },
    { name: "Arabic", href: "/languages#arabic" },
    { name: "English", href: "/languages#english" },
    { name: "French", href: "/languages#french" },
    { name: "German", href: "/languages#german" },
    { name: "Mandarin", href: "/languages#mandarin" },
  ];

  const companyLinks = [
    { name: "About Us", href: "/about" },
    { name: "Our Instructors", href: "/about#instructors" },
    { name: "Teaching Method", href: "/about#method" },
    { name: "Success Stories", href: "/about#stories" },
    { name: "Careers", href: "/careers" },
    { name: "Blog", href: "/blog" },
  ];

  const supportLinks = [
    { name: "Help Center", href: "/help" },
    { name: "Contact Us", href: "/contact" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Refund Policy", href: "/refund" },
    { name: "Technical Support", href: "/support" },
  ];

  const socialLinks = [
    { Icon: FiFacebook, href: "https://facebook.com", label: "Facebook" },
    { Icon: FiTwitter, href: "https://twitter.com", label: "Twitter" },
    { Icon: FiInstagram, href: "https://instagram.com", label: "Instagram" },
    { Icon: FiLinkedin, href: "https://linkedin.com", label: "LinkedIn" },
  ];

  return (
    <footer className="bg-slate-900 text-slate-300 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo + Description + Socials */}
          <div>
            <h3
              className="text-2xl font-bold text-white mb-4"
              data-testid="footer-logo"
            >
              LinguaLearn
            </h3>
            <p
              className="text-slate-400 mb-6"
              data-testid="footer-description"
            >
              Connecting cultures through language education. Start your journey
              to fluency today.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white transition-colors"
                  aria-label={label}
                  data-testid={`social-${label.toLowerCase()}`}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div>
            <h4
              className="text-lg font-semibold text-white mb-4"
              data-testid="footer-languages-title"
            >
              Languages
            </h4>
            <ul className="space-y-2">
              {languageLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-slate-400 hover:text-white transition-colors"
                    data-testid={`footer-language-${link.name.toLowerCase()}`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4
              className="text-lg font-semibold text-white mb-4"
              data-testid="footer-company-title"
            >
              Company
            </h4>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-slate-400 hover:text-white transition-colors"
                    data-testid={`footer-company-${link.name
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4
              className="text-lg font-semibold text-white mb-4"
              data-testid="footer-support-title"
            >
              Support
            </h4>
            <ul className="space-y-2">
              {supportLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-slate-400 hover:text-white transition-colors"
                    data-testid={`footer-support-${link.name
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-slate-800 mt-12 pt-8 text-center">
          <p className="text-slate-400" data-testid="footer-copyright">
            &copy; 2024 LinguaLearn. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
