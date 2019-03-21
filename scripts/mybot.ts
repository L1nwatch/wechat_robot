import { Wechaty } from 'wechaty'

const WECHATY_PUPPET_PADCHAT_TOKEN = 'puppet_padchat_579a8b3a5707e432'

const puppet = 'wechaty-puppet-padchat' // 使用ipad 的方式接入。

const puppetOptions = {
    token: WECHATY_PUPPET_PADCHAT_TOKEN,
}

const bot = new Wechaty({
    puppet,
    puppetOptions,
})

// 设置完成

// 运行 wechaty
bot
    .on('scan', (qrcode, status) => console.log(`Scan QR Code to login: ${status}\nhttps://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(qrcode)}`))
    .on('login',            user => console.log(`User ${user} logined`))
    .on('message',       message => console.log(`Message: ${message}`))
    .start()