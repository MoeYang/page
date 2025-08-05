// 郎静山摄影作品数据
const photoWorksData = {
    early: {
        id: 'early',
        name: '早期作品（1920-1930年代）',
        description: '郎静山早期的摄影探索，展现了他从传统摄影向艺术创新的转变过程。',
        works: [
            {
                id: 'work1',
                title: '春树奇峰',
                year: 1934,
                category: 'early',
                imageUrl: 'images/chunshu_qifeng.jpg',
                description: '郎静山最著名的代表作之一，运用集锦摄影技法创作。',
                technique: '采用多底合成技术，将不同时间地点拍摄的春树与奇峰进行艺术组合，营造出中国山水画般的意境。',
                background: '1934年创作，这幅作品标志着郎静山集锦摄影技法的成熟，融合了中国传统山水画的构图理念与现代摄影技术。',
                reviews: [
                    {
                        author: '徐志摩',
                        content: '静山先生以相机作画笔，以感光纸为画布，创造出超越现实的艺术境界。',
                        date: '1935年'
                    },
                    {
                        author: '英国皇家摄影学会',
                        content: '这是东方摄影艺术的杰出代表，展现了独特的美学价值。',
                        date: '1936年'
                    }
                ]
            }
        ]
    },
    classic: {
        id: 'classic',
        name: '经典集锦（1940-1960年代）',
        description: '郎静山集锦摄影技法的巅峰时期，创作了众多传世经典作品。',
        works: [
            {
                id: 'work2',
                title: '西湖春柳',
                year: 1942,
                category: 'classic',
                imageUrl: 'images/xihu_chunliu.jpg',
                description: '以西湖为背景，展现江南春色的诗意之美。',
                technique: '运用软焦镜头和多重曝光技术，营造出朦胧的水墨效果，体现了中国古典诗词中的意境美。',
                background: '创作于抗战时期，表达了作者对故乡山水的深深眷恋和对和平的向往。',
                reviews: [
                    {
                        author: '张大千',
                        content: '静山兄的摄影如诗如画，真正做到了诗情画意的完美结合。',
                        date: '1943年'
                    }
                ]
            }
        ]
    },
    landscape: {
        id: 'landscape',
        name: '山水意境（1950-1980年代）',
        description: '晚期作品更加注重精神内涵的表达，达到了技法与意境的完美统一。',
        works: [
            {
                id: 'work3',
                title: '春树奇峰（台湾版）',
                year: 1955,
                category: 'landscape',
                imageUrl: 'images/chunshu_qifeng_2.jpg',
                description: '对经典作品的重新诠释，体现了作者艺术理念的深化。',
                technique: '在原有技法基础上，加入了更多的光影变化和层次感，使画面更加丰富立体。',
                background: '移居台湾后的重要作品，融入了对新环境的感悟和对艺术的新理解。',
                reviews: [
                    {
                        author: '美国摄影学会',
                        content: '郎静山先生的作品代表了东方摄影艺术的最高水准。',
                        date: '1960年'
                    }
                ]
            }
        ]
    }
};

// 主要功能类
class PhotoGallery {
    constructor() {
        this.currentCategory = null;
        this.currentWork = null;
        this.animationController = new AnimationController();
        this.navigationManager = new NavigationManager(this);
    }

    async init() {
        this.renderHomePage();
        this.initEventListeners();
        this.animationController.initFloatingElements();
        this.navigationManager.initRouting();
    }

    initEventListeners() {
        // 滚动视差效果
        window.addEventListener('scroll', () => {
            this.animationController.parallaxScroll();
        });

        // 窗口大小变化
        window.addEventListener('resize', () => {
            this.updateLayout();
        });
    }

