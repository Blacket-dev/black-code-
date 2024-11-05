document.addEventListener("DOMContentLoaded", function() {
    const content = document.getElementById('content');

    const projects = {
        'ecommerce-website-redesign': {
            title: 'Furniture Website Design',
            description: `
                <img src="./assets/images/image.png" alt="Furniture Website Design" class="tw-w-full tw-h-auto tw-mb-4">
                  <br>
                <p>I led the redesign of an e-commerce website, focusing on modern aesthetics, improved navigation, and seamless checkout processes. This project aimed to boost customer satisfaction and drive higher conversion rates. By integrating the latest design trends and ensuring the website was responsive across all devices, we provided users with an enhanced shopping experience.</p>
                <p>The redesign process involved extensive user research to understand pain points and preferences. Based on the findings, we simplified the navigation, making it easier for users to find products and complete their purchases. Additionally, we optimized the checkout process to reduce cart abandonment and improve conversion rates.</p>
                <p>To ensure the success of the redesign, we conducted multiple rounds of user testing and feedback sessions. This iterative approach allowed us to refine the design and address any issues promptly. The result was a visually appealing, user-friendly e-commerce site that significantly improved customer engagement and sales.</p>
                  <br>
                <p>Visit the project <a href="https://timelessfurniture-et.netlify.app/" target="_blank" class="tw-text-blue-500 hover:tw-underline">here 👈</a>.</p>
                <br>
                <p>Additional details about the e-commerce redesign project:</p>
                <ul class="tw-list-disc tw-ml-6">
                    <li>Analyzed existing user data to identify pain points and areas for improvement.</li>
                    <li>Collaborated with UX designers to create wireframes and prototypes.</li>
                    <li>Implemented responsive design techniques to ensure usability across devices.</li>
                    <li>Integrated new payment gateway for a more secure checkout process.</li>
                    <li>Conducted A/B testing to measure the effectiveness of design changes.</li>
                </ul>
            `,
        },
    

                'financial-dashboard': {
                    title: 'Financial Dashboard for a Banking App',
                    description: `
                        <img src="./assets/images/pic.png" alt="Financial Dashboard for a Banking App" class="tw-w-full tw-h-auto tw-mb-4">
                        <p>Creating a comprehensive financial dashboard for better user insights. I developed a financial dashboard for a banking app, providing users with real-time insights into their financial health. The project required attention to detail and a focus on data visualization.</p>
                        <p>Additional details about the financial dashboard project:</p>
                        <ul class="tw-list-disc tw-ml-6">
                            <li>Designed interactive charts and graphs to visualize key financial metrics.</li>
                            <li>Developed API integrations to fetch real-time data from various financial institutions.</li>
                            <li>Implemented user authentication and authorization for secure access.</li>
                            <li>Conducted user testing sessions to gather feedback and refine the dashboard.</li>
                        </ul>
                        <p>Visit the project <a href="https://justice-et.netlify.app/" target="_blank" class="tw-text-blue-500 hover:tw-underline">hereðŸ‘ˆðŸ»</a>.</p>
                    `,
                },
                'healthcare-booking': {
                    title: 'Healthcare Appointment Booking System',
                    description: `
                        <img src="./assets/images/pic1.png" alt="Healthcare Appointment Booking System" class="tw-w-full tw-h-auto tw-mb-4">
                        <p>Developing a system to streamline appointment scheduling for healthcare providers. I designed and implemented an appointment booking system for a healthcare provider, improving the efficiency of their scheduling process and enhancing patient experience.</p>
                        <p>Additional details about the healthcare booking system project:</p>
                        <ul class="tw-list-disc tw-ml-6">
                            <li>Analyzed the existing appointment scheduling process to identify inefficiencies.</li>
                            <li>Designed a user-friendly interface for both patients and healthcare providers.</li>
                            <li>Integrated a calendar system to display available appointment slots in real-time.</li>
                            <li>Implemented email and SMS notifications for appointment reminders.</li>
                            <li>Ensured compliance with healthcare regulations and data privacy standards.</li>
                        </ul>
                                 <p>Visit the project <a href="https://soulcafe.netlify.app/" target="_blank" class="tw-text-blue-500 hover:tw-underline">hereðŸ‘ˆðŸ»</a>.</p>
                    `,
                },
                'real-estate-platform': {
                    title: 'Real Estate Property Listing Platform',
                    description: `
                        <img src="./assets/images/home/real.webp" alt="Real Estate Property Listing Platform" class="tw-w-full tw-h-auto tw-mb-4">
                        <p>Building a platform for listing and searching real estate properties. I created a property listing platform for a real estate company, offering a seamless experience for users to search and explore properties.</p>
                        <p>Additional details about the real estate platform project:</p>
                        <ul class="tw-list-disc tw-ml-6">
                            <li>Developed a search functionality with filters for location, price, and property type.</li>
                            <li>Implemented a map view to display property locations.</li>
                            <li>Integrated a content management system for agents to manage property listings.</li>
                            <li>Added features for users to save their favorite properties and set up alerts for new listings.</li>
                        </ul>
                    `,
                },
                'education-portal': {
                    title: 'Education Portal for Online Courses',
                    description: `
                        <img src="./assets/images/home/edu.jpeg" alt="Education Portal for Online Courses" class="tw-w-full tw-h-auto tw-mb-4">
                        <p>Developing an education portal to deliver online courses and resources. I developed an online education portal, providing students with access to a wide range of courses and learning materials. The project aimed to create an engaging and interactive learning environment.</p>
                        <p>Additional details about the education portal project:</p>
                        <ul class="tw-list-disc tw-ml-6">
                            <li>Designed a responsive and user-friendly interface for students and instructors.</li>
                            <li>Implemented a course management system for creating and organizing course content.</li>
                            <li>Developed interactive features such as quizzes, discussion forums, and live video sessions.</li>
                            <li>Integrated analytics tools to track student progress and engagement.</li>
                            <li>Provided support for multiple languages to cater to a global audience.</li>
                        </ul>
                    `,
                },
                'travel-booking': {
                    title: 'Travel Booking Website',
                    description: `
                        <img src="./assets/images/home/travel.jpg" alt="Travel Booking Website" class="tw-w-full tw-h-auto tw-mb-4">
                       <p> <p>Designing a website to facilitate travel bookings and itinerary management. I designed and implemented a travel booking website, making it easy for users to plan and book their trips.</p>
                        <p>Additional details about the travel booking website project:</p>
                        <ul class="tw-list-disc tw-ml-6">
                            <li>Created a search functionality to find flights, hotels, and rental cars.</li>
                            <li>Designed an itinerary management feature to organize travel plans.</li>
                            <li>Implemented a secure payment system for booking transactions.</li>
                            <li>Integrated APIs for real-time flight and hotel information.</li>
                            <li>Conducted usability testing to ensure a smooth user experience.</li>
                        </ul></p>
                    `,
                }
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
    

