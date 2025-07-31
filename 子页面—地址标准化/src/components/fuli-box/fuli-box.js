/**
 * 福利盒子组件 JavaScript
 * 提供按钮点击交互和动画效果
 */

class FuliBox {
    constructor(container) {
        this.container = container;
        this.init();
    }

    init() {
        this.bindEvents();
        this.addAnimations();
    }

    bindEvents() {
        const btn = this.container.querySelector('.fuli-btn');
        if (btn) {
            btn.addEventListener('click', this.handleButtonClick.bind(this));
            btn.addEventListener('mouseenter', this.handleButtonHover.bind(this));
            btn.addEventListener('mouseleave', this.handleButtonLeave.bind(this));
        }
    }

    handleButtonClick(event) {
        event.preventDefault();
        
        // 添加点击动画效果
        const btn = event.currentTarget;
        btn.style.transform = 'translateY(-2px) scale(0.98)';
        
        setTimeout(() => {
            btn.style.transform = 'translateY(-2px) scale(1)';
        }, 150);

        // 触发自定义事件
        const customEvent = new CustomEvent('fuliBoxClick', {
            detail: {
                action: 'trial',
                component: 'fuli-box'
            }
        });
        
        this.container.dispatchEvent(customEvent);
        
        // 默认行为：可以在这里添加跳转逻辑
        console.log('福利按钮被点击 - 立即试用');
        
        // 示例：跳转到试用页面
        // window.location.href = '/trial';
    }

    handleButtonHover(event) {
        const icon = event.currentTarget.querySelector('.fuli-btn-icon svg');
        if (icon) {
            icon.style.transform = 'translateX(2px)';
            icon.style.transition = 'transform 0.3s ease';
        }
    }

    handleButtonLeave(event) {
        const icon = event.currentTarget.querySelector('.fuli-btn-icon svg');
        if (icon) {
            icon.style.transform = 'translateX(0)';
        }
    }

    addAnimations() {
        // 添加入场动画
        const elements = this.container.querySelectorAll('.fuli-h-h1, .fuli-h-p, .fuli-btn');
        
        elements.forEach((element, index) => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(20px)';
            element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            
            setTimeout(() => {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }, index * 200 + 300);
        });
    }

    // 公共方法：更新文本内容
    updateContent(config) {
        if (config.title) {
            const title = this.container.querySelector('.fuli-h-h1');
            if (title) title.textContent = config.title;
        }

        if (config.description) {
            const desc = this.container.querySelector('.fuli-text-normal');
            if (desc) desc.textContent = config.description;
        }

        if (config.highlight) {
            const highlight = this.container.querySelector('.fuli-text-highlight');
            if (highlight) highlight.textContent = config.highlight;
        }

        if (config.buttonText) {
            const btnText = this.container.querySelector('.fuli-btn-text');
            if (btnText) btnText.textContent = config.buttonText;
        }
    }

    // 公共方法：销毁组件
    destroy() {
        const btn = this.container.querySelector('.fuli-btn');
        if (btn) {
            btn.removeEventListener('click', this.handleButtonClick);
            btn.removeEventListener('mouseenter', this.handleButtonHover);
            btn.removeEventListener('mouseleave', this.handleButtonLeave);
        }
    }
}

// 自动初始化
document.addEventListener('DOMContentLoaded', function() {
    const fuliBoxes = document.querySelectorAll('.fuli-box');
    fuliBoxes.forEach(box => {
        new FuliBox(box);
    });
});

// 导出类供外部使用
if (typeof module !== 'undefined' && module.exports) {
    module.exports = FuliBox;
}

// 全局访问
window.FuliBox = FuliBox;