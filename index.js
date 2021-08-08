const Discord = require ('discord.js');
const chalk = require ('chalk');

const bot = new Discord.Client();
let logger = console.log;

var state = ["Je vous surveille", "SurvieExtended V2", "By Sebeleuuu#9211"];

logger(chalk.yellow('--> ')  + chalk.blue('Tentative de connexion en cours..'));

// Actions à réaliser quand le bot se connecte.
bot.on("ready", function () {

    const botOnline = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle('<:coyotte:870308406538408016> Coyotte')
        .setDescription("<a:check3Coyotte:870301721866432513> Je suis désormais disponible.")

    bot.channels.cache.get('870317507154702336').send(botOnline);
    
    logger(chalk.yellow('--> ')  + chalk.green('Tentative de connexion réussie.'));
    logger("");
    logger(chalk.yellow('--> ') + chalk.magenta('Connecté en tant que : ') + chalk.magentaBright(bot.user.tag));
    logger(chalk.yellow('--> ') + chalk.magenta("Identifiant d'utilisateur : ") + chalk.magentaBright(bot.user.id));

    setInterval(function() {

        let stats = state[Math.floor(Math.random() * state.length)];
        bot.user.setActivity(stats, { type: "PLAYING" } );

    }, 5000)

});

function attachIsImage(msgAttach) {
    var url = msgAttach.url;
    //True if this url is a png image.
    return url.indexOf("png", url.length - "png".length /*or 3*/) !== -1;
}

