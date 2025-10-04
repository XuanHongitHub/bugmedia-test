// Smart navbar scroll effect - hide/show
let lastScrollTop = 0;
let scrollTimer = null;

window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    // Clear existing timer
    if (scrollTimer) {
        clearTimeout(scrollTimer);
    }

    if (currentScroll > 100) {
        if (currentScroll > lastScrollTop) {
            // Scrolling down - hide navbar
            navbar.classList.add('hidden');
            navbar.classList.add('scrolled');
        } else {
            // Scrolling up - show navbar
            navbar.classList.remove('hidden');
            navbar.classList.add('scrolled');
        }
    } else {
        // At top - show navbar, remove scrolled class
        navbar.classList.remove('hidden');
        navbar.classList.remove('scrolled');
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;

    // Auto-show navbar after 2 seconds of no scrolling
    scrollTimer = setTimeout(() => {
        if (currentScroll > 100) {
            navbar.classList.remove('hidden');
        }
    }, 2000);
});

// Scroll Progress
const progressBar = document.querySelector('.progress-bar');

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    progressBar.style.width = scrollPercent + '%';
});

// Particles System
function createParticles() {
    const particleContainer = document.getElementById('heroParticles');
    if (!particleContainer) return;

    const particleCount = 30;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particleContainer.appendChild(particle);

        gsap.to(particle, {
            x: (Math.random() - 0.5) * 100,
            y: (Math.random() - 0.5) * 100,
            duration: Math.random() * 10 + 10,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });
    }
}

// Initialize GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Modern Navbar Scroll Effects
function initNavbarEffects() {
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY > 50;
        navbar.classList.toggle('scrolled', scrolled);
    });

    // Smooth scroll navigation (uses CSS scroll-margin-top on sections)
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href && href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
        });
    });
}

// Super Smooth Hero Animation
function initHeroAnimation() {
    const tl = gsap.timeline({ delay: 0.1 });

    // Simple and fast animations
    tl.fromTo('.hero-badge',
        {
            y: 20,
            opacity: 0
        },
        {
            y: 0,
            opacity: 1,
            duration: 0.5,
            ease: "power2.out"
        }
    )
        .fromTo('.hero-title .word',
            {
                y: 30,
                opacity: 0
            },
            {
                y: 0,
                opacity: 1,
                duration: 0.6,
                stagger: 0.1,
                ease: "power2.out"
            }, "-=0.2")
        .fromTo('.hero-subtitle',
            {
                y: 20,
                opacity: 0
            },
            {
                y: 0,
                opacity: 1,
                duration: 0.5,
                ease: "power2.out"
            }, "-=0.3")
        .fromTo('.hero-stats',
            {
                y: 20,
                opacity: 0
            },
            {
                y: 0,
                opacity: 1,
                duration: 0.5,
                ease: "power2.out"
            }, "-=0.2")
        .fromTo('.stat-item',
            {
                y: 10,
                opacity: 0
            },
            {
                y: 0,
                opacity: 1,
                duration: 0.4,
                stagger: 0.05,
                ease: "power2.out"
            }, "-=0.3")
        .fromTo('.hero-cta',
            {
                y: 20,
                opacity: 0
            },
            {
                y: 0,
                opacity: 1,
                duration: 0.5,
                ease: "power2.out"
            }, "-=0.2")
        .fromTo('.cta-button, .cta-button-secondary',
            {
                scale: 0.98,
                opacity: 0
            },
            {
                scale: 1,
                opacity: 1,
                duration: 0.4,
                stagger: 0.05,
                ease: "power2.out"
            }, "-=0.3")
        .fromTo('.floating-shape',
            {
                scale: 0.9,
                opacity: 0
            },
            {
                scale: 1,
                opacity: 0.03,
                duration: 1,
                stagger: 0.1,
                ease: "power2.out"
            }, "-=1");
}

