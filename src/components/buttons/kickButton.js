const { EmbedBuilder, ButtonBuilder, ButtonStyle, ActionRowBuilder,PermissionsBitField } = require('discord.js')

module.exports = {
    data: {
        name: "sKickButton"
    },
    async execute(interaction, client){
        if(interaction.member.permissions.has(PermissionsBitField.Flags.KickMembers)){
            target = global.setTarget;
            const embed = new EmbedBuilder()
            .setAuthor({
                name:"Haute Autorité du Corps des Ingénieurs de la République Galactique (HACIRG)",
                iconURL:"https://cdn.discordapp.com/attachments/1011024611166662726/1104487408436776992/final.png"
            })
            .setTitle("< Confirmez l'action : kick >")
            .setColor('Red')
            .setDescription("Note: il ne sera pas possible de revenir en arrière post-confirmation.")
            .setFooter({
                text:`Éxécuté par : ${interaction.user.tag}`,
                iconURL: interaction.user.displayAvatarURL()
            })
            .setTimestamp(Date.now())
            .setDescription(`Une demande de sanction envers ${target.tag} à été envoyée. Merci de bien vouloir le confirmer.`);

            const confirmButton = new ButtonBuilder()
                .setCustomId('kickConfirm')
                .setEmoji('<:3557greentick:1011039901426401413>')
                .setLabel('Confirmer')
                .setStyle(ButtonStyle.Primary);
            
            const denyButton = new ButtonBuilder()
                .setCustomId('kickDenyButton')
                .setEmoji("<:5598redcross:1011039903074758676>")
                .setLabel('Annuler')
                .setStyle(ButtonStyle.Danger)

            interaction.reply({
                embeds: [embed],
                components: [new ActionRowBuilder().addComponents(confirmButton).addComponents(denyButton)]
            })
        }else{
            interaction.reply({
                content:"Dommage, mais vous n'avez la permission de base nécessaire à éxécuter la commande.",
                ephemeral: true
            })
        }

    }
}


    


