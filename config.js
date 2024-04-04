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
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/758549f0de2219884f387.jpg,https://telegra.ph/file/9498496b010dfb5900b80.jpg,https://telegra.ph/file/59bf80efbb6e6576b5a52.jpg,https://telegra.ph/file/ee0e191363161e88e4743.jpg" // ramadan Theme Images
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_14_04_04_ewogICJjcmVkcy5qc29uIjogIntcIm5vaXNlS2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwieVAwL3poa3JMVXhlNzRNZnhaK09KTlpyUUVSc3N2bU1aT0xwVmFqTmVsYz1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcImZyTDBxYkw3NjE5N0x4TzdBQStUUk5CNFJoTEZ3ZmJBaHhhUzM0VlJwWEE9XCJ9fSxcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiV0FQZ3ZNVHBBY1BwY09lOExVSFlOMlM1Mjc2c2lHeTJYK09RNnNMTldXYz1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIlRySFhIRXBPeWlmKzdSdzBvVHFTYThVQURVUDdmZWpqYzJVU3g0ZGNzUms9XCJ9fSxcInNpZ25lZElkZW50aXR5S2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiZ0NnRVNvUmxRWFJZZktRaktvTkM3LzZmbkdEWEptbys3aE5zOWhZYkIxZz1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIk9vTXJXcmROMkszUFZVKzQrOHBTZ0JsYktQM092aHBQc0JPWWYzZUtIRFk9XCJ9fSxcInNpZ25lZFByZUtleVwiOntcImtleVBhaXJcIjp7XCJwcml2YXRlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCIrTzJoY2RYOW5zeTNpckxhWXJBMGtIUWh4bzNTZ21CQkNuaVUwa2lVUVhFPVwifSxcInB1YmxpY1wiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwianJrRzdaSVljUUFEZjBrTTljZXYvQzNzc2VTbnFhKy9Vc0I4OG93TWZVST1cIn19LFwic2lnbmF0dXJlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJXSXh4RzRmY0w4N3I5Q1llQkpicHBrZVdMYzBBMVBCZmk1c3RvRDVKOExJeDVoQ3BYcVVhem8yNUxkdmFmWkZtdjJZT2VlYk1iM0dLbmJRQVB3MlFDZz09XCJ9LFwia2V5SWRcIjoxfSxcInJlZ2lzdHJhdGlvbklkXCI6MTMzLFwiYWR2U2VjcmV0S2V5XCI6XCIrbjV6bjYwRERhL2VvRnRObTExclo5RkpIOU1yRVdNQVFSUFVkOFViVVNzPVwiLFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6W3tcImtleVwiOntcInJlbW90ZUppZFwiOlwiOTIzMzQyNDQ2MDE2QHMud2hhdHNhcHAubmV0XCIsXCJmcm9tTWVcIjp0cnVlLFwiaWRcIjpcIjUyOTgyM0FFNkIzMDFERDI1RDJBNUJFOEQzQ0ExMzUxXCJ9LFwibWVzc2FnZVRpbWVzdGFtcFwiOjE3MTIyNDcyMzV9LHtcImtleVwiOntcInJlbW90ZUppZFwiOlwiOTIzMzQyNDQ2MDE2QHMud2hhdHNhcHAubmV0XCIsXCJmcm9tTWVcIjp0cnVlLFwiaWRcIjpcIjJFQkJERDMyQzlENEE2MkIyMzhCQ0I2MkMxMEJFMjUyXCJ9LFwibWVzc2FnZVRpbWVzdGFtcFwiOjE3MTIyNDcyMzV9LHtcImtleVwiOntcInJlbW90ZUppZFwiOlwiOTIzMzQyNDQ2MDE2QHMud2hhdHNhcHAubmV0XCIsXCJmcm9tTWVcIjp0cnVlLFwiaWRcIjpcIjM4QTg0RDA3OUE1RjgxNkI0QjY1NTQ1QkYzOEU1NzMyXCJ9LFwibWVzc2FnZVRpbWVzdGFtcFwiOjE3MTIyNDcyMzl9LHtcImtleVwiOntcInJlbW90ZUppZFwiOlwiOTIzMzQyNDQ2MDE2QHMud2hhdHNhcHAubmV0XCIsXCJmcm9tTWVcIjp0cnVlLFwiaWRcIjpcIjY2MEU0QTI0NUYyNzcwMjcyMTIxNjFFMDE4NTAwNTAzXCJ9LFwibWVzc2FnZVRpbWVzdGFtcFwiOjE3MTIyNDcyMzl9XSxcIm5leHRQcmVLZXlJZFwiOjMxLFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjozMSxcImFjY291bnRTeW5jQ291bnRlclwiOjEsXCJhY2NvdW50U2V0dGluZ3NcIjp7XCJ1bmFyY2hpdmVDaGF0c1wiOmZhbHNlfSxcImRldmljZUlkXCI6XCJ5WTFyUVh0M1FHeU5xRWdVTmk3VTFBXCIsXCJwaG9uZUlkXCI6XCIyZmU2NjYzYi1jNmNiLTQzN2QtYjViMy0yNmFiM2VhZGQzMzNcIixcImlkZW50aXR5SWRcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIndXM1pVS1BSUExzZjRKb3hWK0V1Q2RKTnFibz1cIn0sXCJyZWdpc3RlcmVkXCI6dHJ1ZSxcImJhY2t1cFRva2VuXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCIvNTJrWmoxOE1YdEczL1h4aUpneEZhWXFiUjQ9XCJ9LFwicmVnaXN0cmF0aW9uXCI6e30sXCJwYWlyaW5nQ29kZVwiOlwiRjFWNEc5MU1cIixcIm1lXCI6e1wiaWRcIjpcIjkyMzM0MjQ0NjAxNjoxOEBzLndoYXRzYXBwLm5ldFwiLFwibGlkXCI6XCIyNDg0NDcwODA5MDI2Nzc6MThAbGlkXCIsXCJuYW1lXCI6XCJNclwifSxcImFjY291bnRcIjp7XCJkZXRhaWxzXCI6XCJDT080M0FRUXZhTzdzQVlZQVNBQUtBQT1cIixcImFjY291bnRTaWduYXR1cmVLZXlcIjpcImhycE0vTGNIenB2c2o2MnZreGVycnJrMUowV1FjSjNIVFlvSG1MSDNsQzg9XCIsXCJhY2NvdW50U2lnbmF0dXJlXCI6XCIvcWR4TGpRWTJoaWRBUmU4TVdCMm1FNjVoOVlHdmZ5a2hTT2svMzlQYmQ0azJPUWxHQWNZUEl0Z0wvQnBwa2RUYmZUcWp2UXUrcU9qUzl2Vll1dTdBZz09XCIsXCJkZXZpY2VTaWduYXR1cmVcIjpcImphUUNDQy9PTGJ4dHJhRDlnVEhReUtldUxKeitVd2drU0RtK1pKbG5JWEszRWhIaFE0WTF3Y3NrRnZzSS8vY2pvYUJkaGtsUGRpK2l3TzYrTHFWM0RnPT1cIn0sXCJzaWduYWxJZGVudGl0aWVzXCI6W3tcImlkZW50aWZpZXJcIjp7XCJuYW1lXCI6XCI5MjMzNDI0NDYwMTY6MThAcy53aGF0c2FwcC5uZXRcIixcImRldmljZUlkXCI6MH0sXCJpZGVudGlmaWVyS2V5XCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJCWWE2VFB5M0I4NmI3SSt0cjVNWHE2NjVOU2RGa0hDZHgwMktCNWl4OTVRdlwifX1dLFwicGxhdGZvcm1cIjpcImFuZHJvaWRcIixcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOjE3MTIyNDcyMzQsXCJteUFwcFN0YXRlS2V5SWRcIjpcIkFBQUFBSEJjXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSEJjLmpzb24iOiAie1wia2V5RGF0YVwiOlwiWVdTMUZieElyRGxpbmQzS3FlSjJ1YTN0Z254RjdIVWFXUkpobWx6aVNZaz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo5OTAzMTk0LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0=" ;


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
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



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
