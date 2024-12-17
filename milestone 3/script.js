// import form and display resume
var form = document.getElementById("resume-form");
var resumeDisplayElement = document.getElementById('resume-display');
// form submission
form.addEventListener('submit', function (event) {
    event.preventDefault(); //prevent page reload
    // collect input values
    var name = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    // generate the dynamic resume content
    var resumeHTML = "\n    <h2><b>Resume</b></h2>\n    <h3>Personal Information</h3>\n    <p><b>Name:</b>".concat(name, "</p>\n     <p><b>Name:</b>").concat(phone, "</p>\n      <p><b>Name:</b>").concat(email, "</p>\n\n      <h3>Education</h3>\n      <p>").concat(education, "</p>\n\n      <h3>Experience</h3>\n      <p>").concat(experience, "</p>\n\n       <h3>Education</h3>\n      <p>").concat(education, "</p>\n       ");
    // generated resume 
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error('The resume display element is missing.');
    }
});
