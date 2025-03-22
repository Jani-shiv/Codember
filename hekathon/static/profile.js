document.addEventListener("DOMContentLoaded", () => {
    // Tab navigation
    const tabButtons = document.querySelectorAll(".tab-btn")
    const tabContents = document.querySelectorAll(".tab-content")
    const prevBtn = document.getElementById("prev-btn")
    const nextBtn = document.getElementById("next-btn")
    const submitBtn = document.getElementById("submit-btn")
  
    // Initialize
    let currentTabIndex = 0
    updateNavButtons()
  
    // Tab click event
    tabButtons.forEach((button, index) => {
      button.addEventListener("click", () => {
        setActiveTab(index)
      })
    })
  
    // Previous button click
    prevBtn.addEventListener("click", () => {
      if (currentTabIndex > 0) {
        setActiveTab(currentTabIndex - 1)
      }
    })
  
    // Next button click
    nextBtn.addEventListener("click", () => {
      if (currentTabIndex < tabButtons.length - 1) {
        setActiveTab(currentTabIndex + 1)
      }
    })
  
    // Submit button click
    submitBtn.addEventListener("click", () => {
      // Animation for submit button
      submitBtn.classList.add("submitting")
      submitBtn.innerHTML = 'Submitting... <i class="fa-solid fa-spinner fa-spin"></i>'
  
      // Simulate submission process
      setTimeout(() => {
        alert("Profile submitted for verification successfully!")
        submitBtn.classList.remove("submitting")
        submitBtn.innerHTML = "Submit for Verification"
      }, 2000)
    })
  
    // Function to set active tab
    function setActiveTab(index) {
      // Remove active class from all tabs
      tabButtons.forEach((btn) => btn.classList.remove("active"))
      tabContents.forEach((content) => content.classList.remove("active"))
  
      // Add active class to selected tab
      tabButtons[index].classList.add("active")
      tabContents[index].classList.add("active")
  
      // Update current tab index
      currentTabIndex = index
  
      // Update navigation buttons
      updateNavButtons()
  
      // Scroll to top of content
      window.scrollTo({
        top: tabContents[index].offsetTop - 100,
        behavior: "smooth",
      })
  
      // Add entrance animation to elements
      animateContent(tabContents[index])
    }
  
    // Function to update navigation buttons
    function updateNavButtons() {
      // Show/hide previous button
      if (currentTabIndex === 0) {
        prevBtn.style.visibility = "hidden"
      } else {
        prevBtn.style.visibility = "visible"
      }
  
      // Show/hide next and submit buttons
      if (currentTabIndex === tabButtons.length - 1) {
        nextBtn.style.display = "none"
        submitBtn.style.display = "flex"
      } else {
        nextBtn.style.display = "flex"
        submitBtn.style.display = "none"
      }
    }
  
    // Function to animate content elements
    function animateContent(container) {
      const elements = container.querySelectorAll(".info-item, .card-header, .card-content > div")
  
      elements.forEach((element, index) => {
        // Reset animation
        element.style.animation = "none"
        element.offsetHeight // Trigger reflow
  
        // Apply staggered animation

        element.style.animation = `fadeInUp 0.5s ease forwards ${index * 0.1}s`
        element.style.opacity = "0"
      })
    }
  
    // Add hover animations for interactive elements
    const interactiveElements = document.querySelectorAll(".crop-badge, .practice-item, .sales-item")
  
    interactiveElements.forEach((element) => {
      element.addEventListener("mouseenter", () => {
        element.style.transform = "translateY(-5px)"
        element.style.boxShadow = "0 10px 20px rgba(0, 0, 0, 0.1)"
      })
  
      element.addEventListener("mouseleave", () => {
        element.style.transform = ""
        element.style.boxShadow = ""
      })
    })
  
    // Add parallax effect to profile avatar
    const avatar = document.querySelector(".profile-avatar")
  
    window.addEventListener("mousemove", (e) => {
      const x = e.clientX / window.innerWidth
      const y = e.clientY / window.innerHeight
  

      avatar.style.transform = `translate(${x * 10 - 5}px, ${y * 10 - 5}px)`
    })
  
    // Initialize with animations
    animateContent(tabContents[currentTabIndex])
  
    // Add scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in")
          }
        })
      },

      { threshold: 0.1 }
    )
  
    document.querySelectorAll(".card").forEach((card) => {
      observer.observe(card)


    })
  })