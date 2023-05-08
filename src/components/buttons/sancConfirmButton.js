const { EmbedBuilder, PermissionsBitField } = require('discord.js')

module.exports = {
    data: {
        name: "sancConfirm"
    },
    async execute(interaction, client){
        if(interaction.member.permissions.has(PermissionsBitField.Flags.KickMembers)){
            actionType = global.sActionType;
            target = global.setTarget;
            const embed = new EmbedBuilder()
                .setAuthor({
                    name:"Haute Autorité du Corps des Ingénieurs de la République Galactique (HACIRG)",
                    iconURL:"https://cdn.discordapp.com/attachments/1011024611166662726/1104487408436776992/final.png"
                })
                .setFields([
                    {
                        name:"Action effectuée : ",
                        value: `Sanction effectuée : ${actionType}, pour : ${reason}, sur ${target}` 
                    }
                ])
                .setTitle("Action confirmée.")
                .setColor('Red')
                .setDescription("Votre demande de sanction à bien été reçue et effectuée.")
                .setFooter({
                    text:`Éxécuté par : ${interaction.user.tag}`,
                    iconURL: interaction.user.displayAvatarURL()
                })
                .setTimestamp(Date.now())
    
            if(actionType == "kick"){
                interaction.guild.members.kick(target);
                interaction.reply({
                    embeds: [embed]
                })
            }else if(actionType == "ban"){
                if(interaction.member.permissions.has(PermissionsBitField.Flags.BanMembers)){
                    interaction.guild.members.ban(target);
                    interaction.reply({
                        embeds: [embed]
                    })
                }else{
                    interaction.reply({
                        content:"Dommage, mais vous n'avez la permission de base nécessaire à éxécuter la commande.",
                        ephemeral: true
                    })
                }
            }
        }else{
            interaction.reply({
                content:"Dommage, mais vous n'avez la permission de base nécessaire à éxécuter la commande.",
                ephemeral: true
            })
        }
    }
}


    


