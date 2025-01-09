document.addEventListener('mousemove', function(e) {
const eyes = document.querySelectorAll('.eye');
eyes.forEach(eye => {
  const rect = eye.getBoundingClientRect();
  const eyeX = rect.left + rect.width / 2;
  const eyeY = rect.top + rect.height / 2;
  const angle = Math.atan2(e.clientY - eyeY, e.clientX - eyeX);
  const offsetX = Math.cos(angle) * 10;
  const offsetY = Math.sin(angle) * 10;
  eye.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
  });
});

document.querySelector('.Karobka').addEventListener('click', function() {
    const colors = ['#613d2b', '#ff5733', '#4caf50', '#2196f3', '#9c27b0'];
    this.style.background = colors[Math.floor(Math.random() * colors.length)];
});