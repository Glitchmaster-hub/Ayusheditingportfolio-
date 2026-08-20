/**
 * AYUSH KANOJIA PORTFOLIO ENGINE — FIXED CORE SYSTEM
 */

document.addEventListener('DOMContentLoaded', () => {

    // Central Data Layer containing project configurations
    const caseData = {
        'soleil-streetwear': {
            title: 'SOLEIL STREETWEAR',
            category: 'Fashion Advertisement',
            year: '2026',
            tools: 'Gemini, ChatGPT, CapCut',
            brief: 'Construct a rapid-paced visual campaign showcasing luxury streetwear identity across modern social distribution vectors.',
            development: 'Generated concepts via ChatGPT, assets via Gemini, paired with surgical timeline split-cuts in mobile engines to engineer high consumer retention metrics.',
            aspect: '9/16',
            poster: 'https://files.catbox.moe/5o8oeb.jpg',
            videoSrc: 'https://files.catbox.moe/f557s0.mp4',
            imgBefore: 'https://files.catbox.moe/5o8oeb.jpg', // Upgraded from local asset path
            imgAfter: 'https://files.catbox.moe/5o8oeb.jpg'
        },
        'Saas-Promo': {
            title: 'SaaS-Promo',
            category: 'Tech Advertisement',
            year: '2026',
            tools: 'Gemini, Veo, Alight Motion',
            brief: 'Position a trustful TravelApp.',
            development: 'Generated editorial scenic foundations via Gemini, generate clips using Veo and mapped spatial vectors using Alight Motion layout logic.',
            aspect: '9/16',
            poster: 'https://files.catbox.moe/1bkuzi.jpg', // Upgraded from local asset path
            videoSrc: 'https://files.catbox.moe/drbuq0.mp4',
            imgBefore: 'https://files.catbox.moe/1bkuzi.jpg',
            imgAfter: 'https://files.catbox.moe/1bkuzi.jpg'
        },
        'Party-Drink': {
            title: 'Bella',
            category: 'Party',
            year: '2026',
            tools: 'Gemini, Veo, CapCut',
            brief: 'Produce a luxury brand drinks, with fast-pacing. Design this for party mood.',
            development: 'Leveraged Google Veo text-to-video capabilities to prompt historical studio environments, sequencing frames within CapCut for exact acoustic synchronization.',
            aspect: '9/16',
            poster: 'https://files.catbox.moe/qvhv9w.png',
            videoSrc: 'https://files.catbox.moe/f557s0.mp4', // Safe backup stream link
            imgBefore: 'https://files.catbox.moe/qvhv9w.png',
            imgAfter: 'https://files.catbox.moe/qvhv9w.png'
        }
    };

    const views = document.querySelectorAll('.page-view');
    const navItems = document.querySelectorAll('.data-nav, .nav-item, .nav-logo');
    let activeCaseSlug = null;

    /**
     * VANILLA ROUTING ENGINE
     */
    function routeToView(targetId) {
        views.forEach(v => v.classList.remove('active'));
        
        const targetView = document.getElementById(`view-${targetId}`);
        if (targetView) {
            targetView.classList.add('active');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        navItems.forEach(item => {
            if (item.getAttribute('data-target') === targetId) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });
        
        // Auto-close mobile navigation menu when selecting a view route
        const navLinks = document.getElementById('navLinks');
        if (navLinks) navLinks.classList.remove('mobile-open');
    }

    /**
     * PRODUCTION HYDRATION LAYER
     */
    function hydrateCaseStudyView(slug) {
        const data = caseData[slug];
        if (!data) return;

        activeCaseSlug = slug;

        const caseNativeWrapper = document.getElementById('caseNativeWrapper');
        const caseMainVideo = document.getElementById('caseMainVideo');
        const sliderSection = document.getElementById('caseSliderSection');
        const imgBeforeEl = document.getElementById('caseImgBefore');
        const imgAfterEl = document.getElementById('caseImgAfter');

        // Hydrate Core Metadata safely
        if(document.getElementById('caseTitle')) document.getElementById('caseTitle').textContent = data.title;
        if(document.getElementById('caseCategory')) document.getElementById('caseCategory').textContent = data.category;
        if(document.getElementById('caseYear')) document.getElementById('caseYear').textContent = data.year;
        if(document.getElementById('caseTools')) document.getElementById('caseTools').textContent = data.tools;
        if(document.getElementById('caseBrief')) document.getElementById('caseBrief').textContent = data.brief;
        if(document.getElementById('caseDevelopment')) document.getElementById('caseDevelopment').textContent = data.development;

        // Manage video element loading states
        if (caseMainVideo) {
            caseMainVideo.pause();
            caseMainVideo.src = data.videoSrc || '';
            caseMainVideo.poster = data.poster || '';
            caseMainVideo.load();
        }

        // Fixed ID references preventing crash loops
        if (data.imgBefore && data.imgAfter) {
            if (imgBeforeEl) imgBeforeEl.src = data.imgBefore;
            if (imgAfterEl) imgAfterEl.src = data.imgAfter;
            if (sliderSection) sliderSection.style.display = 'block';
        } else {
            if (sliderSection) sliderSection.style.display = 'none';
        }

        // Dynamic aspect handling
        if (caseNativeWrapper && data.aspect) {
            caseNativeWrapper.style.aspectRatio = data.aspect;
            if (data.aspect === '9/16') {
                caseNativeWrapper.style.maxWidth = '400px';
            } else if (data.aspect === '4/5') {
                caseNativeWrapper.style.maxWidth = '500px';
            } else {
                caseNativeWrapper.style.maxWidth = '900px';
            }
        }

        routeToView('project-detail');
    }

    /**
     * INTERACTION ROUTER AND CLICKS CONTROL
     */
    document.body.addEventListener('click', (e) => {
        const projectBox = e.target.closest('[data-slug]');
        if (projectBox) {
            const targetSlug = projectBox.getAttribute('data-slug');
            // Clean up name casing configurations safely
            const safeSlug = caseData[targetSlug] ? targetSlug : Object.keys(caseData).find(k => k.toLowerCase() === targetSlug.toLowerCase());
            if (safeSlug && caseData[safeSlug]) {
                hydrateCaseStudyView(safeSlug);
                window.location.hash = `#project-${safeSlug}`;
            }
        }
    });

    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const target = item.getAttribute('data-target');
            if(target) {
                routeToView(target);
                window.location.hash = `#${target}`;
            }
        });
    });

    /**
     * RESPONSIVE MOBILE NAVIGATION SYSTEM
     */
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('mobile-open');
        });
    }

    /**
     * STYLISH METRICS COUNTER SYSTEM
     */
    const counters = document.querySelectorAll('.metric-number');
    const runCounters = () => {
        counters.forEach(counter => {
            const targetValue = counter.getAttribute('data-count');
            const targetText = counter.getAttribute('data-text');
            
            if (targetText) {
                counter.textContent = targetText;
                return;
            }

            if (targetValue) {
                const target = +targetValue;
                let count = 0;
                const speed = 200 / target;
                
                const updateCount = () => {
                    if (count < target) {
                        count++;
                        counter.textContent = count;
                        setTimeout(updateCount, speed);
                    } else {
                        counter.textContent = target + "+";
                    }
                };
                updateCount();
            }
        });
    };

    // Use IntersectionObserver to animate counters beautifully when scrolled into view
    if (counters.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    runCounters();
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        const metricsSection = document.querySelector('.metrics-strip');
        if (metricsSection) observer.observe(metricsSection);
    }

    /**
     * INTERACTIVE MULTI-STEP HIRE ME QUIZ ENGINE
     */
    const form = document.getElementById('multiStepInquiryForm');
    if (form) {
        const steps = form.querySelectorAll('.form-step-pane');
        const nextBtns = form.querySelectorAll('.next-step-btn');
        const prevBtns = form.querySelectorAll('.prev-step-btn');
        const progressFill = document.getElementById('formProgressFill');
        const stepDots = document.querySelectorAll('.step-dot');
        let currentStep = 0;

        const updateFormDisplay = () => {
            steps.forEach((step, idx) => {
                step.classList.toggle('active', idx === currentStep);
            });
            
            stepDots.forEach((dot, idx) => {
                dot.classList.toggle('active', idx <= currentStep);
            });

            if (progressFill) {
                const percentage = (currentStep / (steps.length - 1)) * 100;
                progressFill.style.width = `${percentage}%`;
            }
        };

        nextBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                if (currentStep < steps.length - 1) {
                    currentStep++;
                    updateFormDisplay();
                }
            });
        });

        prevBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                if (currentStep > 0) {
                    currentStep--;
                    updateFormDisplay();
                }
            });
        });

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            form.style.display = 'none';
            const successBlock = document.getElementById('formSuccessBlock');
            if (successBlock) successBlock.style.display = 'block';
        });
    }

    /**
     * DYNAMIC BEFORE/AFTER SLIDER INTERACTION ENGINE
     */
    const sliderBox = document.getElementById('baSliderContainer');
    const sliderHandle = document.getElementById('sliderHandle');
    const layerAfter = document.querySelector('.layer-after');

    if (sliderBox && sliderHandle && layerAfter) {
        let isDragging = false;

        const moveSlider = (clientX) => {
            const rect = sliderBox.getBoundingClientRect();
            let position = ((clientX - rect.left) / rect.width) * 100;
            if (position < 0) position = 0;
            if (position > 100) position = 100;

            sliderHandle.style.left = `${position}%`;
            layerAfter.style.clipPath = `inset(0 0 0 ${position}%)`;
        };

        sliderBox.addEventListener('mousedown', () => isDragging = true);
        window.addEventListener('mouseup', () => isDragging = false);
        
        sliderBox.addEventListener('mousemove', (e) => {
            if (!isDragging) return;
            moveSlider(e.clientX);
        });

        // Touch support for mobile devices
        sliderBox.addEventListener('touchstart', () => isDragging = true);
        window.addEventListener('touchend', () => isDragging = false);
        sliderBox.addEventListener('touchmove', (e) => {
            if (!isDragging) return;
            moveSlider(e.touches[0].clientX);
        });
    }

    /**
     * INBOUND HASH ARCHITECTURE RESOLUTION
     */
    window.addEventListener('hashchange', () => {
        const hash = window.location.hash.replace('#', '');
        if (hash.startsWith('project-')) {
            const slug = hash.replace('project-', '');
            if (caseData[slug] && activeCaseSlug !== slug) {
                hydrateCaseStudyView(slug);
            }
        } else if (['home', 'about', 'services', 'work', 'assets', 'contact'].includes(hash)) {
            routeToView(hash);
        } else {
            routeToView('home');
        }
    });

    const initialHash = window.location.hash.replace('#', '');
    if (initialHash.startsWith('project-')) {
        hydrateCaseStudyView(initialHash.replace('project-', ''));
    } else if (['home', 'work', 'about', 'services', 'assets', 'contact'].includes(initialHash)) {
        routeToView(initialHash);
    } else {
        routeToView('home');
    }
});
