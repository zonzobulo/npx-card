#! /usr/bin/env node
const chalk=require("chalk");
const log = console.log;
const data = {
    name: ' Matheus 👽',
    nick: ' zonzobulo',
    age: ' 25',
    github: ' https://github.com/zonzobulo',
    twitter: ' https://twitter.com/zonzobulo',
    itemName: 'Name:',
    itemNick: 'Nick:',
    itemAge: 'Age:',
    itemGit: 'Github:',
    itemTwitter: 'Twitter:',
};

log(chalk.hex('FF5733').bold(data.itemName) + chalk.hex('ED7157')(data.name));
log(chalk.hex('FF5733').bold(data.itemNick) + chalk.hex('ED7157')(data.nick));
log(chalk.hex('FF5733').bold(data.itemAge) + chalk.hex('ED7157')(data.age));
log(chalk.hex('FF5733').bold(data.itemGit) + chalk.hex('ED7157')(data.github));
log(chalk.hex('FF5733').bold(data.itemTwitter) + chalk.hex('ED7157')(data.twitter));
log(chalk.bgBlack.inverse('May the force be with you!'));
