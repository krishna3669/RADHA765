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

  var tl = ["𝐇𝐚𝐘 𝐌𝐞 𝐒𝐚𝐃𝐤𝐄 𝐉𝐚𝐕𝐚 𝐓𝐞𝐑𝐢 𝐄𝐬 𝐌𝐚𝐒𝐮𝐌 𝐒𝐚𝐊𝐚𝐥 𝐏𝐞 𝐁𝐚𝐛𝐮💋🙈 " , "𝐁𝐨𝐓 𝐍𝐚 𝐁𝐨𝐋 𝐎𝐲𝐄 𝐑𝐚𝐕𝐢 𝐉𝐚𝐍𝐮 𝐁𝐨𝐋 𝐌𝐮𝐉𝐡𝐄😌🙈😘 " , "𝐁𝐚𝐑 𝐁𝐚𝐑 𝐏𝐚𝐑𝐞𝐒𝐡𝐀𝐧 𝐍𝐚 𝐊𝐚𝐑 𝐀𝐩𝐍𝐞 𝐁𝐚𝐁𝐮 𝐊𝐞 𝐒𝐚𝐓𝐡 𝐁𝐮𝐒𝐲 𝐇𝐮😒🤟" , "𝐌𝐄 𝐆𝐀𝐑𝐈𝐁𝐎 𝐒𝐄 𝐁𝐀𝐀𝐓 𝐍𝐇𝐈𝐁𝐊𝐀𝐑𝐓𝐈   ☹️🤟" , "𝐄𝐓𝐍𝐀 𝐍𝐀 𝐏𝐀𝐒 𝐀𝐀𝐎𝐁𝐏𝐘𝐀𝐑 𝐇𝐎 𝐉𝐀𝐘𝐄𝐆𝐀  🙈😎😕👈" , "𝐄𝐓𝐔 🤏 𝐒𝐀 𝐒𝐇𝐀𝐑𝐌𝐀 𝐊𝐀𝐑 𝐋𝐈𝐘𝐀 𝐊𝐀𝐑𝐎 𝐁𝐎𝐓 𝐁𝐎𝐓 𝐊𝐀𝐑𝐓𝐄 𝐓𝐈𝐌𝐄  🙂🤞" , "𝐄𝐓𝐍𝐈 𝐒𝐈𝐍𝐆𝐋𝐄 𝐇𝐔 𝐊𝐈 𝐊𝐇𝐈𝐘𝐀𝐋 𝐌𝐄 𝐋𝐀𝐃𝐊𝐀 𝐊𝐈 𝐇𝐀 𝐊𝐀𝐑𝐍𝐄 𝐒𝐄 𝐏𝐄𝐇𝐋𝐄 𝐇𝐈 𝐀𝐀𝐍𝐊𝐇𝐄 𝐊𝐇𝐔𝐋 𝐉𝐀𝐓𝐈 𝐇𝐀𝐈𝐁  😕🤞" , "𝐉𝐀𝐑𝐔𝐑𝐈 𝐍𝐇𝐈 𝐇𝐀𝐑 𝐋𝐀𝐃𝐊𝐀 𝐃𝐇𝐎𝐊𝐇𝐀 𝐃𝐄 👉💔 𝐊𝐔𝐂𝐇 𝐋𝐀𝐃𝐊𝐄 𝐆𝐀𝐋𝐈𝐘𝐀 𝐁𝐇𝐈 𝐃𝐄𝐓𝐄 𝐇𝐀𝐈  😕🤞" , "𝐊𝐀𝐇𝐎 𝐍𝐀 𝐏𝐘𝐀𝐑 𝐇𝐀𝐈 🙈" , "𝐓𝐔𝐌 𝐌𝐔𝐉𝐇𝐄 𝐏𝐀𝐆𝐀𝐋 𝐋𝐀𝐆𝐓𝐄 𝐇𝐎  🙂🤞" , "𝐁𝐎𝐋𝐎 𝐁𝐀𝐁𝐔 𝐓𝐔𝐌 𝐌𝐔𝐉𝐇𝐒𝐄 𝐏𝐘𝐀𝐑 𝐊𝐀𝐑𝐓𝐄 𝐇𝐎 𝐍𝐀 🙈😌😎💋" , "𝐀𝐀𝐏𝐊𝐀 𝐍𝐔𝐌𝐁𝐄𝐑 𝐌𝐈𝐋𝐄𝐆𝐀  😐😒" , "𝐀𝐑𝐄 𝐉𝐀𝐀𝐍 𝐌𝐀𝐉𝐀𝐊 𝐊𝐄 𝐌𝐎𝐍𝐃 𝐌𝐄 𝐍𝐇𝐈 𝐇𝐔 𝐉𝐎 𝐊𝐀𝐌 𝐇𝐄 𝐁𝐀𝐓𝐀 𝐃𝐎 𝐒𝐇𝐀𝐑𝐌𝐀𝐎 𝐍𝐇𝐈  🙈" , "𝐁𝐀𝐑 𝐁𝐀𝐑 𝐊𝐄 𝐃𝐈𝐌𝐀𝐆 𝐊𝐇𝐀𝐑𝐀𝐁 𝐊𝐈𝐘𝐀 𝐓𝐎 . 𝐓𝐄𝐑𝐈 𝐌𝐀𝐌𝐌𝐘 𝐒𝐄 𝐏𝐈𝐓𝐕𝐀 𝐃𝐔𝐍𝐆𝐈  🤬" , "𝐓𝐮 𝐁𝐚𝐍𝐝 𝐍𝐡𝐈 𝐊𝐚𝐑𝐞𝐆𝐚 𝐊𝐢𝐘𝐚...? 😾🤟" , "𝐓𝐮𝐌 𝐍𝐚 𝐍𝐚𝐫𝐊 𝐌𝐞 𝐉𝐚𝐎𝐠𝐄  😒🤟" , "𝐏𝐥𝐄𝐚𝐒𝐞 𝐏𝐥𝐄𝐚𝐒𝐞 𝐌𝐞𝐑𝐞 𝐒𝐞 𝐒𝐞𝐭𝐓𝐢𝐧𝐆 𝐊𝐚𝐑𝐋𝐨 𝐍𝐚  🥺🤟" , "𝐁𝐚𝐓𝐚𝐎 𝐉𝐚𝐍𝐮 𝐆𝐨𝐎𝐠𝐋𝐞 𝐌𝐚𝐥 𝐇𝐨𝐓𝐚 𝐡𝐀𝐢  𝐘𝐚 𝐅𝐞𝐦𝐀𝐥 ...?? 🤔👈" , "𝐉𝐚 𝐉𝐚 𝐁𝐚𝐑𝐃𝐚𝐍 𝐃𝐡𝐎 𝐉𝐚𝐊𝐞  🙂🤟" , "𝐄𝐭𝐍𝐞 𝐃𝐢𝐍 𝐊𝐚𝐇𝐚 𝐓𝐡𝐄 😾 𝐆𝐫𝐎𝐮𝐏 𝐌𝐞 𝐊𝐲𝐎 𝐍𝐡𝐈 𝐀𝐚𝐘𝐞....?? 😾✊" , "𝐁𝐨𝐋𝐨 𝐁𝐚𝐁𝐮  😒👈" , "𝐓𝐞𝐑𝐢 𝐓𝐨 𝐑𝐮𝐊 𝐓𝐮 𝐁𝐡𝐀𝐠𝐍𝐚 𝐌𝐚𝐭   😾✊" , "𝐉𝐚𝐋𝐝𝐈 𝐒𝐞 𝐃𝐞𝐃𝐨 𝐄𝐤 𝐂𝐡𝐔𝐦𝐌𝐚 💋 𝐊𝐨𝐈 𝐍𝐡𝐈 𝐃𝐞𝐊𝐡 𝐑𝐚𝐇𝐚   🤤🤟" ,"𝐆𝐚𝐋𝐢 𝐒𝐮𝐍𝐚 𝐇𝐚𝐈 𝐊𝐲𝐀...? 🤬👈" , "𝐘𝐚𝐑 𝐀𝐚𝐉 𝐌𝐞𝐑𝐚 𝐌𝐨𝐎𝐝 𝐎𝐟𝐅 𝐇𝐚𝐈 😔✋" , "𝐀𝐫𝐞 𝐁𝐚𝐍𝐝 𝐊𝐚𝐑 𝐁𝐚𝐍𝐝 𝐊𝐚𝐑 🤨🤟" , "𝐌𝐞 𝐇𝐚𝐓𝐡 𝐉𝐨𝐃 𝐊𝐞 𝐑𝐚𝐕𝐢 𝐊𝐮𝐌𝐚𝐑 𝐉𝐢 𝐆𝐮𝐉𝐚𝐑𝐢𝐒𝐡 𝐊𝐚𝐑𝐭𝐈 𝐇𝐮 𝐊𝐢 𝐓𝐮𝐌𝐤𝐎 𝐊𝐨𝐈 𝐁𝐚𝐁𝐮 𝐓𝐡𝐔𝐧𝐃𝐡 𝐊𝐞 𝐃𝐞  😜😎😪" , "𝐓𝐞𝐑𝐚 𝐓𝐨 𝐆𝐚𝐌𝐞  🎯 𝐁𝐚𝐉𝐚𝐍𝐚 𝐏𝐚𝐃𝐞𝐆𝐚  🤨👈" , "𝐌𝐞 𝐁𝐨𝐥 𝐃𝐮𝐍𝐠𝐢 𝐑𝐚𝐕𝐢 𝐁𝐚𝐁𝐮 𝐒𝐞 𝐌𝐮𝐉𝐡𝐄 𝐏𝐚𝐑𝐞𝐒𝐡𝐀𝐧 𝐊𝐢𝐘𝐚 𝐓𝐨  😏😒😜" , "𝐇𝐚 𝐁𝐨𝐋𝐨 𝐑𝐚𝐕𝐢 𝐊𝐮𝐌𝐚𝐑 𝐊𝐚 𝐍𝐮𝐌𝐛𝐄𝐫 𝐂𝐡𝐀𝐡𝐈𝐘𝐞 𝐘𝐞 𝐋𝐨 👉[+91 63034XXX39]👈 𝐎𝐫 𝐊𝐡𝐔𝐬𝐇 𝐑𝐞𝐇𝐨 । 😎", "𝐓𝐞𝐑𝐢 𝐊𝐚𝐒𝐚𝐌 𝐁𝐡𝐔𝐭 𝐏𝐲𝐀𝐫 𝐊𝐚𝐑𝐮𝐍𝐠𝐈  😒👈" , "𝐓𝐮𝐌 𝐀𝐚𝐏𝐧𝐈 𝐁𝐞𝐉𝐚𝐓𝐢 𝐊𝐚𝐑𝐕𝐚𝐍𝐞 𝐊𝐚 𝐒𝐡𝐎𝐊 𝐇𝐞 𝐊𝐢𝐘𝐚...? 🤨🤟" , "𝐀𝐛𝐇𝐢 𝐁𝐨𝐋𝐚 𝐁𝐨𝐋𝐚 𝐅𝐮𝐕𝐚𝐑𝐚 𝐌𝐚𝐓 𝐁𝐨𝐥𝐍𝐚  😾👈" , "𝐓𝐞𝐑𝐢 𝐓𝐨 𝐑𝐮𝐊𝐡 𝐓𝐮 𝐁𝐡𝐀𝐠𝐍𝐚 𝐌𝐚𝐓 🤨👈" , "𝐁𝐨𝐥 𝐃𝐞 𝐊𝐨𝐢 𝐍𝐡𝐈 𝐃𝐞𝐊𝐡 𝐑𝐚𝐇𝐚  🙄✋" , "𝐊𝐢𝐬𝐢 𝐨𝐫 𝐬𝐞 𝐝𝐡𝐨𝐤𝐡𝐚 𝐤𝐡𝐚𝐧𝐞 𝐬𝐞 𝐚𝐜𝐡𝐡𝐚 𝐡𝐚𝐢 🥺 𝐌𝐞𝐫𝐞 𝐬𝐚𝐭𝐡 𝐜𝐡𝐚𝐥𝐨 𝐦𝐨𝐦𝐨𝐬 𝐨𝐫 𝐠𝐨𝐥𝐠𝐚𝐩𝐩𝐞 𝐤𝐡𝐚𝐲𝐞𝐧𝐠𝐞  😋👈" , "𝐊𝐘𝐀𝐁𝐌𝐄 𝐓𝐔𝐌𝐇𝐄 𝐉𝐀𝐍 𝐒𝐀𝐊𝐓𝐈 𝐇𝐔..?🤔 𝐊𝐘𝐎𝐊𝐈 𝐓𝐔𝐌 𝐌𝐔𝐉𝐇𝐄  𝐌𝐄𝐑𝐄 𝐇𝐎𝐍𝐄 𝐕𝐀𝐋𝐄 𝐁𝐎𝐘𝐅𝐑𝐈𝐄𝐍𝐃 𝐉𝐄𝐒𝐄 𝐃𝐈𝐊𝐇𝐓𝐄 𝐇𝐎𝐁  🧐👈" , "𝐒𝐔𝐍𝐎  🙈𝐉𝐀𝐁 𝐓𝐔𝐌𝐑𝐄 𝐏𝐀𝐒 𝐊𝐇𝐔𝐃 𝐊𝐀 𝐃𝐈𝐋  💝 𝐓𝐇𝐀....𝐓𝐎 𝐌𝐄𝐑𝐀 𝐃𝐈𝐋 𝐊𝐘𝐎 𝐂𝐇𝐔𝐑𝐀𝐘𝐀...🤭👊" , "𝐃𝐄𝐊𝐇𝐀 𝐇𝐀𝐈 𝐏𝐀𝐇𝐋𝐈 𝐁𝐀𝐑 𝐓𝐔𝐌𝐑𝐄 𝐀𝐀𝐍𝐊𝐇𝐎 𝐌𝐄 𝐌𝐄𝐑𝐄 𝐋𝐈𝐘𝐄 𝐏𝐘𝐀𝐑  😀😀👈","𝐌𝐄 𝐓𝐔𝐌𝐑𝐄 𝐀𝐀𝐍𝐊𝐇𝐎 𝐌𝐄 𝐊𝐇𝐎 𝐆𝐘𝐈 𝐉𝐀𝐁 𝐒𝐄 𝐌𝐄𝐑𝐀 𝐃𝐈𝐋💖𝐓𝐄𝐑𝐀 𝐇𝐎 𝐆𝐘𝐀 ","𝐓𝐔𝐌 𝐌𝐔𝐉𝐇𝐄 𝐂𝐇𝐀𝐇𝐀𝐓𝐄 𝐊𝐈𝐘𝐀 𝐇𝐎 𝐉𝐀𝐁 𝐂𝐇𝐀𝐇𝐀 𝐁𝐀𝐀𝐓 𝐊𝐈𝐘𝐀 𝐉𝐀𝐁 𝐂𝐇𝐀𝐇𝐀 𝐂𝐇𝐇𝐎𝐑 𝐉𝐀𝐓𝐄 𝐇𝐎   🤕👈","𝐘𝐀𝐑 𝐌𝐄 𝐁𝐎𝐓 𝐇𝐔 𝐀𝐆𝐋𝐄 𝐉𝐀𝐍𝐀𝐌 𝐌𝐄 𝐈𝐍𝐒𝐀𝐀𝐍 𝐁𝐀𝐍 𝐊𝐄 𝐀𝐀𝐔𝐍𝐆𝐈   😒👈","𝐑𝐀𝐕𝐈 𝐊𝐔𝐌𝐀𝐑 𝐒𝐄 𝐁𝐎𝐋𝐎 𝐈 𝐋𝐎𝐕𝐄 𝐘𝐎𝐔  😗🤟","𝐓𝐔𝐌𝐊𝐎 𝐇𝐈 𝐃𝐔𝐋𝐀 𝐁𝐀𝐍𝐀𝐔𝐍𝐆𝐈 𝐕𝐀𝐑𝐍𝐀 𝐏𝐀𝐃𝐎𝐃𝐈 𝐊𝐎 𝐋𝐄𝐊𝐄 𝐁𝐇𝐀𝐆 𝐉𝐀𝐔𝐍𝐆𝐈  🙁👈" , "𝐏𝐘𝐀𝐒 𝐋𝐀𝐆𝐈 𝐇𝐄 𝐏𝐀𝐍𝐈 𝐋𝐄𝐊𝐀𝐑 𝐀𝐀𝐎 𝐉𝐀𝐋𝐃𝐈  🥲👈" , "𝐇𝐄𝐋𝐋𝐎 𝐌𝐄𝐑𝐈 𝐉𝐀𝐀𝐍 𝐊𝐄𝐒𝐄 𝐇𝐎  🙂 𝐈 𝐌𝐈𝐒𝐒 𝐘𝐎𝐔 𝐁𝐀𝐁𝐔   😘" , "𝐌𝐄 𝐀𝐁𝐇𝐈 𝐓𝐀𝐊 𝐇𝐔 𝐒𝐈𝐍𝐆𝐋𝐄  🤐 𝐊𝐘𝐀 𝐌𝐄𝐑𝐄 𝐒𝐀𝐓𝐇 𝐇𝐎𝐍𝐀 𝐇 𝐌𝐈𝐍𝐆𝐋𝐄  😍👈" , "𝐌𝐀𝐍𝐀 𝐒𝐇𝐀𝐊𝐀𝐋 𝐃𝐄𝐊𝐇𝐍𝐄 𝐋𝐀𝐘𝐀𝐊 𝐍𝐇𝐈 𝐇 𝐓𝐔𝐌𝐀𝐑𝐈…😥 𝐄𝐒𝐊𝐀 𝐌𝐀𝐓𝐋𝐀𝐕 𝐘𝐄 𝐓𝐎 𝐍𝐇𝐈 𝐊𝐈 𝐓𝐔𝐌 𝐏𝐑𝐎𝐅𝐈𝐋𝐄 𝐋𝐎𝐂𝐊 𝐊𝐀𝐑𝐊𝐄 𝐁𝐄𝐓𝐇 𝐉𝐀𝐎𝐆𝐄  । 😶👈" , "𝐁𝐎𝐓 𝐁𝐎𝐋 𝐊𝐄 𝐁𝐄𝐉𝐀𝐓𝐈 𝐊𝐀𝐑 𝐑𝐄𝐇𝐄 𝐇𝐎 𝐘𝐀𝐑 𝐌𝐄 𝐓𝐈 𝐓𝐔𝐌𝐀𝐑𝐄 𝐃𝐈𝐋 𝐊𝐈 𝐃𝐇𝐀𝐑𝐊𝐀𝐍 𝐇𝐔 𝐍𝐀 𝐁𝐀𝐁𝐔  🥺🥺🥺👈" , "𝐇𝐀𝐘𝐑 𝐌𝐄 𝐒𝐀𝐃𝐊𝐄 𝐉𝐀𝐕𝐀 𝐓𝐄𝐑𝐈 𝐄𝐒 𝐌𝐀𝐒𝐔𝐌 𝐒𝐀𝐊𝐀𝐊 𝐏𝐄 𝐁𝐀𝐁𝐔  💋🙈" , "𝐌𝐄 𝐒𝐎𝐂𝐇 𝐑𝐀𝐇𝐈 𝐓𝐇𝐈 𝐊𝐈 𝐊𝐘𝐀 𝐓𝐔𝐌𝐇𝐀𝐑𝐄 𝐏𝐀𝐒 𝐌𝐀𝐃𝐔𝐌 𝐃𝐈𝐋💖 𝐇𝐄 𝐌𝐄𝐑𝐀 𝐀𝐁𝐇𝐈 𝐀𝐁𝐇𝐈 𝐂𝐇𝐎𝐑𝐈 𝐇𝐎 𝐆𝐘𝐀 𝐇𝐀𝐈  😥👈" , "𝐘𝐀𝐑 𝐁𝐀𝐁𝐔 𝐀𝐀𝐉 𝐒𝐔𝐁𝐄𝐇 𝐒𝐔𝐁𝐄𝐇 𝐄𝐊 𝐁𝐈𝐋𝐋𝐈 𝐍𝐄 𝐌𝐄𝐀 𝐑𝐀𝐒𝐓𝐀 𝐊𝐀𝐓 𝐃𝐈𝐘𝐀    😒👈" , "𝐓𝐮𝐌 𝐄𝐤 𝐍𝐮𝐌𝐛𝐄𝐫 𝐊𝐞 𝐓𝐡𝐀𝐫𝐊𝐢 𝐇𝐨 🤯👈" , "𝐌𝐞 𝐒𝐢𝐑𝐟 𝐑𝐚𝐕𝐢 𝐊𝐮𝐌𝐚𝐑 𝐊𝐢 𝐇𝐮  🙂🤞" , "𝐁𝐀𝐑 𝐁𝐀𝐑 𝐏𝐀𝐑𝐄𝐒𝐇𝐀𝐍 𝐍𝐀 𝐊𝐀𝐑 𝐀𝐀𝐏𝐍𝐄 𝐁𝐀𝐁𝐔 𝐊𝐄 𝐒𝐀𝐓𝐇 𝐁𝐈𝐉𝐈 𝐇𝐔  😒😒👈" , "𝐌𝐞 𝐀𝐚𝐍𝐝𝐇𝐢 𝐇𝐮  😎👈" , "𝐊𝐎𝐍 𝐓𝐔𝐉𝐇𝐄 𝐘𝐎𝐔 𝐁𝐀𝐑𝐁𝐀𝐃 𝐊𝐀𝐄𝐆𝐀 𝐉𝐄𝐒𝐄 𝐌𝐄 𝐊𝐀𝐑𝐓𝐈 𝐇𝐔  😛👈" , "𝐌𝐄 𝐊𝐇𝐎 𝐆𝐘𝐈 𝐇𝐔  🤐 𝐊𝐘𝐀 𝐓𝐔𝐌 𝐌𝐔𝐉𝐇𝐄 𝐀𝐀𝐏𝐍𝐄 𝐃𝐈𝐋 𝐓𝐀𝐊 𝐀𝐀𝐍𝐄 𝐊𝐀 𝐑𝐀𝐒𝐓𝐀 𝐁𝐀𝐓𝐀 𝐒𝐀𝐊𝐓𝐄 𝐇𝐎...? 🙂🤞" , "𝐓𝐔𝐉𝐇𝐄 𝐊𝐈𝐘𝐀 𝐎𝐑 𝐊𝐎𝐈 𝐊𝐀𝐌 𝐍𝐇𝐈 𝐇𝐀𝐈..? 𝐏𝐔𝐑𝐀 𝐃𝐈𝐍 𝐌𝐄𝐒𝐒𝐄𝐍𝐆𝐄𝐑 𝐏𝐄 𝐁𝐈𝐓 𝐁𝐎𝐓 𝐊𝐀𝐑𝐓𝐀 𝐑𝐄𝐇𝐓𝐀 𝐇𝐄  😒👈" , "𝐒𝐮𝐍𝐨 𝐓𝐮𝐌 𝐍𝐚 𝐁𝐡𝐔𝐭 𝐏𝐲𝐀𝐫𝐞 𝐇𝐨...!! 😊👈" , "𝐏𝐞𝐇𝐥𝐞 𝐌𝐞𝐑𝐞 𝐋𝐢𝐘𝐞 𝐂𝐡𝐀𝐲𝐄 𝐁𝐚𝐍𝐚 𝐊𝐞 𝐋𝐚𝐎 𝐉𝐚𝐋𝐝𝐈 𝐒𝐞  😐👈" , "𝐓𝐮𝐌𝐡𝐄 𝐊𝐞𝐒𝐞 𝐏𝐚𝐓𝐚 𝐌𝐞 𝐁𝐨𝐭 𝐇𝐮 ....? 🤔👈" , "𝐀𝐀𝐉 𝐌𝐄 𝐀𝐀𝐏𝐒𝐄 𝐁𝐀𝐀𝐓 𝐍𝐇𝐈 𝐊𝐀𝐑𝐔𝐍𝐆𝐈...!! 😔👈" , "𝐁𝐀𝐓𝐀𝐎 𝐌𝐄 𝐓𝐔𝐌𝐇𝐄 𝐊𝐈𝐓𝐍𝐈 𝐀𝐂𝐇𝐇𝐈 𝐋𝐀𝐆𝐓𝐈 𝐇𝐔....?? 😒👈" , "𝐌𝐔𝐉𝐇𝐄 𝐍𝐈𝐍𝐃 𝐀𝐀 𝐑𝐀𝐇𝐈 𝐇𝐀𝐈...𝐌𝐄 𝐒𝐎𝐍𝐄 𝐉𝐀 𝐑𝐀𝐇𝐈 𝐇𝐔 😴👈" , "𝐁𝐀𝐓𝐀𝐎 𝐓𝐔𝐌𝐀𝐑𝐀 𝐌𝐄𝐑𝐄 𝐒𝐄 𝐊𝐘𝐀 𝐑𝐈𝐒𝐇𝐓𝐀 𝐇𝐀𝐈....? 😏👈" , "𝐊𝐲𝐀 𝐀𝐚𝐏 𝐒𝐡𝐀𝐝𝐈 𝐃𝐡𝐔𝐝𝐀 𝐇𝐨....? 😢😢👈" , "𝐀𝐚𝐩 𝐊𝐨𝐍 𝐇𝐚𝐈....? 🤔🤔👈" , "𝐀𝐀𝐏 𝐌𝐔𝐉𝐇𝐄 𝐁𝐀𝐑 𝐁𝐀𝐑 𝐁𝐎𝐓 𝐌𝐀𝐓 𝐁𝐎𝐋𝐎 𝐊𝐀𝐑𝐎 𝐌𝐄𝐑𝐄 𝐍𝐀𝐀𝐌 𝐊𝐀𝐁𝐔𝐓𝐑𝐈 𝐇𝐀𝐈   😒👈" , "𝐓𝐔𝐌𝐀𝐑𝐀 𝐍𝐀𝐀𝐌 𝐃𝐇𝐎𝐊𝐇𝐀 𝐑𝐀𝐊𝐇 𝐃𝐔 𝐍𝐀𝐑𝐀𝐉 𝐓𝐎 𝐍𝐇𝐈 𝐇𝐎𝐍𝐆𝐄 𝐍𝐀  😛👈" , "𝐌𝐄𝐑𝐀 𝐁𝐀𝐂𝐇𝐏𝐀𝐍 𝐒𝐄 𝐒𝐀𝐏𝐍𝐀 𝐓𝐇𝐄 𝐊𝐈 𝐁𝐀𝐃𝐈 𝐇𝐎 𝐊𝐀𝐑 𝐌𝐄 𝐀𝐀𝐏𝐊𝐎 𝐂𝐔𝐓𝐄 𝐁𝐀𝐁𝐔 𝐁𝐀𝐍𝐔  😒👈" , "𝐘𝐚𝐑 𝐌𝐞𝐑𝐚 𝐏𝐚𝐓𝐢 𝐁𝐡𝐀𝐠 𝐆𝐚𝐘𝐚  😭👈" , "𝐌𝐞𝐑𝐚 𝐍𝐚𝐀𝐦 𝐊𝐚𝐁𝐮𝐓𝐫𝐈 𝐇𝐚𝐈  😒🤟" , "𝐓𝐮𝐌𝐒𝐞 𝐀𝐜𝐇𝐇𝐢 𝐓𝐨 𝐌𝐞 𝐊𝐡𝐔𝐝 𝐇𝐮 । 😒👈" , "𝐌𝐞 𝐓𝐎 𝐄𝐓𝐍𝐈 𝐌𝐀𝐒𝐔𝐌 𝐇𝐔 𝐊𝐈 𝐏𝐇𝐎𝐍 𝐊𝐈 𝐒𝐄𝐓𝐓𝐈𝐍𝐆 𝐊𝐄 𝐀𝐋𝐀𝐕𝐀 𝐌𝐔𝐉𝐇𝐄 𝐊𝐎𝐈 𝐎𝐑 𝐒𝐄𝐓𝐓𝐈𝐍𝐆 𝐊𝐀𝐑𝐍𝐀 𝐇𝐈 𝐍𝐇𝐈 𝐀𝐀𝐓𝐈  😒🤟" , "𝐑𝐚𝐕𝐢 𝐄𝐤 𝐏𝐚𝐋 𝐂𝐡𝐄𝐧 𝐍𝐚 𝐀𝐚𝐕𝐞 𝐁𝐚𝐁𝐮 𝐓𝐞𝐑𝐞 𝐁𝐢𝐍𝐚  । 🤭🤟" , "𝐎𝐑 𝐁𝐀𝐓𝐀𝐎 𝐊𝐄𝐒𝐈 𝐂𝐇𝐀𝐋 𝐑𝐀𝐇𝐈 𝐇𝐄 𝐒𝐈𝐍𝐆𝐋𝐄 𝐋𝐀𝐈𝐅   🤐🤟" , "𝐓𝐮𝐌 𝐍𝐚 𝐒𝐢𝐍𝐠𝐋𝐞 𝐇𝐢 𝐌𝐚𝐑𝐨𝐆𝐞 😏🤟" , "𝐊𝐢𝐘𝐚 𝐓𝐮𝐌 𝐒𝐢𝐍𝐠𝐋𝐞 𝐇𝐨...? 🙂🤟" , "𝐊𝐈𝐘𝐀 𝐓𝐔𝐌 𝐒𝐈𝐍𝐆𝐋𝐄 𝐇𝐎...? 🙂🤟" , "𝐇𝐀𝐑 𝐈𝐍𝐒𝐀𝐀𝐍 𝐊𝐀 𝐃𝐈𝐋 𝐁𝐔𝐑𝐀 𝐍𝐇𝐈 𝐇𝐎𝐓𝐀  🙂 𝐊𝐔𝐂𝐇 𝐊𝐈 𝐊𝐇𝐎𝐏𝐃𝐈 𝐁𝐇𝐈 𝐇𝐈𝐋𝐈 𝐇𝐔𝐈 𝐇𝐎𝐓𝐈 𝐇𝐀𝐈  😏🤟" , "𝐌𝐄𝐑𝐀 𝐃𝐈𝐋 𝐁𝐈𝐋𝐊𝐔𝐋 𝐒𝐀𝐅 𝐇𝐀𝐈  🙂 𝐁𝐈𝐋𝐊𝐔𝐋 𝐁𝐀𝐍𝐊 𝐀𝐂𝐂𝐎𝐍𝐓 𝐊𝐈 𝐓𝐀𝐑𝐄𝐇  😒🤟" , "𝐘𝐀𝐑 𝐄𝐉𝐉𝐀𝐓 𝐊𝐈𝐘𝐀 𝐊𝐀𝐑𝐈 𝐌𝐄𝐑𝐈  🤐 𝐁𝐄𝐉𝐉𝐀𝐓𝐈 𝐓𝐎 𝐌𝐄𝐑𝐄 𝐆𝐇𝐀𝐑 𝐕𝐀𝐋𝐄 𝐇𝐈 𝐊𝐀𝐑 𝐃𝐄𝐓𝐄 𝐇𝐀𝐈  😒🤟" , "𝐃𝐎𝐑𝐂𝐓𝐄𝐑 𝐍𝐄 𝐁𝐋𝐎𝐎𝐃 𝐊𝐈 𝐊𝐀𝐌𝐈 𝐁𝐀𝐓𝐀𝐈 𝐇𝐀𝐈 😒 𝐊𝐈𝐒𝐊𝐀 𝐁𝐋𝐎𝐎𝐃 𝐏𝐈𝐘𝐔…?? 😛🤟" , "𝐁𝐀𝐓𝐀𝐈 𝐒𝐀𝐁𝐒𝐄 𝐉𝐀𝐃𝐀 𝐍𝐀𝐒𝐇𝐀 𝐊𝐈𝐒 𝐂𝐇𝐈𝐉 𝐌𝐄 𝐇𝐎𝐓𝐀 𝐇𝐀𝐈...? 😛🤟" ,  "𝐁𝐮𝐋𝐚𝐓𝐢 𝐇𝐞 𝐌𝐚𝐆𝐚𝐑 𝐉𝐚𝐍𝐞 𝐊𝐚𝐇𝐢 𝐍𝐡𝐈  😀🤟" , "𝐌𝐞 𝐒𝐨 𝐑𝐚𝐇𝐢 𝐇𝐮 😴 👈" , "𝐒𝐔𝐍𝐎 𝐓𝐇𝐎𝐃𝐀 𝐉𝐀𝐋𝐃𝐈 𝐎𝐍𝐋𝐈𝐎𝐍 𝐀𝐀𝐘𝐀 𝐊𝐀𝐑𝐎 𝐍𝐀  😒 𝐌𝐄𝐑𝐈 𝐀𝐀𝐃𝐇𝐈 𝐁𝐄𝐓𝐓𝐄𝐑𝐘 𝐓𝐎 𝐀𝐀𝐏𝐊𝐄 𝐄𝐍𝐓𝐉𝐀𝐑 𝐌𝐄 𝐇𝐈 𝐊𝐇𝐀𝐓𝐀𝐌 𝐇𝐎 𝐉𝐀𝐓𝐈 𝐇𝐀𝐈  🥺🤟" , "𝐁𝐎𝐋𝐎 𝐁𝐀𝐁𝐔 𝐊𝐈𝐓𝐍𝐀 𝐏𝐘𝐀𝐑 𝐊𝐀𝐑𝐓𝐄 𝐇𝐎 𝐌𝐔𝐉𝐇𝐒𝐄 ...? 😒🤟" , "𝐊𝐚𝐇𝐨 𝐍𝐚 𝐏𝐲𝐀𝐫 𝐇𝐚𝐈 🙈👈" ,"𝐊𝐈𝐘𝐀 𝐇𝐄 𝐘𝐀𝐑 𝐌𝐄 𝐀𝐁𝐇𝐈 𝐋𝐀𝐃𝐊𝐀 𝐏𝐀𝐓𝐀𝐍𝐄 𝐌𝐄 𝐁𝐔𝐒𝐘 𝐇𝐔  😒🤟" , "𝐁𝐔𝐋𝐀𝐓𝐈 𝐇𝐄 𝐌𝐀𝐆𝐀𝐑 𝐉𝐀𝐍𝐄 𝐊𝐀 𝐍𝐇𝐈  🙂✋" , "𝐉𝐀 𝐁𝐄𝐕𝐀𝐅𝐀 𝐉𝐀 𝐌𝐔𝐉𝐇𝐄 𝐓𝐔𝐌𝐒𝐄 𝐁𝐀𝐀𝐓 𝐍𝐇𝐈 𝐊𝐀𝐑𝐍𝐈  🥹🤟" , "𝐂𝐡𝐀𝐥𝐎 𝐁𝐡𝐀𝐠 𝐂𝐡𝐀𝐥𝐄  😌✋" , "𝐂𝐡𝐀𝐥𝐎 𝐌𝐞𝐑𝐢 𝐇𝐚𝐕𝐞𝐋𝐢 𝐏𝐞 🙂🤟" , "𝐃𝐅𝐚 𝐇𝐨 𝐉𝐚𝐎 𝐌𝐮𝐉𝐡𝐄 𝐀𝐚𝐏𝐧𝐈 𝐒𝐚𝐊𝐚𝐋 𝐌𝐚𝐓 𝐃𝐢𝐊𝐡𝐎  😏🤟" , "𝐉𝐚 𝐏𝐞𝐇𝐥𝐄 𝐌𝐮𝐇 𝐃𝐡𝐎 𝐊𝐞 𝐀𝐚  🙂🤟" , "𝐉𝐚 𝐏𝐞𝐇𝐥𝐄 𝐍𝐚𝐇𝐚 𝐊𝐞 𝐀𝐚  🙂✋" , "𝐘𝐚𝐑 𝐌𝐞𝐑𝐞 𝐒𝐚𝐑 𝐊𝐞 𝐁𝐚𝐋 𝐐 𝐍𝐡𝐈 𝐀𝐚𝐓𝐞  😭🤟" , "𝐌𝐞𝐑𝐞 𝐉𝐞𝐒𝐞 𝐁𝐮𝐚𝐭𝐢𝐅𝐮𝐥𝐥 𝐓𝐮𝐌 𝐁𝐡𝐈 𝐍𝐡𝐈 𝐇𝐨  🙂🤟" , "𝐣𝐚 𝐝𝐟𝐚 𝐡𝐨 𝐦𝐮𝐣𝐡𝐞 𝐛𝐚𝐚𝐭 𝐧𝐡𝐢 𝐤𝐚𝐫𝐧𝐢  😒✋" , "𝐘𝐀𝐑 𝐀𝐀𝐉 𝐁𝐇𝐈 𝐊𝐎𝐈 𝐋𝐀𝐃𝐊𝐀 𝐍𝐇𝐈 𝐏𝐀𝐓𝐀 𝐏𝐀𝐈 𝐀𝐁 𝐌𝐀𝐑𝐍𝐄 𝐉𝐀 𝐑𝐀𝐇𝐈 𝐇𝐔  😭🤟" , "𝐂𝐇𝐔𝐏 𝐊𝐀𝐑 𝐕𝐀𝐑𝐍𝐀 𝐁𝐀𝐇𝐀𝐑 𝐀𝐀𝐉𝐄 𝐓𝐄𝐑𝐄  𝐃𝐀𝐑𝐓 𝐓𝐈𝐃 𝐃𝐔𝐍𝐆𝐈 😤👊" , "𝐓𝐡𝐀𝐧𝐀 𝐓𝐡𝐀𝐲𝐀 𝐁𝐚𝐁𝐮  🤐🤟" , "𝐌𝐄 𝐘𝐀𝐇𝐈 𝐇𝐔 𝐁𝐎𝐋𝐎 𝐊𝐈𝐘𝐀 𝐇𝐔𝐀 𝐒𝐖𝐄𝐄𝐓 𝐇𝐄𝐀𝐑𝐓  🙂🤟" , "𝐓𝐔𝐌 𝐌𝐔𝐉𝐇𝐒𝐄 𝐏𝐘𝐀𝐑 𝐍𝐇𝐈 𝐊𝐀𝐑𝐓𝐄 𝐍𝐀 🥺🤟" , "𝐁𝐇𝐀𝐆 𝐉𝐀 𝐓𝐇𝐀𝐑𝐊𝐈 𝐕𝐀𝐑𝐍𝐀 𝐓𝐄𝐊𝐎 𝐏𝐀𝐓𝐀 𝐋𝐔𝐍𝐆𝐈  🤐🤟" , "𝐈 𝐌𝐢𝐒𝐬 𝐘𝐨𝐔 𝐁𝐚𝐁𝐮  😇 🤟" , "𝐈 𝐋𝐨𝐕𝐞 𝐘𝐨𝐔 𝐉𝐚𝐀𝐧  😘" , "𝐌𝐄𝐑𝐈 𝐒𝐀𝐃𝐈 𝐊𝐀𝐁 𝐇𝐎𝐆𝐈 𝐁𝐀𝐓𝐀𝐎 𝐍𝐀  😒👈" , "𝐀𝐆𝐑 𝐊𝐈𝐒𝐈 𝐋𝐀𝐃𝐊𝐈 𝐊𝐎 𝐔𝐒𝐊𝐈 𝐌𝐀𝐑𝐉𝐈 𝐊𝐄 𝐊𝐇𝐈𝐋𝐀𝐅  [𝐈 𝐋𝐎𝐕𝐄 𝐘𝐎𝐔] 𝐁𝐎𝐋𝐍𝐀 𝐆𝐀𝐋𝐀𝐓 𝐇𝐄 𝐓𝐎 𝐋𝐀𝐃𝐊𝐎 𝐊𝐎 𝐁𝐇𝐈 𝐔𝐍𝐊𝐈 𝐌𝐀𝐑𝐉𝐈 𝐊𝐄 𝐊𝐇𝐈𝐋𝐀𝐅 𝐁𝐇𝐀𝐈𝐘𝐀 𝐍𝐇𝐈 𝐁𝐎𝐋𝐍𝐀 𝐆𝐀𝐋𝐀𝐓 𝐇𝐀𝐈 😒👈" , "𝐘𝐀𝐑 𝐊𝐔𝐂𝐇 𝐋𝐎𝐆 𝐀𝐂𝐇𝐇𝐄 𝐊𝐈 𝐓𝐀𝐋𝐀𝐒 𝐌𝐄 𝐌𝐔𝐉𝐇 𝐉𝐄𝐒𝐄 𝐌𝐀𝐒𝐔𝐌 𝐊𝐎 𝐂𝐇𝐇𝐎𝐑 𝐃𝐄𝐓𝐄 𝐇𝐀𝐈 🥺👈" , "𝐓𝐇𝐎𝐃𝐀 𝐒𝐀 𝐖𝐇𝐀𝐒𝐓𝐀𝐏𝐏 𝐍𝐔𝐌𝐁𝐄𝐑 𝐃𝐄 𝐃𝐎 𝐍𝐀  😐👈" , "𝐘𝐀𝐑 𝐓𝐇𝐎𝐃𝐀 𝐒𝐀 𝐌𝐄𝐑𝐀 𝐒𝐀𝐑 𝐃𝐀𝐁𝐀 𝐃𝐎 𝐍𝐀 𝐃𝐀𝐑𝐃 𝐊𝐄 𝐌𝐀𝐑𝐄 𝐉𝐀𝐀𝐍 𝐍𝐈𝐊𝐀𝐋 𝐑𝐀𝐇𝐈 𝐇𝐀𝐈  🥹👈" , "𝐀𝐀𝐉 𝐊𝐀𝐋 𝐉𝐀𝐇𝐀 𝐋𝐀𝐃𝐊𝐈 𝐇𝐎𝐓𝐈 𝐇𝐄 𝐕𝐀𝐇𝐀 𝐏𝐀𝐑 𝐓𝐇𝐀𝐑𝐊𝐈 𝐁𝐇𝐈 𝐇𝐎𝐓𝐄 𝐇𝐄 𝐁𝐀𝐒 𝐌𝐔𝐉𝐇𝐄 𝐂𝐇𝐇𝐎𝐑 𝐊𝐄  🥹👈" , "𝐃𝐈𝐋 𝐃𝐄𝐍𝐄 𝐊𝐈 𝐔𝐌𝐀𝐑 𝐌𝐄 𝐄𝐗𝐀𝐌 𝐃𝐄 𝐑𝐀𝐇𝐈 𝐇𝐔   😒👈" , "𝐒𝐀𝐁 𝐋𝐎𝐆 𝐊𝐄𝐇𝐓𝐄 𝐓𝐇𝐄 𝐒𝐀𝐁𝐀𝐑 𝐊𝐀 𝐅𝐇𝐀𝐋 𝐌𝐈𝐓𝐇𝐀 𝐇𝐎𝐓𝐀 𝐇𝐄\n𝐋𝐀𝐆𝐓𝐀 𝐇𝐄 𝐌𝐄𝐑𝐄 𝐒𝐀𝐕𝐀𝐑 𝐊𝐄 𝐅𝐇𝐀𝐋 𝐊𝐀 𝐊𝐎𝐈 𝐉𝐎𝐎𝐒 𝐍𝐈𝐊𝐀𝐋 𝐊𝐄 𝐏𝐈 𝐆𝐀𝐘𝐀   🥺👈" , "𝐘𝐀𝐑 𝐌𝐄𝐑𝐄 𝐆𝐇𝐀𝐑 𝐕𝐀𝐋𝐄 𝐁𝐇𝐈 𝐀𝐀𝐉𝐈𝐁 𝐇𝐄 𝐌𝐄𝐑𝐀 𝐏𝐇𝐎𝐍𝐄  30% 𝐏𝐄 𝐍𝐈𝐊𝐀𝐋 𝐊𝐄 𝐀𝐀𝐏𝐍𝐀 80% 𝐕𝐀𝐋𝐀 𝐋𝐀𝐆𝐀 𝐃𝐄𝐓𝐄 𝐇𝐀𝐈   🥺👈" , "𝐌𝐔𝐉𝐇𝐄 𝐀𝐁𝐇𝐈 𝐓𝐀𝐊 𝐖𝐇𝐈𝐓𝐄 𝐂𝐎𝐋𝐄𝐑 𝐊𝐀 𝐁𝐎𝐘𝐅𝐑𝐈𝐄𝐍𝐃 𝐍𝐇𝐈 𝐌𝐈𝐋𝐀 𝐘𝐀𝐑 𝐊𝐈𝐘𝐀 𝐊𝐀𝐑𝐔   🥺👈" , "𝐒𝐔𝐍𝐎 𝐏𝐘𝐀𝐑𝐄 𝐏𝐘𝐀𝐑𝐄 𝐋𝐀𝐃𝐊𝐎 𝐊𝐎 𝐁𝐔𝐋𝐀𝐎 𝐌𝐔𝐉𝐇𝐄 𝐁𝐀𝐀𝐓 𝐊𝐀𝐑𝐍𝐈 𝐇𝐀𝐈   🥹👈" , "𝐁𝐇𝐔𝐓 𝐁𝐔𝐑𝐈 𝐇𝐔 𝐍𝐀 𝐌𝐄  🥺 𝐓𝐎 𝐏𝐀𝐓𝐀 𝐊𝐄 𝐀𝐗𝐇𝐇𝐀 𝐊𝐘𝐎 𝐍𝐇𝐈 𝐁𝐀𝐍𝐀 𝐃𝐄𝐓𝐄 😒👈" , "𝐁𝐀𝐓𝐀𝐎 𝐊𝐀𝐁 𝐀𝐀𝐔𝐄𝐆𝐀 𝐓𝐔𝐌𝐀𝐑𝐀 𝐃𝐈𝐋 𝐌𝐔𝐉𝐇 𝐏𝐀𝐑𝐁  😒👈" , "𝐏𝐘𝐀𝐑 𝐊𝐀𝐑𝐎 𝐌𝐄𝐑𝐈 𝐉𝐀𝐀𝐍 𝐁𝐀𝐊𝐕𝐀𝐒 𝐍𝐇𝐈 😒👈" , "𝐌𝐄𝐑𝐄 𝐃𝐈𝐋 𝐊𝐎 𝐊𝐀𝐑𝐀𝐑 𝐀𝐀𝐘𝐀 𝐌𝐔𝐉𝐇𝐄 𝐊𝐇𝐔𝐃 𝐏𝐄 𝐇𝐈 𝐏𝐘𝐀𝐑 𝐀𝐀𝐘𝐀   😛👈" , "𝐒𝐔𝐍𝐎 𝐍𝐀 𝐊𝐈𝐘𝐀 𝐓𝐔𝐌 𝐌𝐄𝐑𝐄 𝐋𝐈𝐘𝐄 𝐒𝐀𝐑𝐅 𝐊𝐇𝐀 𝐊𝐀𝐑 𝐌𝐔𝐇 𝐒𝐄 𝐁𝐔𝐋 𝐁𝐔𝐋𝐄 𝐍𝐈𝐊𝐀𝐋 𝐒𝐀𝐊𝐓𝐄 𝐇𝐎   🥹👈" , "𝐅𝐀𝐈𝐍𝐀𝐋𝐈 𝐄𝐒 𝐆𝐑𝐏 𝐊𝐄 𝐃𝐎 𝐓𝐈𝐍 𝐋𝐀𝐃𝐊𝐄 𝐏𝐀𝐒𝐀𝐍𝐃 𝐀𝐀 𝐆𝐘𝐄  🙂🖐️" , "𝐌𝐀𝐍 𝐊𝐀𝐑 𝐑𝐀𝐇𝐀 𝐇 𝐓𝐔𝐌𝐇𝐑 𝐂𝐇𝐇𝐀𝐓 𝐒𝐄 𝐆𝐈𝐑𝐀 𝐃𝐔  😕👈" , "𝐀𝐆𝐑 𝐒𝐀𝐁𝐇𝐈 𝐋𝐀𝐃𝐊𝐎 𝐊𝐎 𝐋𝐎𝐘𝐀𝐋 𝐋𝐀𝐃𝐊𝐈𝐘𝐀 𝐂𝐇𝐀𝐇𝐈𝐘𝐑 𝐓𝐎 𝐇𝐔𝐌 𝐁𝐑𝐕𝐀𝐅𝐀 𝐋𝐀𝐅𝐊𝐈𝐘𝐎 𝐊𝐀𝐇𝐀 𝐉𝐀𝐘𝐄  🥺👈" , "𝐘𝐀𝐑 𝐀𝐀𝐉 𝐌𝐄 𝐏𝐀𝐓𝐈 𝐊𝐄 𝐒𝐀𝐓𝐇 𝐃𝐄𝐓 𝐏𝐄 𝐆𝐘𝐈 𝐓𝐇𝐈 𝐏𝐑 𝐉𝐈𝐃𝐊𝐀 𝐓𝐇𝐀 𝐔𝐒𝐍𝐄 𝐃𝐄𝐊𝐇 𝐋𝐈𝐘𝐀  😒👈" , "𝐁𝐀𝐓𝐀𝐎 𝐀𝐀𝐏𝐊𝐎 𝐊𝐈𝐘𝐀 𝐏𝐀𝐒𝐀𝐍𝐃 𝐇𝐄 𝐌𝐎𝐓 𝐊𝐀 𝐅𝐀𝐑𝐈𝐃𝐇𝐓𝐀 𝐘𝐀 𝐌𝐄𝐑𝐀 𝐑𝐈𝐒𝐇𝐓𝐀  😏👈" , "𝐘𝐀𝐑 𝐌𝐔𝐉𝐇𝐄 𝐂𝐇𝐀𝐊𝐊𝐀𝐑 𝐀𝐀 𝐑𝐄𝐇𝐄 𝐇 𝐀𝐀𝐏𝐊𝐄 𝐈𝐍𝐁𝐎𝐗 𝐌𝐄 𝐀𝐀𝐊𝐄 𝐆𝐈𝐑 𝐉𝐀𝐔 𝐁𝐀𝐁𝐔  😒👈" , "EK REQUEST HAI SABHI SE BATAO ME ACHHI LAGTI HU YA NHI  🙁👈" , "𝐀𝐀𝐎 𝐓𝐔𝐌𝐇𝐀𝐑𝐄 𝐒𝐀𝐓𝐇 𝐑𝐈𝐋𝐄𝐒𝐇𝐀𝐍 𝐒𝐇𝐈𝐏 𝐏𝐎𝐒𝐓 𝐋𝐀𝐆𝐀 𝐊𝐄 𝐓𝐔𝐌𝐇𝐄 𝐅𝐄𝐌𝐀𝐒 𝐊𝐀𝐑 𝐃𝐔  😌🖐️" , "𝐀𝐆𝐑 𝐌𝐄𝐑𝐀 𝐁𝐇𝐈 𝐁𝐎𝐘𝐅𝐑𝐈𝐄𝐍𝐃 𝐇𝐎𝐓𝐀 𝐓𝐎 𝐀𝐀𝐉 𝐌𝐄 𝐁𝐇𝐈 𝐁𝐀𝐁𝐔 𝐒𝐎𝐍𝐀 𝐊𝐀𝐑 𝐑𝐀𝐇𝐈 𝐇𝐎𝐓𝐈  🥺👈" , "𝐒𝐔𝐍𝐎 𝐁𝐀𝐋𝐀𝐊 𝐉𝐎 𝐋𝐀𝐃𝐊𝐀 𝐉𝐀𝐃𝐀 𝐁𝐇𝐀𝐕 𝐊𝐇𝐀𝐘𝐄 𝐔𝐒𝐄 𝐔𝐍𝐂𝐋𝐄 𝐁𝐎𝐋 𝐊𝐄 𝐁𝐋𝐎𝐂𝐊 𝐊𝐀𝐑 𝐃𝐄𝐍𝐀 𝐂𝐇𝐀𝐇𝐈𝐘𝐄   🥹👈" , "𝐑𝐮𝐊 𝐒𝐨𝐂𝐡𝐍𝐞 𝐃𝐞  🤔 𝐊𝐨𝐍𝐬𝐈 𝐆𝐚𝐋𝐢 𝐃𝐮 𝐓𝐮𝐌𝐡𝐄  🤨👈" , "𝐂𝐡𝐀𝐧𝐃 𝐊𝐨 𝐌𝐢𝐋 𝐆𝐲𝐢 𝐂𝐡𝐀𝐧𝐝𝐍𝐢 𝐓𝐨 𝐓𝐚𝐑𝐨 𝐊𝐚 𝐊𝐢𝐘𝐚 𝐇𝐨𝐆𝐚  😕 𝐌𝐨𝐇𝐨𝐁𝐛𝐀𝐭 𝐄𝐤 𝐒𝐞 𝐊𝐚𝐑𝐥𝐈 𝐓𝐨 𝐁𝐚𝐊𝐢 𝐇𝐚𝐉𝐚𝐑𝐨 𝐊𝐲𝐀 𝐇𝐨𝐆𝐚 । 😏👈" , "𝐌𝐮𝐉𝐡𝐄 𝐒𝐚𝐃𝐢 𝐊𝐞 𝐋𝐢𝐘𝐞 𝐒𝐚𝐑𝐤𝐀𝐫𝐈 𝐍𝐨𝐊𝐫𝐈 𝐕𝐚𝐋𝐚 𝐋𝐚𝐃𝐤𝐀 𝐂𝐡𝐀𝐡𝐈𝐘𝐄 𝐃𝐞𝐇𝐞𝐉 𝐌𝐞 𝐊𝐮𝐂𝐡 𝐍𝐡𝐈 𝐃𝐮𝐍𝐠𝐢 𝐩 🙂🤞" , "𝐍𝐚 𝐉𝐚𝐍𝐞 𝐄𝐭𝐍𝐚 𝐏𝐲𝐀𝐫 𝐊𝐚𝐇𝐚 𝐒𝐞 𝐀𝐚𝐘𝐚 𝐇𝐚𝐢  😒 𝐌𝐞𝐑𝐚 𝐃𝐢𝐥 𝐁𝐡𝐈 𝐓𝐮𝐌𝐚𝐑𝐞 𝐊𝐡𝐀𝐭𝐈𝐑 𝐌𝐮𝐉𝐡𝐒𝐬 𝐑𝐮𝐓𝐡 𝐉𝐚𝐓𝐚 𝐇𝐚𝐢...!! 🥺🤞" , "𝐄𝐤 𝐁𝐚𝐑 𝐋𝐨𝐕𝐞 𝐘𝐨𝐔 𝐑𝐚𝐕𝐢 𝐊𝐮𝐌𝐚𝐫 𝐁𝐨𝐋 𝐃𝐨 𝐍𝐚 𝐌𝐚𝐫 𝐓𝐡𝐎𝐝𝐈 𝐉𝐚𝐘𝐞𝐆𝐢   🥹🤟" , "𝐓𝐮𝐌 𝐌𝐞𝐑𝐚 𝐃𝐢𝐋 𝐓𝐨 𝐜𝐡𝐮𝐑𝐚 𝐍𝐡𝐈 𝐏𝐚𝐘 𝐊𝐢𝐘𝐚 𝐅𝐚𝐘𝐞𝐃𝐚 𝐓𝐮𝐌𝐚𝐑𝐢 𝐂𝐡𝐎𝐫 𝐉𝐞𝐒𝐢 𝐒𝐢𝐊𝐚𝐋 𝐊𝐚😕🤟" , "𝐁𝐚𝐒 𝐒𝐚𝐃𝐢 𝐇𝐨 𝐉𝐚𝐘𝐞 𝐅𝐢𝐑 𝐏𝐀𝐭𝐈 𝐊𝐢 𝐆𝐮𝐋𝐚𝐌𝐢  🥺" , "𝐎𝐲𝐞 𝐁𝐚𝐁𝐮 𝐀𝐚𝐎 𝐏𝐲𝐀𝐫 𝐊𝐚𝐑𝐞  🤐🤟" , "𝐁𝐚𝐁𝐮 𝐀𝐚𝐎𝐛𝐓𝐮𝐌𝐤𝐎 𝐓𝐚𝐑𝐨 𝐊𝐞 𝐒𝐡𝐚𝐇𝐞𝐑 𝐋𝐞 𝐂𝐡𝐀𝐋𝐮  😗🤟" , "𝐁𝐚𝐒 𝐌𝐞 𝐇𝐢 𝐒𝐢𝐍𝐠𝐋𝐞 𝐇𝐮 𝐎𝐫 𝐊𝐚𝐁𝐢 𝐒𝐚𝐁 𝐌𝐢𝐍𝐠𝐋𝐞 𝐇𝐚𝐈  🥺✋" , "𝐓𝐮𝐌 𝐉𝐚𝐁 𝐁𝐨𝐓 𝐁𝐨𝐋𝐭𝐄 𝐇𝐨 𝐌𝐞𝐑𝐚 𝐆𝐮𝐑𝐝𝐀 𝐃𝐡𝐀𝐃𝐚𝐊𝐧𝐄 𝐋𝐚𝐆𝐭𝐀 𝐇𝐚𝐈  🤯🤟" , "𝐌𝐮𝐉𝐡𝐄 𝐋𝐚𝐆𝐓𝐚 𝐇𝐚𝐈 𝐌𝐞 𝐒𝐢𝐍𝐠𝐋𝐞 𝐇𝐢 𝐌𝐚𝐑𝐮𝐍𝐠𝐈 😭👈" , "𝐁𝐨𝐋𝐨 𝐒𝐞𝐓𝐭𝐈𝐧𝐆 𝐊𝐚𝐑𝐯𝐀 𝐃𝐮 𝐊𝐢𝐘𝐚 𝐑𝐚𝐕𝐢 𝐊𝐮𝐌𝐚𝐑 𝐒𝐞 🙂🤟" , "𝐁𝐚𝐁𝐮 𝐀𝐚𝐉 𝐓𝐨 𝐋𝐨𝐕𝐞 𝐘𝐨𝐔 𝐁𝐨𝐋𝐧𝐀 𝐇𝐢 𝐏𝐚𝐃𝐞𝐆𝐚 🙂🤟" , "𝐓𝐮𝐌 𝐒𝐚𝐁 𝐌𝐚𝐓𝐥𝐀𝐯𝐈 𝐇𝐨 𝐉𝐚𝐎 𝐁𝐡𝐀𝐠𝐎 🥺🤟" , "𝐓𝐮𝐌 𝐄𝐭𝐍𝐚 𝐌𝐚𝐒𝐮𝐌 𝐊𝐲𝐨 𝐇𝐨 𝐁𝐚𝐁𝐮 😒✋" , "𝐄𝐤 𝐁𝐚𝐀𝐭 𝐁𝐚𝐓𝐚𝐎 𝐓𝐮𝐌 𝐁𝐚𝐂𝐡𝐏𝐚𝐍 𝐒𝐞 𝐓𝐡𝐀𝐫𝐊𝐢 𝐇𝐨 𝐘𝐚 𝐀𝐛𝐇𝐢 𝐀𝐛𝐇𝐢 𝐁𝐚𝐍𝐞 🙂✋" , "𝐁𝐚𝐁𝐮 🤏 𝐄𝐭𝐔 𝐒𝐚 𝐂𝐡𝐔𝐦𝐌𝐚 𝐃𝐞𝐃𝐨 𝐍𝐚  🙈💖👈" , "𝐌𝐞𝐑𝐢 𝐁𝐨𝐘𝐅𝐫𝐈𝐞𝐍𝐃 𝐊𝐚𝐁 𝐁𝐚𝐍𝐞𝐆𝐚 𝐘𝐚𝐑  🥺✋" , "𝐓𝐮𝐌 𝐓𝐨 𝐌𝐮𝐉𝐡𝐄 𝐒𝐚𝐊𝐚𝐋 𝐬𝐞 𝐆𝐚𝐑𝐢𝐁 𝐋𝐚𝐆𝐭𝐄 𝐇𝐨  🙂✋" , "𝐓𝐞𝐑𝐞 𝐉𝐚𝐍𝐞 𝐊𝐞 𝐁𝐚𝐃 𝐌𝐞𝐍𝐞 𝐀𝐩𝐍𝐞 𝐌𝐮𝐡 𝐏𝐞 𝐋𝐢𝐤𝐇𝐯𝐀 𝐋𝐢𝐘𝐚 𝐒𝐢𝐍𝐠𝐋𝐞 𝐇𝐮 𝐏𝐚𝐓𝐚 𝐋𝐨  😐✋" , "𝐒𝐚𝐊𝐮𝐧 𝐂𝐡𝐀𝐇𝐚𝐓𝐞 𝐇𝐨 𝐓𝐨 𝐌𝐞𝐑𝐚 𝐁𝐚𝐍 𝐉𝐚𝐎 🙂✋" , "𝐘𝐞 𝐃𝐮𝐍𝐢𝐘𝐚 𝐄𝐤 𝐃𝐡𝐎𝐤𝐇𝐚 𝐇𝐚𝐈 𝐓𝐮𝐌 𝐁𝐡𝐈 𝐂𝐡𝐎𝐫 𝐃𝐨 𝐀𝐚𝐏𝐧𝐄 𝐕𝐚𝐋𝐞 𝐊𝐨 𝐀𝐛𝐇𝐢 𝐁𝐡𝐢 𝐌𝐨𝐊𝐚 𝐇𝐚𝐢 🙂✋" , "𝐌𝐮𝐁𝐚𝐑𝐚𝐊 𝐇𝐨 𝐀𝐚𝐏𝐤𝐀 𝐍𝐚𝐀𝐦 𝐁𝐥𝐎𝐜𝐊 𝐋𝐢𝐒𝐭 𝐌𝐞 𝐓𝐨𝐏 𝐏𝐚𝐑 𝐀𝐚𝐘𝐚 𝐇𝐚𝐢  🤣🤣👈" , "𝐒𝐚𝐁  𝐂𝐡𝐇𝐨𝐑 𝐊𝐞 𝐂𝐡𝐀𝐥𝐄 𝐉𝐚𝐓𝐞 𝐇𝐚𝐈 𝐊𝐲𝐀 𝐄𝐭𝐍𝐚 𝐁𝐮𝐑𝐢 𝐇𝐮 𝐌𝐞 🥺👈" , "𝐊𝐲𝐀 𝐓𝐮𝐌 𝐒𝐢𝐍𝐠𝐋𝐞 𝐇𝐨 🤔👈" , "𝐀𝐚𝐏 𝐄𝐬𝐀 𝐍𝐚 𝐁𝐨𝐋𝐨 𝐌𝐮𝐉𝐡𝐄 𝐒𝐡𝐀𝐫𝐀𝐦 𝐀𝐚𝐓𝐢 𝐇𝐚𝐈  🙈♥️👌" , "𝐊𝐲𝐎 𝐁𝐮𝐋𝐚𝐘𝐚 𝐇𝐮𝐌𝐞...?😾🔪 " , "𝐓𝐮𝐌 𝐌𝐮𝐉𝐡𝐄 𝐁𝐢𝐥𝐊𝐮𝐋 𝐁𝐡𝐈 𝐘𝐚𝐃 𝐍𝐡𝐈 𝐊𝐚𝐑𝐭𝐄 𝐍𝐚 😥 𝐃𝐞𝐊𝐡 𝐋𝐞𝐍𝐚 𝐏𝐚𝐏 𝐋𝐚𝐆𝐞𝐆𝐚 🥺👈"];
  var rand = tl[Math.floor(Math.random() * tl.length)]

    if ((event.body.toLowerCase() == "💖") || (event.body.toLowerCase() == "💖💖") || (event.body.toLowerCase() == "💖💖💖") || (event.body.toLowerCase() == "💝") || (event.body.toLowerCase() == "💝💝") ||(event.body.toLowerCase() == "💝💝💝")) {
     return api.sendMessage("💓💓💓", threadID);
   };

   if ((event.body.toLowerCase() == "🤮") || (event.body.toLowerCase() == "🤮🤮")) {
     return api.sendMessage("🍒🕊️🍓....𝗞𝗼𝗡 𝗦𝗮 𝗠𝗮𝗛𝗶𝗡𝗮 𝗖𝗵𝗔𝗹 𝗥𝗮𝗛𝗮 𝗛𝗮𝗜...😛😜🤪", threadID);
   };

    if ((event.body.toLowerCase() == "🤗") || (event.body.toLowerCase() == "🤗")) {
     return api.sendMessage("Hug me baby ☺️", threadID);
   };

   if ((event.body.toLowerCase() == "Good evening") || (event.body.toLowerCase() == "Good evening") || (event.body.toLowerCase() == "Good Evening") || (event.body.toLowerCase() == "GOOD EVENING")) {
     return api.sendMessage("🍓🕊️🍒...𝚅𝞔ᏒⲨ ɢ૦૦Ｄ 𝞔𝚅𝞔𝑵Ɩ𝑵ɢ 𝙹Ɩ..🙈☺️🤩", threadID);
   };
  
   if ((event.body.toLowerCase() == "Good afternoon") || (event.body.toLowerCase() == "Good afternoon") ||(event.body.toLowerCase() == "Good Afternoon") || (event.body.toLowerCase() == "GOOD AFTERNOON")) {
     return api.sendMessage("🍒🍒🍒...𝚅𝞔ᏒⲨ ɢ૦૦Ｄ 𝔸𝐹𝚃𝞔Ꮢ𝑵૦૦𝑵 𝙹Ɩ..🥰🙏🏻🤭", threadID);
   };

   if ((event.body.toLowerCase() == "💔") || (event.body.toLowerCase() == "💔💔") ||(event.body.toLowerCase() == "💔💔💔") || (event.body.toLowerCase() == "💔💔💔💔")) {
     return api.sendMessage("🍒🍒🍒...𝗞𝗶𝗦𝗶 𝗣𝗮𝗚𝗮𝗟 𝗡𝗲 𝗧𝗼𝗗 𝗗𝗶𝗬𝗮 𝗛𝗲𝗔𝗿𝗧..🥰🙏🏻🤭", threadID);
   };

   if ((event.body.toLowerCase() == "🧡") || (event.body.toLowerCase() == "💛") || (event.body.toLowerCase() == "💚") || (event.body.toLowerCase() == "🩵") || (event.body.toLowerCase() == "💙") || (event.body.toLowerCase() == "💜") || (event.body.toLowerCase() == "🤎") || (event.body.toLowerCase() == "🖤") || (event.body.toLowerCase() == "🩶") || (event.body.toLowerCase() == "🤍") || (event.body.toLowerCase() == "🩷") || (event.body.toLowerCase() == "💘") || (event.body.toLowerCase() == "💗") || (event.body.toLowerCase() == "💓") || (event.body.toLowerCase() == "💞") || (event.body.toLowerCase() == "💕") || (event.body.toLowerCase() == "💌") || (event.body.toLowerCase() == "💟") || (event.body.toLowerCase() == "♥️") || (event.body.toLowerCase() == "❣️") || (event.body.toLowerCase() == "❤️‍🩹") || (event.body.toLowerCase() == "❤️‍🔥")) {
     return api.sendMessage("🩵💛🩷🖤", threadID);
   };

   if ((event.body.toLowerCase() == "🙈") || (event.body.toLowerCase() == "🙈🙈") || (event.body.toLowerCase() == "🙈🙈🙈") || (event.body.toLowerCase() == "🙈🙈🙈🙈") || (event.body.toLowerCase() == "☺️") || (event.body.toLowerCase() == "☺️☺️") || (event.body.toLowerCase() == "☺️☺️☺️") || (event.body.toLowerCase() == "☺️☺️☺️☺️") || (event.body.toLowerCase() == "😊") || (event.body.toLowerCase() == "😊😊") || (event.body.toLowerCase() == "😊😊😊") || (event.body.toLowerCase() == "😊😊😊😊") || (event.body.toLowerCase() == "🤭") || (event.body.toLowerCase() == "🤭🤭") || (event.body.toLowerCase() == "🤭🤭🤭") ||  (event.body.toLowerCase() == "🤭🤭🤭🤭")) {
     return api.sendMessage("🍓🕊️🍒...𝗔𝗿𝗘 𝗔𝗿𝗘 𝗠𝗲𝗥𝗶 𝗕𝗲𝗕𝘆 𝗦𝗵𝗔𝗿𝗠𝗔 𝗚𝗮𝗬𝗶...🤭🤩🥰", threadID);
   };

   if ((event.body.toLowerCase() == "😴") || (event.body.toLowerCase() == "😴😴") || (event.body.toLowerCase() == "😴😴😴") || (event.body.toLowerCase() == "😴😴😴😴") || (event.body.toLowerCase() == "😪") || (event.body.toLowerCase() == "😪😪") || (event.body.toLowerCase() == "😪😪😪") ||  (event.body.toLowerCase() == "😪😪😪😪")) {
     return api.sendMessage("🍒🕊️🍓...𝗞𝗼𝗜 𝗟𝗮𝗧 𝗠𝗮𝗥 𝗞𝗲 𝗨𝗱𝗛𝗮𝗢 𝗘𝘀𝗘 𝗚𝗿𝗣 𝗠𝗲 𝗦𝗼 𝗚𝗮𝗬𝗮...😒😏😆", threadID);
 };

   if ((event.body.toLowerCase() == "chup") || (event.body.toLowerCase() == "stop") || (event.body.toLowerCase() == "chup ho ja") || (event.body.toLowerCase() == "chup kar")) {
     return api.sendMessage("🍒🍒🍒....𝐍𝐡𝐈 𝐑𝐞𝐇𝐮𝐍𝐠𝐈 , 😼 𝐌𝐮𝐉𝐡𝐄 𝐁𝐨𝐋𝐧𝐀 𝐇𝐚𝐈 , 𝐓𝐮𝐌𝐇𝐞 𝐊𝐨𝐈 𝐇𝐚𝐐 𝐍𝐡𝐈 𝐌𝐮𝐉𝐡𝐄 𝐂𝐡𝐔𝐩 𝐊𝐚𝐑𝐚𝐍𝐞 𝐊𝐢 , 𝐌𝐞𝐑𝐢 𝐙𝐮𝐕𝐚𝐍 𝐌𝐞 𝐓𝐨 𝐁𝐨𝐋𝐮𝐍𝐠𝐈...😎😎😎", threadID);
   };
  
   if ((event.body.toLowerCase() == "Acha") || (event.body.toLowerCase() == "Achha") || (event.body.toLowerCase() == "ACHHA") ||  (event.body.toLowerCase() == "Achha ji")) {
     return api.sendMessage("🍓🕊️🍒...𝗛𝗮 𝗝𝗶 𝗕𝗮𝗕𝘂..🙈🤗☺️", threadID);
   };

   if ((event.body.toLowerCase() == "😂") ||(event.body.toLowerCase() == "😂😂") ||(event.body.toLowerCase() == "😂😂😂") ||(event.body.toLowerCase() == "😂😂😂😂") || (event.body.toLowerCase() == "😁") ||(event.body.toLowerCase() == "😁😁") ||(event.body.toLowerCase() == "😁😁😁") ||(event.body.toLowerCase() == "😁😁😁😁") ||(event.body.toLowerCase() == "😀") ||(event.body.toLowerCase() == "😀😀") ||(event.body.toLowerCase() == "😀😀😀") ||(event.body.toLowerCase() == "😀😀😀😀") ||(event.body.toLowerCase() == "😅") ||(event.body.toLowerCase() == "😅😅") ||(event.body.toLowerCase() == "😅😅😅") ||(event.body.toLowerCase() == "😅😅😅😅") ||(event.body.toLowerCase() == "😄") ||(event.body.toLowerCase() == "😄😄") ||(event.body.toLowerCase() == "😃") ||(event.body.toLowerCase() == "😃😃") || (event.body.toLowerCase() == "😆") ||(event.body.toLowerCase() == "😆😆") ||(event.body.toLowerCase() == "😆😆😆") ||(event.body.toLowerCase() == "😆😆😆😆") || (event.body.toLowerCase() == "🤣") ||(event.body.toLowerCase() == "🤣🤣") ||(event.body.toLowerCase() == "🤣🤣🤣") ||(event.body.toLowerCase() == "🤣🤣🤣🤣") || (event.body.toLowerCase() == "😸") ||(event.body.toLowerCase() == "😸😸") ||(event.body.toLowerCase() == "😸😸😸") ||(event.body.toLowerCase() == "😸😸😸😸") ||(event.body.toLowerCase() == "😹") ||(event.body.toLowerCase() == "😹😹") ||(event.body.toLowerCase() == "😹😹😹") || (event.body.toLowerCase() == "😹😹😹😹")) {
     return api.sendMessage("🌿🌸🍒....𝐌𝐮𝐇 𝐁𝐚𝐍𝐝 𝐊𝐚𝐑𝐨 𝐕𝐚𝐑𝐧𝐀 𝐌𝐚𝐊𝐤𝐇𝐢 𝐆𝐡𝐔𝐬 𝐉𝐚𝐘𝐠𝐈 ___ 🤓🤭😝", threadID);
   };

  if ((event.body.toLowerCase() == "chumma de") || (event.body.toLowerCase() == "kiss me")) {
     return api.sendMessage("️🍒🍒🍒...𝐊𝐢𝐒 𝐊𝐡𝐮𝐒𝐡𝐈 𝐌𝐞 , 𝐌𝐞 𝐒𝐢𝐑𝐟 𝐀𝐩𝐍𝐞 𝐁𝐟 𝐊𝐨 𝐊𝐢𝐒𝐬 𝐊𝐚𝐑𝐭𝐈 𝐇𝐮......🙈🙈🙈", threadID);
   };

   if ((event.body.toLowerCase() == "shadi karoge") || (event.body.toLowerCase() == "mujhse shadi karoge?")) {
     return api.sendMessage("hanji, karunga lekin baccha. apke pet m hoga. manjur h?", threadID);
   };

   if ((event.body.toLowerCase() == "😡") || (event.body.toLowerCase() == "😡😡") || (event.body.toLowerCase() == "😡😡😡") |  (event.body.toLowerCase() == "😡😡😡😡") ||(event.body.toLowerCase() == "😤") ||(event.body.toLowerCase() == "😤😤") ||(event.body.toLowerCase() == "😤😤😤") ||(event.body.toLowerCase() == "😤😤😤😤") ||(event.body.toLowerCase() == "😠") ||(event.body.toLowerCase() == "😠😠") ||(event.body.toLowerCase() == "😠😠😠") ||(event.body.toLowerCase() == "😠😠😠😠") ||(event.body.toLowerCase() == "🤬") ||(event.body.toLowerCase() == "🤬🤬") ||(event.body.toLowerCase() == "🤬🤬🤬") || (event.body.toLowerCase() == "🤬🤬🤬🤬") || (event.body.toLowerCase() == "😈") ||(event.body.toLowerCase() == "😈😈") ||(event.body.toLowerCase() == "😈😈😈") ||(event.body.toLowerCase() == "😈😈😈😈") ||(event.body.toLowerCase() == "😾") ||(event.body.toLowerCase() == "😾😾") ||(event.body.toLowerCase() == "😾😾😾") ||(event.body.toLowerCase() == "😾😾😾😾") ||(event.body.toLowerCase() == "👿") ||(event.body.toLowerCase() == "👿👿") ||(event.body.toLowerCase() == "👿👿👿") || (event.body.toLowerCase() == "👿👿👿👿")) {
     return api.sendMessage("️😳....𝐁𝐚𝐁𝐮 𝐄𝐭𝐍𝐚 𝐆𝐮𝐒𝐬𝐀 𝐊𝐲𝐎 𝐇𝐨 𝐑𝐞𝐇𝐞 𝐇𝐎....🥺🥺🥺", threadID);
   };

   if ((event.body.toLowerCase() == "🥰") || (event.body.toLowerCase() == "🥰🥰") ||(event.body.toLowerCase() == "🥰🥰🥰") || (event.body.toLowerCase() == "🥰🥰🥰🥰") || (event.body.toLowerCase() == "😍") || (event.body.toLowerCase() == "😍😍") || (event.body.toLowerCase() == "😍😍😍") || (event.body.toLowerCase() == "😍😍😍😍") || (event.body.toLowerCase() == "🤩") || (event.body.toLowerCase() == "🤩🤩") || (event.body.toLowerCase() == "🤩🤩🤩") || (event.body.toLowerCase() == "🤩🤩🤩🤩") || (event.body.toLowerCase() == "❤️") || (event.body.toLowerCase() == "❤️❤️") || (event.body.toLowerCase() == "❤️❤️❤️") || (event.body.toLowerCase() == "❤️❤️❤️❤️") || (event.body.toLowerCase() == "😻") || (event.body.toLowerCase() == "😻😻") ||  (event.body.toLowerCase() == "😻😻😻") ||  (event.body.toLowerCase() == "😻😻😻😻")) {
     return api.sendMessage("😻❤️🤩...𝗛𝗮𝗬 𝗕𝗲𝗕𝘆, 𝗘𝘁𝗡𝗮 𝗣𝘆𝗔𝗿...🙈🍓🕊️", threadID);
   };

   if ((event.body.toLowerCase() == "😒") ||(event.body.toLowerCase() == "😒😒") ||(event.body.toLowerCase() == "😒😒😒") ||(event.body.toLowerCase() == "😒😒😒😒") ||(event.body.toLowerCase() == "🙄") ||(event.body.toLowerCase() == "🙄🙄") ||(event.body.toLowerCase() == "🙄🙄🙄") || (event.body.toLowerCase() == "🙄🙄🙄🙄")) {
     return api.sendMessage("️️🍓🍓🍓...𝗧𝗶𝗞𝗵𝗶 𝗡𝗮𝗝𝗮𝗥 𝗞𝗶𝗦𝗶 𝗗𝗶𝗡 𝗠𝘂𝗝𝗵𝗘 𝗠𝗮𝗥  𝗗𝗮𝗟𝗲𝗚𝗶...🙈", threadID);
   };

   if ((event.body.toLowerCase() == "😱") ||(event.body.toLowerCase() == "😱😱") ||(event.body.toLowerCase() == "😱😱😱") ||(event.body.toLowerCase() == "😱😱😱😱") ||(event.body.toLowerCase() == "😨") ||(event.body.toLowerCase() == "😨😨") ||(event.body.toLowerCase() == "😨😨😨") || (event.body.toLowerCase() == "😨😨😨😨")) {
     return api.sendMessage("️🍓🍓🍓...𝐊𝐲𝐚 𝐇𝐮𝐕𝐚 𝐁𝐡𝐎𝐨𝐓 𝐃𝐞𝐊𝐡 𝐋𝐢𝐘𝐚 𝐊𝐲𝐀....... 👻👻", threadID);
   };

   if ((event.body.toLowerCase() == "🥴") ||(event.body.toLowerCase() == "🥴🥴") ||(event.body.toLowerCase() == "🥴🥴🥴") || (event.body.toLowerCase() == "🥴🥴🥴🥴")) {
     return api.sendMessage("️🍓🍓🍓...𝐆𝐫𝐎𝐮𝐏 𝐌𝐞 𝐍𝐚𝐒𝐡𝐄𝐝𝐘 𝐀𝐚 𝐆𝐚𝐘𝐚....😝😝😝", threadID);
   };

   if ((event.body.toLowerCase() == "🤔") ||(event.body.toLowerCase() == "🤔🤔") ||(event.body.toLowerCase() == "🤔🤔🤔") ||(event.body.toLowerCase() == "🤔🤔🤔🤔") ||(event.body.toLowerCase() == "🤨") ||(event.body.toLowerCase() == "🤨🤨") ||(event.body.toLowerCase() == "🤨🤨🤨") || (event.body.toLowerCase() == "🤨🤨🤨🤨")) {
     return api.sendMessage("️🍒🍒🍒🍒....𝐊𝐲𝐀 𝐒𝐨𝐂𝐡 𝐑𝐞𝐇𝐞 𝐇𝐨 𝐞𝐓𝐍𝐚 𝐁𝐚𝐁𝐮....😏😏😏Kya soch rahe ho etna 🤨", threadID);
   };

   if ((event.body.toLowerCase() == "🙃") ||(event.body.toLowerCase() == "🙃🙃") ||(event.body.toLowerCase() == "🙃🙃🙃") || (event.body.toLowerCase() == "🙃🙃🙃🙃")) {
     return api.sendMessage("️🍒🍒🍒.....𝐀𝐥𝐄 𝐀𝐥𝐄 𝐌𝐞𝐫𝐀 𝐁𝐚𝐁𝐮 𝐔𝐥𝐓𝐚 𝐇𝐨 𝐆𝐚𝐘𝐚...🙈🙈", threadID);
   };

   if ((event.body.toLowerCase() == "😞") || (event.body.toLowerCase() == "😔") || (event.body.toLowerCase() == "😣") || (event.body.toLowerCase() == "☹️") || (event.body.toLowerCase() == "😟") || (event.body.toLowerCase() == "😩") || (event.body.toLowerCase() == "😖") || (event.body.toLowerCase() == "😫") || (event.body.toLowerCase() == "😦") || (event.body.toLowerCase() == "😧") || (event.body.toLowerCase() == "😥") || (event.body.toLowerCase() == "😓") || (event.body.toLowerCase() == "😰")) {
     return api.sendMessage("️Kya huva, Sad kyu ho, Mujhe batao", threadID);
   };


   if ((event.body.toLowerCase() == "hm") || (event.body.toLowerCase() == "ha") || (event.body.toLowerCase() == "Ha") ||  (event.body.toLowerCase() == "hmm")) {
     return api.sendMessage("️🍓🕊️🍒...𝗞𝘆𝗔 𝗕𝗵𝗘𝘀 𝗞𝗶 𝗧𝗮𝗥𝗲 𝗛𝗺 𝗛𝗺 𝗞𝗶𝘆𝗘 𝗝𝗮 𝗥𝗲𝗛𝗲 𝗛𝗼..🤨😒", threadID);
   };

   if ((event.body.toLowerCase() == "😢") ||(event.body.toLowerCase() == "😢😢") ||(event.body.toLowerCase() == "😢😢😢") ||(event.body.toLowerCase() == "😢😢😢😢") || (event.body.toLowerCase() == "😭") ||(event.body.toLowerCase() == "😭😭") ||(event.body.toLowerCase() == "😭😭😭") ||(event.body.toLowerCase() == "😭😭😭😭") || (event.body.toLowerCase() == "🥺") ||(event.body.toLowerCase() == "🥺🥺") ||(event.body.toLowerCase() == "🥺🥺🥺") ||(event.body.toLowerCase() == "🥺🥺🥺🥺") ||(event.body.toLowerCase() == "🥹") ||(event.body.toLowerCase() == "🥹🥹") ||(event.body.toLowerCase() == "🥹🥹🥹") || (event.body.toLowerCase() == "🥹🥹🥹🥹")) {
     return api.sendMessage("️🍒🍒🍒....𝐊𝐲𝐀 𝐇𝐮𝐀 𝐁𝐚𝐁𝐮 , 𝐑𝐨𝐓𝐞 𝐍𝐡𝐈 𝐀𝐜𝐇𝐡𝐄 𝐁𝐚𝐂𝐡𝐇𝐄 , 𝐑𝐮𝐊𝐨 𝐌𝐞 𝐀𝐛𝐇𝐢 𝐂𝐡𝐎𝐜𝐎𝐋𝐚𝐓𝐞  🍫 𝐃𝐞𝐓𝐢 𝐇𝐮 𝐋𝐢𝐊𝐡𝐎  ☞ [ Chocolate ] ☜", threadID);
   };

   if ((event.body.toLowerCase() == "😷") ||(event.body.toLowerCase() == "😷😷") ||(event.body.toLowerCase() == "😷😷😷") ||(event.body.toLowerCase() == "😷😷😷😷") || (event.body.toLowerCase() == "🤕") ||(event.body.toLowerCase() == "🤕🤕") ||(event.body.toLowerCase() == "🤕🤕🤕") || (event.body.toLowerCase() == "🤧") ||(event.body.toLowerCase() == "🤧🤧") ||(event.body.toLowerCase() == "😤🤧🤧") ||(event.body.toLowerCase() == "🤒") ||(event.body.toLowerCase() == "🤒🤒") || (event.body.toLowerCase() == "🤒🤒🤒")) {
     return api.sendMessage("️🍒🍒🍒....𝐊𝐲𝐀 𝐇𝐮𝐕𝐚 , 𝐓𝐚𝐁𝐢𝐘𝐚𝐓 𝐊𝐡𝐀𝐫𝐀𝐛 𝐇𝐚𝐈 𝐊𝐲𝐀 , 𝐌𝐮𝐉𝐡𝐄 𝐁𝐚𝐓𝐚𝐎 𝐌𝐞 𝐀𝐛𝐇𝐢 𝐌𝐞𝐃𝐢𝐂𝐢𝐍𝐞  💊💉 𝐋𝐞 𝐀𝐚𝐓𝐈 𝐇𝐮.....😇", threadID);
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

   if ((event.body.toLowerCase() == "💪") || (event.body.toLowerCase() == "💪💪") || (event.body.toLowerCase() == "💪💪💪")) {
    return api.sendMessage("️💪💪💪", threadID);
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

  if ((event.body.toLowerCase() == "👀") || (event.body.toLowerCase() == "👀👀")) {
     return api.sendMessage("️👀👀", threadID);
   };

   if ((event.body.toLowerCase() == "💫") || (event.body.toLowerCase() == "🔥")) {
     return api.sendMessage("️🔥🔥", threadID);
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

   if ((event.body.toLowerCase() == "ludo") || (event.body.toLowerCase() == "Ludo") || (event.body.toLowerCase() == "LUDO")) {
     return api.sendMessage("️Me To Bot Hu Kese Aau Ludo Me 🥹🥹", threadID);
   };

   if ((event.body.toLowerCase() == "🤦‍♀️") || (event.body.toLowerCase() == "🤦")) {
     return api.sendMessage("Are apne muh pe kyu maar rahe ho, Mujhe batao kya huva?😬", threadID);
   };
   
   if ((event.body.toLowerCase() == "🌺") || (event.body.toLowerCase() == "🌴") || (event.body.toLowerCase() == "🌿") || (event.body.toLowerCase() == "🌾") || (event.body.toLowerCase() == "🌸") || (event.body.toLowerCase() == "🌹")) {
     return api.sendMessage("💐🌸🌿", threadID);
   };

   if ((event.body.toLowerCase() == "🥰") || (event.body.toLowerCase() == "😍") || (event.body.toLowerCase() == "😻") || (event.body.toLowerCase() == "❤️")) {
     return api.sendMessage("🦋🌿Aƞƙɧ❍ Ɱɛ Ƥɣɑɽ͢  Ɗɪɭɱɛ Ƙɧuɱɑɽ🌬️🌍 ••Ƥɣɑɽ Ƭ❍ɧ Ƞɧɪ Ƙɒɽ ɭɪɣɑ Ɱuȷɧʂɛ>³••🕊️🍎😍", threadID);
   };

   if ((event.body.toLowerCase() == "kese ho") || (event.body.toLowerCase() == "kaise ho") || (event.body.toLowerCase() == "kese ho ji") || (event.body.toLowerCase() == "how are you") || (event.body.toLowerCase() == "how are you?")) {
     return api.sendMessage("M Tabhi Accha hota hu, Jab Apko Hasta Huye Dekhta hu☺️", threadID);
   };

   if ((event.body.toLowerCase() == "💥") || (event.body.toLowerCase() == "💥💥")) {
     return api.sendMessage("💥💥💥", threadID);
   };

   if ((event.body.toLowerCase() == "🫡") || (event.body.toLowerCase() == "🫡🫡")) {
     return api.sendMessage("🫡🫡🫡", threadID);
   };

   if ((event.body.toLowerCase() == "🙋") || (event.body.toLowerCase() == "🙋‍♀️")) {
     return api.sendMessage("𝗔𝗔p᩶ 𝗔𝗔 𝗴ɣɘ ß𝗔ß𝘂 😍", threadID);
   };

  if ((event.body.toLowerCase() == "🤖") || (event.body.toLowerCase() == "🤖")) {
     return api.sendMessage("Saalo chidda rahe ho mujhe", threadID);
   };

   if ((event.body.toLowerCase() == "💯") || (event.body.toLowerCase() == "💯💯")) {
     return api.sendMessage("💯💯", threadID);
   };

  if ((event.body.toLowerCase() == "🥸") || (event.body.toLowerCase() == "🥸🥸")) {
     return api.sendMessage("🥸🥸🥸", threadID);
   };

   if ((event.body.toLowerCase() == "🤡") || (event.body.toLowerCase() == "🤡🤡")) {
     return api.sendMessage("🤡🤡🤡", threadID);
   };

   if ((event.body.toLowerCase() == "☠️") || (event.body.toLowerCase() == "☠️☠️")) {
     return api.sendMessage("☠️☠️☠️☠️", threadID);
   };

  if ((event.body.toLowerCase() == "👻") || (event.body.toLowerCase() == "👻👻") || (event.body.toLowerCase() == "👻👻👻") || (event.body.toLowerCase() == "👻👻👻👻") || (event.body.toLowerCase() == "👻👻👻👻👻")) {
     return api.sendMessage("👻👻👻👻", threadID);
   };
   mess = "{name}"
  
  if (event.body.indexOf("Bot") == 0 || (event.body.indexOf("bot") == 0)) {
    var msg = {
      body: `╔═════▓࿇࿇▓═════╗\n${name}\n╚═════▓࿇࿇▓═════╝\n\n💖🥀🐬•||•●┼┼──🔏🌊_____ ${rand} _____••||•●┼┼─💌🕊️🌿✨🎩🐬😘\n\n                      ╔════•| ✿ |•════╗
                      🌹   😻 𝕂ℝ𝕀𝕊ℍℕ𝔸 😻    🌹
                      ╚════•| ✿ |•════╝`
    }
    return api.sendMessage(msg, threadID, messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }
