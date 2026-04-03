import { useEffect, useRef } from "react";
import "./styles/TechStack.css";

const techCategories = [
  {
    emoji: "🤖",
    title: "AI / LLM",
    items: ["OpenAI", "Ollama", "LangChain", "Whisper", "RAG", "AI Agents"],
  },
  {
    emoji: "⚡",
    title: "Automation",
    items: ["n8n", "Make", "Zapier", "Webhooks", "BPA"],
  },
  {
    emoji: "💻",
    title: "Languages",
    items: ["Python", "JavaScript", "TypeScript", "SQL", "Bash"],
  },
  {
    emoji: "🔧",
    title: "Backend",
    items: ["Node.js", "Express", "Flask", "REST API", "Django"],
  },
  {
    emoji: "🗄️",
    title: "Databases",
    items: ["Firebase", "Supabase", "PostgreSQL", "MongoDB", "Vector DBs"],
  },
  {
    emoji: "☁️",
    title: "Infrastructure",
    items: ["Docker", "Linux", "Nginx", "Oracle Cloud", "AWS", "CI/CD"],
  },
  {
    emoji: "🔌",
    title: "Integrations",
    items: ["WhatsApp API", "Telegram", "Slack", "Stripe", "Razorpay"],
  },
  {
    emoji: "🎨",
    title: "Frontend",
    items: ["React", "Next.js", "Tailwind", "Three.js", "HTML5", "CSS3"],
  },
];

const TechStack = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Refresh ScrollTrigger after lazy load
    setTimeout(() => {
      import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
        ScrollTrigger.refresh();
      });
    }, 500);

    // 3D tilt on category cards
    const cards = sectionRef.current?.querySelectorAll(".tech-category-card");
    if (!cards) return;

    const handleMouseMove = (e: Event) => {
      const mouseEvent = e as MouseEvent;
      const card = mouseEvent.currentTarget as HTMLElement;
      const rect = card.getBoundingClientRect();
      const x = mouseEvent.clientX - rect.left;
      const y = mouseEvent.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -8;
      const rotateY = ((x - centerX) / centerX) * 8;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;

      const glowEl = card.querySelector(".tech-cat-glow") as HTMLElement;
      if (glowEl) {
        glowEl.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(194, 164, 255, 0.12) 0%, transparent 60%)`;
      }
    };

    const handleMouseLeave = (e: Event) => {
      const card = e.currentTarget as HTMLElement;
      card.style.transform =
        "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
      const glowEl = card.querySelector(".tech-cat-glow") as HTMLElement;
      if (glowEl) {
        glowEl.style.background = "transparent";
      }
    };

    cards.forEach((card) => {
      card.addEventListener("mousemove", handleMouseMove);
      card.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      cards.forEach((card) => {
        card.removeEventListener("mousemove", handleMouseMove);
        card.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <div className="techstack-section" ref={sectionRef}>
      <h2 className="techstack-title">
        <span className="techstack-emoji">⚙️</span> Tech{" "}
        <span className="techstack-accent">Arsenal</span>
      </h2>
      <div className="tech-categories-grid">
        {techCategories.map((cat, index) => (
          <div
            className="tech-category-card"
            key={cat.title}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="tech-cat-glow"></div>
            <div className="tech-cat-header">
              <span className="tech-cat-emoji">{cat.emoji}</span>
              <h3 className="tech-cat-title">{cat.title}</h3>
            </div>
            <div className="tech-cat-tags">
              {cat.items.map((item) => (
                <span className="tech-tag" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
