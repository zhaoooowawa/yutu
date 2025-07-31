/**
 * Keyboard Box 组件 JavaScript
 * 处理键盘盒子组件的交互逻辑
 */

class KeyboardBox {
    constructor() {
        this.init();
    }

    /**
     * 初始化组件
     */
    init() {
        this.bindEvents();
        this.setupAnimations();
    }

    /**
     * 绑定事件
     */
    bindEvents() {
        // 监听窗口大小变化
        window.addEventListener('resize', this.handleResize.bind(this));
        
        // 监听内容项的鼠标悬停效果
        const contentItems = document.querySelectorAll('.content-item');
        contentItems.forEach(item => {
            item.addEventListener('mouseenter', this.handleItemHover.bind(this));
            item.addEventListener('mouseleave', this.handleItemLeave.bind(this));
        });
    }

    /**
     * 设置动画效果
     */
    setupAnimations() {
        // 检查是否支持 Intersection Observer
        if ('IntersectionObserver' in window) {
            this.setupScrollAnimations();
        }
    }

    /**
     * 设置滚动动画
     */
    setupScrollAnimations() {
        // 移除所有动画效果，保持静态显示
    }

    /**
     * 处理窗口大小变化
     */
    handleResize() {
        // 防抖处理
        clearTimeout(this.resizeTimer);
        this.resizeTimer = setTimeout(() => {
            this.updateLayout();
        }, 250);
    }

    /**
     * 更新布局
     */
    updateLayout() {
        const keyboardBox = document.querySelector('.keyboard-box');
        const windowWidth = window.innerWidth;
        
        // 根据屏幕宽度调整布局
        if (windowWidth <= 768) {
            keyboardBox.classList.add('mobile-layout');
        } else {
            keyboardBox.classList.remove('mobile-layout');
        }
    }

    /**
     * 处理内容项悬停
     */
    handleItemHover(event) {
        // 移除所有hover动效，保持静态
    }

    /**
     * 处理内容项离开悬停
     */
    handleItemLeave(event) {
        // 移除所有hover动效，保持静态
    }

    /**
     * 获取组件数据
     */
    getData() {
        return {
            items: [
                {
                    icon: 'h1-icon.svg',
                    title: '特色六级地址',
                    description: '更精准，更全面'
                },
                {
                    icon: 'h1-icon-2.svg',
                    title: '40亿+门址库',
                    description: '日千万级订单妥投验证自动采集更新'
                },
                {
                    icon: 'h1-icon-3.svg',
                    title: '21级语义模型',
                    description: '全局标准化地址数据模型'
                },
                {
                    icon: 'h1-icon-4.svg',
                    title: '99.5%地址解析准确率',
                    description: '前沿AI算法引擎，准确率行业领先',
                    highlight: true
                }
            ]
        };
    }

    /**
     * 销毁组件
     */
    destroy() {
        // 移除事件监听器
        window.removeEventListener('resize', this.handleResize.bind(this));
        
        const contentItems = document.querySelectorAll('.content-item');
        contentItems.forEach(item => {
            item.removeEventListener('mouseenter', this.handleItemHover.bind(this));
            item.removeEventListener('mouseleave', this.handleItemLeave.bind(this));
        });

        // 清除定时器
        if (this.resizeTimer) {
            clearTimeout(this.resizeTimer);
        }
    }
}

// 当 DOM 加载完成后初始化组件
document.addEventListener('DOMContentLoaded', () => {
    window.keyboardBox = new KeyboardBox();
});

// 导出类以供其他模块使用
if (typeof module !== 'undefined' && module.exports) {
    module.exports = KeyboardBox;
}