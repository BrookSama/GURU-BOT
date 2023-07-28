//import db from '../lib/database.js'

let handler = async (m, { conn, text, usedPrefix, command }) => {
    let poin = 300
    let reseqv = `✳️ اختر حجرة/ورق/مقص\n\nمثال : *${usedPrefix + command}* ورقة\n`
    if (!text) throw reseqv
    var astro = Math.random()

    if (astro < 0.34) {
        astro = 'حجرة'
    } else if (astro > 0.34 && astro < 0.67) {
        astro = 'مقص'
    } else {
        astro = 'ورقة'
    }


    if (text == astro) {
      global.db.data.users[m.sender].exp += 100
        m.reply(`▢ *تعادل*\n\n‣ انت : ${text}\n‣ تاماكي : ${astro}\n\n🎁 النقاط (±)100 XP`)
    } else if (text == 'حجرة') {
        if (astro == 'مقص') {
            global.db.data.users[m.sender].exp += 300
            m.reply(`▢ *الفائز* 🎊\n\n‣ انت : ${text}\n‣ تاماكي : ${astro}\n\n🎁 النقاط *+${poin} XP*`)
        } else {
          global.db.data.users[m.sender].exp -= 300
            m.reply(`▢ *الخاسر*\n\n‣ انت : ${text}\n‣ تاماكي : ${astro}\n\n النقاط *-${poin} XP*`)
        }
    } else if (text == 'مقص') {
        if (astro == 'ورقة') {
            global.db.data.users[m.sender].exp += 300
            m.reply(`▢ *الفائز* 🎊\n\n‣ انت : ${text}\n‣ تاماكي : ${astro}\n\n🎁 النقاط *+${poin} XP*`)
        } else {
          global.db.data.users[m.sender].exp -= 300
            m.reply(`▢ *الخاسر*\n\n‣ انت : ${text}\n‣ تاماكي : ${astro}\n\nالنقاط *-${poin} XP*`)
        }
    } else if (text == 'ورقة') {
        if (astro == 'حجرة') {
            global.db.data.users[m.sender].exp += 300
            m.reply(`▢ *الفائز* 🎊\n\n‣ انت : ${text}\n‣ تاماكي : ${astro}\n\n🎁 النقاط *+${poin} XP*`)
        } else {
          global.db.data.users[m.sender].exp -= 300
            m.reply(`▢ *انت خسرت*\n\n‣ انت : ${text}\n‣ تاماكي : ${astro}\n\nالنقاط *-${poin} XP*`)
        }
    } else {
        throw reseqv
    }
}
handler.help = ['ppt <rock/paper/scissors>']
handler.tags = ['game']
handler.command = ['ppt','لعبة'] 
handler.register = false

export default handler
