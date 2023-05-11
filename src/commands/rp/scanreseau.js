const { SlashCommandBuilder, EmbedBuilder } = require('discord.js')
let sleep = async (ms) => await new Promise(r => setTimeout(r,ms));

module.exports = {
    data: new SlashCommandBuilder()
        .setName('scanreseau')
        .setDescription("Permet d'effectuer un scan du bot"),
    async execute(interaction, client){
        embed = new EmbedBuilder()
            .setAuthor({
                name:"Scanner Réseau Wireshark",
                iconURL:"https://upload.wikimedia.org/wikipedia/commons/d/db/Wireshark_Icon.png"
            })
            .setColor('Yellow')
            .setTitle("Utilitaire de scanning réseau...")
            .setDescription("> *Merci d'attendre que le scan se finisse. Le fichier résultat sera automatiquement enregistré en local sur votre datapad.*")
            .setFooter({
                text:`Éxécuté par : ${interaction.user.tag}`,
                iconURL: interaction.user.displayAvatarURL()
            })
            .setTimestamp(Date.now())
            .setThumbnail("https://raw.githubusercontent.com/marco-lancini/goscan/master/.github/demo.gif")
        
        await interaction.reply({
            embeds: [embed]
        })

        let time = Math.floor(Math.random() * 16);
        await sleep(time*1000);
        let id = Math.floor(Math.random() * 9999901);
        let roll = Math.floor(Math.random() * 101);
        embed.setTitle("Scan réseau effectué.")
        embed.setDescription(`> *Le scan s'est fini sans problèmes, merci de récupérer le résultat sous le fichier SCN/ACT-${id}. La vérification d'exactitude à donné un roll de ${roll}.*`)
        embed.setColor('Green')

        await interaction.editReply({
            embeds: [embed]
        })
    }
}