const { Client } = require('discord.js-selfbot-v13');
const client = new Client();

const token = process.env.DISCORD_TOKEN; // Menggunakan environment variable dari Vercel
const channelId = '1283337144215277650'; // Ganti dengan ID channel
const messageContent = 'Hallo MasD!!!'; // Ganti dengan pesan yang diinginkan

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}`);
    sendMessage();
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

// Fungsi handler Vercel untuk menerima request HTTP
module.exports = async (req, res) => {
    try {
        await client.login(token);  // Login client Discord
        res.status(200).json({ message: 'Pesan dikirim melalui Discord selfbot!' });
    } catch (error) {
        console.error('Gagal login ke Discord:', error);
        res.status(500).json({ message: 'Gagal login ke Discord selfbot.' });
    }
};
