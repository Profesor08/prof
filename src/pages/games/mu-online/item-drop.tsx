import React, { useEffect, useState } from "react";
import { GamesLayout } from "../components/GamesLayout";
import MDXContent from "@theme/MDXContent";
import Heading from "@theme/MDXComponents/Heading";
import { Grid, GridItem } from "@chakra-ui/react";

const getFile = async (file: string) => {
  const response = await fetch(file);

  return await response.text();
};

type MuItem = {
  AttackSpeed: string;
  DamageMax: string;
  DamageMin: string;
  DarkKnight: string;
  DarkLord: string;
  DarkWizard: string;
  Drop: string;
  DropLevel: string;
  Dump: string;
  Durability: string;
  ExpensiveItem: string;
  FairyElf: string;
  GrowLancer: string;
  GunCrusher: string;
  Height: string;
  Index: string;
  KindA: string;
  KindB: string;
  MagicDurability: string;
  MagicGladiator: string;
  MagicPower: string;
  MasteryGrade: string;
  ModelFile: string;
  ModelPath: string;
  Name: string;
  NonValue: string;
  Option: string;
  Overlap: string;
  PersonalStore: string;
  RageFighter: string;
  Repair: string;
  ReqCommand: string;
  ReqDexterity: string;
  ReqEnergy: string;
  ReqLevel: string;
  ReqStrength: string;
  ReqVitality: string;
  RuneWizard: string;
  SellToNPC: string;
  Serial: string;
  SetAttrib: string;
  SkillIndex: string;
  Slayer: string;
  Slot: string;
  StoreWarehouse: string;
  Summoner: string;
  Transaction: string;
  TwoHand: string;
  Type: string;
  Width: string;
};

type MuItemGroup = {
  id: string;
  name: string;
  items: MuItem[];
};

const getItems = async (): Promise<MuItemGroup[]> => {
  const ItemListXml = await getFile(`/data/mu-online/ItemList.xml`);

  const parser = new DOMParser();

  const xml = parser.parseFromString(ItemListXml, "text/xml");

  const SectionList = Array.from(xml.querySelectorAll("Section"));

  const groups: MuItemGroup[] = SectionList.map((Section) => ({
    id: Section.getAttribute("Index") as string,
    name: Section.getAttribute("Name") as string,
    items: Array.from(Section.querySelectorAll("Item")).map((Item) =>
      Object.entries(Item.attributes).reduce((item, [_, Attr]) => {
        item[Attr.nodeName] = Attr.nodeValue;

        return item;
      }, {} as MuItem)
    ),
  }));

  return groups;
};

type MuMonster = {
  id: string;
  name: string;
  level: string;
};

const getMonsters = async (file: string): Promise<MuMonster[]> => {
  const MonsterTxt = await getFile(`/data/mu-online/${file}`);

  const matches = MonsterTxt.matchAll(/^\d+.*[\r\n]+/gm);

  const monsters: MuMonster[] = [];

  for (const [line] of matches) {
    const [_, id, __, name, level] = Array.from(
      line.match(/(\d+)\s+(\d+)\s+"(.*)"\s+(\d+)/) ?? []
    );

    monsters.push({
      id,
      name,
      level,
    });
  }

  return monsters;
};

const useItemGroups = () => {
  const [groups, setGroups] = useState<MuItemGroup[]>([]);

  useEffect(() => {
    const load = async () => {
      setGroups(await getItems());
    };

    load();
  }, []);

  return groups;
};

const useMonsters = (file: string) => {
  const [monsters, setMonsters] = useState<MuMonster[]>([]);

  useEffect(() => {
    const load = async () => {
      setMonsters(await getMonsters(file));
    };

    load();
  }, [file]);

  return monsters;
};

const Finder = () => {
  const [query, setQuery] = useState("");
  const [monsterFile, setMonsterFile] = useState("Monster.txt");
  const groups = useItemGroups();
  const monstersList = useMonsters(monsterFile);

  const items =
    query.trim().length > 0
      ? groups
          .map((group) =>
            group.items.filter((item) =>
              item.Name.toLowerCase().includes(query.toLowerCase())
            )
          )
          .flat()
      : [];

  const monsters = monstersList
    .filter((monster) =>
      items.some((item) => {
        const dropLevel = Number(item.DropLevel);
        const monsterLevel = Number(monster.level);

        return monsterLevel >= dropLevel && monsterLevel <= dropLevel + 3;
      })
    )
    .sort((a, b) => {
      return Number(a.level) - Number(b.level);
    });

  return (
    <Grid templateColumns="3fr 2fr" gap={12}>
      <input value={query} onChange={(e) => setQuery(e.currentTarget.value)} />

      <select
        value={monsterFile}
        onChange={(e) => setMonsterFile(e.currentTarget.value)}
      >
        <option value="Monster.txt">IGCN</option>
        <option value="MonsterKeeper.txt">Custom</option>
      </select>

      <div>
        {items.map(
          (item, index) =>
            item.Name.toLowerCase().includes(query.toLowerCase()) && (
              <div key={index} onClick={() => setQuery(item.Name)}>
                {item.Name} ({item.DropLevel})
              </div>
            )
        )}
      </div>

      <div>
        {monsters.map((monster, index) => (
          <div key={index}>
            {monster.name} ({monster.level})
          </div>
        ))}
      </div>
    </Grid>
  );
};

export const D2 = () => {
  return (
    <GamesLayout>
      <MDXContent>
        <Heading as="h1">Item Drop</Heading>
        <Finder />
      </MDXContent>
    </GamesLayout>
  );
};

export default D2;
