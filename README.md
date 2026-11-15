```markdown
# OmhcSilence / Baileys V10.07.98

Lightweight WhatsApp Web API, modded & maintained by OmhcSilence.

Versi modifikasi dari Baileys yang difokuskan pada performa ringan, stabilitas
koneksi, dan fitur tambahan siap pakai untuk kebutuhan bot WhatsApp modern.

---

## Features

- RichMessage — dukungan pesan interaktif (button, list, template, carousel)
- CustomPairing — pairing code fleksibel dengan kontrol penuh
- Lightweight — tanpa dependensi berat, startup cepat
- Auto Reconnect — handling koneksi dan session lebih stabil
- Extended Mods — patch dan utility tambahan dari OmhcSilence
- TypeScript First — type definition lengkap dan mudah di-extend

---

## Installation

```bash
npm install github:OmhcSilence/baileys
```

Alternatif package manager:

```bash
# pnpm
pnpm add github:OmhcSilence/baileys

# yarn
yarn add github:OmhcSilence/baileys
```

---

Quick Start

```typescript
import makeWASocket, { useMultiFileAuthState } from 'omhc-baileys'

const { state, saveCreds } = await useMultiFileAuthState('auth_info')

const sock = makeWASocket({
    auth: state,
    printQRInTerminal: false,
    // banner bisa dimatikan
    // showBanner: false,
})

sock.ev.on('creds.update', saveCreds)

sock.ev.on('messages.upsert', async ({ messages }) => {
    const msg = messages[0]
    if (!msg.message) return
    console.log('Pesan masuk:', msg.key.remoteJid)
})
```

---

Custom Pairing

Gunakan pairing code sebagai alternatif scan QR:

```typescript
const sock = makeWASocket({
    auth: state,
    printQRInTerminal: false,
})

const phoneNumber = '628xxxxxxxxxx' // tanpa + dan tanpa spasi

if (!sock.authState.creds.registered) {
    const code = await sock.requestPairingCode(phoneNumber)
    console.log('Pairing code:', code)
}
```

---

RichMessage

Contoh mengirim pesan interaktif:

```typescript
await sock.sendMessage(jid, {
    text: 'Pilih menu di bawah ini:',
    footer: 'OmhcSilence / Baileys',
    buttons: [
        { buttonId: 'menu_1', buttonText: { displayText: 'Menu 1' }, type: 1 },
        { buttonId: 'menu_2', buttonText: { displayText: 'Menu 2' }, type: 1 },
    ],
    headerType: 1,
})
```

Payload lengkap (list, template, carousel) tersedia pada folder examples/richmessage/.

---

Banner Console

Saat makeWASocket pertama kali dipanggil, banner ringkas akan tampil di console:

```
╭──────────────────────────────────────────────────────────────╮
│  OmhcSilence / Baileys V10.07.98                             │
│  Lightweight WhatsApp Web API — modded & maintained by Omhc… │
│                                                              │
│  ❏ Features   : RichMessage · CustomPairing · Extended Mods  │
│  ❏ Developer  : OmhcSilence                                  │
│  ❏ Channel    : @kiuchan11  ·  https://t.me/kiuchan11        │
│  ❏ Status     : Ready                                        │
╰──────────────────────────────────────────────────────────────╯
```

Nonaktifkan dengan:

```typescript
makeWASocket({ ..., showBanner: false })
```

---

Project Structure

```
.
├── src/
│   ├── Socket/
│   ├── Utils/
│   ├── Types/
│   └── banner.ts
├── examples/
├── package.json
└── README.md
```

---

Requirements

· Node.js >= 20
· TypeScript >= 5.x (opsional, untuk development)
· Koneksi internet stabil untuk pairing dan session

---

Development

```bash
# clone repo
git clone https://github.com/OmhcSilence/baileys.git
cd baileys

# install deps
npm install

# build
npm run build

# watch mode
npm run dev
```

---

Channel & Support

· Telegram Channel: @kiuchan11
· Developer: OmhcSilence
· Bug report / diskusi: buka issue pada repository

---

License

MIT License (c) 2024 OmhcSilence

Baileys adalah project open-source. Versi ini merupakan modifikasi pribadi
yang dikelola oleh OmhcSilence dan tidak berafiliasi resmi dengan WhatsApp Inc.

```