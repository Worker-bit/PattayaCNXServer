document.addEventListener('DOMContentLoaded', function() {
  var btn = document.getElementById('showContentBtn');
  var main = document.getElementById('mainContent');
  var backBtn = document.getElementById('backToHomeBtn');
  var modal = document.getElementById('myModal');
  var key = 'showContentTime';
  var now = Date.now();
  var oneHour = 60 * 60 * 1000;

  // ตรวจสอบ localStorage
  var lastShow = localStorage.getItem(key);
  if (lastShow && now - parseInt(lastShow, 10) < oneHour) {
    if (main) main.style.display = 'block';
    if (btn) btn.style.display = 'none';
    if (modal) modal.style.display = 'none';
  } else {
    if (btn && main) {
      btn.onclick = function() {
        main.style.display = 'block';
        btn.style.display = 'none';
        modal.style.display = 'none';
        localStorage.setItem(key, Date.now());
      }
    }
  }

  // ปุ่มกลับไปหน้าแรก
  if (backBtn) {
    backBtn.onclick = function() {
      localStorage.removeItem('showContentTime');
      location.reload();
    }
  }
});

// dropdown
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}
// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (var i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
