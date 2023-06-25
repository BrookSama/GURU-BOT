
import fg from 'api-dylux' 
import { tiktokdl, tiktokdlv2, tiktokdlv3 } from '@bochilteam/scraper'

let handler = async (m, { conn, text, args, usedPrefix, command}) => {
if (!args[0]) throw `✳️ ارسل رابط مقطع تيك توك مع الامر\n\n 📌 مثال : ${usedPrefix + command} https://vm.tiktok.com/ZMNqyusVD/?k=1`
if (!args[0].match(/tiktok/gi)) throw `❎ تحقق من أن الرابط من تيك توك`
m.react(rwait)

try {
    let p = await fg.tiktok(args[0]) 
    let te = `
┌─⊷ تيك توك
▢ *اسم المستخدم:* ${p.unique_id}
▢ *الوصف:* ${p.title}
▢ *المدة:* ${p.duration}
└───────────`
   conn.sendFile(m.chat, p.play, 'tiktok.mp4', te, m)
    m.react(done)
    } catch {  	
	const { author: { nickname }, video, description } = await tiktokdl(args[0])
         .catch(async _ => await tiktokdlv2(args[0]))
         .catch(async _ => await tiktokdlv3(args[0]))
    const url = video.no_watermark2 || video.no_watermark || 'https://tikcdn.net' + video.no_watermark_raw || video.no_watermark_hd
    if (!url) throw '❎ خطأ في تنزيل الفيديو'
     conn.sendFile(m.chat, url, 'fb.mp4', `
┌─⊷ *تيك توك معرف*
▢ *اسم المستخدم:* ${nickname} ${description ? `\n▢ *الوصف:* ${description}` : ''}
└───────────`, m)
m.react(done)
} 
    
}  
handler.help = ['tiktok']
handler.tags = ['dl']
handler.command = /^(tiktok|ttdl|tiktokdl|تيك)$/i
handler.diamond = true

export default handler
