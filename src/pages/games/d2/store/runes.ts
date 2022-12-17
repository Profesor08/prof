export namespace IRune {
  export type Rune = {
    id: rune;
    name: string;
    image: string;
    level: number;
    stats: Stat[];
  };

  export type Stat = {
    slots: slot[];
    attributes: string[];
  };
}

export enum rune {
  El = "El",
  Eld = "Eld",
  Tir = "Tir",
  Nef = "Nef",
  Eth = "Eth",
  Ith = "Ith",
  Tal = "Tal",
  Ral = "Ral",
  Ort = "Ort",
  Thul = "Thul",
  Amn = "Amn",
  Sol = "Sol",
  Shael = "Shael",
  Dol = "Dol",
  Hel = "Hel",
  Io = "Io",
  Lum = "Lum",
  Ko = "Ko",
  Fal = "Fal",
  Lem = "Lem",
  Pul = "Pul",
  Um = "Um",
  Mal = "Mal",
  Ist = "Ist",
  Gul = "Gul",
  Vex = "Vex",
  Ohm = "Ohm",
  Lo = "Lo",
  Sur = "Sur",
  Ber = "Ber",
  Jah = "Jah",
  Cham = "Cham",
  Zod = "Zod",
}

export enum slot {
  Weapon = "Weapon",
  Armor = "Armor",
  Helm = "Helm",
  Shield = "Shield",
}

export const runes: Map<rune, IRune.Rune> = new Map([]);

runes.set(rune.El, {
  id: rune.El,
  name: "El",
  image: `/images/games/d2/runes/${rune.El.toString().toLowerCase()}.png`,
  level: 11,
  stats: [
    {
      slots: [slot.Weapon],
      attributes: ["+50 to Attack Rating", "+1 Light Radius"],
    },
    {
      slots: [slot.Armor, slot.Helm, slot.Shield],
      attributes: ["+15 Defense", "+1 Light Radius"],
    },
  ],
});

runes.set(rune.Eld, {
  id: rune.Eld,
  name: "Eld",
  image: `/images/games/d2/runes/${rune.Eld.toString().toLowerCase()}.png`,
  level: 11,
  stats: [
    {
      slots: [slot.Weapon],
      attributes: ["+75% Damage to Undead", "+50 Attack Rating Against Undead"],
    },
    {
      slots: [slot.Armor, slot.Helm],
      attributes: ["15% Slower Stamina Drain"],
    },
    {
      slots: [slot.Shield],
      attributes: ["7% Increase Chance of Blocking"],
    },
  ],
});

runes.set(rune.Tir, {
  id: rune.Tir,
  name: "Tir",
  image: `/images/games/d2/runes/${rune.Tir.toString().toLowerCase()}.png`,
  level: 13,
  stats: [
    {
      slots: [slot.Weapon, slot.Armor, slot.Helm, slot.Shield],
      attributes: ["+2 to Mana After Each Kill"],
    },
  ],
});

runes.set(rune.Nef, {
  id: rune.Nef,
  name: "Nef",
  image: `/images/games/d2/runes/${rune.Nef.toString().toLowerCase()}.png`,
  level: 13,
  stats: [
    {
      slots: [slot.Weapon],
      attributes: ["Knockback"],
    },
    {
      slots: [slot.Armor, slot.Helm, slot.Shield],
      attributes: ["+30 Defense vs. Missile"],
    },
  ],
});

runes.set(rune.Eth, {
  id: rune.Eth,
  name: "Eth",
  image: `/images/games/d2/runes/${rune.Eth.toString().toLowerCase()}.png`,
  level: 15,
  stats: [
    {
      slots: [slot.Weapon],
      attributes: ["-25% to Target Defense"],
    },
    {
      slots: [slot.Armor, slot.Helm, slot.Shield],
      attributes: ["Regenerate Mana 15%"],
    },
  ],
});

runes.set(rune.Ith, {
  id: rune.Ith,
  name: "Ith",
  image: `/images/games/d2/runes/${rune.Ith.toString().toLowerCase()}.png`,
  level: 15,
  stats: [
    {
      slots: [slot.Weapon],
      attributes: ["+9 to Maximum Damage"],
    },
    {
      slots: [slot.Armor, slot.Helm, slot.Shield],
      attributes: ["15% Damage Taken Goes to Mana"],
    },
  ],
});

