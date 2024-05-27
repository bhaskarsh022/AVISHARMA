document.addEventListener('DOMContentLoaded', () => {
    const tiles = document.querySelectorAll('.tile');

    tiles.forEach(tile => {
        tile.addEventListener('mouseover', () => {
            tile.style.backgroundColor = '#e0f7fa';
        });

        tile.addEventListener('mouseout', () => {
            tile.style.backgroundColor = '#fff';
        });
    });
});
