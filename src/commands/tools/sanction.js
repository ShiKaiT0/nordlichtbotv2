const { SlashCommandBuilder, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, PermissionsBitField} = require('discord.js')


module.exports = {
    data: new SlashCommandBuilder()
        .setName('sanction')
        .addUserOption(option =>
            option.setName("concerne")
                .setDescription("Membre qui sera concerné par la sanction.")
                .setRequired(true))
        .setDescription('Débute une sanction envers un membre.'),
        
    async execute(interaction, client){

        if(interaction.member.permissions.has(PermissionsBitField.Flags.KickMembers)){
            const target = interaction.options.getUser('concerne');
            const embed = new EmbedBuilder()
                .setAuthor({
                    name:"Haute Autorité du Corps des Ingénieurs de la République Galactique (HACIRG)",
                    iconURL:"https://cdn.discordapp.com/attachments/1011024611166662726/1104487408436776992/final.png"
                })
                .setTitle("< Procédère disciplinaire lancée >")
                .setColor('DarkPurple')
                .setDescription("Si besoin, demandez ajout de nouvelles informations.")
                .setFooter({
                    text:`Éxécuté par : ${interaction.user.tag}`,
                    iconURL: interaction.user.displayAvatarURL()
                })
                .setTimestamp(Date.now())
                .setDescription(`Une demande de sanction envers ${target.tag} à été envoyée. Merci de bien choisir la sanction voulue ci-dessous. Notez que si vous n'avez pas permission nécessaire, cela ne marchera pas.`);

            const kickButton = new ButtonBuilder()
            .setCustomId('sKickButton')
            .setEmoji('<:dropkick:1104759056750628885>')
            .setLabel(`Kick ${target.username}`)
            .setStyle(ButtonStyle.Primary);

            const banButton = new ButtonBuilder()
            .setCustomId('sBanButton')
            .setEmoji('<:ban:1104759798290989288>')
            .setLabel(`Ban ${target.username}`)
            if(interaction.member.permissions.has(PermissionsBitField.Flags.BanMembers)){
                banButton.setStyle(ButtonStyle.Danger)
            }else{
                banButton.setDisabled(true);
                banButton.setStyle(ButtonStyle.Secondary)
            }

            global.setTarget = target;

            interaction.reply({
                embeds: [embed],
                components: [new ActionRowBuilder().addComponents(kickButton).addComponents(banButton)]
            })

        }else{
            interaction.reply({
                content:"Dommage, mais vous n'avez la permission de base nécessaire à éxécuter la commande.",
                ephemeral: true
            })
        }

       
    }
}