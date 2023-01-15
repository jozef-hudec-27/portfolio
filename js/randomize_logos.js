const skillsWrapper = document.querySelector('.skills-list-wrapper');
const logos = document.querySelectorAll('.logo');

logos.forEach(logo => {
    let x = Math.floor(Math.random() * (skillsWrapper.offsetWidth - logo.clientWidth) / skillsWrapper.offsetWidth * 100);
    let y = Math.floor(Math.random() * (skillsWrapper.offsetHeight - logo.clientHeight) / skillsWrapper.offsetHeight * 100);
    
    logo.style.left = `${x}%`;
    logo.style.top = `${y}%`;

    // Initially rotate the logo
    let rotation = Math.random() * (45 - (-45)) + (-45);
    logo.style.transform = `rotate(${rotation}deg)`;

    // Make the logo rotate on hover and come back  on mouseout
    logo.addEventListener('mouseover', () => logo.style.transform = 'rotate(360deg)');
    logo.addEventListener('mouseout', () => logo.style.transform = `rotate(${rotation}deg)`);
});
