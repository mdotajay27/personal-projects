const generateBtn = document.getElementById('generateBtn');
const paletteDiv = document.getElementById('palette');
const savedPalettesDiv = document.getElementById('savedPalettes');

let savedPalettes = JSON.parse(localStorage.getItem('savedPalettes')) || [];

function generatePalette() {
    paletteDiv.innerHTML = '';
    const palette = [];
    for (let i = 0; i < 5; i++) {
        const color = '#' + Math.floor(Math.random() * 16777215).toString(16);
        const colorDiv = document.createElement('div');
        colorDiv.className = 'divColor';
        colorDiv.style.backgroundColor = color;
        paletteDiv.appendChild(colorDiv);
        palette.push(color);
    }

    const saveBtn = document.createElement('button');
    saveBtn.textContent = 'Save Palette';
    saveBtn.onclick = () => savePalette(palette);
    paletteDiv.appendChild(saveBtn);
}

function savePalette(palette) {
    savedPalettes.push(palette);
    localStorage.setItem('savedPalettes', JSON.stringify(savedPalettes));
    displaySavedPalettes();
}

function displaySavedPalettes() {
    savedPalettesDiv.innerHTML = '';
    savedPalettes.forEach(palette => {
        const paletteContainer = document.createElement('div');
        paletteContainer.className = 'divSavedPalette';
        palette.forEach(color => {
            const colorDiv = document.createElement('div');
            colorDiv.className = 'divSavedColor';
            colorDiv.style.backgroundColor = color;
            paletteContainer.appendChild(colorDiv);
        });
        savedPalettesDiv.appendChild(paletteContainer);
    });
}

generateBtn.addEventListener('click', generatePalette);
displaySavedPalettes();