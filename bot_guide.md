Guide for bot developers and coders on MPP

This guide contains general information for what you’re allowed to do with bots, may be risky to do with bots, and some tools to help you get started.
# **Good uses for bots**
- Fake currency system with games users can play
- Tracking name history and letting users view it
- Bridging chat in some channels to other places (such as Discord)
- Managing a room or keeping the crown in it while the owner is offline/afk
- Finding where users are on the site
- Midi players
  - Try to avoid using midi players in rooms where the room owner does not permit midis
- Translation
- Chatting with an AI
- Learning to program
# **What’s not allowed**
The bot and the bot’s owner may be banned for doing any of the following:

- Abusing code or exploits to lag the server or break it in any way (report bugs if you find any!)
- Using bots to break any of the [site’s rules](https://github.com/Hyye123/OpenMPP/blob/master/en_rules.md)
- Using bots with the intention of making the site worse for others
  - Example: A bot that goes around rooms automatically and insults users
  - Example: A bot that goes around rooms automatically and spams the piano until it gets banned
- Using the site normally through a user that has a BOT tag
  - The tag is meant to represent that a user is not a real human. For this reason, the BOT tag will not be given out to bots which run in a browser.
- Spamming the server with messages that don’t do anything
  - Example: Attempting to set the bot’s name every second when its name is already the desired name
  - Example: Sending “ch” to join a channel on an interval when the bot is already in that channel
  - Example: Sending hundreds of cursor movements per second (the server limits cursor movements to 20 per second)
## Gray area:
There are some things a bot can do which are not explicitly allowed or disallowed, and will be dealt with on a case-by-case basis

- Using multiple bot users in a single room
  - Two **different** bots may use different bot users in the same room
  - A bot and a finder client may use different users
  - Bots that play the piano together, or make animations together, are not allowed
    - This is not allowed because people constantly push for higher amounts of bots until it hurts the server’s performance. It is much easier to manage this by strictly disallowing it.
    - If you’d like to have a higher note quota to play black midis, we aren’t stingy about it so you can ask on the [Discord server](https://discord.gg/RjEttXpNbE).
- Using bots to take the crown in a room
  - If a room owner has left, using a script that automatically picks up the crown is allowed as long as you return it to the owner if they rejoin.
  - Using a bot to wait until someone else's room is abandoned, then holding the crown there forever, is not allowed.
- Attempting to bypass the anti-bot system
  - Analyzing and trying to reverse-engineer the code is allowed
  - If you test out a bypass and get auto-banned, you will not be unbanned
# **Important note about security**
Do not trust the server when developing bots. It's possible for the server to send your bot malicious/fake messages through an exploit or compromise on our end. If you decide to implement an eval command or something similar, keep it sandboxed or the liability is on you.
# **The anti-bot system**
Bots in Multiplayer Piano have historically been abused to crash the site, flood chat, lag players by spamming the piano, and exploit bugs. As a result, an anti-bot system has been implemented, and bots are much more restricted now. Getting detected by the anti-bot system will result in a 24 hour ban. That ban is not meant much as a punishment, but more as a way to make it more difficult to reverse-engineer. If you accidentally get yourself banned, appeal on the [Discord server](https://discord.com/invite/338D2xMufC) and there's a good chance we’ll remove it. Evading the auto-ban is not allowed if you intentionally tried to bypass it.
# **Bots in a browser**
If you would like to create a bot in the browser, there are some guides for [beginners](https://gist.github.com/Hri7566/34565985e54632f815f15323704a0919) and [intermediate](https://gist.github.com/Hri7566/117511ec6888db2cf4c1debde1d1a9b6) JavaScript programmers. One common way to use these is with [Tampermonkey](https://www.tampermonkey.net/).

Bots in the browser do not require approval. Due to the nature of the anti-bot system, there are limits on what you can do with them.

In general, adding on to the site should be safe, for example, adding event listeners to MPP.client and calling functions in the global MPP object are allowed and mostly safe to do. Changing the theme of the site (CSS and HTML) are usually fine as well.

Modifying existing properties or functions can lead to a ban, especially in Client.js.
# **Bots outside of a browser**
All bots that don’t run in a browser require approval. This is because they are significantly easier to abuse. Your client will need to send a bot token every time it connects to authorize itself. See [the protocol documentation on this](https://github.com/LapisHusky/mppclone/wiki/Protocol#hi-server-bound). To get a token, dm me in discord (!НУУЕ2004#4440) or open a ticket on the [Discord server](https://discord.gg/RjEttXpNbE) and ask about it.

Bots that run outside of a browser and use a token will get a BOT tag. This tag represents that a user won’t be exploring rooms, chatting, and playing the piano as a human and that the user is only a bot.
## **Node.js**
If your bot runs in Node.js, your best choice is [mppclone-client](https://www.npmjs.com/package/mppclone-client). This module supports tokens by default and is made to be used with MPPClone.

Another popular module is [mpp-client-xt](https://www.npmjs.com/package/mpp-client-xt). This module has some extra features compared to the regular client and does not support tokens by default, therefore, if you want to use it with MPPClone, you will need to modify it. After installing the module, open it in node\_modules/mpp-client-xt. Open index.js and you should see the following code on line 118:

self.sendArray([{m: "hi"}]);

Change that line to this:

self.sendArray([{m: "hi", token: "yourtokenhere"}]);

Replace “yourtokenhere” with the token you were given. After you save that, you should be able to use the module normally and you can follow an example on the npm page.

If you are a bit more experienced, it is recommended that you use the [dotenv](https://www.npmjs.com/package/dotenv) module to keep your token secret, but we can't provide exact instructions for any given scenario.

## **Deno**
If your bot runs in Deno, your best choice is [mppclient@v1.0.0](https://deno.land/x/mppclient@v1.0.0) (also known as mpp-client-deno). This module is functionally identical to [mppclone-client](https://www.npmjs.com/package/mppclone-client) and supports token-based authentication out of the box.
# Source code and protocol documentation
The server’s source code is private. The client’s source code is public and can be found [here](https://github.com/Hyye123/OpenMPP). Feel free to open issues or make pull requests for new features or bug fixes. For information on the protocol mppclone.com uses, see the [protocol wiki page](https://github.com/LapisHusky/mppclone/wiki/Protocol).
