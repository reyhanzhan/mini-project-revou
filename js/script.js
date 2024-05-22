document.getElementById('triangle-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const base = parseFloat(document.getElementById('base').value);
    const height = parseFloat(document.getElementById('height').value);
    const side1 = parseFloat(document.getElementById('side1').value);
    const side2 = parseFloat(document.getElementById('side2').value);
    const side3 = parseFloat(document.getElementById('side3').value);

    if (isNaN(base) || isNaN(height) || isNaN(side1) || isNaN(side2) || isNaN(side3)) {
        alert("Harap masukkan nilai yang valid.");
        return;
    }

    const area = 0.5 * base * height;
    const perimeter = side1 + side2 + side3;

    document.getElementById('area-result').textContent = `Luas Segitiga: ${area}`;
    document.getElementById('perimeter-result').textContent = `Keliling Segitiga: ${perimeter}`;
});
