import { Slot } from "./types";

export enum Rune {
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

export type IRune = {
  id: Rune;
  name: string;
  image: string;
  level: number;
  stats: IRuneStat[];
};

export type IRuneStat = {
  slots: Slot[];
  attributes: string[];
};

type IRunesList = {
  [key in Rune]: IRune;
};

// @ts-ignore
export const runes: IRunesList = {};

runes[Rune.El] = {
  id: Rune.El,
  name: "El",
  image: `/images/games/d2/runes/${Rune.El.toString().toLowerCase()}.png`,
  level: 11,
  stats: [
    {
      slots: [Slot.Weapon],
      attributes: ["+50 to Attack Rating", "+1 Light Radius"],
    },
    {
      slots: [Slot.Armor, Slot.Helm, Slot.Shield],
      attributes: ["+15 Defense", "+1 Light Radius"],
    },
  ],
};

runes[Rune.Eld] = {
  id: Rune.Eld,
  name: "Eld",
  image: `/images/games/d2/runes/${Rune.Eld.toString().toLowerCase()}.png`,
  level: 11,
  stats: [
    {
      slots: [Slot.Weapon],
      attributes: ["+75% Damage to Undead", "+50 Attack Rating Against Undead"],
    },
    {
      slots: [Slot.Armor, Slot.Helm],
      attributes: ["15% Slower Stamina Drain"],
    },
    {
      slots: [Slot.Shield],
      attributes: ["7% Increase Chance of Blocking"],
    },
  ],
};

runes[Rune.Tir] = {
  id: Rune.Tir,
  name: "Tir",
  image: `/images/games/d2/runes/${Rune.Tir.toString().toLowerCase()}.png`,
  level: 13,
  stats: [
    {
      slots: [Slot.Weapon, Slot.Armor, Slot.Helm, Slot.Shield],
      attributes: ["+2 to Mana After Each Kill"],
    },
  ],
};

runes[Rune.Nef] = {
  id: Rune.Nef,
  name: "Nef",
  image: `/images/games/d2/runes/${Rune.Nef.toString().toLowerCase()}.png`,
  level: 13,
  stats: [
    {
      slots: [Slot.Weapon],
      attributes: ["Knockback"],
    },
    {
      slots: [Slot.Armor, Slot.Helm, Slot.Shield],
      attributes: ["+30 Defense vs. Missile"],
    },
  ],
};

runes[Rune.Eth] = {
  id: Rune.Eth,
  name: "Eth",
  image: `/images/games/d2/runes/${Rune.Eth.toString().toLowerCase()}.png`,
  level: 15,
  stats: [
    {
      slots: [Slot.Weapon],
      attributes: ["-25% to Target Defense"],
    },
    {
      slots: [Slot.Armor, Slot.Helm, Slot.Shield],
      attributes: ["Regenerate Mana 15%"],
    },
  ],
};

runes[Rune.Ith] = {
  id: Rune.Ith,
  name: "Ith",
  image: `/images/games/d2/runes/${Rune.Ith.toString().toLowerCase()}.png`,
  level: 15,
  stats: [
    {
      slots: [Slot.Weapon],
      attributes: ["+9 to Maximum Damage"],
    },
    {
      slots: [Slot.Armor, Slot.Helm, Slot.Shield],
      attributes: ["15% Damage Taken Goes to Mana"],
    },
  ],
};

runes[Rune.Tal] = {
  id: Rune.Tal,
  name: "Tal",
  image: `/images/games/d2/runes/${Rune.Tal.toString().toLowerCase()}.png`,
  level: 17,
  stats: [
    {
      slots: [Slot.Weapon],
      attributes: ["+75 Poison Damage Over 5 Seconds"],
    },
    {
      slots: [Slot.Armor, Slot.Helm],
      attributes: ["Poison Resist 30%"],
    },
    {
      slots: [Slot.Shield],
      attributes: ["Poison Resust 35%"],
    },
  ],
};

runes[Rune.Ral] = {
  id: Rune.Ral,
  name: "Ral",
  image: `/images/games/d2/runes/${Rune.Ral.toString().toLowerCase()}.png`,
  level: 19,
  stats: [
    {
      slots: [Slot.Weapon],
      attributes: ["Adds 5-30 Fire Damage"],
    },
    {
      slots: [Slot.Armor, Slot.Helm],
      attributes: ["Fire Resist 30%"],
    },
    {
      slots: [Slot.Shield],
      attributes: ["Fire Resist 35%"],
    },
  ],
};

runes[Rune.Ort] = {
  id: Rune.Ort,
  name: "Ort",
  image: `/images/games/d2/runes/${Rune.Ort.toString().toLowerCase()}.png`,
  level: 21,
  stats: [
    {
      slots: [Slot.Weapon],
      attributes: ["Adds 1-50 Lightning Damage"],
    },
    {
      slots: [Slot.Armor, Slot.Helm],
      attributes: ["Lightning Resist 30%"],
    },
    {
      slots: [Slot.Shield],
      attributes: ["Lightning Resist 35%"],
    },
  ],
};

runes[Rune.Thul] = {
  id: Rune.Thul,
  name: "Thul",
  image: `/images/games/d2/runes/${Rune.Thul.toString().toLowerCase()}.png`,
  level: 23,
  stats: [
    {
      slots: [Slot.Weapon],
      attributes: ["Adds 3-14 Cold Damage - 3 Second Duration"],
    },
    {
      slots: [Slot.Armor, Slot.Helm],
      attributes: ["Cold Resist 30%"],
    },
    {
      slots: [Slot.Shield],
      attributes: ["Cold Resist 35%"],
    },
  ],
};

runes[Rune.Amn] = {
  id: Rune.Amn,
  name: "Amn",
  image: `/images/games/d2/runes/${Rune.Amn.toString().toLowerCase()}.png`,
  level: 25,
  stats: [
    {
      slots: [Slot.Weapon],
      attributes: ["7% Life Stolen Per Hit"],
    },
    {
      slots: [Slot.Armor, Slot.Helm, Slot.Shield],
      attributes: ["Attacker Takes Damage of 14"],
    },
  ],
};

runes[Rune.Sol] = {
  id: Rune.Sol,
  name: "Sol",
  image: `/images/games/d2/runes/${Rune.Sol.toString().toLowerCase()}.png`,
  level: 27,
  stats: [
    {
      slots: [Slot.Weapon],
      attributes: ["+9 to Minimum Damage"],
    },
    {
      slots: [Slot.Armor, Slot.Helm, Slot.Shield],
      attributes: ["Damage Reduced By 7"],
    },
  ],
};

runes[Rune.Shael] = {
  id: Rune.Shael,
  name: "Shael",
  image: `/images/games/d2/runes/${Rune.Shael.toString().toLowerCase()}.png`,
  level: 29,
  stats: [
    {
      slots: [Slot.Weapon],
      attributes: ["20% Increased Attack Speed"],
    },
    {
      slots: [Slot.Armor, Slot.Helm],
      attributes: ["20% Faster Hit Recovery"],
    },
    {
      slots: [Slot.Shield],
      attributes: ["20% Faster Block Rate"],
    },
  ],
};

runes[Rune.Dol] = {
  id: Rune.Dol,
  name: "Dol",
  image: `/images/games/d2/runes/${Rune.Dol.toString().toLowerCase()}.png`,
  level: 31,
  stats: [
    {
      slots: [Slot.Weapon],
      attributes: ["Hit Causes Monster to Flee 25%"],
    },
    {
      slots: [Slot.Armor, Slot.Helm, Slot.Shield],
      attributes: ["Replenish Life +7"],
    },
  ],
};

runes[Rune.Hel] = {
  id: Rune.Hel,
  name: "Hel",
  image: `/images/games/d2/runes/${Rune.Hel.toString().toLowerCase()}.png`,
  level: 0,
  stats: [
    {
      slots: [Slot.Weapon],
      attributes: ["Requirements -20%"],
    },
    {
      slots: [Slot.Armor, Slot.Helm, Slot.Shield],
      attributes: ["Requirements -15%"],
    },
  ],
};

runes[Rune.Io] = {
  id: Rune.Io,
  name: "Io",
  image: `/images/games/d2/runes/${Rune.Io.toString().toLowerCase()}.png`,
  level: 35,
  stats: [
    {
      slots: [Slot.Weapon, Slot.Armor, Slot.Helm, Slot.Shield],
      attributes: ["+10 to Vitality"],
    },
  ],
};

runes[Rune.Lum] = {
  id: Rune.Lum,
  name: "Lum",
  image: `/images/games/d2/runes/${Rune.Lum.toString().toLowerCase()}.png`,
  level: 37,
  stats: [
    {
      slots: [Slot.Weapon, Slot.Armor, Slot.Helm, Slot.Shield],
      attributes: ["+10 to Energy"],
    },
  ],
};

runes[Rune.Ko] = {
  id: Rune.Ko,
  name: "Ko",
  image: `/images/games/d2/runes/${Rune.Ko.toString().toLowerCase()}.png`,
  level: 39,
  stats: [
    {
      slots: [Slot.Weapon, Slot.Armor, Slot.Helm, Slot.Shield],
      attributes: ["+10 to Dexterity"],
    },
  ],
};

runes[Rune.Fal] = {
  id: Rune.Fal,
  name: "Fal",
  image: `/images/games/d2/runes/${Rune.Fal.toString().toLowerCase()}.png`,
  level: 41,
  stats: [
    {
      slots: [Slot.Weapon, Slot.Armor, Slot.Helm, Slot.Shield],
      attributes: ["+10 to Strength"],
    },
  ],
};

runes[Rune.Lem] = {
  id: Rune.Lem,
  name: "Lem",
  image: `/images/games/d2/runes/${Rune.Lem.toString().toLowerCase()}.png`,
  level: 43,
  stats: [
    {
      slots: [Slot.Weapon],
      attributes: ["75% Extra Gold from Monsters"],
    },
    {
      slots: [Slot.Armor, Slot.Helm, Slot.Shield],
      attributes: ["50% Extra Gold from Monsters"],
    },
  ],
};

runes[Rune.Pul] = {
  id: Rune.Pul,
  name: "Pul",
  image: `/images/games/d2/runes/${Rune.Pul.toString().toLowerCase()}.png`,
  level: 45,
  stats: [
    {
      slots: [Slot.Weapon],
      attributes: [
        "+75% Damage to Demons",
        "+100 Attack Rating Against Demons",
      ],
    },
    {
      slots: [Slot.Armor, Slot.Helm, Slot.Shield],
      attributes: ["+30% Enhanced Defense"],
    },
  ],
};

runes[Rune.Um] = {
  id: Rune.Um,
  name: "Um",
  image: `/images/games/d2/runes/${Rune.Um.toString().toLowerCase()}.png`,
  level: 47,
  stats: [
    {
      slots: [Slot.Weapon],
      attributes: ["25% Chance of Open Wounds"],
    },
    {
      slots: [Slot.Armor, Slot.Helm],
      attributes: ["All Resistances +15"],
    },
    {
      slots: [Slot.Shield],
      attributes: ["All Resistances +22"],
    },
  ],
};

runes[Rune.Mal] = {
  id: Rune.Mal,
  name: "Mal",
  image: `/images/games/d2/runes/${Rune.Mal.toString().toLowerCase()}.png`,
  level: 49,
  stats: [
    {
      slots: [Slot.Weapon],
      attributes: ["Prevent Monster Heal"],
    },
    {
      slots: [Slot.Armor, Slot.Helm, Slot.Shield],
      attributes: ["Magic Damage Reduced By 7"],
    },
  ],
};

runes[Rune.Ist] = {
  id: Rune.Ist,
  name: "Ist",
  image: `/images/games/d2/runes/${Rune.Ist.toString().toLowerCase()}.png`,
  level: 51,
  stats: [
    {
      slots: [Slot.Weapon],
      attributes: ["30% Better Chance of Getting Magic Items"],
    },
    {
      slots: [Slot.Armor, Slot.Helm, Slot.Shield],
      attributes: ["25% Better Chance of Getting Magic Items"],
    },
  ],
};

runes[Rune.Gul] = {
  id: Rune.Gul,
  name: "Gul",
  image: `/images/games/d2/runes/${Rune.Gul.toString().toLowerCase()}.png`,
  level: 53,
  stats: [
    {
      slots: [Slot.Weapon],
      attributes: ["20% Bonus to Attack Rating"],
    },
    {
      slots: [Slot.Armor, Slot.Helm, Slot.Shield],
      attributes: ["5% to Maximum Poison Resist"],
    },
  ],
};

runes[Rune.Vex] = {
  id: Rune.Vex,
  name: "Vex",
  image: `/images/games/d2/runes/${Rune.Vex.toString().toLowerCase()}.png`,
  level: 55,
  stats: [
    {
      slots: [Slot.Weapon],
      attributes: ["7% Mana Stolen Per Hit"],
    },
    {
      slots: [Slot.Armor, Slot.Helm, Slot.Shield],
      attributes: ["5% to Maximum Fire Resist"],
    },
  ],
};

runes[Rune.Ohm] = {
  id: Rune.Ohm,
  name: "Ohm",
  image: `/images/games/d2/runes/${Rune.Ohm.toString().toLowerCase()}.png`,
  level: 57,
  stats: [
    {
      slots: [Slot.Weapon],
      attributes: ["+50% Enhanced Damage"],
    },
    {
      slots: [Slot.Armor, Slot.Helm, Slot.Shield],
      attributes: ["5% to Maximum Cold Resist"],
    },
  ],
};

runes[Rune.Lo] = {
  id: Rune.Lo,
  name: "Lo",
  image: `/images/games/d2/runes/${Rune.Lo.toString().toLowerCase()}.png`,
  level: 59,
  stats: [
    {
      slots: [Slot.Weapon],
      attributes: ["+20% Deadly Strike"],
    },
    {
      slots: [Slot.Armor, Slot.Helm, Slot.Shield],
      attributes: ["5% to Maximum Lightning Resist"],
    },
  ],
};

runes[Rune.Sur] = {
  id: Rune.Sur,
  name: "Sur",
  image: `/images/games/d2/runes/${Rune.Sur.toString().toLowerCase()}.png`,
  level: 61,
  stats: [
    {
      slots: [Slot.Weapon],
      attributes: ["Hit Blinds Target"],
    },
    {
      slots: [Slot.Armor, Slot.Helm],
      attributes: ["Maximum Mana 5%"],
    },
    {
      slots: [Slot.Shield],
      attributes: ["+50 to Mana"],
    },
  ],
};

runes[Rune.Ber] = {
  id: Rune.Ber,
  name: "Ber",
  image: `/images/games/d2/runes/${Rune.Ber.toString().toLowerCase()}.png`,
  level: 63,
  stats: [
    {
      slots: [Slot.Weapon],
      attributes: ["20% Chance of Crushing Blow"],
    },
    {
      slots: [Slot.Armor, Slot.Helm, Slot.Shield],
      attributes: ["Damage Reduced by 8%"],
    },
  ],
};

runes[Rune.Jah] = {
  id: Rune.Jah,
  name: "Jah",
  image: `/images/games/d2/runes/${Rune.Jah.toString().toLowerCase()}.png`,
  level: 65,
  stats: [
    {
      slots: [Slot.Weapon],
      attributes: ["Ignore Target's Defense"],
    },
    {
      slots: [Slot.Armor, Slot.Helm],
      attributes: ["Increase Maximum Life 5%"],
    },
    {
      slots: [Slot.Shield],
      attributes: ["+50 Life"],
    },
  ],
};

runes[Rune.Cham] = {
  id: Rune.Cham,
  name: "Cham",
  image: `/images/games/d2/runes/${Rune.Cham.toString().toLowerCase()}.png`,
  level: 67,
  stats: [
    {
      slots: [Slot.Weapon],
      attributes: ["Freeze Target +3"],
    },
    {
      slots: [Slot.Armor, Slot.Helm, Slot.Shield],
      attributes: ["Cannot Be Frozen"],
    },
  ],
};

runes[Rune.Zod] = {
  id: Rune.Zod,
  name: "Zod",
  image: `/images/games/d2/runes/${Rune.Zod.toString().toLowerCase()}.png`,
  level: 69,
  stats: [
    {
      slots: [Slot.Weapon, Slot.Armor, Slot.Helm, Slot.Shield],
      attributes: ["Indestructible"],
    },
  ],
};
