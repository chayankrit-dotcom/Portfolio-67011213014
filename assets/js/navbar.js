/**
 * PORTFOLIO - SHARED NAVBAR COMPONENT
 * จัดการ Navigation Bar ส่วนกลางสำหรับทุกหน้าเว็บเพจ
 * สามารถแก้ไขโครงสร้าง โลโก้ เมนู และปุ่มได้ที่ไฟล์นี้เพียงที่เดียว แล้วจะมีผลกับทุกหน้าทันที
 * Author: Chayan Boochayan
 */

const SHARED_NAVBAR_HTML = `
<nav class="navbar navbar-expand-lg navbar-custom">
  <div class="container">
    <a class="navbar-brand-logo" href="index.html">
      <span>Chayan<span class="brand-text-accent">.Portfolio</span></span>
    </a>

    <!-- Right mobile buttons: Theme Toggle + Menu Toggler -->
    <div class="d-flex align-items-center gap-2 order-lg-3">
      <button class="theme-toggle-btn" id="themeToggleBtn" aria-label="Toggle dark/light theme" title="สลับธีม สว่าง / มืด">
        <i class="fa-solid fa-sun" id="themeIcon"></i>
      </button>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNavbar" aria-controls="mainNavbar" aria-expanded="false" aria-label="Toggle navigation">
        <i class="fa-solid fa-bars-staggered"></i>
      </button>
    </div>

    <!-- Navigation Links -->
    <div class="collapse navbar-collapse justify-content-center order-lg-2" id="mainNavbar">
      <ul class="navbar-nav gap-lg-1 my-3 my-lg-0">
        <li class="nav-item">
          <a class="nav-link nav-link-custom" href="index.html">
            <i class="fa-solid fa-house-chimney me-1 opacity-75"></i> Home
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link nav-link-custom" href="education.html">
            <i class="fa-solid fa-graduation-cap me-1 opacity-75"></i> Education
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link nav-link-custom" href="activity.html">
            <i class="fa-solid fa-calendar-check me-1 opacity-75"></i> Activity
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link nav-link-custom" href="portfolio.html">
            <i class="fa-solid fa-palette me-1 opacity-75"></i> Portfolio
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link nav-link-custom" href="contact.html">
            <i class="fa-solid fa-paper-plane me-1 opacity-75"></i> Contact
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>
`;

// ฟังก์ชันเรนเดอร์ Navbar เข้าสู่หน้าเว็บ
function renderSharedNavbar() {
  const navContainer = document.getElementById('global-navbar-container');
  if (navContainer) {
    navContainer.innerHTML = SHARED_NAVBAR_HTML;
  } else {
    const existingNav = document.querySelector('nav.navbar-custom');
    if (existingNav) {
      existingNav.outerHTML = SHARED_NAVBAR_HTML;
    }
  }

  // ไฮไลต์เมนูตามหน้าปัจจุบัน (Active Page)
  updateActiveNavLink();
}

// ไฮไลต์ Active Nav Link
function updateActiveNavLink() {
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-link-custom');
  
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

// เรนเดอร์ทันทีเมื่อโหลดสคริปต์ หรือเมื่อ DOM พร้อม
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', renderSharedNavbar);
} else {
  renderSharedNavbar();
}

