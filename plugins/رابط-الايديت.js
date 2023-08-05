let handler  = async (m, { conn }) => { 
 let a='./Tamaki/Guru11.jpg'
 let teks = ` 
 ${pickRandom([`*﷽*

*––––––––– ·「🎥」· –––––––––––*

* ① قروب ايديت نشر يومي👍*

* ➁ عندك طلب كلم مشرف واحد*

* ➂ ممنوع طلب الإشراف 💗*

*➃ يمنع إزعاج الأعضاء في الخاص*

*––––––––– ·「🎥」· –––––––––––*
*⑤ رابط القروب :『 https://chat.whatsapp.com/CWMFflMoOyR9Y8a5zu4jPV 』*

*تابع لمملكة*

* 『☯︎ 𝐎𝐓𝐀𝐊𝐔「☠️」𝐊𝐈𝐍𝐆𝐃𝐎𝐌 ♕︎』* 
ً'`])} 
 `.trim() 
 conn.sendFile(m.chat, a,null,teks, m)}
 handler.customPrefix = /فرع الايديت|قروب الايديت/i 
 handler.command = new RegExp 
  
 export default handler 
  
 function pickRandom(list) { 
     return list[Math.floor(Math.random() * list.length)] 
 }
