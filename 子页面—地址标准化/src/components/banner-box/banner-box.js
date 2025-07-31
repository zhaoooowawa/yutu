/**
 * Banner Box 组件交互功能
 */

document.addEventListener('DOMContentLoaded', function() {
    // 主按钮点击事件
    const primaryButton = document.querySelector('.button-primary');
    if (primaryButton) {
        primaryButton.addEventListener('click', function() {
            console.log('立即试用按钮点击');
            // 这里可以添加跳转到试用页面或打开试用表单的功能
        });
    }
    
    // 次要按钮点击事件
    const secondaryButton = document.querySelector('.button-sec');
    if (secondaryButton) {
        secondaryButton.addEventListener('click', function() {
            console.log('在线咨询按钮点击');
            // 这里可以添加跳转到咨询页面或打开咨询对话框的功能
        });
    }
    
    // 响应式调整
    function adjustBannerForMobile() {
        const bannerBox = document.querySelector('.banner-box');
        const bannerContent = document.querySelector('.banner-content');
        
        if (window.innerWidth <= 768) {
            // 移动端适配
            if (bannerContent) {
                bannerContent.style.width = '80%';
                bannerContent.style.left = '10%';
            }
        } else {
            // 恢复桌面端样式
            if (bannerContent) {
                bannerContent.style.width = '508px';
                bannerContent.style.left = '90px';
            }
        }
    }
    
    // 初始调用一次
    adjustBannerForMobile();
    
    // 监听窗口大小变化
    window.addEventListener('resize', adjustBannerForMobile);
});