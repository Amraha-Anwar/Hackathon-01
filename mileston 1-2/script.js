// toggle functionality to personal information
var toggleButton1 = document.getElementById('toggle-info');
var togglePersonalInformation = document.getElementById('Personal-info');
toggleButton1.addEventListener('click', function () {
    if (togglePersonalInformation.style.display === 'none') {
        togglePersonalInformation.style.display = 'block';
    }
    else {
        togglePersonalInformation.style.display = 'none';
    }
});
// toggle functionality to skills
var toggleButton3 = document.getElementById('toggle-skills');
var toggleSkills = document.getElementById('skills');
toggleButton3.addEventListener('click', function () {
    if (toggleSkills.style.display === 'none') {
        toggleSkills.style.display = 'block';
    }
    else {
        toggleSkills.style.display = 'none';
    }
});
// toggle functionality to work experience
var toggleButton4 = document.getElementById('toggle-experience');
var toggleWorkExperience = document.getElementById('experience');
toggleButton4.addEventListener('click', function () {
    if (toggleWorkExperience.style.display === 'none') {
        toggleWorkExperience.style.display = 'block';
    }
    else {
        toggleWorkExperience.style.display = 'none';
    }
});
