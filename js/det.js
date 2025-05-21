document.addEventListener("DOMContentLoaded", function() {
    const content = document.getElementById('content');

    const projects = {
        'ecommerce-website-redesign': {
            title: 'Fegegta Interior Website',
            description: `
                <img src="./assets/images/image.png" alt="Fegegta Interior Website" class="tw-w-full tw-h-auto tw-mb-4">
                <p>I designed and developed a professional website for Fegegta Interior and Furniture, focusing on elegance and functionality to showcase interior and furniture projects. The site highlights their design philosophy and services through visually rich layouts.</p>
                <p>The design process was driven by simplicity, user flow clarity, and a warm aesthetic that reflects the company’s brand. I integrated an easy-to-navigate portfolio, service breakdowns, and contact forms for client engagement.</p>
                <p>The responsive interface ensures accessibility across all devices, with smooth transitions and engaging visuals that elevate the browsing experience.</p>
                <p>Visit the project <a href="https://fegegta.netlify.app/" target="_blank" class="tw-text-blue-500 hover:tw-underline">here 👈</a>.</p>
            `,
        },

        'financial-dashboard': {
            title: 'Zion Wisdom Tutoring Website',
            description: `
                <img src="./assets/images/pic.png" alt="Zion Wisdom Tutoring Website" class="tw-w-full tw-h-auto tw-mb-4">
                <p>I built a dynamic and accessible website for Zion Wisdom Tutoring Services to support student enrollment and showcase academic programs. The website is clean, informative, and designed with students and parents in mind.</p>
                <p>Features include a course catalog, online registration forms, testimonial sections, and mobile-first responsiveness to ensure usability from any device.</p>
                <p>I used Firebase for backend services and real-time updates. The platform was designed to grow with the business and provide an engaging experience for all users.</p>
                <p>Visit the project <a href="https://zionwisdom.netlify.app/" target="_blank" class="tw-text-blue-500 hover:tw-underline">here 👈</a>.</p>
            `,
        },

        'healthcare-booking': {
            title: 'Tibeb Nidef Studio Website',
            description: `
                <img src="./assets/images/pic1.png" alt="Tibeb Nidef Studio Website" class="tw-w-full tw-h-auto tw-mb-4">
                <p>Tibeb Nidef Studio is an architecture and design website showcasing a multidisciplinary firm. I created a platform that reflects creativity and innovation in design through a minimalist and expressive layout.</p>
                <p>The site presents services such as architecture, interior, urban planning, and supervision, alongside visuals of real projects. I designed it to balance visuals with readability, highlighting the studio’s values and vision.</p>
                <p>Built with a flexible layout system and animations, the site offers both aesthetic and technical refinement tailored to the brand’s tone.</p>
                <p>Visit the project <a href="https://tibebnidef.netlify.app/" target="_blank" class="tw-text-blue-500 hover:tw-underline">here 👈</a>.</p>
            `,
        },

        'real-estate-platform': {
            title: 'Aesthetic Dev Portfolio Site',
            description: `
                <img src="./assets/images/home/real.webp" alt="Aesthetic Dev Portfolio" class="tw-w-full tw-h-auto tw-mb-4">
                <p>This is my personal portfolio website showcasing my projects, coding skills, and design capabilities. It’s designed with clean UI/UX principles and built using HTML, CSS, and JavaScript.</p>
                <p>I focused on modern layout structure, subtle animations, and fast performance to provide a seamless browsing experience. Visitors can navigate easily between sections such as About, Projects, and Contact.</p>
                <p>The design is inspired by high-aesthetic developer hubs and targets showcasing technical and design synergy.</p>
                <p>Visit the project <a href="https://aestheticdevhub.netlify.app/" target="_blank" class="tw-text-blue-500 hover:tw-underline">here 👈</a>.</p>
            `,
        },

        'education-portal': {
            title: 'Artist Apartment Design (Concept)',
            description: `
                <img src="./assets/images/home/edu.jpeg" alt="Artist Apartment Design" class="tw-w-full tw-h-auto tw-mb-4">
                <p>This conceptual architecture project explores multifamily apartment designs tailored for artists. I focused on spatial flexibility, natural lighting, and communal areas for creative exchange.</p>
                <p>Each unit includes modular spaces with dedicated studios, and shared workshops are located on each floor. The project aims to balance private and collective spaces within a vertical neighborhood.</p>
                <p>The design was guided by principles of biophilic design, minimalism, and adaptive use of materials. Visuals and diagrams were created using architectural software and CAD tools.</p>
            `,
        },

        'travel-booking': {
            title: 'Basic Water Supply System Design',
            description: `
                <img src="./assets/images/home/travel.jpg" alt="Water Supply System Design" class="tw-w-full tw-h-auto tw-mb-4">
                <p>This academic project involved designing a basic water supply system for a residential block. The scope included layout planning, water tank placement, and piping network design based on Ethiopian Building Codes (EBCS 9).</p>
                <p>I created architectural and plumbing drawings, selected appropriate pipe sizes, and planned for both functionality and sustainability. This helped ensure water flow efficiency and pressure control across the site.</p>
                <p>The project integrates local codes, economic feasibility, and environmental considerations into a functional water infrastructure plan.</p>
            `,
        },
    };

    const hash = window.location.hash.substring(1);
    if (projects[hash]) {
        const project = projects[hash];
        content.innerHTML = `
            <h1 class="tw-text-3xl tw-font-bold tw-mb-4">${project.title}</h1>
            ${project.description}
        `;
    } else {
        content.innerHTML = '<p>Project not found.</p>';
    }
});
