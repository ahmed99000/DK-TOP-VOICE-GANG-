const axios = require("axios");
module.exports.config = {
  name: "bot",
  version: "1.0.1",
  permission: 0,
  prefix: false,
  credits: "ROBIUL",
  description: "Chatbot with GitHub JSON replies",
  category: "fun",
  usages: "bot [question]",
  cooldowns: 5,
};

module.exports.run = async function ({ api, event, args, Users }) {
  const name = await Users.getNameUser(event.senderID);
  const prompt = args.join(" ").trim().toLowerCase();
  const fallbackReplies = [  " বেশি bot Bot করলে leave নিবো কিন্তু😒😒 " ,
 "শুনবো না😼তুমি আমাকে প্রেম করাই দাও নাই🥺পচা তুমি🥺" ,
 "আমি আবাল দের সাথে কথা বলি না,ok😒" ,
 "এতো ডেকো না,প্রেম এ পরে যাবো তো🙈" ,
 "Bolo Babu, তুমি কি আমাকে ভালোবাসো? 🙈💋 " , 
"বার বার ডাকলে মাথা গরম হয়ে যায় কিন্তু😑", 
"হ্যা বলো😒, তোমার জন্য কি করতে পারি😐😑?" , 
"এতো ডাকছিস কেন?গালি শুনবি নাকি? 🤬" ,
 "I love you janu🥰" , 
"আরে Bolo আমার জান ,কেমন আছো?😚 " , 
"Bot বলে অসম্মান করছি,😰😿" , 
"Hop beda😾,Boss বল boss😼" ,
 "চুপ থাক ,নাই তো তোর দাত ভেগে দিবো কিন্তু" ,
 "Bot না , জানু বল জানু 😘 " , 
"বার বার Disturb করছিস কোনো😾,আমার জানুর সাথে ব্যাস্ত আছি😋" , 
"বোকাচোদা এতো ডাকিস কেন🤬" ,
 "আমাকে ডাকলে ,আমি কিন্তু কিস করে দিবো😘 " ,
 "আমারে এতো ডাকিস না আমি মজা করার mood এ নাই এখন😒" , 
"হ্যাঁ জানু , এইদিক এ আসো কিস দেই🤭 😘" ,
 "দূরে যা, তোর কোনো কাজ নাই, শুধু bot bot করিস  😉😋🤣" , 
"তোর কথা তোর বাড়ি কেউ শুনে না ,তো আমি কোনো শুনবো ?🤔😂 " , 
"আমাকে ডেকো না,আমি ব্যাস্ত আছি" , 
"কি হলো , মিস্টেক করচ্ছিস নাকি🤣" , 
"বলো কি বলবা, সবার সামনে বলবা নাকি?🤭🤏" , 
"কালকে দেখা করিস তো একটু 😈" , 
"হা বলো, শুনছি আমি 😏" , 
"আর কত বার ডাকবি ,শুনছি তো" ,
 "হুম বলো কি বলবে😒" , 
"বলো কি করতে পারি তোমার জন্য" ,
 "আমি তো অন্ধ কিছু দেখি না🐸 😎" , 
"Bot না জানু,বল 😌" , "বলো জানু 🌚" ,
 "তোর কি চোখে পড়ে না আমি ব্যাস্ত আছি😒",
"হুম জান তোমার ওই খানে উম্মহ😑😘" ,
 "আহ শুনা আমার তোমার অলিতে গলিতে উম্মাহ😇😘" ,
 " jang hanga korba😒😬" , 
"হুম জান তোমার অইখানে উম্মমাহ😷😘" , 
"আসসালামু আলাইকুম বলেন আপনার জন্য কি করতে পারি..!🥰" ,
 "আমাকে এতো না ডেকে বস শান্ত   কে একটা গার্লফ্রেন্ড দে 🙄" ,
 "আমাকে এতো না ডেকছ কেন ভলো টালো বাসো নাকি🤭🙈" ,
 "🌻🌺💚-আসসালামু আলাইকুম ওয়া রাহমাতুল্লাহ-💚🌺🌻",
"আমি এখন বস শান্ত  এর সাথে বিজি আছি আমাকে ডাকবেন না-😕😏 ধন্যবাদ-🤝🌻",
"আমাকে না ডেকে আমার বস শান্ত  কে একটা জি এফ দাও-😽🫶🌺",
"ঝাং থুমালে আইলাপিউ পেপি-💝😽",
"উফফ বুঝলাম না এতো ডাকছেন কেনো-😤😡😈",
"জান তোমার নানি'রে আমার হাতে তুলে দিবা-🙊🙆‍♂",
"আজকে আমার মন ভালো নেই তাই আমারে ডাকবেন না-😪🤧",
"ঝাং 🫵থুমালে য়ামি রাইতে পালুপাসি উম্মম্মাহ-🌺🤤💦",
"চুনা ও চুনা আমার বস শান্ত  এর হবু বউ রে কেও দেকছো খুজে পাচ্ছি না😪🤧😭",
"স্বপ্ন তোমারে নিয়ে দেখতে চাই তুমি যদি আমার হয়ে থেকে যাও-💝🌺🌻",
"জান হাঙ্গা করবা-🙊😝🌻",
"জান মেয়ে হলে চিপায় আসো ইউটিউব থেকে অনেক ভালোবাসা শিখছি তোমার জন্য-🙊🙈😽",
    "Hi, 🤖 i can help you~~~~"
  ];
  // ➤ ইউজার কিছু না লিখলে
  if (!prompt) {
    const rand = fallbackReplies[Math.floor(Math.random() * fallbackReplies.length)];
    return api.sendMessage(
      `╭────────────❍\n╰➤ 👤 ${name},\n╰➤ 🗣️ ${rand}\n╰─────────────────➤`,
      event.threadID,
      event.messageID
    );
  }
  // ➤ ইউজার প্রশ্ন দিলে — JSON থেকে match করো
  try {
    const res = await axios.get(`https://raw.githubusercontent.com/JUBAED-AHMED-JOY/Joy/main/text.json`);
    const dataset = res.data.data;
    // প্রশ্ন match করো (exact match, lower case)
    const match = dataset.find(item => item.ask.toLowerCase() === prompt);
    if (match) {
      return api.sendMessage(match.reply, event.threadID, event.messageID);
    } else {
      return api.sendMessage("🤖 আমি এটা শিখিনি!", event.threadID, event.messageID);
    }

  } catch (err) {
    console.error("❌ Bot API Error:", err.message);
    const rand = fallbackReplies[Math.floor(Math.random() * fallbackReplies.length)];
    return api.sendMessage(`🤖 ${rand}`, event.threadID, event.messageID);
  }
};
