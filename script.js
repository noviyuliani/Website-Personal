// Event listener untuk form 'contactForm'
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah pengiriman formulir secara default

    // Ambil nilai dari formulir
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // Tampilkan pesan konfirmasi
    alert(`Terima kasih, ${name}! Pesan Anda telah dikirim.\nSubjek: ${subject}\nPesan: ${message}`);

    // Reset formulir setelah pengiriman
    this.reset();
});