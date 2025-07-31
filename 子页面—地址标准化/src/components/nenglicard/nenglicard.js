/**
 * 能力卡片组件 JavaScript
 * 提供交互功能和动画效果
 */

class NengliCard {
    constructor() {
        this.init();
    }

    init() {
        this.bindEvents();
        this.addAnimations();
        this.setupIntersectionObserver();
    }

    /**
     * 绑定事件监听器
     */
    bindEvents() {
        // 获取所有试用按钮
        const tryButtons = document.querySelectorAll('.try-button, .maxcard-try-button');
        
        tryButtons.forEach(button => {
            button.addEventListener('click', this.handleTryButtonClick.bind(this));
            button.addEventListener('mouseenter', this.handleButtonHover.bind(this));
            button.addEventListener('mouseleave', this.handleButtonLeave.bind(this));
        });

        // 卡片悬停效果已移除，仅保留按钮悬停效果

        // 响应式处理
        window.addEventListener('resize', this.handleResize.bind(this));
    }

    /**
     * 处理试用按钮点击事件
     */
    handleTryButtonClick(event) {
        const button = event.target;
        
        // 添加点击动画
        button.style.transform = 'scale(0.95)';
        setTimeout(() => {
            button.style.transform = '';
        }, 150);

        // 模拟跳转或显示提示
        this.showNotification('功能演示：立即试用功能已触发！');
        
        // 这里可以添加实际的跳转逻辑
        console.log('试用按钮被点击，可以在这里添加跳转逻辑');
    }

    /**
     * 按钮悬停进入效果
     */
    handleButtonHover(event) {
        const button = event.target;
        button.style.transform = 'translateY(-1px)';
        button.style.boxShadow = '0 4px 12px rgba(0, 85, 255, 0.3)';
    }

    /**
     * 按钮悬停离开效果
     */
    handleButtonLeave(event) {
        const button = event.target;
        button.style.transform = '';
        button.style.boxShadow = '';
    }

    /**
     * 卡片悬停效果已移除，仅保留按钮悬停效果
     */

    /**
     * 添加入场动画
     */
    addAnimations() {
        // 标题动画
        const header = document.querySelector('.card-header');
        if (header) {
            header.style.opacity = '0';
            header.style.transform = 'translateY(-30px)';
            header.style.transition = 'all 0.8s ease';
            
            setTimeout(() => {
                header.style.opacity = '1';
                header.style.transform = 'translateY(0)';
            }, 200);
        }

        // 卡片依次出现动画
        const cards = document.querySelectorAll('.midcard, .maxcard');
        cards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(50px)';
            card.style.transition = 'all 0.8s ease';
            
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, 400 + index * 200);
        });
    }

    /**
     * 设置交叉观察器用于滚动动画
     */
    setupIntersectionObserver() {
        const options = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            });
        }, options);

        // 观察所有需要动画的元素
        const animateElements = document.querySelectorAll('.midcard, .maxcard, .card-header');
        animateElements.forEach(el => observer.observe(el));
    }

    /**
     * 显示通知消息
     */
    showNotification(message) {
        // 创建通知元素
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: linear-gradient(135deg, #0055FF 0%, #7167FF 100%);
            color: white;
            padding: 12px 20px;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0, 85, 255, 0.3);
            z-index: 1000;
            font-family: 'PingFang SC', sans-serif;
            font-size: 14px;
            transform: translateX(100%);
            transition: transform 0.3s ease;
        `;

        document.body.appendChild(notification);

        // 显示动画
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);

        // 自动隐藏
        setTimeout(() => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 3000);
    }

    /**
     * 处理窗口大小变化
     */
    handleResize() {
        // 可以在这里添加响应式逻辑
        const container = document.querySelector('.nenglicard-container');
        if (container && window.innerWidth < 768) {
            container.classList.add('mobile-view');
        } else {
            container.classList.remove('mobile-view');
        }
    }

    /**
     * 获取卡片数据（用于动态内容更新）
     */
    getCardData() {
        return {
            title: '数据渲染',
            subtitle: '灵活打点，沿路画线，自由画面',
            midCards: [
                {
                    title: '卡片标题文案文案文案',
                    features: [
                        '文案文案文案文案文案文案文案文',
                        '文案文案文案文案文案文案文案文'
                    ]
                },
                {
                    title: '卡片标题文案文案文案',
                    features: [
                        '文案文案文案文案文案文案文案文',
                        '文案文案文案文案文案文案文案文'
                    ]
                }
            ],
            maxCard: {
                title: '智能划区',
                features: [
                    '一键导入行政区划',
                    '智能均衡划区',
                    '无缝隙无留白无压盖'
                ]
            }
        };
    }

    /**
     * 更新卡片内容
     */
    updateCardContent(data) {
        // 更新主标题
        const mainTitle = document.querySelector('.main-title');
        if (mainTitle && data.title) {
            mainTitle.textContent = data.title;
        }

        // 更新副标题
        const subTitle = document.querySelector('.sub-title');
        if (subTitle && data.subtitle) {
            subTitle.textContent = data.subtitle;
        }

        // 更新中等卡片
        const midCards = document.querySelectorAll('.midcard');
        if (data.midCards && midCards.length >= data.midCards.length) {
            data.midCards.forEach((cardData, index) => {
                const card = midCards[index];
                const title = card.querySelector('.card-title');
                const features = card.querySelectorAll('.feature-text');
                
                if (title) title.textContent = cardData.title;
                if (features && cardData.features) {
                    cardData.features.forEach((feature, featureIndex) => {
                        if (features[featureIndex]) {
                            features[featureIndex].textContent = feature;
                        }
                    });
                }
            });
        }

        // 更新大卡片
        if (data.maxCard) {
            const maxCardTitle = document.querySelector('.maxcard-title');
            const maxCardFeatures = document.querySelectorAll('.maxcard-feature-text');
            
            if (maxCardTitle) maxCardTitle.textContent = data.maxCard.title;
            if (maxCardFeatures && data.maxCard.features) {
                data.maxCard.features.forEach((feature, index) => {
                    if (maxCardFeatures[index]) {
                        maxCardFeatures[index].textContent = feature;
                    }
                });
            }
        }
    }
}

// 页面加载完成后初始化组件
document.addEventListener('DOMContentLoaded', () => {
    const nengliCard = new NengliCard();
    
    // 将实例挂载到全局，方便外部调用
    window.NengliCard = nengliCard;
});

// 导出类（如果使用模块系统）
if (typeof module !== 'undefined' && module.exports) {
    module.exports = NengliCard;
}