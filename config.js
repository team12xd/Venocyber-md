//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "losrios755@gmail.com";
global.location = "Njombe,Tanzania.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Dar es salaam";
global.github = process.env.GITHUB || "https://github.com/Kingjux/Venocyber-md";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VagzM5RGk1Fq9b6BCO0q";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VagzM5RGk1Fq9b6BCO0q";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/12b0fb245e6b8ba4bf718.jpg";
global.devs = "263 78 962 2747";
global.sudo = process.env.SUDO || "263 78 962 2747";
global.owner = process.env.OWNER_NUMBER || "263 78 962 2747";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "true";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://rb.gy/3keql8";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0dnSnVDb1dGWVlEY2ZtSm9nWWRCZjBmOExBcStIeW1Bc1NiOGhGem1Vaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiajd5RUNxQVc3cTd2WGRKdWVFSW1wTHZndllLRVJQRCt6RjdtNEpSeDhDQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpSms1Q05tRktXWlB2dzV5Uy9YaWZLa0FkM2tybXJaTERqYUVBMVExZTBNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPL1gwVjBaaHU3TENxMmJNc3lwMDNZMGkrNmF0SGZRdXFneFZGTndZL0NrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtHVGpheENLd1g1WWpCandUZ0tENHRFQlNWWmJBNFhJTjBRQWpUWXNDa2M9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlMrVGlCZWdjU2QrUE5YbHloOXg0anNSdHJveFhFRzd6STZnNUdOQ0RPeU09In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQU9JekV5U2ZoOEZFRWFxc3NESlczWE51cmZaQVRvMDBNYS85SkpWRUFVOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicEtqWmhZUDFmSk5IbStZS2RaSlRvMzVRZ1BDT3J4dVJ2aHdWSmNWRkoyMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkhwNmREVGtkT2hzdmlDaGtyU29KazZxcFo0SnBxTjg3OXFQRXdvcUlyTkh3MFVPZjBuaWh0TE53OHhHek1hZWw4b0E5S2pnNlVDNmNvdjlkZThLaUFnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MiwiYWR2U2VjcmV0S2V5IjoidDdreVBlNjQvK2hGSEo2a1dQS2lhUUtqZGk1U3FKTnIrcUZHYTczdTZ4ND0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiLWtnbWk4cVRRWkN4SlVhZjJwQ21GZyIsInBob25lSWQiOiIwY2Q0MTM0ZS1lNWMxLTQwNzktOTU3NS0xMjgyZGZhMDk3MzUiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUENpc0ZGNnNEbXlPRUFPc0M5U2oyaGRiL3JZPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ilp2ZFZpZ2RUeTVZSTRrVlIzcGZjeUVRQmVPQT0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiI4TFBDUVRHTCIsIm1lIjp7ImlkIjoiMjYzNzg5NjIyNzQ3Ojk4QHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNLWGUrYklCRUt2d2liUUdHQVFnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJQRVVQTlhCSTlucUJXejNwOG5KWDRNUEZhWUErNVBnZXVYdFpNVzZiSEJjPSIsImFjY291bnRTaWduYXR1cmUiOiJGc1ZvVXh6S3EvQndYQ1g5alIwNk5wbC9rUFY2Y0ErNm51dllXamZzUDNhaUFDRjNYMk9QUXYydE5sSnVXK3h6aWZlWElkYzFVclJhUno5WXFhajlCZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiWEJhRTlNaU9yNzRHOW5vSTdqNWRxb3dKTW5VV09VamFram56U2hmWmVrMklLYk0wYnZHRzJLcC9oMEFNdG53bFVYdWdnK3BtUlpMNWsvdXY1WjQ5QVE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNjM3ODk2MjI3NDc6OThAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVHhGRHpWd1NQWjZnVnM5NmZKeVYrRER4V21BUHVUNEhybDdXVEZ1bXh3WCJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcxOTgyNjQ4OSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFLMmwifQ=="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "you're using first powerful bot to be released in Zimbabwe| enjoy your time| this is watsonxd",
  author: process.env.PACK_AUTHER || "https://telegra.ph/file/915d08675cb62bf1eb1ca.jpg",
  packname: process.env.PACK_NAME || "https://telegra.ph/file/915d08675cb62bf1eb1ca.jpg",
  botname: process.env.BOT_NAME || "watsonxd",
  ownername: process.env.OWNER_NAME || "watsonxd",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-MLNkacQOWsMSwtBZZf0XT3BlbkFJqfgJYOOkiikW5Y4ynpM5",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "VENOCYBER").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
