
let handler = async (m, { conn }) => {
  let res = await conn.groupRevokeInvite(m.chat)
  m.reply('✅ تم تحديث رابط المجموعة\n\n📌 الرابط الجديد:\nhttps://chat.whatsapp.com/' + res)
}
handler.help = ['resetlink']
handler.tags = ['group']
handler.command = ['revoke', 'resetlink', 'anularlink', 'اعادة-تعيين'] 
handler.group = true
handler.admin = true
handler.botAdmin = true

export default handler
