const express = require('express');
const { Client } = require('discord.js-selfbot-v13');
const app = express();
const client = new Client();

const token = process.env.DISCORD_TOKEN; // Pastikan token ini diatur di environment variables platform
const channelId = '1283337144215277650'; // Ganti dengan ID channel yang sesuai
const messageContent = 'Pesan otomatis dari selfbot'; // Ganti dengan pesan yang diinginkan

// Bot Discord
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

client.login(token);

// Server HTTP untuk health check
app.get('/', (req, res) => {
    res.send('Bot is running');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
