let handler  = async (m, { conn }) => { 
 let a='./Tamaki/Guru12.jpg'
 let teks = ` 
 ${pickRandom([`*فروع مملكة كينجدوم ☠️♥️*

╔════─﷽─════╗

*┇‌໋☠️ .  - إستقبال انمي⛩️*
*+120*

https://chat.whatsapp.com/IuDAdDRu9GtEStnEwsnmph

*┇☠️ .  - ستيكرات انمي و غيرها🍡*
*+900*

https://chat.whatsapp.com/DV9ME7ocNPJA03qXmezoeI

*┇‌໋☠️ .  - أخبار انمي و المانهاوا🗞️*
*+450*

https://chat.whatsapp.com/GW1od1q3l8i4KLmpsZMHD6

*┇‌໋☠️ .  - أفتارات و صور انمي و غيرها📷*
*+400*

https://chat.whatsapp.com/LMiZh36TqPTDAEbDweXoYL

*┇‌໋☠️ . - ايديت انمي و غيرها🎥*
*+400*

https://chat.whatsapp.com/CWMFflMoOyR9Y8a5zu4jPV

*┇‌໋☠️ . - نشر مغلق📇*
*+450*

https://chat.whatsapp.com/HvF7AJL2A3e35K5eiXwS6l

*┇‌໋☠️ . - نشر مفتوح📇*
*+600*

https://chat.whatsapp.com/HfjwYSK3gnYJ8CKN9FUTBu

*┇‌໋☠️ . - نشر مفتوح📇*
*+200*

https://chat.whatsapp.com/HTFzk1rwgpc4ipEUA3QiQk

*┇‌໋☠️ . - نشر مغلق📇*
*+50*

https://chat.whatsapp.com/KAeD3CIdiawI33l0iiyjmN

*––––––––– ·「☠️」· –––––––––––*

_*موقع المملكة*_

*『~ https://2u.pw/KR1vZ7Z ~』*

*––––––––– ·「☠️」· –––––––––––*

*⚠︎ من طرف 「تاماكي」*


              *_مع تحيات مملكة :_*

*『☯︎ 𝐎𝐓𝐀𝐊𝐔「☠️」𝐊𝐈𝐍𝐆𝐃𝐎𝐌 ♕︎』*`])} 
 `.trim() 
 conn.sendFile(m.chat, a,null,teks, m)}
 handler.customPrefix = /كامل فروعنا|فروعنا/i 
 handler.command = new RegExp 
  
 export default handler 
  
 function pickRandom(list) { 
     return list[Math.floor(Math.random() * list.length)] 
 }