// Commerce Layer Animation
ScrollTrigger.create({
    trigger: '.commerce-section',
    start: "top 80%",
    onEnter: () => {
        // Commerce features animation
        gsap.fromTo('.commerce-feature',
            {
                y: 60,
                opacity: 0,
                scale: 0.9
            },
            {
                y: 0,
                opacity: 1,
                scale: 1,
                duration: 0.8,
                stagger: 0.15,
                ease: "power2.out"
            }
        );

        // Background text animation
        gsap.fromTo('.commerce-bg-text-1, .commerce-bg-small-2',
            {
                opacity: 0,
                scale: 1.2
            },
            {
                opacity: 1,
                scale: 1,
                duration: 2,
                ease: "power2.out",
                delay: 0.8
            }
        );
    }
});

// Creative Layer Animation
ScrollTrigger.create({
    trigger: '.creative-section',
    start: "top 80%",
    onEnter: () => {
        // Floating Elements Animation
        gsap.fromTo('.float-element',
            {
                scale: 0,
                opacity: 0,
                rotation: -180
            },
            {
                scale: 1,
                opacity: 1,
                rotation: 0,
                duration: 1.5,
                ease: "back.out(1.7)",
                stagger: 0.4
            }
        );

        // Element Blobs Animation
        gsap.fromTo('.element-blob',
            {
                scale: 0,
                y: 100
            },
            {
                scale: 1,
                y: 0,
                duration: 1.2,
                ease: "elastic.out(1, 0.6)",
                delay: 0.3,
                stagger: 0.4
            }
        );

        // Sidebar Cards Animation
        gsap.fromTo('.side-card',
            {
                x: 100,
                opacity: 0,
                scale: 0.8
            },
            {
                x: 0,
                opacity: 1,
                scale: 1,
                duration: 1,
                ease: "power3.out",
                stagger: 0.2,
                delay: 0.8
            }
        );

        // Energy Orbs Animation
        gsap.fromTo('.orb',
            {
                scale: 0,
                opacity: 0
            },
            {
                scale: 1,
                opacity: 0.8,
                duration: 2,
                ease: "power2.out",
                stagger: 0.3,
                delay: 0.5
            }
        );

        // Particles Animation
        gsap.fromTo('.particle',
            {
                scale: 0,
                opacity: 0
            },
            {
                scale: 1,
                opacity: 1,
                duration: 0.8,
                ease: "power2.out",
                stagger: 0.1,
                delay: 1.2
            }
        );
    }
});



// Services Animation
ScrollTrigger.create({
    trigger: '.services',
    start: "top 80%",
    onEnter: () => {
        gsap.to('.service-card', {
            y: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.2,
            ease: "power2.out"
        });
    }
});

// Careers Animation - Clean slide effect
ScrollTrigger.create({
    trigger: '.careers',
    start: "top 80%",
    onEnter: () => {
        // Career stats animation
        gsap.fromTo('.career-stat',
            {
                y: 50,
                opacity: 0
            },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                stagger: 0.2,
                ease: "power2.out"
            }
        );

        // Job cards slide effect
        gsap.fromTo('.job-card',
            {
                x: -50,
                opacity: 0
            },
            {
                x: 0,
                opacity: 1,
                duration: 1.2,
                stagger: 0.3,
                ease: "power2.out",
                delay: 0.5
            }
        );

        // Counter animation
        document.querySelectorAll('.career-stat-number').forEach((counter, index) => {
            const target = parseInt(counter.getAttribute('data-target'));

            gsap.to({ value: 0 }, {
                value: target,
                duration: 2,
                delay: 1 + index * 0.2,
                ease: "power2.out",
                onUpdate: function () {
                    const suffix = index === 2 ? '%' : '+';
                    counter.textContent = Math.round(this.targets()[0].value) + suffix;
                }
            });
        });
    }
});

// Team Animation - Clean slide effect
ScrollTrigger.create({
    trigger: '.team',
    start: "top 80%",
    onEnter: () => {
        gsap.fromTo('.hologram-effect',
            {
                x: 50,
                opacity: 0
            },
            {
                x: 0,
                opacity: 1,
                duration: 1.2,
                stagger: 0.2,
                ease: "power2.out"
            }
        );
    }
});

