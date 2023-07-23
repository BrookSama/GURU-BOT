let handler = async(m, {
	conn,
	text,
	command
}) => {
	let yh = global.loli
	let url = yh[Math.floor(Math.random() * yh.length)]
	conn.sendMessage(m.chat, {
		image: {
			url: url
		},
		caption: "احزر من ذي الشخصية ؟ 🤯"
	}, {
		quoted: m
	});
	//conn.sendButton(m.chat, `احزر من ذي الشخصية ؟ 🤯`.trim(), author, url, [['🔄 𝚂𝙸𝙶𝚄𝙸𝙴𝙽𝚃𝙴 🔄', `/${command}`]], m)
}
handler.command = /^(فعالية)$/i
handler.tags = ['anime']
handler.help = ['loli']
export default handler
global.loli= ["https://cloudfare.7azarfazar.com/QuizMaker/cdabe845cc5e4aa0b59d-2022-04-03%2012:26:36fromuserunique.jpeg.jpeg",
"https://cloudfare.7azarfazar.com/QuizMaker/6718ae8d7eac4e53bffd-2022-04-03%2012:29:03fromuserunique.jpeg.jpeg",
"https://cloudfare.7azarfazar.com/QuizMaker/9163e39cbe1043e281a8-2022-04-03%2012:29:45fromuserunique.jpeg.jpeg"]