runes.set(rune.Tal, {
  id: rune.Tal,
  name: "Tal",
  image: `/images/games/d2/runes/${rune.Tal.toString().toLowerCase()}.png`,
  level: 17,
  stats: [
    {
      slots: [slot.Weapon],
      attributes: ["+75 Poison Damage Over 5 Seconds"],
    },
    {
      slots: [slot.Armor, slot.Helm],
      attributes: ["Poison Resist 30%"],
    },
    {
      slots: [slot.Shield],
      attributes: ["Poison Resust 35%"],
    },
  ],
});

runes.set(rune.Ral, {
  id: rune.Ral,
  name: "Ral",
  image: `/images/games/d2/runes/${rune.Ral.toString().toLowerCase()}.png`,
  level: 19,
  stats: [
    {
      slots: [slot.Weapon],
      attributes: ["Adds 5-30 Fire Damage"],
    },
    {
      slots: [slot.Armor, slot.Helm],
      attributes: ["Fire Resist 30%"],
    },
    {
      slots: [slot.Shield],
      attributes: ["Fire Resist 35%"],
    },
  ],
});

runes.set(rune.Ort, {
  id: rune.Ort,
  name: "Ort",
  image: `/images/games/d2/runes/${rune.Ort.toString().toLowerCase()}.png`,
  level: 21,
  stats: [
    {
      slots: [slot.Weapon],
      attributes: ["Adds 1-50 Lightning Damage"],
    },
    {
      slots: [slot.Armor, slot.Helm],
      attributes: ["Lightning Resist 30%"],
    },
    {
      slots: [slot.Shield],
      attributes: ["Lightning Resist 35%"],
    },
  ],
});

runes.set(rune.Thul, {
  id: rune.Thul,
  name: "Thul",
  image: `/images/games/d2/runes/${rune.Thul.toString().toLowerCase()}.png`,
  level: 23,
  stats: [
    {
      slots: [slot.Weapon],
      attributes: ["Adds 3-14 Cold Damage - 3 Second Duration"],
    },
    {
      slots: [slot.Armor, slot.Helm],
      attributes: ["Cold Resist 30%"],
    },
    {
      slots: [slot.Shield],
      attributes: ["Cold Resist 35%"],
    },
  ],
});

runes.set(rune.Amn, {
  id: rune.Amn,
  name: "Amn",
  image: `/images/games/d2/runes/${rune.Amn.toString().toLowerCase()}.png`,
  level: 25,
  stats: [
    {
      slots: [slot.Weapon],
      attributes: ["7% Life Stolen Per Hit"],
    },
    {
      slots: [slot.Armor, slot.Helm, slot.Shield],
      attributes: ["Attacker Takes Damage of 14"],
    },
  ],
});

runes.set(rune.Sol, {
  id: rune.Sol,
  name: "Sol",
  image: `/images/games/d2/runes/${rune.Sol.toString().toLowerCase()}.png`,
  level: 27,
  stats: [
    {
      slots: [slot.Weapon],
      attributes: ["+9 to Minimum Damage"],
    },
    {
      slots: [slot.Armor, slot.Helm, slot.Shield],
      attributes: ["Damage Reduced By 7"],
    },
  ],
});

runes.set(rune.Shael, {
  id: rune.Shael,
  name: "Shael",
  image: `/images/games/d2/runes/${rune.Shael.toString().toLowerCase()}.png`,
  level: 29,
  stats: [
    {
      slots: [slot.Weapon],
      attributes: ["20% Increased Attack Speed"],
    },
    {
      slots: [slot.Armor, slot.Helm],
      attributes: ["20% Faster Hit Recovery"],
    },
    {
      slots: [slot.Shield],
      attributes: ["20% Faster Block Rate"],
    },
  ],
});

runes.set(rune.Dol, {
  id: rune.Dol,
  name: "Dol",
  image: `/images/games/d2/runes/${rune.Dol.toString().toLowerCase()}.png`,
  level: 31,
  stats: [
    {
      slots: [slot.Weapon],
      attributes: ["Hit Causes Monster to Flee 25%"],
    },
    {
      slots: [slot.Armor, slot.Helm, slot.Shield],
      attributes: ["Replenish Life +7"],
    },
  ],
});

