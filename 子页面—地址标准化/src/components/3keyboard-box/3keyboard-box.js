/**
 * 3Keyboard Box 组件 JavaScript
 * 用于处理组件的交互和动画效果
 */

class KeyboardBox3 {
    constructor() {
        this.container = document.querySelector('.keyboard-box-3');
        this.items = document.querySelectorAll('.content-item');
        this.init();
    }

    init() {
        this.bindEvents();
        this.setupAnimations();
    }

    bindEvents() {
        // 添加窗口大小变化监听
        window.addEventListener('resize', () => this.handleResize());
    }

    setupAnimations() {
        // 页面加载时的入场动画
        this.items.forEach((item, index) => {
            item.style.opacity = '0';
            item.style.transform = 'translateY(20px)';
            
            setTimeout(() => {
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
                item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            }, index * 200);
        });
    }

    handleResize() {
        // 处理响应式布局调整
        const containerWidth = this.container.offsetWidth;
        
        if (containerWidth < 768) {
            // 移动端布局调整
            this.items.forEach(item => {
                item.style.justifyContent = 'center';
            });
        } else {
            // 桌面端布局调整
            this.items.forEach(item => {
                item.style.justifyContent = 'flex-start';
            });
        }
    }

    // 公共方法：获取组件数据
    getData() {
        return {
            items: [
                {
                    icon: 'icon-1.svg',
                    title: '千万级',
                    description: '地理数据存储'
                },
                {
                    icon: 'icon-2.svg',
                    title: '高性能',
                    description: '地理数据存储'
                },
                {
                    icon: 'icon-3.svg',
                    title: '个性化',
                    description: '丰富样式呈现'
                }
            ]
        };
    }

    // 公共方法：更新组件内容
    updateContent(newData) {
        if (!newData || !newData.items) return;

        this.items.forEach((item, index) => {
            if (newData.items[index]) {
                const data = newData.items[index];
                
                const icon = item.querySelector('.icon img');
                const h1 = item.querySelector('.h1');
                const p = item.querySelector('.p');
                
                if (icon && data.icon) icon.src = data.icon;
                if (h1 && data.title) h1.textContent = data.title;
                if (p && data.description) p.textContent = data.description;
            }
        });
    }

    // 公共方法：销毁组件
    destroy() {
        window.removeEventListener('resize', this.handleResize);
    }
}

// 页面加载完成后初始化组件
document.addEventListener('DOMContentLoaded', () => {
    window.keyboardBox3 = new KeyboardBox3();
});

// 导出类以供其他模块使用
if (typeof module !== 'undefined' && module.exports) {
    module.exports = KeyboardBox3;
}