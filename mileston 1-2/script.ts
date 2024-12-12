// toggle functionality to personal information

const toggleButton1 = document.getElementById('toggle-info') as HTMLButtonElement
const togglePersonalInformation = document.getElementById('Personal-info') as HTMLElement

toggleButton1.addEventListener('click', ()=>{
    if (togglePersonalInformation.style.display === 'none') {
        togglePersonalInformation.style.display = 'block'
    } else {
        togglePersonalInformation.style.display = 'none'
    }
});


// toggle functionality to skills
const toggleButton3 = document.getElementById('toggle-skills') as HTMLButtonElement
const toggleSkills = document.getElementById('skills') as HTMLElement

toggleButton3.addEventListener('click', ()=>{
    if(toggleSkills.style.display === 'none') {
        toggleSkills.style.display = 'block'
    } else{
        toggleSkills.style.display = 'none'
    }
});

// toggle functionality to work experience
const toggleButton4 = document.getElementById('toggle-experience')as HTMLButtonElement
const toggleWorkExperience = document.getElementById('experience')as HTMLElement

toggleButton4.addEventListener('click', ()=>{
    if(toggleWorkExperience.style.display === 'none'){
    toggleWorkExperience.style.display = 'block'
    } else {
        toggleWorkExperience.style.display = 'none'
    }
});