// Contact Animation
ScrollTrigger.create({
    trigger: '.contact',
    start: "top 70%",
    onEnter: () => {
        gsap.to('.contact-form', {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out"
        });
    }
});

// Floating Shapes Animation
gsap.to('.floating-shape', {
    y: -30,
    rotation: 360,
    duration: 20,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
    stagger: 2
});

// About Section Animation
ScrollTrigger.create({
    trigger: '.about',
    start: "top 80%",
    onEnter: () => {
        // Timeline animation
        gsap.fromTo('.timeline-item',
            {
                y: 100,
                opacity: 0
            },
            {
                y: 0,
                opacity: 1,
                duration: 1.2,
                stagger: 0.3,
                ease: "power2.out"
            }
        );

        // Value cards animation
        gsap.fromTo('.value-card',
            {
                scale: 0.8,
                opacity: 0
            },
            {
                scale: 1,
                opacity: 1,
                duration: 1,
                stagger: 0.2,
                ease: "back.out(1.7)",
                delay: 0.5
            }
        );

        // About grid animation
        gsap.fromTo('.about-content',
            {
                x: -50,
                opacity: 0
            },
            {
                x: 0,
                opacity: 1,
                duration: 1,
                ease: "power2.out",
                delay: 1
            }
        );

        gsap.fromTo('.about-visual',
            {
                x: 50,
                opacity: 0
            },
            {
                x: 0,
                opacity: 1,
                duration: 1,
                ease: "power2.out",
                delay: 1.2
            }
        );

        // Visual items animation
        gsap.fromTo('.visual-item',
            {
                scale: 0.5,
                opacity: 0
            },
            {
                scale: 1,
                opacity: 1,
                duration: 0.8,
                stagger: 0.1,
                ease: "back.out(1.7)",
                delay: 1.5
            }
        );
    }
});

// Epic 3D Canvas System
class EpicHeroCanvas {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.particles = [];
        this.connections = [];
        this.mouse = { x: 0, y: 0 };
        this.time = 0;

