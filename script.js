// ------------------ General Website Scripts (Preloader, Particles, Typing Effect) ------------------

document.addEventListener('DOMContentLoaded', () => {

    // ---------- Helper: Uniform Particle Generator ----------
    function createUniformParticles(canvas, count) {
        const particles = [];
        const cols = Math.ceil(Math.sqrt(count));
        const rows = Math.ceil(count / cols);
        const xSpacing = canvas.width / cols;
        const ySpacing = canvas.height / rows;

        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                if (particles.length < count) {
                    particles.push({
                        x: j * xSpacing + (Math.random() * xSpacing * 0.5),
                        y: i * ySpacing + (Math.random() * ySpacing * 0.5),
                        r: Math.random() * 2 + 1,
                        d: Math.random() * 2
                    });
                }
            }
        }
        return particles;
    }

    // ---------- Preloader with Particles ----------
    const overlay = document.getElementById('loading-overlay');
    const preloaderCanvas = document.getElementById('preloader-canvas');
    if (overlay && preloaderCanvas) {
        const ctx = preloaderCanvas.getContext('2d');
        preloaderCanvas.width = overlay.offsetWidth;
        preloaderCanvas.height = overlay.offsetHeight;

        const particles = createUniformParticles(preloaderCanvas, 80); // more particles

        let angle = 0;
        function drawParticles() {
            ctx.clearRect(0, 0, preloaderCanvas.width, preloaderCanvas.height);
            particles.forEach(p => {
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2, false);
                ctx.fillStyle = 'rgba(212,175,55,0.7)';
                ctx.fill();
                ctx.closePath();
            });
            updateParticles();
        }

        function updateParticles() {
            angle += 0.01;
            particles.forEach(p => {
                p.y += Math.cos(angle + p.d) * 0.3;
                p.x += Math.sin(angle) * 0.3;
                if (p.x > preloaderCanvas.width) p.x = 0;
                if (p.x < 0) p.x = preloaderCanvas.width;
                if (p.y > preloaderCanvas.height) p.y = 0;
            });
        }

        function animateParticles() {
            drawParticles();
            requestAnimationFrame(animateParticles);
        }
        animateParticles();

        window.addEventListener('load', () => {
            setTimeout(() => {
                overlay.style.opacity = '0';
                setTimeout(() => overlay.style.display = 'none', 600);
            }, 2000);
        });
    }

    // ---------- Typing Effect ----------
    const typingTextElement = document.getElementById('typing-text');
    if (typingTextElement) {
        const phrases = typingTextElement.dataset.phrases?.split('|') || ["🚀 Welcome to CRACK IT!", "🚀 Explore Programs", "🚀 Find Your Dream Internship"];
        let phraseIndex = 0,
            charIndex = 0,
            isDeleting = false;

        function typeLoop() {
            const current = phrases[phraseIndex];
            typingTextElement.textContent = current.substring(0, charIndex);

            if (!isDeleting && charIndex < current.length) {
                charIndex++;
                setTimeout(typeLoop, 100);
            } else if (isDeleting && charIndex > 0) {
                charIndex--;
                setTimeout(typeLoop, 50);
            } else {
                isDeleting = !isDeleting;
                if (!isDeleting) phraseIndex = (phraseIndex + 1) % phrases.length;
                setTimeout(typeLoop, 1000);
            }
        }
        typeLoop();
    }

    // ---------- Background Particles ----------
    const bgCanvas = document.getElementById('background-canvas');
    if (bgCanvas) {
        const ctx = bgCanvas.getContext('2d');

        function resizeCanvas() {
            bgCanvas.width = window.innerWidth;
            bgCanvas.height = window.innerHeight;
        }
        resizeCanvas();
        window.addEventListener('resize', () => {
            resizeCanvas();
            bgParticles.length = 0; // reset
            bgParticles.push(...createUniformParticles(bgCanvas, 150)); // regenerate
        });

        const bgParticles = createUniformParticles(bgCanvas, 150);

        let bgAngle = 0;
        function drawBgParticles() {
            ctx.clearRect(0, 0, bgCanvas.width, bgCanvas.height);
            bgParticles.forEach(p => {
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2, false);
                ctx.fillStyle = 'rgba(212,175,55,0.7)';
                ctx.fill();
                ctx.closePath();
            });
            updateBgParticles();
        }

        function updateBgParticles() {
            bgAngle += 0.01;
            bgParticles.forEach(p => {
                p.y += Math.cos(bgAngle + p.d) + 0.5;
                p.x += Math.sin(bgAngle) * 0.5;
                if (p.x > bgCanvas.width) p.x = 0;
                if (p.x < 0) p.x = bgCanvas.width;
                if (p.y > bgCanvas.height) p.y = 0;
            });
        }

        function animateBgParticles() {
            drawBgParticles();
            requestAnimationFrame(animateBgParticles);
        }
        animateBgParticles();
    }

});

// ------------------ Internship Page Specific Logic ------------------

document.addEventListener('DOMContentLoaded', () => {
    const internshipCards = document.querySelectorAll('.internship-card');
    const clickSound = document.getElementById('click-sound');

    internshipCards.forEach(card => {
        card.addEventListener('click', () => {
            if (clickSound) {
                clickSound.play();
            }

            const cardId = card.dataset.id;
            const detailsBlock = document.getElementById(`details-${cardId}`);
            
            // Check if the clicked block is already visible
            const isVisible = detailsBlock.classList.contains('show');
            
            // Hide all other blocks
            document.querySelectorAll('.detail-content').forEach(block => {
                block.classList.remove('show');
            });

            // If the clicked block was not visible, show it
            if (!isVisible) {
                detailsBlock.classList.add('show');
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".hackathon-card");
    const details = document.querySelectorAll(".detail-content");
    const clickSound = document.getElementById("click-sound");

    cards.forEach(card => {
        card.addEventListener("click", () => {
            if (clickSound) {
                clickSound.currentTime = 0;
                clickSound.play();
            }

            const id = card.getAttribute("data-id");
            const target = document.getElementById(`details-${id}`);

            details.forEach(d => {
                if (d === target) {
                    d.style.display = d.style.display === "block" ? "none" : "block";
                } else {
                    d.style.display = "none";
                }
            });
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".resource-card");
    const details = document.querySelectorAll(".detail-content");
    const clickSound = document.getElementById("click-sound");

    cards.forEach(card => {
        card.addEventListener("click", () => {
            if (clickSound) {
                clickSound.currentTime = 0;
                clickSound.play();
            }

            const id = card.getAttribute("data-id");
            const target = document.getElementById(`details-${id}`);

            details.forEach(d => {
                if (d === target) {
                    d.style.display = d.style.display === "block" ? "none" : "block";
                } else {
                    d.style.display = "none"; 
                }
            });

            if (target.style.display === "block") {
                target.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        });
    });
});
