function volume_sphere() {
	const radius = document.getElementById("radius").value;
  const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
  document.getElementById("volume").value = volume.toFixed(2);
    //Write your code here
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
