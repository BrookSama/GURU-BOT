import fetch from 'node-fetch'

let handler = async function (m, { conn, text, usedPrefix }) {
  
let m2 =`*﷽*

*––––––––– ·「🍡」· –––––––––––*

* ① قروب ستيكرات نشر يومي🍡*

* ➁ حمل تطبيق " sticker maker “ عشان تقدر تحمل الحزم*

* ➂ ممنوع طلب الإشراف 💗*

*➃ يمنع إزعاج الأعضاء في الخاص*

*––––––––– ·「🍡」· –––––––––––*
*⑤ رابط القروب :『 https://chat.whatsapp.com/DV9ME7ocNPJA03qXmezoeI 』*

*تابع لمملكة*

* 『☯︎ 𝐎𝐓𝐀𝐊𝐔「☠️」𝐊𝐈𝐍𝐆𝐃𝐎𝐌 ♕︎』* `


//const pp = await (await fetch('https://i.ibb.co/qMG1JPY/fg.jpg')).buffer()
    let pp = 'Guru2.jpg' 
    conn.sendFile(m.chat, m2,null,m)
   
}

handler.help = ['audios']
handler.tags = ['main']
handler.command = ['ستيكرات','الاستيكرات'] 

export default handler
