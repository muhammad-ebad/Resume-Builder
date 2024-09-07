var form = document.getElementById('resumeForm');
var resume = document.getElementById('resume');
if (form && resume) {
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var education = document.getElementById('education').value;
        var skills = document.getElementById('skills').value;
        var experience = document.getElementById('experience').value;
        var nameDisplay = document.getElementById('nameDisplay');
        var emailDisplay = document.getElementById('emailDisplay');
        var educationDisplay = document.getElementById('educationDisplay');
        var skillsDisplay = document.getElementById('skillsDisplay');
        var experienceDisplay = document.getElementById('experienceDisplay');
        if (nameDisplay) {
            nameDisplay.innerHTML = "<span>Name:</span> ".concat(name);
        }
        if (emailDisplay) {
            emailDisplay.innerHTML = "<span>Email:</span> ".concat(email);
        }
        if (educationDisplay) {
            educationDisplay.innerHTML = "<span>Education:</span> ".concat(education);
        }
        if (skillsDisplay) {
            skillsDisplay.innerHTML = "<span>Skills:</span> ".concat(skills);
        }
        if (experienceDisplay) {
            experienceDisplay.innerHTML = "<span>Work Experience:</span> ".concat(experience);
        }
        resume.style.display = 'block';
    });
    // Make resume fields editable
    document.querySelectorAll('.editable').forEach(function (element) {
        element.addEventListener('click', function () {
            var newText = prompt('Edit the text:', element.textContent);
            if (newText) {
                element.textContent = newText;
            }
        });
    });
}
