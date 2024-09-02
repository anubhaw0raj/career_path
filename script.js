// Data for career options with URLs
const careerData = {
    science: [
        {
            title: "Software Engineering",
            pros: [
                "High demand and lucrative salaries",
                "Opportunities for creativity and innovation",
                "Flexible working options including remote work"
            ],
            cons: [
                "Continuous learning required to keep up with technology",
                "Sedentary lifestyle can affect health",
                "Can involve long working hours and tight deadlines"
            ],
            url: "https://www.coursera.org/articles/how-to-become-a-software-engineer"
        },
        {
            title: "Information Technology (IT)",
            pros: [
                "Diverse job roles and opportunities",
                "Integral to modern businesses across industries",
                "Potential for career growth and development"
            ],
            cons: [
                "Can be stressful during system failures or cyber attacks",
                "Requires up-to-date knowledge of emerging technologies",
                "Possible odd working hours for support roles"
            ],
            url: "https://www.edx.org/learn/information-technology"
        },
        {
            title: "Engineering",
            pros: [
                "Wide range of specializations (Civil, Mechanical, Electrical, etc.)",
                "Contributes to societal development and infrastructure",
                "Stable and respected profession"
            ],
            cons: [
                "Competitive entrance examinations and rigorous studies",
                "Some fields may involve hazardous working conditions",
                "Job availability can vary by specialization and location"
            ],
            url: "https://targetstudy.com/professions/engineering.html"
        },
        {
            title: "Medical (MBBS)",
            pros: [
                "Opportunity to save lives and help people",
                "Respected and noble profession",
                "Wide range of specializations and career paths"
            ],
            cons: [
                "Long and intensive study period",
                "High levels of stress and responsibility",
                "Work can involve exposure to diseases and long hours"
            ],
            url: "https://www.medicineandhealthcarehub.com/how-to-become-doctor-in-india/"
        }
    ],
    commerce: [
        {
            title: "Chartered Accountancy",
            pros: [
                "High demand in various industries",
                "Good earning potential",
                "Opportunities for self-employment"
            ],
            cons: [
                "Challenging examinations and study process",
                "Work can be repetitive and deadline-driven",
                "Continuous updates required on financial laws and regulations"
            ],
            url: "https://www.proschoolonline.com/blog/how-to-become-a-chartered-accountant"
        },
        {
            title: "Business Management",
            pros: [
                "Versatile career options across sectors",
                "Opportunities for leadership roles",
                "Good earning and growth potential"
            ],
            cons: [
                "Highly competitive field",
                "May require additional qualifications like MBA",
                "High-pressure environment with targets and deadlines"
            ],
            url: "https://www.careers360.com/courses/business-management-course"
        },
        {
            title: "Economist",
            pros: [
                "Opportunities in government, academia, and private sector",
                "Engage in impactful policy-making and analysis",
                "Intellectually stimulating work"
            ],
            cons: [
                "Requires advanced studies (Masters/PhD)",
                "Work can be theoretical and data-intensive",
                "Job availability can be limited in certain regions"
            ],
            url: "https://www.topuniversities.com/courses/economics-econometrics/guide"
        },
        {
            title: "Company Secretary",
            pros: [
                "Key role in corporate governance",
                "Good remuneration and job stability",
                "Opportunities across various industries"
            ],
            cons: [
                "Requires clearing professional courses and exams",
                "High responsibility with legal compliance",
                "Can involve long working hours during audits and filings"
            ],
            url: "https://www.icsi.edu/students/prospective/"
        }
    ],
    arts: [
        {
            title: "Journalism and Mass Communication",
            pros: [
                "Dynamic and exciting work environment",
                "Opportunities to influence public opinion",
                "Diverse career paths including TV, print, and digital media"
            ],
            cons: [
                "Can involve irregular and long working hours",
                "High-pressure deadlines",
                "Risk of exposure to dangerous situations depending on beat"
            ],
            url: "https://www.careers360.com/courses/journalism-course"
        },
        {
            title: "Psychology",
            pros: [
                "Growing awareness and demand for mental health professionals",
                "Opportunities in various settings like clinics, schools, and corporations",
                "Rewarding work by helping others"
            ],
            cons: [
                "Requires advanced degrees for clinical practice",
                "Emotional strain from dealing with serious issues",
                "Can be challenging to establish private practice initially"
            ],
            url: "https://www.verywellmind.com/how-to-become-a-psychologist-2794931"
        },
        {
            title: "Law",
            pros: [
                "Respected profession with good earning potential",
                "Diverse specializations (Corporate, Criminal, Civil, etc.)",
                "Opportunity to advocate for justice and rights"
            ],
            cons: [
                "Requires intensive study and passing bar examinations",
                "Competitive field with long working hours",
                "Initial years may involve lower earnings and extensive groundwork"
            ],
            url: "https://collegedunia.com/courses/law-courses"
        },
        {
            title: "Design (Fashion, Interior, Graphic)",
            pros: [
                "Creative and expressive career paths",
                "High demand in various industries",
                "Opportunities for entrepreneurship and freelancing"
            ],
            cons: [
                "Subjective nature can make success unpredictable",
                "Requires building a strong portfolio and network",
                "Can involve irregular income and workloads"
            ],
            url: "https://www.shiksha.com/design/articles/how-to-become-a-fashion-designer-blogId-21978"
        }
    ]
};

