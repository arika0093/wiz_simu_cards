{
	name: "絶花却竜姫 アリューゼ・ヴェローナ",
	cardno: 8280,
	imageno: 6860,
	hp: 2656,
	atk: 6354,
	cost: 56,
	attr: [0,-1],
	species: [0],
	islegend: true,
	ape: "DL限定精霊",
	as1: {
		desc: "<チェイン攻撃>5チェインでダメージアップ(400%)、パネルの色が増す度ダメージアップ(100%/250%)",
		proc: ChainPanelsAttack(4.0, 5.0, 6.5, 5),
	},
	ss1: {
		desc: "<特効大魔術>敵全体へ火属性のダメージ(400%)、さらに雷属性の敵には特効ダメージ(550%)",
		turn: 6,
		proc: [ss_damage_all(special_attr([0,0,1,0,0], 9.5, 4.0), [0])],
	},
	awakes: [
		Panel_boost([1,0,0,0,0,],2),
		Spec_statusup(0,400, [0,]),
		Spec_statusup(400,0, [0,]),
		Panel_boost([1,0,0,0,0,],2),
		NEFTJOD(30),
		Attr_relief([0,1,0,0,0,],20),
		Attr_statusup(0,400, [1,0,0,0,0,]),
		Attr_statusup(400,0, [1,0,0,0,0,]),
		Fastskill(4),
		Awake_noeffect("スキル反射見破り",1),
	],
	as2: {
		desc: "<チェイン攻撃>5チェインでダメージアップ(500%)、パネルの色が増す度ダメージアップ(100%/250%)",
		proc: ChainPanelsAttack(5.0, 6.0, 7.5, 5),
	},
	ss2: {
		desc: "<特効大魔術>敵全体へ火属性のダメージ(400%)、さらに雷属性の敵には特効ダメージ(1050%)",
		turn: 9,
		proc: [ss_damage_all(special_attr([0,0,1,0,0], 14.5, 4.0), [0])],
	},
	Lawake: [
		Statusup(0,500),
		Attr_statusup(0,200, [1,0,0,0,0,]),
		NEFTJOD(30),
	],
}