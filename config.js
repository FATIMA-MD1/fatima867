// config.js - ESM Version
import dotenv from 'dotenv';
dotenv.config();

const config = {
    // MongoDB Configuration (only this is from process.env)
    MONGODB_URL: process.env.MONGODB_URL || 'mongodb+srv://drkamran1871_db_user:Dtslcg7owxFWplMe@cluster0.3i7nncp.mongodb.net/?appName=Cluster0',
    
    // Fixed Database Name
    DB_NAME: process.env.DB_NAME || 'fatimamd',
    
    // Collections Configuration
    COLLECTIONS: {
        SESSIONS: 'whatsapp_sessions',
        NUMBERS: 'active_numbers',
        CONFIGS: 'bot_configs'
    },
    
    // Bot Configuration
    AUTO_VIEW_STATUS: 'true',
    AUTO_LIKE_STATUS: 'false',  // ADDED - Auto like status messages
    MENTION_REPLY: 'true',
    AUTO_RECORDING: 'false',
    AUTO_REACT: 'false',
    AUTO_TYPING: 'false',
    ALWAYS_ONLINE: 'false',
    VERSION: '12.0.0 Pʀᴇᴍɪᴜᴍ',
    DESCRIPTION: '*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ 👑 ꜰᴀᴛɪᴍᴀ-ᴍᴅ*',
    ANTI_DELETE_PATH: 'inbox',
    ANTI_DELETE: 'false',
    ANTI_STATUS: 'warn',
    ANTIEDIT_PATH: 'inbox',
    ANTI_EDIT: 'false',
    STICKER_NAME: 'ꜰᴀᴛɪᴍᴀ-ᴍᴅ ⚡',
    ANTI_LINK: 'true',
    WELCOME: 'false',
    GOODBYE: 'false',
    WELCOME_MESSAGE: '╔═════════════════════════╗\n║  ⚡ *ꜰᴀᴛɪᴍᴀ-ᴍᴅ ᴀᴄᴛɪᴠᴀᴛᴇᴅ* ⚡ \n╚═════════════════════════╝\n\n👋 Welcome @user to the matrix!\n\n> 🚀 *Type* `.menu` *for system commands*\n> 💎 *Status: Secure & Online*\n\n*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ꜰᴀᴛɪᴍᴀ-ᴍᴅ*',
    GOODBYE_MESSAGE: '╔═════════════════════════╗\n║  ⚠️ *ᴜꜱᴇʀ ᴅɪꜱᴄᴏɴɴᴇᴄᴛᴇᴅ* ⚠️ \n╚═════════════════════════╝\n\n👋 Goodbye @user!\n\n> 🥀 *Session terminated from the group.*\n\n*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ꜰᴀᴛɪᴍᴀ-ᴍᴅ*',
    ADMIN_ACTION: 'false',
    MODE: 'public',
    PREFIX: '.',
    ANTI_CALL: 'false',
    REJECT_MSG: '*[ 📵 ꜱᴇᴄᴜʀɪᴛʏ ᴀʟᴇʀᴛ ] Call Rejected Automatically!*',
    READ_MESSAGE: 'false',
    AUTO_STATUS_SEEN: 'true',
    OWNER_REACT: 'false',
    OWNER_EMOJIS: ['❤️', '🔥', '👑', '⭐', '💎'],
    REACT_EMOJIS: ['😂', '❤️', '🔥', '👏', '😮', '😢', '🤣', '👍', '🎉', '🤔', '🙏', '😍', '😊', '🥰', '💕', '🤩', '✨', '😎', '🥳', '🙌'],
    LIKE_EMOJIS: ['❤️', '👍', '😮', '😎', '💀'],  // ADDED - Emojis for auto like status
    
    // Bot Identity
    BOT_NAME: 'ꜰᴀᴛɪᴍᴀ-ᴍᴅ',
    OWNER_NAME: 'ꜰᴀᴛɪᴍᴀ-ᴍᴅ',
    OWNER_NUMBER: '923155641171',
    DEV: '923155641171',
    IK_IMAGE_PATH: './lib/fatimamd.jpg',
    BOT_IMAGE: 'https://i.ibb.co/p6PrJbBG/798316408-3323282417844570-7439630843634819579-n.jpg',
    
    // Newsletter Configuration
    NEWSLETTER_JID: '120363412031212190@newsletter',
    NEWSLETTER_MESSAGE_ID: '428',  
    
    // System Configuration
    MAX_RETRIES: 3,
    OTP_EXPIRY: 300000,
    CHANNEL_LINK: 'https://whatsapp.com/channel/0029Vb8cHA9JP20wc9X8wt0I',
    BANNED: [],
    SUDO: ["923155641171@s.whatsapp.net"],
    
    // Default Settings Template
    DEFAULT_SETTINGS: {
        // Status & View Settings
        AUTO_VIEW_STATUS: 'true',
        AUTO_LIKE_STATUS: 'false',  // ADDED - Auto like status (disabled by default)
        MENTION_REPLY: 'true',
        AUTO_STATUS_SEEN: 'true',
        READ_MESSAGE: 'false',
        
        // Auto Actions
        AUTO_RECORDING: 'false',
        AUTO_REACT: 'false',
        AUTO_TYPING: 'false',
        ALWAYS_ONLINE: 'false',
        OWNER_REACT: 'false',
        
        // Anti Features
        ANTI_DELETE: 'false',
        ANTI_STATUS: 'warn',
        ANTI_DELETE_PATH: 'inbox',
        ANTI_EDIT: 'false',
        ANTIEDIT_PATH: 'inbox',
        ANTI_CALL: 'false',
        ANTI_LINK: 'warn',
        
        // Group Events
        WELCOME: 'false',
        GOODBYE: 'false',
        ADMIN_ACTION: 'false',
        
        // Message Templates
        WELCOME_MESSAGE: '╔═════════════════════════╗\n║  ⚡ *ꜰᴀᴛɪᴍᴀ-ᴍᴅ ᴀᴄᴛɪᴠᴀᴛᴇᴅ* ⚡ \n╚═════════════════════════╝\n\n👋 Welcome @user to the matrix!\n\n> 🚀 *Type* `.menu` *for system commands*\n> 💎 *Status: Secure & Online*\n\n*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ꜰᴀᴛɪᴍᴀ-ᴍᴅ*',
        GOODBYE_MESSAGE: '╔═════════════════════════╗\n║  ⚠️ *ᴜꜱᴇʀ ᴅɪꜱᴄᴏɴɴᴇᴄᴛᴇᴅ* ⚠️ \n╚═════════════════════════╝\n\n👋 Goodbye @user!\n\n> 🥀 *Session terminated from the group.*\n\n*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ꜰᴀᴛɪᴍᴀ-ᴍᴅ*',
        REJECT_MSG: '*[ 📵 ꜱᴇᴄᴜʀɪᴛʏ ᴀʟᴇʀᴛ ] Call Rejected Automatically!*',
        
        // Bot Identity
        VERSION: '12.0.0 Pʀᴇᴍɪᴜᴍ',
        OWNER_NAME: 'ꜰᴀᴛɪᴍᴀ-ᴍᴅ',
        OWNER_NUMBER: '923155641171',
        DEV: '923155641171',
        DESCRIPTION: '*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ 👑 ꜰᴀᴛɪᴍᴀ-ᴍᴅ*',
        STICKER_NAME: 'ꜰᴀᴛɪᴍᴀ-ᴍᴅ ⚡',
        MODE: 'public',
        PREFIX: '.',
        BOT_NAME: 'ꜰᴀᴛɪᴍᴀ-ᴍᴅ',
        BOT_IMAGE: 'https://i.ibb.co/p6PrJbBG/798316408-3323282417844570-7439630843634819579-n.jpg',
        
        REACT_EMOJIS: ['😂', '❤️', '🔥', '👏', '😮', '😢', '🤣', '👍', '🎉', '🤔', '🙏', '😍', '😊', '🥰', '💕', '🤩', '✨', '😎', '🥳', '🙌'],
        OWNER_EMOJIS: ['❤️', '🔥', '👑', '⭐', '💎'],
        LIKE_EMOJIS: ['❤️', '👍', '😮', '😎', '💀'],  // ADDED - Emojis for auto like
        
        // Lists
        BANNED: [],
        SUDO: ["923155641171@s.whatsapp.net"]
    }
};

export default config;
