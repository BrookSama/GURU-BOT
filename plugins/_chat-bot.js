let handler  = async (m, { conn }) => {
let name = conn.getName(m.sender)
let teks = `
${pickRandom([` ها شتبي `, `مب فاضيه لك`, `_خلصني قول وش تبي_`, `_ها حياتي_`, '  تاماكي دائماً في خدمتك😄'])}
`.trim()
conn.reply(m.chat, teks, m, { mentions: { mentionedJid: [m.sender] }})
}
handler.customPrefix = /تاماكي وينك|تاماكي|وين تاماكي/i
handler.command = new RegExp

export default handler

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}
