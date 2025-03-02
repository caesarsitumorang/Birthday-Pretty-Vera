// Variables
let currentPage = 1;
const totalPages = 4;

// Heart animation function
function createHearts() {
    const heartCount = 15; // Tambah jumlah heart lebih banyak
    
    for (let i = 0; i < heartCount; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.classList.add('heart');
            
            // Random position
            const leftPos = Math.random() * 100;
            const animDuration = 2 + Math.random() * 5;
            
            heart.style.left = leftPos + 'vw';
            heart.style.bottom = '-20px';
            heart.style.animation = `floatHeart ${animDuration}s linear forwards`;
            
            document.body.appendChild(heart);
            
            // Remove heart after animation completes
            setTimeout(() => {
                heart.remove();
            }, animDuration * 1000);
            
        }, i * 150); // Muncul lebih cepat
    }
}

// Start heart animations at regular intervals
setInterval(createHearts, 1500); // Lebih sering muncul

// Navigation functions
function nextPage() {
    if (currentPage < totalPages) {
        document.getElementById('page' + currentPage).classList.remove('active');
        currentPage++;
        document.getElementById('page' + currentPage).classList.add('active');
        
        // If navigating to page 4, start calculations
        if (currentPage === 4) {
            calculateTimeStats();
            startCountdown();
        }
    }
    if (document.getElementById('page3').classList.contains('active')) {
        createAnimatedElements();
    }
    if (document.getElementById('page2').classList.contains('active')) {
        createAnimatedElements2();
    }
    if (document.getElementById('page4').classList.contains('active')) {
        createAnimatedElements4();
    }
}

function prevPage() {
    if (currentPage > 1) {
        document.getElementById(`page${currentPage}`).classList.remove("active");
        currentPage--;
        document.getElementById(`page${currentPage}`).classList.add("active");
    }
}

// Form validation
function validateForm() {
    const name = document.getElementById('name').value.toLowerCase();
    const age = parseInt(document.getElementById('age').value);
    const nameError = document.getElementById('nameError');
    const ageError = document.getElementById('ageError');
    
    let isValid = true;
    
    // Check name (case insensitive)
    if (name !== "vera rizki yuniar") {
        nameError.style.display = 'block';
        isValid = false;
    } else {
        nameError.style.display = 'none';
    }
    
    // Check age
    if (age !== 21) {
        ageError.style.display = 'block';
        isValid = false;
    } else {
        ageError.style.display = 'none';
    }
    
    // If valid, proceed to next page
    if (isValid) {
        // Set values for display on next page
        document.getElementById('nameDisplay').textContent = document.getElementById('name').value;
        document.getElementById('ageDisplay').textContent = age;
        nextPage();
    }
}

// Time calculations
function calculateTimeStats() {
    const birthDate = new Date('2004-03-03');
    const today = new Date();
    
    // Hitung jumlah tahun, bulan, dan hari yang telah dilewati
    let yearsPassed = today.getFullYear() - birthDate.getFullYear();
    let monthsPassed = (today.getMonth() - birthDate.getMonth()) + (yearsPassed * 12);
    let daysPassed = Math.floor((today - birthDate) / (1000 * 60 * 60 * 24));

    // Sesuaikan jika ulang tahun belum terjadi di tahun ini
    let birthdayThisYear = new Date(today.getFullYear(), birthDate.getMonth(), birthDate.getDate());
    if (today < birthdayThisYear) {
        yearsPassed--;
    }

    // Hitung hari menuju ulang tahun berikutnya
    let nextBirthday = new Date(today.getFullYear(), birthDate.getMonth(), birthDate.getDate());
    if (today > nextBirthday) {
        nextBirthday.setFullYear(today.getFullYear() + 1);
    }
    const countdown = Math.ceil((nextBirthday - today) / (1000 * 60 * 60 * 24));

    document.getElementById('daysPassed').innerText = daysPassed;
    document.getElementById('monthsPassed').innerText = monthsPassed;
    document.getElementById('yearsPassed').innerText = yearsPassed;
    document.getElementById('countdown').innerText = countdown;
}

calculateTimeStats();


// Countdown timer
function updateCountdown() {
    const targetDate = new Date(2026, 2, 3, 0, 0, 0);
    const now = new Date();

    const timeDifference = targetDate - now;

    if (timeDifference <= 0) {
        document.getElementById('daysLeft').textContent = '00';
        document.getElementById('hours').textContent = '00';
        document.getElementById('minutes').textContent = '00';
        document.getElementById('seconds').textContent = '00';
        return;
    }

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    document.getElementById('daysLeft').textContent = String(days).padStart(2, '0');
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}

setInterval(updateCountdown, 1000);


