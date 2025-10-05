const generalService = (() => {
  function getGeneralAdvice() {
    return `
      <div class="general-advice">
        <h3>General Guidance</h3>
        <p>If your goals are broad or no exact match was found, follow this structured approach to choose and progress toward a career path:</p>
        <ul>
          <li><strong>Identify strengths:</strong> List your strongest technical and soft skills and areas you enjoy working in.</li>
          <li><strong>Explore adjacent fields:</strong> Try short online courses or workshops in 2–3 fields to evaluate interest and aptitude.</li>
          <li><strong>Prioritize learning:</strong> Focus on one domain for 6–12 weeks—depth is better than spreading thin.</li>
          <li><strong>Build small projects:</strong> Create 2–3 small projects to validate interest and showcase practical ability.</li>
          <li><strong>Network and mentor:</strong> Reach out to professionals for informational interviews and feedback.</li>
        </ul>
      </div>
    `;
  }

  function getRecommendedResources(category = null) {
    const resources = {
      core: [
        { title: "freeCodeCamp", url: "https://www.freecodecamp.org/" },
        { title: "Coursera (audit courses)", url: "https://www.coursera.org/" },
        { title: "edX (audit courses)", url: "https://www.edx.org/" },
        { title: "Khan Academy", url: "https://www.khanacademy.org/" }
      ],
      data: [
        { title: "Kaggle Learn", url: "https://www.kaggle.com/learn" },
        { title: "fast.ai", url: "https://www.fast.ai/" }
      ],
      web: [
        { title: "MDN Web Docs", url: "https://developer.mozilla.org/" },
        { title: "Frontend Masters (paid)", url: "https://frontendmasters.com/" }
      ],
      cloud: [
        { title: "AWS Training and Certification", url: "https://aws.amazon.com/training/" },
        { title: "Google Cloud Training", url: "https://cloud.google.com/training" }
      ],
      security: [
        { title: "OWASP", url: "https://owasp.org/" },
        { title: "TryHackMe", url: "https://tryhackme.com/" }
      ]
    };

    const chosen = category && resources[category] ? resources[category] : resources.core;
    let html = `<div class="resources"><h4>Recommended Resources</h4><ul>`;
    chosen.forEach(r => {
      html += `<li><a href="${r.url}" target="_blank" rel="noopener noreferrer">${r.title}</a></li>`;
    });
    html += `</ul></div>`;
    return html;
  }

  return { getGeneralAdvice, getRecommendedResources };
})();
