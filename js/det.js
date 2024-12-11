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
                    title: 'Lawyer Website',
                    description: `
                        <img src="./assets/images/pic.png" alt="lawyer website" class="tw-w-full tw-h-auto tw-mb-4">
                        <p><strong>Creating a Professional Lawyer Website for Client Engagement</strong></p>
<p>I developed a modern and user-friendly website for a law firm, focusing on enhancing client engagement and providing easy access to legal services. The project emphasized seamless navigation, aesthetic design, and accessibility.</p>

<p><strong>Additional details about the lawyer website project:</strong></p>
<ul>
  <li>Designed an intuitive user interface with clear call-to-action elements for client inquiries.</li>
  <li>Developed a secure client portal for document uploads and case status tracking.</li>
  <li>Integrated a booking system for scheduling consultations directly from the website.</li>
  <li>Implemented SEO strategies to improve the firm's online visibility.</li>
  <li>Conducted usability testing to ensure an optimal user experience.</li>
</ul>

                        <p>Visit the project <a href="https://justice-et.netlify.app/" target="_blank" class="tw-text-blue-500 hover:tw-underline">here 👈</a>.</p>
                    `,
                },
                'healthcare-booking': {
                    title: 'soul cafe website',
                    description: `
                        <img src="./assets/images/pic1.png" alt="Healthcare Appointment Booking System" class="tw-w-full tw-h-auto tw-mb-4">
                <p>Soul Café: A Cozy Corner for the Soul
Soul Café is a virtual haven for coffee lovers and those seeking moments of tranquility. It's more than just a website; it's an online experience that evokes the warmth and comfort of a real-world café.
My Contributions to Soul Café:
User-Centric Design: I meticulously crafted a user-friendly interface that seamlessly guides visitors through the website, ensuring a smooth and enjoyable experience.
Visually Appealing Aesthetics: By combining captivating imagery and a soothing color palette, I created a visually stunning website that reflects the café's serene ambiance.
Responsive Design: I optimized the website for various devices, ensuring optimal viewing and interaction across desktops, tablets, and smartphones.
SEO Optimization: I implemented SEO best practices to enhance the website's visibility in search engine results, attracting a wider audience of coffee enthusiasts.
Content Creation: I collaborated with the content team to develop engaging blog posts and product descriptions that resonate with the target audience.
E-commerce Integration: I integrated an e-commerce platform, allowing customers to conveniently purchase coffee beans, merchandise, and gift cards directly from the website.
Social Media Integration: I seamlessly integrated social media feeds, fostering community engagement and encouraging interaction with the brand.
By combining technical expertise with a keen eye for design, I contributed to creating a website that not only showcases the café's unique offerings but also invites visitors to immerse themselves in the Soul Café experience.</p>
                                 <p>Visit the project <a href="https://soulcafe.netlify.app/" target="_blank" class="tw-text-blue-500 hover:tw-underline">here 👈</a>.</p>
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
    

