const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "goibot",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭",
  description: "goibot",
  commandCategory: "Noprefix",
  usages: "noprefix",
  cooldowns: 5,
};
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Kolkata").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);

  var tl = ["𝙷𝙰𝙰 𝙱𝙰𝙱𝚄 𝙱𝙾𝙻𝙾 𝙺𝚈𝙰 𝙺𝙰𝙰𝙼 𝙷𝙰𝙸" ,"𝙱𝙷𝚄𝚃 𝚈𝙰𝙳 𝙰𝙰 𝚁𝙰𝙷𝙸 𝙷𝙰𝙸 𝙱𝙰𝙱𝚄 𝙰𝙰𝙿𝙺𝙸" , "𝙺𝙰𝙷𝙰 𝙲𝙷𝙰𝙻𝙴 𝙶𝙰𝚈𝙴 𝚃𝙷𝙴 𝙼𝚄𝙹𝙷𝙴 𝙲𝙷𝙷𝙾𝚁 𝙺𝙴 𝙱𝙰𝙱𝚄" , "𝙺𝚈𝙰 𝙷𝚄𝙰 𝙱𝙰𝙱𝚄" , "𝙶𝚄𝚂𝚂𝙰 𝙷𝙾 𝙱𝙰𝙱𝚄 𝙼𝙴𝚁𝚂𝙴" , "𝙺𝚈𝙰 𝙺𝙰𝚁 𝚁𝙴𝙷𝙴 𝙷𝙾 𝙱𝙰𝙱𝚄 𝙼𝚄𝙹𝙷𝙴 𝙱𝙷𝙸 𝙱𝙰𝚃𝙰𝙾" , "𝙱𝙾𝙻𝙾 𝙱𝙰𝙱𝚄 𝙹𝙰𝙻𝙳𝙸 𝚂𝙴" , "𝙼𝙴𝚁𝙰 𝙱𝙵 𝙺𝙰𝙷𝙰 𝙷𝙴 𝚈𝙰𝚁" , "𝙺𝙰𝙷𝙰 𝙹𝙰 𝚁𝙴𝙷𝙴 𝙷𝙾 𝙱𝙰𝙱𝚄" , "𝙼𝙴𝚁𝙴 𝙱𝙵 𝙱𝙰𝙽𝙾𝙶𝙴 𝙹𝙰𝙽𝚄" , "𝙼𝙴𝚁𝙴 𝙿𝙷𝙾𝙽 𝙺𝙸 𝙱𝙴𝚃𝚃𝚁𝙸 𝙺𝙼 𝙷 𝙱𝙰𝙱𝚄 𝙹𝙰𝙻𝙳𝙸 𝙱𝙾𝙻𝙾" , "𝙾𝚁 𝙺𝚈𝙰 𝙷𝙾 𝚁𝙷𝙰𝙰 𝙷 𝙼𝙴𝚁𝙴 𝙿𝙰𝙳𝙾𝚂𝙸𝙸 𝙹𝙸" , "𝙹𝙰𝙽𝚄 𝙴𝚂𝙴 𝙼𝙰𝚃 𝙱𝙾𝙻𝙴 𝙺𝙰𝚁𝙾 𝙽𝙷𝙸 𝚃𝙾 𝙿𝚈𝙰𝚁 𝙷𝙾 𝙹𝙰𝚈𝙴𝙶𝙰" , "𝙼𝙴𝚁𝙰 𝙻𝙰𝙳𝙳𝙾 𝙽𝙴 𝙺𝙷𝙰𝙽𝙰 𝙺𝙷𝙰𝚈𝙰" , "𝙱𝙰𝙱𝚄 𝙼𝚄𝙹𝙷𝙴 𝙱𝙷𝚄𝙺𝙷 𝙻𝙰𝙶 𝚁𝙰𝙷𝙸 𝙷𝙰I" , "𝙽𝙰𝚁𝙰𝙹 𝙷𝙾 𝙱𝙰𝙱𝚄 𝙼𝙴𝚁𝚂𝙴" , "𝙺𝚄𝙲𝙷 𝙺𝙰𝙼 𝙺𝙰𝚁 𝚁𝙴𝙷𝙴 𝙷𝙾 𝙱𝙰𝙱𝚄 𝚃𝙰𝙱𝙸 𝙴𝚃𝙽𝙰 𝙻𝙴𝚃 𝙰𝙰𝚈𝙴 𝙷𝙾" , "𝙱𝙰𝙱𝚄 𝙼𝚄𝙹𝙷𝙴 𝙽𝙸𝙽𝙳 𝙰𝙰𝙰 𝚁𝙰𝙷𝙸 𝙷𝙰𝙸" , "𝙱𝙰𝙱𝚄 𝙲𝙷𝙰𝙻𝙾 𝙺𝙷𝙴𝙻𝙽𝙴 𝙺𝙾 𝙼𝙰𝙹𝙰 𝙰𝙰𝚈𝙴𝙶𝙰" , "𝙱𝙰𝙱𝚄 𝙰𝙰𝙹 𝙰𝙰𝙿𝚂𝙴 𝙱𝙰𝙰𝚃 𝙽𝙷𝙸 𝙺𝙰𝚁𝚄𝙽𝙶𝙸 𝙶𝚄𝚂𝚂𝙰 𝙷𝚄 𝙼𝙴 𝙰𝙰𝙿𝚂𝙴" , "𝙱𝙰𝙱𝚄 𝙺𝙾𝙸 𝙽𝙷𝙸 𝙷𝙰𝙸 𝙸 𝙻𝙾𝚅𝙴 𝚈𝙾𝚄 𝙱𝙾𝙻 𝙳𝙾 𝙹𝙰𝙻𝙳𝙸 𝚂𝙴" , "𝙺𝙰𝙷𝙰 𝙹𝙰 𝚁𝙴𝙷𝙴 𝙷𝙾 𝙱𝙰𝙱𝚄", "𝙼𝙴 𝙲𝙷𝙰𝙻𝙸 𝚂𝙾𝙽𝙴 𝙽𝙸𝙽𝙳 𝙰𝙰 𝚁𝙰𝙷𝙸 𝙼𝚄𝙹𝙷𝙴" , "𝙱𝙰𝙱𝚄 𝙸 𝙻𝙾𝚅𝙴 𝚈𝙾𝚄" , "𝙱𝙰𝙱𝚄 𝙸 𝙼𝙸𝚂𝚂 𝚈𝙾𝚄" ,  "𝙰𝚊𝚙𝚔𝚘 𝙼𝚎𝚛𝚎 𝙱𝚘𝚜𝚜 𝚂𝚎 𝙱𝚊𝚊𝚝 𝙺𝚊𝚛𝚗𝚒 𝙷𝚊𝚒 𝚈𝚎 𝙻𝚘 𝙼𝚎𝚛𝚎 𝙾𝚠𝚗𝚎𝚛 𝙺𝚊 𝙽𝚞𝚖𝚋𝚎𝚛 [[𝟾𝟶𝟿𝟺𝟾𝟸𝟾𝟸𝟹𝟽]]" , "𝙺𝚈𝙾 𝙿𝙰𝚁𝙴𝚂𝙷𝙰𝙽 𝙺𝙰𝚁 𝚁𝙴𝙷𝙴 𝙷𝙾 𝙱𝙰𝙱𝚄" , "𝙱𝙰𝙱𝚄 𝙸 𝙺𝙸𝚂𝚂 𝚈𝙾𝚄" ,"𝙼𝚄𝙹𝙷𝙴 𝙻𝙰𝙶 𝚁𝙰𝙷𝙰 𝚃𝚄𝙼 𝙼𝙴𝚁𝙴 𝙿𝙰𝚁 𝙻𝙸𝙽𝙴 𝙼𝙰𝚁 𝚁𝙴𝙷𝙴 𝙷𝙾 𝚃𝙷𝙰𝚁𝙺𝙸 𝙸𝙽𝚂𝙰𝙰𝙽" ,"𝙱𝙰𝙱𝚄 𝙴𝙺 𝙱𝙰𝚁 𝙱𝙾𝙻 𝙳𝙾 𝙹𝙰𝙺𝙳𝙸 𝚂𝙴" , "𝙸 𝙷𝙰𝚃𝙴 𝚈𝙾𝚄 𝙹𝙰𝙾 𝙼𝚄𝙹𝙷𝙴 𝙱𝙰𝙰𝚃 𝙽𝙷𝙸 𝙺𝙰𝚁𝙽𝙸" , "𝙴𝙺 𝙹𝙸𝙶𝙴 𝙼𝚄𝙷 𝙼𝙰𝚁𝙾 𝙹𝙸𝙶𝙴 𝙹𝙸𝙷𝙴 𝙼𝚄𝙷 𝙼𝙰𝚃 𝙼𝙰𝚁𝙾" ,"𝙺𝚈𝙰 𝙰𝙰𝙿𝙺𝙸 𝚂𝙰𝙳𝙸 𝙷𝙾 𝙶𝚈𝙸" , "𝙺𝙾𝙽𝚂𝙸 𝙹𝙾𝙱 𝙺𝙰𝚁𝚃𝙴 𝙷𝙾 𝙻𝙰𝙳𝙳𝙾" , "𝙺𝙰𝙷𝙰 𝚁𝙴𝙷𝚃𝙴 𝙷𝙾 𝚃𝚄𝙼 𝙹𝙰𝙻𝙳𝙸 𝙱𝙰𝚃𝙰𝙾 , 𝙼𝚄𝙹𝙷𝙴 𝙱𝙷𝙸 𝙰𝙰𝙽𝙰 𝙷 𝙰𝙰𝙿𝙺𝙴 𝙿𝙰𝚂" , "𝚃𝚄𝙼 𝚃𝙾 𝚈𝙰𝙷𝙸 𝙷𝙾𝙽𝙰 𝙹𝙾 𝙺𝙰𝙻 𝚂𝙰𝙿𝙽𝙴 𝙼𝙴 𝙼𝙴𝙽𝙴 𝙶𝙰𝙻𝙸 𝚃𝙷𝙸 𝚃𝚄𝙼𝙺𝙾" , "𝙺𝙷𝙰𝙽𝙰 𝙻𝙰𝙾 𝙼𝚄𝙹𝙷𝙴 𝙱𝙷𝚄𝙺𝙷 𝙻𝙰𝙶𝙸 𝙷 𝙹𝙰𝙻𝙳𝙸 𝚂𝙴" , "𝚃𝚄𝙼 𝙴𝙺 𝙽𝚄𝙼𝙱𝙴𝚁 𝙺𝙴 𝚃𝙷𝙰𝚁𝙺𝙸 𝙸𝙽𝚂𝙰𝙰𝙽 𝙷𝙾" , "𝙰𝙰𝙿𝙺𝙰 𝙽𝙰𝙰𝙼 𝙺𝚈𝙰 𝙷 𝙱𝙰𝙱𝚄" , "𝙼𝙴 𝙰𝙱𝙷𝙸 𝙺𝙷𝙰𝙽𝙰 𝙱𝙰𝙽𝙰 𝚁𝙰𝙷𝙸 𝙷𝚄" , "𝙼𝙴 𝙰𝙱𝙷𝙸 𝙰𝙿𝙽𝙴 𝚁𝙰𝚅𝙸 𝙱𝙰𝙱𝚄 𝙺𝙴 𝚂𝙰𝚃𝙷 𝙱𝚄𝚂𝚈 𝙷𝚄" , "𝙾𝚈𝙴 𝙱𝙸𝙹𝙻𝙸 𝙲𝙷𝙰𝙻𝙸 𝙶𝚈𝙸 𝙼𝙴𝚁𝙴 𝙶𝙷𝙰𝚁 𝙺𝙸 𝙹𝙰𝙻𝙳𝙸 𝚂𝙴 𝙻𝙰𝙾 𝙱𝙸𝙹𝙻𝙸" , "𝚃𝚄𝙼 𝙴𝚃𝙽𝙴 𝙼𝙰𝚂𝚄𝙼 𝙺𝚈𝙾 𝙷𝙾 𝙱𝙰𝙱𝚄" , "𝚃𝚄𝙼 𝙿𝙰𝚁 𝙿𝚈𝙰𝚁 𝙰𝙰𝙰 𝚁𝙰𝙷𝙰 𝙷 𝙱𝙰𝙱𝚄" , "𝙷𝙰 𝙱𝙾𝙻𝙾 𝙱𝙰𝙱𝚄 𝙺𝚈𝙰 𝙷𝚄𝙰" , "𝙺𝚈𝚄 𝚈𝙰𝙳 𝙺𝙸𝚈𝙰 𝙼𝚄𝙹𝙷𝙴 , 𝙼𝙴 𝙱𝙷𝚄𝚃 𝙹𝙰𝚁𝚄𝚁𝙸 𝙺𝙰𝙼 𝙺𝙰𝚁 𝚁𝙰𝙷𝙸 𝚃𝙷𝙸" , "𝙰𝙱𝙷𝙸 𝙼𝙴 𝙱𝚄𝚂𝚈 𝙷𝚄 𝙱𝙰𝙻 𝚂𝚄𝚃 𝚁𝙰𝙷𝙸 𝙷𝚄" , "𝙰𝙱𝙷𝙸 𝚁𝚄𝙺𝙾 𝙽𝙰𝙷𝙰 𝙺𝙴 𝙰𝙰𝚃𝙸 𝙷𝚄 𝙼𝙴" , "𝙴𝚃𝙽𝙰 𝙿𝚈𝙰𝚁 𝙺𝙰𝚁𝚃𝙴 𝙷𝙾 𝙼𝚄𝙹𝙷𝚂𝙴 𝙱𝙰𝙱𝚄" , "𝙺𝚈𝙰 𝙽𝙰𝙰𝙼 𝚁𝙰𝙺𝙷𝚄 𝚃𝚄𝙼𝙰𝚁𝙰" , "𝙰𝙰𝙿𝙺𝙰 𝙽𝚄𝙼𝙱𝙴𝚁 𝙳𝙴𝙳𝙾 𝙳𝙷𝙾𝙳𝙰 𝚂𝙰" , "𝙱𝙰𝙱𝚄 𝙼𝚄𝙹𝙷𝙴 𝙵𝙴𝚅𝙰𝚁 𝙷𝙾 𝚁𝙰𝙷𝙰 𝙷 , 𝙰𝙰𝙿𝙺𝙴 𝙳𝙸𝙻 𝙼𝙴 𝚁𝙰𝙺𝙷𝙻𝙾 𝙱𝙰𝙱𝚄" , "𝙼𝙴 𝙰𝙱𝙷𝙸 𝙱𝚄𝚂𝚈 𝙷𝙾 𝙻𝙰𝙳𝙺𝙰 𝙿𝙰𝚃𝙰𝙽𝙴 𝙼𝙴" , "𝙱𝙰𝙱𝚄 𝙼𝙴𝚁𝙰 𝚂𝙰𝚁 𝙳𝙰𝚁 𝙷𝙾 𝚁𝙰𝙷𝙰 𝙷 𝙳𝙷𝙾𝙳𝙰 𝚂𝙰 𝙳𝙰𝚅𝙰 𝙳𝙾" , "𝙱𝙰𝙱𝚄 𝙰𝙰𝙿𝙺𝙸 𝚈𝙰𝙳 𝙰𝙰 𝚁𝙰𝙷𝙸 𝙷 𝙺𝚈𝙰 𝙺𝙰𝚁𝚄" , "𝙱𝙾𝙻𝙾 𝙻𝙰𝙳𝙳𝙾 𝙺𝚈𝙰 𝙺𝙰𝙼 𝙷" , "𝙷𝙰𝙰 𝙱𝙰𝙱𝚄 𝙱𝙾𝙻𝙾 𝙺𝚈𝙰 𝙺𝙰𝙰𝙼 𝙷𝙰𝙸" ,"𝙱𝙷𝚄𝚃 𝚈𝙰𝙳 𝙰𝙰 𝚁𝙰𝙷𝙸 𝙷𝙰𝙸 𝙱𝙰𝙱𝚄 𝙰𝙰𝙿𝙺𝙸", "𝙼𝙴 𝚃𝙴𝚁𝙴 𝙿𝚈𝙰𝚁 𝙼𝙴 𝙿𝙰𝙶𝙰𝙻 𝙷𝙾 𝙶𝙰𝚈𝙸 𝙱𝙰𝙱𝚄" , "𝙱𝙰𝙱𝚄 𝙶𝙵 𝙱𝙵 𝚃𝙾 𝚂𝙰𝙱 𝙱𝙰𝙽𝚃𝙴 𝙷 𝙷𝚄𝙼 𝚂𝙸𝙳𝙷𝙰 𝚂𝙰𝙳𝙸 𝙺𝙰𝚁𝚃𝙴 𝙷𝙴" , "𝙱𝙰𝙱𝚄 𝙼𝙴𝚁𝙴 𝙿𝙰𝙸𝚁𝙾 𝙼𝙴 𝙳𝙰𝚁𝙳 𝙷𝙾 𝚁𝙰𝙷𝙰 𝙳𝙷𝙾𝙳𝙰 𝚂𝙰 𝙳𝙰𝚅𝙰 𝙳𝙾" , "𝙱𝙰𝙱𝚄 𝙰𝙰𝙹 𝙺𝙷𝙰𝙽𝙴 𝙼𝙴 𝙺𝚈𝙰 𝙺𝙷𝙰𝚈𝙰" , "𝙰𝙰𝙿 𝙰𝙰𝙿 𝙺𝙷𝙰𝙽𝙰 𝙺𝙷𝙰 𝙻𝙴𝚃𝙴 𝙷𝙾 𝙼𝚄𝙹𝙷 𝚂𝙴 𝙿𝚄𝙲𝙷𝚃𝙴 𝙱𝙷𝙸 𝙽𝙷𝙸 𝙷𝙾" , "𝙱𝙰𝙱𝚈 𝚁𝚄𝙺𝙾 𝙰𝙱𝙷𝙸 𝙼𝙴 𝙿𝙰𝙽𝙸 𝙱𝙷𝙰𝚁 𝚁𝙰𝙷𝙸 𝙷𝚄" , "𝙱𝙰𝙱𝚄 𝙼𝙰𝙼𝙼𝚈 𝙽𝙴 𝙳𝙰𝚃 𝙻𝙰𝙶𝙰 𝙳𝙸 𝙼𝙴𝚁𝙸 , 𝙱𝙰𝙱𝚄 𝙲𝙷𝙰𝙻𝙾 𝙳𝙾𝙽𝙾 𝙳𝙰𝙽𝙲𝙴 𝙺𝙰𝚁𝚃𝙴 𝙷𝙰𝙸" , "𝙱𝙰𝙱𝚄 𝚂𝙾𝙽𝙴 𝚂𝙴 𝙿𝙷𝙴𝙻𝙴 𝙼𝙴𝚁𝙰 𝙽𝙰𝙰𝙼 𝙻𝙴 𝙺𝙰𝚁𝙾 𝙰𝙲𝙷𝙷𝙸 𝙽𝙸𝙽𝙳 𝙰𝙰𝚈𝙴𝙶𝙸" , "𝚁𝚄𝙺𝙾 𝙼𝙴 𝚁𝙸𝚈𝙰 𝙱𝙰𝙱𝚄 𝚂𝙴 𝙱𝙾𝙻𝚃𝙸 𝙷𝚄 𝚅𝙾 𝙰𝙰𝙿𝙺𝙴 𝙻𝙸𝚈𝙴 𝙶𝙵 𝙳𝙷𝚄𝙽𝙳 𝙺𝙴 𝙻𝙰𝚈𝙴𝙶𝙸" , "𝙺𝚈𝙰 𝙺𝙰𝚁𝚄 𝙱𝙰𝙱𝚄 𝙼𝙰𝙽 𝙽𝙷𝙸 𝙻𝙰𝙶 𝚁𝙰𝙷𝙰 𝙷𝙰𝙸 𝙼𝙴𝚁𝙰" , "𝙺𝙰𝙷𝙰 𝙼𝚄𝙷 𝙼𝙰𝚁 𝚁𝙴𝙷𝙴 𝚃𝙷𝙴 𝙰𝙰𝙿 𝙹𝙾 𝙰𝙱 𝚃𝙸𝙼𝙴 𝙼𝙸𝙻𝙰 𝚃𝚄𝙼𝙺𝙾" , '𝙱𝙰𝙱𝚄 𝙼𝙴 𝚂𝙰𝙳𝙸 𝙼𝙴 𝙹𝙰 𝚁𝙰𝙷𝙸 𝙷𝚄 𝙳𝙾 𝙳𝙸𝙽 𝙼𝙴 𝙰𝙰𝚈𝚄𝙽𝙶𝙸" , "𝙱𝙰𝙱𝚄 𝙼𝙴 𝙰𝙱𝙷𝙸 𝙺𝙰𝙿𝙳𝙴 𝙳𝙷𝙾 𝚁𝙰𝙷𝙸 𝙷𝚄 𝙰𝙰𝙿 𝙷𝙴𝙻𝙿 𝙺𝙰𝚁 𝚅𝙰𝙳𝙾 𝙼𝙴𝚁𝙸" , "𝙾𝚁 𝙱𝙰𝚃𝙰𝙾 𝙱𝙰𝙱𝚄 𝙺𝚈𝙰 𝙷𝙾 𝚁𝙰𝙷𝙰 𝙷 𝚃𝙾 𝙰𝙰𝙹 𝙺𝙰𝙻 𝙳𝙸𝙺𝙷𝚃𝙴 𝙽𝙷𝙸 𝙷𝙾 𝙰𝙰𝙿" , "𝚈𝙰𝚁 𝙱𝙷𝚄𝚃 𝙳𝙸𝙽𝙾 𝙼𝙴 𝙰𝙰𝚈𝙴 𝙷𝙾 𝙰𝙰𝙿 𝙺𝙰𝙷𝙰 𝚃𝙷𝙴 𝙰𝙰𝙿" , "𝙻𝙰𝙳𝙳𝙾 𝙼𝙴 𝙰𝙱𝙷𝙸 𝙹𝙷𝚄𝙻𝙰 𝙹𝙷𝚄𝙻 𝚁𝙰𝙷𝙸 𝙷𝚄 𝙰𝙰𝙿 𝙱𝙷𝙸 𝙰𝙰𝙹𝙰𝙾" , "𝙱𝙰𝙱𝚄 𝙼𝙰𝙼𝙼𝙰 𝙽𝙴 𝙺𝚈𝙰 𝙱𝙰𝙽𝙰 𝙷𝙰𝙸 𝙺𝙷𝙰𝙽𝙴 𝙼𝙴" , "𝙰𝙱𝙷𝙸 𝙼𝙴 𝙿𝙾𝙾𝙹𝙰 𝙼𝙴 𝙱𝚄𝚂𝚈 𝙷𝚄 𝙱𝙰𝙳 𝙼𝙴 𝙰𝙰𝚃𝙸 𝙷𝚄" , "𝚃𝚄 𝙼𝙸𝙻 𝙿𝙰𝙷𝙰𝙳𝙸 𝙺𝙴 𝚄𝙿𝙰𝚁 𝙱𝙰𝚃𝙰𝚃𝙸 𝙷𝚄 𝚃𝚄𝙼𝙺𝙾 , 𝙺𝙸𝚂𝙸 𝙳𝙸𝙽 𝙰𝙰𝙽𝙰 𝙷𝙰𝚆𝙴𝙻𝙸 𝙿𝙰𝚁" , "𝚈𝙰𝚁 𝙼𝙴𝚁𝙴 𝙷𝙰𝚃𝙷𝙾 𝙼𝙴 𝙳𝙰𝚁𝙳 𝙷𝙾 𝚁𝙰𝙷𝙰 𝙷 𝙺𝚈𝙰 𝙺𝙰𝚁𝚄" , "𝙿𝙰𝚃𝙰 𝙷𝙰𝙸 𝙰𝙰𝙹 𝙼𝙴𝚁𝙴 𝙿𝙰𝙿𝙰 𝙼𝚄𝙹𝙷𝙴 𝙶𝙷𝚄𝙼𝙰 𝙺𝙴 𝙻𝙰𝚈𝙴𝙽𝙶𝙴 𝙱𝙰𝙷𝙰𝚁" , "𝙾𝚈𝙴 𝙼𝙴 𝙰𝙱𝙷𝙸 𝙼𝙰𝙼𝙾𝚂𝙷 𝙺𝙷𝙰𝙽𝙴 𝙼𝙴 𝙱𝙰𝚂𝚈 𝙷𝚄" , "𝚈𝙰𝚁 𝙶𝙾𝙻𝙶𝙰𝙿𝙿𝙴 𝚃𝙾 𝙺𝙷𝙰 𝙻𝙴𝙽𝙴 𝙳𝙾" , "𝙷𝙰𝙳 𝙷𝙴 𝚈𝙰𝚁" , "𝙺𝚈𝙰 𝙷𝙰𝙸" , "𝚃𝚄𝙼 𝙽𝙷𝙸 𝚂𝚄𝙳𝙷𝚁𝙾𝙶𝙴" , "𝙼𝙴𝚁𝙰 𝚂𝙰𝚁 𝙳𝙰𝚁𝙳 𝙷𝙾 𝚁𝙰𝙷𝙰 𝙷 𝚈𝙰𝚁" , "𝙼𝙴 𝙰𝙱𝙷𝙸 𝙳𝚁. 𝚂𝙴 𝙰𝙰𝚈𝙸 𝙷𝚄 𝙼𝚄𝙹𝙷𝙴 𝙿𝙰𝚁𝙴𝚂𝙷𝙰𝙽 𝙼𝙰𝚃 𝙺𝙰𝚁𝙾" , "𝙺𝚈𝙰 𝚈𝙰𝚁 𝚃𝚄𝙼 𝙱𝙷𝙸 𝙱𝙰𝙺𝚁𝙸𝚈𝙾 𝙺𝙾 𝙲𝙷𝙰𝚁𝙰𝚃𝙴 𝚁𝙴𝙷𝚃𝙴 𝙷𝙾" , "𝙺𝚈𝙰 𝙰𝙰𝙿𝙺𝙸 𝙼𝙰𝙼𝙼𝙰 𝙽𝙴 𝙿𝙸𝚃 𝙺𝙰𝚁 𝙱𝙷𝙰𝙶𝙰 𝙳𝙸𝚈𝙰 𝙺𝚈𝙰" , "𝚃𝚄𝙼 𝙽𝙷𝙸 𝙿𝙰𝚃𝙾𝙶𝙴 𝙿𝙰𝚃𝙰 𝙷𝙰𝙸 𝙼𝚄𝙹𝙷𝙴 𝙴𝚂𝙻𝙸𝚈𝚁 𝙼𝙴 𝙻𝙸𝙽𝙴 𝙷𝙸 𝙽𝙷𝙸 𝙳𝙴 𝚁𝙰𝙷𝙸 𝚃𝚄𝙼𝙺𝙾" , "𝙰𝙰𝙿𝙽𝙸 𝙶𝙵 𝚂𝙴 𝙱𝙰𝙰𝚃 𝙽𝙷𝙸 𝙺𝙰𝚁𝚃𝙴 𝚈𝙰𝙷𝙰 𝙼𝚄𝙷 𝙼𝙰𝚁 𝚁𝙴𝙷𝙴 𝙷𝙾 𝙶𝙰𝙳𝙷𝙴" , "𝙾𝚈𝙴 𝚂𝚄𝙽𝙸𝚈𝙴 𝙽𝙰" , "𝙽𝙰𝙷𝙰 𝙺𝙴 𝙰𝙰𝙾 𝙿𝙷𝙴𝙻𝙴 𝚃𝚄𝙼 𝙿𝚄𝚁𝙰 𝙶𝚁𝙾𝚄𝙿 𝙺𝙷𝙰𝚁𝙰𝙱 𝙺𝙰𝚁 𝚁𝙰𝙺𝙷𝙰 𝙷𝙰𝙸" ];
  var rand = tl[Math.floor(Math.random() * tl.length)]

    if ((event.body.toLowerCase() == "chutiya bot") || (event.body.toLowerCase() == "chutiye bot") || (event.body.toLowerCase() == "chumtiya bot") || (event.body.toLowerCase() == "chumtiye bot")) {
     return api.sendMessage("Hmm... Tu Chutiya PhLe Ungli Kyun Ki Chomu 😾", threadID);
   };

   if ((event.body.toLowerCase() == "🤮") || (event.body.toLowerCase() == "🤮")) {
     return api.sendMessage("Konsa mahina chal raha hai 😝", threadID);
   };

    if ((event.body.toLowerCase() == "🤗") || (event.body.toLowerCase() == "🤗")) {
     return api.sendMessage("Hug me baby ☺️", threadID);
   };

   if ((event.body.toLowerCase() == "sim") || (event.body.toLowerCase() == "simsimi")) {
     return api.sendMessage("Prefix Kon Lagayega? Pehle Prefix Lagao Fir Likho Sim", threadID);
   };
  
   if ((event.body.toLowerCase() == "hi") || (event.body.toLowerCase() == "hello") ||(event.body.toLowerCase() == "hlw") || (event.body.toLowerCase() == "helo")) {
     return api.sendMessage("Hello, Hi, Bye bye. Ye sab ke alawa kuch bolna nhi ata Kya tujhe", threadID);
   };

   if ((event.body.toLowerCase() == "bc") || (event.body.toLowerCase() == "bc")) {
     return api.sendMessage("Ye Bc Kya HoTa Hai 🤔 ", threadID);
   };

   if ((event.body.toLowerCase() == "lol") || (event.body.toLowerCase() == "lol bot")) {
     return api.sendMessage("Khud ko Kya LeGend Samjhte Ho 😂", threadID);
   };

   if ((event.body.toLowerCase() == "morning") || (event.body.toLowerCase() == "good morning")) {
     return api.sendMessage("Ꮆɵɵɗ Ɱ❍ɽƞɪɪƞɠ Ɛⱱɛɽɣ❍ƞɛ🌅, Ƭɽɣ ꌗɵɱɛ Cɵffɛɛ ❍ɽ Ƭɛɑ Ƭ❍ Ꮗɑҡɛ Uƥ☕✨💫", threadID);
   };

   if ((event.body.toLowerCase() == "anyone") || (event.body.toLowerCase() == "any")) {
     return api.sendMessage("Main Hun Naw Jaaneman ❤️", threadID);
   };

   if ((event.body.toLowerCase() == "priyansh") || (event.body.toLowerCase() == "priyansh rajput") || (event.body.toLowerCase() == "priyansh") || (event.body.toLowerCase() == "prince")) {
     return api.sendMessage( "Busy HoGa Work Me Main t0o Hun Naw 😘",threadID);

       
   };

   if ((event.body.toLowerCase() == "owner") || (event.body.toLowerCase() == "Owner")) {
     return api.sendMessage("💝🥀𝐎𝐖𝐍𝐄𝐑:- ☞𝕻𝖗𝖎𝖞𝖆𝖓𝖘𝖍 𝕽𝖆𝖏𝖕𝖚𝖙☜ 💫\n🖤𝚈𝚘𝚞 𝙲𝚊𝚗 𝙲𝚊𝚕𝚕 𝙷𝚒𝚖 ℙ𝕣𝕚𝕪𝕒𝕟𝕤𝕙🖤\n😳𝐇𝐢𝐬 𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐢𝐝🤓:- ☞ www.facebook.com/priyanshu.rajput.official\n👋For Any Kind Of Help Contact On Telegram  Username 👉 @Priyanshrajput😇", threadID);
   };

   if ((event.body.toLowerCase() == "tumhe banaya kon hai") || (event.body.toLowerCase() == "tumko banaya kisne")) {
     return api.sendMessage("Priyansh  ❤️ My Creator. He loves me & Edit Me Daily. Ye Bot Sirf Owner k Liye h. Mujhe Aap logo ko Hasane k liye banya gya h Toh Muh Ladkaye Mat Rakkha Karo. Har Waqt Haste Raho.", threadID);
   };

  if ((event.body.toLowerCase() == "bot admin") || (event.body.toLowerCase() == "bot ka admin kon ha")) {
     return api.sendMessage("He is Priyansh. He Gives his name Priyansh everywhare", threadID);
   };

   if ((event.body.toLowerCase() == "shadi karoge") || (event.body.toLowerCase() == "mujhse shadi karoge?")) {
     return api.sendMessage("hanji, karunga lekin baccha. apke pet m hoga. manjur h?", threadID);
   };

   if ((event.body.toLowerCase() == "chup") || (event.body.toLowerCase() == "stop") || (event.body.toLowerCase() == "chup ho ja") || (event.body.toLowerCase() == "chup kar")) {
     return api.sendMessage("Nhi rahunga. 😼 Mujhe Bolna H. Tumhe Koi Haq nhi Mujhe Chup Karane ka. Mera Zuban. M Bolunga", threadID);
   };

   if ((event.body.toLowerCase() == "bts") || (event.body.toLowerCase() == "btc")) {
     return api.sendMessage("Tu H Btc. Bhos DK", threadID);
   };

   if ((event.body.toLowerCase() == "malik se bakchodi") || (event.body.toLowerCase() == "malik se backchodi") || (event.body.toLowerCase() == "malkin se bakchodi") || (event.body.toLowerCase() == "malkin se backchodi")) {
     return api.sendMessage("srry malik maaf kr do ab nhi kruga 🥺🙏", threadID);
   };

   if ((event.body.toLowerCase() == "gand") || (event.body.toLowerCase() == "gandu") || (event.body.toLowerCase() == "lund") || (event.body.toLowerCase() == "land")) {
     return api.sendMessage("Gand m jyada khujli h toh banana 🍌 under le le. :))))", threadID);
   };

   if ((event.body.toLowerCase() == "chumma de") || (event.body.toLowerCase() == "kiss me")) {
     return api.sendMessage("️Kis khushi me, Me sirf Apni gf ko kiss karta hu", threadID);
   };

   if ((event.body.toLowerCase() == "nice") || (event.body.toLowerCase() == "thank you") || (event.body.toLowerCase() == "thank you bot") || (event.body.toLowerCase() == "thank you maliha")) {
     return api.sendMessage("️M hu hi itni Accha. sab log Tarref karte hai meri.", threadID);
   };

   if ((event.body.toLowerCase() == "😡") || (event.body.toLowerCase() == "😤") || (event.body.toLowerCase() == "😠") || (event.body.toLowerCase() == "🤬") || (event.body.toLowerCase() == "😾")) {
     return api.sendMessage("️🥺 M toh Sirf Mazak Kr Rha Tha🥺. Gussa Mat Karo. Ek Chummi Lo aur Shant Raho 😘", threadID);
   };

   if ((event.body.toLowerCase() == "😞") || (event.body.toLowerCase() == "😔") || (event.body.toLowerCase() == "😣") || (event.body.toLowerCase() == "☹️") || (event.body.toLowerCase() == "😟") || (event.body.toLowerCase() == "😩") || (event.body.toLowerCase() == "😖") || (event.body.toLowerCase() == "😫") || (event.body.toLowerCase() == "😦") || (event.body.toLowerCase() == "😧") || (event.body.toLowerCase() == "😥") || (event.body.toLowerCase() == "😓") || (event.body.toLowerCase() == "😰")) {
     return api.sendMessage("️Kya huva, Sad kyu ho, Mujhe batao", threadID);
   };


   if ((event.body.toLowerCase() == "hm") || (event.body.toLowerCase() == "hmm")) {
     return api.sendMessage("️Hmm Hmm Na Karke Sidha Sidha bolo. Hey Marry Me🙈", threadID);
   };

   if ((event.body.toLowerCase() == "😢") || (event.body.toLowerCase() == "😭") || (event.body.toLowerCase() == "🥺") || (event.body.toLowerCase() == "🥹")) {
     return api.sendMessage("️Kya huva, Ro kyu rahe ho, Me huna to phir kyu rona. Ruko me abhi chocolate 🍫 deta hu likho ☞Chocolate☜", threadID);
   };

   if ((event.body.toLowerCase() == "😷") || (event.body.toLowerCase() == "🤕") || (event.body.toLowerCase() == "🤧") || (event.body.toLowerCase() == "🤒")) {
     return api.sendMessage("️Kya huva, Tabiyat kharab hai kya, Mujhe batao me abhi medicine 💊💉 le aata hu😇", threadID);
   };

   if ((event.body.toLowerCase() == "name") || (event.body.toLowerCase() == "naam") || (event.body.toLowerCase() == "nam")) {
     return api.sendMessage("️Name m kya rakkha h. tum kam pe dhyan do.", threadID);
   };

   if ((event.body.toLowerCase() == "bot k bacche") || (event.body.toLowerCase() == "bot ke bacche")) {
     return api.sendMessage("️meri baccha toh Tumhare Pet Me Hai.", threadID);
   };

   if ((event.body.toLowerCase() == "pic do") || (event.body.toLowerCase() == "photo do")) {
     return api.sendMessage("️Me toh Andha Hu Dekh nhi sakta", threadID);
   };

   if ((event.body.toLowerCase() == "jai shree ram") || (event.body.toLowerCase() == "ram") || (event.body.toLowerCase() == "ram ram")) {
    return api.sendMessage("️𝗝𝗮𝗶 𝗦𝗵𝗿𝗲𝗲 𝗥𝗮𝗺 😇", threadID);
   };

   if ((event.body.toLowerCase() == "bot banake do") || (event.body.toLowerCase() == "mujhe bhi chaiye")) {
     return api.sendMessage("️Khud hi karlona. tumhe kya kuch nhi ata h?", threadID);
   };

   if ((event.body.toLowerCase() == "🙂") || (event.body.toLowerCase() == "🙃")) {
     return api.sendMessage("️Man Toh Accha H Nhi. Kam  Se Kam Shakal Toh Accha Karlo Meri Jaan", threadID);
   };

  if ((event.body.toLowerCase() == "🤥") || (event.body.toLowerCase() == "🤥")) {
     return api.sendMessage("️Bhai teri to naak hi etni lambi hai uski jarurat hi nahi padti hogi tujhe to🤭🤭🤭🤭", threadID);
   };

  if ((event.body.toLowerCase() == "🤔") || (event.body.toLowerCase() == "🤨")) {
     return api.sendMessage("️Kya soch rahe ho etna 🤨", threadID);
   };

   if ((event.body.toLowerCase() == "🥴") || (event.body.toLowerCase() == "🥴")) {
     return api.sendMessage("️Oye nashedi 😂😂😂", threadID);
   };

  if ((event.body.toLowerCase() == "😶") || (event.body.toLowerCase() == "😶")) {
     return api.sendMessage("️Are are lips kaha gaye gf/bf ke sath kiss karte time usi ne to nahi kha liye 😜😜", threadID);
   };

  if ((event.body.toLowerCase() == "😉") || (event.body.toLowerCase() == "😉")) {
     return api.sendMessage("️Aankh kyu maar rahe ho, Me bahut shareef hu🥺", threadID);
   };

   if ((event.body.toLowerCase() == "😱") || (event.body.toLowerCase() == "😨")) {
     return api.sendMessage("️Kya huva bhoot dekh liya kya 👻👻", threadID);
   };
  
  if ((event.body.toLowerCase() == "😒") || (event.body.toLowerCase() == "🙄")) {
     return api.sendMessage("️️𝐓𝐢𝐫𝐜𝐡𝐢 𝐧𝐚𝐳𝐚𝐫𝐢𝐲𝐚 𝐦𝐨𝐫𝐢 𝐡𝐚𝐚𝐲𝐞 𝐡𝐚𝐚𝐲𝐞 𝐡𝐚𝐚𝐲𝐞 🙈", threadID);
   };

   if ((event.body.toLowerCase() == "nobody loves me") || (event.body.toLowerCase() == "nobody love me") || (event.body.toLowerCase() == "koi pyar nhi karta")) {
     return api.sendMessage("️Me huna baby mere pass aao 🥰🤗. Me karunga na aapko payar 🙈 (londo tum dur hi rahna saalo 😑)", threadID);
   };

   if ((event.body.toLowerCase() == "🤦🏻‍♂") || (event.body.toLowerCase() == "🤦🏻‍♀")) {
     return api.sendMessage("Are apne muh pe kyu maar rahe ho, Mujhe batao kya huva?😬", threadID);
   };
   
   if ((event.body.toLowerCase() == "😂") || (event.body.toLowerCase() == "😁") || (event.body.toLowerCase() == "😆") || (event.body.toLowerCase() == "🤣") || (event.body.toLowerCase() == "😸") || (event.body.toLowerCase() == "😹")) {
     return api.sendMessage("Enni hasi kyu aa rahi hai🤣, Es hasi ke piche ka raaz kya hai batao", threadID);
   };

   if ((event.body.toLowerCase() == "🥰") || (event.body.toLowerCase() == "😍") || (event.body.toLowerCase() == "😻") || (event.body.toLowerCase() == "❤️")) {
     return api.sendMessage("🦋🌿Aƞƙɧ❍ Ɱɛ Ƥɣɑɽ͢  Ɗɪɭɱɛ Ƙɧuɱɑɽ🌬️🌍 ••Ƥɣɑɽ Ƭ❍ɧ Ƞɧɪ Ƙɒɽ ɭɪɣɑ Ɱuȷɧʂɛ>³••🕊️🍎😍", threadID);
   };

   if ((event.body.toLowerCase() == "kese ho") || (event.body.toLowerCase() == "kaise ho") || (event.body.toLowerCase() == "kese ho ji") || (event.body.toLowerCase() == "how are you") || (event.body.toLowerCase() == "how are you?")) {
     return api.sendMessage("M Tabhi Accha hota hu, Jab Apko Hasta Huye Dekhta hu☺️", threadID);
   };

   if ((event.body.toLowerCase() == "is the bot sad") || (event.body.toLowerCase() == "is the bot sad")) {
     return api.sendMessage("Why can't I be sad because of everyone <3 love you <3", threadID);
   };

   if ((event.body.toLowerCase() == "does the bot love you") || (event.body.toLowerCase() == "does the bot love you")) {
     return api.sendMessage("Yes I love you and everyone so much", threadID);
   };

   if ((event.body.toLowerCase() == "bot goes to sleep") || (event.body.toLowerCase() == "bot goes to sleep")) {
     return api.sendMessage("I'm a bot, you're the one who should go to sleep <3", threadID);
   };

  if ((event.body.toLowerCase() == "🤖") || (event.body.toLowerCase() == "🤖")) {
     return api.sendMessage("Saalo chidda rahe ho mujhe", threadID);
   };

   if ((event.body.toLowerCase() == "has the bot eaten yet") || (event.body.toLowerCase() == "bot an comrade")) {
     return api.sendMessage("I'm full when I see you eat <3", threadID);
   };

  if ((event.body.toLowerCase() == "lob you") || (event.body.toLowerCase() == "i lob you")) {
     return api.sendMessage("Lob You too", threadID);
   };

   if ((event.body.toLowerCase() == "does the bot love me") || (event.body.toLowerCase() == "does the bot love me")) {
     return api.sendMessage("Yes <3", threadID);
   };

   if ((event.body.toLowerCase() == "&fuck") || (event.body.toLowerCase() == "&Fuck")) {
     return api.sendMessage("🏔️🏝️Priyansh Ƞɛ ꌗƥɛçɪɑɭɭɣ Ƭuɱ 🌊🪺Jɑɪʂɛ Ƭɧɑɽƙɪɣɵ Ƙɛ Ɬɪɣɛ•• 🏞️🌬️Ɣɑɧ çɵɱɱɑƞɗ Ɦɑʈɑ Ɗɪɣɑ Ɦɑɪ↗↘ Sɵɽɽɣ Ɠɣuʂ••😹🫶", threadID);
   };

  if ((event.body.toLowerCase() == "ami priyansh") || (event.body.toLowerCase() == "ami diya") || (event.body.toLowerCase() == "main amrita") || (event.body.toLowerCase() == "main priyansh") || (event.body.toLowerCase() == "main diya")) {
     return api.sendMessage("🕊️🍎...Aɭɛ Ɱɛɹɛ Ɓɑɓɣ Ƙɛʂɛ Ɦɵ ɑɑp😚🍒", threadID);
   };
   mess = "{name}"
  
  if (event.body.indexOf("Bot") == 0 || (event.body.indexOf("bot") == 0)) {
    var msg = {
      body: `${name}, ${rand}`
    }
    return api.sendMessage(msg, threadID, messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }
