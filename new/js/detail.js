document.addEventListener("DOMContentLoaded", () => {
  // Mobile menu toggle
  const menuToggle = document.getElementById("menu-toggle")
  const mobileMenu = document.getElementById("mobile-menu")

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener("click", () => {
      mobileMenu.classList.toggle("active")

      // Toggle icon between hamburger and X
      const icon = menuToggle.querySelector("i")
      if (icon) {
        if (icon.classList.contains("bi-list")) {
          icon.classList.remove("bi-list")
          icon.classList.add("bi-x")
        } else {
          icon.classList.remove("bi-x")
          icon.classList.add("bi-list")
        }
      }
    })
  }

  // Project details content loading
  const content = document.getElementById("content")

  const projects = {
    "college-website": {
      title: "College Website",
      image: "./assets/images/projects/college.jpg",
      description: `
                <div class="project-description">
                    <p>I developed a comprehensive website for a local college that serves as a central hub for students, faculty, and visitors. The website features a clean, professional design that aligns with the institution's branding.</p>
                    <p>Key features include:</p>
                    <ul>
                        <li>Responsive design that works seamlessly across all devices</li>
                        <li>Course catalog with detailed information and search functionality</li>
                        <li>Events calendar with filtering options</li>
                        <li>Faculty directory with profiles and contact information</li>
                        <li>Student resources section with downloadable forms and guides</li>
                        <li>News and announcements section</li>
                        <li>Interactive campus map</li>
                    </ul>
                    <p>The website was built using modern web technologies and includes a content management system that allows staff to easily update content without technical knowledge.</p>
                </div>
            `,
    },
    "tutoring-website": {
      title: "Tutoring Service Website",
      image: "./assets/images/projects/tutoring.jpg",
      description: `
                <div class="project-description">
                    <p>I designed and developed a comprehensive website for a tutoring service that helps connect students with qualified tutors. The platform streamlines the process of finding and scheduling tutoring sessions.</p>
                    <p>Key features include:</p>
                    <ul>
                        <li>Tutor profiles with qualifications, subjects, and availability</li>
                        <li>Subject categorization and search functionality</li>
                        <li>Online booking system with calendar integration</li>
                        <li>Student dashboard for managing appointments</li>
                        <li>Secure payment processing</li>
                        <li>Testimonials and reviews section</li>
                        <li>Blog with educational resources and tips</li>
                    </ul>
                    <p>The website has helped the tutoring service increase their client base by 40% within the first three months after launch.</p>
                </div>
            `,
    },
    "online-course-platform": {
      title: "Online Course Platform",
      image: "./assets/images/projects/online-course.jpg",
      description: `
                <div class="project-description">
                    <p>I built a comprehensive e-learning platform that allows educators to create and sell online courses. The platform provides a seamless experience for both instructors and students.</p>
                    <p>Key features include:</p>
                    <ul>
                        <li>Course creation tools with support for video, text, and quiz content</li>
                        <li>Student progress tracking and analytics</li>
                        <li>Discussion forums for each course</li>
                        <li>Certificate generation upon course completion</li>
                        <li>Subscription and one-time payment options</li>
                        <li>Mobile-responsive design for learning on any device</li>
                        <li>Instructor dashboard with earnings and student statistics</li>
                    </ul>
                    <p>The platform was built with scalability in mind and can handle thousands of concurrent users without performance issues.</p>
                </div>
            `,
    },
    "architecture-firm": {
      title: "Architecture & Interior Design",
      image: "./assets/images/projects/architecture.jpg",
      description: `
                <div class="project-description">
                    <p>I designed a sophisticated portfolio website for an architecture and interior design firm that showcases their projects and services in an elegant, visually-focused manner.</p>
                    <p>Key features include:</p>
                    <ul>
                        <li>Stunning project gallery with filterable categories</li>
                        <li>Case studies with detailed project information</li>
                        <li>Team member profiles highlighting expertise and experience</li>
                        <li>Services overview with detailed descriptions</li>
                        <li>Contact form with project inquiry options</li>
                        <li>Testimonials from satisfied clients</li>
                        <li>Blog section for sharing industry insights</li>
                    </ul>
                    <p>The website's minimalist design puts the focus on the firm's work while providing an intuitive user experience that has helped increase client inquiries by 60%.</p>
                </div>
            `,
    },
    "therapy-website": {
      title: "Therapy & Mental Health Website",
      image: "./assets/images/projects/therapy.jpg",
      description: `
                <div class="project-description">
                    <p>I created a calming, accessible website for a therapy practice that provides mental health services. The design focuses on creating a welcoming environment for potential clients seeking help.</p>
                    <p>Key features include:</p>
                    <ul>
                        <li>Therapist profiles with specialties and approaches</li>
                        <li>Service descriptions for different therapy types</li>
                        <li>Online appointment booking system</li>
                        <li>Resources section with mental health articles and guides</li>
                        <li>Insurance information and payment options</li>
                        <li>Testimonials from clients (with privacy considerations)</li>
                        <li>Accessibility features for users with disabilities</li>
                    </ul>
                    <p>The website was designed with sensitivity to the needs of individuals seeking mental health support, with careful attention to language, imagery, and user experience.</p>
                </div>
            `,
    },
    "furniture-website": {
      title: "Furniture E-commerce Website",
      image: "./assets/images/projects/furniture.jpg",
      description: `
                <div class="project-description">
                    <p>I developed a modern e-commerce platform for a furniture retailer that combines beautiful design with powerful functionality to showcase their products and drive sales.</p>
                    <p>Key features include:</p>
                    <ul>
                        <li>Product catalog with advanced filtering and search</li>
                        <li>360-degree product views and zoom functionality</li>
                        <li>Room visualization tool to see furniture in context</li>
                        <li>Secure checkout with multiple payment options</li>
                        <li>Customer account management</li>
                        <li>Wishlist and saved items functionality</li>
                        <li>Delivery tracking and scheduling</li>
                    </ul>
                    <p>The website has significantly improved the client's online sales, with a 75% increase in conversion rate compared to their previous e-commerce solution.</p>
                </div>
            `,
    },
  }

  const hash = window.location.hash.substring(1)
  if (projects[hash]) {
    const project = projects[hash]
    content.innerHTML = `
            <h1 class="project-title">${project.title}</h1>
            <img src="${project.image}" alt="${project.title}" class="project-image">
            ${project.description}
        `
  } else {
    content.innerHTML =
      '<p>Project not found. Please select a project from the <a href="index.html#work">projects section</a>.</p>'
  }

  // GSAP Animations if available
  const gsap = window.gsap // Declare the gsap variable
  if (gsap) {
    gsap.from(".project-title", {
      y: 30,
      opacity: 0,
      duration: 0.8,
      delay: 0.2,
    })

    gsap.from(".project-image", {
      y: 30,
      opacity: 0,
      duration: 0.8,
      delay: 0.4,
    })

    gsap.from(".project-description > *", {
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      delay: 0.6,
    })
  }
})
