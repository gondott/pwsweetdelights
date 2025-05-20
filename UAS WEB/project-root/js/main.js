// Add interactive behavior
document.addEventListener('DOMContentLoaded', function() {
    // Get all sections for scroll spy
    const sections = document.querySelectorAll('section');
    
    // Get all nav links
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Get back to top button
    const backToTopBtn = document.getElementById('backToTop');
    
    // Auth container toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    // Get auth links in the navbar
    const authLinks = document.querySelectorAll('.auth-toggle');
    
    // Get auth container and its elements
    const authContainer = document.querySelector('.auth-container');
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    const authTabs = document.querySelectorAll('.auth-tab');
    
    // Handle auth link clicks in navbar
    authLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Show auth container
            authContainer.style.display = 'block';
            
            // Get tab to show
            const tabToShow = this.getAttribute('data-tab');
            
            // Update active tab
            authTabs.forEach(tab => {
                if (tab.getAttribute('data-tab') === tabToShow) {
                    tab.classList.add('active');
                } else {
                    tab.classList.remove('active');
                }
            });
            
            // Show appropriate form
            if (tabToShow === 'login') {
                loginForm.style.display = 'block';
                signupForm.style.display = 'none';
            } else {
                loginForm.style.display = 'none';
                signupForm.style.display = 'block';
            }
            
            // Scroll to auth container
            authContainer.scrollIntoView({ behavior: 'smooth' });
        });
    });
    
    // Handle auth tab clicks within auth container
    authTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const tabToShow = this.getAttribute('data-tab');
            
            // Update active tab
            authTabs.forEach(t => {
                t.classList.remove('active');
            });
            this.classList.add('active');
            
            // Show appropriate form
            if (tabToShow === 'login') {
                loginForm.style.display = 'block';
                signupForm.style.display = 'none';
            } else {
                loginForm.style.display = 'none';
                signupForm.style.display = 'block';
            }
        });
    });
    
    // Close auth container when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.auth-container') && 
            !e.target.classList.contains('auth-toggle') &&
            authContainer.style.display === 'block') {
            authContainer.style.display = 'none';
        }
    });
});
    // Show back to top button on scroll
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
        
        // Highlight active nav link based on scroll position
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= (sectionTop - 150)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('.nav-link, .navbar-brand, .back-to-top').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            
            // Skip if it's dropdown toggle or external link
            if (targetId === '#' || !targetId.startsWith('#')) {
                return;
            }
            
            e.preventDefault();
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Close mobile menu if open
                const navbarCollapse = document.getElementById('navbarNav');
                if (navbarCollapse.classList.contains('show')) {
                    navbarCollapse.classList.remove('show');
                }
                
                // Scroll to target with offset for fixed header
                const headerOffset = 70;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Add hover effects to product images
    document.querySelectorAll('.product-img').forEach(img => {
        img.addEventListener('mouseover', function() {
            this.style.transform = 'scale(1.05)';
            this.style.transition = 'all 0.3s';
        });
        
        img.addEventListener('mouseout', function() {
            this.style.transform = 'scale(1)';
        });
    });
    
    // Add click events to buttons
    document.querySelectorAll('.btn-custom, .btn-outline-light, .btn-outline-secondary').forEach(button => {
        button.addEventListener('click', function() {
            alert('This button would navigate to a product page or perform an action!');
        });
    });
    
    // Add form submission handler
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset();
        });
    }
    
    // Add animation for elements on scroll
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.review-card, .product-img, .special-item');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Set initial state for animation
    document.querySelectorAll('.review-card, .product-img:not(:hover), .special-item').forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'all 0.5s ease-in-out';
    });
    
    // Run animation initially and on scroll
    animateOnScroll();
    window.addEventListener('scroll', animateOnScroll);
    
    // Add dropdown menu interaction
    const dropdowns = document.querySelectorAll('.dropdown');
    
    dropdowns.forEach(dropdown => {
        const dropdownToggle = dropdown.querySelector('.dropdown-toggle');
        const dropdownMenu = dropdown.querySelector('.dropdown-menu');
        
        // Make dropdown items work for smooth scrolling
        const dropdownItems = dropdown.querySelectorAll('.dropdown-item');
        
        dropdownItems.forEach(item => {
            item.addEventListener('click', function(e) {
                const targetId = this.getAttribute('href');
                
                if (targetId && targetId.startsWith('#')) {
                    e.preventDefault();
                    
                    // Close dropdown
                    dropdownMenu.classList.remove('show');
                    
                    // Close mobile menu if open
                    const navbarCollapse = document.getElementById('navbarNav');
                    if (navbarCollapse.classList.contains('show')) {
                        navbarCollapse.classList.remove('show');
                    }
                    
                    // Scroll to target
                    const targetElement = document.querySelector(targetId);
                    if (targetElement) {
                        const headerOffset = 70;
                        const elementPosition = targetElement.getBoundingClientRect().top;
                        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                        
                        window.scrollTo({
                            top: offsetPosition,
                            behavior: 'smooth'
                        });
                    }
                }
            });
        });
    });
});
// main.js - Review functionality for Cookies website

