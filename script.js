/*
  Neo Digital Studio — konfigurasi utama
  PENTING: Ganti nomor WhatsApp di bawah dengan nomor milikmu.
  Format internasional tanpa +, spasi, atau tanda hubung.
  Contoh nomor Indonesia: 6281234567890
*/
const WHATSAPP_NUMBER = "6285706536628"; // GANTI DENGAN NOMOR WHATSAPP KAMU

document.addEventListener("DOMContentLoaded", () => {
  // Tahun copyright otomatis.
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  // Membuat semua tombol WhatsApp membuka chat dengan pesan sesuai konteks.
  document.querySelectorAll(".wa-link").forEach((link) => {
    const message = link.dataset.message || "Halo Neo Digital Studio, saya ingin bertanya tentang layanan digital.";
    const isPlaceholder = !WHATSAPP_NUMBER || WHATSAPP_NUMBER === "6281234567890";
    if (isPlaceholder) {
      link.href = "https://wa.me/?text=" + encodeURIComponent(message);
      link.title = "Ganti nomor WhatsApp di file script.js agar chat diarahkan langsung ke nomor bisnismu.";
    } else {
      link.href = "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(message);
    }
  });

  // Menu navigasi mobile.
  const menuToggle = document.getElementById("menuToggle");
  const mainNav = document.getElementById("mainNav");

  if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", () => {
      const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
      menuToggle.setAttribute("aria-expanded", String(!isOpen));
      mainNav.classList.toggle("open", !isOpen);
      menuToggle.setAttribute("aria-label", isOpen ? "Buka navigasi" : "Tutup navigasi");
    });

    mainNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        mainNav.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Buka navigasi");
      });
    });

    // Kembalikan navigasi ke mode desktop ketika lebar layar berubah.
    window.addEventListener("resize", () => {
      if (window.innerWidth > 640) {
        mainNav.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Buka navigasi");
      }
    });
  }
});
