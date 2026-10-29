
const form = document.getElementById("formSewa");
const hasil = document.getElementById("hasil");
const dataSewa = document.getElementById("dataSewa");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const nama = document.getElementById("nama").value.trim();
    const pilihan = document.getElementById("jenisPS");
    const harga = Number(pilihan.value);
    const durasi = Number(document.getElementById("durasi").value);

    if (nama === "" || durasi < 1 || durasi > 24 ||
        !Number.isInteger(durasi)) {
        hasil.textContent = "Periksa kembali data penyewaan!";
        return;
    }

    const jenisPS = pilihan.options[pilihan.selectedIndex]
        .text.split(" - ")[0];

    const total = harga * durasi;

    hasil.textContent = "Total biaya " + nama + ": Rp" +
        total.toLocaleString("id-ID");

    if (dataSewa.querySelector("td[colspan='4']")) {
        dataSewa.innerHTML = "";
    }

    const baris = document.createElement("tr");

    [nama, jenisPS, durasi + " jam",
     "Rp" + total.toLocaleString("id-ID")].forEach(function(teks) {
        const sel = document.createElement("td");
        sel.textContent = teks;
        baris.appendChild(sel);
    });

    dataSewa.appendChild(baris);
    form.reset();
});
