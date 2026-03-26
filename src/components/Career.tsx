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
                <h4>Built Myself First</h4>
                <h5>Self-taught · Meerut, India</h5>
              </div>
              <h3>2022</h3>
            </div>
            <p>
              Before any client, before any income — spent a year building myself. Discovered n8n, Python, APIs, automation. No mentor. No roadmap. Just obsession, YouTube tutorials, and long nights figuring out how things connect.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>12th Done. BCA Begins.</h4>
                <h5>Student · Subharti University</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Completed board exams. Got admitted into BCA. Stopped treating AI as a side interest and locked in. Started building real projects — Hey Jarvis, automation scripts, client websites. Working on skills daily.
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
