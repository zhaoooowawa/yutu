/**
 * 页尾盒子组件 JavaScript
 * 提供链接点击交互和动画效果
 */

class YeweiBox {
    constructor(container) {
        this.container = container;
        this.init();
    }

    init() {
        this.bindEvents();
        this.addAnimations();
        this.initQRCode();
    }

    bindEvents() {
        // 绑定所有链接的点击事件
        this.bindLinkEvents('.product-link', 'product');
        this.bindLinkEvents('.slove-link', 'solution');
        this.bindLinkEvents('.prepond-link', 'advantage');
        this.bindLinkEvents('.aboutus-link', 'about');
        this.bindLinkEvents('.other-link', 'partner');
        this.bindLinkEvents('.news-article', 'news');
        
        // 绑定联系信息点击事件
        this.bindContactEvents();
    }

    bindLinkEvents(selector, category) {
        const links = this.container.querySelectorAll(selector);
        links.forEach(link => {
            link.addEventListener('click', (event) => {
                this.handleLinkClick(event, category);
            });
            
            // 添加悬停效果
            link.addEventListener('mouseenter', this.handleLinkHover.bind(this));
            link.addEventListener('mouseleave', this.handleLinkLeave.bind(this));
        });
    }

    bindContactEvents() {
        // 电话号码点击事件
        const phoneElement = this.container.querySelector('.contact-value');
        if (phoneElement && phoneElement.textContent.includes('400-')) {
            phoneElement.style.cursor = 'pointer';
            phoneElement.addEventListener('click', (event) => {
                this.handlePhoneClick(event);
            });
        }

        // 邮箱点击事件
        const emailElements = this.container.querySelectorAll('.contact-value');
        emailElements.forEach(element => {
            if (element.textContent.includes('@')) {
                element.style.cursor = 'pointer';
                element.addEventListener('click', (event) => {
                    this.handleEmailClick(event);
                });
            }
        });
    }

    handleLinkClick(event, category) {
        event.preventDefault();
        
        const linkText = event.target.textContent.trim();
        
        // 添加点击动画效果
        const link = event.currentTarget;
        link.style.transform = 'translateX(2px)';
        link.style.transition = 'transform 0.2s ease';
        
        setTimeout(() => {
            link.style.transform = 'translateX(0)';
        }, 200);

        // 触发自定义事件
        const customEvent = new CustomEvent('yeweiBoxLinkClick', {
            detail: {
                category: category,
                linkText: linkText,
                component: 'yewei-box'
            }
        });
        
        this.container.dispatchEvent(customEvent);
        
        console.log(`页脚链接被点击 - 分类: ${category}, 链接: ${linkText}`);
        
        // 根据不同类型的链接执行不同的跳转逻辑
        this.handleNavigation(category, linkText);
    }

    handleNavigation(category, linkText) {
        // 这里可以根据实际需求配置不同的跳转逻辑
        const navigationMap = {
            'product': {
                '地址标准化': '/products/address-standardization',
                '企业制图': '/products/enterprise-mapping',
                '智能分单': '/products/smart-distribution',
                '位域大数据': '/products/location-big-data'
            },
            'solution': {
                '零售连锁': '/solutions/retail-chain',
                '智慧物流': '/solutions/smart-logistics',
                '金融': '/solutions/finance'
            },
            'about': {
                '走进与图': '/about/company',
                '新闻中心': '/about/news'
            }
        };

        const url = navigationMap[category]?.[linkText];
        if (url) {
            // window.location.href = url;
            console.log(`准备跳转到: ${url}`);
        }
    }

    handlePhoneClick(event) {
        const phoneNumber = event.target.textContent.trim();
        
        // 尝试拨打电话
        if (navigator.userAgent.match(/(iPhone|iPod|Android|BlackBerry|IEMobile)/)) {
            window.location.href = `tel:${phoneNumber}`;
        } else {
            // 桌面端复制到剪贴板
            this.copyToClipboard(phoneNumber);
            this.showTooltip(event.target, '电话号码已复制到剪贴板');
        }
        
        console.log(`电话号码被点击: ${phoneNumber}`);
    }

    handleEmailClick(event) {
        const email = event.target.textContent.trim();
        
        // 打开邮件客户端
        window.location.href = `mailto:${email}`;
        
        console.log(`邮箱被点击: ${email}`);
    }

