const roles = {
     '*NOVICE(A) V* 🪤': 0,
      '*NOVICE(A) IV* 🪤': 1,
       '*NOVICE(A) III* 🪤': 2,
        '*NOVICE(A) II* 🪤': 3,
         '*NOVICE(A) I* 🪤': 4,
     '*LEARN V* 🪚': 5,
      '*LEARNING IV* 🪚': 6,
       '*APRENDIS III* 🪚': 7,
        '*APRENDIS II* 🪚': 8,
        '*LEARN I* 🪚': 9,
     '*EXPLORER(A) V* 🪓': 10,
      '*EXPLORER(A) IV* 🪓': 11,
       '*EXPLORER(A) III* 🪓': 12,
        '*EXPLORER(A) II* 🪓': 13,
         '*EXPLORER(A) I* 🪓': 14,
     '*TEACHER(A) V* ⚒️': 15,
      '*MASTER(A) IV* ⚒️': 16,
       '*TEACHER(A) III* ⚒️': 17,
        '*TEACHER(A) II* ⚒️': 18,
         '*TEACHER(A) I* ⚒️': 19,
     '*IRON V* 🦾': 20,
      '*IRON IV* 🦾': 21,
       '*IRON III* 🦾': 22,
        '*IRON II* 🦾': 23,
         '*IRON I* 🦾': 24,
     '*SILVER V* 🔮': 25,
      '*SILVER IV* 🔮': 26,
       '*SILVER III* 🔮': 27,
        '*SILVER II* 🔮': 28,
         '*SILVER I* 🔮': 29,
     '*GOLD V* 🏅': 30,
      '*GOLD IV* 🏅': 31,
       '*GOLD III* 🏅': 32,
        '*GOLD II* 🏅': 33,
         '*GOLD I* 🏅': 34,
     '*DIAMOND V* 💎': 35,
      '*DIAMOND IV* 💎': 36,
       '*DIAMOND III* 💎': 37,
        '*DIAMOND II* 💎': 38,
         '*DIAMOND I* 💎': 39,
     '*PRO IN GATABOT V* 😼': 40,
      '*PRO IN GATABOT IV* 😼': 41,
       '*PRO IN GATABOT III* 😼': 42,
        '*PRO IN GATABOT II* 😼': 43,
         '*PRO IN GATABOT I* 😼': 44,
     '*SUPER PRO V* 🎩': 45,
      '*SUPER PRO IV* 🎩': 46,
       '*SUPER PRO III* 🎩': 47,
        '*SUPER PRO II* 🎩': 48,
         '*SUPER PRO I* 🎩': 49,
     '*LEGENDARY(A) V* 🛡️': 50,
      '*LEGENDARY(A) IV* 🛡️': 51,
       '*LEGENDARY(A) III* 🛡️': 52,
        '*LEGENDARY(A) II* 🛡️': 53,
         '*LEGENDARY(A) I* 🛡️': 54,
     '*LEGEND V* 🏆': 55,
      '*LEGEND IV* 🏆': 56,
       '*LEGEND III* 🏆': 57,
        '*LEGEND II* 🏆': 58,
        '*LEGEND I* 🏆': 59,
     '*STAR V* ☄️': 60,
      '*STAR IV* ☄️': 61,
       '*STAR III* ☄️': 62,
        '*STAR II* ☄️': 63,
         '*STAR I* ☄️': 64,
     '*TOP ASTRAL V* ⚜️🔱': 65,
      '*TOP ASTRAL IV* ⚜️🔱': 66,
       '*TOP ASTRAL III* ⚜️🔱': 67,
        '*TOP ASTRAL II* ⚜️🔱': 68,
         '*TOP ASTRAL I* ⚜️🔱': 69,
     '👑 *GLOBAL ELITE V* 🏁': 70,
      '👑 *GLOBAL ELITE IV* 🏁': 75,
       '👑 *GLOBAL ELITE III* 🏁': 80,
        '👑 *GLOBAL ELITE II* 🏁': 85,
         '👑 *GLOBAL ELITE I* 🏁': 90,
     '👑 *∞ GLOBAL ELITE V* 💎🏁': 100,
      '👑 *∞ GLOBAL ELITE IV* 💎🏁': 140,
     '👑 *∞ GLOBAL ELITE III* 💎🏁': 180,
     '👑 *∞ GLOBAL ELITE II* 💎🏁': 250,
     '👑 *∞ GLOBAL ELITE I* 💎🏁': 300
}

export function before(m) {
let user = db.data.users[m.sender]
let level = user.level
let role = (Object.entries(roles).sort((a, b) => b[1] - a[1]).find(([, minLevel]) => level >= minLevel) || Object. entries(roles)[0])[0]
user.role = role
return !0
}