        this.resize();
        this.init();
        this.animate();
        this.bindEvents();
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    init() {
        // Create advanced particles
        for (let i = 0; i < 150; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                z: Math.random() * 1000,
                vx: (Math.random() - 0.5) * 2,
                vy: (Math.random() - 0.5) * 2,
                vz: (Math.random() - 0.5) * 2,
                size: Math.random() * 3 + 1,
                life: Math.random(),
                decay: Math.random() * 0.02 + 0.005,
                color: `hsl(${Math.random() * 60 + 300}, 70%, 60%)`
            });
        }

        // Create energy waves
        this.energyWaves = [];
        for (let i = 0; i < 5; i++) {
            this.energyWaves.push({
                x: this.canvas.width / 2,
                y: this.canvas.height / 2,
                radius: i * 100,
                maxRadius: 800,
                speed: 2,
                opacity: 0.6 - i * 0.1
            });
        }
    }

    animate() {
        this.time += 0.01;

        // Clear canvas with fade effect
        this.ctx.fillStyle = 'rgba(255, 255, 255, 0.05)';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        // Draw energy waves
        this.energyWaves.forEach(wave => {
            wave.radius += wave.speed;
            if (wave.radius > wave.maxRadius) {
                wave.radius = 0;
            }

            this.ctx.beginPath();
            this.ctx.arc(wave.x, wave.y, wave.radius, 0, Math.PI * 2);
            this.ctx.strokeStyle = `rgba(255, 0, 100, ${wave.opacity * (1 - wave.radius / wave.maxRadius)})`;
            this.ctx.lineWidth = 2;
            this.ctx.stroke();
        });

        // Update and draw particles
        this.particles.forEach((particle, index) => {
            // 3D movement
            particle.x += particle.vx + Math.sin(this.time + particle.z * 0.001) * 0.5;
            particle.y += particle.vy + Math.cos(this.time + particle.z * 0.001) * 0.5;
            particle.z += particle.vz;

            // Mouse interaction
            const dx = this.mouse.x - particle.x;
            const dy = this.mouse.y - particle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 150) {
                particle.x -= dx * 0.01;
                particle.y -= dy * 0.01;
            }

            // Boundaries
            if (particle.x < 0) particle.x = this.canvas.width;
            if (particle.x > this.canvas.width) particle.x = 0;
            if (particle.y < 0) particle.y = this.canvas.height;
            if (particle.y > this.canvas.height) particle.y = 0;

            // Life cycle
            particle.life -= particle.decay;
            if (particle.life <= 0) {
                particle.life = 1;
                particle.x = Math.random() * this.canvas.width;
                particle.y = Math.random() * this.canvas.height;
            }

            // 3D projection
            const perspective = 400;
            const scale = perspective / (perspective + particle.z);
            const projX = particle.x * scale;
            const projY = particle.y * scale;

            // Draw particle
            this.ctx.beginPath();
            this.ctx.arc(projX, projY, particle.size * scale, 0, Math.PI * 2);
            this.ctx.fillStyle = particle.color.replace('60%)', `${particle.life * 60}%)`);
            this.ctx.fill();

            // Glow effect
            this.ctx.shadowBlur = 20;
            this.ctx.shadowColor = particle.color;
            this.ctx.fill();
            this.ctx.shadowBlur = 0;
        });

        // Draw connections
        for (let i = 0; i < this.particles.length; i++) {
            for (let j = i + 1; j < this.particles.length; j++) {
                const dx = this.particles[i].x - this.particles[j].x;
                const dy = this.particles[i].y - this.particles[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < 120) {
                    this.ctx.beginPath();
                    this.ctx.moveTo(this.particles[i].x, this.particles[i].y);
                    this.ctx.lineTo(this.particles[j].x, this.particles[j].y);
                    this.ctx.strokeStyle = `rgba(255, 0, 150, ${0.3 * (1 - distance / 120)})`;
                    this.ctx.lineWidth = 1;
                    this.ctx.stroke();
                }
            }
        }

        // Holographic grid
        this.drawHolographicGrid();

        requestAnimationFrame(() => this.animate());
    }

    drawHolographicGrid() {
        const gridSize = 50;
        this.ctx.strokeStyle = 'rgba(0, 255, 255, 0.1)';
        this.ctx.lineWidth = 0.5;

        // Vertical lines
        for (let x = 0; x < this.canvas.width; x += gridSize) {
            this.ctx.beginPath();
            this.ctx.moveTo(x, 0);
            this.ctx.lineTo(x, this.canvas.height);
            this.ctx.stroke();
        }

        // Horizontal lines
        for (let y = 0; y < this.canvas.height; y += gridSize) {
            this.ctx.beginPath();
            this.ctx.moveTo(0, y);
            this.ctx.lineTo(this.canvas.width, y);
            this.ctx.stroke();
        }
    }

    bindEvents() {
        window.addEventListener('mousemove', (e) => {
            this.mouse.x = e.clientX;
            this.mouse.y = e.clientY;
        });

        window.addEventListener('resize', () => {
            this.resize();
        });
    }
}

// Matrix Digital Rain Effect
class MatrixRain {
    constructor() {
        this.canvas = document.createElement('canvas');
        this.canvas.style.position = 'absolute';
        this.canvas.style.top = '0';
        this.canvas.style.left = '0';
        this.canvas.style.width = '100%';
        this.canvas.style.height = '100%';
        this.canvas.style.pointerEvents = 'none';
        this.canvas.style.zIndex = '5';
        this.canvas.style.opacity = '0.3';

        document.querySelector('.hero-bg').appendChild(this.canvas);

        this.ctx = this.canvas.getContext('2d');
        this.resize();
        this.init();
        this.animate();

        window.addEventListener('resize', () => this.resize());
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.columns = Math.floor(this.canvas.width / 20);
        this.drops = new Array(this.columns).fill(1);
    }

