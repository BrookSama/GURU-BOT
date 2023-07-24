
import { youtubeSearch } from '@bochilteam/scraper'
import yts from 'yt-search'
let handler = async(m, { conn, usedPrefix, text, args, command }) => {

    if (!text) throw `✳️ أكتب اسم الأغنية\n\n*📌 مثال*\n*${usedPrefix + command}* Lil Peep hate my fuccn life `
    m.react('📀')
    let result = await yts(text)
    let ytres = result.all
    let listSections = []
	Object.values(ytres).map((v, index) => {
	listSections.push([`${index}┃ ${v.title}`, [
          ['🎶 MP3', `${usedPrefix}fgmp3 ${v.url}`, `▢ ⌚ *Duration:* ${v.timestamp}\n▢ 👀 *Views:* ${v.views}\n▢ 📌 *Títle* : ${v.title}\n▢ 📆 *Publiced:* ${v.ago}\n`],
          ['🎥 MP4', `${usedPrefix}fgmp4 ${v.url}`, `▢ ⌚ *Duratión:* ${v.timestamp}\n▢ 👀 *Views:* ${v.views}\n▢ 📌 *Títle* : ${v.title}\n▢ 📆 *Publiced:* ${v.ago}\n`]
        ]])
	})
	return conn.sendList(m.chat, '  ≡ *𝐓𝐀𝐌𝐀𝐊𝐈 MUSIC*🔎', `\n 📀 فيما يلي قائمة بالنتائج من :\n *${text}*`, igfg, `Click `, listSections, m)
}
handler.help = ['play2']
handler.tags = ['dl']
handler.command = ['play2', 'playvid2', 'playlist', 'playlista', 'يوتيوب2'] 

export default handler