    renderHomePage() {
        const mainContent = document.getElementById('main-content');
        
        const homeHTML = `
            <div class="fade-in-up">
                <!-- 英雄区域 -->
                <section class="hero min-h-screen bg-gradient-to-br from-slate-100 to-stone-200 relative overflow-hidden">
                    <div class="hero-content text-center relative z-10">
                        <div class="max-w-4xl">
                            <h1 class="text-6xl font-bold text-ink mb-6 parallax-element" data-speed="0.5">
                                郎静山摄影艺术展
                            </h1>
                            <p class="text-xl text-mist mb-8 parallax-element" data-speed="0.3">
                                中国画意摄影的开创者与大师
                            </p>
                            <p class="text-lg text-mist mb-12 max-w-2xl mx-auto parallax-element" data-speed="0.2">
                                郎静山（1892-1995），用相机重塑中国画的山水意境，
                                创立集锦摄影技法，将传统文化与现代技术完美融合。
                            </p>
                            <div class="flex flex-wrap justify-center gap-4">
                                <button onclick="gallery.renderCategoryPage('early')" 
                                        class="btn btn-ink btn-lg">
                                    探索早期作品
                                </button>
                                <button onclick="gallery.renderCategoryPage('classic')" 
                                        class="btn btn-outline btn-lg">
                                    经典集锦
                                </button>
                            </div>
                        </div>
                    </div>
                    
                    <!-- 背景装饰 -->
                    <div class="absolute inset-0 opacity-10">
                        <div class="absolute top-20 left-20 w-32 h-32 bg-gradient-radial from-gray-400 to-transparent rounded-full"></div>
                        <div class="absolute bottom-20 right-20 w-48 h-48 bg-gradient-radial from-gray-300 to-transparent rounded-full"></div>
                    </div>
                </section>

                <!-- 艺术家简介 -->
                <section class="py-20 bg-base-100">
                    <div class="container mx-auto px-4">
                        <div class="text-center mb-16">
                            <h2 class="text-4xl font-bold text-ink mb-6">艺术大师</h2>
                            <div class="w-24 h-1 bg-gold-accent mx-auto mb-8"></div>
                        </div>
                        
                        <div class="grid lg:grid-cols-2 gap-12 items-center">
                            <div class="space-y-6">
                                <h3 class="text-2xl font-bold text-ink">郎静山（1892-1995）</h3>
                                <p class="text-mist leading-relaxed">
                                    中国著名摄影艺术家，被誉为"亚洲摄影之父"。他的一生跨越了20世纪近一个世纪，
                                    是中国现代摄影艺术的开拓者和代表性人物。
                                </p>
                                <p class="text-mist leading-relaxed">
                                    1939年创立"集锦摄影"技法，将不同时间、地点拍摄的照片进行暗房再创作，
                                    融合中国山水画的构图理念，创造出超越现实的艺术境界。
                                </p>
                                <div class="stats stats-vertical lg:stats-horizontal shadow">
                                    <div class="stat">
                                        <div class="stat-title">国际沙龙入选</div>
                                        <div class="stat-value text-2xl">1000+</div>
                                        <div class="stat-desc">幅作品</div>
                                    </div>
                                    <div class="stat">
                                        <div class="stat-title">创作生涯</div>
                                        <div class="stat-value text-2xl">80+</div>
                                        <div class="stat-desc">年</div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="card bg-base-100 shadow-xl">
                                <div class="card-body">
                                    <h4 class="card-title text-ink">主要成就</h4>
                                    <ul class="space-y-3 text-mist">
                                        <li class="flex items-start">
                                            <span class="text-gold-accent mr-2">•</span>
                                            英国皇家摄影学会高级会士
                                        </li>
                                        <li class="flex items-start">
                                            <span class="text-gold-accent mr-2">•</span>
                                            美国摄影学会高级会士
                                        </li>
                                        <li class="flex items-start">
                                            <span class="text-gold-accent mr-2">•</span>
                                            1980年被评为世界十大摄影家之一
                                        </li>
                                        <li class="flex items-start">
                                            <span class="text-gold-accent mr-2">•</span>
                                            创立集锦摄影技法
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- 作品分类预览 -->
                <section class="py-20 bg-gradient-to-b from-base-100 to-mist-gray">
                    <div class="container mx-auto px-4">
                        <div class="text-center mb-16">
                            <h2 class="text-4xl font-bold text-ink mb-6">作品分类</h2>
                            <div class="w-24 h-1 bg-gold-accent mx-auto mb-8"></div>
                            <p class="text-mist max-w-2xl mx-auto">
                                按照创作年代和艺术风格，展示郎静山不同时期的代表作品
                            </p>
                        </div>
                        
                        <div class="grid md:grid-cols-3 gap-8">
                            ${Object.values(photoWorksData).map(category => `
                                <div class="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer"
                                     onclick="gallery.renderCategoryPage('${category.id}')">
                                    <div class="card-body">
                                        <h3 class="card-title text-ink">${category.name}</h3>
                                        <p class="text-mist">${category.description}</p>
                                        <div class="card-actions justify-end">
                                            <button class="btn btn-ink btn-sm">
                                                查看作品
                                                <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </section>
            </div>
        `;
        
        this.animationController.fadeInkTransition(mainContent, () => {
            mainContent.innerHTML = homeHTML;
        });
    }

    renderCategoryPage(categoryId) {
        const category = photoWorksData[categoryId];
        if (!category) return;
        
        this.currentCategory = categoryId;
        const mainContent = document.getElementById('main-content');
        
        const categoryHTML = `
            <div class="fade-in-up">
                <!-- 分类标题 -->
                <section class="py-20 bg-gradient-to-br from-slate-100 to-stone-200">
                    <div class="container mx-auto px-4 text-center">
                        <h1 class="text-5xl font-bold text-ink mb-6">${category.name}</h1>
                        <div class="w-24 h-1 bg-gold-accent mx-auto mb-8"></div>
                        <p class="text-xl text-mist max-w-3xl mx-auto">${category.description}</p>
                    </div>
                </section>

                <!-- 作品展示 -->
                <section class="py-20 bg-base-100">
                    <div class="container mx-auto px-4">
                        <div class="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
                            ${category.works.map(work => `
                                <div class="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300">
                                    <figure class="px-4 pt-4">
                                        <img src="${work.imageUrl}" 
                                             alt="${work.title}"
                                             class="work-image w-full h-64 object-cover rounded-lg"
                                             onclick="gallery.renderWorkDetail('${work.id}')"
                                             onerror="this.style.display='none'">
                                    </figure>
                                    <div class="card-body">
                                        <h3 class="card-title text-ink">${work.title}</h3>
                                        <p class="text-sm text-mist mb-2">${work.year}年</p>
                                        <p class="text-mist">${work.description}</p>
                                        <div class="card-actions justify-between items-center mt-4">
                                            <div class="badge badge-outline">${work.category}</div>
                                            <button onclick="gallery.renderWorkDetail('${work.id}')" 
                                                    class="btn btn-ink btn-sm">
                                                详细信息
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                        
                        <!-- 返回按钮 -->
                        <div class="text-center mt-12">
                            <button onclick="gallery.renderHomePage()" 
                                    class="btn btn-outline btn-lg">
                                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                                </svg>
                                返回首页
                            </button>
                        </div>
                    </div>
                </section>
            </div>
        `;
        
        this.animationController.fadeInkTransition(mainContent, () => {
            mainContent.innerHTML = categoryHTML;
            this.initImageMagnifiers();
        });
    }

    renderWorkDetail(workId) {
        // 查找作品
        let work = null;
        for (const category of Object.values(photoWorksData)) {
            work = category.works.find(w => w.id === workId);
            if (work) break;
        }
        
        if (!work) return;
        
        this.currentWork = workId;
        const mainContent = document.getElementById('main-content');
        
        const workHTML = `
            <div class="fade-in-up">
                <!-- 作品详情 -->
                <section class="py-20 bg-gradient-to-br from-slate-100 to-stone-200">
                    <div class="container mx-auto px-4">
                        <div class="grid lg:grid-cols-2 gap-12 items-start">
                            <!-- 作品图片 -->
                            <div class="space-y-6">
                                <div class="card bg-base-100 shadow-xl">
                                    <figure class="p-4">
                                        <img src="${work.imageUrl}" 
                                             alt="${work.title}"
                                             class="work-image w-full rounded-lg cursor-pointer"
                                             onclick="gallery.openMagnifier(this)"
                                             onerror="this.style.display='none'">
                                    </figure>
                                </div>
                                
                                <!-- 轮播组件（如果有多张图片） -->
                                <div class="carousel-container bg-base-100 rounded-lg shadow-lg">
                                    <div class="carousel-track">
                                        <div class="carousel-slide">
                                            <img src="${work.imageUrl}" 
                                                 alt="${work.title}"
                                                 class="w-full h-64 object-cover"
                                                 onerror="this.style.display='none'">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <!-- 作品信息 -->
                            <div class="space-y-8">
                                <div>
                                    <h1 class="text-4xl font-bold text-ink mb-4">${work.title}</h1>
                                    <div class="flex items-center gap-4 mb-6">
                                        <span class="badge badge-lg badge-outline">${work.year}年</span>
                                        <span class="badge badge-lg badge-primary">${work.category}</span>
                                    </div>
                                    <p class="text-lg text-mist leading-relaxed">${work.description}</p>
                                </div>
                                
                                <!-- 创作背景 -->
                                <div class="card bg-base-100 shadow-lg">
                                    <div class="card-body">
                                        <h3 class="card-title text-ink">创作背景</h3>
                                        <p class="text-mist leading-relaxed">${work.background}</p>
                                    </div>
                                </div>
                                
                                <!-- 摄影技巧 -->
                                <div class="card bg-base-100 shadow-lg">
                                    <div class="card-body">
                                        <h3 class="card-title text-ink">摄影技巧</h3>
                                        <p class="text-mist leading-relaxed">${work.technique}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
                <!-- 同行评价 -->
                <section class="py-20 bg-base-100">
                    <div class="container mx-auto px-4">
                        <div class="text-center mb-16">
                            <h2 class="text-3xl font-bold text-ink mb-6">同行评价</h2>
                            <div class="w-24 h-1 bg-gold-accent mx-auto"></div>
                        </div>
                        
                        <div class="grid md:grid-cols-2 gap-8">
                            ${work.reviews.map(review => `
                                <div class="card bg-base-100 shadow-lg">
                                    <div class="card-body">
                                        <blockquote class="text-mist italic text-lg leading-relaxed mb-4">
                                            "${review.content}"
                                        </blockquote>
                                        <div class="flex justify-between items-center">
                                            <cite class="text-ink font-semibold">—— ${review.author}</cite>
                                            <span class="text-sm text-mist">${review.date}</span>
                                        </div>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                        
                        <!-- 返回按钮 -->
                        <div class="text-center mt-12">
                            <button onclick="gallery.renderCategoryPage('${work.category}')" 
                                    class="btn btn-outline btn-lg mr-4">
                                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                                </svg>
                                返回分类
                            </button>
                            <button onclick="gallery.renderHomePage()" 
                                    class="btn btn-ink btn-lg">
                                返回首页
                            </button>
                        </div>
                    </div>
                </section>
            </div>
        `;
        
        this.animationController.fadeInkTransition(mainContent, () => {
            mainContent.innerHTML = workHTML;
            this.initImageMagnifiers();
            this.initCarousels();
        });
    }

    initImageMagnifiers() {
        const images = document.querySelectorAll('.work-image');
        images.forEach(img => {
            this.initImageMagnifier(img);
        });
    }

    initImageMagnifier(imageElement) {
        if (!imageElement) return;
        
        imageElement.addEventListener('mouseenter', (e) => {
            const container = e.target.parentElement;
            container.classList.add('magnifier-container');
            
            const lens = document.createElement('div');
            lens.className = 'magnifier-lens';
            lens.style.width = '100px';
            lens.style.height = '100px';
            container.appendChild(lens);
            
            const result = document.createElement('div');
            result.className = 'magnifier-result';
            result.style.width = '200px';
            result.style.height = '200px';
            result.style.top = '10px';
            result.style.right = '10px';
            container.appendChild(result);
            
            const resultImg = document.createElement('img');
            resultImg.src = e.target.src;
            resultImg.style.width = (e.target.offsetWidth * 2) + 'px';
            resultImg.style.height = (e.target.offsetHeight * 2) + 'px';
            result.appendChild(resultImg);
        });
        
        imageElement.addEventListener('mousemove', (e) => {
            const container = e.target.parentElement;
            const lens = container.querySelector('.magnifier-lens');
            const result = container.querySelector('.magnifier-result');
            const resultImg = result?.querySelector('img');
            
            if (!lens || !result || !resultImg) return;
            
            const rect = e.target.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const lensX = x - 50;
            const lensY = y - 50;
            
            lens.style.left = lensX + 'px';
            lens.style.top = lensY + 'px';
            
            const fx = resultImg.offsetWidth / e.target.offsetWidth;
            const fy = resultImg.offsetHeight / e.target.offsetHeight;
            
            resultImg.style.left = -(x * fx - 100) + 'px';
            resultImg.style.top = -(y * fy - 100) + 'px';
        });
        
        imageElement.addEventListener('mouseleave', (e) => {
            const container = e.target.parentElement;
            const lens = container.querySelector('.magnifier-lens');
            const result = container.querySelector('.magnifier-result');
            
            if (lens) lens.remove();
            if (result) result.remove();
            container.classList.remove('magnifier-container');
        });
    }

    openMagnifier(imageElement) {
        const modal = document.getElementById('magnifier-modal');
        const content = document.getElementById('magnifier-content');
        
        content.innerHTML = `
            <img src="${imageElement.src}" 
                 alt="${imageElement.alt}"
                 class="w-full max-h-96 object-contain rounded-lg">
            <div class="mt-4 text-center">
                <h3 class="text-xl font-bold text-ink">${imageElement.alt}</h3>
            </div>
        `;
        
        modal.showModal();
    }

    initCarousels() {
        const carousels = document.querySelectorAll('.carousel-container');
        carousels.forEach(carousel => {
            this.initCarousel(carousel);
        });
    }

    initCarousel(containerElement) {
        if (!containerElement) return;
        
        const track = containerElement.querySelector('.carousel-track');
        const slides = containerElement.querySelectorAll('.carousel-slide');
        
        if (slides.length <= 1) return;
        
        let currentIndex = 0;
        
        // 创建控制按钮
        const prevBtn = document.createElement('button');
        prevBtn.className = 'btn btn-circle btn-sm carousel-controls carousel-prev';
        prevBtn.innerHTML = '❮';
        
        const nextBtn = document.createElement('button');
        nextBtn.className = 'btn btn-circle btn-sm carousel-controls carousel-next';
        nextBtn.innerHTML = '❯';
        
        containerElement.appendChild(prevBtn);
        containerElement.appendChild(nextBtn);
        
        const updateCarousel = () => {
            track.style.transform = `translateX(-${currentIndex * 100}%)`;
        };
        
        prevBtn.addEventListener('click', () => {
            currentIndex = currentIndex > 0 ? currentIndex - 1 : slides.length - 1;
            updateCarousel();
        });
        
        nextBtn.addEventListener('click', () => {
            currentIndex = currentIndex < slides.length - 1 ? currentIndex + 1 : 0;
            updateCarousel();
        });
        
        // 自动播放
        setInterval(() => {
            currentIndex = currentIndex < slides.length - 1 ? currentIndex + 1 : 0;
            updateCarousel();
        }, 5000);
    }

    updateLayout() {
        // 响应式布局更新
        const elements = document.querySelectorAll('.parallax-element');
        elements.forEach(el => {
            const speed = parseFloat(el.dataset.speed) || 0.5;
            const yPos = -(window.pageYOffset * speed);
            el.style.transform = `translateY(${yPos}px)`;
        });
    }
}

// 导航管理器
class NavigationManager {
    constructor(gallery) {
        this.gallery = gallery;
    }

    navigateTo(page, params = {}) {
        switch (page) {
            case 'home':
                this.gallery.renderHomePage();
                break;
            case 'category':
                this.gallery.renderCategoryPage(params.categoryId);
                break;
            case 'work':
                this.gallery.renderWorkDetail(params.workId);
                break;
        }
    }

    initRouting() {
        // 简单的路由处理
        window.addEventListener('popstate', (e) => {
            if (e.state) {
                this.navigateTo(e.state.page, e.state.params);
            } else {
                this.gallery.renderHomePage();
            }
        });
    }
}

// 动画控制器
class AnimationController {
    constructor() {
        this.isAnimating = false;
    }

    fadeInkTransition(element, callback) {
        if (this.isAnimating) return;
        this.isAnimating = true;
        
        // 创建水墨过渡效果
        const inkElement = document.createElement('div');
        inkElement.className = 'ink-transition';
        document.body.appendChild(inkElement);
        
        setTimeout(() => {
            if (callback) callback();
            setTimeout(() => {
                inkElement.remove();
                this.isAnimating = false;
            }, 400);
        }, 400);
    }

    parallaxScroll() {
        const elements = document.querySelectorAll('.parallax-element');
        elements.forEach(el => {
            const speed = parseFloat(el.dataset.speed) || 0.5;
            const yPos = -(window.pageYOffset * speed);
            el.style.transform = `translateY(${yPos}px)`;
        });
    }

    initFloatingElements() {
        const floatingElements = document.querySelectorAll('.floating-ink');
        floatingElements.forEach((el, index) => {
            el.style.animationDelay = `${index * 2}s`;
        });
    }
}

// 初始化应用
const gallery = new PhotoGallery();

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', () => {
    gallery.init();
});

// 导出全局变量供HTML调用
window.gallery = gallery;