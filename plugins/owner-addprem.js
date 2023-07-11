//import db from '../lib/database.js'

let handler = async (m, { conn, text, usedPrefix, command }) => {
let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false
    else who = m.chat
    let user = global.db.data.users[who]
    if (!who) throw `✳️ ضع رقم أو منشن شخصا ما\n\n📌 مثال : ${usedPrefix + command} @user`
if (global.prems.includes(who.split`@`[0])) throw '✳️ المستخدم المذكور بالفعل مميز'
global.prems.push(`${who.split`@`[0]}`)

conn.reply(m.chat, `
✅ المميزين

@${who.split`@`[0]} الآن أصبحت مستخدما مميزاً
┌───────────
▢ *الرقم:* ${user.name}
└───────────
`, m, { mentions: [who] })

}
handler.help = ['addprem <@tag>']
handler.tags = ['owner']
handler.command = ['addprem', 'addpremium', 'مميز'] 

handler.group = true
handler.rowner = true

export default handler
