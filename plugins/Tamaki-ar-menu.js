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

* ♕︎┃☠️›┊ملصق*

* ♕︎┃☠️›┊اغنية*

* ♕︎┃☠️›┊بينترست*

* ♕︎┃☠️›┊يوتيوب*

* ♕︎┃☠️›┊تطقيمة*

* ♕︎┃☠️›┊ تحذيرات*

* ♕︎┃☠️›┊لصورة*

* ♕︎┃☠️›┊لملصق*

* ♕︎┃☠️›┊ملصقي*

* ♕︎┃☠️›┊لفيديو*

* ♕︎┃☠️›┊تيك*

* ♕︎┃☠️›┊رتب*

* ♕︎┃☠️›┊ احزر*

* ♕︎┃☠️›┊ كت*

* ♕︎┃☠️›┊ سبوتيفاي*

* ♕︎┃☠️›┊ اكس-او*

* ♕︎┃☠️›┊ بلاكبينك*

* ♕︎┃☠️›┊ ميسي*

* ♕︎┃☠️›┊ رونالدو*

* ♕︎┃☠️›┊ تقصير*

* ♕︎┃☠️›┊ بروفايل*

* ♕︎┃☠️›┊ تك*

* ♕︎┃☠️›┊ مقولة*

* ♕︎┃☠️›┊ غبي*

* ♕︎┃☠️›┊الاغبى*

* ♕︎┃☠️›┊الاذكى*

* ♕︎┃☠️›┊ذكاء*

* ♕︎┃☠️›┊ غباء*

* ♕︎┃☠️›┊جمال*

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

𝐓𝐀𝐌𝐀𝐊𝐈 𝐁𝐎𝐓 `


//const pp = await (await fetch('https://i.ibb.co/qMG1JPY/fg.jpg')).buffer()
    let pp = './Tamaki.jpg' 
    conn.reply(m.chat, m2,null,m)
   
}

handler.help = ['audios']
handler.tags = ['main']
handler.command = ['اوامر','تاماكي'] 

export default handler
