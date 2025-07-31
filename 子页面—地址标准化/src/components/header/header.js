/**
 * 网站头部组件交互功能
 */

document.addEventListener('DOMContentLoaded', function() {
    // 导航菜单选中状态
    const tabItems = document.querySelectorAll('.tab-default');
    
    tabItems.forEach(tab => {
        tab.addEventListener('click', function() {
            // 移除所有选中状态
            tabItems.forEach(item => {
                item.classList.remove('active');
            });
            
            // 添加当前选中状态
            this.classList.add('active');
        });
    });
    
    // 响应式菜单功能（如果需要在移动端添加汉堡菜单）
    function createMobileMenu() {
        const header = document.querySelector('.site-header');
        const nav = document.querySelector('.nav-item');
        
        if (header && nav) {
            // 创建汉堡菜单按钮
            const mobileMenuBtn = document.createElement('button');
            mobileMenuBtn.className = 'mobile-menu-btn';
            mobileMenuBtn.innerHTML = '<span></span><span></span><span></span>';
            header.querySelector('.container').insertBefore(mobileMenuBtn, header.querySelector('.header-rightgroup'));
            
            // 为汉堡菜单按钮添加点击事件
            mobileMenuBtn.addEventListener('click', function() {
                nav.classList.toggle('active');
                mobileMenuBtn.classList.toggle('active');
            });
            
            // 添加移动端菜单样式
            const style = document.createElement('style');
            style.textContent = `
                @media (max-width: 992px) {
                    .mobile-menu-btn {
                        display: block;
                        background: none;
                        border: none;
                        cursor: pointer;
                        padding: 10px;
                        margin-right: 10px;
                    }
                    
                    .mobile-menu-btn span {
                        display: block;
                        width: 25px;
                        height: 2px;
                        background-color: #2A3347;
                        margin: 5px 0;
                        transition: all 0.3s;
                    }
                    
                    .mobile-menu-btn.active span:nth-child(1) {
                        transform: rotate(45deg) translate(5px, 5px);
                    }
                    
                    .mobile-menu-btn.active span:nth-child(2) {
                        opacity: 0;
                    }
                    
                    .mobile-menu-btn.active span:nth-child(3) {
                        transform: rotate(-45deg) translate(7px, -7px);
                    }
                    
                    .nav-item {
                        display: block;
                        position: absolute;
                        top: 60px;
                        left: 0;
                        right: 0;
                        background-color: rgba(255, 255, 255, 0.95);
                        backdrop-filter: blur(24px);
                        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
                        max-height: 0;
                        overflow: hidden;
                        transition: max-height 0.3s;
                        z-index: 1000;
                    }
                    
                    .nav-item.active {
                        max-height: 300px;
                        padding: 10px 0;
                    }
                    
                    .nav-item {
                        flex-direction: column;
                        gap: 0;
                    }
                    
                    .tab-default {
                        width: 100%;
                        padding: 0 20px;
                    }
                    
                    .tab-text {
                        width: 100%;
                    }
                    
                    .text {
                        line-height: 3em;
                    }
                }
            `;
            document.head.appendChild(style);
        }
    }
    
    // 检测屏幕宽度，如果是移动端则创建移动端菜单
    if (window.innerWidth <= 992) {
        createMobileMenu();
    }
    
    // 窗口大小改变时检测是否需要创建移动端菜单
    let mobileMenuCreated = window.innerWidth <= 992;
    window.addEventListener('resize', function() {
        if (window.innerWidth <= 992 && !mobileMenuCreated) {
            createMobileMenu();
            mobileMenuCreated = true;
        }
    });
    
    // 登录和注册按钮点击事件
    const loginBtn = document.querySelector('.button-login');
    const registerBtn = document.querySelector('.button-register');
    
    if (loginBtn) {
        loginBtn.addEventListener('click', function() {
            console.log('登录按钮点击');
            // 这里可以添加登录功能或跳转到登录页面
        });
    }
    
    if (registerBtn) {
        registerBtn.addEventListener('click', function() {
            console.log('注册按钮点击');
            // 这里可以添加注册功能或跳转到注册页面
        });
    }
});