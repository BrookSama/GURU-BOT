import fetch from 'node-fetch'

let handler = async function (m, { conn, text, usedPrefix }) {
  
let m2 =*––––––––– ·「☠️」· –––––––––––*

*مـنور/ه*  ✨

نقابة *『☯︎ 𝐀𝐍𝐈𝐌𝐄「☠️」𝐊𝐈𝐍𝐆𝐃𝐎𝐌 ♕︎』*  

تُـرحب بِـكم 
أكملوا الإستماره لِـ تُصبح فرداً مِن عائِلتنا ✨  



*- ①  بنت 🙍‍♀️ او ولد🙍‍♂️ :『』* 


*- ➁ لقبك ✍️  :『』* 


*- ➂ إسم العمل ⛩ : 『』* 


*- ➃ من طرف 👤 :  『』* 


*- ➄ أرسل/ي صورة للشخصية التي تم إختيارِها :*


 *–––––––––– ·「☠️」· –––––––––––*

_*مع تحيات إدارة :*_

*『☯︎ 𝐀𝐍𝐈𝐌𝐄「☠️」𝐊𝐈𝐍𝐆𝐃𝐎𝐌 ♕︎』* `

`
//const pp = await (await fetch('https://i.ibb.co/qMG1JPY/fg.jpg')).buffer()
    let pp = './Guru.jpg' 
    conn.sendButton(m.chat, m2, '▢ ᴳᵁᴿᵁ  ┃ ᴮᴼᵀ\n▢ Follow on Instagram\nhttps://www.instagram.com/asli_guru69\n', pp, [
      ['⏍ Info', `${usedPrefix}botinfo`],
      ['⌬ Groups', `${usedPrefix}gpguru`]
    ],m, rpyt)
   
}

handler.help = ['audios']
handler.tags = ['main']
handler.command = ['ترحيب', 'استمارة', 'تر'] 

export default handler