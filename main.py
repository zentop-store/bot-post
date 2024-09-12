import requests
import time
import os

# Informasi author dan peringatan
print("Author: MasD")
print("PERINGATAN: TIDAK UNTUK DIPERJUALBELIKAN\n")

# Meminta input ID channel dari pengguna
channel_id = input("Masukkan ID Channel: ").strip()

# Membaca pesan dari file pesan.txt
with open("pesan.txt", "r", encoding="utf-8") as f:
    message = f.read().strip()

# Membaca token dari file token.txt
with open("token.txt", "r") as f:
    authorization = f.readline().strip()

# Loop untuk mengirim pesan secara berulang
while True:
    payload = {
        'content': message
    }

    headers = {
        'Authorization': authorization,
        'Content-Type': 'application/json'
    }

    # Mengirim pesan ke channel Discord
    r = requests.post(f"https://discord.com/api/v9/channels/{channel_id}/messages", json=payload, headers=headers)
    
    # Memeriksa status pengiriman
    if r.status_code == 200:
        print(f"Pesan berhasil terkirim: {payload['content']}")
    else:
        print(f"Gagal mengirim pesan: {r.status_code}")

    # Tunggu 1 detik sebelum mengirim pesan berikutnya (ubah sesuai kebutuhan)
    time.sleep(1)
