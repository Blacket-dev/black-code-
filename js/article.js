
        document.addEventListener("DOMContentLoaded", function() {
            const content = document.getElementById('content');

            const articles = {
                'modern-frontend': {
                    title: 'Modern Frontend Development Trends',
                    image: './assets/web1.png',
                    description: `
                      <div class="article-description">
            <h2 style="font-family: 'Arial', sans-serif; font-size: 2em; color: #333;">Exploring the Latest Trends in Frontend Development</h2>
            <p style="font-family: 'Georgia', serif; line-height: 1.6; color: #555;">
                The field of frontend development is constantly evolving, with new trends and technologies emerging every year. As user expectations rise, developers are tasked with creating websites and applications that are not only functional but also visually appealing and accessible. This article delves into some of the most significant trends shaping the future of frontend development.
            </p>
            
            <h3 style="font-family: 'Arial', sans-serif; color: #3E8E41;">1. JavaScript Frameworks Dominate</h3>
            <img src="./assets/image.png" alt="JavaScript Frameworks" style="width: 100%; height: auto; margin-bottom: 1em;">
            <p style="font-family: 'Georgia', serif; line-height: 1.6; color: #555;">
                JavaScript frameworks like <strong>React</strong>, <strong>Vue</strong>, and <strong>Angular</strong> continue to be at the forefront of modern web development. These frameworks provide developers with the tools to build complex user interfaces efficiently. They allow for component-based architecture, which enhances reusability and maintainability.
            </p>
            <p style="font-family: 'Georgia', serif; line-height: 1.6; color: #555;">
                <em>React</em>, developed by Facebook, has gained immense popularity due to its flexibility and performance. On the other hand, <em>Vue</em> offers a gentle learning curve and is perfect for smaller projects, while <em>Angular</em> is often chosen for larger enterprise applications.
            </p>

            <h3 style="font-family: 'Arial', sans-serif; color: #3E8E41;">2. The Rise of Progressive Web Apps (PWAs)</h3>
             <img src="./assets/image1.jpg" alt="The Rise of Progressive Web Apps (PWAs)" style="width: 100%; height: auto; margin-bottom: 1em;">
            <p style="font-family: 'Georgia', serif; line-height: 1.6; color: #555;">
                Progressive Web Apps combine the best of web and mobile applications, offering a seamless experience across devices. PWAs are fast, reliable, and can work offline, making them an attractive option for users. They utilize service workers and manifest files to provide native-like experiences directly in the browser.
            </p>
            <p style="font-family: 'Georgia', serif; line-height: 1.6; color: #555;">
                Companies like <strong>Twitter</strong> and <strong>Starbucks</strong> have embraced PWAs to improve user engagement and retention, showing that this trend is not just a passing phase but a fundamental shift in how we approach web development.
            </p>

            <h3 style="font-family: 'Arial', sans-serif; color: #3E8E41;">3. Emphasis on Accessibility</h3>
            <p style="font-family: 'Georgia', serif; line-height: 1.6; color: #555;">
                Accessibility has become a priority for developers as the web aims to be inclusive for all users, including those with disabilities. Adhering to <strong>WCAG</strong> guidelines ensures that websites are usable for people with various abilities.
            </p>
            <p style="font-family: 'Georgia', serif; line-height: 1.6; color: #555;">
                Implementing semantic HTML, providing alt text for images, and ensuring keyboard navigation are just a few ways to enhance accessibility. As awareness of these issues grows, more developers are prioritizing inclusive design in their projects.
            </p>

            <h3 style="font-family: 'Arial', sans-serif; color: #3E8E41;">4. CSS-in-JS: A New Styling Paradigm</h3>
            <p style="font-family: 'Georgia', serif; line-height: 1.6; color: #555;">
                CSS-in-JS libraries, such as <strong>Styled Components</strong> and <strong>Emotion</strong>, are gaining traction in the frontend community. These libraries allow developers to write CSS directly within their JavaScript code, promoting modularity and better scoping of styles.
            </p>
            <p style="font-family: 'Georgia', serif; line-height: 1.6; color: #555;">
                This approach not only reduces the likelihood of style conflicts but also makes it easier to manage styles in large applications, leading to cleaner and more maintainable codebases.
            </p>

            <h3 style="font-family: 'Arial', sans-serif; color: #3E8E41;">5. Static Site Generators for Speed and SEO</h3>
            <p style="font-family: 'Georgia', serif; line-height: 1.6; color: #555;">
                Static site generators (SSGs) like <strong>Gatsby</strong> and <strong>Next.js</strong> are revolutionizing the way we build websites. By pre-rendering pages at build time, SSGs ensure fast loading times and better SEO performance.
            </p>
            <p style="font-family: 'Georgia', serif; line-height: 1.6; color: #555;">
                These tools leverage React components and allow developers to fetch data from various sources, creating dynamic sites that still benefit from the speed of static content.
            </p>

            <h3 style="font-family: 'Arial', sans-serif; color: #3E8E41;">6. Motion Design and Microinteractions</h3>
            <p style="font-family: 'Georgia', serif; line-height: 1.6; color: #555;">
                Motion design has become a key element in frontend development, enhancing user experiences by guiding users through interactions. Subtle animations and microinteractions provide feedback, making applications feel more responsive and engaging.
            </p>
            <p style="font-family: 'Georgia', serif; line-height: 1.6; color: #555;">
                Tools like <strong>Framer Motion</strong> and <strong>GSAP</strong> enable developers to create stunning animations effortlessly, allowing for a richer user experience without compromising performance.
            </p>

            <h3 style="font-family: 'Arial', sans-serif; color: #3E8E41;">7. The Growth of Low-Code/No-Code Platforms</h3>
            <p style="font-family: 'Georgia', serif; line-height: 1.6; color: #555;">
                Low-code and no-code platforms are democratizing web development, allowing individuals with little to no coding experience to build applications. Platforms like <strong>Webflow</strong> and <strong>Bubble</strong> empower users to create and launch their projects with intuitive drag-and-drop interfaces.
            </p>
            <p style="font-family: 'Georgia', serif; line-height: 1.6; color: #555;">
                While these platforms may not replace traditional development, they significantly reduce the barriers to entry, allowing more people to contribute to the digital landscape.
            </p>

            <h3 style="font-family: 'Arial', sans-serif; color: #3E8E41;">Conclusion</h3>
            <p style="font-family: 'Georgia', serif; line-height: 1.6; color: #555;">
                The world of frontend development is constantly changing, with trends emerging that reflect user needs and technological advancements. By staying informed about these trends, developers can create modern, efficient, and user-friendly applications that resonate with their audience.
            </p>
            <p style="font-family: 'Georgia', serif; line-height: 1.6; color: #555;">
                Embracing these trends not only enhances the quality of web applications but also prepares developers for the future, ensuring they remain competitive in a rapidly evolving field. As we look ahead, it’s essential to continue learning and adapting to these exciting changes in frontend development.
            </p>
        </div>
                    `,
                },
                'optimizing-performance': {
                    title: 'Optimizing Performance in Web Applications',
                    image: './assets/web.webp',
                    description: `
                        <div class="article-description">
                            <p>Discover techniques for optimizing the performance of your web applications. This article covers strategies for reducing load times, enhancing responsiveness, and ensuring a smooth user experience.</p>
                            <p>Performance optimization is key to providing a good user experience. Some techniques to optimize performance include:</p>
                            <ul>
                                <li>Minimizing HTTP requests by combining files and using image sprites.</li>
                                <li>Compressing images and other assets to reduce file sizes.</li>
                                <li>Using lazy loading for images and videos to defer loading until they are needed.</li>
                                <li>Implementing caching strategies to store frequently accessed data locally.</li>
                                <li>Optimizing JavaScript and CSS to reduce render-blocking resources.</li>
                            </ul>
                        </div>
                    `,
                },
                'building-accessible-interfaces': {
                    title: 'Building Accessible Web Interfaces',
                    image: './assets/dis.jpeg',
                    description: `
                        <div class="article-description">
                            <p>Learn how to create accessible web interfaces that cater to all users, including those with disabilities.</p>
                            <p>Accessibility is an essential aspect of web development. It ensures that all users, including those with disabilities, can use web applications effectively. Some ways to improve accessibility include:</p>
                            <ul>
                                <li>Using semantic HTML to provide meaningful structure to web content.</li>
                                <li>Providing alternative text for images to assist screen readers.</li>
                                <li>Ensuring sufficient color contrast for text and background elements.</li>
                                <li>Implementing keyboard navigation for users who cannot use a mouse.</li>
                                <li>Using ARIA (Accessible Rich Internet Applications) attributes to enhance the accessibility of dynamic content.</li>
                            </ul>
                        </div>
                    `,
                    
                }
            };

            const hash = window.location.hash.substring(1);
            if (articles[hash]) {
                const article = articles[hash];
                content.innerHTML = `
                    <h1 class="article-title">${article.title}</h1>
                    <img src="${article.image}" alt="${article.title}" class="article-image">
                    ${article.description}
                `;
            } else {
                content.innerHTML = '<p>Article not found.</p>';
            }
        });
 
        