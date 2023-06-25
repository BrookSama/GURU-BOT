
let handler = async (m, { conn, text, usedPrefix, command, args, participants, isOwner }) => {
	
   if (!isOwner) return conn.sendButton(m.chat, `*Invite bot to a group*\n\nHello @${m.sender.split('@')[0]}\nyou can rent the bot to join a group\n\n_more info click on the button_`.trim(), igfg, null, [
       ['Alquilar', `${usedPrefix}buyprem`]] , m, { mentions: [m.sender] })
	
  let time = global.db.data.users[m.sender].lastjoin + 86400000
  let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i
  let delay = time => new Promise(res => setTimeout(res, time))
 
  let name = m.sender 
  let [_, code] = text.match(linkRegex) || []
  if (!args[0]) throw `✳️ أرسل رابط المجموعة\n\n 📌 مثال:\n *${usedPrefix + command}* <linkwa> <dias>\n\n_الرقم هو الأيام التي سيكون فيها الروبوت في المجموعة_` 
  if (!code) throw `✳️ Link invalid`
  if (!args[1]) throw `📌 عدد الأيام المفقودة\n\n مثال:\n *${usedPrefix + command}* <linkwa> 2`
  if (isNaN(args[1])) throw `✳️ الرقم فقط، يمثل الأيام التي سيكون فيها الروبوت في المجموعة!`
  let owbot = global.owner[1] 
  m.reply(`😎 انتظر 3 ثوان، سأنضم إلى المجموعة`)
  await delay(3000)
  try {
  let res = await conn.groupAcceptInvite(code)
  let b = await conn.groupMetadata(res)
  let d = b.participants.map(v => v.id)
  let member = d.toString()
  let e = await d.filter(v => v.endsWith(owbot + '@s.whatsapp.net'))
  let nDays = 86400000 * args[1]  
  let now = new Date() * 1
  if (now < global.db.data.chats[res].expired) global.db.data.chats[res].expired += nDays
  else global.db.data.chats[res].expired = now + nDays
  if (e.length) await m.reply(`✅ لقد انضممت بنجاح إلى المجموعة \n\n≡ معلومات المجموعة \n\n *اسم :* ${await conn.getName(res)}\n\nسيخرج الروبوت تلقائيا بعد \n\n${msToDate(global.db.data.chats[res].expired - now)}`)
 
 if (e.length) await conn.reply(res, `🏮 مرحبا يا رفاق

@${owbot} إنه المالك إذا كان لديك أي شك
تمت دعوتي من قبل *${m.name}*`, m, {
    mentions: d
     }).then(async () => {
     await delay(7000)
     }).then( async () => {
     await conn.reply(res, `حسنا، استرخوا جميعا 🤭`, 0)
     await conn.reply(global.owner[1]+'@s.whatsapp.net', `≡ *دعوة جماعية للدعوة*\n\n@${m.sender.split('@')[0]} لقد دعا *${conn.user.name}* إلى المجموعة\n\n*${await conn.getName(res)}*\n\n*الايدي* : ${res}\n\n📌 الرابط : ${args[0]}\n\nسيخرج الروبوت تلقائيا بعد \n\n${msToDate(global.db.data.chats[res].expired - now)}`, null, {mentions: [m.sender]})
     })
     if (!e.length) await conn.reply(global.owner[1]+'@s.whatsapp.net', `≡ *دعوة إلى مجموعة.*\n\n@${m.sender.split('@')[0]} لقد دعا *${conn.user.name}* إلى المجموعة\n\n*${await conn.getName(res)}*\n\n*الايدي* : ${res}\n\n📌 الرابط : ${args[0]}\n\nسيخرج الروبوت تلقائيا بعد\n\n ${msToDate(global.db.data.chats[res].expired - now)}`, null, {mentions: [m.sender]})
     if (!e.length) await m.reply(`✳️ قم بدعوة الروبوت بنجاح إلى المجموعة\n\n${await conn.getName(res)}\n\nسيخرج الروبوت تلقائيا بعد *${msToDate(global.db.data.chats[res].expired - now)}*`).then(async () => {
     let mes = `هاي 👋🏻
     
*${conn.user.name}* هي واحدة من روبوتات WhatsApp متعددة الأجهزة المصممة باستخدام Node.js, *${conn.user.name}* just invited by *${m.name}*

لرؤية قائمة البوت اكتب

${usedPrefix}help
@${conn.user.jid.split('@')[0]} سيخرج تلقائيا بعد \n\n${msToDate(global.db.data.chats[res].expired - now)}`
  await conn.sendButton(res, mes, igfg, null, [[`✆ Owner`, `${usedPrefix}fgowner`], [`⦙☰ Menu`, `${usedPrefix}help`]], m, {
        mentions: d
         })
     })
    } catch (e) {
      conn.reply(global.owner[1]+'@s.whatsapp.net', e)
      throw `✳️ آسف، انضم الروبوت إلى المجموعة`
      }
}
handler.help = ['join <chat.whatsapp.com> <dias>']
handler.tags = ['owner']
handler.command = ['join', 'invite','انضم'] 

//handler.owner = true

export default handler

function msToDate(ms) {
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [d, ' *الايام*\n ', h, ' *الساعات*\n ', m, ' *الدقائق*\n ', s, ' *الثواني* '].map(v => v.toString().padStart(2, 0)).join('')
}
