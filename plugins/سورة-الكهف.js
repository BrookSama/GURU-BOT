let handler  = async (m, { conn }) => { 
 let a='./src/Kahef.pdf'
 let teks = ` 
 ${pickRandom([`♡🕊️🫀♡

​​‏الجمعة خير ايام الأسبوع ويستجاب فيها الدعاء شرفُها معلوم ، وفضلها ثابت ، كم مِن همٍّ أُزيح ، وغمٍّ أُزِيل ، ودينٍ قُضِي ، وعافيةٍ عادتْ ، وشتاتٍ أَذِن الله لهُ في اجتماع | لاتنسون قراءة سورة الكهف وصلاة على النبي اللهم صل وسلم على نبينا محمد🤍✨

                           ♡🕊️🫀♡


﴿ وَقالُوا الحَمدُ لِلَّهِ الَّذي أَذهَبَ عَنَّا الحَزَنَ إِنَّ رَبَّنا لَغَفورٌ شَكورٌ ﴾

- الحمد لله الذي أعطاني ما أظن نفسي لا تسعه و لكنه يمر بفضله و كرمه.
- الحمد لله على أن الشعور يزول ، وأن التعب يُمحى ، وأن الشمس تتجدد عقب الليالي الكالحة .
 - الحمد لله على أن الأمس فات ، واليوم آت .

*وعن ذِكر الله لا تغفلوا 🤍!*

*- استغفِر الله*
*- الحمد لله*
*- لا إله إلّا الله*
*- الله أكبر *
*- لا حول ولا قوة إلا بالله *
*- سبحان الله وبحمده *
*- سبحان الله العظيم *
*- اللهم صلّ على سيدنا محمد* ‏'
ً'`])} 
 `.trim() 
 conn.sendFile(m.chat, a,null,teks, m)}
 handler.customPrefix = /سوره الكهف|سورة الكهف/i 
 handler.command = new RegExp 
  
 export default handler 
  
 function pickRandom(list) { 
     return list[Math.floor(Math.random() * list.length)] 
 }
