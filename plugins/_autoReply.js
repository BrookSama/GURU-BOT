
export async function all(m) {
	
    // when someone sends a group link to the bot's dm
    if ((m.mtype === 'groupInviteMessage' || m.text.startsWith('https://chat') || m.text.startsWith('open this link')) && !m.isBaileys && !m.isGroup) {
     this.sendButton(m.chat, `*Invite bot to a group* 
        
  مرحبا @${m.sender.split('@')[0]} 
  يمكنك استئجار الروبوت للانضمام إلى مجموعة أو الاتصال بالمالك

مزيد من المعلومات انقر على الزر
`.trim(), igfg, null, [['Rent', '/buyprem']] , m, { mentions: [m.sender] })
    m.react('💎')
  } 
  
   return !0
}
