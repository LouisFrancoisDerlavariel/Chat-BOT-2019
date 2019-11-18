//Get discord.js
const Discord = require('discord.js');

//Create client instance as bot
const botRem = new Discord.Client();

//Set listener on 'ready'
botRem.on('ready', () => {
  console.log('Rem ready!');
});

//Set listener on 'message'
botRem.on('message', message => {
  if (message.content === 'ฉันรักเอมิเลีย') {
    message.reply('เอมิเลียก็รัก%s');
  }
});
botRem.on('message', message => {
  if (message.content === 'เอมิเลีย') {
    message.reply('ค่ะ');
  }
});botRem.on('message', message => {
  if (message.content === 'เอมิเลียชอบใคร') {
    message.reply('ถ้าบอกมันจะเป็นการสปอยนะ');
  }
});
botRem.on('message', message => {
  if (message.content === 'เอมิเลียเปิดเพลง') {
    message.reply('เอมิเลียเปืดเพลงไม่ได้ค่ะ');
  }
});botRem.on('message', message => {
  if (message.content === 'เอมิเลียน่ารักจัง') {
    message.reply('ถึงชมก็ไม่ดีใจหรอก');
  }
});
botRem.on('message', message => {
  if (message.content === 'เอมิเลียน่ารัก') {
    message.reply('ชมอีกก็ได้นะคะ');
  }
});
botRem.on('message', message => {
  if (message.content === 'ฉันรักเอมิเลีย') {
    message.reply('เอมิเลียก็รัก%s');
  }
});
botRem.on('message', message => {
  if (message.content === 'ใครสร้างเอมิเลีย') {
    message.reply('คุณ LouisFrancois ค่ะ');
  }
});
botRem.on('message', message => {
  if (message.content === 'เอมิเลียทำอะไรได้บ้าง') {
    message.reply('เอมิเลียสามารถเป็นเพื่อนคุยได้นะคะ');
  }
});
botRem.on('message', message => {
  if (message.content === 'เอมิเลียชอบกินอะไร') {
    message.reply('เอมิเลียชอบกินของอร่อยคะ');
  }
});
botRem.on('message', message => {
  if (message.content === 'เอมิเลียเงี่ยนไหม') {
    message.reply('เอมิเลียไม่ขอตอบคะ');
  }
});
botRem.on('message', message => {
  if (message.content === 'เอมิเลียน่ารักไหม') {
    message.reply('น่ารักจิ');
  }
});
botRem.on('message', message => {
  if (message.content === 'ฉันรักเอมิเลีย') {
    message.reply('เอมิเลียก็รัก%s');
  }
});
botRem.on('message', message => {
  if (message.content === 'เอมิเลีย') {
    message.reply('ค่ะ');
  }
});

botRem.login('NjQ2MDU3NTI2ODUyNDUyMzkw.XdLoOQ.xPmw_Q8fCjP8_gO6jcJHcy26KqU');
