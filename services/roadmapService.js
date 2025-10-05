const roadmapService = (() => {
  function _experienceBucket(experience) {
    if (!experience) return "beginner";
    const e = experience.toString().trim().toLowerCase();
    if (e.includes("+")) return "experienced";
    if (e.includes("-")) {
      const parts = e.split("-").map(p => parseInt(p, 10));
      if (parts[0] === 0) return "beginner";
      return "intermediate";
    }
    const n = parseInt(e, 10);
    if (isNaN(n)) return "beginner";
    if (n <= 1) return "beginner";
    if (n <= 3) return "intermediate";
    return "experienced";
  }

  function getRoadmap(careerKey = null, experience = null) {
    const bucket = _experienceBucket(experience);
    const fundamentals = {
      beginner: "Dedicate 4–6 weeks to fundamentals: core concepts, syntax, and basic tools.",
      intermediate: "Spend 2–4 weeks consolidating fundamentals and filling knowledge gaps.",
      experienced: "Spend 1–2 weeks refreshing fundamentals and focusing on advanced topics."
    };
    const projectPhase = {
      beginner: "Build small guided projects to apply what you learned (2 projects).",
      intermediate: "Build medium-complexity projects and start contributing to small open-source components.",
      experienced: "Lead or architect a project; add complex features and document design decisions."
    };
    const applyPhase = {
      beginner: "Prepare a portfolio and apply for internships or entry-level roles.",
      intermediate: "Apply for mid-level roles and freelancing opportunities; prepare technical interviews.",
      experienced: "Target senior roles, system-design interviews, and leadership/mentorship opportunities."
    };
    const careerNotes = {
      "data scientist": "Emphasize statistical foundations, exploratory data analysis, and model evaluation.",
      "data analyst": "Emphasize SQL, dashboards, and data visualization tools (Tableau/Power BI).",
      "web developer": "Focus on responsive UI, client-side performance and at least one frontend framework.",
      "cloud engineer": "Focus on core cloud services, IaC (Infrastructure as Code), and CI/CD pipelines.",
      "cybersecurity analyst": "Practice hands-on labs (e.g., CTFs), network security tools, and vulnerability assessment.",
      "ai engineer": "Focus on deep learning frameworks, model deployment and MLOps practices.",
      "project manager": "Focus on Agile ceremonies, stakeholder communication, and planning tools.",
      "ui/ux designer": "Focus on prototypes, user research, and usability testing."
    };

    let roadmapHtml = `<div class="roadmap-section"><h3>3-Month Roadmap</h3>`;
    roadmapHtml += `<h4>Month 1 — Fundamentals</h4>`;
    roadmapHtml += `<p>${fundamentals[bucket]}</p>`;
    if (careerKey && careerNotes[careerKey]) {
      roadmapHtml += `<p><strong>Focus for your chosen field:</strong> ${careerNotes[careerKey]}</p>`;
    }
    roadmapHtml += `<h4>Month 2 — Projects & Hands-on</h4>`;
    roadmapHtml += `<p>${projectPhase[bucket]}</p>`;
    roadmapHtml += `<ul>
      <li>Create projects that solve realistic problems for your target role.</li>
      <li>Document each project in a README and a short case study.</li>
      <li>Use version control (Git) and deploy at least one project publicly.</li>
    </ul>`;
    roadmapHtml += `<h4>Month 3 — Apply & Improve</h4>`;
    roadmapHtml += `<p>${applyPhase[bucket]}</p>`;
    roadmapHtml += `<ul>
      <li>Prepare for interviews (domain-specific questions, coding practice, behavioural prep).</li>
      <li>Polish your resume and LinkedIn; include links to live projects and code repos.</li>
      <li>Seek feedback from peers or mentors and iterate on your portfolio.</li>
    </ul>`;
    roadmapHtml += `</div>`;
    roadmapHtml += `<div class="roadmap-checklist">
      <h4>Quick Checklist</h4>
      <ul>
        <li>Document learning & projects (blogs, READMEs)</li>
        <li>Set weekly goals and track progress</li>
        <li>Practice interview questions weekly</li>
        <li>Network with professionals in your target field</li>
      </ul>
    </div>`;
    return roadmapHtml;
  }

  return { getRoadmap };
})();