// Handle form submission
document.getElementById('student-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const studentName = document.getElementById('name').value;
    const studentClass = document.getElementById('class').value;

    if (studentClass === '10') {
        displayCareerOptions('all', studentName);
    } else {
        document.getElementById('landing-page').style.display = 'none';
        document.getElementById('stream-selection').style.display = 'block';
    }
});

// Handle stream selection
document.querySelectorAll('.stream-btn').forEach(button => {
    button.addEventListener('click', function() {
        const selectedStream = this.getAttribute('data-stream');
        const studentName = document.getElementById('name').value;
        displayCareerOptions(selectedStream, studentName);
    });
});

// Display career options
function displayCareerOptions(stream, name) {
    document.getElementById('stream-selection').style.display = 'none';
    document.getElementById('landing-page').style.display = 'none';
    document.getElementById('career-options').style.display = 'block';

    const careerList = document.getElementById('career-list');
    careerList.innerHTML = `<h3>Hi ${name}, here are some career options for you:</h3>`;

    let careers = [];
    if (stream === 'all') {
        careers = [...careerData.science, ...careerData.commerce, ...careerData.arts];
    } else {
        careers = careerData[stream];
    }

    careers.forEach(career => {
        const careerDiv = document.createElement('div');
        careerDiv.classList.add('career-option');

        const div_title = document.createElement('div');
        div_title.classList.add('title-job');

        const title = document.createElement('h3');
        title.textContent = career.title;

        // Add link button
        const linkButton = document.createElement('a');
        if (career.title === "Software Engineering") {
            linkButton.href = "/software.html";
        } else if (career.title === "Chartered Accountancy") {
            linkButton.href = "/ca.html";
        } else {
            linkButton.href = career.url;
            linkButton.target = "_blank";
        }

        linkButton.textContent = "Learn More";
        linkButton.classList.add('link-button');

        const pros = document.createElement('p');
        pros.innerHTML = `<strong>Pros:</strong><br>${career.pros.map(pro => `- ${pro}`).join('<br>')}`;

        const cons = document.createElement('p');
        cons.innerHTML = `<strong>Cons:</strong><br>${career.cons.map(con => `- ${con}`).join('<br>')}`;

        div_title.appendChild(title);
        div_title.appendChild(linkButton);
        careerDiv.appendChild(div_title);
        careerDiv.appendChild(pros);
        careerDiv.appendChild(cons);

        careerList.appendChild(careerDiv);
    });
}

// Handle back button
document.getElementById('back-button2').addEventListener('click', function() {
    document.getElementById('career-options').style.display = 'none';
    const studentClass = document.getElementById('class').value;
    if (studentClass === '10') {
        document.getElementById('landing-page').style.display = 'block';
    } else {
        document.getElementById('stream-selection').style.display = 'block';
    }
});

document.getElementById('back-button1').addEventListener('click', function() {
    document.getElementById('stream-selection').style.display = 'none';
    document.getElementById('landing-page').style.display = 'block';
});
