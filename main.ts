const form = document.getElementById('resumeForm') as HTMLFormElement | null;
const resume = document.getElementById('resume') as HTMLElement | null;

if (form && resume) {
    form.addEventListener('submit', function(e: Event) {
        e.preventDefault();

        const name = (document.getElementById('name') as HTMLInputElement).value;
        const email = (document.getElementById('email') as HTMLInputElement).value;
        const education = (document.getElementById('education') as HTMLInputElement).value;
        const skills = (document.getElementById('skills') as HTMLInputElement).value;
        const experience = (document.getElementById('experience') as HTMLInputElement).value;

        const nameDisplay = document.getElementById('nameDisplay');
        const emailDisplay = document.getElementById('emailDisplay');
        const educationDisplay = document.getElementById('educationDisplay');
        const skillsDisplay = document.getElementById('skillsDisplay');
        const experienceDisplay = document.getElementById('experienceDisplay');

        if (nameDisplay) {
            nameDisplay.innerHTML = `<span>Name:</span> ${name}`;
        }
        if (emailDisplay) {
            emailDisplay.innerHTML = `<span>Email:</span> ${email}`;
        }
        if (educationDisplay) {
            educationDisplay.innerHTML = `<span>Education:</span> ${education}`;
        }
        if (skillsDisplay) {
            skillsDisplay.innerHTML = `<span>Skills:</span> ${skills}`;
        }
        if (experienceDisplay) {
            experienceDisplay.innerHTML = `<span>Work Experience:</span> ${experience}`;
        }

        resume.style.display = 'block';
    });

    // Make resume fields editable
    document.querySelectorAll('.editable').forEach(function(element) {
        element.addEventListener('click', function() {
            const newText = prompt('Edit the text:', element.textContent);
            if (newText) {
                element.textContent = newText;
            }
        });
    });
}

