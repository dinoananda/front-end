// Menunggu hingga seluruh konten halaman dimuat
document.addEventListener('DOMContentLoaded', function() {


    // Mengambil elemen form berdasarkan ID-nya
    const form = document.getElementById('nilaiForm');


    // Menambahkan event listener untuk event 'submit' pada form
    form.addEventListener('submit', function(event) {
        // Mencegah form dari perilaku default-nya (yaitu me-reload halaman)
        event.preventDefault();


        // Mengambil nilai dari setiap input
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const nilaiAngka = parseFloat(document.getElementById('nilaiAngka').value);


        // Menggabungkan nama depan dan nama belakang
        const fullName = `${firstName} ${lastName}`;


        // Fungsi untuk menentukan nilai huruf berdasarkan nilai angka
        function getNilaiHuruf(nilai) {
            if (nilai >= 85) {
                return 'A';
            } else if (nilai >= 75) {
                return 'B';
            } else if (nilai >= 65) {
                return 'C';
            } else if (nilai >= 50) {
                return 'D';
            } else {
                return 'E';
            }
        }


        // Mendapatkan nilai huruf
        const nilaiHuruf = getNilaiHuruf(nilaiAngka);


        // Menampilkan hasil di console log
        console.log(`Nama Lengkap : ${fullName}`);
        console.log(`Nilai Angka : ${nilaiAngka}`);
        console.log(`Nilai Huruf : ${nilaiHuruf}`);


        // Opsional: Menampilkan alert untuk memberitahu user
        alert(`Halo, ${fullName}! Hasil penilaian Anda telah dicatat di console.`);
    });
});
