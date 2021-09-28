exports.canModifyQueue = (member) => {
  const { channelID } = member.voice;
  const botChannel = member.guild.voice.channelID;

  if (channelID !== botChannel) {
    return;
  }

  return true;
};

let config;

try {
  config = {
    "TOKEN": "ODg0OTU2NzE5NDA5NjgwMzg0.YTgCKw.merJgrce5Q7yo_arhJxa_zz3s8g",
    "YOUTUBE_API_KEY": "AIzaSyCAOcVADG7v7DpoSKfnz_BqfWEhKEebPw4",
    "SOUNDCLOUD_CLIENT_ID": "",
    "MAX_PLAYLIST_SIZE": 100,
    "PREFIX": "@",
    "PRUNING": true,
    "LOCALE": "ko",
    "STAY_TIME": 30,
    "DEFAULT_VOLUME": 100
  }
} catch (error) {
  config = null;
}

exports.TOKEN = config ? config.TOKEN : process.env.TOKEN;
exports.YOUTUBE_API_KEY = config ? config.YOUTUBE_API_KEY : process.env.YOUTUBE_API_KEY;
exports.SOUNDCLOUD_CLIENT_ID = config ? config.SOUNDCLOUD_CLIENT_ID : process.env.SOUNDCLOUD_CLIENT_ID;
exports.PREFIX = (config ? config.PREFIX : process.env.PREFIX) || "/";
exports.MAX_PLAYLIST_SIZE = (config ? config.MAX_PLAYLIST_SIZE : process.env.MAX_PLAYLIST_SIZE) || 10;
exports.PRUNING = (config ? config.PRUNING : process.env.PRUNING) || false;
exports.STAY_TIME = (config ? config.STAY_TIME : process.env.STAY_TIME) || 30;
exports.DEFAULT_VOLUME = (config ? config.DEFAULT_VOLUME : process.env.DEFAULT_VOLUME) || 100;
exports.LOCALE = (config ? config.LOCALE : process.env.LOCALE) || "ko";