runes.set(rune.Hel, {
  id: rune.Hel,
  name: "Hel",
  image: `/images/games/d2/runes/${rune.Hel.toString().toLowerCase()}.png`,
  level: 0,
  stats: [
    {
      slots: [slot.Weapon],
      attributes: ["Requirements -20%"],
    },
    {
      slots: [slot.Armor, slot.Helm, slot.Shield],
      attributes: ["Requirements -15%"],
    },
  ],
});

runes.set(rune.Io, {
  id: rune.Io,
  name: "Io",
  image: `/images/games/d2/runes/${rune.Io.toString().toLowerCase()}.png`,
  level: 35,
  stats: [
    {
      slots: [slot.Weapon, slot.Armor, slot.Helm, slot.Shield],
      attributes: ["+10 to Vitality"],
    },
  ],
});

runes.set(rune.Lum, {
  id: rune.Lum,
  name: "Lum",
  image: `/images/games/d2/runes/${rune.Lum.toString().toLowerCase()}.png`,
  level: 37,
  stats: [
    {
      slots: [slot.Weapon, slot.Armor, slot.Helm, slot.Shield],
      attributes: ["+10 to Energy"],
    },
  ],
});

runes.set(rune.Ko, {
  id: rune.Ko,
  name: "Ko",
  image: `/images/games/d2/runes/${rune.Ko.toString().toLowerCase()}.png`,
  level: 39,
  stats: [
    {
      slots: [slot.Weapon, slot.Armor, slot.Helm, slot.Shield],
      attributes: ["+10 to Dexterity"],
    },
  ],
});

runes.set(rune.Fal, {
  id: rune.Fal,
  name: "Fal",
  image: `/images/games/d2/runes/${rune.Fal.toString().toLowerCase()}.png`,
  level: 41,
  stats: [
    {
      slots: [slot.Weapon, slot.Armor, slot.Helm, slot.Shield],
      attributes: ["+10 to Strength"],
    },
  ],
});

runes.set(rune.Lem, {
  id: rune.Lem,
  name: "Lem",
  image: `/images/games/d2/runes/${rune.Lem.toString().toLowerCase()}.png`,
  level: 43,
  stats: [
    {
      slots: [slot.Weapon],
      attributes: ["75% Extra Gold from Monsters"],
    },
    {
      slots: [slot.Armor, slot.Helm, slot.Shield],
      attributes: ["50% Extra Gold from Monsters"],
    },
  ],
});

runes.set(rune.Pul, {
  id: rune.Pul,
  name: "Pul",
  image: `/images/games/d2/runes/${rune.Pul.toString().toLowerCase()}.png`,
  level: 45,
  stats: [
    {
      slots: [slot.Weapon],
      attributes: [
        "+75% Damage to Demons",
        "+100 Attack Rating Against Demons",
      ],
    },
    {
      slots: [slot.Armor, slot.Helm, slot.Shield],
      attributes: ["+30% Enhanced Defense"],
    },
  ],
});

runes.set(rune.Um, {
  id: rune.Um,
  name: "Um",
  image: `/images/games/d2/runes/${rune.Um.toString().toLowerCase()}.png`,
  level: 47,
  stats: [
    {
      slots: [slot.Weapon],
      attributes: ["25% Chance of Open Wounds"],
    },
    {
      slots: [slot.Armor, slot.Helm],
      attributes: ["All Resistances +15"],
    },
    {
      slots: [slot.Shield],
      attributes: ["All Resistances +22"],
    },
  ],
});

runes.set(rune.Mal, {
  id: rune.Mal,
  name: "Mal",
  image: `/images/games/d2/runes/${rune.Mal.toString().toLowerCase()}.png`,
  level: 49,
  stats: [
    {
      slots: [slot.Weapon],
      attributes: ["Prevent Monster Heal"],
    },
    {
      slots: [slot.Armor, slot.Helm, slot.Shield],
      attributes: ["Magic Damage Reduced By 7"],
    },
  ],
});

runes.set(rune.Ist, {
  id: rune.Ist,
  name: "Ist",
  image: `/images/games/d2/runes/${rune.Ist.toString().toLowerCase()}.png`,
  level: 51,
  stats: [
    {
      slots: [slot.Weapon],
      attributes: ["30% Better Chance of Getting Magic Items"],
    },
    {
      slots: [slot.Armor, slot.Helm, slot.Shield],
      attributes: ["25% Better Chance of Getting Magic Items"],
    },
  ],
});

