const { SlashCommandBuilder, EmbedBuilder } = require('discord.js')


module.exports = {
    data: new SlashCommandBuilder()
        .setName('disconnect')
        .addStringOption(option => 
            option.setName("canal")
                .setDescription("Nom du canal auquel vous vous connectez.")
                .setRequired(true))
            
            .addBooleanOption(option => 
                option.setName("incognito")
                    .setDescription("Connexion de manière cachée, disponible selon ce que vous indique le staff."))
        .setDescription('Effectue une déconnexion rp.'),
    async execute(interaction, client){
        const chanType = interaction.options.getString("canal");
        const isHidden = interaction.options.getBoolean("incognito");
        embed = new EmbedBuilder()
            .setAuthor({
                name:"Utilitaire Réseau Global (URG)",
                iconURL:"https://cdn-icons-png.flaticon.com/512/453/453178.png"
            })
            .setColor('Red')
            .setTitle(`Déconnexion depuis : ${chanType}`)
            .setTimestamp(Date.now())
            .setFooter({
                text:`Éxécuté par : ${interaction.user.tag}`,
                iconURL: interaction.user.displayAvatarURL()
            })
        let name = ""
        if(isHidden){
            name = "[REDACTED]"
        }else{
            name=`<@${interaction.user.id}>`
        }

        embed.setDescription(`Une déconnexion à bien été enregistrée. Concerné : ${name}`)

        interaction.reply({
            embeds: [embed]
        })
    }
}