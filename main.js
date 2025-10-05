(function () {
  const form = document.getElementById("careerForm");
  const resultEl = document.getElementById("result");

  if (!form || !resultEl) {
    console.error("Required DOM elements not found: #careerForm or #result");
    return;
  }

  function _showLoading() {
    resultEl.innerHTML = `<p>Generating guidance...</p>`;
  }

  function _showError(msg) {
    resultEl.innerHTML = `<div class="error"><strong>Error:</strong> ${escapeHtml(msg)}</div>`;
  }

  function escapeHtml(unsafe) {
    return unsafe
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const experience = (document.getElementById("experience").value || "").trim();
    const skillsRaw = (document.getElementById("skills").value || "").trim();
    const goalRaw = (document.getElementById("goal").value || "").trim();

    if (!skillsRaw || !goalRaw) {
      _showError("Please enter both current skills and a career goal.");
      return;
    }

    const skills = skillsRaw.toLowerCase();
    const goal = goalRaw.toLowerCase();

    _showLoading();

    try {
      const careerHtml = (typeof careerService !== "undefined")
        ? careerService.getCareerAdvice(goal, skills)
        : null;

      let outputHtml = "";

      if (careerHtml) {
        outputHtml += careerHtml;
      } else {
        outputHtml += (typeof generalService !== "undefined")
          ? generalService.getGeneralAdvice()
          : "<div class='career-title'>General Guidance</div><p>No specific match found.</p>";
      }

      outputHtml += (typeof roadmapService !== "undefined")
        ? roadmapService.getRoadmap(null, experience)
        : "<h3>3-Month Roadmap</h3><p>Roadmap service unavailable.</p>";

      if (!careerHtml && typeof generalService !== "undefined") {
        outputHtml += generalService.getRecommendedResources();
      }

      resultEl.innerHTML = outputHtml;
      resultEl.scrollIntoView({ behavior: "smooth" });

    } catch (err) {
      console.error("Error generating guidance:", err);
      _showError("An unexpected error occurred while generating guidance. Please try again.");
    }
  });
})();
