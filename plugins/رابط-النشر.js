let handler  = async (m, { conn }) => { 
 let a='./Tamaki/Guru10.jpg'
 let teks = ` 
 ${pickRandom([`*﷽*

*––––––––– ·「📇」· –––––––––––*

* ① قروب نشر مغلق و مفتوح*

* ➁ نشر جميع الروابط الغير مخلة للآداب*

* ➂ ممنوع طلب الإشراف 💗*

*➃ يمنع إزعاج الاعضاء *

*➄ يمنع السبام او السوالف  *

*––––––––– ·「📇」· –––––––––––*

* الفرع المغلق :『 https://chat.whatsapp.com/HvF7AJL2A3e35K5eiXwS6l 』*

*––––––––– ·「📇」· –––––––––––*

* الفرع المفتوح :『 https://chat.whatsapp.com/HPbkiTODW4Z8r1ZyE0vr2D 』*

*––––––––– ·「📇」· –––––––––––*

* الفرع المفتوح :『 https://chat.whatsapp.com/HTFzk1rwgpc4ipEUA3QiQk 』*

*تابع لمملكة*

* 『☯︎ 𝐎𝐓𝐀𝐊𝐔「☠️」𝐊𝐈𝐍𝐆𝐃𝐎𝐌 ♕︎』*
ً'`])} 
 `.trim() 
 conn.sendFile(m.chat, a,null,teks, m)}
 handler.customPrefix = /فرع النشر|قروب النشر/i 
 handler.command = new RegExp 
  
 export default handler 
  
 function pickRandom(list) { 
     return list[Math.floor(Math.random() * list.length)] 
 }
