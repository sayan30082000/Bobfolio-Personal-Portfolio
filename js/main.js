// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize variables
    const navbar = document.querySelector('header');
    const navLinks = document.querySelectorAll('.nav-link');
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    const barElements = document.querySelectorAll('.bar');
    const sections = document.querySelectorAll('section');
    const skillLevels = document.querySelectorAll('.skill-level');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectItems = document.querySelectorAll('.project-item');
    const contactForm = document.getElementById('contactForm');
    const cursor = document.querySelector('.cursor');
    const cursorFollower = document.querySelector('.cursor-follower');

    // Custom cursor
    if (cursor && cursorFollower) {
        document.addEventListener('mousemove', function(e) {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
            
            // Add a slight delay to the follower for a smooth effect
            setTimeout(function() {
                cursorFollower.style.left = e.clientX + 'px';
                cursorFollower.style.top = e.clientY + 'px';
            }, 50);
        });

        // Change cursor size on hover over links and buttons
        document.addEventListener('mouseover', function(e) {
            if (e.target.tagName.toLowerCase() === 'a' || 
                e.target.tagName.toLowerCase() === 'button' || 
                e.target.classList.contains('btn') ||
                e.target.parentElement.classList.contains('btn')) {
                cursor.style.width = '0px';
                cursor.style.height = '0px';
                cursorFollower.style.width = '50px';
                cursorFollower.style.height = '50px';
                cursorFollower.style.borderWidth = '3px';
                cursorFollower.style.backgroundColor = 'rgba(108, 99, 255, 0.1)';
            }
        });

        // Reset cursor size when not hovering over links and buttons
        document.addEventListener('mouseout', function(e) {
            if (e.target.tagName.toLowerCase() === 'a' || 
                e.target.tagName.toLowerCase() === 'button' || 
                e.target.classList.contains('btn') ||
                e.target.parentElement.classList.contains('btn')) {
                cursor.style.width = '10px';
                cursor.style.height = '10px';
                cursorFollower.style.width = '30px';
                cursorFollower.style.height = '30px';
                cursorFollower.style.borderWidth = '2px';
                cursorFollower.style.backgroundColor = 'transparent';
            }
        });
    }

    // Mobile menu toggle
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
            
            // Toggle active class for bar elements
            document.querySelectorAll('.bar').forEach(function(bar) {
                bar.classList.toggle('active');
            });
        });

        // Close mobile menu when clicking on a nav link
        navLinks.forEach(function(navLink) {
            navLink.addEventListener('click', function() {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }

    // Sticky navbar on scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('sticky');
        } else {
            navbar.classList.remove('sticky');
        }

        // Activate nav links based on scroll position
        let current = '';
        
        sections.forEach(function(section) {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(function(navLink) {
            navLink.classList.remove('active');
            if (navLink.getAttribute('href') === '#' + current) {
                navLink.classList.add('active');
            }
        });

        // Reveal elements on scroll
        revealElements();
    });

    // Reveal elements on scroll
    function revealElements() {
        const reveals = document.querySelectorAll('.reveal-left, .reveal-right');
        
        reveals.forEach(function(reveal) {
            const windowHeight = window.innerHeight;
            const revealTop = reveal.getBoundingClientRect().top;
            const revealPoint = 150;
            
            if (revealTop < windowHeight - revealPoint) {
                reveal.classList.add('active');
            }
        });

        // Animate skill bars when in viewport
        skillLevels.forEach(function(skillLevel) {
            const windowHeight = window.innerHeight;
            const skillTop = skillLevel.getBoundingClientRect().top;
            const skillPoint = 150;
            
            if (skillTop < windowHeight - skillPoint) {
                const level = skillLevel.getAttribute('data-level');
                skillLevel.style.width = level + '%';
            }
        });
    }

    // Call reveal function on page load
    revealElements();

    // Project filtering
    if (filterBtns.length > 0 && projectItems.length > 0) {
        filterBtns.forEach(function(btn) {
            btn.addEventListener('click', function() {
                // Remove active class from all buttons
                filterBtns.forEach(function(filterBtn) {
                    filterBtn.classList.remove('active');
                });
                
                // Add active class to clicked button
                this.classList.add('active');
                
                const filterValue = this.getAttribute('data-filter');
                
                // Filter projects
                projectItems.forEach(function(item) {
                    if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                        item.style.display = 'block';
                        setTimeout(function() {
                            item.style.opacity = '1';
                            item.style.transform = 'scale(1)';
                        }, 100);
                    } else {
                        item.style.opacity = '0';
                        item.style.transform = 'scale(0.8)';
                        setTimeout(function() {
                            item.style.display = 'none';
                        }, 300);
                    }
                });
            });
        });
    }

    // Form submission
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Simple form validation
            if (name && email && subject && message) {
                // In a real application, you would send the form data to a server here
                // For this demo, we'll just show a success message
                alert('Thank you for your message! I will get back to you soon.');
                contactForm.reset();
            } else {
                alert('Please fill in all fields.');
            }
        });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Typing effect for hero section
    function typeEffect() {
        const text = document.querySelector('.hero h1');
        if (text) {
            // Store the original content
            const textContent = text.innerHTML;
            text.innerHTML = '';
            let i = 0;
            
            function typing() {
                if (i < textContent.length) {
                    text.innerHTML += textContent.charAt(i);
                    i++;
                    setTimeout(typing, 100);
                }
            }
            
            setTimeout(typing, 1000);
        }
    }

    // Uncomment to enable typing effect
    // typeEffect();

    // Preloader
    window.addEventListener('load', function() {
        // Hide preloader if it exists
        const preloader = document.querySelector('.preloader');
        if (preloader) {
            preloader.style.opacity = '0';
            setTimeout(function() {
                preloader.style.display = 'none';
            }, 500);
        }
    });

    // Parallax effect for hero section
    window.addEventListener('mousemove', function(e) {
        const heroImage = document.querySelector('.hero-image');
        const shapes = document.querySelectorAll('.shape');
        
        if (heroImage && shapes.length > 0) {
            const x = (window.innerWidth - e.pageX * 2) / 100;
            const y = (window.innerHeight - e.pageY * 2) / 100;
            
            heroImage.style.transform = `translateX(${x}px) translateY(${y}px)`;
            
            shapes.forEach(function(shape, index) {
                const factor = (index + 1) * 0.2;
                shape.style.transform = `translateX(${x * factor}px) translateY(${y * factor}px)`;
            });
        }
    });
});