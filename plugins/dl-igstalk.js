
import fg from 'api-dylux'
let handler= async (m, { conn, args, text, usedPrefix, command }) => {
	
    if (!args[0]) throw `✳️ أدخل اسم مستخدم انستقرام\n\n📌مثال: ${usedPrefix + command} asli_guru69` 
    let res = await fg.igStalk(args[0])
    let te = `
┌──「 *STALKING* 
▢ *🔢عدد:* ${res.name} 
▢ *🔖اسم المستخدم:* ${res.username}
▢ *👥المتابعين:* ${res.followersH}
▢ *🫂يتابع:* ${res.followingH}
▢ *📌الوصف:* ${res.description}
▢ *🏝️المنشورات:* ${res.postsH}

▢ *🔗 الرابط* : https://instagram.com/${res.username.replace(/^@/, '')}
└────────────`

     await conn.sendFile(m.chat, res.profilePic, 'tt.png', te, m)
     
}
handler.help = ['igstalk']
handler.tags = ['dl']
handler.command = ['igstalk'] 

export default handler
