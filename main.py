import requests
import time
import os

print("Author: MasD")
print("PERINGATAN: TIDAK UNTUK DIPERJUALBELIKAN\n")

channel_id = "1283337144215277650"
authorization = os.getenv("DISCORD_TOKEN")

if authorization is None:
    print("Token tidak ditemukan!")
    exit()

with open("pesan.txt", "r", encoding="utf-8") as f:
    message = f.read().strip()

while True:
    payload = {'content': message}
    headers = {
        'Authorization': authorization,
        'Content-Type': 'application/json'
    }

    r = requests.post(f"https://discord.com/api/v9/channels/{channel_id}/messages", json=payload, headers=headers)
    
    if r.status_code == 200:
        print(f"Pesan berhasil terkirim: {payload['content']}")
    else:
        print(f"Gagal mengirim pesan: {r.status_code}")

    time.sleep(1)
