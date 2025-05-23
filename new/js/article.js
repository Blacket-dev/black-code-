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

  // Article content loading
  const content = document.getElementById("content")

  const articles = {
    "modern-frontend": {
      title: "Modern Frontend Development Trends",
      image: "./assets/web1.png",
      description: `
              <div class="article-description">
                <h2>Exploring the Latest Trends in Frontend Development</h2>
                <p>
                    The field of frontend development is constantly evolving, with new trends and technologies emerging every year. As user expectations rise, developers are tasked with creating websites and applications that are not only functional but also visually appealing and accessible. This article delves into some of the most significant trends shaping the future of frontend development.
                </p>
                
                <h3>1. JavaScript Frameworks Dominate</h3>
                <img src="./assets/image.png" alt="JavaScript Frameworks">
                <p>
                    JavaScript frameworks like <strong>React</strong>, <strong>Vue</strong>, and <strong>Angular</strong> continue to be at the forefront of modern web development. These frameworks provide developers with the tools to build complex user interfaces efficiently. They allow for component-based architecture, which enhances reusability and maintainability.
                </p>
                <p>
                    <em>React</em>, developed by Facebook, has gained immense popularity due to its flexibility and performance. On the other hand, <em>Vue</em> offers a gentle learning curve and is perfect for smaller projects, while <em>Angular</em> is often chosen for larger enterprise applications.
                </p>

                <h3>2. The Rise of Progressive Web Apps (PWAs)</h3>
                <img src="./assets/image1.jpg" alt="The Rise of Progressive Web Apps (PWAs)">
                <p>
                    Progressive Web Apps combine the best of web and mobile applications, offering a seamless experience across devices. PWAs are fast, reliable, and can work offline, making them an attractive option for users. They utilize service workers and manifest files to provide native-like experiences directly in the browser.
                </p>
                <p>
                    Companies like <strong>Twitter</strong> and <strong>Starbucks</strong> have embraced PWAs to improve user engagement and retention, showing that this trend is not just a passing phase but a fundamental shift in how we approach web development.
                </p>

                <h3>3. Emphasis on Accessibility</h3>
                <p>
                    Accessibility has become a priority for developers as the web aims to be inclusive for all users, including those with disabilities. Adhering to <strong>WCAG</strong> guidelines ensures that websites are usable for people with various abilities.
                </p>
                <p>
                    Implementing semantic HTML, providing alt text for images, and ensuring keyboard navigation are just a few ways to enhance accessibility. As awareness of these issues grows, more developers are prioritizing inclusive design in their projects.
                </p>

                <h3>4. CSS-in-JS: A New Styling Paradigm</h3>
                <p>
                    CSS-in-JS libraries, such as <strong>Styled Components</strong> and <strong>Emotion</strong>, are gaining traction in the frontend community. These libraries allow developers to write CSS directly within their JavaScript code, promoting modularity and better scoping of styles.
                </p>
                <p>
                    This approach not only reduces the likelihood of style conflicts but also makes it easier to manage styles in large applications, leading to cleaner and more maintainable codebases.
                </p>

                <h3>5. Static Site Generators for Speed and SEO</h3>
                <p>
                    Static site generators (SSGs) like <strong>Gatsby</strong> and <strong>Next.js</strong> are revolutionizing the way we build websites. By pre-rendering pages at build time, SSGs ensure fast loading times and better SEO performance.
                </p>
                <p>
                    These tools leverage React components and allow developers to fetch data from various sources, creating dynamic sites that still benefit from the speed of static content.
                </p>

                <h3>6. Motion Design and Microinteractions</h3>
                <p>
                    Motion design has become a key element in frontend development, enhancing user experiences by guiding users through interactions. Subtle animations and microinteractions provide feedback, making applications feel more responsive and engaging.
                </p>
                <p>
                    Tools like <strong>Framer Motion</strong> and <strong>GSAP</strong> enable developers to create stunning animations effortlessly, allowing for a richer user experience without compromising performance.
                </p>

                <h3>7. The Growth of Low-Code/No-Code Platforms</h3>
                <p>
                    Low-code and no-code platforms are democratizing web development, allowing individuals with little to no coding experience to build applications. Platforms like <strong>Webflow</strong> and <strong>Bubble</strong> empower users to create and launch their projects with intuitive drag-and-drop interfaces.
                </p>
                <p>
                    While these platforms may not replace traditional development, they significantly reduce the barriers to entry, allowing more people to contribute to the digital landscape.
                </p>

                <h3>Conclusion</h3>
                <p>
                    The world of frontend development is constantly changing, with trends emerging that reflect user needs and technological advancements. By staying informed about these trends, developers can create modern, efficient, and user-friendly applications that resonate with their audience.
                </p>
                <p>
                    Embracing these trends not only enhances the quality of web applications but also prepares developers for the future, ensuring they remain competitive in a rapidly evolving field. As we look ahead, it's essential to continue learning and adapting to these exciting changes in frontend development.
                </p>
            </div>
            `,
    },
    "optimizing-performance": {
      title: "Optimizing Performance in Web Applications",
      image: "./assets/web.webp",
      description: `
                <div class="article-description">
                    <h2>Strategies for Optimizing Web Application Performance</h2>
                    <p>Performance optimization is key to providing a good user experience. This article covers strategies for reducing load times, enhancing responsiveness, and ensuring a smooth user experience.</p>
                    
                    <h3>Why Performance Matters</h3>
                    <p>Studies have consistently shown that website performance directly impacts user engagement, conversion rates, and even SEO rankings. According to Google, as page load time increases from 1 second to 3 seconds, the probability of bounce increases by 32%. This makes performance optimization not just a technical concern but a business imperative.</p>
                    
                    <h3>Key Performance Optimization Techniques</h3>
                    
                    <h4>1. Minimize HTTP Requests</h4>
                    <p>Each file your website loads requires a separate HTTP request, which adds to the loading time. Reduce the number of requests by:</p>
                    <ul>
                        <li>Combining multiple CSS files into one</li>
                        <li>Combining multiple JavaScript files into one</li>
                        <li>Using CSS sprites to combine multiple images</li>
                        <li>Implementing icon fonts or SVG instead of multiple image files</li>
                    </ul>
                    
                    <h4>2. Optimize Images</h4>
                    <p>Images often account for the majority of a webpage's size. Optimize them by:</p>
                    <ul>
                        <li>Compressing images without sacrificing quality</li>
                        <li>Using modern formats like WebP which offer better compression</li>
                        <li>Implementing responsive images that load different sizes based on the device</li>
                        <li>Lazy loading images that are not immediately visible on the screen</li>
                    </ul>
                    
                    <h4>3. Leverage Browser Caching</h4>
                    <p>Browser caching stores webpage resources locally on a user's device, reducing the need to download the same resources on subsequent visits.</p>
                    <ul>
                        <li>Set appropriate expiration times for different types of resources</li>
                        <li>Use versioning or fingerprinting for files that change</li>
                        <li>Implement service workers for offline capabilities</li>
                    </ul>
                    
                    <h4>4. Minify and Compress Resources</h4>
                    <p>Reduce file sizes by:</p>
                    <ul>
                        <li>Minifying CSS, JavaScript, and HTML by removing unnecessary characters</li>
                        <li>Enabling GZIP or Brotli compression on your server</li>
                        <li>Using tree shaking to eliminate unused code</li>
                    </ul>
                    
                    <h4>5. Optimize JavaScript Execution</h4>
                    <p>JavaScript can block rendering if not handled properly. Optimize it by:</p>
                    <ul>
                        <li>Deferring non-critical JavaScript</li>
                        <li>Using async and defer attributes for script tags</li>
                        <li>Breaking long-running tasks into smaller chunks</li>
                        <li>Removing or replacing heavy JavaScript libraries with lighter alternatives</li>
                    </ul>
                    
                    <h3>Conclusion</h3>
                    <p>Performance optimization is an ongoing process rather than a one-time task. By implementing these techniques and regularly measuring your application's performance, you can provide users with a fast, responsive experience that keeps them engaged and satisfied.</p>
                </div>
            `,
    },
    "building-accessible-interfaces": {
      title: "Building Accessible Web Interfaces",
      image: "./assets/dis.jpeg",
      description: `
                <div class="article-description">
                    <h2>Creating Inclusive Web Experiences</h2>
                    <p>Web accessibility ensures that websites, tools, and technologies are designed and developed so that people with disabilities can use them. More than just a legal requirement in many countries, accessibility is a fundamental aspect of inclusive design that benefits all users.</p>
                    
                    <h3>Why Accessibility Matters</h3>
                    <p>According to the World Health Organization, over one billion people worldwide live with some form of disability. By building accessible interfaces, we:</p>
                    <ul>
                        <li>Include a significant portion of the population that might otherwise be excluded</li>
                        <li>Improve usability for all users, not just those with disabilities</li>
                        <li>Meet legal requirements and avoid potential lawsuits</li>
                        <li>Demonstrate social responsibility and ethical business practices</li>
                        <li>Often improve SEO as many accessibility practices align with search engine optimization</li>
                    </ul>
                    
                    <h3>Key Principles of Web Accessibility</h3>
                    
                    <h4>1. Perceivable Information</h4>
                    <p>Information and user interface components must be presentable to users in ways they can perceive:</p>
                    <ul>
                        <li>Provide text alternatives for non-text content (images, videos, etc.)</li>
                        <li>Create content that can be presented in different ways without losing information</li>
                        <li>Make it easier for users to see and hear content by separating foreground from background</li>
                    </ul>
                    
                    <h4>2. Operable User Interface</h4>
                    <p>User interface components and navigation must be operable:</p>
                    <ul>
                        <li>Make all functionality available from a keyboard</li>
                        <li>Give users enough time to read and use content</li>
                        <li>Do not use content that could cause seizures or physical reactions</li>
                        <li>Provide ways to help users navigate, find content, and determine where they are</li>
                    </ul>
                    
                    <h4>3. Understandable Information</h4>
                    <p>Information and the operation of the user interface must be understandable:</p>
                    <ul>
                        <li>Make text readable and understandable</li>
                        <li>Make web pages appear and operate in predictable ways</li>
                        <li>Help users avoid and correct mistakes</li>
                    </ul>
                    
                    <h4>4. Robust Content</h4>
                    <p>Content must be robust enough to be interpreted reliably by a wide variety of user agents, including assistive technologies:</p>
                    <ul>
                        <li>Maximize compatibility with current and future user tools</li>
                        <li>Use standard HTML elements whenever possible</li>
                        <li>Ensure proper markup and structure</li>
                    </ul>
                    
                    <h3>Conclusion</h3>
                    <p>Building accessible web interfaces is not just about compliance—it's about creating a better web for everyone. By following these principles and techniques, you can ensure your websites and applications are usable by the widest possible audience, regardless of their abilities or the devices they use.</p>
                </div>
            `,
    },
  }

  const hash = window.location.hash.substring(1)
  if (articles[hash]) {
    const article = articles[hash]
    content.innerHTML = `
            <h1 class="article-title">${article.title}</h1>
            <img src="${article.image}" alt="${article.title}" class="article-image">
            ${article.description}
        `
  } else {
    content.innerHTML =
      '<p>Article not found. Please select an article from the <a href="index.html#articles">articles section</a>.</p>'
  }

  // GSAP Animations if available
  const gsap = window.gsap // Declare the gsap variable
  if (gsap) {
    gsap.from(".article-title", {
      y: 30,
      opacity: 0,
      duration: 0.8,
      delay: 0.2,
    })

    gsap.from(".article-image", {
      y: 30,
      opacity: 0,
      duration: 0.8,
      delay: 0.4,
    })

    gsap.from(".article-description > *", {
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      delay: 0.6,
    })
  }
})
