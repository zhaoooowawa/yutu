/**
 * 内容推荐组件 JavaScript
 * 提供卡片交互功能和动画效果
 */

class TuijianBox {
    constructor() {
        this.init();
    }

    init() {
        this.bindEvents();
        this.addAnimations();
    }

    /**
     * 绑定事件监听器
     */
    bindEvents() {
        // 获取所有卡片操作按钮
        const actionButtons = document.querySelectorAll('.card-action');
        
        actionButtons.forEach((button, index) => {
            button.addEventListener('click', (e) => {
                this.handleCardAction(e, index);
            });

            // 添加悬停效果
            button.addEventListener('mouseenter', (e) => {
                this.handleCardHover(e, true);
            });

            button.addEventListener('mouseleave', (e) => {
                this.handleCardHover(e, false);
            });
        });

        // 为卡片添加悬停效果
        const cards = document.querySelectorAll('.tuijian-card');
        cards.forEach(card => {
            card.addEventListener('mouseenter', (e) => {
                this.handleCardMouseEnter(e);
            });

            card.addEventListener('mouseleave', (e) => {
                this.handleCardMouseLeave(e);
            });
        });
    }

    /**
     * 处理卡片操作点击事件
     * @param {Event} event - 点击事件
     * @param {number} cardIndex - 卡片索引
     */
    handleCardAction(event, cardIndex) {
        event.preventDefault();
        
        const card = event.target.closest('.tuijian-card');
        const cardTitle = card.querySelector('.card-title').textContent;
        
        // 添加点击动画效果
        this.addClickAnimation(event.target.closest('.card-action'));
        
        // 根据卡片类型执行不同操作
        switch(cardIndex) {
            case 0:
            case 1:
                console.log(`查看详情: ${cardTitle}`);
                this.showCardDetails(cardIndex, cardTitle);
                break;
            case 2:
                console.log(`联系我们: ${cardTitle}`);
                this.showContactInfo();
                break;
            default:
                console.log(`未知操作: ${cardTitle}`);
        }
    }

    /**
     * 处理按钮悬停效果
     * @param {Event} event - 悬停事件
     * @param {boolean} isEnter - 是否进入悬停状态
     */
    handleCardHover(event, isEnter) {
        const actionButton = event.target.closest('.card-action');
        const icon = actionButton.querySelector('.action-icon');
        
        if (isEnter) {
            icon.style.transform = 'translateX(2px)';
            icon.style.transition = 'transform 0.3s ease';
        } else {
            icon.style.transform = 'translateX(0)';
        }
    }

    /**
     * 处理卡片鼠标进入事件
     * @param {Event} event - 鼠标事件
     */
    handleCardMouseEnter(event) {
        const card = event.currentTarget;
        card.style.transform = 'translateY(-5px)';
        card.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
        card.style.boxShadow = '2px 8px 20px 0px rgba(0, 0, 0, 0.12)';
    }

    /**
     * 处理卡片鼠标离开事件
     * @param {Event} event - 鼠标事件
     */
    handleCardMouseLeave(event) {
        const card = event.currentTarget;
        card.style.transform = 'translateY(0)';
        card.style.boxShadow = '2px 2px 12px 0px rgba(0, 0, 0, 0.07)';
    }

    /**
     * 添加点击动画效果
     * @param {Element} element - 要添加动画的元素
     */
    addClickAnimation(element) {
        element.style.transform = 'scale(0.95)';
        element.style.transition = 'transform 0.1s ease';
        
        setTimeout(() => {
            element.style.transform = 'scale(1)';
        }, 100);
    }

    /**
     * 显示卡片详情
     * @param {number} cardIndex - 卡片索引
     * @param {string} cardTitle - 卡片标题
     */
    showCardDetails(cardIndex, cardTitle) {
        // 这里可以实现具体的详情展示逻辑
        // 例如打开模态框、跳转页面等
        alert(`查看详情: ${cardTitle}\n\n这里可以实现具体的详情展示功能，比如：\n- 打开详情模态框\n- 跳转到详情页面\n- 展开更多信息等`);
    }

    /**
     * 显示联系信息
     */
    showContactInfo() {
        // 这里可以实现联系我们的逻辑
        alert('联系我们\n\n这里可以实现联系功能，比如：\n- 打开联系表单\n- 显示联系方式\n- 跳转到联系页面等');
    }

    /**
     * 添加入场动画
     */
    addAnimations() {
        // 为标题添加淡入动画
        const title = document.querySelector('.tuijian-box-h');
        if (title) {
            title.style.opacity = '0';
            title.style.transform = 'translateX(-50%) translateY(-20px)';
            title.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            
            setTimeout(() => {
                title.style.opacity = '1';
                title.style.transform = 'translateX(-50%) translateY(0)';
            }, 200);
        }

        // 为卡片添加依次出现的动画
        const cards = document.querySelectorAll('.tuijian-card');
        cards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, 400 + index * 200);
        });
    }

    /**
     * 响应式处理
     */
    handleResize() {
        // 可以在这里添加响应式相关的JavaScript逻辑
        const container = document.querySelector('.tuijian-box');
        const windowWidth = window.innerWidth;
        
        // 根据屏幕宽度调整布局
        if (windowWidth <= 768) {
            container.classList.add('mobile-layout');
        } else if (windowWidth <= 1200) {
            container.classList.add('tablet-layout');
            container.classList.remove('mobile-layout');
        } else {
            container.classList.remove('mobile-layout', 'tablet-layout');
        }
    }
}

// 当DOM加载完成后初始化组件
document.addEventListener('DOMContentLoaded', () => {
    const tuijianBox = new TuijianBox();
    
    // 监听窗口大小变化
    window.addEventListener('resize', () => {
        tuijianBox.handleResize();
    });
    
    // 初始化时也执行一次响应式处理
    tuijianBox.handleResize();
});

// 导出类以供其他模块使用
if (typeof module !== 'undefined' && module.exports) {
    module.exports = TuijianBox;
}