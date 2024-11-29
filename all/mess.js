require("./global")

const mess = {
   wait: "*Wet Cuyy ♾*",
   success: "*Done Cuyy ♾*",
   on: "Sudah Aktif", 
   off: "Sudah Off",
   query: {
       text: "Teks Nya?",
       link: "Link Nya ?",
   },
   error: {
       fitur: "~€Ř¤Ŕ 4¤4 Not Found~",
   },
   only: {
       group: "Lu Cuma Bisa Gunain Fitur Ini Di Grup",
       private: "Lu Cuma Bisa Gunain Fitur Ini Di Private Chat",
       owner: "Lu Tuh Bukan Owner Kontol",
       admin: "Lu Tuh Bukan Etmin Kontol",
       badmin: "Lu Cuma Bisa Gunain Fitur Ini Kalok Bot Jadi Etmin",
       premium: "Lu Tuh Bukan User Prem Kontol",
   }
}

global.mess = mess

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})