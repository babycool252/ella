// New Arrivals Jewelry Component JavaScript
class NewArrivalsJewelry {
  constructor(container) {
    this.container = container;
    this.carousel = container.querySelector('.products-carousel');
    this.arrows = container.querySelectorAll('.carousel-arrow');
    this.dots = container.querySelector('.carousel-dots');
    this.items = container.querySelectorAll('.product-item');
    this.currentIndex = 0;
    this.autoplay = this.carousel.dataset.autoplay === 'true';
    this.autoplaySpeed = parseInt(this.carousel.dataset.autoplaySpeed) || 5;
    this.showArrows = this.carousel.dataset.showArrows === 'true';
    this.showDots = this.carousel.dataset.showDots === 'true';
    this.autoplayInterval = null;
    
    this.init();
  }

  init() {
    this.setupCarousel();
    this.setupArrows();
    this.setupDots();
    this.setupAutoplay();
    this.setupQuickView();
    this.setupWishlist();
    this.setupResponsive();
    this.setupAnimations();
  }

  setupCarousel() {
    if (!this.carousel) return;

    // 设置轮播容器样式
    this.carousel.style.display = 'flex';
    this.carousel.style.gap = '30px';
    this.carousel.style.overflow = 'hidden';
    this.carousel.style.scrollBehavior = 'smooth';

    // 计算可见项目数量
    this.updateVisibleItems();
  }

