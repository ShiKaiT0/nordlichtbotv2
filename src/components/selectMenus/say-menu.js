const { EmbedBuilder } = require('discord.js')

module.exports= {
    data: { 
        name:"say-menu"
    },
    async execute(interaction,client){

        const type = interaction.values[0];

        if(type == "msgNara"){
            embed = new EmbedBuilder()
                .setAuthor({
                    name:"Narration",
                    iconURL:"https://cdn3.emoji.gg/emojis/3389-yellowbook.gif"
                })
                .setTitle("L'action continue...")
                .setColor('Yellow')
                .setDescription(`> *${global.sayText}*`)
                .setThumbnail("https://cdn-icons-png.flaticon.com/512/1183/1183807.png")
                .setFooter({
                    text:`Émis par : ${interaction.user.tag}`,
                    iconURL: interaction.user.displayAvatarURL()
                })

            await interaction.reply({
                embeds: [embed]
            });

        }

        if(type == "msgSysteme"){
            embed = new EmbedBuilder()
                .setAuthor({
                    name:"Système",
                    iconURL:"https://cdn3.emoji.gg/emojis/4887-databaseerror.png"
                })
                .setTitle("Message Système - Lire attentivement")
                .setColor('Blue')
                .setDescription(`> ${global.sayText}`)
                .setThumbnail("https://cdn-icons-png.flaticon.com/512/2286/2286729.png")
                .setFooter({
                    text:`Émis par : ${interaction.user.tag}`,
                    iconURL: interaction.user.displayAvatarURL()
                })

            await interaction.reply({
                embeds: [embed]
            });

        }

        if(type == "msgAdmin"){
            embed = new EmbedBuilder()
                .setAuthor({
                    name:"Administration du Corps Ingénieur",
                    iconURL:"https://cdn.discordapp.com/attachments/1011024611166662726/1104487408436776992/final.png"
                })
                .setTitle("Message Administratif - Lire attentivement")
                .setColor('Red')
                .setDescription(`> ${global.sayText}`)
                .setThumbnail("https://w7.pngwing.com/pngs/140/402/png-transparent-galactic-republic-galactic-empire-star-wars-the-old-republic-clone-trooper-estelar-logo-monochrome-sith.png")
                .setFooter({
                    text:`Émis par : ${interaction.user.tag}`,
                    iconURL: interaction.user.displayAvatarURL()
                })

            await interaction.reply({
                embeds: [embed]
            });

        }

        if(type == "msgEmpty"){
            await interaction.reply({
                content: global.sayText
            });
        }


    }
}