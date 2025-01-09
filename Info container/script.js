document.querySelector('.info-target').addEventListener('mouseover', function() {
    const infoBox = document.querySelector('.info-box');
    infoBox.style.display = 'block';
    infoBox.style.opacity = '1';
  });
  
  document.querySelector('.info-target').addEventListener('mouseout', function() {
    const infoBox = document.querySelector('.info-box');
    infoBox.style.display = 'none';
    infoBox.style.opacity = '0';
  });