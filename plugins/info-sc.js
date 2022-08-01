const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys')
let fs = require('fs')
let handler = async (m) => {
let krizyn = `
*––––––『 SOURCE CODE 』––––––*

SC ORI : wa.me/6285707042602

SC : Chat Owner Diatas (Fast Respon)

Hehe


	`.trim()
  let message = await prepareWAMessageMedia({ image: await (await require('node-fetch')(fotonya1)).buffer()}, { upload: conn.waUploadToServer }) 
    const template = generateWAMessageFromContent(m.key.remoteJid, proto.Message.fromObject({
        templateMessage: {
            hydratedTemplate: {
                hydratedContentText: krizyn,
                imageMessage: message.imageMessage, 
           hydratedFooterText: 'Subscribe Banh!',
           hydratedButtons: [{
             urlButton: {
               displayText: 'SOURCE CODE ',
               url: 'wa.me/6285707042602'
             }

           },
                {
               urlButton: {
               displayText: 'Instagram ',
               url: 'https://instagram/adix.yr'
             }

           },
               {
             quickReplyButton: {
               displayText: 'Total Fit',
               id: '.totalfitur',
             }
             
           },
               {
             quickReplyButton: {
               displayText: 'Menu',
               id: '.menu',
             }
             
             },
               {
             quickReplyButton: {
               displayText: 'Donasi',
               id: '.donasi',
             }

           }]
         }
       }
     }), { userJid: m.sender, quoted: m });
    //conn.reply(m.chat, text.trim(), m)
    return await conn.relayMessage(
         m.chat,
         template.message,
         { messageId: template.key.id }
     )
}

handler.tags = ['main', 'info']
handler.command = /^(sc|script|sourcecode)$/i
handler.help = ['script']
module.exports = handler