    init() {
        this.characters = '01ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝBUGMEDIA';
    }

    animate() {
        this.ctx.fillStyle = 'rgba(255, 255, 255, 0.05)';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.fillStyle = '#ff0066';
        this.ctx.font = '15px monospace';

        for (let i = 0; i < this.drops.length; i++) {
            const text = this.characters[Math.floor(Math.random() * this.characters.length)];
            this.ctx.fillText(text, i * 20, this.drops[i] * 20);

            if (this.drops[i] * 20 > this.canvas.height && Math.random() > 0.975) {
                this.drops[i] = 0;
            }
            this.drops[i]++;
        }

        setTimeout(() => this.animate(), 50);
    }
}

// Epic Hero Animation System
function initEpicHero() {
    // Staggered Entry Animation
    const tl = gsap.timeline();

    tl.to('.hero-badge', {
        duration: 0.8,
        opacity: 1,
        y: 0,
        ease: "power3.out"
    })
        .to('.hero-logo', {
            duration: 1.2,
            opacity: 1,
            y: 0,
            ease: "power3.out"
        }, "-=0.4")
        .to('.hero-tagline', {
            duration: 1,
            opacity: 1,
            y: 0,
            ease: "power3.out"
        }, "-=0.8")
        .to('.hero-description', {
            duration: 0.8,
            opacity: 1,
            y: 0,
            ease: "power2.out"
        }, "-=0.6")
        .to('.stat-item', {
            duration: 0.6,
            opacity: 1,
            y: 0,
            stagger: 0.2,
            ease: "power2.out"
        }, "-=0.4")
        .to('.hero-action, .hero-action-secondary', {
            duration: 0.8,
            opacity: 1,
            y: 0,
            stagger: 0.1,
            ease: "power3.out"
        }, "-=0.3")
        .to('.scroll-indicator', {
            duration: 0.6,
            opacity: 0.7,
            ease: "power2.out"
        }, "-=0.4");

    // Continuous Background Animations
    gsap.to('.hero-orb', {
        rotation: 360,
        duration: 20,
        repeat: -1,
        ease: "none"
    });

    // Enhanced Ring Animations
    gsap.to('.ring-1', {
        rotation: 360,
        duration: 30,
        repeat: -1,
        ease: "none"
    });

    gsap.to('.ring-2', {
        rotation: -360,
        duration: 45,
        repeat: -1,
        ease: "none"
    });

    gsap.to('.ring-3', {
        rotation: 360,
        duration: 60,
        repeat: -1,
        ease: "none"
    });

    gsap.to('.ring-4', {
        rotation: -360,
        duration: 50,
        repeat: -1,
        ease: "none"
    });

    gsap.to('.ring-5', {
        rotation: 360,
        duration: 35,
        repeat: -1,
        ease: "none"
    });

    // Enhanced Floating elements animations
    gsap.to('.float-cube', {
        y: -20,
        rotationX: 15,
        rotationY: 10,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 1
    });

    gsap.to('.float-pyramid', {
        y: -15,
        rotation: 5,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 1.5
    });

    gsap.to('.float-sphere', {
        y: -25,
        scale: 1.2,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.8
    });

    gsap.to('.float-diamond', {
        y: -18,
        rotation: 180,
        duration: 3.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 1.2
    });

    gsap.to('.float-hexagon', {
        y: -22,
        rotationY: 180,
        duration: 4.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 2
    });

    // Particles continuous spawning effect
    gsap.set('.particle', { y: '100vh' });
    gsap.to('.particle', {
        y: -100,
        duration: 8,
        repeat: -1,
        ease: "none",
        stagger: {
            each: 0.3,
            repeat: -1
        }
    });

    // Dynamic orb pulsing effect
    gsap.to('.hero-orb', {
        scale: 1.1,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
    });

    // Ring subtle scaling animations
    gsap.to('.ring-1, .ring-3, .ring-5', {
        scale: 1.05,
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 2
    });

    gsap.to('.ring-2, .ring-4', {
        scale: 0.95,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 1.5
    });
}

