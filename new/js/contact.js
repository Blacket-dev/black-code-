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

  // Contact form handling
  const form = document.getElementById("contactForm")
  const formMessage = document.getElementById("formMessage")

  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault() // Prevent default form submission

      const formData = new FormData(form)

      try {
        // Show loading state
        formMessage.innerHTML = '<p style="color: var(--secondary-text);">Sending message...</p>'

        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData,
        })

        const result = await response.json()

        if (result.success) {
          formMessage.innerHTML = '<p style="color: #10b981;">Your message has been sent successfully!</p>'
          form.reset() // Reset form fields
        } else {
          formMessage.innerHTML =
            '<p style="color: #ef4444;">There was an issue sending your message. Please try again.</p>'
        }
      } catch (error) {
        formMessage.innerHTML = '<p style="color: #ef4444;">An error occurred. Please try again later.</p>'
        console.error("Form submission error:", error)
      }
    })
  }

  // Pricing card animations
  const pricingCards = document.querySelectorAll(".pricing-card")

  if (pricingCards.length > 0) {
    // Add hover effects
    pricingCards.forEach((card) => {
      card.addEventListener("mouseenter", function () {
        if (!this.classList.contains("featured")) {
          this.style.transform = "translateY(-10px)"
        } else {
          this.style.transform = "scale(1.05) translateY(-10px)"
        }
      })

      card.addEventListener("mouseleave", function () {
        if (!this.classList.contains("featured")) {
          this.style.transform = ""
        } else {
          this.style.transform = "scale(1.05)"
        }
      })
    })
  }

  // GSAP Animations if available
  const gsap = window.gsap // Declare the gsap variable
  if (typeof gsap !== "undefined") {
    // Animate form elements
    gsap.from(".form-group", {
      y: 30,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
      delay: 0.3,
    })

    // Animate pricing cards
    gsap.from(".pricing-card", {
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      delay: 0.5,
    })
  }
})
