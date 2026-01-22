const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    // Session & Auth
    SESSION_ID: process.env.SESSION_ID || "Silva~H4sIAAAAAAAAA5VUXZOiOBT9L3nFGkH5UKu6aiEqIK2CCohb+xAhQBQBSRRhyv++Rff09Dzszva+5ePmnnPPPTffQV4Qii3cgMl3UFbkjhjulqwpMZgA7RbHuAI9ECGGwAToEF845+pNh5qzFHFr5q05EsdnYYbPm9RRQn9j2TC9IF98Ac8eKG/HjIS/ScgZ61lpZOM8ccbpos8tTE/RkF5Gp3g01xlf3yLPTEI93PAv4NllRKQieTIrU3zBFcos3NiIVF+jf5uXkDrBdPW6SWdSvCVrUd1BbhHIpR3A+izJLvNXnunxztfonzZzO93Ck26brmSt6H74ON4TXl/Z8wHJYB82fRr79S46Ld/pU5LkODIjnDPCmi/rztkVCytXMPJYdhURzjW4yPtwe1hLr5zed7N2bgnXkhsP3K8Rz4qDemYQLi5nfA8fK44mSbK6LoMZ4sfX5Ii1lCHB3C3d+lfidvXhlfP/0X1tbQLD9+Cutcv04Fsn6zz0oBAOtgfucTQLlbOkvp7tpvPZ1+gztxRWSjkm8wGjbd0qcVo3lZVxJbtyzi6++YvahUFWqPSTPmK36rci95O74e3Dg1TFBzNmQtR6gS1dR7yZxavdfIMOS/TaJlT3FYgll59qZOkE9jrdSpIeJw+SF9PgpIXBQoxV2wzJ9Arrl7eKzrgxIzARnj1Q4YRQViFGivztTJF6AEX3LQ4rzN7kBZaQz41YLSNj1TTr7G4kmDWr3G+PxzXuEzqEc/8UuOdj7ryAHiirIsSU4sgglBVVs8SUogRTMPnzrx7I8YO9N66DGwo9EJOKMje/lVmBoo+uflyiMCxuOds2eQi7Ba7AhP88xoyRPKGdjrccVWFK7himiFEwiVFG8c8KcYWjH2c/X3evIswQySiYAPgK4WChwpll648R1XUtTFSYqOAT7aNt77LY16JdmrVUzjNpYDWz46u5Ka7q+kiEbaM54bIN+qVcHODl/PIPScAELIKrvJhFirlfneeuSrPsRtaj2dbwKj7Q9fHROPKNL+39tZf0ycPz2HAv+1AdzYbtZohaW0Rk8JDXm6mx5kakLrLcmKovHVqE7yTEv4LxY7V2wpYsLW7glUnE1FP4EM63oXMPo4GxdM28uTrK/lUTIkc7ndSTND2lKy8M67y6itFsXxuCJPlOUJyO+/JS8R7VkndDXd6cTCIwAWNRkXmRlwR+MJGHf9BvddcOVJbfcsxAD2RvUYKkyGNxMFKUgaiM5S6yu/iYjezHn0TeXNNl7rYxwW8jnqMO7z+R3iXojMQ/e7+k+PFn/MvcaTv5umzhco02BxwRmupNM0NWMr2IzKWJa0yXA1vGV90pS/B8/tUDZYZYXFQXMAEoj6qCRKAHquLWOdPM4+I3YFA1Tc1JVl3hGaJM/XT7jlwwZehSdjMpj3lFEHnpPcquitJANO086J8lDTz/BvAJOjo6BwAA", 
    
    // Bot Configuration
    PREFIX: process.env.PREFIX || ".",
    BOT_NAME: process.env.BOT_NAME || "✦ Silva ✦ Spark ✦ MD ✦",
    OWNER_NUMBER: process.env.OWNER_NUMBER || "254743706010",
    OWNER_NAME: process.env.OWNER_NAME || "✦ Silva ✦ Spark ✦ MD ✦",
    DESCRIPTION: process.env.DESCRIPTION || "*© ✦ Silva ✦ Spark ✦ MD ✦*",
    
    // Alive Message
    ALIVE_IMG: process.env.ALIVE_IMG || "https://i.ibb.co/BVt9McxS/photo-2025-06-15-12-14-29-7516148628621099032.jpg",
    LIVE_MSG: process.env.LIVE_MSG || "> SILVA SPARK IS SPARKING ACTIVE AND ALIVE\n\n\nKEEP USING SILVA SPARK FROM SILVA TECH INC⚡",
    
    // Mode Settings
    MODE: process.env.MODE || "public", // public, private, inbox, groups
    PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
    ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "true",
    
    // Message Features
    READ_MESSAGE: process.env.READ_MESSAGE || "true",
    AUTO_TYPING: process.env.AUTO_TYPING || "false",
    AUTO_RECORDING: process.env.AUTO_RECORDING || "true",
    AUTO_VOICE: process.env.AUTO_VOICE || "true",
    AUTO_STICKER: process.env.AUTO_STICKER || "true",
    AUTO_REPLY: process.env.AUTO_REPLY || "false",
    
    // Reaction Settings
    AUTO_REACT: process.env.AUTO_REACT || "true",
    HEART_REACT: process.env.HEART_REACT || "false",
    CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
    CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🔥,❤️‍🩹,❤️,🩷,🧡,💛,💚,💙,🩵,💜,🤎,🖤,🤍",
    
    // Status Features
    AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
    AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
    AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
    AUTO_STATUS__MSG: process.env.AUTO_STATUS__MSG || "*🎉👀 Seen by Silva Spark MD 🚀🔥*",
    
    // Anti Features
    ANTI_LINK: process.env.ANTI_LINK || "false",
    ANTI_BAD: process.env.ANTI_BAD || "false",
    ANTI_BAD_WORD: process.env.ANTI_BAD_WORD || process.env.ANTI_BAD || "false", // Alias for ANTI_BAD
    ANTI_DELETE: process.env.ANTI_DELETE || "true",
    ANTI_VV: process.env.ANTI_VV || "true", // Anti View-Once
    DELETE_LINKS: process.env.DELETE_LINKS || "false",
    
    // Anti-Delete Settings
    ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "log", // 'log' or 'same'
};
