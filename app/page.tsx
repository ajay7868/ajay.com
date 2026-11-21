"use client";

const portraitSrc = "/ajay-portrait.svg";
import { useEffect, useRef } from "react";

const projects = [
 {n:"01",name:"Agoda · Booking Holdings",kind:"Travel technology",copy:"Building full-stack product experiences and scalable platform capabilities for a global travel business.",tags:["TypeScript","React","Node.js","Microservices"]},
 {n:"02",name:"StudyWithPathShala",kind:"AI-powered learning platform",copy:"An AI-enabled reading and learning platform with intelligent workflows and a broad REST API ecosystem.",tags:["AI","LLMs","Node.js","React"]},
 {n:"03",name:"SolvePact",kind:"AI-first technology venture",copy:"Exploring AI agents and business automation to simplify complex operational workflows.",tags:["AI Agents","Automation","Architecture"]},
 {n:"04",name:"Milkano Agro",kind:"Digital platform & ERP",copy:"Product engineering across web experience, backend services and cloud infrastructure.",tags:["AWS","Node.js","CloudFront","S3"]}
];
const skills = [["01","Full-stack engineering","TypeScript · JavaScript · React · Next.js · Angular · Node.js"],["02","Backend & distributed systems","Microservices · API design · Event-driven architecture · Scalability"],["03","AI & intelligent systems","LLM integration · RAG pipelines · AI agents · Workflow automation"],["04","Cloud & platform","AWS · S3 · CloudFront · EC2 · RDS · CI/CD"],["05","Data & persistence","MySQL · Aurora · MongoDB · DynamoDB · Redis"],["06","Technical leadership","System design · Architecture · Mentoring · Engineering practices"]];
const scenes = [
 ["01","The builder","11+ years turning complex engineering challenges into products that scale.",portraitSrc],
 ["02","The journey","From hands-on full-stack engineering to owning architecture and delivery.",portraitSrc],
 ["03","Systems that scale","Distributed services, resilient APIs and cloud-native platform foundations.",portraitSrc],
 ["04","Products with purpose","Travel technology, AI-powered learning, ERP and business automation.",portraitSrc],
 ["05","Engineering with AI","Applying LLMs, RAG and agents to create genuinely useful experiences.",portraitSrc],
 ["06","What comes next","Building thoughtful products with teams who care about craft and impact.",portraitSrc]
];
export default function Home(){
 const root=useRef<HTMLElement>(null);
 useEffect(()=>{
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  let ctx:{revert:()=>void}|undefined; let mounted=true;
  import("gsap").then(async({gsap})=>{
   const{ScrollTrigger}=await import("gsap/ScrollTrigger"); if(!mounted||!root.current)return;
   gsap.registerPlugin(ScrollTrigger);
   ctx=gsap.context(()=>{
    gsap.utils.toArray<HTMLElement>(".reveal").forEach(el=>gsap.fromTo(el,{y:26,opacity:0},{y:0,opacity:1,duration:.75,ease:"power3.out",scrollTrigger:{trigger:el,start:"top 88%",once:true}}));
    gsap.to(".hero-aura",{y:100,ease:"none",scrollTrigger:{trigger:".hero",start:"top top",end:"bottom top",scrub:true}});
    const panels=gsap.utils.toArray<HTMLElement>(".story-scene");
    const story=gsap.timeline({scrollTrigger:{trigger:".story-stage",start:"top top",end:"+=500%",pin:true,scrub:1,anticipatePin:1}});
    panels.forEach((panel,i)=>{
     story.to(panel,{autoAlpha:1,duration:.18},i).to(panel,{autoAlpha:0,duration:.18},i+.82);
     const photo=panel.querySelector(".story-photo");
     if(photo) story.fromTo(photo,{scale:1.08},{scale:1,duration:1},i);
    });
   },root);
  });
  return()=>{mounted=false;ctx?.revert();};
 },[]);
 return <a className="skip-link" href="#main-content">Skip to content</a>
 <main id="main-content" ref={root}>
  <nav className="nav" aria-label="Primary navigation"><a className="logo" href="#top"><span>A</span> AJAY KUMAR YADAV</a><div className="nav-links"><a href="#top">Home</a><a href="#about">About</a><a href="#story">Story</a><a href="#work">Work</a><a href="#skills">Skills</a><a href="#contact">Contact</a></div><details className="mobile-menu"><summary aria-label="Open navigation menu">Menu <span>＋</span></summary><div><a href="#about">About</a><a href="#story">Story</a><a href="#work">Work</a><a href="#skills">Skills</a><a href="#contact">Contact</a></div></details><a className="nav-talk" href="https://www.linkedin.com/in/ajayyadav016/" target="_blank" rel="noreferrer">Let’s talk ↗</a></nav>
  <section className="hero" id="top"><div className="hero-overlay"/><div className="hero-aura"/><div className="hero-copy"><p className="eyebrow"><i/> ENGINEER · BUILDER · PROBLEM SOLVER</p><p className="hi">HELLO, I’M</p><h1>AJAY<br/><em>KUMAR YADAV</em></h1><p className="role">Senior Full Stack Engineer · AI Engineer · Technical Leader</p><p className="hero-desc">Building scalable products, intelligent AI solutions and high-performance engineering experiences.</p><div className="actions"><a className="btn gold" href="#work">Explore my work <b>↘</b></a><a className="btn outline" href="https://www.linkedin.com/in/ajayyadav016/" target="_blank" rel="noreferrer">Connect on LinkedIn ↗</a></div><div className="hero-stats"><div><strong>11<span>+</span></strong><small>YEARS EXPERIENCE</small></div><div><strong>AI<span>+</span></strong><small>PRODUCT ENGINEERING</small></div><div><strong>Scale<span>.</span></strong><small>PRODUCTION SYSTEMS</small></div></div></div><div className="hero-portrait"><div className="portrait-frame"><img src={portraitSrc} alt="Portrait of Ajay Kumar Yadav" fetchPriority="high" decoding="async" /><div className="portrait-shade"/><span>THE BUILDER · NOIDA, INDIA</span></div><div className="portrait-index">01 / THE BUILDER</div></div><div className="scroll-cue">SCROLL TO EXPLORE <span/></div></section>
  <section className="section about" id="about"><div className="section-label"><span>01 / ABOUT</span><span>THE JOURNEY SO FAR</span></div><div className="about-grid"><div className="about-photo reveal"><img src={portraitSrc} alt="Portrait of Ajay Kumar Yadav" loading="lazy" decoding="async" /><span>AJAY · PERSONAL PORTRAIT</span></div><div className="about-copy reveal"><h2>Technology with<br/><em>purpose and scale.</em></h2><p>With 11+ years in software engineering, I work across frontend, backend and cloud infrastructure to turn complex problems into dependable products.</p><p>My experience spans global travel technology, AI-powered learning products, ERP platforms and new AI-first ventures — combining hands-on engineering with system thinking and a product mindset.</p><a className="inline-link" href="https://www.linkedin.com/in/ajayyadav016/" target="_blank" rel="noreferrer">Explore my professional journey ↗</a></div></div></section>
  <section className="story-intro section" id="story"><div className="section-label"><span>02 / THE CINEMATIC STORY</span><span>SCROLL TO MOVE THROUGH THE JOURNEY</span></div><h2 className="reveal">Six frames.<br/><em>One engineering journey.</em></h2></section>
  <section className="story-stage" aria-label="Six-scene cinematic engineering story">{scenes.map((s,i)=><article className="story-scene" key={s[0]} style={{opacity:i===0?1:0}}><img className="story-photo" src={s[3]} alt="" loading="lazy" decoding="async" /><div className="story-vignette"/><div className="story-caption"><span>{s[0]} / 06</span><p>AJAY KUMAR YADAV · ENGINEERING JOURNEY</p><h2>{s[1]}</h2><div>{s[2]}</div></div></article>)}<div className="story-progress">SCROLL TO EXPLORE <span>01 — 06</span></div></section>
  <section className="section work" id="work"><div className="section-label"><span>03 / SELECTED WORK</span><span>PRODUCTS, PLATFORMS & IMPACT</span></div><div className="section-heading reveal"><h2>Ideas into<br/><em>real products.</em></h2><p>A selection of engineering work across travel, education, automation and digital platforms.</p></div><div className="work-list">{projects.map(p=><article className="work-card reveal" key={p.n}><span className="work-number">{p.n}</span><div><small>{p.kind}</small><h3>{p.name}</h3><p>{p.copy}</p><div className="tags">{p.tags.map(t=><span key={t}>{t}</span>)}</div></div><b>↗</b></article>)}</div></section>
  <section className="section skills" id="skills"><div className="section-label"><span>04 / EXPERTISE</span><span>STRONG FOUNDATIONS · MODERN TOOLING</span></div><div className="section-heading reveal"><h2>Engineering for<br/><em>what’s next.</em></h2><p>From architecture and distributed systems to AI-powered product experiences.</p></div><div className="skill-grid">{skills.map(s=><article className="skill reveal" key={s[0]}><span>{s[0]}</span><div><h3>{s[1]}</h3><p>{s[2]}</p></div><b>↗</b></article>)}</div><div className="stack-line reveal"><span>CORE STACK</span><p>JavaScript · TypeScript · React · Node.js · AWS · MySQL · MongoDB · DynamoDB · LLMs · RAG</p></div></section>
  <section className="quote"><div className="quote-inner reveal"><span>ENGINEERING PRINCIPLE</span><h2>Good engineering<br/>solves today. <em>Great<br/>architecture scales<br/>tomorrow.</em></h2><p>Curiosity in the details. Clarity in the architecture. Purpose in every product.</p></div></section>
  <footer className="section contact" id="contact"><div className="section-label"><span>05 / NEXT CHAPTER</span><span>LET’S BUILD SOMETHING MEANINGFUL</span></div><div className="contact-body reveal"><h2>Have a challenge<br/>worth <em>solving?</em></h2><a href="https://www.linkedin.com/in/ajayyadav016/" target="_blank" rel="noreferrer">Let’s talk ↗</a></div><div className="footer"><a className="logo" href="#top"><span>A</span> AJAY KUMAR YADAV</a><div><a href="https://www.linkedin.com/in/ajayyadav016/" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="https://github.com/ajay7868" target="_blank" rel="noreferrer">GitHub ↗</a><a href="https://www.youtube.com/@ajaykhyativlogs/" target="_blank" rel="noreferrer">YouTube ↗</a></div><small>© 2026 AJAY KUMAR YADAV</small></div></footer>
 </main>;
}
