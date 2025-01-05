    
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.bottom >= 0 // Pastikan bagian bawah elemen tidak berada di luar viewport
        );
    }

    function checkScroll() {
        const elements = document.querySelectorAll('.fade-in');
        
        // Pastikan elemen ditemukan
        if (elements.length === 0) {
            console.error('Tidak ada elemen dengan kelas .fade-in yang ditemukan');
            return;
        }

        elements.forEach((el) => {
            if (isElementInViewport(el)) {
                el.classList.add('show');
            }
        });
    }

    // Optimasi agar checkScroll tidak terlalu sering dipanggil
    let timeout;
    function optimizedCheckScroll() {
        clearTimeout(timeout);
        timeout = setTimeout(checkScroll, 100); // Delay untuk mencegah panggilan berulang terlalu cepat
    }

    // Jalankan fungsi saat halaman discroll
    window.addEventListener('scroll', optimizedCheckScroll);

    // Jalankan fungsi saat halaman dimuat
    window.addEventListener('load', checkScroll);
