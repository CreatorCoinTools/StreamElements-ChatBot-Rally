# StreamElements ChatBot for Rally
StreamElements ChatBot which listens to specific commands, and displays public Rally Information in chat through the StreamElements Bot.

# Installation
1. Click [here](https://streamelements.com/dashboard/overlays/share/5fd6148e4d2bf41f92bc49e1) to install the ChatBot widget to your StreamElements Overlays.
2. Getting a JWT Token (Used to send messages via SE Bot):
   - Open [Jebaited](https://jebaited.net) 
   - Click Sign-In with StreamElements and complete the Sign-In
   - After a sucessful Sign-In, click [here](https://jebaited.net/tokens/) to open the Token Dashboard
   - Click the Scopes button and check **botMsg**, then click **Add Token** 
     ![alt test](https://media.discordapp.net/attachments/766155327582109716/805471127810867210/unknown.png?width=886&height=498)
   - The token should look something like this. 
   ![alt text](https://media.discordapp.net/attachments/766155327582109716/805472255998951475/unknown.png?width=1025&height=166)
   - Copy the token, and open the ChatBot widget in the StreamElements overlay editor.
   - In the overlay editor, Navigate to **Settings -> JWT Token** and paste in the copied JWT Token.

        ![alt text](https://media.discordapp.net/attachments/766155327582109716/805481216307625984/unknown.png)
   - Navigate to **Settings -> CCoin** and enter your Creator Coin Symbol
   - Save the overlay (top right).
3. Click the url icon on the top-right of the menu bar to copy the widget url.![alt text](https://media.discordapp.net/attachments/766155327582109716/805468910862204928/unknown.jpg)
4. Add the ChatBot widget in **Every Scene** in your OBS as a **Browser Source**. The ChatBot is activated only when it is active in OBS.

# Getting Started
## **Default Commands**
- **Commands List:** !rlycmds
- **Rally Price:** !rly
- **Creator Coin Information:** !cc
- **Creator Coin Transactions:** !cct
- **Creator Coin Supporters:** !ccs 
- **Creator Coin Support Volume:** !ccsv
- **Creator Coin Count:** !ccc

![alt text](https://media.discordapp.net/attachments/766155327582109716/805481751659937792/unknown.png)
## **Default Command Cooldown**
The Default Command Cooldown is **10 seconds**.

## **Customisation**
Each Command offers customisation of the command name (Eg: **!rly**) and Command Cooldown

![alt text](https://media.discordapp.net/attachments/766155327582109716/805477323943706644/unknown.png)

1. To disable a command, leave the command name field empty
2. The Command Cooldown is to be entered in seconds

## **Made With:**
- HTML
- CSS
- JavaScript
- JSON

## **Developer Information**
This widget is made by OverAchiever.
- Discord: **OverAchiever#7428**
- [Twitch](https://www.twitch.tv/overacheiever)

**This Project is under an MIT License. License can be found [here](https://github.com/OverAcheiever/StreamElements-ChatBot-Rally/blob/main/LICENSE.md)**