runes.set(rune.Gul, {
  id: rune.Gul,
  name: "Gul",
  image: `/images/games/d2/runes/${rune.Gul.toString().toLowerCase()}.png`,
  level: 53,
  stats: [
    {
      slots: [slot.Weapon],
      attributes: ["20% Bonus to Attack Rating"],
    },
    {
      slots: [slot.Armor, slot.Helm, slot.Shield],
      attributes: ["5% to Maximum Poison Resist"],
    },
  ],
});

runes.set(rune.Vex, {
  id: rune.Vex,
  name: "Vex",
  image: `/images/games/d2/runes/${rune.Vex.toString().toLowerCase()}.png`,
  level: 55,
  stats: [
    {
      slots: [slot.Weapon],
      attributes: ["7% Mana Stolen Per Hit"],
    },
    {
      slots: [slot.Armor, slot.Helm, slot.Shield],
      attributes: ["5% to Maximum Fire Resist"],
    },
  ],
});

runes.set(rune.Ohm, {
  id: rune.Ohm,
  name: "Ohm",
  image: `/images/games/d2/runes/${rune.Ohm.toString().toLowerCase()}.png`,
  level: 57,
  stats: [
    {
      slots: [slot.Weapon],
      attributes: ["+50% Enhanced Damage"],
    },
    {
      slots: [slot.Armor, slot.Helm, slot.Shield],
      attributes: ["5% to Maximum Cold Resist"],
    },
  ],
});

runes.set(rune.Lo, {
  id: rune.Lo,
  name: "Lo",
  image: `/images/games/d2/runes/${rune.Lo.toString().toLowerCase()}.png`,
  level: 59,
  stats: [
    {
      slots: [slot.Weapon],
      attributes: ["+20% Deadly Strike"],
    },
    {
      slots: [slot.Armor, slot.Helm, slot.Shield],
      attributes: ["5% to Maximum Lightning Resist"],
    },
  ],
});

runes.set(rune.Sur, {
  id: rune.Sur,
  name: "Sur",
  image: `/images/games/d2/runes/${rune.Sur.toString().toLowerCase()}.png`,
  level: 61,
  stats: [
    {
      slots: [slot.Weapon],
      attributes: ["Hit Blinds Target"],
    },
    {
      slots: [slot.Armor, slot.Helm],
      attributes: ["Maximum Mana 5%"],
    },
    {
      slots: [slot.Shield],
      attributes: ["+50 to Mana"],
    },
  ],
});

runes.set(rune.Ber, {
  id: rune.Ber,
  name: "Ber",
  image: `/images/games/d2/runes/${rune.Ber.toString().toLowerCase()}.png`,
  level: 63,
  stats: [
    {
      slots: [slot.Weapon],
      attributes: ["20% Chance of Crushing Blow"],
    },
    {
      slots: [slot.Armor, slot.Helm, slot.Shield],
      attributes: ["Damage Reduced by 8%"],
    },
  ],
});

runes.set(rune.Jah, {
  id: rune.Jah,
  name: "Jah",
  image: `/images/games/d2/runes/${rune.Jah.toString().toLowerCase()}.png`,
  level: 65,
  stats: [
    {
      slots: [slot.Weapon],
      attributes: ["Ignore Target's Defense"],
    },
    {
      slots: [slot.Armor, slot.Helm],
      attributes: ["Increase Maximum Life 5%"],
    },
    {
      slots: [slot.Shield],
      attributes: ["+50 Life"],
    },
  ],
});

runes.set(rune.Cham, {
  id: rune.Cham,
  name: "Cham",
  image: `/images/games/d2/runes/${rune.Cham.toString().toLowerCase()}.png`,
  level: 67,
  stats: [
    {
      slots: [slot.Weapon],
      attributes: ["Freeze Target +3"],
    },
    {
      slots: [slot.Armor, slot.Helm, slot.Shield],
      attributes: ["Cannot Be Frozen"],
    },
  ],
});

runes.set(rune.Zod, {
  id: rune.Zod,
  name: "Zod",
  image: `/images/games/d2/runes/${rune.Zod.toString().toLowerCase()}.png`,
  level: 69,
  stats: [
    {
      slots: [slot.Weapon, slot.Armor, slot.Helm, slot.Shield],
      attributes: ["Indestructible"],
    },
  ],
});