    handleLinkHover(event) {
        const link = event.currentTarget;
        link.style.transform = 'translateX(2px)';
        link.style.transition = 'transform 0.3s ease';
    }

    handleLinkLeave(event) {
        const link = event.currentTarget;
        link.style.transform = 'translateX(0)';
    }

    initQRCode() {
        const qrContainer = this.container.querySelector('.yewei-QRgorup');
        if (qrContainer) {
            // 添加二维码悬停效果
            qrContainer.addEventListener('mouseenter', () => {
                const qrImage = qrContainer.querySelector('.qr-code');
                if (qrImage) {
                    qrImage.style.transform = 'scale(1.05)';
                    qrImage.style.transition = 'transform 0.3s ease';
                }
            });

            qrContainer.addEventListener('mouseleave', () => {
                const qrImage = qrContainer.querySelector('.qr-code');
                if (qrImage) {
                    qrImage.style.transform = 'scale(1)';
                }
            });
        }
    }

    addAnimations() {
        // 添加入场动画 - 从下往上淡入
        const sections = this.container.querySelectorAll('.yewei-product, .yewei-slove, .yewei-prepond, .yewei-aboutus, .yewei-other, .yewei-news, .yewei-QRgorup');
        
        // 使用 Intersection Observer 实现滚动动画
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }, index * 100);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        sections.forEach(section => {
            section.style.opacity = '0';
            section.style.transform = 'translateY(30px)';
            section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(section);
        });
    }

    copyToClipboard(text) {
        if (navigator.clipboard && window.isSecureContext) {
            navigator.clipboard.writeText(text);
        } else {
            // 降级方案
            const textArea = document.createElement('textarea');
            textArea.value = text;
            textArea.style.position = 'fixed';
            textArea.style.left = '-999999px';
            textArea.style.top = '-999999px';
            document.body.appendChild(textArea);
            textArea.focus();
            textArea.select();
            document.execCommand('copy');
            textArea.remove();
        }
    }

    showTooltip(element, message) {
        const tooltip = document.createElement('div');
        tooltip.textContent = message;
        tooltip.style.cssText = `
            position: absolute;
            background: #333;
            color: white;
            padding: 8px 12px;
            border-radius: 4px;
            font-size: 12px;
            white-space: nowrap;
            z-index: 1000;
            pointer-events: none;
            opacity: 0;
            transition: opacity 0.3s ease;
        `;
        
        document.body.appendChild(tooltip);
        
        const rect = element.getBoundingClientRect();
        tooltip.style.left = rect.left + 'px';
        tooltip.style.top = (rect.top - tooltip.offsetHeight - 8) + 'px';
        
        setTimeout(() => tooltip.style.opacity = '1', 10);
        setTimeout(() => {
            tooltip.style.opacity = '0';
            setTimeout(() => tooltip.remove(), 300);
        }, 2000);
    }

    // 公共方法：更新联系信息
    updateContactInfo(config) {
        if (config.phone) {
            const phoneElement = this.container.querySelector('.contact-value');
            if (phoneElement && phoneElement.textContent.includes('400-')) {
                phoneElement.textContent = config.phone;
            }
        }

        if (config.email) {
            const emailElements = this.container.querySelectorAll('.contact-value');
            emailElements.forEach(element => {
                if (element.textContent.includes('@')) {
                    element.textContent = config.email;
                }
            });
        }
    }

    // 公共方法：销毁组件
    destroy() {
        // 移除所有事件监听器
        const allLinks = this.container.querySelectorAll('a');
        allLinks.forEach(link => {
            link.removeEventListener('click', this.handleLinkClick);
            link.removeEventListener('mouseenter', this.handleLinkHover);
            link.removeEventListener('mouseleave', this.handleLinkLeave);
        });
    }
}

// 自动初始化
document.addEventListener('DOMContentLoaded', function() {
    const yeweiBoxes = document.querySelectorAll('.yewei-box');
    yeweiBoxes.forEach(box => {
        new YeweiBox(box);
    });
});

// 导出类供外部使用
if (typeof module !== 'undefined' && module.exports) {
    module.exports = YeweiBox;
}

// 全局访问
window.YeweiBox = YeweiBox;