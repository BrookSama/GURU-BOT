
let war = global.maxwarn
let handler = async (m, { conn, text, args, groupMetadata, usedPrefix, command }) => {      
        let who
        if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false
        else who = m.chat
        if (!who) throw `✳️ منشن الشخص المراد اعطائه تحذير\n\n📌 مثال : ${usedPrefix + command} @user`
        if (!(who in global.db.data.users)) throw `✳️ لم يتم العثور على المستخدم في قاعدة البيانات الخاصة بي`
        let name = conn.getName(m.sender)
        let warn = global.db.data.users[who].warn
        if (warn < war) {
            global.db.data.users[who].warn += 1
            m.reply(`
⚠️ *تحذير للمستخدم* ⚠️

▢ *الادمن:* ${name}
▢ *المستخدم:* @${who.split`@`[0]}
▢ *عدد التحذيرات:* ${warn + 1}/${war}
▢ *السبب:* ${text}`, null, { mentions: [who] }) 
            m.reply(`
⚠️ *احذر* ⚠️
لقد تلقيت تحذيرا من الادمن

▢ *تحذير:* ${warn + 1}/${war} 
إذا تلقيت *${war}* تحذيرات ستتم إزالتك تلقائيا من المجموعة`, who)
        } else if (warn == war) {
            global.db.data.users[who].warn = 0
            m.reply(`⛔ تجاوز المستخدم ال *${war}* لذلك ستتم إزالة التحذيرات`)
            await time(3000)
            await conn.groupParticipantsUpdate(m.chat, [who], 'remove')
            m.reply(`♻️ لقد تمت إزالتك من المجموعة *${groupMetadata.subject}* لأنه تم تحذيرك *${war}* مرات`, who)
        }
}
handler.help = ['warn @user']
handler.tags = ['group']
handler.command = ['warn', 'تحذير'] 
handler.group = true
handler.admin = true
handler.botAdmin = true

export default handler

const time = async (ms) => {
            return new Promise(resolve => setTimeout(resolve, ms));
        }
