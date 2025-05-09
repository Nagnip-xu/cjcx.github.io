document.addEventListener('DOMContentLoaded', function() {
    // 获取所有菜单项
    const menuItems = document.querySelectorAll('.menu-item');
    
    // 为每个菜单项添加点击事件
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            // 获取点击的菜单项文本
            const menuText = this.querySelector('.text').textContent;
            
            // 如果点击的是"成绩查询"，则跳转到成绩查询结果图片页面
            if (menuText === "成绩查询") {
                window.location.href = "image-results.html";
                return;
            }
            
            // 如果点击的是"报名须知"且当前在成绩查询页面，则返回主页
            if (menuText === "报名须知" && (window.location.href.includes("results.html") || window.location.href.includes("image-results.html"))) {
                window.location.href = "index.html";
                return;
            }
            
            // 对于其他菜单项，只更新当前页面
            // 移除所有当前活动的菜单项
            menuItems.forEach(menuItem => {
                menuItem.classList.remove('active');
            });
            
            // 将点击的菜单项设置为活动状态
            this.classList.add('active');
            
            // 更新内容区标题
            document.querySelector('.content-header h2').textContent = menuText;
        });
    });
}); 