// Function to create animated elements for page 3
function createAnimatedElements() {
    const page3 = document.getElementById('page3');
    
    // Create butterflies
    for (let i = 0; i < 6; i++) {
        const butterfly = document.createElement('div');
        butterfly.className = 'butterfly';
        
        // Random positions
        const left = Math.random() * 90 + 5; // 5-95%
        const top = Math.random() * 70 + 5; // 5-75%
        
        butterfly.style.left = `${left}%`;
        butterfly.style.top = `${top}%`;
        
        // Random animation duration and delay
        const duration = 15 + Math.random() * 10; // 15-25s
        const delay = Math.random() * 5; // 0-5s
        
        butterfly.style.animation = `flyButterfly ${duration}s ease-in-out ${delay}s infinite`;
        
        page3.appendChild(butterfly);
    }
    
    // Create flowers
    for (let i = 0; i < 5; i++) {
        const flower = document.createElement('div');
        flower.className = 'flower';
        
        // Random positions
        const left = Math.random() * 90 + 5; // 5-95%
        const top = Math.random() * 75 + 15; // 15-90%
        
        flower.style.left = `${left}%`;
        flower.style.top = `${top}%`;
        
        // Random animation duration and delay
        const duration = 8 + Math.random() * 4; // 8-12s
        const delay = Math.random() * 3; // 0-3s
        
        flower.style.animation = `floatFlower ${duration}s ease-in-out ${delay}s infinite`;
        
        page3.appendChild(flower);
    }
    
    // Create sparkles
    for (let i = 0; i < 10; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        
        // Random positions
        const left = Math.random() * 95; // 0-95%
        const top = Math.random() * 95; // 0-95%
        
        sparkle.style.left = `${left}%`;
        sparkle.style.top = `${top}%`;
        
        // Random animation duration and delay
        const duration = 2 + Math.random() * 2; // 2-4s
        const delay = Math.random() * 2; // 0-2s
        
        sparkle.style.animation = `twinkle ${duration}s ease-in-out ${delay}s infinite`;
        
        page3.appendChild(sparkle);
    }
}

function createAnimatedElements2() {
    const page3 = document.getElementById('page2');
    
    // Create butterflies
    for (let i = 0; i < 6; i++) {
        const butterfly = document.createElement('div');
        butterfly.className = 'butterfly';
        
        // Random positions
        const left = Math.random() * 90 + 5; // 5-95%
        const top = Math.random() * 70 + 5; // 5-75%
        
        butterfly.style.left = `${left}%`;
        butterfly.style.top = `${top}%`;
        
        // Random animation duration and delay
        const duration = 15 + Math.random() * 10; // 15-25s
        const delay = Math.random() * 5; // 0-5s
        
        butterfly.style.animation = `flyButterfly ${duration}s ease-in-out ${delay}s infinite`;
        
        page3.appendChild(butterfly);
    }
    
    // Create flowers
    for (let i = 0; i < 5; i++) {
        const flower = document.createElement('div');
        flower.className = 'flower';
        
        // Random positions
        const left = Math.random() * 90 + 5; // 5-95%
        const top = Math.random() * 75 + 15; // 15-90%
        
        flower.style.left = `${left}%`;
        flower.style.top = `${top}%`;
        
        // Random animation duration and delay
        const duration = 8 + Math.random() * 4; // 8-12s
        const delay = Math.random() * 3; // 0-3s
        
        flower.style.animation = `floatFlower ${duration}s ease-in-out ${delay}s infinite`;
        
        page3.appendChild(flower);
    }
    
    // Create sparkles
    for (let i = 0; i < 10; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        
        // Random positions
        const left = Math.random() * 95; // 0-95%
        const top = Math.random() * 95; // 0-95%
        
        sparkle.style.left = `${left}%`;
        sparkle.style.top = `${top}%`;
        
        // Random animation duration and delay
        const duration = 2 + Math.random() * 2; // 2-4s
        const delay = Math.random() * 2; // 0-2s
        
        sparkle.style.animation = `twinkle ${duration}s ease-in-out ${delay}s infinite`;
        
        page3.appendChild(sparkle);
    }
}

function createAnimatedElements4() {
    const page3 = document.getElementById('page4');
    
    // Create butterflies
    for (let i = 0; i < 6; i++) {
        const butterfly = document.createElement('div');
        butterfly.className = 'butterfly';
        
        // Random positions
        const left = Math.random() * 90 + 5; // 5-95%
        const top = Math.random() * 70 + 5; // 5-75%
        
        butterfly.style.left = `${left}%`;
        butterfly.style.top = `${top}%`;
        
        // Random animation duration and delay
        const duration = 15 + Math.random() * 10; // 15-25s
        const delay = Math.random() * 5; // 0-5s
        
        butterfly.style.animation = `flyButterfly ${duration}s ease-in-out ${delay}s infinite`;
        
        page3.appendChild(butterfly);
    }
    
    // Create flowers
    for (let i = 0; i < 5; i++) {
        const flower = document.createElement('div');
        flower.className = 'flower';
        
        // Random positions
        const left = Math.random() * 90 + 5; // 5-95%
        const top = Math.random() * 75 + 15; // 15-90%
        
        flower.style.left = `${left}%`;
        flower.style.top = `${top}%`;
        
        // Random animation duration and delay
        const duration = 8 + Math.random() * 4; // 8-12s
        const delay = Math.random() * 3; // 0-3s
        
        flower.style.animation = `floatFlower ${duration}s ease-in-out ${delay}s infinite`;
        
        page3.appendChild(flower);
    }
    
    // Create sparkles
    for (let i = 0; i < 10; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        
        // Random positions
        const left = Math.random() * 95; // 0-95%
        const top = Math.random() * 95; // 0-95%
        
        sparkle.style.left = `${left}%`;
        sparkle.style.top = `${top}%`;
        
        // Random animation duration and delay
        const duration = 2 + Math.random() * 2; // 2-4s
        const delay = Math.random() * 2; // 0-2s
        
        sparkle.style.animation = `twinkle ${duration}s ease-in-out ${delay}s infinite`;
        
        page3.appendChild(sparkle);
    }
}