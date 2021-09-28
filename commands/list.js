const i18n = require("../util/i18n");
const { MessageEmbed } = require("discord.js");

const json = require("../list.json");
const list = json.data;

module.exports = {
  name: "list",
  description: i18n.__("list.description"),
  execute(message) {
    var result_text = "";

    for(var i = 0; i < list.length; i++){
        var temp_text = `**List${i + 1}** ${list[i].nickname}\n`;
        result_text = result_text + temp_text;
    }

    let nowPlaying = new MessageEmbed()
      .setTitle("리스트 목록")
      .setDescription(result_text)
      .setColor("#F8AA2A");

    return message.channel.send(nowPlaying);
  }
};