document.addEventListener('DOMContentLoaded', function() {
    fetchFinancialData();

    document.getElementById('shuttleForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const tanggal = document.getElementById('tanggal').value;
        const namaPemain = document.getElementById('namaPemain').value;
        const jumlahKok = document.getElementById('jumlahKok').value;
        google.script.run.addShuttleUsage(tanggal, namaPemain, jumlahKok);
        fetchFinancialData();
    });

    document.getElementById('paymentForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const tanggal = document.getElementById('paymentTanggal').value;
        const namaPemain = document.getElementById('paymentNamaPemain').value;
        const jumlahPembayaran = document.getElementById('jumlahPembayaran').value;
        google.script.run.addPayment(tanggal, namaPemain, jumlahPembayaran);
        fetchFinancialData();
    });
});

function fetchFinancialData() {
    google.script.run.withSuccessHandler(function(shuttleData) {
        // Process and display shuttleData and paymentData
        // Perform calculations and update HTML
    }).getShuttleUsage();

    google.script.run.withSuccessHandler(function(paymentData) {
        // Process and display paymentData
        // Perform calculations and update HTML
    }).getPayments();
}
