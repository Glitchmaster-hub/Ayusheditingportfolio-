/**
 * AYUSH KANOJIA PORTFOLIO ENGINE — PRODUCTION PIPELINE CONFIGURATION
 */
document.addEventListener('DOMContentLoaded', () => {

    // Central Data Layer containing matching slug representations
    const caseData = {
        'soleil-streetwear': {
            title: 'SOLEIL STREETWEAR',
            category: 'Fashion Advertisement',
            year: '2026',
            tools: 'Gemini, ChatGPT, CapCut',
            brief: 'Construct a rapid-paced visual campaign showcasing luxury streetwear identity across modern social distribution vectors.',
            development: 'Generated concepts via ChatGPT, assets via Gemini, paired with surgical timeline split-cuts in mobile engines to engineer high consumer retention metrics.',
            aspect: '9/16',
            poster: 'https://www.dropbox.com/scl/fi/8hpk5p2blzflxetkob67u/Soleil-Streetwear-reel-Cover.jpg?rlkey=rbc4gpa85faq4800k5xc2uwfa&st=l66yngf1&dl=1',
            videoSrc: 'https://files.catbox.moe/ebyhd3.mp4',
            imgBefore: 'https://www.dropbox.com/scl/fi/6xim63a0z7yhvi4r7g1k5/Before-cover.png?rlkey=cpcvce6mhtsj140vjgikepfg9&st=h44opyrr&dl=1',
            imgAfter: 'https://www.dropbox.com/scl/fi/m784ll9019re40hojoxna/After-cover.png?rlkey=8tffjmvxufhwdq9uuwfths941&st=ojhnwy6e&dl=1'
        },
        'midnight-perfume': {
    title: 'Midnight Eau De Parfum',
    category: 'Product Cinematic' ,
    year: '2026',
    tools: 'ChatGPT, Claude, Google Veo, CapCut',
    brief: 'Craft a moody, high-end luxury perfume commercial for "Midnight Eau De Parfum" focusing on atmospheric mist macro-shots, elegant pacing, and nocturnal brand identity.',
    development: 'Engineered fluid smoke and macro liquid dynamics via text-to-video prompts, layered with sharp bottle compositing, sleek typographic reveals, and rhythmic acoustic timing.',
    aspect: '9/16',
    poster: 'https://www.dropbox.com/scl/fi/rqvtk4d6gwjrzwycnn4ad/Perfume-Ad_Cover.jpg?rlkey=bauctxrht2o0tjc1k1495nxfv&st=moyrzfyl&dl=1',
    videoSrc: 'https://files.catbox.moe/6ncojd.mp4',
    imgBefore: 'https://files.catbox.moe/ei6eqi.png',
    imgAfter: 'https://files.catbox.moe/5fucxw.png'
},   
      'socialyx': {
            title: 'Socialyx',
            category: 'AI Gen Ad / Veo / Veo Loop',
            year: '2026',
            tools: 'Gemini, Google Veo, CapCut',
            brief: 'Design a high-converting marketing reel for Socialyx to pitch their creator database directly to brands under a rapid 14-hour turnaround. The core strategy flipped their smaller agency status into a competitive advantage, proving why boutique agility delivers 10x better results.',
            development: 'Built on a 3-phase workflow (Scripting → AI Voice/Avatar → Editing), the reel pairs a bold hook with kinetic typography for quick scannability. Fast-paced sound design, punchy audio transitions, and UI overlays maintain viewer engagement, closing with a direct CTA driving brands straight to DMs.',
            aspect: '9/16',
            poster: 'https://files.catbox.moe/ixi93n.png',
            videoSrc: 'https://files.catbox.moe/wzba2a.mp4',
            imgBefore: 'https://files.catbox.moe/fqe4gc.jpeg',
            imgAfter: 'https://files.catbox.moe/1u6fca.jpg'
        },

      'party-drink': {
            title: 'Party Drink (Bella)',
            category: 'B-roll Campaign / Product Cinema',
            year: '2026',
            tools: 'Gemini, Google Veo, CapCut',
            brief: 'Produce a high-end luxury brand asset deployment focusing on pacing structures optimized for commercial party mood conversions.',
            development: 'Leveraged Google Veo text-to-video capabilities to prompt historical studio environments, sequencing frames within CapCut for exact acoustic synchronization.',
            aspect: '9/16',
            poster: 'https://files.catbox.moe/qvhv9w.png',
            videoSrc: 'https://www.dropbox.com/scl/fi/nvcr3kyl7a51zb7mza5r6/Promotional-Reel.mp4?rlkey=64y06qu0lmilnlrmwv9umnwx2&st=irqwpvmw&dl=1',
            imgBefore: 'https://files.catbox.moe/qvhv9w.png',
            imgAfter: 'https://files.catbox.moe/qvhv9w.png'
        },


   'timeline-showcase': {
    title: 'Aura & Arc Coffee — AI Commercial',
    category: 'AI Commercial / CapCut Timeline Showcase',
    year: '2026',
    tools: 'CapCut, Midjourney, GenAI, ElevenLabs',
    brief: 'Constructed a grounded, high-retention 97% AI commercial for Aura & Arc Coffee. The strategy treated AI-generated clips as raw footage—focusing on character consistency, matching environmental lighting, realistic pacing, and emotional story arcs.',
    development: 'Executed frame-accurate cuts to build early morning friction, paired with precise sound design so every key beat hits at the exact millisecond. Integrated custom UI overlays, sound-effects transitions, and dynamic branding assets directly inside the CapCut timeline.',
    aspect: '4/3',
    poster: 'https://files.catbox.moe/bgkkgu.png',
    videoSrc: 'https://files.catbox.moe/1xunl2.mp4',
    imgBefore: 'YOUR_BEFORE_IMAGE_URL.jpg',
    imgAfter: 'YOUR_AFTER_IMAGE_URL.jpg'
},
      
'timeline-breakdown': {
            title: 'Timeline Breakdown',
            category: 'Timeline Breakdown / ChatGPT Animate',
            year: '2026',
            tools: 'ChatGPT, Animate',
            brief: 'Transform static fashion clips into a high-energy commercial promo for Soleil Streetwear Summer Collection 2026. The objective was to build a scroll-stopping, high-retention video ad engineered for maximum viewer engagement and product conversion.',
            development: 'AI-generated backgrounds and ChatGPT assets set the visual aesthetic, while beat-synced, frame-accurate cuts maintain high viewer retention. Dynamic kinetic typography highlights core sales promos, with the entire video edited, color-graded, and finalized within a 100% CapCut Mobile pipeline.',
            aspect: '4/3',
            poster: 'https://www.dropbox.com/scl/fi/prnt1qbqhvokvjxjx49cv/Soleil-Streetwear-s-Cover.png?rlkey=7v76dfxip91hgnw2u6t6qls4c&st=novcoc2g&dl=1',
            videoSrc: 'https://www.dropbox.com/scl/fi/zhnpieys199etfsd6jyp3/Soleil-streetwear-Timeline-Showcasing.mp4?rlkey=upji4ychjrfv8bvsmmn0enbmu&st=k6r1592a&dl=1',
            imgBefore: 'https://www.dropbox.com/scl/fi/p353ic6b0s5cwk0omcl11/Before-cover-111.png?rlkey=e0lq90jd6g5hdjijf88k2tldy&st=wd7gurxu&dl=1',
            imgAfter: 'https://www.dropbox.com/scl/fi/n1428s874iavockhv7qj7/After-cover-111.png?rlkey=skp2sxzmq6ppqumr49l8isgz7&st=e9u2woqp&dl=1'
        },
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

        if(document.getElementById('caseTitle')) document.getElementById('caseTitle').textContent = data.title;
        if(document.getElementById('caseCategory')) document.getElementById('caseCategory').textContent = data.category;
        if(document.getElementById('caseYear')) document.getElementById('caseYear').textContent = data.year;
        if(document.getElementById('caseTools')) document.getElementById('caseTools').textContent = data.tools;
        if(document.getElementById('caseBrief')) document.getElementById('caseBrief').textContent = data.brief;
        if(document.getElementById('caseDevelopment')) document.getElementById('caseDevelopment').textContent = data.development;

        if (caseMainVideo) {
            caseMainVideo.pause();
            caseMainVideo.src = data.videoSrc || '';
            caseMainVideo.poster = data.poster || '';
            caseMainVideo.load();
        }

        if (data.imgBefore && data.imgAfter) {
            if (imgBeforeEl) imgBeforeEl.src = data.imgBefore;
            if (imgAfterEl) imgAfterEl.src = data.imgAfter;
            if (sliderSection) sliderSection.style.display = 'block';
        } else {
            if (sliderSection) sliderSection.style.display = 'none';
        }

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
     * INTERACTION ROUTER AND EVENT CLICKS CONTROL
     */
    document.body.addEventListener('click', (e) => {
        const projectBox = e.target.closest('[data-slug]');
        if (projectBox) {
            const targetSlug = projectBox.getAttribute('data-slug').toLowerCase();
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
            if(target) {
                routeToView(target);
                window.location.hash = `#${target}`;
            }
        });
    });

    /**
     * ARCHIVE ISOLATED FILTERING LOGIC PIPELINE
     */
    const archiveGrid = document.getElementById('archiveGrid');
    if (archiveGrid) {
        const filterTabs = document.querySelectorAll('.filter-tab');
        let currentCat = 'all';
        let currentTech = 'all';

        const runFilter = () => {
            const cards = archiveGrid.querySelectorAll('.project-card');
            cards.forEach(card => {
                const cats = card.getAttribute('data-categories') ? card.getAttribute('data-categories').toLowerCase().split(' ') : [];
                const techs = card.getAttribute('data-technologies') ? card.getAttribute('data-technologies').toLowerCase().split(' ') : [];
                
                const matchesCat = (currentCat === 'all' || cats.includes(currentCat));
                const matchesTech = (currentTech === 'all' || techs.includes(currentTech));

                if (matchesCat && matchesTech) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });
        };

        filterTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                const parentRow = tab.parentElement.id;
                tab.parentElement.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
                tab.classList.add('active');

                if (parentRow === 'categoryFilters') {
                    currentCat = tab.getAttribute('data-cat');
                } else if (parentRow === 'techFilters') {
                    currentTech = tab.getAttribute('data-tech');
                }
                runFilter();
            });
        });
    }

    /**
     * NAV INTERACTION SHOWREEL PLAYER DRAWER
     */
    const navIntroTrigger = document.getElementById('navIntroTrigger');
    const introDrawer = document.getElementById('introDrawer');
    const closeDrawerBtn = document.getElementById('closeDrawerBtn');
    const introVideo = document.getElementById('introVideo');

    if(navIntroTrigger && introDrawer) {
        navIntroTrigger.addEventListener('click', () => {
            introDrawer.classList.toggle('drawer-open');
            if(introDrawer.classList.contains('drawer-open') && introVideo) {
                introVideo.play().catch(()=>{});
            }
        });
    }
    if(closeDrawerBtn && introDrawer) {
        closeDrawerBtn.addEventListener('click', () => {
            introDrawer.classList.remove('drawer-open');
            if(introVideo) introVideo.pause();
        });
    }

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

        sliderBox.addEventListener('touchstart', () => isDragging = true);
        window.addEventListener('touchend', () => isDragging = false);
        sliderBox.addEventListener('touchmove', (e) => {
            if (!isDragging) return;
            moveSlider(e.touches[0].clientX);
        });
    }

    /**
     * HASH NAVIGATION INITIALIZATION
     */
    window.addEventListener('hashchange', () => {
        const hash = window.location.hash.replace('#', '').toLowerCase();
        if (hash.startsWith('project-')) {
            const slug = hash.replace('project-', '');
            if (caseData[slug] && activeCaseSlug !== slug) {
                hydrateCaseStudyView(slug);
            }
        } else if (['home', 'about', 'services', 'work', 'assets', 'contact'].includes(hash)) {
            routeToView(hash);
        }
    });

    const initialHash = window.location.hash.replace('#', '').toLowerCase();
    if (initialHash.startsWith('project-')) {
        hydrateCaseStudyView(initialHash.replace('project-', ''));
    } else if (['home', 'work', 'about', 'services', 'assets', 'contact'].includes(initialHash)) {
        routeToView(initialHash);
    } else {
        routeToView('home');
    }
});
