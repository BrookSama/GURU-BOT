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
"https://cloudfare.7azarfazar.com/QuizMaker/9163e39cbe1043e281a8-2022-04-03%2012:29:45fromuserunique.jpeg.jpeg",
"https://telegra.ph/file/46bfb8212c140a1235bcc.jpg",
"https://telegra.ph/file/3695d6e751389923f00a1.jpg",
"https://telegra.ph/file/4d99e810560589e726c6d.jpg",
"https://telegra.ph/file/c971b1e5cae3bd595bcf2.jpg",
"https://telegra.ph/file/15e48970ccc7b3b3d07e1.jpg",
"https://telegra.ph/file/02a53afac1cad6cee2fe2.jpg",
"https://telegra.ph/file/a1d58ac42138060cb5f99.jpg",
"https://telegra.ph/file/b5c23079977b1701c99ac.jpg",
"https://telegra.ph/file/2e535c4bc6aed282534ff.jpg",
"https://telegra.ph/file/83d3ec9175f4297c8b7ca.jpg",
"https://telegra.ph/file/d5761a418465131f3bec8.jpg",
"https://telegra.ph/file/d1527d82951ab29b48896.jpg",
"https://telegra.ph/file/a7c29eee17832c8e51f85.jpg",]
