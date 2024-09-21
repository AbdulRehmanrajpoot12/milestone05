var _a, _b, _c, _d, _e;
function getQueryParam(param) {
    var urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}
window.onload = function () {
    var nameParam = getQueryParam('name');
    var emailParam = getQueryParam('email');
    var phoneParam = getQueryParam('phone');
    if (nameParam) {
        document.getElementById('name').value = nameParam;
    }
    if (emailParam) {
        document.getElementById('email').value = emailParam;
    }
    if (phoneParam) {
        document.getElementById('phone').value = phoneParam;
    }
};
var experiences = [];
var skills = [];
var education = [];
// Event listener to add experience
(_a = document.getElementById('add-experience')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
    var title = prompt("Job Title:");
    var description = prompt("Job Description:");
    if (title && description) {
        experiences.push({ title: title, description: description });
        updateExperienceList();
    }
});
// Event listener to add skill
(_b = document.getElementById('add-skill')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', function () {
    var skill = prompt("Skill:");
    if (skill) {
        skills.push(skill);
        updateSkillsList();
    }
});
// Event listener to add education
(_c = document.getElementById('add-education')) === null || _c === void 0 ? void 0 : _c.addEventListener('click', function () {
    var degree = prompt("Degree:");
    var description = prompt("Institution and Duration:");
    if (degree && description) {
        education.push({ title: degree, description: description });
        updateEducationList();
    }
});
// Update the experience list in the UI
function updateExperienceList() {
    var experienceList = document.getElementById('experience-list');
    if (experienceList) {
        experienceList.innerHTML = experiences.map(function (exp) { return "<p><strong>".concat(exp.title, "</strong>: ").concat(exp.description, "</p>"); }).join('');
    }
}
// Update the skills list in the UI
function updateSkillsList() {
    var skillsList = document.getElementById('skills-list');
    if (skillsList) {
        skillsList.innerHTML = skills.map(function (skill) { return "<p>".concat(skill, "</p>"); }).join('');
    }
}
// Update the education list in the UI
function updateEducationList() {
    var educationList = document.getElementById('education-list');
    if (educationList) {
        educationList.innerHTML = education.map(function (edu) { return "<p><strong>".concat(edu.title, "</strong>: ").concat(edu.description, "</p>"); }).join('');
    }
}
// Generate resume preview
(_d = document.getElementById('generate-resume')) === null || _d === void 0 ? void 0 : _d.addEventListener('click', function () {
    var _a, _b, _c;
    var name = (_a = document.getElementById('name')) === null || _a === void 0 ? void 0 : _a.value;
    var email = (_b = document.getElementById('email')) === null || _b === void 0 ? void 0 : _b.value;
    var phone = (_c = document.getElementById('phone')) === null || _c === void 0 ? void 0 : _c.value;
    var resumePreview = document.getElementById('resume-preview');
    if (resumePreview) {
        resumePreview.innerHTML = "\n        <h2>".concat(name, "</h2>\n        <p>Email: ").concat(email, "</p>\n        <p>Phone: ").concat(phone, "</p>\n        <h3>Experience</h3>\n        ").concat(experiences.map(function (exp) { return "<p><strong>".concat(exp.title, "</strong>: ").concat(exp.description, "</p>"); }).join(''), "\n        <h3>Skills</h3>\n        ").concat(skills.map(function (skill) { return "<p>".concat(skill, "</p>"); }).join(''), "\n        <h3>Education</h3>\n        ").concat(education.map(function (edu) { return "<p><strong>".concat(edu.title, "</strong>: ").concat(edu.description, "</p>"); }).join(''), "\n      ");
    }
});
// Download resume
(_e = document.getElementById('download-resume')) === null || _e === void 0 ? void 0 : _e.addEventListener('click', function () {
    var _a;
    var resumeContent = (_a = document.getElementById('resume-preview')) === null || _a === void 0 ? void 0 : _a.innerHTML;
    if (resumeContent) {
        var blob = new Blob([resumeContent], { type: 'text/html' });
        var link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'resume.html';
        link.click();
    }
});
