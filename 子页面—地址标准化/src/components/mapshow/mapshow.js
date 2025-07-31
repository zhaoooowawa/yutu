/**
 * MapShow 组件 JavaScript - 简化版本
 * 实现标签页切换功能、轮播动效和交互效果
 * 去掉 hover 状态，只保留自动轮播和点击选中功能
 */

class MapShow {
    constructor() {
        this.currentTab = 'zhongduan'; // 默认从首个tab开始
        this.tabData = {
            zhongduan: {
                title: '终端网点布局',
                description: '直观展示网点及用户分布，助力企业更好地维护和服务客户',
                tags: ['网点分析', '覆盖优化', '效率提升']
            },
            guanggao: {
                title: '广告位置管理',
                description: '借助等时圈、缓冲区等工具，广告投放位置及辐射范围一目了然',
                tags: ['投放分析', '人群分析', '潜力分析']
            },
            wuliu: {
                title: '物流仓储管理',
                description: '仓网布局可视呈现，飞线展示货物流向',
                tags: ['仓储规划', '路径优化', '成本控制']
            },
            fuwu: {
                title: '服务区划管理',
                description: '根据服务网点位置及订单热力分布，合理划分服务区域',
                tags: ['区域划分', '资源配置', '服务优化']
            },
            fengxian: {
                title: '风险区域监控',
                description: '一张图总览全局信息，助力宏观布局、规划决策',
                tags: ['风险监控', '预警系统', '安全保障']
            }
        };
        
        // 轮播相关属性
        this.tabOrder = ['zhongduan', 'guanggao', 'wuliu', 'fuwu', 'fengxian'];
        this.carouselTimer = null;
        this.progressTimer = null;
        this.carouselInterval = 3000; // 3秒轮播间隔
        this.progressUpdateInterval = 50; // 进度条更新间隔（毫秒）
        this.progressStartTime = 0;
        this.maxProgressWidth = 236; // 进度条最大宽度
        
        // 状态管理
        this.isCarouselActive = true; // 轮播是否激活
        this.isCarouselPaused = false; // 轮播是否暂停
        this.isUserClicked = false; // 用户是否点击过tab
        this.isHoveringMapArea = false; // 是否悬停在地图区域
        this.clickedTab = null; // 用户点击的tab
        
        this.init();
    }

    init() {
        this.bindEvents();
        this.updateContent(this.currentTab);
        this.startCarousel();
    }

    bindEvents() {
        // 绑定标签页点击事件
        const tabItems = document.querySelectorAll('.map-tab-item');
        const mapTab = document.querySelector('.map-tab');
        const mapShowMap = document.querySelector('.mapshow-map'); // 地图区域
        
        tabItems.forEach(item => {
            // 点击事件 - 用户主动选择tab
            item.addEventListener('click', (e) => {
                const tabId = item.getAttribute('data-tab');
                this.handleTabClick(tabId);
            });
        });

        // 绑定整个map-tab区域的鼠标离开事件
        if (mapTab) {
            mapTab.addEventListener('mouseleave', () => {
                this.handleTabAreaLeave();
            });
        }

        // 绑定mapshow-map区域的悬停事件（地图区域）
        if (mapShowMap) {
            mapShowMap.addEventListener('mouseenter', () => {
                this.isHoveringMapArea = true;
                this.pauseCarousel();
            });

            mapShowMap.addEventListener('mouseleave', () => {
                this.isHoveringMapArea = false;
                this.checkCarouselResume();
            });
        }

        // 绑定整个组件的鼠标离开事件
        const mapShow = document.querySelector('.mapshow');
        if (mapShow) {
            mapShow.addEventListener('mouseleave', () => {
                this.isHoveringMapArea = false;
                this.handleComponentLeave();
            });
        }

        // 绑定按钮点击事件
        this.bindButtonEvents();
    }

    // 处理tab点击事件
    handleTabClick(tabId) {
        this.isUserClicked = true;
        this.clickedTab = tabId;
        
        // 停止轮播并隐藏进度条
        this.stopCarousel();
        this.hideAllProgressBars();
        
        // 切换到点击的tab
        this.switchTab(tabId, true); // true表示是用户点击
        
        console.log('用户点击tab:', tabId);
    }

    // 处理tab区域离开事件
    handleTabAreaLeave() {
        if (this.isUserClicked) {
            // 用户点击过tab，从当前点击的tab开始恢复轮播
            this.currentTab = this.clickedTab;
            this.isUserClicked = false;
            this.clickedTab = null;
            
            // 恢复轮播状态
            this.restoreCarouselState();
            this.startCarousel();
        }
    }

