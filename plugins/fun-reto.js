let handler  = async (m, { conn, usedPrefix, command }) => {
conn.sendHydrated(m.chat, `╭━━━━━[ *سوأل* ]━━━━⬣\n*“${pickRandom(global.bucin)}”*\n╰━━━━━━[ ${𝐓𝐀𝐌𝐀𝐊𝐈 𝐁𝐎𝐓} ]━━━━━⬣`, wm, null, md, '════ •『 𝐓𝐀𝐌𝐀𝐊𝐈 𝐁𝐎𝐓 』• ════', null, null, [
['سوال اخر', `${usedPrefix}تك`]
], m,)}

handler.help = ['تك']
handler.tags = ['fun']
handler.command = /^تك/i
handler.fail = null
export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

global.bucin = [
"لو قررت تقفل جوالك يوم كامل مين تتوقع أنه يفتقدك ؟",
"اكثر كذبة تقولها ؟",
"شيء مستحيل انك تاكله ؟",
"ما السيء في هذه الحياة ؟",
"هل لديك الاستعداد القيام ببعض أمور المنزل لمساعدة الأم أو الزوجة؟",
"اعلى نسبة جبتها بحياتك الدراسية ؟",
"ما هو الشيء الذي تخاف أن تفقده؟",
" إذا كان لديك الفرصة لتغيير شيء واحد فقط في حياتك، فماذا سوف تغير؟", 
"مرة سويت جميل و نكره شخص ؟ ", 
" هل سبق ورسبت في المدرسة؟ وكم عدد المرات؟",
"تنسد نفسك عن الاكل لو زعلت ؟ ",  
" إذا تم إيداعك في مشفى المجانين خطئًا، فكيف سوف تثبت لهم أنك عاقل؟", 
"تعتقد اشباهك الاربعين عايشين حياة حلوة ؟ ", 
"من الشخص الاقرب لقلبك؟. ", 
" منشن شخصين تحسهم نفس الاسلوب او الشخصية ..", 
" كلمه لشخص خانك!؟.",
 "لو حياتك عبارة عن كتاب .. وش بيكون اسمه ؟ ",
 " اذا انسجنت وش تتوقع بتكون التهمة الي عليك ؟", 
" هل تؤمن بالسحر والحسد؟ ولماذا؟", 
"تترك احد عشان ماضيه سيء ؟ ", 
"اشياء م تسويها غير اذا كنت مروق ؟ ",
 " أيهما تفضل، العقل أم القلب؟",
 " شخصية تقهرك ؟",
 " منشن.. شخص تقوله  *انت أسطورة* ",
 "ما هو أكثر شيء ترغب في نسيانه؟", 
 "شعور ودك يموت ؟ ",
 "هل تستطيع أن تعيش بدون أصدقاء؟ ",
 " التاريخ المنتظر بالنسبة لك ؟", 
" وش اسم الحي الي ساكن فيه ؟", 
"هل ترى نفسك شخص اجتماعي أم انطوائي؟ ", 
"شخصية كرتونية تأثرت فيها وانت صغير ؟ ",
 " ‏ماذا ستختار من الكلمات لتعبر لنا عن حياتك التي عشتها الى الآن؟",
 " منشن : شخص تحس انه نكبه ؟",
 " من هو آخر شخص تفكر به قبل أن تنام؟",
 "مين اقرب شخص لك بالعائلة ؟ ", 
 "ما هو أكثر شيء يخيفك؟ ",
 " اغنية ناشبه في مخك ؟",
 "من هم أصدقائك المقربين منك؟ ", 
" شيء حلو صار لك اليوم ؟", 
" أغمض عينيك ما هو المكان الذي تخيلت نفسك فيه؟", 
" جربت الشهرة او تتمناها ؟",
 " هل يمكنك أن تضحي بصديق عمرك من أجل المصلحة؟",
 " أغرب شي اشتهيت تأكله فجأة ؟",
 " التاريخ المنتظر بالنسبة لك ؟",
 " ما هي أكثر صفة تكرهها في صديقك المقرب؟", 
 "وش اسمك؟",

"حرف تحبه ؟",

"اكثر شيء تحس انه مات ف مجتمعنا؟",

"القصيرآت دايم حلوات تتفق .؟",

"إذا وجدت ورقة بيضاء فماذا ترسم لتعبر عن حالتك النفسية؟",

"شهر من أشهر العام له ذكرى جميلة معك؟",

"قل حقيقه عنك ؟",

"من اصدق في الحب الولد ولا البنت؟",

"كلمات ماتستغني عنها بسوالفك؟",

"ما هو الشيء الذي تخاف أن تفقده؟",

"أكثر صفة تكرهها في المرأة؟",

"أكثر ماده تحبها دراسياً والسبب؟",

"تسامح شخص وجع قلبك ؟",

"عادة سيئة لا يمكنك الإقلاع عنها، ما هي؟",

"عاجبك وجودك في التلي ولا تتمنى تحذفة.؟",

"شعورك الحالي في جملة؟",

"محادثة ولا مكالمة ؟",

"وش نوع الأفلام اللي تحب تتابعه؟",

"هل أنت مع الخطبة عن حب أم مع الخطبة عن طريق الأهل؟",

"منشن شخص سوالفه حلوه ؟",

"هل تؤمنين بالحب من أول نظرة؟",

"كم من عشرة تحب الاطفال ؟",

"آخر خبر سعيد، متى وصلك؟",

"من الشخص الاقرب لقلبك؟",

"هل ترى نفسك شخص ذو إرادة؟",

"ـ هالفترة أحس اني محتاج ....؟",

"عمرك بكيت على شخص مات في مسلسل ؟",


"هل يمكن أن تكره شخص كنت تحبه؟", 

"أغنية عالقة في ذهنك هاليومين؟",

"أكثر مكان تشعر به بالأمان والراحة؟",

"ارسل اخر صورة فـ الالبوم ..",

"جملة من كتاب لا تنساها.؟",

"هل تقدمت للزواج من فتاة من قبل ورفضتك؟",

"أكثر مكان تشعر به بالأمان والراحة؟",

"اكثر شيء تخاف منه ؟",

"اذا غلطت وعرفت انك غلطان تحب تعترف ولا تجحد؟",

"كيف تحد الدولة من الفقر المُتزايد.؟",

"ما هي مواصفات الصديق الحقيقي في نظرك؟",

"أتمنى له كسراً لاجبر له عبارة عميقة هل تمنيتها لأحد.؟",

"مع او ضد : اكثر من يحلون مشاكل الناس ، هم اكثر الناس لديهم مشاكل ؟",

"افضل هديه ممكن تناسبك؟",

"هل تقبل الارتباط بشخص فقير لكنه شديد الجمال؟",

"من طلاسم لهجتكم ؟",

"جربت احد يعطيك بلوك وانت تكتب له ؟",

"أكثر جملة أثرت بك في حياتك؟",

"إذا خيروك أن تُعيد تسمية نفسك فهل تقبل باسمك أم تقوم بتغييره؟",

"هل تؤمن بوجود الصداقة الحقيقية؟",

"هل وقعت في حب شخص من مواقع التواصل الإجتماعي؟",

"كمل : النفس تميل لـ ... ؟",

"جربت شعور احد يحبك بس انت متكدر تحبه؟",

"كلمة تقولها لكل شخص منافق.؟",

"من هو أكثر شخص تفكر به؟",

"هل تجرأ على أن تذكر أكثر صفة تكرهها بك؟",

"حزين ولا مبسوط ؟",

"مع أو ضد لو كان خيراً لبقئ.؟",

"هل ترى نفسك شخص ذو إرادة؟", 
" وما دليلك على ذلك؟",

"هل تستطيع أن تعيش بدون أصدقاء؟",

"ما هو أغرب موقف مضحك تعرضت له في حياتك؟",

"قوة الاستيعاب عندك من 10",

"اذكر موقف ماتنساه بعمرك؟",

"اغبى كذبه صدقتها بطفولتك؟",

"هل فكرت مسبقًا في الانتقام ممن ظلمك؟",

"كم ساعة تنام في اليوم؟",
 
"مع او ضد : السفر يصلح ما افسده الدهر ؟",

"افضل ايام الاسبوع عندك🔖؟",

"‏- لو خيروك، الزواج بمن تُحب 💍 أو تأخذ مليون دولار💰",

"على نياتكُم تُرزقون منشن تيكن ينطبق علية هذا الشيء.؟",

"هل يمكنك أن تذكر لي معلومة لا يعرفها عنك أحد؟",

"مين المغني المفضل عندك ؟",

"كيف تتعامل مع الشخص المُتطفل ( الفضولي ) ؟",

"موقف غير حياتك؟",

"هل تعتقد أن حبيبتك / حبيبك يفكر بك الآن؟", 

"إذا كان لديك عصا سحرية، ماذا ستفعل بها؟",

"عمرك بكيت على شخص مات في مسلسل ؟",

"كم تحتاج من وقت لتثق بشخص؟",

"إذا تم إيداعك في مشفى المجانين خطئًا، فكيف سوف تثبت لهم أنك عاقل؟",

"حيوانك المفضل؟",

"ما هو أكثر موقف يمكن أن يجعلك سعيد طوال اليوم؟",

"خُلق يجذبك بالناس ؟",

"اشمر مقطع من اغنيه متطلع منراسك؟",

"شعورك لما تشوف صورك وأنت صغير ؟",

"ردة فعلك لمن يتجاهلك بالرد متعمد؟",

"لديك ورقة بيضاء وقلم، ماذا سوف تكتب بها؟",

"كم عدد الصور بجوالك ؟",

"ايهم اصدق نظرة العين او نبرة الصوت ؟",

"جابو طاري شخص تكره عندك تشاركهم ولا تمنعهم.؟",

"شيء عندك اهم من الناس؟",

"الاسود او الأبيض.؟",

"لو حياتك عبارة عن كتاب .. وش بيكون اسمه ؟",

"وش الشيء الي تطلع حرتك فيه و زعلت ؟",

"هل لديك الاستعداد القيام ببعض أمور المنزل لمساعدة الأم أو الزوجة؟",

"هل من الممكن أن تضر شخصاً لمجرد أنك تكرهه؟",

"ما هو أكثر اسم دلع تكرهه؟",

"شكلك يعطي لأي جنسية ؟",

"ماهي الهدية التي تتمنى أن تنتظرك يومًا أمام باب منزلك؟",

"هل سبق وأن رسبتِ في الاختبارات؟",

"إيموجي يعبّر عن مزاجك الحالي؟",

"ا هو أكثر شيء تضيع وقت فراغك به؟", 

"لو حياتك عبارة عن كتاب .. وش بيكون اسمه ؟",

"وش الشيء الي تطلع حرتك فيه و زعلت ؟",

"هل لديك الاستعداد القيام ببعض أمور المنزل لمساعدة الأم أو الزوجة؟",

"هل من الممكن أن تضر شخصاً لمجرد أنك تكرهه؟",

"ما هو أكثر اسم دلع تكرهه؟",

"كم من عشره تعطي حظك ؟",

"لو تم وضعك أما ثلاث خيارات ( المال، الصحة، الرضا) أيهما تختار؟",

"هل يمكنك أن تصف الزواج بكلمة واحدة؟",

"اسم ولد وبنت تحسهم لايقين على بعض ؟",

"احقر الناس هو من ...",

"‏بالنسبه لك ، الطلعه الحلوه يحكمها المكان أو الأشخاص اللي معك .؟",

"كلمة تنرفزك.؟",

"هل يمكنك أن تتولى أمر الأعمال المنزلية أم أنك سوف تفشل في ذلك؟",

"شيء مستحيل انك تاكله ؟",

"ماذا لو عاد مُشتاقاً.؟",

"كلامك للمتنمرين الكترونياً وواقعياً.؟",

"هل يُمكن أن تكذب كذبة كبيرة للخروج من مأزق؟",

"كلمة لشخص بعيد؟",

"اكتب شطر من اغنية او قصيدة جا فـ بالك ؟",

"عندك فوبيا او خوف شديد من شيء معين ؟",

"لو كان هناك أمامك اختيارين أحدهما الزواج والإستقرار معي هنا والآخر السفر والعمل بالخارج، أيهما تختار؟",

"هل لديك فوبيا من شيء معين؟",

"أغمض عينيك ما هو المكان الذي تخيلت نفسك فيه؟",

"أخر رسالة بالواتس جاتك من مين ؟",

"حسيت انك ظلمت شخص.؟",

"هل يمكن لكي أن تكتفي قبل النزول من المنزل بغسيل الوجه فقط دون وضع الميكاب؟",

"هل تؤمن بالحب من النظرة الأولى؟",

"إذا دخلت مُسابقة وكسبت 5 مليون دولار ماذا تفعل بهم؟",

"وش قبيلتك ؟",

"كلمة غريبة من لهجتك ومعناها؟",

"كم من الوقت تستغرق قبل الخروج من المنزل ؟",

"من هي أكثر شخصية عامة مفضلة لديك؟",

"ما هو أكثر شيء يمكنه أن يخطف النوم من عينك؟",
  "هواية او تجربة كان ودك تستمر و تركتها ؟"
 
] 
