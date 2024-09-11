const { Client } = require('discord.js-selfbot-v13');
const client = new Client();

const token = process.env.DISCORD_TOKEN; // Token disimpan di Environment Vercel
const channelId = 'ID_CHANNEL'; // Ganti dengan ID channel
const messageContent = 'Pesan otomatis dari selfbot'; // Ganti dengan pesan yang diinginkan

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
    client.login(token).then(() => {
        res.status(200).json({ message: 'Pesan dikirim melalui Discord selfbot!' });
    }).catch(error => {
        console.error(error);
        res.status(500).json({ message: 'Gagal login ke Discord selfbot.' });
    });
};
