{
	name: "コナンを支える発明 阿笠博士",
	cardno: 5308,
	imageno: 6999,
	hp: 2714,
	atk: 2343,
	cost: 23,
	attr: [0,-1],
	species: [9],
	disable: true,
	islegend: true,
	is_dist: true,
	ape: "コラボ(コナン)",
	as1: {
		desc: "<回復>火属性の味方を回復、パネルの色が増す度さらに回復(10%/13%/15%)",
		proc: ChainPanelsHeal(0.10, 0.13, 0.15, [1,0,0,0,0], 0),
	},
	ss1: {
		desc: "<パネル変換>ジャンルパネルを火属性化",
		turn: 6,
		proc: [ss_panel_change([1,0,0,0,0])],
	},
	awakes: [
		Awake_noeffect("経験値取得量アップ", 1),
		Panel_boost([1,0,0,0,0,],1),
		Statusup(100,0),
		Fastskill(1),
		Panel_boost([1,0,0,0,0,],1),
		Statusup(0,100),
		Attr_statusup(100,0, [1,0,0,0,0,]),
		Attr_statusup(0,100, [1,0,0,0,0,]),
		Spec_statusup(200,0, [9,]),
		Fastskill(1),
	],
	as2: {
		desc: "<回復>火属性の味方を回復、パネルの色が増す度さらに回復(12%/15%/18%)",
		proc: ChainPanelsHeal(0.12, 0.15, 0.18, [1,0,0,0,0], 0),
	},
	ss2: {
		desc: "<特殊パネル変換>ジャンルパネルを火属性化し、回復の効果を付与(8%)",
		turn: 9,
		proc: [ss_panel_change([1,0,0,0,0]), panel_healally(0.08)],
	},
	Lawake: [
		Statusup(500,0),
		Attr_statusup(0,100, [1,0,0,0,0,]),
	],
}