let handler  = async (m, { conn }) => { 
 let a='./Tamaki/Guru3.jpg'
 let teks = ` 
 ${pickRandom([`*﷽*

*––––––––– ·「🗞」· –––––––––––*

* ① القروب خاص بنشر جميع اخبار الانمي*

* ➁ نشر جميع الاخبار بدون حرق*

* ➂ ممنوع طلب الإشراف 💗*

*➃ يمنع إزعاج الاعضاء *

*––––––––– ·「🗞」· –––––––––––*

* ⑤ رابط القروب :『 https://chat.whatsapp.com/GW1od1q3l8i4KLmpsZMHD6 』*

*تابع لمملكة*

* 『☯︎ 𝐎𝐓𝐀𝐊𝐔「☠️」𝐊𝐈𝐍𝐆𝐃𝐎𝐌 ♕︎』* 
ً'`])} 
 `.trim() 
 conn.sendFile(m.chat, a,null,teks, m)}
 handler.customPrefix = /فرع الاخبار|قروب الاخبار/i 
 handler.command = new RegExp 
  
 export default handler 
  
 function pickRandom(list) { 
     return list[Math.floor(Math.random() * list.length)] 
 }
