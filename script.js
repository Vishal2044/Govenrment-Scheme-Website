const planets = document.querySelectorAll('.planet');
const popup = document.getElementById('popup');

const planetInfo = {
    'Mercury': 'Mercury is the closest planet to the Sun and the smallest planet in our solar system.',
    'Venus': 'Venus is the second planet from the Sun and has a thick, toxic atmosphere.',
    'Earth': 'Earth is the third planet from the Sun and the only known planet with life.',
    'Mars': 'Mars is the fourth planet from the Sun and is known as the Red Planet.',
    'Jupiter': 'Jupiter is the fifth planet from the Sun and the largest in our solar system.',
    'Saturn': 'Saturn is the sixth planet from the Sun and is known for its prominent ring system.',
    'Uranus': 'Uranus is the seventh planet from the Sun and has a unique sideways rotation.',
    'Neptune': 'Neptune is the eighth planet from the Sun and is known for its deep blue color.'
};

planets.forEach(planet => {
    planet.addEventListener('mouseover', (e) => {
        const planetName = e.target.dataset.planet;
        popup.innerText = planetInfo[planetName];
        popup.style.display = 'block';
        popup.style.top = `${e.clientY + 10}px`;
        popup.style.left = `${e.clientX + 10}px`;
        e.target.closest('.orbit').style.animationPlayState = 'paused';
    });

    planet.addEventListener('mouseout', (e) => {
        popup.style.display = 'none';
        e.target.closest('.orbit').style.animationPlayState = 'running';
    });
});