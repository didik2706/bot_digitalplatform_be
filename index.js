const { Telegraf } = require("telegraf");

const bot = new Telegraf("5144513037:AAFJyL7S1PF_BLxEEecWJZ7EENMLB4PHH8U");
bot.start(ctx => {
    ctx.reply("Halo semuanya, perkenalkan saya digitalbe_bot");
});

bot.command("all", ctx => {
    ctx.reply("@hillahfa @Qir_Of @yogawhyd @ddyirwn SyahRONii @Hafidd_04 @Snkuu27");
});

bot.launch()