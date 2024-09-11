const { Client } = require('discord.js-selfbot-v13');
const client = new Client();

const token = process.env.DISCORD_TOKEN; // Token disimpan di Environment Vercel
const channelId = '1283337144215277650'; // Ganti dengan ID channel
const messageContent = 'Pesan otomatis dari selfbot'; // Ganti dengan pesan yang diinginkan

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}`);
    // Kirim pesan setiap 5 menit
    setInterval(() => {
        sendMessage();
    }, 1000); // 300000 ms = 5 menit
});

function sendMessage() {
    const channel = client.channels.cache.get(channelId);
    if (channel) {
        channel.send(messageContent)
            .then(() => console.log('Pesan dikirim!'))
            .catch(console.error);
    } else {
        console.log('Channel tidak ditemukan.');
    }
}

client.login(token);
