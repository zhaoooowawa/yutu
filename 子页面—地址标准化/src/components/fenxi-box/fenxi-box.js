/**
 * 经营分析组件 JavaScript
 * 基于Figma设计还原的交互功能
 */

class FenxiBox {
    constructor(container) {
        this.container = container || document.querySelector('.fenxi-box');
        this.init();
    }

    init() {
        if (!this.container) {
            console.warn('FenxiBox: 容器元素未找到');
            return;
        }

        this.bindEvents();
        this.setupAnimations();
    }

    bindEvents() {
        // 绑定详情图标点击事件
        const detailIcons = this.container.querySelectorAll('.h1-xiangqingicon');
        detailIcons.forEach((icon, index) => {
            icon.addEventListener('click', (e) => {
                this.handleDetailClick(e, index);
            });

            // 添加键盘访问性支持
            icon.setAttribute('tabindex', '0');
            icon.setAttribute('role', 'button');
            icon.setAttribute('aria-label', '查看详情');
            
            icon.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    this.handleDetailClick(e, index);
                }
            });
        });

        // 卡片悬停效果
        const cards = this.container.querySelectorAll('.shangxiacard');
        cards.forEach((card, index) => {
            card.addEventListener('mouseenter', () => {
                this.handleCardHover(card, true);
            });

            card.addEventListener('mouseleave', () => {
                this.handleCardHover(card, false);
            });
        });
    }

    handleDetailClick(event, cardIndex) {
        event.preventDefault();
        event.stopPropagation();

        // 触发自定义事件，允许外部监听
        const customEvent = new CustomEvent('fenxi-detail-click', {
            detail: {
                cardIndex: cardIndex,
                cardElement: event.target.closest('.shangxiacard')
            }
        });

        this.container.dispatchEvent(customEvent);

        // 默认行为：显示更多信息或跳转
        console.log(`点击了第 ${cardIndex + 1} 个卡片的详情按钮`);
        
        // 可以在这里添加具体的业务逻辑
        this.showCardDetails(cardIndex);
    }

    handleCardHover(card, isHovering) {
        if (isHovering) {
            card.style.transform = 'translateY(-2px)';
            card.style.boxShadow = '2px 4px 16px 0px rgba(0, 0, 0, 0.12)';
        } else {
            card.style.transform = 'translateY(0)';
            card.style.boxShadow = '2px 2px 12px 0px rgba(0, 0, 0, 0.07)';
        }
    }

    showCardDetails(cardIndex) {
        // 这里可以实现具体的详情展示逻辑
        // 例如：打开模态框、跳转页面、展开更多内容等
        
        const cardData = [
            {
                title: '地址数据常态更新',
                features: ['点线面样式丰富', '自定义图标'],
                description: '提供全面的地址数据管理和可视化功能'
            },
            {
                title: '地址数据常态更新',
                features: ['点线面样式丰富', '自定义图标'],
                description: '智能分析和决策支持系统'
            }
        ];

        const data = cardData[cardIndex];
        if (data) {
            // 可以在这里实现具体的展示逻辑
            console.log('卡片详情:', data);
        }
    }

    setupAnimations() {
        // 设置入场动画
        const cards = this.container.querySelectorAll('.shangxiacard');
        cards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            
            setTimeout(() => {
                card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, 200 + index * 100);
        });

        // 标题动画
        const title = this.container.querySelector('.main-title');
        const subtitle = this.container.querySelector('.subtitle');
        
        if (title) {
            title.style.opacity = '0';
            title.style.transform = 'translateY(-10px)';
            setTimeout(() => {
                title.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                title.style.opacity = '1';
                title.style.transform = 'translateY(0)';
            }, 100);
        }

        if (subtitle) {
            subtitle.style.opacity = '0';
            subtitle.style.transform = 'translateY(-10px)';
            setTimeout(() => {
                subtitle.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                subtitle.style.opacity = '1';
                subtitle.style.transform = 'translateY(0)';
            }, 200);
        }
    }

    // 公共方法：更新卡片内容
    updateCardContent(cardIndex, newData) {
        const cards = this.container.querySelectorAll('.shangxiacard');
        if (cards[cardIndex] && newData) {
            const titleElement = cards[cardIndex].querySelector('.h1-text');
            const pointTexts = cards[cardIndex].querySelectorAll('.point-text');

            if (titleElement && newData.title) {
                titleElement.textContent = newData.title;
            }

            if (pointTexts && newData.features) {
                pointTexts.forEach((pointText, index) => {
                    if (newData.features[index]) {
                        pointText.textContent = newData.features[index];
                    }
                });
            }
        }
    }

    // 公共方法：销毁组件
    destroy() {
        // 移除事件监听器
        const detailIcons = this.container.querySelectorAll('.h1-xiangqingicon');
        detailIcons.forEach(icon => {
            icon.removeEventListener('click', this.handleDetailClick);
            icon.removeEventListener('keydown', this.handleDetailClick);
        });

        const cards = this.container.querySelectorAll('.shangxiacard');
        cards.forEach(card => {
            card.removeEventListener('mouseenter', this.handleCardHover);
            card.removeEventListener('mouseleave', this.handleCardHover);
        });
    }
}

// 自动初始化
document.addEventListener('DOMContentLoaded', () => {
    const fenxiBoxElements = document.querySelectorAll('.fenxi-box');
    fenxiBoxElements.forEach(element => {
        new FenxiBox(element);
    });
});

// 导出类以供外部使用
if (typeof module !== 'undefined' && module.exports) {
    module.exports = FenxiBox;
} else if (typeof window !== 'undefined') {
    window.FenxiBox = FenxiBox;
}