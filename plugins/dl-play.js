
import { youtubedl, youtubedlv2 } from '@bochilteam/scraper'
import yts from 'yt-search'
var handler = async (m, { conn, command, text, usedPrefix }) => {
  if (!text) throw `استخدم المثال ${usedPrefix}${command} naruto blue bird`
  await m.reply(wait)
  let search = await yts(text)
  let vid = search.videos[Math.floor(Math.random() * search.videos.length)]
  if (!search) throw 'لم يتم العثور على الفيديو، جرب عنوانا آخر'
  let { title, thumbnail, timestamp, views, ago, url } = vid
  let wm = 'تنزيل الصوت من فضلك انتظر'

  let captvid = `╭──── 〔 يوتيوب 〕 ─⬣
⬡ العنوان: ${title}
⬡ المدة: ${timestamp}
⬡ الراي: ${views}
⬡ التحميل: ${ago}
⬡ الرابط: ${url}
╰────────⬣`
  conn.sendButton(m.chat, `╭──── 〔 يوتيوب 〕 ─⬣
⬡ العنوان: ${title}
⬡ المدة: ${timestamp}
⬡ الراي: ${views}
⬡ التحميل: ${ago}
⬡ الرابط: ${url}
╰────────⬣`, author.trim(), await( await conn.getFile(thumbnail)).data, ['VIDEO', `${usedPrefix}ytmp4 ${url}`], false, { quoted: m, 'document': { 'url':'https://wa.me/917605902011' },
'mimetype': global.dpdf,
'fileName': `𝔾𝕌ℝ𝕌 ℙ𝕃𝔸𝕐𝔼ℝ`,
'fileLength': 666666666666666,
'pageCount': 666,contextInfo: { externalAdReply: { showAdAttribution: true,
mediaType:  2,
mediaUrl: `${url}`,
title: `AUDIO IS BEING SENT...`,
body: wm,
sourceUrl: 'http://wa.me/917605902011', thumbnail: await ( await conn.getFile(thumbnail)).data
  }
 } 
})
  
  //let buttons = [{ buttonText: { displayText: '📽VIDEO' }, buttonId: `${usedPrefix}ytv ${url} 360` }]
 //let msg = await conn.sendMessage(m.chat, { image: { url: thumbnail }, caption: captvid, footer: author, buttons }, { quoted: m })

  const yt = await youtubedlv2(url).catch(async _ => await youtubedl(url))
const link = await yt.audio['128kbps'].download()
  let doc = { 
  audio: 
  { 
    url: link 
}, 
mimetype: 'audio/mp4', fileName: `${title}`, contextInfo: { externalAdReply: { showAdAttribution: true,
mediaType:  2,
mediaUrl: url,
title: title,
body: wm,
sourceUrl: url,
thumbnail: await(await conn.getFile(thumbnail)).data                                                                     
                                                                                                                 }
                       }
  }

  return conn.sendMessage(m.chat, doc, { quoted: m })
	// return conn.sendMessage(m.chat, { document: { url: link }, mimetype: 'audio/mpeg', fileName: `${title}.mp3`}, { quoted: m})
	// return await conn.sendFile(m.chat, link, title + '.mp3', '', m, false, { asDocument: true })
}
handler.help = ['play'].map(v => v + ' <query>')
handler.tags = ['downloader']
handler.command = /^play|يوتيوب$/i

handler.exp = 0
handler.diamond = false

export default handler
