let handler = async (m, { conn, text, participants, isAdmin, isOwner, groupMetadata }) => {
    let users = participants.map(u => u.id).filter(v => v !== conn.user.jid)
    m.reply(`☠️ قروب : *${groupMetadata.subject}*\n☠️ الاعضاء : *${participants.length}*${text ? `\n☠️ الرسالة : ${text}\n` : ''}\n *منشن جماعي*\n` + users.map(v => '☠️ @' + v.replace(/@.+/, '')).join`\n` + '\n𝐓𝐀𝐌𝐀𝐊𝐈 𝐁𝐎𝐓', null, {
        mentions: users
    })
}

handler.help = ['tagall']
handler.tags = ['group']
handler.command = ['tagall' ,'منشن']
handler.admin = true
handler.group = true

export default handler
