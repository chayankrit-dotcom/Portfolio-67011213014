/**
 * PORTFOLIO - SHARED FOOTER COMPONENT
 * จัดการเนื้อหา Footer ส่วนกลางสำหรับทุกหน้าเว็บเพจ
 * สามารถแก้ไขข้อมูล ข้อความ ลิงก์ และการออกแบบได้ที่ไฟล์นี้เพียงที่เดียว แล้วจะมีผลกับทุกหน้าทันที
 * Author: Chayan Boochayan
 */

const SHARED_FOOTER_HTML = `
<footer class="site-footer">
  <div class="container">
    <div class="row g-4 justify-content-between">
      <div class="col-lg-5">
        <div class="footer-brand">
          Chayan<span class="text-gradient">.Portfolio</span>
        </div>
        <p class="footer-desc">
          ผมเป็นนักศึกษาสาขาสื่อนฤมิต ที่มีความสนใจในการออกแบบเกม (Game Design) และการพัฒนาเกม (Game Development) รวมถึงสื่ออินเทอร์แอคทีฟ และสื่อดิจิทัลสร้างสรรค์อื่น ๆ โดยมุ่งเน้นการสร้างประสบการณ์ที่น่าตื่นเต้นและมีความหมายให้กับผู้ใช้
        </p>
        <div class="d-flex gap-2 mt-3">
          <a href="mailto:chayankrit@gmail.com" class="contact-social-btn" title="Email"><i class="fa-regular fa-envelope"></i></a>
          <a href="https://www.facebook.com/chayan.boochapan?locale=th_TH" target="_blank" rel="noopener noreferrer" class="contact-social-btn" title="Facebook"><i class="fa-brands fa-facebook-f"></i></a>
          <a href="https://www.instagram.com/k_r_i_t_._._kk/" target="_blank" rel="noopener noreferrer" class="contact-social-btn" title="Instagram"><i class="fa-brands fa-instagram"></i></a>
          <a href="https://github.com/chayankrit-dotcom" target="_blank" rel="noopener noreferrer" class="contact-social-btn" title="GitHub"><i class="fa-brands fa-github"></i></a>
        </div>
      </div>

      <div class="col-sm-6 col-lg-3">
        <div class="footer-heading">เมนูการนำทาง</div>
        <ul class="footer-links">
          <li><a href="index.html"><i class="fa-solid fa-angle-right"></i> หน้าแรก (Home)</a></li>
          <li><a href="education.html"><i class="fa-solid fa-angle-right"></i> ประวัติการศึกษา (Education)</a></li>
          <li><a href="activity.html"><i class="fa-solid fa-angle-right"></i> กิจกรรม & อบรม (Activity)</a></li>
          <li><a href="portfolio.html"><i class="fa-solid fa-angle-right"></i> ผลงานทั้งหมด (Portfolio)</a></li>
          <li><a href="contact.html"><i class="fa-solid fa-angle-right"></i> ติดต่อเรา (Contact)</a></li>
        </ul>
      </div>

      <div class="col-sm-6 col-lg-3">
        <div class="footer-heading">ติดต่อโดยตรง</div>
        <p class="text-muted small mb-2"><i class="fa-solid fa-location-dot me-2 text-gradient"></i> Sakon Nakhon, Thailand</p>
        <p class="text-muted small mb-2"><i class="fa-solid fa-envelope me-2 text-gradient"></i> chayankrit@gmail.com</p>
        <p class="text-muted small mb-0"><i class="fa-solid fa-phone me-2 text-gradient"></i> 062-802-4158</p>
      </div>
    </div>

    <div class="footer-bottom">
      <p class="mb-1">&copy; 2026 My Portfolio</p>
      <p class="mb-0 text-muted">Designed by <strong>Your Chayan Boochayan</strong></p>
    </div>
  </div>
</footer>
`;

// ฟังก์ชันสำหรับเรนเดอร์ Footer เข้าสู่ทุกหน้าโดยอัตโนมัติ
function renderSharedFooter() {
  const footerContainer = document.getElementById('global-footer-container');
  if (footerContainer) {
    footerContainer.innerHTML = SHARED_FOOTER_HTML;
  } else {
    // กรณีที่หน้าเว็บไม่มี container หรือใช้ <footer class="site-footer"> เดิม ให้แทนที่
    const existingFooter = document.querySelector('footer.site-footer');
    if (existingFooter) {
      existingFooter.outerHTML = SHARED_FOOTER_HTML;
    }
  }
}

// เรนเดอร์ทันทีเมื่อโหลดสคริปต์ หรือเมื่อ DOM พร้อม
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', renderSharedFooter);
} else {
  renderSharedFooter();
}

