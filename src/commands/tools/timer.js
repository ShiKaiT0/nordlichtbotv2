const { SlashCommandBuilder,EmbedBuilder } = require('discord.js')
let sleep = async (ms) => await new Promise(r => setTimeout(r,ms));
module.exports = {
    data: new SlashCommandBuilder()
        .setName('timer')
        .addIntegerOption(option => 
            option.setName("temps")
                .setDescription("Temps en minutes à attendre.")
                .setRequired(true))
        .setDescription('Faire attendre le bot un certain temps'),
    async execute(interaction, client){
        let time = interaction.options.getInteger("temps");
        embed = new EmbedBuilder()
            .setAuthor({
                name:"Utilitaire d'attente",
                iconURL:"https://cdn-icons-png.flaticon.com/512/3917/3917267.png"
            })
            .setColor('Aqua')
            .setTitle("Début d'un timer..")
            .setDescription(`Un timer de ${time} minute(s) à été lancé.`)
            .setTimestamp(Date.now())
            .setFooter({
                text:`Éxécuté par : ${interaction.user.tag}`,
                iconURL: interaction.user.displayAvatarURL()
            })
        
        await interaction.reply({
            embeds: [embed],
        })
        
        time = time*60;
        await sleep(time*1000);
        embed.setColor('Green');
        embed.setDescription(`Timer fini.`);

        interaction.editReply({
            embeds: [embed],
            content:"Timer achevé."
        })

    } 
}