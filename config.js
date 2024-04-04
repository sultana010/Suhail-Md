const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="sultananzlaa@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/758549f0de2219884f387.jpg,https://telegra.ph/file/9498496b010dfb5900b80.jpg,https://telegra.ph/file/59bf80efbb6e6576b5a52.jpg,https://telegra.ph/file/ee0e191363161e88e4743.jpg" // ramadan Theme Images
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923342446016,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_23_30_04_04_ewogICJjcmVkcy5qc29uIjogIntcIm5vaXNlS2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiUUYyUWdZSVZDN2pzN2RnenZJQXVVUGUxRmNaREtPV2NSNmw4TzVUSHBFYz1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIlR0OHJySjdTU0wvdlNwSnV0dmViYWxhekVKUGtueUlOYlR1UDIzN2pWWEk9XCJ9fSxcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiME9jQjBNWFlyWUdjdkJwaWJzSmtlMFRUejlFOTdiK3Z6ZHhDRjgyTjUyaz1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIlVlbEI0anR1cDNDK1AyV2FWc3h1VnNQK0hvelgxaHdxclBDcWZJV1A3aVE9XCJ9fSxcInNpZ25lZElkZW50aXR5S2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiT0p5Q3lXQmR3bXZsZlRiMXNQeVd2Z2VaaXlra3NWWitOSkUzdmdMcjEzOD1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcInEwVjFxOUZ6TGo1MG5ydFE2WGdJQXlhc29meTE0VVo5VDM0eHF3M0d4Uk09XCJ9fSxcInNpZ25lZFByZUtleVwiOntcImtleVBhaXJcIjp7XCJwcml2YXRlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCI0Q3FiWUtqaEJYc3lEVVllRWtSWkM3MWxRSnpSZk1OVE9TNytUWUU1WFVFPVwifSxcInB1YmxpY1wiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiVFE2cVNXZk80ckJLZFRoQllzdVUrQVZKSDRsdlhRZWdoSFpPMUJVdkJ4VT1cIn19LFwic2lnbmF0dXJlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJVQU45MUNXS1RuaUJmeVRIM2dZeHVKZzBabUhIakR4RDZhWHRlK1ZYZVZMM2xUZDNlTmgya0FkMjhoR0lpeXIrMDRPNVk3aFM4OW1UUHhIUGFrTHVpdz09XCJ9LFwia2V5SWRcIjoxfSxcInJlZ2lzdHJhdGlvbklkXCI6MTczLFwiYWR2U2VjcmV0S2V5XCI6XCJlamRPYzluZkJ1VjFIQXBxa2VFcGd0NmpWemJyMTJRc09YRGRGamQwUktBPVwiLFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6W3tcImtleVwiOntcInJlbW90ZUppZFwiOlwiOTIzMzQyNDQ2MDE2QHMud2hhdHNhcHAubmV0XCIsXCJmcm9tTWVcIjp0cnVlLFwiaWRcIjpcIjFFMDlDNjM0MDQzQkZFRDZCOTExMDcxMEU2MTU3NTI3XCJ9LFwibWVzc2FnZVRpbWVzdGFtcFwiOjE3MTIyNzM0NDR9LHtcImtleVwiOntcInJlbW90ZUppZFwiOlwiOTIzMzQyNDQ2MDE2QHMud2hhdHNhcHAubmV0XCIsXCJmcm9tTWVcIjp0cnVlLFwiaWRcIjpcIkIxNDY1MEFCNDFENkMxNTdBMTRCMEQ1ODUzNjI5OTc1XCJ9LFwibWVzc2FnZVRpbWVzdGFtcFwiOjE3MTIyNzM0NDR9LHtcImtleVwiOntcInJlbW90ZUppZFwiOlwiOTIzMzQyNDQ2MDE2QHMud2hhdHNhcHAubmV0XCIsXCJmcm9tTWVcIjp0cnVlLFwiaWRcIjpcIjA2QjI4QjQ4RjQzODhDREUxOURGQjk2RTM5RkM4RDE1XCJ9LFwibWVzc2FnZVRpbWVzdGFtcFwiOjE3MTIyNzM0NDZ9LHtcImtleVwiOntcInJlbW90ZUppZFwiOlwiOTIzMzQyNDQ2MDE2QHMud2hhdHNhcHAubmV0XCIsXCJmcm9tTWVcIjp0cnVlLFwiaWRcIjpcIkRFRTA1QTE4RDkyRkQ1Q0FGNkFCQzUwREI0NTZFNTZFXCJ9LFwibWVzc2FnZVRpbWVzdGFtcFwiOjE3MTIyNzM0NDZ9XSxcIm5leHRQcmVLZXlJZFwiOjMxLFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjozMSxcImFjY291bnRTeW5jQ291bnRlclwiOjEsXCJhY2NvdW50U2V0dGluZ3NcIjp7XCJ1bmFyY2hpdmVDaGF0c1wiOmZhbHNlfSxcImRldmljZUlkXCI6XCJ4WGJQV3Vna1JoUzlmT3lZUWhkbE5RXCIsXCJwaG9uZUlkXCI6XCIyMzQ5YmY3Ny01YWVlLTRiYjMtODlkNi1lZGRlM2U4ZmRhM2FcIixcImlkZW50aXR5SWRcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcImZCQ1RDUHBUU3E4Tlp6d1AvcVNaUC9DNkVqZz1cIn0sXCJyZWdpc3RlcmVkXCI6dHJ1ZSxcImJhY2t1cFRva2VuXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJjR2xYcHVCcE9zbmpqbENWdmQ5UGhqSHFaaG89XCJ9LFwicmVnaXN0cmF0aW9uXCI6e30sXCJwYWlyaW5nQ29kZVwiOlwiN0JDQTJCQk5cIixcIm1lXCI6e1wiaWRcIjpcIjkyMzM0MjQ0NjAxNjoyMUBzLndoYXRzYXBwLm5ldFwiLFwibGlkXCI6XCIyNDg0NDcwODA5MDI2Nzc6MjFAbGlkXCIsXCJuYW1lXCI6XCJNclwifSxcImFjY291bnRcIjp7XCJkZXRhaWxzXCI6XCJDT1M0M0FRUW9QQzhzQVlZQWlBQUtBQT1cIixcImFjY291bnRTaWduYXR1cmVLZXlcIjpcImhycE0vTGNIenB2c2o2MnZreGVycnJrMUowV1FjSjNIVFlvSG1MSDNsQzg9XCIsXCJhY2NvdW50U2lnbmF0dXJlXCI6XCIyTXB6dk1rRlRnNG84ckJRUytBRVRjZ0hoMU9neVlqeXQwTWhuWE9HWUg0NEVxMENQZnlENUZ5bm1YdnR2RFh1SFVjVFVjYXozY0JHU0VPNHNRV2lCdz09XCIsXCJkZXZpY2VTaWduYXR1cmVcIjpcIjhlUGhxMzBxQjMxN1pXWGQ4YmpDelQwRVhpcnNBS0ZKSHh5L0gyQlBpSVNCZlVxSDBPMytNYkp6QjRuWDNDa3RpMHB1aCsrWjJZYVNNVjREMWNGR2dnPT1cIn0sXCJzaWduYWxJZGVudGl0aWVzXCI6W3tcImlkZW50aWZpZXJcIjp7XCJuYW1lXCI6XCI5MjMzNDI0NDYwMTY6MjFAcy53aGF0c2FwcC5uZXRcIixcImRldmljZUlkXCI6MH0sXCJpZGVudGlmaWVyS2V5XCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJCWWE2VFB5M0I4NmI3SSt0cjVNWHE2NjVOU2RGa0hDZHgwMktCNWl4OTVRdlwifX1dLFwicGxhdGZvcm1cIjpcImFuZHJvaWRcIixcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOjE3MTIyNzM0NDIsXCJteUFwcFN0YXRlS2V5SWRcIjpcIkFBQUFBSEJvXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSEJvLmpzb24iOiAie1wia2V5RGF0YVwiOlwicmNtZ0tSRlpHUWx6NG05TWwwc1JucGVBcEJuQ2crNThxSnFoWldheGx1cz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo5OTAzMjA0LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTIyNjkxOTg5MzNcIn0iCn0=" ;


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/
  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.1",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "sultan-baloch",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "Sultanb_aloch",
  ownername:process.env.OWNER_NAME|| "It'x Sultan",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "sultan"  ).toUpperCase(),



};

























global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
