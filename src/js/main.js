
document.addEventListener("DOMContentLoaded", function(){
  window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        document.getElementById('flotante').classList.add('flotante-down');
      } else {
        document.getElementById('flotante').classList.remove('flotante-down');
      }
  });
});
