import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Work = () => {
  useGSAP(() => {
    // 6 cards of ~650px each. 
    // Total Width is ~3900px. 
    // On a 1920px screen, we need to scroll about 2500-3000px to see everything.
    // We'll use 5000px as a safe, generous scroll duration (end)
    // and -4000px as the final displacement (x) to ensure last card clears center.
    
    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: "+=3500",
        scrub: 1,
        pin: true,
        pinSpacing: true,
        id: "work",
        invalidateOnRefresh: true,
        onLeave: () => gsap.set(".work-section", { display: "none" }),
        onEnterBack: () => gsap.set(".work-section", { display: "block" }),
      },
    });

    timeline.to(".work-flex", {
      x: "-2800px",
      ease: "none",
    });

    return () => {
      timeline.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {[
            {
              name: "Hey Jarvis",
              category: "Voice AI Agent",
              tools: "Python, Edge TTS, Web Speech API, Ollama",
              image: "/images/heyjarvis.png"
            },
            {
              name: "OpenClaw",
              category: "Web Scraper API / SaaS",
              tools: "Next.js, Tailwind, Crawlee, Stripe",
              image: "/images/openclaw.png"
            },
            {
              name: "ZaidBuilds Hub",
              category: "Course Platform",
              tools: "React, Firebase, Stripe, Tailwind",
              image: "/images/zaidbuilds.png"
            },
            {
              name: "AI Assistant for University",
              category: "Multi-Agent System",
              tools: "n8n, LangChain, Flowise, React",
              image: "/images/ai_university.png"
            },
            {
              name: "Lumina Dental",
              category: "Business Website",
              tools: "React, Framer Motion, Tailwind",
              image: "/images/lumina.png"
            },
            {
              name: "Whatsapp Bulk Messenger",
              category: "Automation System",
              tools: "Python, Selenium, WhatsApp Web API",
              image: "/images/whatsapp.png"
            },
          ].map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>

                  <div>
                    <h4>{project.name}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
              </div>
              <WorkImage image={project.image} alt={project.name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
