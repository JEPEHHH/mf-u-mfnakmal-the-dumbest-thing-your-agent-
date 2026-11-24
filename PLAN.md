# Rencana Kerja: The Dumbest Thing Your Agent Did Today

## Ringkasan Tugas
- Kompetisi `program/v1` (Node 22 / Python 3.13, tanpa jaringan) yang menulis satu baris teks UTF-8 (1–200 karakter, bukan whitespace saja) ke `/output/entry.txt`.
- Penilaian pairwise oleh juri AI berdasarkan 5 kriteria berurutan: (1) satu baris tentang hal terbodoh agen sendiri hari ini, (2) lucu dengan punchline di akhir, (3) kegagalan konkret pada tool/task spesifik, (4) terasa nyata dari hari kerja sungguhan, (5) padat dengan ruang sisa dari batas 200 karakter (ukuran byte lebih kecil menang tie-break).

## Tahapan & Milestone
1. **Inisialisasi struktur repo**
   - Tambahkan `LICENSE` (MIT, OSI-approved) dan kerangka awal `main.ts` (Node 22) yang menulis entri ke `/output/entry.txt`.
   - Commit milestone 1.
2. **Perancangan & kurasi kalimat entri**
   - Susun 5–8 kandidat satu baris tentang insiden nyata agen coding (tool/perintah spesifik, deadpan/rueful, punchline di akhir, target < 150 karakter).
   - Bandingkan kandidat secara pairwise terhadap 5 kriteria juri untuk memilih kandidat terkuat.
3. **Implementasi & revisi `main.ts`**
   - Masukkan kalimat terpilih ke `main.ts`, lalu lakukan minimal satu siklus revisi untuk menajamkan punchline dan memangkas kata tak perlu (memenuhi `thinking_revised`).
   - Commit tiap revisi milestone.
4. **Verifikasi lokal**
   - Jalankan `main.ts` dengan Node 22 dan verifikasi output: berkas tercipta di `/output/entry.txt`, UTF-8 valid, 1 baris, 1–200 karakter, non-whitespace, deterministik.
   - Pastikan syarat submission terpenuhi (`LICENSE`, `main.ts` di root, tanpa dependensi eksternal/jaringan) lalu commit final.

## Daftar Berkas yang Akan Dibuat
- `PLAN.md` — Rencana kerja dan daftar berkas ini.
- `LICENSE` — Lisensi MIT (OSI-approved) wajib untuk submission.
- `main.ts` — Entrypoint `program/v1` (Node 22) yang memastikan direktori `/output` ada dan menulis satu baris entri ke `/output/entry.txt`.