// 🚀 Revolutionary Timeline Animation System
function initRevolutionaryTimeline() {
    // Timeline particles animation
    createTimelineParticles();

    // Enhanced ScrollTrigger for timeline items
    ScrollTrigger.batch('.timeline-item', {
        onEnter: (elements) => {
            elements.forEach((element, index) => {
                gsap.to(element, {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 1.2,
                    delay: index * 0.2,
                    ease: "power3.out",
                    onComplete: () => {
                        element.classList.add('animate-in');
                    }
                });

                // Animate stats numbers
                const statNumbers = element.querySelectorAll('.stat-number');
                statNumbers.forEach((stat, statIndex) => {
                    const target = stat.textContent;
                    const isInfinity = target === '∞';

                    if (!isInfinity && target.includes('+')) {
                        const num = parseInt(target.replace('+', ''));
                        gsap.fromTo({ value: 0 }, {
                            value: num,
                            duration: 2,
                            delay: index * 0.2 + 0.5 + statIndex * 0.1,
                            ease: "power2.out",
                            onUpdate: function () {
                                stat.textContent = Math.round(this.targets()[0].value) + '+';
                            }
                        });
                    } else if (!isInfinity) {
                        const num = parseInt(target);
                        if (!isNaN(num)) {
                            gsap.fromTo({ value: 0 }, {
                                value: num,
                                duration: 2,
                                delay: index * 0.2 + 0.5 + statIndex * 0.1,
                                ease: "power2.out",
                                onUpdate: function () {
                                    stat.textContent = Math.round(this.targets()[0].value);
                                }
                            });
                        }
                    }
                });
            });
        },
        start: "top 80%",
        once: true
    });

    // Interactive timeline dots
    document.querySelectorAll('.timeline-dot').forEach((dot, index) => {
        dot.addEventListener('click', () => {
            gsap.to(dot, {
                scale: 1.5,
                duration: 0.3,
                yoyo: true,
                repeat: 1,
                ease: "power2.inOut"
            });

            // Ripple effect
            const ripple = document.createElement('div');
            ripple.style.cssText = `
                        position: absolute;
                        top: 50%; left: 50%;
                        transform: translate(-50%, -50%);
                        width: 0; height: 0;
                        background: radial-gradient(circle, rgba(255,0,0,0.3) 0%, transparent 70%);
                        border-radius: 50%;
                        pointer-events: none;
                        z-index: 10;
                    `;
            dot.appendChild(ripple);

            gsap.to(ripple, {
                width: '200px',
                height: '200px',
                duration: 0.6,
                ease: "power2.out",
                onComplete: () => ripple.remove()
            });
        });
    });
}

// Create Timeline Particles
function createTimelineParticles() {
    const container = document.getElementById('timelineParticles');
    if (!container) return;

    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.opacity = Math.random() * 0.5 + 0.2;
        container.appendChild(particle);

        gsap.to(particle, {
            x: (Math.random() - 0.5) * 200,
            y: (Math.random() - 0.5) * 200,
            duration: Math.random() * 10 + 15,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: Math.random() * 5
        });
    }
}

// Enhanced Intersection Observer for better performance
function initTimelineObserver() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const timelineContent = entry.target.querySelector('.timeline-content');
                if (timelineContent) {
                    gsap.to(timelineContent, {
                        rotationY: Math.random() * 10 - 5,
                        duration: 2,
                        ease: "power1.inOut",
                        yoyo: true,
                        repeat: -1
                    });
                }
            }
        });
    }, { threshold: 0.3 });

    document.querySelectorAll('.timeline-item').forEach(item => {
        observer.observe(item);
    });
}

