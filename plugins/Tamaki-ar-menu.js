import fetch from 'node-fetch'

let handler = async function (m, { conn, text, usedPrefix }) {
  
let m2 =`–––––––– ·「تاماكي أوامر」·

*① ضع قبل كل أمر /*

*➁ يمنع استخدام البوت بشكل خاطئ*

*––––––––– ·「أوامر المطور」·*

* ♕︎┃☠️›┊إنضم*

* ♕︎┃☠️›┊غادر*

* ♕︎┃☠️›┊اسم*

* ♕︎┃☠️›┊بلوك*

* ♕︎┃☠️›┊انبلوك*

* ♕︎┃☠️›┊عام*

* ♕︎┃☠️›┊خاص*

*––––––––– ·「أوامر القروب」·*

* ♕︎┃☠️›┊طرد*

* ♕︎┃☠️›┊اضافة*

* ♕︎┃☠️›┊ترقي*

* ♕︎┃☠️›┊خفض*

* ♕︎┃☠️›┊منشن*

* ♕︎┃☠️›┊لمنشن*

* ♕︎┃☠️›┊مخفي*

* ♕︎┃☠️›┊الرابط*

* ♕︎┃☠️›┊حذف*

* ♕︎┃☠️›┊ تحذير*

*––––––––– ·「أوامر الأعضاء」·*

* ♕︎┃☠️›┊فيديو*

* ♕︎┃☠️›┊ملصقل*

* ♕︎┃☠️›┊اغنية*

* ♕︎┃☠️›┊بينترست*

* ♕︎┃☠️›┊يوتيوب*

* ♕︎┃☠️›┊تطقيمة*

* ♕︎┃☠️›┊ تحذيرات*

* ♕︎┃☠️›┊لصورة*


* ♕︎┃☠️›┊لفيديو*

* ♕︎┃☠️›┊تيك*

* ♕︎┃☠️›┊رتب*

* ♕︎┃☠️›┊ احزر*

* ♕︎┃☠️›┊ كت*

* ♕︎┃☠️›┊ سبوتيفاي*

* ♕︎┃☠️›┊ اكس-او*

* ♕︎┃☠️›┊ بلاكبينك*

* ♕︎┃☠️›┊ مقولات*

* ♕︎┃☠️›┊ ميسي*

* ♕︎┃☠️›┊ رونالدو*

* ♕︎┃☠️›┊ تقصير*

* ♕︎┃☠️›┊ بروفايل*

* ♕︎┃☠️›┊ تك*

* ♕︎┃☠️›┊ غبي*

* ♕︎┃☠️›┊ذكاء*

* ♕︎┃☠️›┊ غباء*

* ♕︎┃☠️›┊لو*

* ♕︎┃☠️›┊انستقرام*

*––––––––– ·「روابط المملكة」·*

* ♕︎┃☠️›┊الستيكرات*

* ♕︎┃☠️›┊الصور*

* ♕︎┃☠️›┊النشر*

* ♕︎┃☠️›┊الاستقبال*

* ♕︎┃☠️›┊ الأخبار*

* ♕︎┃☠️›┊ الإيديت*


*––––––––– ·「☠️」· –––––––––––*

𝐓𝐀𝐌𝐀𝐊𝐈 𝐁𝐎𝐓  `


//const pp = await (await fetch('https://i.ibb.co/qMG1JPY/fg.jpg')).buffer()
    let pp = './Tamaki.jpg' 
    conn.sendFile(m.chat,pp,null, m2,null,m)
   
}

handler.help = ['audios']
handler.tags = ['main']
handler.command = ['تاماكي','اوامر','الاوامر'] 

export default handler