document.addEventListener('DOMContentLoaded', function() {
    // Back to top button functionality
    const backToTopButton = document.getElementById('backToTop');
    
    if (backToTopButton) {
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                backToTopButton.classList.add('show');
            } else {
                backToTopButton.classList.remove('show');
            }
        });
        
        backToTopButton.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({top: 0, behavior: 'smooth'});
        });
    }
    
    // Add Review Functionality
    setupReviewSystem();
    
    // Navbar scrolling effect
    window.addEventListener('scroll', function() {
        const navbar = document.getElementById('mainNavbar');
        if (window.scrollY > 50) {
            navbar.classList.add('navbar-scrolled');
        } else {
            navbar.classList.remove('navbar-scrolled');
        }
    });
});

function setupReviewSystem() {
    // Create the review form and append it to the reviews section
    const reviewsSection = document.getElementById('reviews');
    
    if (reviewsSection) {
        const formContainer = document.createElement('div');
        formContainer.className = 'container review-form-container mt-5';
        formContainer.innerHTML = `
            <h3 class="text-center mb-4">Share Your Experience</h3>
            <div class="row justify-content-center">
                <div class="col-md-8">
                    <form id="addReviewForm" class="review-form">
                        <div class="mb-3">
                            <label for="reviewName" class="form-label">Your Name</label>
                            <input type="text" class="form-control" id="reviewName" required>
                        </div>
                        <div class="mb-3">
                            <label for="reviewLocation" class="form-label">Location/Title</label>
                            <input type="text" class="form-control" id="reviewLocation" required>
                        </div>
                        <div class="mb-3">
                            <label for="reviewTitle" class="form-label">Review Title</label>
                            <input type="text" class="form-control" id="reviewTitle" required>
                        </div>
                        <div class="mb-3">
                            <label for="reviewContent" class="form-label">Your Review</label>
                            <textarea class="form-control" id="reviewContent" rows="3" required></textarea>
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Rating</label>
                            <div class="rating-input">
                                <i class="far fa-star rating-star" data-rating="1"></i>
                                <i class="far fa-star rating-star" data-rating="2"></i>
                                <i class="far fa-star rating-star" data-rating="3"></i>
                                <i class="far fa-star rating-star" data-rating="4"></i>
                                <i class="far fa-star rating-star" data-rating="5"></i>
                                <input type="hidden" id="reviewRating" value="0" required>
                            </div>
                        </div>
                        <div class="text-center">
                            <button type="submit" class="btn btn-custom">Submit Review</button>
                        </div>
                    </form>
                </div>
            </div>
        `;
        
        reviewsSection.appendChild(formContainer);
        
        document.addEventListener('DOMContentLoaded', function() {
            // Tab switching functionality
            const loginTab = document.querySelector('[data-tab="login"]');
            const signupTab = document.querySelector('[data-tab="signup"]');
            const loginForm = document.getElementById('login-form');
            const signupForm = document.getElementById('signup-form');
            
            loginTab.addEventListener('click', function() {
                loginTab.classList.add('active');
                signupTab.classList.remove('active');
                loginForm.style.display = 'block';
                signupForm.style.display = 'none';
            });
            
            signupTab.addEventListener('click', function() {
                signupTab.classList.add('active');
                loginTab.classList.remove('active');
                signupForm.style.display = 'block';
                loginForm.style.display = 'none';
            });
            
            // Password visibility toggle
            const togglePasswordButtons = document.querySelectorAll('.toggle-password');
            
            togglePasswordButtons.forEach(button => {
                button.addEventListener('click', function() {
                    const passwordInput = this.previousElementSibling;
                    
                    if (passwordInput.type === 'password') {
                        passwordInput.type = 'text';
                        this.classList.remove('fa-eye');
                        this.classList.add('fa-eye-slash');
                    } else {
                        passwordInput.type = 'password';
                        this.classList.remove('fa-eye-slash');
                        this.classList.add('fa-eye');
                    }
                });
            });
            
            // Password strength checker
            const signupPassword = document.getElementById('signupPassword');
            const strengthMeter = document.querySelector('.strength-meter span');
            const strengthText = document.querySelector('.strength-text span');
            
            signupPassword.addEventListener('input', checkPasswordStrength);
            
            function checkPasswordStrength() {
                const password = signupPassword.value;
                const passwordMeter = document.querySelector('.password-strength');
                
                if (password.length === 0) {
                    passwordMeter.classList.remove('strength-weak', 'strength-medium', 'strength-strong', 'strength-very-strong');
                    strengthText.textContent = 'Weak';
                    strengthMeter.style.width = '0%';
                    return;
                }
                
                // Calculate password strength
                let strength = 0;
                
                // Length check
                if (password.length >= 8) {
                    strength += 1;
                }
                
                // Lowercase and uppercase check
                if (password.match(/[a-z]/) && password.match(/[A-Z]/)) {
                    strength += 1;
                }
                
                // Number check
                if (password.match(/\d/)) {
                    strength += 1;
                }
                
                // Special character check
                if (password.match(/[^a-zA-Z\d]/)) {
                    strength += 1;
                }
                
                // Update strength indicator
                passwordMeter.classList.remove('strength-weak', 'strength-medium', 'strength-strong', 'strength-very-strong');
                
                if (strength === 1) {
                    passwordMeter.classList.add('strength-weak');
                    strengthText.textContent = 'Weak';
                } else if (strength === 2) {
                    passwordMeter.classList.add('strength-medium');
                    strengthText.textContent = 'Medium';
                } else if (strength === 3) {
                    passwordMeter.classList.add('strength-strong');
                    strengthText.textContent = 'Strong';
                } else if (strength === 4) {
                    passwordMeter.classList.add('strength-very-strong');
                    strengthText.textContent = 'Very Strong';
                }
            }
            
            // Form validation and submission
            const loginFormElement = document.getElementById('loginForm');
            const signupFormElement = document.getElementById('signupForm');
            
            loginFormElement.addEventListener('submit', function(e) {
                e.preventDefault();
                
                const email = document.getElementById('loginEmail').value;
                const password = document.getElementById('loginPassword').value;
                const rememberMe = document.getElementById('rememberMe').checked;
                
                // Validate email
                if (!validateEmail(email)) {
                    showError('loginEmail', 'Please enter a valid email address');
                    return;
                }
                
                // Validate password
                if (password.length < 1) {
                    showError('loginPassword', 'Please enter your password');
                    return;
                }
                
                // Clear any existing error messages
                clearErrors();
                
                // Simulate login (would be replaced with actual API call)
                simulateLogin(email, password, rememberMe);
            });
            
            signupFormElement.addEventListener('submit', function(e) {
                e.preventDefault();
                
                const name = document.getElementById('signupName').value;
                const email = document.getElementById('signupEmail').value;
                const password = document.getElementById('signupPassword').value;
                const confirmPassword = document.getElementById('confirmPassword').value;
                const agreeTerms = document.getElementById('agreeTerms').checked;
                
                // Validate name
                if (name.trim().length < 2) {
                    showError('signupName', 'Please enter your full name');
                    return;
                }
                
                // Validate email
                if (!validateEmail(email)) {
                    showError('signupEmail', 'Please enter a valid email address');
                    return;
                }
                
                // Validate password
                if (password.length < 8) {
                    showError('signupPassword', 'Password must be at least 8 characters');
                    return;
                }
                
                // Validate confirm password
                if (password !== confirmPassword) {
                    showError('confirmPassword', 'Passwords do not match');
                    return;
                }
                
                // Validate terms agreement
                if (!agreeTerms) {
                    alert('Please agree to the Terms of Service and Privacy Policy');
                    return;
                }
                
                // Clear any existing error messages
                clearErrors();
                
                // Simulate signup (would be replaced with actual API call)
                simulateSignup(name, email, password);
            });
            
            function validateEmail(email) {
                const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return re.test(String(email).toLowerCase());
            }
            
            function showError(inputId, message) {
                const input = document.getElementById(inputId);
                input.classList.add('input-error');
                
                // Remove any existing error message
                const existingError = input.parentElement.nextElementSibling;
                if (existingError && existingError.classList.contains('error-message')) {
                    existingError.remove();
                }
                
                // Create and append error message
                const errorDiv = document.createElement('div');
                errorDiv.className = 'error-message';
                errorDiv.textContent = message;
                
                input.parentElement.after(errorDiv);
            }
            
            function clearErrors() {
                const errorInputs = document.querySelectorAll('.input-error');
                const errorMessages = document.querySelectorAll('.error-message');
                
                errorInputs.forEach(input => {
                    input.classList.remove('input-error');
                });
                
                errorMessages.forEach(message => {
                    message.remove();
                });
            }
            
            function simulateLogin(email, password, rememberMe) {
                // Show loading state
                const loginButton = loginFormElement.querySelector('button[type="submit"]');
                const originalText = loginButton.textContent;
                loginButton.textContent = 'Logging in...';
                loginButton.disabled = true;
                
                // Simulate API call
                setTimeout(() => {
                    // This is where you would typically make an API request to verify credentials
                    
                    // For demonstration, we'll just show a success message and redirect
                    showSuccessMessage(loginForm, 'Login successful! Redirecting...');
                    
                    // Store user info in local storage if remember me is checked
                    if (rememberMe) {
                        localStorage.setItem('user_email', email);
                        // Note: In a real app, you'd store a token, not the password
                    }
                    
                    // Redirect after a short delay
                    setTimeout(() => {
                        window.location.href = 'index.html';
                    }, 1500);
                    
                }, 1500);
            }
            
            function simulateSignup(name, email, password) {
                // Show loading state
                const signupButton = signupFormElement.querySelector('button[type="submit"]');
                const originalText = signupButton.textContent;
                signupButton.textContent = 'Creating account...';
                signupButton.disabled = true;
                
                // Simulate API call
                setTimeout(() => {
                    // This is where you would typically make an API request to create an account
                    
                    // For demonstration, we'll just show a success message and switch to login
                    showSuccessMessage(signupForm, 'Account created successfully!');
                    
                    // Reset form
                    signupFormElement.reset();
                    
                    // Switch to login tab after a short delay
                    setTimeout(() => {
                        loginTab.click();
                        signupButton.textContent = originalText;
                        signupButton.disabled = false;
                    }, 1500);
                    
                }, 1500);
            }
            
            function showSuccessMessage(form, message) {
                // Remove any existing success message
                const existingSuccess = form.querySelector('.success-message');
                if (existingSuccess) {
                    existingSuccess.remove();
                }
                
                // Create and append success message
                const successDiv = document.createElement('div');
                successDiv.className = 'success-message';
                successDiv.textContent = message;
                
                const formElement = form.querySelector('form');
                formElement.before(successDiv);
            }
        });