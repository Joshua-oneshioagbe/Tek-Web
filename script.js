// 1. Defining the Four Courses
const courses = [
    { 
        title: "Frontend Mastery", 
        level: "Beginner to Pro", 
        icon: "✨", 
        desc: "Learn to build high-performance, responsive interfaces with React." 
    },
    { 
        title: "Backend Systems", 
        level: "Intermediate", 
        icon: "⚙️", 
        desc: "Master server-side logic, database management, and API design." 
    },
    { 
        title: "Product & UX Design", 
        level: "All Levels", 
        icon: "🎨", 
        desc: "The psychology of user behavior met with world-class design." 
    },
    { 
        title: "Data Analytics", 
        level: "Advanced", 
        icon: "📈", 
        desc: "Transform raw data into actionable intelligence and strategy." 
    }
];

// 2. Injecting Courses into the Grid
const grid = document.getElementById('courseGrid');

courses.forEach(course => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
        <div style="font-size: 3rem; margin-bottom: 20px;">${course.icon}</div>
        <h3>${course.title}</h3>
        <p style="color: #4f46e5; font-weight: 700; font-size: 0.8rem; margin: 10px 0;">${course.level}</p>
        <p style="color: #64748b; font-size: 0.95rem;">${course.desc}</p>
    `;
    grid.appendChild(card);
});

// 3. Smooth Scroll Function
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// 4. Enrollment Form Handler
document.getElementById('enrollForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const feedback = document.getElementById('formFeedback');
    feedback.innerHTML = "<p style='color: #4ade80; margin-top: 15px; font-weight: 600;'>Success! Welcome to Leenzners.</p>";
    this.reset();
});