  setupArrows() {
    if (!this.showArrows || !this.arrows.length) return;

    this.arrows.forEach((arrow, index) => {
      arrow.addEventListener('click', (e) => {
        e.preventDefault();
        if (index === 0) {
          this.prev();
        } else {
          this.next();
        }
      });

      // 添加键盘支持
      arrow.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          if (index === 0) {
            this.prev();
          } else {
            this.next();
          }
        }
      });
    });
  }

  setupDots() {
    if (!this.showDots || !this.dots) return;

    // 创建指示点
    const totalSlides = Math.ceil(this.items.length / this.getVisibleCount());
    for (let i = 0; i < totalSlides; i++) {
      const dot = document.createElement('button');
      dot.className = 'carousel-dot';
      dot.setAttribute('aria-label', `Go to slide ${i + 1}`);
      dot.addEventListener('click', () => this.goToSlide(i));
      this.dots.appendChild(dot);
    }

    this.updateDots();
  }

  setupAutoplay() {
    if (!this.autoplay) return;

    this.startAutoplay();

    // 鼠标悬停时暂停自动播放
    this.container.addEventListener('mouseenter', () => this.stopAutoplay());
    this.container.addEventListener('mouseleave', () => this.startAutoplay());

    // 触摸设备支持
    this.container.addEventListener('touchstart', () => this.stopAutoplay());
    this.container.addEventListener('touchend', () => this.startAutoplay());
  }

  setupQuickView() {
    const quickViewButtons = this.container.querySelectorAll('.quick-view-btn');
    
    quickViewButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        e.preventDefault();
        const productId = button.dataset.productId;
        this.openQuickView(productId);
      });
    });
  }

  setupWishlist() {
    const wishlistButtons = this.container.querySelectorAll('.add-to-wishlist-btn');
    
    wishlistButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        e.preventDefault();
        const productId = button.dataset.productId;
        this.toggleWishlist(productId, button);
      });
    });
  }

  setupResponsive() {
    // 监听窗口大小变化
    window.addEventListener('resize', () => {
      this.updateVisibleItems();
      this.updateDots();
    });
  }

  setupAnimations() {
    // 为产品卡片添加动画延迟
    this.items.forEach((item, index) => {
      item.style.setProperty('--animation-order', index);
    });

    // 观察器用于触发动画
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, {
      threshold: 0.1
    });

    this.items.forEach(item => {
      observer.observe(item);
    });
  }

  // 轮播控制方法
  next() {
    const visibleCount = this.getVisibleCount();
    const maxIndex = this.items.length - visibleCount;
    this.currentIndex = Math.min(this.currentIndex + 1, maxIndex);
    this.updateCarousel();
  }

  prev() {
    this.currentIndex = Math.max(this.currentIndex - 1, 0);
    this.updateCarousel();
  }

  goToSlide(index) {
    this.currentIndex = index;
    this.updateCarousel();
  }

  updateCarousel() {
    const visibleCount = this.getVisibleCount();
    const translateX = -this.currentIndex * (100 / visibleCount);
    
    this.carousel.style.transform = `translateX(${translateX}%)`;
    this.updateDots();
    this.updateArrows();
  }

  updateVisibleItems() {
    const visibleCount = this.getVisibleCount();
    this.items.forEach((item, index) => {
      if (index < visibleCount) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  }

  getVisibleCount() {
    const width = window.innerWidth;
    if (width <= 767) return 1;
    if (width <= 1199) return 2;
    return 3;
  }

  updateDots() {
    if (!this.dots) return;

    const dots = this.dots.querySelectorAll('.carousel-dot');
    dots.forEach((dot, index) => {
      dot.classList.toggle('active', index === this.currentIndex);
    });
  }

  updateArrows() {
    if (!this.arrows.length) return;

    const visibleCount = this.getVisibleCount();
    const maxIndex = this.items.length - visibleCount;

    // 更新箭头状态
    this.arrows[0].disabled = this.currentIndex === 0;
    this.arrows[1].disabled = this.currentIndex >= maxIndex;

    // 更新箭头样式
    this.arrows.forEach((arrow, index) => {
      if (index === 0) {
        arrow.style.opacity = this.currentIndex === 0 ? '0.5' : '1';
      } else {
        arrow.style.opacity = this.currentIndex >= maxIndex ? '0.5' : '1';
      }
    });
  }

  // 自动播放控制
  startAutoplay() {
    if (!this.autoplay) return;

    this.stopAutoplay();
    this.autoplayInterval = setInterval(() => {
      const visibleCount = this.getVisibleCount();
      const maxIndex = this.items.length - visibleCount;
      
      if (this.currentIndex >= maxIndex) {
        this.currentIndex = 0;
      } else {
        this.currentIndex++;
      }
      
      this.updateCarousel();
    }, this.autoplaySpeed * 1000);
  }

  stopAutoplay() {
    if (this.autoplayInterval) {
      clearInterval(this.autoplayInterval);
      this.autoplayInterval = null;
    }
  }

  // 快速查看功能
  openQuickView(productId) {
    // 这里可以集成现有的快速查看功能
    console.log('Opening quick view for product:', productId);
    
    // 示例：触发自定义事件
    const event = new CustomEvent('quick-view-open', {
      detail: { productId: productId }
    });
    document.dispatchEvent(event);
  }

  // 愿望清单功能
  toggleWishlist(productId, button) {
    // 这里可以集成现有的愿望清单功能
    console.log('Toggling wishlist for product:', productId);
    
    // 切换按钮状态
    button.classList.toggle('active');
    
    // 示例：触发自定义事件
    const event = new CustomEvent('wishlist-toggle', {
      detail: { 
        productId: productId,
        added: button.classList.contains('active')
      }
    });
    document.dispatchEvent(event);
  }

  // 公共方法
  destroy() {
    this.stopAutoplay();
    // 清理事件监听器
    if (this.arrows) {
      this.arrows.forEach(arrow => {
        arrow.removeEventListener('click', this.handleArrowClick);
      });
    }
  }
}

// 初始化所有New Arrivals组件
document.addEventListener('DOMContentLoaded', () => {
  const containers = document.querySelectorAll('.new-arrivals-jewelry');
  containers.forEach(container => {
    new NewArrivalsJewelry(container);
  });
});

// 导出类以供其他模块使用
if (typeof module !== 'undefined' && module.exports) {
  module.exports = NewArrivalsJewelry;
} 