document.addEventListener("DOMContentLoaded", () => {
  const content = document.getElementById("content")

  const projects = {
    "ecommerce-website-redesign": {
      title: "E-commerce Website Redesign",
      description: `
                <p>I led the redesign of an e-commerce website, focusing on modern aesthetics, improved navigation, and seamless checkout processes. This project aimed to boost customer satisfaction and drive higher conversion rates.</p>
                <p>Additional details about the e-commerce redesign project...</p>
            `,
    },
    "financial-dashboard": {
      title: "Financial Dashboard for a Banking App",
      description: `
                <p>Creating a comprehensive financial dashboard for better user insights. I developed a financial dashboard for a banking app, providing users with real-time insights into their financial health. The project required attention to detail and a focus on data visualization.</p>
                <p>Additional details about the financial dashboard project...</p>
            `,
    },
    "healthcare-booking": {
      title: "Healthcare Appointment Booking System",
      description: `
                <p>Developing a system to streamline appointment scheduling for healthcare providers. I designed and implemented an appointment booking system for a healthcare provider, improving the efficiency of their scheduling process and enhancing patient experience.</p>
                <p>Additional details about the healthcare booking system project...</p>
            `,
    },
    "real-estate-platform": {
      title: "Real Estate Property Listing Platform",
      description: `
                <p>Building a platform for listing and searching real estate properties. I created a property listing platform for a real estate company, offering a seamless experience for users to search and explore properties.</p>
                <p>Additional details about the real estate platform project...</p>
            `,
    },
    "education-portal": {
      title: "Education Portal for Online Courses",
      description: `
                <p>Developing an education portal to deliver online courses and resources. I developed an online education portal, providing students with access to a wide range of courses and learning materials. The project aimed to create an engaging and interactive learning environment.</p>
                <p>Additional details about the education portal project...</p>
            `,
    },
    "travel-booking": {
      title: "Travel Booking Website",
      description: `
                <p>Designing a website to facilitate travel bookings and itinerary management. I designed and implemented a travel booking website, making it easy for users to plan and book their trips.</p>
                <p>Additional details about the travel booking website project...</p>
            `,
    },
  }

  const hash = window.location.hash.substring(1)
  if (projects[hash]) {
    const project = projects[hash]
    content.innerHTML = `
            <h1 class="tw-text-3xl tw-font-bold">${project.title}</h1>
            ${project.description}
        `
  } else {
    content.innerHTML = "<p>Project not found.</p>"
  }

  // Initialization
  const RESPONSIVE_WIDTH = 1024

  const headerWhiteBg = false
  let isHeaderCollapsed = window.innerWidth < RESPONSIVE_WIDTH
  const collapseBtn = document.getElementById("collapse-btn")
  const collapseHeaderItems = document.getElementById("collapsed-header-items")

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

  // Add scroll reveal animation
  const animatedElements = document.querySelectorAll(".fade-up, .fade-in-left, .fade-in-right")

  function checkScroll() {
    const windowHeight = window.innerHeight

    animatedElements.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top

      if (elementTop < windowHeight - 100) {
        element.classList.add("visible")
      }
    })
  }

  window.addEventListener("scroll", checkScroll)
  // Check on initial load
  checkScroll()

  // Add animation classes to elements
  const heroElements = document.querySelectorAll(".hero-content > *")
  heroElements.forEach((el, index) => {
    el.classList.add("fade-in", `delay-${index + 1}`)
  })

  // Scroll reveal animation
  const revealElements = document.querySelectorAll(
    ".project-card, .testimonial-card, .service-card, .article-card, .section-title, .divider",
  )

  const revealOnScroll = () => {
    const windowHeight = window.innerHeight

    revealElements.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top
      if (elementTop < windowHeight - 100) {
        element.classList.add("fade-in")
      }
    })
  }

  window.addEventListener("scroll", revealOnScroll)
  revealOnScroll() // Check on initial load

  function onHeaderClickOutside(e) {
    if (!collapseHeaderItems.contains(e.target)) {
      toggleHeader()
    }
  }

  function toggleHeader() {
    if (isHeaderCollapsed) {
      collapseHeaderItems.classList.add("opacity-100")
      collapseHeaderItems.style.width = "60vw"
      collapseBtn.classList.remove("bi-list")
      collapseBtn.classList.add("bi-x", "max-lg:tw-fixed")
      isHeaderCollapsed = false

      setTimeout(() => window.addEventListener("click", onHeaderClickOutside), 1)
    } else {
      collapseHeaderItems.classList.remove("opacity-100")
      collapseHeaderItems.style.width = "0vw"
      collapseBtn.classList.remove("bi-x", "max-lg:tw-fixed")
      collapseBtn.classList.add("bi-list")
      isHeaderCollapsed = true
      window.removeEventListener("click", onHeaderClickOutside)
    }
  }

  function responsive() {
    if (window.innerWidth > RESPONSIVE_WIDTH) {
      collapseHeaderItems.style.width = ""
    } else {
      isHeaderCollapsed = true
    }
  }

  window.addEventListener("resize", responsive)

  // GSAP Animations if available
  const gsap = window.gsap
  const ScrollTrigger = window.ScrollTrigger

  // Check if GSAP is loaded
  if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger)

    // Animate floating dots
    gsap.to(".dot", {
      y: "random(-20, 20)",
      x: "random(-10, 10)",
      duration: "random(10, 15)",
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      stagger: 0.5,
    })

    // Animate section titles
    gsap.from(".section-title", {
      scrollTrigger: {
        trigger: ".section-title",
        start: "top 80%",
      },
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
    })

    // Animate project cards
    gsap.from(".project-card", {
      scrollTrigger: {
        trigger: ".project-grid",
        start: "top 80%",
      },
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
    })

    // Animate testimonial cards
    gsap.from(".testimonial-card", {
      scrollTrigger: {
        trigger: ".testimonial-grid",
        start: "top 80%",
      },
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
    })

    // Animate service cards
    gsap.from(".service-card", {
      scrollTrigger: {
        trigger: ".services-grid",
        start: "top 80%",
      },
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
    })

    // Animate article cards
    gsap.from(".article-card", {
      scrollTrigger: {
        trigger: ".articles-grid",
        start: "top 80%",
      },
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
    })

    // Initial state for hero text and image
    gsap.set(".reveal-hero-text", {
      opacity: 0,
      y: "100%",
    })

    gsap.set(".reveal-hero-img", {
      opacity: 0,
      y: "100%",
    })

    gsap.set(".reveal-up", {
      opacity: 0,
      y: "100%",
    })

    // Animate hero elements on load
    window.addEventListener("load", () => {
      // Animate hero text
      gsap.to(".reveal-hero-text", {
        opacity: 1,
        y: "0%",
        duration: 0.8,
        stagger: 0.5,
      })

      // Animate hero image
      gsap.to(".reveal-hero-img", {
        opacity: 1,
        y: "0%",
        duration: 1,
      })
    })
  } else {
    // Fallback for when GSAP is not available
    document.querySelectorAll(".reveal-hero-text, .reveal-hero-img, .reveal-up").forEach((el) => {
      el.style.opacity = 1
      el.style.transform = "translateY(0)"
    })
  }

  // Ensure sections are visible on scroll
  const allSections = document.querySelectorAll("section")

  function checkSectionsVisibility() {
    allSections.forEach((section) => {
      // Make sure section is visible
      section.style.display = "block"
      section.style.opacity = "1"
    })
  }

  // Run on page load and scroll
  window.addEventListener("load", checkSectionsVisibility)
  window.addEventListener("scroll", checkSectionsVisibility)
  window.addEventListener("resize", checkSectionsVisibility)

  // Check immediately
  checkSectionsVisibility()
})
document.addEventListener("DOMContentLoaded", () => {
  // Mobile menu toggle - Simple and working version
  const menuToggle = document.getElementById("menu-toggle")
  const mobileMenu = document.getElementById("mobile-menu")

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener("click", (e) => {
      e.preventDefault()
      e.stopPropagation()

      // Toggle the active class
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

    // Close mobile menu when clicking on a link
    const mobileLinks = mobileMenu.querySelectorAll("a")
    mobileLinks.forEach((link) => {
      link.addEventListener("click", () => {
        mobileMenu.classList.remove("active")
        const icon = menuToggle.querySelector("i")
        if (icon) {
          icon.classList.remove("bi-x")
          icon.classList.add("bi-list")
        }
      })
    })

    // Close mobile menu when clicking outside
    document.addEventListener("click", (e) => {
      if (!menuToggle.contains(e.target) && !mobileMenu.contains(e.target)) {
        mobileMenu.classList.remove("active")
        const icon = menuToggle.querySelector("i")
        if (icon) {
          icon.classList.remove("bi-x")
          icon.classList.add("bi-list")
        }
      }
    })
  }

  // Ensure all sections are visible
  const allSections = document.querySelectorAll("section")
  allSections.forEach((section) => {
    section.style.display = "block"
    section.style.visibility = "visible"
    section.style.opacity = "1"
  })

  // Simple scroll animations
  const animatedElements = document.querySelectorAll(".fade-up, .fade-in-left, .fade-in-right")

  function checkScroll() {
    const windowHeight = window.innerHeight

    animatedElements.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top

      if (elementTop < windowHeight - 100) {
        element.classList.add("visible")
      }
    })
  }

  // Run scroll check
  window.addEventListener("scroll", checkScroll)
  window.addEventListener("resize", checkScroll)
  checkScroll() // Check on initial load

  // Simple GSAP animations if available
  const gsap = window.gsap // Declare the gsap variable
  if (typeof gsap !== "undefined") {
    // Animate floating dots
    gsap.to(".dot", {
      y: "random(-20, 20)",
      x: "random(-10, 10)",
      duration: "random(10, 15)",
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      stagger: 0.5,
    })
  }

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute("href"))
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    })
  })
})

