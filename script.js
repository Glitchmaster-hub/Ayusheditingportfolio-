/**
 * AYUSH KANOJIA PORTFOLIO ENGINE
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
            imgBefore: 'assets/projects/project-04.jpg',
            imgAfter: 'assets/projects/project-01.jpg'
        },
        'Saas-Promo': {
            title: 'SaaS-Promo',
            category: 'Tech Advertisement',
            year: '2026',
            tools: 'Gemini, Veo, Alight Motion',
            brief: 'Position a trustful TravelApp.',
            development: 'Generated editorial scenic foundations via Gemini, generate clips using Veo and mapped spatial vectors using Alight Motion layout logic.',
            aspect: '9/16',
            poster: 'assets/projects/project-02.jpg',
            videoSrc: 'https://files.catbox.moe/drbuq0.mp4',
            imgBefore: 'https://files.catbox.moe/1bkuzi.jpg',
            imgAfter: 'assets/projects/project-02.jpg'
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
            videoSrc: 'assets/showreel.mp4',
            imgBefore: 'assets/projects/project-06.jpg',
            imgAfter: 'assets/projects/project-03.jpg'
        }
    }; // <-- Properly closed the project object blocks here!

    const views = document.querySelectorAll('.page-view');
    const navItems = document.querySelectorAll('.data-nav');
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
    }

    /**
     * PRODUCTION HYDRATION LAYER
     */
    function hydrateCaseStudyView(slug) {
        const data = caseData[slug];
        if (!data) return;

        activeCaseSlug = slug;

        // Fetch elements inside execution loop to prevent reference errors
        const caseNativeWrapper = document.getElementById('caseNativeWrapper');
        const caseMainVideo = document.getElementById('caseMainVideo');
        const sliderContainer = document.getElementById('sliderContainer');
        const imgBeforeEl = document.getElementById('caseImgBefore');
        const imgAfterEl = document.getElementById('caseImgAfter');

        // Hydrate Core Metadata safely
        document.getElementById('caseTitle').textContent = data.title;
        document.getElementById('caseCategory').textContent = data.category;
        document.getElementById('caseYear').textContent = data.year;
        document.getElementById('caseTools').textContent = data.tools;
        document.getElementById('caseBrief').textContent = data.brief;
        document.getElementById('caseDevelopment').textContent = data.development;

        // Manage video element loading states
        if (caseMainVideo) {
            caseMainVideo.pause();
            caseMainVideo.src = data.videoSrc || '';
            caseMainVideo.poster = data.poster || '';
            caseMainVideo.load();
        }

        // Handle Comparison Slider vs Video Toggle
        if (data.imgBefore && data.imgAfter) {
            if (imgBeforeEl) imgBeforeEl.src = data.imgBefore;
            if (imgAfterEl) imgAfterEl.src = data.imgAfter;
            if (sliderContainer) sliderContainer.style.display = 'block';
            if (caseMainVideo) caseMainVideo.style.display = 'none';
        } else {
            if (sliderContainer) sliderContainer.style.display = 'none';
            if (caseMainVideo) caseMainVideo.style.display = 'block';
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
            if (caseData[targetSlug]) {
                hydrateCaseStudyView(targetSlug);
                window.location.hash = `#project-${targetSlug}`;
            }
        }
    });

    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const target = item.getAttribute('data-target');
            routeToView(target);
            window.location.hash = `#${target}`;
        });
    });

    window.addEventListener('hashchange', () => {
        const hash = window.location.hash.replace('#', '');
        if (hash.startsWith('project-')) {
            const slug = hash.replace('project-', '');
            if (caseData[slug] && activeCaseSlug !== slug) {
                hydrateCaseStudyView(slug);
            }
        // 1. ADD 'home' TO THIS ARRAY LIST:
        } else if (['home', 'about', 'services', 'work', 'assets'].includes(hash)) {
            routeToView(hash);
        } else {
            routeToView('home'); // 2. CHANGE FALLBACK DEFAULT FROM 'work' TO 'home'
        }
    });

    const initialHash = window.location.hash.replace('#', '');
    if (initialHash.startsWith('project-')) {
        hydrateCaseStudyView(initialHash.replace('project-', ''));
    // 3. ADD 'home' and 'work' TO THIS INITIAL RUN ARRAY LIST:
    } else if (['home', 'work', 'about', 'services','assets'].includes(initialHash)) {
        routeToView(initialHash);
    } else {
        routeToView('home'); // 4. CHANGE LANDING INITIAL VALUE FROM 'work' TO 'home'
    }
});
