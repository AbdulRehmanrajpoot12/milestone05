function getQueryParam(param: string): string | null {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
  }
  
  window.onload = () => {
    const nameParam = getQueryParam('name');
    const emailParam = getQueryParam('email');
    const phoneParam = getQueryParam('phone');
    
    if (nameParam) {
      (document.getElementById('name') as HTMLInputElement).value = nameParam;
    }
    if (emailParam) {
      (document.getElementById('email') as HTMLInputElement).value = emailParam;
    }
    if (phoneParam) {
      (document.getElementById('phone') as HTMLInputElement).value = phoneParam;
    }
  };
  
  type Section = {
    title: string;
    description: string;
  };
  
  let experiences: Section[] = [];
  let skills: string[] = [];
  let education: Section[] = [];
  
  // Event listener to add experience
  document.getElementById('add-experience')?.addEventListener('click', () => {
    const title = prompt("Job Title:");
    const description = prompt("Job Description:");
    if (title && description) {
      experiences.push({ title, description });
      updateExperienceList();
    }
  });
  
  // Event listener to add skill
  document.getElementById('add-skill')?.addEventListener('click', () => {
    const skill = prompt("Skill:");
    if (skill) {
      skills.push(skill);
      updateSkillsList();
    }
  });
  
  // Event listener to add education
  document.getElementById('add-education')?.addEventListener('click', () => {
    const degree = prompt("Degree:");
    const description = prompt("Institution and Duration:");
    if (degree && description) {
      education.push({ title: degree, description });
      updateEducationList();
    }
  });
  
  // Update the experience list in the UI
  function updateExperienceList() {
    const experienceList = document.getElementById('experience-list');
    if (experienceList) {
      experienceList.innerHTML = experiences.map(exp => `<p><strong>${exp.title}</strong>: ${exp.description}</p>`).join('');
    }
  }
  
  // Update the skills list in the UI
  function updateSkillsList() {
    const skillsList = document.getElementById('skills-list');
    if (skillsList) {
      skillsList.innerHTML = skills.map(skill => `<p>${skill}</p>`).join('');
    }
  }
  
  // Update the education list in the UI
  function updateEducationList() {
    const educationList = document.getElementById('education-list');
    if (educationList) {
      educationList.innerHTML = education.map(edu => `<p><strong>${edu.title}</strong>: ${edu.description}</p>`).join('');
    }
  }
  
  // Generate resume preview
  document.getElementById('generate-resume')?.addEventListener('click', () => {
    const name = (document.getElementById('name') as HTMLInputElement)?.value;
    const email = (document.getElementById('email') as HTMLInputElement)?.value;
    const phone = (document.getElementById('phone') as HTMLInputElement)?.value;
    
    const resumePreview = document.getElementById('resume-preview');
    if (resumePreview) {
      resumePreview.innerHTML = `
        <h2>${name}</h2>
        <p>Email: ${email}</p>
        <p>Phone: ${phone}</p>
        <h3>Experience</h3>
        ${experiences.map(exp => `<p><strong>${exp.title}</strong>: ${exp.description}</p>`).join('')}
        <h3>Skills</h3>
        ${skills.map(skill => `<p>${skill}</p>`).join('')}
        <h3>Education</h3>
        ${education.map(edu => `<p><strong>${edu.title}</strong>: ${edu.description}</p>`).join('')}
      `;
    }
  });
  
  // Download resume
  document.getElementById('download-resume')?.addEventListener('click', () => {
    const resumeContent = document.getElementById('resume-preview')?.innerHTML;
    if (resumeContent) {
      const blob = new Blob([resumeContent], { type: 'text/html' });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = 'resume.html';
      link.click();
    }
  });
  