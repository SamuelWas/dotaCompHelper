import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useState } from "react"

function HeroSlot({ hero, onClick }) {
	const names = hero.names;
	const mainName = names ? names[0].replaceAll(" ", "_").replaceAll("'", "").toLowerCase() : null;
	const imageFileName = `${mainName}_full`;

	return (
		<a onClick={() => onClick(hero)}>
			<div className={styles.heroSlot}>
				{/* {mainName} */}
				{/* {imageFileName} */}
				{< Image src={`/heroes/${imageFileName}.png`} width={225} height={127} />}
			</div>
		</a>
	)
}

function HeroCard({ hero, onClick }) {
	return (
		<div className={styles.heroCard}>

			<HeroSlot hero={hero} onClick={onClick} />

		</div>
	);
}

function HeroesComp({ compHeroes, onClick }) {
	const hero = compHeroes.map(hero => {
		return (
			<HeroCard hero={hero} onClick={onClick} />
		)
	});

	return (
		<div class={styles.heroComp}>
			{hero}
		</div>
	);
}

function SearchBar({ onChange }) {
	return (
		<div className={styles.searchBar}>
			<input type="text" placeholder="Buscar..." onChange={(e) => onChange(e.target.value)}></input>
		</div>
	)
}

function HeroesList({ searchText, onClick }) {
	const heroes = [
		{ names: ["Axe"] },
		{ names: ["Necrophos", "Necrolyte"] },
		{ names: ["Death Prophet"] },
		{ names: ["Abaddon"] },
		{ names: ["Ancient Apparition"] },
		{ names: ["Arc Warden"] },
		{ names: ["Alchemist"] },
		{ names: ["Bane"] },
		{ names: ["Anti-Mage"] },
		{ names: ["Beastmaster"] },
		{ names: ["Bounty Hunter"] },
		{ names: ["Batrider"] },
		{ names: ["Bristleback"] },
		{ names: ["Bloodseeker"] },
		{ names: ["Centaur Warrunner"] },
		{ names: ["Brewmaster"] },
		{ names: ["Chen"] },
		{ names: ["Broodmother"] },
		{ names: ["Clockwerk"] },
		{ names: ["Chaos Knight"] },
		{ names: ["Dark Seer"] },
		{ names: ["Clinkz"] },
		{ names: ["Death Prophet"] },
		{ names: ["Crystal Maiden"] },
		{ names: ["Doom"] },
		{ names: ["Dazzle"] },
		{ names: ["Drow Ranger"] },
		{ names: ["Disruptor"] },
		{ names: ["Earthshaker"] },
		{ names: ["Dragon Knight"] },
		{ names: ["Ember Spirit"] },
		{ names: ["Earth Spirit"] },
		{ names: ["Enigma"] },
		{ names: ["Elder Titan"] },
		{ names: ["Gyrocopter"] },
		{ names: ["Enchantress"] },
		{ names: ["Invoker"] },
		{ names: ["Faceless Void"] },
		{ names: ["Jakiro"] },
		{ names: ["Huskar"] },
		{ names: ["Keeper of the Light"] },
		{ names: ["Io"] },
		{ names: ["Legion Commander"] },
		{ names: ["Juggernaut"] },
		{ names: ["Lich"] },
		{ names: ["Kunkka"] },
		{ names: ["Lina"] },
		{ names: ["Leshrac"] },
		{ names: ["Lone Druid"] },
		{ names: ["Lifestealer"] },
		{ names: ["Lycan"] },
		{ names: ["Lion"] },
		{ names: ["Medusa"] },
		{ names: ["Luna"] },
		{ names: ["Mirana"] },
		{ names: ["Magnus"] },
		{ names: ["Morphling"] },
		{ names: ["Meepo"] },
		{ names: ["Nature's Prophet"] },
		{ names: ["Monkey King"] },
		{ names: ["Night Stalker"] },
		{ names: ["Naga Siren"] },
		{ names: ["Ogre Magi"] },
		{ names: ["Necrophos"] },
		{ names: ["Oracle"] },
		{ names: ["Nyx Assassin"] },
		{ names: ["Phantom Assassin"] },
		{ names: ["Omniknight"] },
		{ names: ["Phoenix"] },
		{ names: ["Outworld Devourer"] },
		{ names: ["Pudge"] },
		{ names: ["Phantom Lancer"] },
		{ names: ["Queen of Pain"] },
		{ names: ["Puck"] },
		{ names: ["Riki"] },
		{ names: ["Pugna"] },
		{ names: ["Sand King"] },
		{ names: ["Razor"] },
		{ names: ["Shadow Fiend"] },
		{ names: ["Rubick"] },
		{ names: ["Silencer"] },
		{ names: ["Shadow Demon"] },
		{ names: ["Slardar"] },
		{ names: ["Shadow Shaman"] },
		{ names: ["Sniper"] },
		{ names: ["Skywrath Mage"] },
		{ names: ["Spirit Breaker"] },
		{ names: ["Slark"] },
		{ names: ["Sven"] },
		{ names: ["Spectre"] },
		{ names: ["Templar Assassin"] },
		{ names: ["Storm Spirit"] },
		{ names: ["Tidehunter"] },
		{ names: ["Techies"] },
		{ names: ["Tinker"] },
		{ names: ["Terrorblade"] },
		{ names: ["Treant Protector"] },
		{ names: ["Timbersaw"] },
		{ names: ["Tusk"] },
		{ names: ["Tiny"] },
		{ names: ["Undying"] },
		{ names: ["Troll Warlord"] },
		{ names: ["Vengeful Spirit"] },
		{ names: ["Underlord"] },
		{ names: ["Viper"] },
		{ names: ["Ursa"] },
		{ names: ["Warlock"] },
		{ names: ["Venomancer"] },
		{ names: ["Windranger"] },
		{ names: ["Visage"] },
		{ names: ["Witch Doctor"] },
		{ names: ["Weaver"] },
		{ names: ["Zeus"] },
		{ names: ["Winter Wyvern"] },
		{ names: ["Wraith King"] },
	];

	const filteredHeroes = heroes.filter(heroe => {
		return !searchText || heroe.names.some(name => (name.toLowerCase()).includes(searchText.toLowerCase()))
	})

	const searchableHeroes = filteredHeroes.map(hero => {
		return (
			<HeroSlot hero={hero} onClick={onClick} />
		);
	})

	return (
		<div class={styles.heroesList}>
			{searchableHeroes}
		</div>
	);
}

export default function Home() {
	const [searchText, setSearchText] = useState("");
	const [compHeroes, setCompHeroes] = useState([]);

	function addHero(hero) {
		if (compHeroes && compHeroes.length >= 5) return;

		let newCompHeroes = compHeroes.slice()

		newCompHeroes.push(hero)

		newCompHeroes = newCompHeroes.filter((compHero, index) => {
			const otherIndex = newCompHeroes.findIndex(hero => hero.names[0] === compHero.names[0])

			return otherIndex === index
		})

		setCompHeroes(newCompHeroes)
	}

	function removeHero(removeHero) {
		const newCompHeroes = compHeroes.filter(hero => hero.names[0] !== removeHero.names[0])

		setCompHeroes(newCompHeroes)
	}

	console.log(compHeroes)

	return (
		<>
			<main className={styles.container}>
				<HeroesComp compHeroes={compHeroes} onClick={removeHero} />
				<SearchBar onChange={setSearchText} />
				<HeroesList searchText={searchText} onClick={addHero} />
			</main>
		</>
	);
}
