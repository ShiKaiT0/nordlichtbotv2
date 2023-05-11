const { SlashCommandBuilder, EmbedBuilder} = require('discord.js')


module.exports = {
    data: new SlashCommandBuilder()
        .setName('connect')
        .addStringOption(option => 
            option.setName("type")
                .setDescription("Type de connexion")
                .setRequired(true)
                .addChoices(
                    {name: "Connexion classique", value:"base_connect"},
                    {name: "Connexion sécurisée", value:"secure_connect"},
                ))
        .addStringOption(option => 
            option.setName("canal")
                .setDescription("Nom du canal auquel vous vous connectez.")
                .setRequired(true))
        .addBooleanOption(option => 
            option.setName("incognito")
                .setDescription("Connexion de manière cachée, disponible selon ce que vous indique le staff."))
        .setDescription('Se connecter à un canal/réseau donné.'),
    async execute(interaction, client){
        const chanType = interaction.options.getString("canal");
        const connectType = interaction.options.getString("type");
        const isHidden = interaction.options.getBoolean("incognito");

        embed = new EmbedBuilder()
            .setAuthor({
                name:"Utilitaire Réseau Global (URG)",
                iconURL:"https://cdn-icons-png.flaticon.com/512/453/453178.png"
            })
            .setColor('Blue')
            .setTitle(`Connexion sur canal type : ${chanType}`)
            .setTimestamp(Date.now())
            .setFooter({
                text:`Éxécuté par : ${interaction.user.tag}`,
                iconURL: interaction.user.displayAvatarURL()
            })
        if(connectType == "secure_connect"){
            embed.setColor('Red')
            embed.setThumbnail("https://static.thenounproject.com/png/3262211-200.png")
            if(isHidden){
                embed.setDescription(`> *Un canal de communication sécurisé à été ouvert. L'auteur de cette ouverture n'a pas été spécifiée, son identité à été notée comme [REDACTED]. Si vous pensez que cela est une erreur merci de contacter un administrateur réseau au plus vite.*`)
            }else{
                embed.setDescription(`> *Un canal de communication sécurisé à été ouvert. Auteur: <@${interaction.user.id}>*`)
            }
        }else{
            embed.setThumbnail("https://cdn3.iconfinder.com/data/icons/computers-programming/512/Integration_2-512.png")
            if(isHidden){
                embed.setDescription("> Une communication viens d'être initiée. L'auteur n'a pas été correctement enregistré, ou à été caché délibérément. Si vous pensez que cela est une erreur, merci d'en notifier l'administration.")
            }else{
                embed.setDescription(`> Une communication viens d'être initiée. Auteur: <@${interaction.user.id}>*`)  
            }
        }

        interaction.reply({
            embeds: [embed]
        })

    }
}