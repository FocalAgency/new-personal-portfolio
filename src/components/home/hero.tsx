import Image from "next/image";
import { Navigation } from "@/components/layout/navigation";
import { ArrowIcon } from "@/components/ui/icons";
import { projects } from "@/data/portfolio";

export function Hero() {
  const projectCount = projects.length.toString().padStart(2, "0");
  return (
    <section
      className="[--accent:var(--accent-ink)] relative isolate bg-paper text-ink h-[clamp(830px,_65.15vw,_1080px)] overflow-hidden [@media(max-width:1100px)_and_(min-width:761px)]:h-[850px] [@media(max-width:1000px)]:h-[auto]! [@media(max-width:1000px)]:min-h-[0]! [@media(max-width:1000px)]:flex! [@media(max-width:1000px)]:flex-col!"
      id="home"
      aria-labelledby="hero-title"
    >
      <div
        data-photo-entrance
        className="absolute inset-0 z-[-1] pointer-events-none [@media(max-width:1000px)]:hidden!"
      >
        <div
          className="absolute left-[33%] top-[-5%] w-[52%] h-[115%] [mask-image:linear-gradient(_to_right,_transparent_0%,_black_8%,_black_92%,_transparent_100%_)] will-change-transform [&_img]:object-cover [&_img]:object-top [&_img]:mix-blend-multiply [@media(min-width:1600px)]:left-[35%] [@media(min-width:1600px)]:w-[52%] [@media(min-width:1600px)]:top-[-5%] [@media(max-width:1100px)_and_(min-width:761px)]:left-[30%] [@media(max-width:1100px)_and_(min-width:761px)]:w-[65%] [@media(max-width:1100px)_and_(min-width:761px)]:top-[0] [@media(max-width:1100px)_and_(min-width:761px)]:h-[104%] [@media(prefers-reduced-motion:reduce)]:will-change-auto"
          data-parallax
        >
          <picture>
            <source
              media="(max-width: 1000px)"
              srcSet="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
            />
            <Image
              src="/images/hero/bankai.png"
              alt=""
              fill
              fetchPriority="high"
              sizes="(max-width: 1100px) 65vw, 52vw"
            />
          </picture>
        </div>
        <span className="absolute text-[7px] tracking-[0.07em] bottom-[12px] left-[50%] [color:#aaa] [transform:translateX(-50%)]">
          VISUAL STUDY / 001
        </span>
      </div>
      <header className="relative z-[4] flex justify-between items-center [padding:48px_var(--gutter)_0] [@media(max-width:1100px)_and_(min-width:761px)]:pt-[30px] [@media(max-width:1000px)]:block! [@media(max-width:1000px)]:[padding:24px_var(--gutter)_0]!">
        <Navigation />
        <div className="flex items-center gap-[36px] [@media(max-width:1100px)_and_(min-width:761px)]:gap-[20px] [@media(max-width:1000px)]:hidden!">
          <span className="text-[12px] leading-[1.5] [&_>_span]:text-light-muted [@media(max-width:1100px)_and_(min-width:761px)]:hidden">
            Independent developer
            <br />
            <span>Based in the United Kingdom</span>
          </span>
          <a
            href="#contact"
            className="inline-flex items-center justify-between gap-[30px] min-h-[48px] px-[20px] py-0 rounded-[3px] text-[14px] font-medium [transition:transform_0.25s_var(--ease),background_0.25s] hover:[transform:translateY(-2px)] bg-ink text-off-white hover:bg-accent-ink [&>svg]:text-accent-on-dark [&:hover>svg]:text-off-white min-w-[140px]"
            aria-label="Contact Kasam Ali"
          >
            <span>Let’s talk</span>
            <ArrowIcon />
          </a>
        </div>
      </header>
      <div className="absolute top-[25%] left-[var(--gutter)] z-[2] [&_>_[data-eyebrow]]:mb-[27px] [@media(min-width:1600px)]:top-[26%] [@media(max-width:1100px)_and_(min-width:761px)]:top-[24%] [@media(max-width:1000px)]:relative! [@media(max-width:1000px)]:top-[auto]! [@media(max-width:1000px)]:left-[auto]! [@media(max-width:1000px)]:w-[calc(100%_-_var(--gutter)_*_2)]! [@media(max-width:1000px)]:max-w-[640px]! [@media(max-width:1000px)]:[margin:48px_auto_0]! [@media(max-width:1000px)]:order-[1]! [@media(max-width:1000px)]:[&_>_[data-eyebrow]]:text-[12px]! [@media(max-width:1000px)]:[&_>_[data-eyebrow]]:mb-[28px]!">
        <p
          data-eyebrow
          className="text-[12px] font-[550] tracking-[0.045em] flex items-center gap-[9px]"
          data-enter
        >
          <span className="text-[22px] font-[400] leading-[10px] mr-[6px]">
            +
          </span>{" "}
          KASAM ALI · PORTFOLIO
        </p>
        <h1 id="hero-title" className="[font-family:var(--font-display),_Arial,_sans-serif] text-[clamp(70px,_7.1vw,_130px)] font-[650] [font-stretch:80%] [font-variation-settings:'wdth'_78] leading-[0.88] tracking-[-0.055em] [@media(max-width:1100px)_and_(min-width:761px)]:text-[76px] [@media(max-width:1000px)]:text-[clamp(44px,_15vw,_100px)]! [@media(max-width:1000px)]:[font-variation-settings:'wdth'_86]! [@media(max-width:1000px)]:leading-[1.02]! [@media(max-width:1000px)]:tracking-[-0.055em]!">
          <span className="block overflow-hidden pb-[0.09em] mb-[-0.09em] [&_>_[data-title-line]]:block">
            <span data-title-line>CREATIVE</span>
          </span>
          <span className="block overflow-hidden pb-[0.09em] mb-[-0.09em] [&_>_[data-title-line]]:block">
            <span data-title-line>
              DEVELOPER<span className="text-accent-ink">.</span>
            </span>
          </span>
        </h1>
        <div
          className="mt-[38px] [&_>_[data-eyebrow]]:text-[11px] [&_p]:text-[14px] [&_p]:leading-[1.5] [&_p]:mt-[18px] [&_p]:mb-[22px] [&_p]:max-w-[310px] [&_a]:min-h-[44px] [&_a]:text-[12px] [&_a]:[padding:0_16px] [&_a]:gap-[34px] [&_a_svg]:w-[16px] [@media(max-width:1000px)]:mt-[24px]! [@media(max-width:1000px)]:[&_>_[data-eyebrow]]:hidden! [@media(max-width:1000px)]:[&_br]:hidden! [@media(max-width:1000px)]:[&_p]:text-[16px]! [@media(max-width:1000px)]:[&_p]:leading-[1.65]! [@media(max-width:1000px)]:[&_p]:max-w-[34ch]! [@media(max-width:1000px)]:[&_p]:[margin:0_0_28px]! [@media(max-width:1000px)]:[&_a]:[flex:1_0_auto]! [@media(max-width:1000px)]:[&_a]:min-h-[50px]! [@media(max-width:1000px)]:[&_a]:text-[14px]! [@media(max-width:1000px)]:[&_a]:[padding:0_18px]! [@media(max-width:1000px)]:[&_a]:gap-[16px]!"
          data-enter
        >
          <span
            data-eyebrow
            className="text-[12px] font-[550] tracking-[0.045em] flex items-center gap-[9px]"
          >
            <i className="inline-block w-[6px] h-[6px] bg-accent rounded-full shrink-0" />{" "}
            (THE INTRODUCTION)
          </span>
          <p>
            I’m Kasam. I work across design and code
            <br /> to build websites that feel a little different.
          </p>
          <div className="[@media(max-width:1000px)]:flex! [@media(max-width:1000px)]:flex-wrap! [@media(max-width:1000px)]:gap-[12px]!">
            <a
              className="inline-flex items-center justify-between gap-[30px] min-h-[48px] px-[20px] py-0 rounded-[3px] text-[14px] font-medium [transition:transform_0.25s_var(--ease),background_0.25s] hover:[transform:translateY(-2px)] bg-ink text-off-white hover:bg-accent-ink [&>svg]:text-accent-on-dark [&:hover>svg]:text-off-white"
              href="#work"
            >
              Explore my work <ArrowIcon />
            </a>
            <a
              className="inline-flex items-center justify-between gap-[30px] min-h-[48px] px-[20px] py-0 rounded-[3px] text-[14px] font-medium [transition:transform_0.25s_var(--ease),background_0.25s] hover:[transform:translateY(-2px)] [@media(min-width:1001px)]:hidden [@media(max-width:1000px)]:inline-flex! [@media(max-width:1000px)]:[border:1px_solid_var(--ink)]! [@media(max-width:1000px)]:text-ink! [@media(max-width:1000px)]:[&:hover]:bg-ink! [@media(max-width:1000px)]:[&:hover]:text-off-white! [@media(max-width:1000px)]:[&_svg]:text-accent-ink! [@media(max-width:1000px)]:[&:hover_svg]:text-accent-on-dark!"
              href="#contact"
            >
              Let’s talk <ArrowIcon />
            </a>
          </div>
        </div>
      </div>
      <div
        className="absolute right-[var(--gutter)] top-[28%] w-[190px] z-[2] [@media(min-width:1600px)]:top-[29%] [@media(min-width:1600px)]:w-[220px] [@media(max-width:1100px)_and_(min-width:761px)]:w-[160px] [@media(max-width:1100px)_and_(min-width:761px)]:top-[25%] [@media(max-width:1000px)]:relative! [@media(max-width:1000px)]:top-[auto]! [@media(max-width:1000px)]:right-[auto]! [@media(max-width:1000px)]:w-[calc(100%_-_var(--gutter)_*_2)]! [@media(max-width:1000px)]:max-w-[640px]! [@media(max-width:1000px)]:[margin:24px_auto_0]! [@media(max-width:1000px)]:order-[2]!"
        data-enter
      >
        <div className="flex items-center gap-[8px] text-[11px] [background:rgba(255,_255,_255,_0.35)] [border:1px_solid_#ffffff60] rounded-[40px] [padding:7px_12px_7px_7px] w-[max-content] [backdrop-filter:blur(12px)] [@media(max-width:1000px)]:[background:transparent]! [@media(max-width:1000px)]:[border:0]! [@media(max-width:1000px)]:rounded-[0]! [@media(max-width:1000px)]:[backdrop-filter:none]! [@media(max-width:1000px)]:[padding:0]! [@media(max-width:1000px)]:text-[12px]! [@media(max-width:1000px)]:gap-[10px]!">
          <span className="grid [place-items:center] rounded-[50%] bg-ink text-off-white w-[25px] h-[25px] text-[17px] [@media(max-width:1000px)]:w-[7px]! [@media(max-width:1000px)]:h-[7px]! [@media(max-width:1000px)]:bg-accent-ink! [@media(max-width:1000px)]:text-[0px]!">
            ↗
          </span>{" "}
          Open to opportunities
        </div>
        <div className="text-[22px] leading-[1.1] tracking-[-0.03em] text-right mt-[112px] [&_>_span]:[color:#686868] [@media(min-width:1600px)]:mt-[125px] [@media(max-width:1100px)_and_(min-width:761px)]:mt-[110px] [@media(max-width:1100px)_and_(min-width:761px)]:text-[19px] [@media(max-width:1000px)]:hidden!">
          Good ideas deserve
          <br />
          <span>great execution.</span>
        </div>
        <div className="block mt-[36px] [&_>_[data-eyebrow]]:text-[9px] [&_>_[data-eyebrow]]:justify-between [&_>_[data-eyebrow]]:mb-[10px] [&:hover>span>img]:[transform:scale(1.08)] [@media(max-width:1000px)]:hidden!">
          <span
            data-eyebrow
            className="text-[12px] font-[550] tracking-[0.045em] flex items-center gap-[9px]"
          >
            THE CREATIVE SIDE <span>↗</span>
          </span>
          <span className="block h-[165px] relative overflow-hidden rounded-[4px] [background:#333] [&_>_img]:object-cover [&_>_img]:[object-position:48%_50%] [&_>_img]:[filter:grayscale(1)] [&_>_img]:[transition:transform_0.6s_var(--ease)] [@media(min-width:1600px)]:h-[190px] [@media(max-width:1100px)_and_(min-width:761px)]:h-[145px]">
            <Image
              src="/images/projects/block.png"
              alt="Hyperactive block reveal animation experiment"
              fill
              sizes="210px"
            />
          </span>
          <span className="text-[12px] mt-[10px] block [&_>_span]:block [&_>_span]:text-[10px] [&_>_span]:text-light-muted [&_>_span]:mt-[4px]">
            Hyperactive Block Reveal<span>Next.js / GSAP</span>
          </span>
          <span className="h-[2px] w-[100%] block mt-[15px] [background:#1112] [&:after]:[content:''] [&:after]:block [&:after]:w-[36%] [&:after]:h-[100%] [&:after]:bg-accent-ink" />
        </div>
      </div>
      <div
        className="absolute left-[var(--gutter)] right-[var(--gutter)] bottom-[34px] flex items-end justify-between gap-[24px] [@media(min-width:1600px)]:bottom-[45px] [@media(max-width:1000px)]:relative! [@media(max-width:1000px)]:left-[auto]! [@media(max-width:1000px)]:right-[auto]! [@media(max-width:1000px)]:bottom-[auto]! [@media(max-width:1000px)]:w-[calc(100%_-_var(--gutter)_*_2)]! [@media(max-width:1000px)]:max-w-[640px]! [@media(max-width:1000px)]:[margin:32px_auto_28px]! [@media(max-width:1000px)]:pt-[16px]! [@media(max-width:1000px)]:[border-top:1px_solid_var(--dark-line)]! [@media(max-width:1000px)]:block! [@media(max-width:1000px)]:order-[3]!"
        data-enter
      >
        <div className="grid [grid-template-columns:1.15fr_1fr] w-[330px] [border:7px_solid_#cdcdcd] [background:#cdcdcd] gap-[5px] [@media(min-width:1600px)]:w-[365px] [@media(max-width:1100px)_and_(min-width:761px)]:w-[290px] [@media(max-width:1000px)]:hidden!">
          <div className="[background:#202020] text-off-white [padding:15px_12px_0] [&_p]:text-[10px] [&_p]:leading-[1.45] [&_p]:mt-[12px] [&_p]:mb-[12px] [&_p_>_span]:[color:#b2b2b2] [&_>_a]:flex [&_>_a]:justify-between [&_>_a]:items-center [&_>_a]:min-h-[34px] [&_>_a]:bg-off-white [&_>_a]:text-ink [&_>_a]:[margin:0_-10px_2px] [&_>_a]:[padding:0_9px] [&_>_a]:text-[9px] [@media(min-width:1600px)]:[padding:20px_15px_0] [@media(min-width:1600px)]:[&_p]:text-[12px]">
            <span className="[font-family:var(--font-display),_sans-serif] text-[46px] leading-[1] tracking-[-0.06em] flex items-start justify-between [&_>_span]:text-[18px] [&_>_span]:tracking-[0] [&_>_span]:mt-[3px] [&_>_span]:text-accent-on-dark">
              {projectCount}
              <span>↗</span>
            </span>
            <p>
              Selected projects.
              <br />
              <span>A few different disciplines.</span>
            </p>
            <a href="#work">
              View the collection <ArrowIcon width="14" height="14" />
            </a>
          </div>
          <div className="[background:#bcbcbc] [padding:14px_12px] flex flex-col items-start justify-center gap-[4px] [&_>_[data-eyebrow]]:text-[7px] [&_>_[data-eyebrow]]:mb-[14px] [&_>_span:not(:first-child):not(:last-child)]:[font-family:var(--font-display),_sans-serif] [&_>_span:not(:first-child):not(:last-child)]:text-[19px] [&_>_span:not(:first-child):not(:last-child)]:tracking-[-0.05em] [&>span:last-child]:text-[8px] [&>span:last-child]:mt-[auto] [&>span:last-child]:pt-[14px] [&>span:last-child]:[color:#444] [@media(min-width:1600px)]:[padding:16px]">
            <span
              data-eyebrow
              className="text-[12px] font-[550] tracking-[0.045em] flex items-center gap-[9px]"
            >
              MY EVERYDAY TOOLS
            </span>
            <span>Next.js</span>
            <span>React</span>
            <span>TypeScript</span>
            <span>Ideas → Interfaces</span>
          </div>
        </div>
        <div className="[color:#fff] flex items-center gap-[17px] [font-family:var(--font-display),_sans-serif] text-[11px] tracking-[0.05em] mb-[15px] mr-[70px] [@media(max-width:1100px)_and_(min-width:761px)]:hidden [@media(max-width:1000px)]:hidden!">
          <span>FRONTEND</span>
          <span className="text-[20px]">✳</span>
          <span>BACKEND</span>
          <span className="text-[20px]">✳</span>
          <span>THE DETAILS</span>
        </div>
        <a
          href="#about"
          className="text-[9px] flex items-center gap-[16px] min-h-[44px] [@media(max-width:1100px)_and_(min-width:761px)]:mb-[10px] [@media(max-width:1000px)]:justify-between! [@media(max-width:1000px)]:text-[11px]! [@media(max-width:1000px)]:[margin:0]!"
          aria-label="Scroll to about"
        >
          <span>SCROLL TO EXPLORE</span>
          <span className="[border:1px_solid_#1115] w-[38px] h-[38px] rounded-[50%] grid [place-items:center] [&_>_svg]:[transform:rotate(135deg)] [&_>_svg]:w-[15px] [@media(max-width:1000px)]:w-[44px]! [@media(max-width:1000px)]:h-[44px]!">
            <ArrowIcon />
          </span>
        </a>
      </div>
    </section>
  );
}
