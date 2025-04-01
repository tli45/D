// Highlight the active navigation link based on current page
document.addEventListener("DOMContentLoaded", () => {
    const currentPath = window.location.pathname.split("/").pop();
    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(link => {
        const href = link.getAttribute("href");
        if (href === currentPath) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });
});

// Optional: Scroll to top smoothly on page load
window.scrollTo({ top: 0, behavior: "smooth" });

document.addEventListener('DOMContentLoaded', function() {
  const nextTopicBtn = document.getElementById('nextTopic');

  nextTopicBtn.addEventListener('click', function(e) {
    e.preventDefault();

    // 获取当前页面文件名
    let currentPage = window.location.pathname.split("/").pop().toLowerCase();
    let nextPage = 'next.html'; // 默认下一个页面，如果没有特别指定

    // 根据当前页面判断下一个页面
    if (currentPage === 'home.html') {
      // 从 home 页面跳转到 introduction 页面
      nextPage = 'introduction.html';
    } else if (currentPage === 'introduction.html') {
      // 从 introduction 跳转到 mechanics 页面
      nextPage = 'mechanics.html';
    } else if (currentPage === 'mechanics.html') {
      // 从 mechanics 跳转到下一个 topic（示例：topic3.html）
      nextPage = 'topic3.html';
    }
    // 如果需要其他页面的逻辑，可继续添加 else if 判断

    window.location.href = nextPage;
  });
});
