let handler  = async (m, { conn }) => { 
 let a='./Tamaki/Guru9.jpg'
 let teks = ` 
 ${pickRandom([`*﷽*

*––––––––– ·「📷」· –––––––––––*

* ① قروب صور وانمي ومانغا وغيرها*

* ➁ نشر يومي صور و أفتارات و تطقيمات انمي و مانغا و غيره*

* ➂ ممنوع طلب الإشراف 💗*

*➃ يمنع إزعاج الاعضاء *

*––––––––– ·「📷」· –––––––––––*

* ⑤ رابط القروب :『 https://chat.whatsapp.com/LMiZh36TqPTDAEbDweXoYL 』*

*تابع لمملكة*

* 『☯︎ 𝐎𝐓𝐀𝐊𝐔「☠️」𝐊𝐈𝐍𝐆𝐃𝐎𝐌 ♕︎』* 
ً'`])} 
 `.trim() 
 conn.sendFile(m.chat, a,null,teks, m)}
 handler.customPrefix = /فرع الصور|قروب الصور/i 
 handler.command = new RegExp 
  
 export default handler 
  
 function pickRandom(list) { 
     return list[Math.floor(Math.random() * list.length)] 
 }