bot.on('message', message => {

    let prefix = '.';
    let channelID = '870317507154702336';
    let channelValidation = '870291915998920715';
    let channelImages = '868828315971096646';

    if (message.attachments.size > 0) {

        if (message.attachments.every(attachIsImage)){
            
            if(message.channel.id === channelImages) {

            } else {

                if(message.author.id === '829395154855133237') {

                } else {

                    const error = new Discord.MessageEmbed()
                    .setColor('#ff0000')
                    .setTitle('Protection')
                    .setDescription("<a:cross3Coyotte:870301760844087316> " + message.author.tag + ", merci de mettre vos photos dans le salon approprié ! <#868828315971096646>")
        
                    message.channel.send(error).then(msg=> msg.delete({timeout:"7000"}));
                    message.delete();
                    
                }

            }

        }
    }

    if(message.content === prefix + 'validMessage') {

        if(message.channel.id === channelValidation) {

            const validMsg = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle('<:protect:870302704180813834> Validation')
            .setDescription("<a:grassBlock:870306035821346866> __Recrutements ouvert, c'est l'heure de valider son compte !__\nVeuillez écrire ci dessous la commande `.valid` pour valider votre compte.")

            message.channel.send(validMsg);

        } else {
    
            const error = new Discord.MessageEmbed()
            .setColor('#ff0000')
            .setTitle('Protection')
            .setDescription("<a:cross3Coyotte:870301760844087316> " + message.author.tag + ", merci d'éxécuter vos commandes dans le salon approprié ! <#870317507154702336>")
    
            message.channel.send(error).then(msg=> msg.delete({timeout:"7000"}));
    
        } 

        message.delete();

    }

    if(message.content === prefix + 'valid') {

        if(message.channel.id === channelValidation) {

            const validMsg = new Discord.MessageEmbed()
            .setColor('#00ff4a')
            .setTitle('<:protect:870302704180813834> Validation')
            .setDescription("<a:check2Coyotte:870301708767596555> Votre compte a été validé. Bienvenue sur **SurvieExtended V2**")

            message.channel.send(validMsg).then(msg=> msg.delete({timeout:"2000"}));

            setTimeout(() => {

                const guildMember = bot.guilds.cache.get("868826680817504267");
                let role = guildMember.roles.cache.get('870290993335914547');
                let role2 = guildMember.roles.cache.get('871184278451527740');
                let role3 = guildMember.roles.cache.get('871184463726542932');
                let role4 = guildMember.roles.cache.get('871184787442892800');
                let role5 = guildMember.roles.cache.get('871185844193603624');
                
                message.member.roles.add(role).catch(console.error);
                message.member.roles.add(role2).catch(console.error);
                message.member.roles.add(role3).catch(console.error);
                message.member.roles.add(role4).catch(console.error);
                message.member.roles.add(role5).catch(console.error);

                const welcome = new Discord.MessageEmbed()
                .setColor('#c5a346')
                .setTitle(`<:Uwu:870301561635606600> Bienvenue sur SurvieExtended V2 !`)
                .setDescription(` `)
                .addFields(
                    { name: '\u200B', value: '\u200B' },
                    { name: '<:Earlydev:870304562731421736> Un plugin unique !', value: `Le serveur tourne uniquement sur un seul plugin, le notre. Celui ci rajoute énormément de fonction pour rendre la survie plus complexe.` },
                    { name: '\u200B', value: '\u200B' },
                    { name: "<a:meowMoney:870304844731277332> Un système d'économie.", value: `Acheter des resources, des biens ou alors crée votre commerce. Tout est possible !` },
                    { name: "<a:grassBlock:870306035821346866> Des Monuments & Donjons", value: "Tu aimes l'exploration ? Sur la map plusieurs Monuments et Donjons sont présent, trouve les et devient riche !" },
                    { name: '\u200B', value: '\u200B' },
                    { name: "<a:miskine:870308367049048124> Des catastrophes dévasteuses", value: "Attention parfois le temps peut vous jouer des tours ! Attention aux nuits mouvementés :eyes:" },
                    { name: '\u200B', value: '\u200B' },
                )
                .setTimestamp()
                .setFooter('Crée par Sebeleuuu#9211', 'https://cdn.discordapp.com/avatars/829395154855133237/a209eb5099f50f64fa286e3f760cda49.webp?size=128');

                message.author.send(welcome)
                
            
            }, 2500)

        } else {

            const error = new Discord.MessageEmbed()
            .setColor('#ff0000')
            .setTitle('Protection')
            .setDescription("<a:cross3Coyotte:870301760844087316> " + message.author.tag + ", votre compte est déjà validé.")

            message.channel.send(error).then(msg=> msg.delete({timeout:"7000"}));

        } 

        message.delete();

    }

    if(message.content === prefix + 'model') { 

        if(message.channel.id === channelID) {

            const welcome = new Discord.MessageEmbed()
            .setColor('#c5a346')
            .setTitle(`<:Uwu:870301561635606600> Voici le model pour nous rejoindre !`)
            .setDescription("Ce model est à respecter, tout non respect de ce model vous verras refusé.```Prénom dans la vrai vie : (Réponse non obligatoire)```\n```Âge dans la vrai vie : (Réponse obligatoire)```\n```Pseudo sur Minecraft : (Réponse obligatoire)```\n\n```Depuis combien de temps vous jouer à Minecraft : (Réponse obligatoire)```\n```Votre expérience sur Minecraft (Exemple: Je suis fort en build/décoration/redstone..): (Réponse obligatoire)```\n\n\n```Etes vous prêt à partager le serveur à des personnes/amis : (Réponse obligatoire)```\n")
            .setTimestamp()
            .setFooter('Crée par Sebeleuuu#9211', 'https://cdn.discordapp.com/avatars/829395154855133237/a209eb5099f50f64fa286e3f760cda49.webp?size=128');

            message.channel.send(welcome)
            message.channel.send("*Veuillez copier coller le model et l'envoyer à Sebeleuuu#9211 une fois rempli.*");

        } else {

            const error = new Discord.MessageEmbed()
            .setColor('#ff0000')
            .setTitle('Protection')
            .setDescription("<a:cross3Coyotte:870301760844087316> " + message.author.tag + ", merci d'éxécuter vos commandes dans le salon approprié ! <#870317507154702336>")

            message.channel.send(error).then(msg=> msg.delete({timeout:"7000"}));

        }         
        
        message.delete();

    }

    if(message.content === prefix + 'play') { 

        const playWithMe = new Discord.MessageEmbed()
        .setColor('#00deff')
        .setTitle(`<:foxSleep:870309382548758599> Nous rejoindre`)
        .setDescription("Hey, eh ! eh ! Oui toi la. Tu veux nous rejoindre ? Tape `.model` et suis les consignes.")

        message.channel.send(playWithMe)
        
        message.delete();

    }

});

    

setTimeout(() => {

    logger(chalk.blueBright(' ---> ') + chalk.white("Chargement du module : ") + chalk.red("VALID Account") + ' | ' + chalk.green("OPERATIONNEL"));
    logger(chalk.blueBright(' ---> ') + chalk.white("Chargement du module : ") + chalk.red("VALID Message") + ' | ' + chalk.green("OPERATIONNEL"));
    logger(chalk.blueBright(' ---> ') + chalk.white("Chargement du module : ") + chalk.red("Play Message") + ' | ' + chalk.green("OPERATIONNEL"));
    logger(chalk.blueBright(' ---> ') + chalk.white("Chargement du module : ") + chalk.red("MODEL Message") + ' | ' + chalk.green("OPERATIONNEL"));
    logger(chalk.blueBright(' ---> ') + chalk.white("Chargement du module : ") + chalk.red("CHANNEL Warner") + ' | ' + chalk.green("OPERATIONNEL"));

}, 2500)

bot.login(process.env.TOKEN)
