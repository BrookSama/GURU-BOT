let handler  = async (m, { conn }) => { 
 let a='./Tamaki/Guru1.jpg'
 let teks = ` 
 ${pickRandom([`*﷽*

*––––––––– ·「☠️」· –––––––––––*

* ① استقبال مملكة كينجدوم*

* ➁ ممنوع الارقام الوهمية*

* ➂ صنم لا تدخل*

*➃ ما تحترم القوانين لا تدخل*

*⑤ من طرف 「」*

*––––––––– ·「☠️」· –––––––––––*

* ⑥ رابط القروب :『 https://chat.whatsapp.com/IuDAdDRu9GtEStnEwsnmph 』*

*تابع لمملكة*

* 『☯︎ 𝐎𝐓𝐀𝐊𝐔「☠️」𝐊𝐈𝐍𝐆𝐃𝐎𝐌 ♕︎』*  
ً'`])} 
 `.trim() 
 conn.sendFile(m.chat, a,null,teks, m)}
 handler.customPrefix = /فرع الاستقبال|قروب الاستقبال/i 
 handler.command = new RegExp 
  
 export default handler 
  
 function pickRandom(list) { 
     return list[Math.floor(Math.random() * list.length)] 
 }