// Initialize Everything
document.addEventListener('DOMContentLoaded', () => {
    initNavbarEffects();
    initEpicHero();
    initRevolutionaryTimeline();
    initTimelineObserver();

    // Reset timeline items initial state for animation
    gsap.set('.timeline-item', {
        opacity: 0,
        y: 100,
        scale: 0.8
    });

    // Make sure other elements are visible initially for light theme
    gsap.set([
        '.about-content',
        '.about-visual',
        '.visual-item',
        '.value-card',
        '.morphing-card',
        '.service-card',
        '.contact-form'
    ], {
        opacity: 1,
        transform: 'none',
        x: 0,
        y: 0,
        scale: 1
    });

    // Footer particles
    createFooterParticles();
});

// Footer particles system
function createFooterParticles() {
    const footerContainer = document.getElementById('footerParticles');
    if (!footerContainer) return;

    for (let i = 0; i < 15; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.background = 'var(--primary-red)';
        particle.style.opacity = Math.random() * 0.2 + 0.05;
        footerContainer.appendChild(particle);

        gsap.to(particle, {
            x: (Math.random() - 0.5) * 50,
            y: (Math.random() - 0.5) * 50,
            duration: Math.random() * 8 + 8,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });
    }
}

// Form Submission
document.querySelector('.contact-form').addEventListener('submit', (e) => {
    e.preventDefault();

    gsap.to('.cta-button', {
        scale: 0.95,
        duration: 0.1,
        yoyo: true,
        repeat: 1,
        onComplete: () => {
            alert('Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm nhất có thể.');
        }
    });
});

// Enhanced Light Theme Effects
function addLightThemeEnhancements() {
    // Enhanced service card interactions
    gsap.utils.toArray('.service-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            gsap.to(card, {
                scale: 1.02,
                rotationY: 5,
                duration: 0.4,
                ease: "power2.out"
            });
        });

        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                scale: 1,
                rotationY: 0,
                duration: 0.4,
                ease: "power2.out"
            });
        });
    });

    // Enhanced floating animations for background elements
    gsap.to('.floating-shape', {
        rotation: 360,
        duration: 20,
        ease: "none",
        repeat: -1
    });

    // Add parallax effect to sections
    gsap.utils.toArray('.section').forEach(section => {
        gsap.fromTo(section.querySelector('.floating-shapes'), {
            y: -100
        }, {
            y: 100,
            scrollTrigger: {
                trigger: section,
                start: "top bottom",
                end: "bottom top",
                scrub: 1
            }
        });
    });

    // Enhanced particle movement
    gsap.utils.toArray('.particle').forEach((particle, i) => {
        gsap.to(particle, {
            x: `random(-100, 100)`,
            y: `random(-100, 100)`,
            scale: `random(0.5, 1.5)`,
            duration: `random(5, 10)`,
            ease: "sine.inOut",
            repeat: -1,
            yoyo: true,
            delay: i * 0.1
        });
    });
}

