require("./module")

global.owner = "628999811229" //PAKE NO LU BIAR BISA ADD AKSES
global.namabot = "LynnCpanelV5" //NAMA BOT GANTI
global.namaCreator = "*LynnZxD*" //NAMA CREATOR GANTI AJA
global.autoJoin = false //NOT CHANGE / JANGAN GANTI
global.antilink = false //NOT CHANGE / JANGAN GANTI
global.versisc = '5.0.0' //NOT CHANGE / JANGAN GANTI
global.codeInvite = "CswK4kvQD1u7SfSmsYfMHZ"
global.domain = '' //ISI DOMAIN PANEL LU
global.apikey = '' //ISI APIKEY PLTA LU
global.capikey = '' //ISI APIKEY PLTC LU
global.eggsnya = '15' //PAKE ID EGGS MU KALO GA TAU DEFAULT AJA
global.location = '1' //JANGAN DIGANTI KALO G MAU EROR
global.imageurl = 'https://autoresbot.com/tmp_files/144991c0-d5c0-49b9-a655-e5a15f1d1d2e.jpg' //GANTI PP MU MENGGUNAKAN LINK TELEGRA PH
global.imageqr = 'https://autoresbot.com/tmp_files/bd8ee2f3-25e2-4a6c-8439-df6539c36e0e.jpg'
global.isLink = 'https://whatsapp.com/channel/0029VaoNzzlJJhzQTJBL5n0F' ///GANTI MENGGUNAKAN LINK GRUBMU YA
global.thumb = fs.readFileSync("./thumb.png") ///NOT CHANGE / JANGAN GANTI
global.audionya = fs.readFileSync("./all/sound.mp3") //NOT CHANGE / JANGAN GANTI
global.simbol = '♾' //GANTI AJA BEBAS
global.tekspushkon = "" //NOT CHANGE / JANGAN GANTI
global.tekspushkonv2 = "" //NOT CHANGE / JANGAN GANTI
global.packname = "Developed By LynnZxD" //GANTI AJ
global.author = "LynnCpanelV5" //GANTI SERAH MU
global.jumlah = "5" ////NOT CHANGE / JANGAN GANTI

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})