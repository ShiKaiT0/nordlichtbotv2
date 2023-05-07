const { SlashCommandBuilder, EmbedBuilder } = require('discord.js')


module.exports = {
    data: new SlashCommandBuilder()
        .setName('materiaux')
        .setDescription('Informations sur les matériaux disponibles.'),
    async execute(interaction, client){
        embed = new EmbedBuilder()
            .setAuthor({
                name:"Kuat Drive Yards",
                iconURL: "https://static.wikia.nocookie.net/thelastofthedroids/images/b/ba/Kuat_Drive_Yards_Imperial_logo.jpg/revision/latest/scale-to-width-down/250?cb=20141011024847"
            })
            .setColor('Aqua')
            .setDescription("*Mes respects*, voici une transmission contenant tout le nécessaire pour que vous puissiez faire le nécessaire pour la république !")
            .setTitle("**- [ Transmission des Ingénieurs de Kuat ] -**")
            .setFields([
                {
                    name:"• Présentation Kuat Drive Yards :",
                    value:"https://starwars.fandom.com/wiki/Kuat_Drive/_Yards"
                },
                {
                    name:"• Fonctionnement d'un hyperdrive :",
                    value:"https://starwars.fandom.com/fr/wiki/Hyperespace (+ https://starwars.fandom.com/fr/wiki/Hyperdrive)"
                },
                {
                    name:"• Les différents métaux :",
                    value:"https://starwars.fandom.com/fr/wiki/Cat%C3%A9gorie:M%C3%A9taux + https://www.starwars-holonet.com/encyclopedie/technologie-minerais.html + https://www.starwars-holonet.com/theme/metal.html"
                },
                {
                    name: "• Les différents matériaux :",
                    value:"https://starwars.fandom.com/fr/wiki/Cat%C3%A9gorie:Mat%C3%A9riaux"
                }
            ])
        .setDescription("Si besoin, demandez ajout de nouvelles informations.")
        .setFooter({
            text:`Éxécuté par : ${interaction.user.tag}`,
            iconURL: interaction.user.displayAvatarURL()
        })
        .setTimestamp(Date.now())
        .setThumbnail("https://swtorfiles.jedipedia.net/codex/500/cdx.missions.kuat_drive_yards.png");

        interaction.reply({
            embeds: [embed]
        });
    }
}