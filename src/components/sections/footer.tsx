import { profile } from "@/data/portfolio";
import { ArrowIcon, BrandMark } from "@/components/ui/icons";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-contact">
          <a href="#home" className="footer-brand">
            <BrandMark width="24" height="24" /> KASAM ALI
          </a>
          <nav className="footer-socials" aria-label="Social links">
            {profile.socials.map((social) => (
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                key={social.name}
              >
                {social.name}
              </a>
            ))}
          </nav>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Kasam Ali</span>
          <a href="#home">
            <span className="desktop-back-top">Back to top ↑</span>
            <span className="mobile-back-top">
              Back to top <ArrowIcon direction="up" width="15" height="15" />
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
