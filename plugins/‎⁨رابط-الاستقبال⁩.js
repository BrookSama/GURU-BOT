import fetch from 'node-fetch'

let handler = async function (m, { conn, text, usedPrefix }) {
  
let m2 =`*﷽*

*––––––––– ·「☠️」· –––––––––––*

* ① استقبال مملكة كينجدوم*

* ➁ ممنوع الارقام الوهمية*

* ➂ صنم لا تدخل*

*➃ ما تحترم القوانين لا تدخل*

*⑤ من طرف 「」*

*––––––––– ·「☠️」· –––––––––––*

* ⑥ رابط القروب :『 https://chat.whatsapp.com/IuDAdDRu9GtEStnEwsnmph 』*

*تابع لمملكة*

* 『☯︎ 𝐎𝐓𝐀𝐊𝐔「☠️」𝐊𝐈𝐍𝐆𝐃𝐎𝐌 ♕︎』*  `


//const pp = await (await fetch('https://i.ibb.co/qMG1JPY/fg.jpg')).buffer()
    let pp = './Tamaki/Guru1.jpg' 
    conn.sendFile(m.chat,pp,null, m2,null,m)
   
}

handler.help = ['audios']
handler.tags = ['main']
handler.command = ['استقبال','الاستقبال'] 

export default handler
