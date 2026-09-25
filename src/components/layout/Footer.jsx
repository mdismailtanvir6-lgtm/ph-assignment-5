import React from "react";

// Footer data array for easy maintenance and scaling
const FOOTER_DATA = {
  brand: {
    name: "Dev Stack",
    tagline:
      "Curated tools, technologies, and resources for developers building modern software.",
    copyrightYear: 2026,
  },
  socials: [
    { label: "GitHub", href: "#" },
    { label: "Twitter", href: "#" },
    { label: "LinkedIn", href: "#" },
  ],
  sections: [
    {
      title: "PRODUCT",
      links: [
        { label: "Home", href: "#" },
        { label: "Technologies", href: "#" },
        { label: "Projects", href: "#" },
      ],
    },
    {
      title: "COMPANY",
      links: [
        { label: "About", href: "#" },
        { label: "Contact", href: "#" },
        { label: "Careers", href: "#" },
      ],
    },
    {
      title: "LEGAL",
      links: [
        { label: "Privacy Policy", href: "#" },
        { label: "Terms of Service", href: "#" },
      ],
    },
  ],
  bottomLegal: [
    { label: "Privacy", href: "#" },
    { label: "Terms", href: "#" },
  ],
};

export const Footer = () => {
  return (
    <footer className="w-full bg-white text-slate-600 border-t border-slate-100 font-sans">
      <div className="container mx-auto px-2 md:px-4 lg:px-0  pt-12 pb-8">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row md:justify-between items-center md:items-start text-center md:text-left gap-8 md:gap-12 pb-12">
          {/* Brand Info & Socials */}
          <div className="max-w-sm flex flex-col items-center md:items-start">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2.5 group">
              <div className="w-8 h-8 rounded-lg bg-linear-to-tr from-purple-600 via-pink-500 to-rose-400 flex items-center justify-center shadow-sm">
                <span className="text-white font-extrabold text-xs tracking-tighter">
                  DS
                </span>
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-800">
                Dev{" "}
                <span className="bg-linear-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                  Stack
                </span>
              </span>
            </a>

            {/* Tagline */}
            <p className="mt-4 text-xs sm:text-sm text-slate-500 leading-relaxed max-w-xs md:max-w-none">
              {FOOTER_DATA.brand.tagline}
            </p>

            {/* Desktop Social Links */}
            <div className="hidden md:flex items-center gap-4 mt-6">
              {FOOTER_DATA.socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="text-xs font-semibold text-slate-600 hover:text-pink-600 transition-colors duration-200"
                >
                  {social.label}
                </a>
              ))}
            </div>

            {/* Mobile Social Links (Centered with bullet separators) */}
            <div className="flex md:hidden items-center justify-center gap-3 mt-5 text-xs font-medium text-slate-600">
              {FOOTER_DATA.socials.map((social, idx) => (
                <React.Fragment key={social.label}>
                  <a
                    href={social.href}
                    className="hover:text-pink-600 transition-colors"
                  >
                    {social.label}
                  </a>
                  {idx < FOOTER_DATA.socials.length - 1 && (
                    <span className="text-slate-400 font-bold">•</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Navigation Links (Hidden on small mobile screens as per designs, or shown grid) */}
          <div className="hidden md:grid grid-cols-3 gap-8 lg:gap-16">
            {FOOTER_DATA.sections.map((section) => (
              <div key={section.title} className="flex flex-col">
                <h4 className="text-xs font-bold text-slate-800 tracking-wider uppercase mb-4">
                  {section.title}
                </h4>
                <ul className="space-y-2.5">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-xs text-slate-500 hover:text-slate-800 transition-colors duration-200"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar Separator */}
        <div className="border-t border-slate-100 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>
            © {FOOTER_DATA.brand.copyrightYear} {FOOTER_DATA.brand.name}. All
            rights reserved.
          </p>

          <div className="flex items-center gap-4">
            {FOOTER_DATA.bottomLegal.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="hover:text-slate-600 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