    // 处理整个组件离开事件
    handleComponentLeave() {
        if (this.isUserClicked) {
            // 用户点击过tab，从当前点击的tab开始恢复轮播
            this.currentTab = this.clickedTab;
            this.isUserClicked = false;
            this.clickedTab = null;
        }
        
        // 恢复轮播状态
        this.restoreCarouselState();
        this.resumeCarousel();
    }

    // 切换标签页
    switchTab(tabId, isUserClick = false) {
        if (tabId === this.currentTab && !isUserClick) return;

        // 清除所有tab的active状态
        this.clearAllTabStates();

        // 设置新的active状态
        this.setTabActive(tabId);

        // 更新当前标签
        this.currentTab = tabId;

        // 更新内容
        this.updateContent(tabId);

        // 添加切换动画
        this.animateContentChange();
    }

    // 清除所有tab状态
    clearAllTabStates() {
        document.querySelectorAll('.map-tab-item').forEach(item => {
            item.classList.remove('active');
            const loadingLine = item.querySelector('.tab-loading-line');
            const tabText = item.querySelector('.tab-text');
            if (loadingLine) loadingLine.classList.remove('active');
            if (tabText) tabText.classList.remove('active');
        });
    }

    // 设置tab为激活状态
    setTabActive(tabId) {
        const tabElement = document.querySelector(`[data-tab="${tabId}"]`);
        if (tabElement) {
            tabElement.classList.add('active');
            const loadingLine = tabElement.querySelector('.tab-loading-line');
            const tabText = tabElement.querySelector('.tab-text');
            if (loadingLine) loadingLine.classList.add('active');
            if (tabText) tabText.classList.add('active');
        }
    }

    // 恢复轮播状态
    restoreCarouselState() {
        // 清除所有状态
        this.clearAllTabStates();
        
        // 恢复当前tab的active状态
        this.setTabActive(this.currentTab);
        
        // 恢复内容
        this.updateContent(this.currentTab);
        
        // 显示进度条
        this.showProgressBars();
    }

    // 隐藏所有进度条
    hideAllProgressBars() {
        const allProgressBars = document.querySelectorAll('.tab-loading-line');
        allProgressBars.forEach(bar => {
            bar.style.display = 'none';
        });
    }

    // 显示进度条
    showProgressBars() {
        const allProgressBars = document.querySelectorAll('.tab-loading-line');
        allProgressBars.forEach(bar => {
            bar.style.display = 'block';
        });
    }

    // 轮播相关方法
    startCarousel() {
        if (!this.isCarouselActive) return;
        
        this.stopCarousel(); // 先停止现有的轮播
        
        // 启动轮播定时器
        this.carouselTimer = setInterval(() => {
            if (!this.isCarouselPaused && !this.isUserClicked) {
                this.nextTab();
            }
        }, this.carouselInterval);
        
        // 启动进度条
        this.startProgressBar();
    }

    pauseCarousel() {
        this.isCarouselPaused = true;
    }

    resumeCarousel() {
        if (!this.isUserClicked) {
            this.isCarouselPaused = false;
        }
    }

    stopCarousel() {
        if (this.carouselTimer) {
            clearInterval(this.carouselTimer);
            this.carouselTimer = null;
        }
        if (this.progressTimer) {
            clearInterval(this.progressTimer);
            this.progressTimer = null;
        }
    }

    checkCarouselResume() {
        // 只有当鼠标不在地图区域且用户没有点击过时才恢复轮播
        if (!this.isHoveringMapArea && !this.isUserClicked) {
            this.resumeCarousel();
        }
    }

    nextTab() {
        const currentIndex = this.tabOrder.indexOf(this.currentTab);
        const nextIndex = (currentIndex + 1) % this.tabOrder.length;
        const nextTabId = this.tabOrder[nextIndex];
        
        // 切换标签
        this.switchTab(nextTabId);
        
        // 重置并重新开始进度条
        this.resetProgressBar();
        this.progressStartTime = Date.now();
    }

    // 进度条相关方法
    startProgressBar() {
        if (this.isUserClicked) return; // 用户点击后不显示进度条
        
        this.resetProgressBar();
        this.progressStartTime = Date.now();
        
        this.progressTimer = setInterval(() => {
            if (!this.isCarouselPaused && !this.isUserClicked) {
                this.updateProgressBar();
            }
        }, this.progressUpdateInterval);
    }

    resetProgressBar() {
        const allProgressBars = document.querySelectorAll('.tab-loading-line');
        allProgressBars.forEach(bar => {
            bar.style.width = '0px';
        });
    }

