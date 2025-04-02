// ตรวจสอบธีมที่ผู้ใช้ตั้งค่า
const body = document.body;
function switchFavicon() {
    const favicon = document.getElementById('favicon');
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        // เปลี่ยนเป็น Favicon สำหรับ Dark Mode
        favicon.setAttribute('href','./images/favicon_invert.ico');
        body.classList.add("dark-mode");
    } else {
        favicon.setAttribute('href','./images/favicon.ico');
        body.classList.remove("dark-mode");
    }
}

// เรียกใช้ฟังก์ชันเมื่อโหลดเว็บไซต์
document.addEventListener('DOMContentLoaded', switchFavicon);

// ตรวจสอบการเปลี่ยนแปลงธีมแบบเรียลไทม์
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change',switchFavicon);

