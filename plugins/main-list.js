let handler = async (m, { conn, usedPrefix, command}) => {
let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
if (!(who in global.db.data.users)) throw `✳️ The user is not found in my database`
let pp = './Guru.jpg'
let more = String.fromCharCode(8206)
let readMore = more.repeat(850) 
let lkr = `
*_<All menu />_*   
          
*–––––––––– ·「☠️」· –––––––––*

*_Owner:_*

*☠️┣⌯* /expired *<day>*
*☠️┣⌯* /delexpired
*☠️┣⌯* /blocklist
*☠️┣⌯* /listprem
*☠️┣⌯* /ping
*☠️┣⌯* /runtime
*☠️┣⌯* /addprem *<@Tag>*
*☠️┣⌯* /delprem *<@Tag>*
*☠️┣⌯* /banlist
*☠️┣⌯* /ban
*☠️┣⌯* /unban
*☠️┣⌯* /bc
*☠️┣⌯* /restart
*☠️┣⌯* /cleartmp
*☠️┣⌯* /join
*☠️┣⌯* /resetuser

*–––––––––– ·「☠️」· –––––––––*

*_Group:_*

*☠️┣⌯* /owner
*☠️┣⌯* /groups
*☠️┣⌯* /tagall *<Text>*
*☠️┣⌯* /hidetag *<Text>*
*☠️┣⌯* /totag *<Reply Msg>*
*☠️┣⌯* /add *<Number>*
*☠️┣⌯* /kick *<@Tag>*
*☠️┣⌯* /promote *<@Tag>*
*☠️┣⌯* /demote *<@Tag>*
*☠️┣⌯* /warn *<@Tag>*
*☠️┣⌯* /unwarn *<@Tag>*
*☠️┣⌯* /del *<Reply Msg>*
*☠️┣⌯* /invite *<Number>*
*☠️┣⌯* /group *<close/open>*
*☠️┣⌯* /tagadmins
*☠️┣⌯* /link
*☠️┣⌯* /resetlink
*☠️┣⌯* /infogroup
*☠️┣⌯* /warns
*☠️┣⌯* /banchat
*☠️┣⌯* /unbanchat
*☠️┣⌯* /cexpried

*–––––––––– ·「☠️」· –––––––––*

*_Sticker:_*

*☠️┣⌯* /owner
*☠️┣⌯* /sticker *<Reply Img>*
*☠️┣⌯* /wm *<Reply S (Text|Text)>*
*☠️┣⌯* /tovid *<Reply S GIF>*
*☠️┣⌯* /emojimix *<emoji+emoji>*
*☠️┣⌯* /getsticker *<Text>*
*☠️┣⌯* /scircle *<Reply Img>*
*☠️┣⌯* /toimg *<Reply Img>*
*☠️┣⌯* /attp *<Text>*

*–––––––––– ·「☠️」· –––––––––*

*_Tools:_*

*☠️┣⌯* /owner
*☠️┣⌯* /tomp3 *<Reply Vidoe>*
*☠️┣⌯* /tovn *<Reply Vidoe>*
*☠️┣⌯* /styletext *<Text>*
*☠️┣⌯* /qrcode *<Text>*
*☠️┣⌯* /toanime *<Reply Img>*
*☠️┣⌯* /shazam *<Reply Voice>*
*☠️┣⌯* /tourl *<Reply img, gif, vid>*
*☠️┣⌯* /tr en *<Text Arabic>*
*☠️┣⌯* /tr ar *<Text English>*
*☠️┣⌯* /tts *<Text Arabic>*
*☠️┣⌯* /tts en *<Text English>*
*☠️┣⌯* /cal 

*–––––––––– ·「☠️」· –––––––––*

*_Download:_*

*☠️┣⌯* /owner
*☠️┣⌯* /gdrive *<Url Gogle Drive>*
*☠️┣⌯* /gitclone *<Url GitHub>*
*☠️┣⌯* /ytmp4 *<Url Youtube>*
*☠️┣⌯* /tgsticker *<Url S Telegram>*

*–––––––––– ·「☠️」· –––––––––*

*_Search:_*

*☠️┣⌯* /owner
*☠️┣⌯* /yts *<text>*
*☠️┣⌯* /google *<text>*
*☠️┣⌯* /wiki *<text>*

*–––––––––– ·「☠️」· –––––––––*

*_Logo:_*

*☠️┣⌯* /owner
*☠️┣⌯* /phlogo *<Text + Text>*
*☠️┣⌯* /layer *<Text + Text>*
*☠️┣⌯* /lightglow *<Text>*
*☠️┣⌯* /aglow *<Text>*
*☠️┣⌯* /diamond *<Text>* 
*☠️┣⌯* /neon *<Text>* 
*☠️┣⌯* /devil *<Text>* 
*☠️┣⌯* /logos

*–––––––––– ·「☠️」· –––––––––*

*_For You:_*

*☠️┣⌯* /owner
*☠️┣⌯* /afk
*☠️┣⌯* /profile
*☠️┣⌯* /bot
*☠️┣⌯* /groups
*☠️┣⌯* /reg
*☠️┣⌯* /unreg
*☠️┣⌯* /mysn
*☠️┣⌯* /couplepp
*☠️┣⌯* /readmore *<Text>*

*–––––––––– ·「☠️」· –––––––––*
`
conn.sendFile(m.chat, pp, 'perfil.jpg', lkr, m, false, { mentions: [who] })
m.react(done)
}
handler.help = ['allmenu']
handler.tags = ['main']
handler.command = ['list', 'all menu'] 

export default handler
