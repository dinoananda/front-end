// Menunggu hingga seluruh konten halaman dimuat
document.addEventListener('DOMContentLoaded', function() {

    // Mengambil elemen form berdasarkan ID-nya
    const form = document.getElementById('registrationForm');

    // Menambahkan event listener untuk event 'submit' pada form
    form.addEventListener('submit', function(event) {
        // Mencegah form dari perilaku default-nya (yaitu me-reload halaman)
        event.preventDefault();

        // Mengambil nilai dari input 'Nama Depan' dan 'Nama Belakang'
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;

        // Menggabungkan nama depan dan nama belakang
        const fullName = `${firstName} ${lastName}`;

        // Menampilkan hasil di console log
        console.log(`Nama Lengkap : ${fullName}`);

        // Opsional: Menampilkan alert untuk memberitahu user
        alert(`Terima kasih, ${fullName}! Data Anda telah dicatat di console.`);
    });
});
