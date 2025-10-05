// Career Recommendation Microservice
const careerService = (() => {
  const careerPaths = {
    "data scientist": {
      title: "Career Path: Data Scientist",
      recommendations: [
        { skill: "python", message: "Learn Python (Pandas, NumPy, Scikit-Learn)" },
        { skill: "sql", message: "Develop SQL expertise for data analysis" },
        { skill: null, message: "Practice with Kaggle datasets and projects" }
      ]
    },
    "web developer": {
      title: "Career Path: Web Developer",
      recommendations: [
        { skill: "html", message: "Strengthen HTML5 and CSS3 fundamentals" },
        { skill: "javascript", message: "Master JavaScript and React.js" },
        { skill: null, message: "Build 3–4 portfolio websites" }
      ]
    },
    "cloud engineer": {
      title: "Career Path: Cloud Engineer",
      recommendations: [
        { skill: "aws", message: "Learn AWS services (EC2, S3, Lambda)" },
        { skill: "docker", message: "Understand Docker and Kubernetes" },
        { skill: null, message: "Deploy applications on AWS/Azure/GCP" }
      ]
    },
    "cybersecurity analyst": {
      title: "Career Path: Cybersecurity Analyst",
      recommendations: [
        { skill: "networking", message: "Understand firewalls, IDS, and VPNs" },
        { skill: "linux", message: "Learn Linux security fundamentals" },
        { skill: null, message: "Practice ethical hacking and penetration testing" }
      ]
    }
    // ... add more professions (50+) here
  };

  function getCareerAdvice(goal, skills) {
    let selectedPath = "general";

    for (const key in careerPaths) {
      if (goal.includes(key)) {
        selectedPath = key;
        break;
      }
    }

    if (careerPaths[selectedPath]) {
      let advice = `<div class="career-title">${careerPaths[selectedPath].title}</div><ul>`;
      careerPaths[selectedPath].recommendations.forEach(rec => {
        if (rec.skill && !skills.includes(rec.skill)) {
          advice += `<li>${rec.message}</li>`;
        } else if (!rec.skill) {
          advice += `<li>${rec.message}</li>`;
        }
      });
      advice += "</ul>";
      return advice;
    }

    return null; // if no match found
  }

  return { getCareerAdvice };
})();
