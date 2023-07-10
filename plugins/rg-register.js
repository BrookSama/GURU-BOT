//import db from '../lib/database.js'

import { createHash } from 'crypto'
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async function (m, { conn, text, usedPrefix, command }) {
  let user = global.db.data.users[m.sender]
  let name2 = conn.getName(m.sender)
  if (user.registered === true) throw `✳️ أنت مسجل بالفعل\n\nهل تريد إعادة التسجيل؟\n\n 📌 استخدم هذا الأمر لإزالة سجلك \n*${usedPrefix}unreg* <Serial number>`
  if (!Reg.test(text)) throw `⚠️ تنسيق غير صحيح\n\n ✳️ استخدم هذا الأمر: *${usedPrefix + command} الاسم.العمر*\n📌مِثال : *${usedPrefix + command}* ${name2}.16`
  let [_, name, splitter, age] = text.match(Reg)
  if (!name) throw '✳️ لا يمكن أن يكون الاسم فارغا'
  if (!age) throw '✳️ لا يمكن أن يكون العمر فارغا'
  if (name.length >= 30) throw '✳️الاسم طويل جدا' 
  age = parseInt(age)
  if (age > 100) throw '👴🏻 واو جدي يريد أن يلعب دور البوت'
  if (age < 5) throw '🚼  هناك طفل يا جد جاجاجا'
  user.name = name.trim()
  user.age = age
  user.regTime = + new Date
  user.registered = true
  let sn = createHash('md5').update(m.sender).digest('hex')
  m.reply(`
┌─「 *مسجل* 」─
▢ *الرقم:* ${name}
▢ *العمر* : ${age} years
▢ *الرقم التسلسلي* :
${sn}
└──────────────

 *${usedPrefix}help* to see menu
`.trim())
}
handler.help = ['reg'].map(v => v + ' <name.age>')
handler.tags = ['rg']

handler.command = ['verify', 'reg', 'register', 'registrar', 'تسجيل'] 

export default handler