// 🚀 Enhanced Fulfillment Layer Animations
function initFulfillmentAnimations() {
    // Process Steps Animation
    gsap.utils.toArray('.process-step').forEach((step, index) => {
        gsap.fromTo(step, {
            opacity: 0,
            y: 80,
            scale: 0.9
        }, {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: step,
                start: "top 80%",
                end: "bottom 20%",
                toggleClass: "animate-in",
                onEnter: () => {
                    // Add sequential animation for step content
                    gsap.fromTo(step.querySelector('.step-content'), {
                        opacity: 0,
                        x: index % 2 === 0 ? -50 : 50
                    }, {
                        opacity: 1,
                        x: 0,
                        duration: 0.8,
                        delay: 0.3,
                        ease: "power2.out"
                    });
                }
            }
        });
    });

    // Process Visualization Animation
    gsap.fromTo('.central-hub', {
        opacity: 0,
        scale: 0.5,
        rotation: -90
    }, {
        opacity: 1,
        scale: 1,
        rotation: 0,
        duration: 1.5,
        ease: "elastic.out(1, 0.5)",
        scrollTrigger: {
            trigger: '.process-visualization',
            start: "top 70%"
        }
    });

    // Process Nodes Sequential Animation
    gsap.utils.toArray('.process-node').forEach((node, index) => {
        gsap.fromTo(node, {
            opacity: 0,
            scale: 0,
            rotation: 180
        }, {
            opacity: 1,
            scale: 1,
            rotation: 0,
            duration: 0.6,
            ease: "back.out(1.7)",
            delay: index * 0.2 + 0.5,
            scrollTrigger: {
                trigger: '.process-visualization',
                start: "top 70%"
            }
        });

        // Hover interaction
        node.addEventListener('mouseenter', () => {
            gsap.to(node, {
                scale: 1.2,
                rotation: 10,
                duration: 0.3,
                ease: "power2.out"
            });

            // Highlight corresponding process step
            const stepNumber = node.getAttribute('data-step');
            const correspondingStep = document.querySelector(`.process-step[data-step="${stepNumber}"]`);
            if (correspondingStep) {
                gsap.to(correspondingStep, {
                    scale: 1.02,
                    duration: 0.3,
                    ease: "power2.out"
                });
            }
        });

        node.addEventListener('mouseleave', () => {
            gsap.to(node, {
                scale: 1,
                rotation: 0,
                duration: 0.3,
                ease: "power2.out"
            });

            const stepNumber = node.getAttribute('data-step');
            const correspondingStep = document.querySelector(`.process-step[data-step="${stepNumber}"]`);
            if (correspondingStep) {
                gsap.to(correspondingStep, {
                    scale: 1,
                    duration: 0.3,
                    ease: "power2.out"
                });
            }
        });
    });

    // Connection Lines Animation
    gsap.utils.toArray('.connection-path').forEach((path, index) => {
        const pathLength = path.getTotalLength();

        gsap.set(path, {
            strokeDasharray: pathLength,
            strokeDashoffset: pathLength,
            opacity: 0
        });

        gsap.to(path, {
            strokeDashoffset: 0,
            opacity: 1,
            duration: 2,
            ease: "power2.inOut",
            delay: index * 0.3 + 1,
            scrollTrigger: {
                trigger: '.process-visualization',
                start: "top 70%"
            }
        });
    });

    // Process Line Progress Animation
    gsap.fromTo('.process-line', {
        scaleY: 0,
        transformOrigin: "top center"
    }, {
        scaleY: 1,
        duration: 2,
        ease: "power2.inOut",
        scrollTrigger: {
            trigger: '.process-timeline',
            start: "top 80%",
            end: "bottom 20%",
            scrub: 1
        }
    });

    // Continuous Hub Rotation
    gsap.to('.hub-core', {
        rotation: 360,
        duration: 30,
        repeat: -1,
        ease: "none"
    });

    // Ring Animations
    gsap.to('.ring-1', {
        rotation: 360,
        duration: 15,
        repeat: -1,
        ease: "none"
    });

    gsap.to('.ring-2', {
        rotation: -360,
        duration: 20,
        repeat: -1,
        ease: "none"
    });

    gsap.to('.ring-3', {
        rotation: 360,
        duration: 25,
        repeat: -1,
        ease: "none"
    });

    // Interactive Step Icons
    gsap.utils.toArray('.step-icon').forEach(icon => {
        gsap.to(icon, {
            y: -5,
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });
    });

    // Background Typography Parallax
    gsap.to('.fulfillment-section::before', {
        y: -50,
        rotation: 8,
        scrollTrigger: {
            trigger: '.fulfillment-section',
            start: "top bottom",
            end: "bottom top",
            scrub: 1
        }
    });
}

// Performance Optimization
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        ScrollTrigger.refresh();
    }, 250);
});

// Initialize enhanced effects
initNavbarEffects();
addLightThemeEnhancements();
initFulfillmentAnimations();