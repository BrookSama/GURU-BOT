import fetch from 'node-fetch'

let handler = async function (m, { conn, text, usedPrefix }) {
  
let m2 =`*﷽*

*––––––––– ·「🗞」· –––––––––––*

* ① القروب خاص بنشر جميع اخبار الانمي*

* ➁ نشر جميع الاخبار بدون حرق*

* ➂ ممنوع طلب الإشراف 💗*

*➃ يمنع إزعاج الاعضاء *

*––––––––– ·「🗞」· –––––––––––*

* ⑤ رابط القروب :『 https://chat.whatsapp.com/GW1od1q3l8i4KLmpsZMHD6 』*

*تابع لمملكة*

* 『☯︎ 𝐎𝐓𝐀𝐊𝐔「☠️」𝐊𝐈𝐍𝐆𝐃𝐎𝐌 ♕︎』*`


//const pp = await (await fetch('https://i.ibb.co/qMG1JPY/fg.jpg')).buffer()
    let pp = './Guru3.jpg' 
    conn.sendFile(m.chat,pp,null, m2,null,m)
   
}

handler.help = ['audios']
handler.tags = ['main']
handler.command = ['اخبار','الاخبار'] 

export default handler
