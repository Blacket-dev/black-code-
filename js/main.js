document.addEventListener("DOMContentLoaded", function() {
    const content = document.getElementById('content');

    const projects = {
        'ecommerce-website-redesign': {
            title: 'E-commerce Website Redesign',
            description: `
                <p>I led the redesign of an e-commerce website, focusing on modern aesthetics, improved navigation, and seamless checkout processes. This project aimed to boost customer satisfaction and drive higher conversion rates.</p>
                <p>Additional details about the e-commerce redesign project...</p>
            `,
        },
        'financial-dashboard': {
            title: 'Financial Dashboard for a Banking App',
            description: `
                <p>Creating a comprehensive financial dashboard for better user insights. I developed a financial dashboard for a banking app, providing users with real-time insights into their financial health. The project required attention to detail and a focus on data visualization.</p>
                <p>Additional details about the financial dashboard project...</p>
            `,
        },
        'healthcare-booking': {
            title: 'Healthcare Appointment Booking System',
            description: `
                <p>Developing a system to streamline appointment scheduling for healthcare providers. I designed and implemented an appointment booking system for a healthcare provider, improving the efficiency of their scheduling process and enhancing patient experience.</p>
                <p>Additional details about the healthcare booking system project...</p>
            `,
        },
        'real-estate-platform': {
            title: 'Real Estate Property Listing Platform',
            description: `
                <p>Building a platform for listing and searching real estate properties. I created a property listing platform for a real estate company, offering a seamless experience for users to search and explore properties.</p>
                <p>Additional details about the real estate platform project...</p>
            `,
        },
        'education-portal': {
            title: 'Education Portal for Online Courses',
            description: `
                <p>Developing an education portal to deliver online courses and resources. I developed an online education portal, providing students with access to a wide range of courses and learning materials. The project aimed to create an engaging and interactive learning environment.</p>
                <p>Additional details about the education portal project...</p>
            `,
        },
        'travel-booking': {
            title: 'Travel Booking Website',
            description: `
                <p>Designing a website to facilitate travel bookings and itinerary management. I designed and implemented a travel booking website, making it easy for users to plan and book their trips.</p>
                <p>Additional details about the travel booking website project...</p>
            `,
        }
    };

    const hash = window.location.hash.substring(1);
    if (projects[hash]) {
        const project = projects[hash];
        content.innerHTML = `
            <h1 class="tw-text-3xl tw-font-bold">${project.title}</h1>
            ${project.description}
        `;
    } else {
        content.innerHTML = '<p>Project not found.</p>';
    }
});