    updateProgressBar() {
        if (this.isUserClicked) return;
        
        const currentTab = document.querySelector(`[data-tab="${this.currentTab}"]`);
        if (!currentTab) return;

        const progressBar = currentTab.querySelector('.tab-loading-line');
        if (!progressBar) return;

        const elapsed = Date.now() - this.progressStartTime;
        const progress = Math.min(elapsed / this.carouselInterval, 1);
        const width = progress * this.maxProgressWidth;
        
        progressBar.style.width = `${width}px`;

        // 如果进度完成，准备切换到下一个标签
        if (progress >= 1) {
            this.resetProgressBar();
            this.progressStartTime = Date.now();
        }
    }

    // 内容更新方法
    updateContent(tabId) {
        const data = this.tabData[tabId];
        if (!data) return;

        // 更新标题
        const titleElement = document.querySelector('.content-title');
        if (titleElement) {
            titleElement.textContent = data.title;
        }

        // 更新描述
        const descriptionElement = document.querySelector('.content-description');
        if (descriptionElement) {
            descriptionElement.textContent = data.description;
        }

        // 更新标签
        const tagsContainer = document.querySelector('.content-tags');
        if (tagsContainer && data.tags) {
            tagsContainer.innerHTML = '';
            data.tags.forEach(tag => {
                const tagElement = document.createElement('div');
                tagElement.className = 'tag';
                tagElement.textContent = tag;
                tagsContainer.appendChild(tagElement);
            });
        }
    }

    animateContentChange() {
        const contentArea = document.querySelector('.map-detail-content');
        if (contentArea) {
            contentArea.style.opacity = '0.7';
            contentArea.style.transform = 'translateY(10px)';
            
            setTimeout(() => {
                contentArea.style.transition = 'all 0.3s ease';
                contentArea.style.opacity = '1';
                contentArea.style.transform = 'translateY(0)';
            }, 100);
        }
    }

    // 按钮事件绑定
    bindButtonEvents() {
        const btnPrimary = document.querySelector('.btn-primary');
        const btnSecondary = document.querySelector('.btn-secondary');

        if (btnPrimary) {
            btnPrimary.addEventListener('click', () => {
                this.handlePrimaryButton();
            });
        }

        if (btnSecondary) {
            btnSecondary.addEventListener('click', () => {
                this.handleSecondaryButton();
            });
        }
    }

    handlePrimaryButton() {
        console.log('查看更多模板 - 当前标签:', this.currentTab);
        this.showMessage('正在跳转到模板页面...');
    }

    handleSecondaryButton() {
        console.log('在线咨询 - 当前标签:', this.currentTab);
        this.showMessage('正在连接客服...');
    }

    showMessage(message) {
        const messageDiv = document.createElement('div');
        messageDiv.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: rgba(0, 0, 0, 0.8);
            color: white;
            padding: 12px 24px;
            border-radius: 4px;
            z-index: 10000;
            font-family: 'PingFang SC', sans-serif;
            font-size: 14px;
        `;
        messageDiv.textContent = message;
        document.body.appendChild(messageDiv);

        setTimeout(() => {
            document.body.removeChild(messageDiv);
        }, 2000);
    }

    // 公共方法
    getCurrentTab() {
        return this.currentTab;
    }

    setActiveTab(tabId) {
        if (this.tabData[tabId]) {
            this.handleTabClick(tabId);
        }
    }

    getTabData(tabId) {
        return this.tabData[tabId] || null;
    }

    updateTabData(tabId, newData) {
        if (this.tabData[tabId]) {
            this.tabData[tabId] = { ...this.tabData[tabId], ...newData };
            if (this.currentTab === tabId) {
                this.updateContent(tabId);
            }
        }
    }

    // 轮播控制公共方法
    enableCarousel() {
        this.isCarouselActive = true;
        this.isUserClicked = false;
        this.startCarousel();
    }

    disableCarousel() {
        this.isCarouselActive = false;
        this.stopCarousel();
    }

    setCarouselInterval(interval) {
        this.carouselInterval = interval;
        if (this.carouselTimer) {
            this.stopCarousel();
            this.startCarousel();
        }
    }
}

// 页面加载完成后初始化组件
document.addEventListener('DOMContentLoaded', () => {
    // 创建全局实例
    window.mapShowInstance = new MapShow();
    
    console.log('MapShow 组件已初始化 - 简化版本（无hover状态）');
});

// 导出类以供其他模块使用
if (typeof module !== 'undefined' && module.exports) {
    module.exports = MapShow;
}