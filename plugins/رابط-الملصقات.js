let handler  = async (m, { conn }) => { 
 let a='./Tamaki/Guru2.jpg'
 let teks = ` 
 ${pickRandom([`*﷽*

*––––––––– ·「🍡」· –––––––––––*

* ① قروب ستيكرات نشر يومي🍡*

* ➁ حمل تطبيق " sticker maker “ عشان تقدر تحمل الحزم*

* ➂ ممنوع طلب الإشراف 💗*

*➃ يمنع إزعاج الأعضاء في الخاص*

*––––––––– ·「🍡」· –––––––––––*
*⑤ رابط القروب :『 https://chat.whatsapp.com/DV9ME7ocNPJA03qXmezoeI 』*

*تابع لمملكة*

* 『☯︎ 𝐎𝐓𝐀𝐊𝐔「☠️」𝐊𝐈𝐍𝐆𝐃𝐎𝐌 ♕︎』* 
ً'`])} 
 `.trim() 
 conn.sendFile(m.chat, a,null,teks, m)}
 handler.customPrefix = /فرع الملصقات|قروب الملصقات/i 
 handler.command = new RegExp 
  
 export default handler 
  
 function pickRandom(list) { 
     return list[Math.floor(Math.random() * list.length)] 
 }
