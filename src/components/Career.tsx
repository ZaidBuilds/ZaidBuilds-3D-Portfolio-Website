import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>12th Done. BCA Begins.</h4>
                <h5>Student · Saharanpur, India</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Completed board exams from Saharanpur. Got admitted into BCA at Subharti University. Stopped treating AI as a side interest and locked in. Discovered n8n, Python, APIs, and automation — no mentor, no roadmap, just obsession and long nights figuring out how things connect.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Mastering the Stack</h4>
                <h5>Deep Work · Technologies</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Dedicated the year to mastering the fundamental stack. Transitioned from tutorials to real code. Built early internal tools, Hey Jarvis, automation scripts, and client websites. Explored vector databases, refined API integrations, and understood how modern architectures are truly structured.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Tried. Failed. Learned.</h4>
                <h5>AutomateX · YouTube · Agency</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Launched a YouTube channel. Started freelancing. Tried running an agency. All three stalled — wrong positioning, inconsistent output, unclear brand. Didn't quit. Shut things down properly. Sat with the lessons. Regrouped with clarity.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI Solutionist</h4>
                <h5>ZaidBuilds</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Came back with a clear name, a real brand, and a sharper skill set than ever. Building Voice AI agents, WhatsApp bots, Claude Code integrations, OpenClaw systems, Instagram automation, and full-stack AI pipelines. Not starting over — starting better. Shipping every single day.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
