{
	name: "美味しさのその先へ ミコト&ツキミ",
	cardno: 5601,
	imageno: 7457,
	hp: 2876,
	atk: 3546,
	cost: 46,
	attr: [2,3],
	species: [1],
	islegend: true,
	disable: true,
	as1: {
		desc: "<連撃>4チェインで敵単体を3回連続攻撃(400%)",
		proc: ChainDualAttack(4.0, 4, 3),
	},
	ss1: {
		desc: "<大魔術>スキル反射を無視し、敵全体へ雷・光属性のダメージ(150%)",
		turn: 6,
		proc: [ss_damage_all(1.5, [2,3]), ss_ignore_skillcounter()],
	},
	awakes: [
		Panel_boost([0,0,1,0,0,],1),
		Attr_statusup(0,100, [0,0,1,0,0,]),
		Fastskill(1),
		NEFTJOD(30),
		Attr_statusup(100,0, [0,0,1,0,0,]),
		Panel_boost([0,0,1,0,0,],2),
		Attr_relief([0,1,0,0,0,],20),
		Spec_statusup(300,0, [1,]),
		Fastskill(2),
		Spec_statusup(0,300, [1,]),
	],
	as2: {
		desc: "<連撃>4チェインで敵単体を3回連続攻撃(500%)",
		proc: ChainDualAttack(5.0, 4, 3),
	},
	ss2: {
		desc: "<大魔術>スキル反射を無視し、敵全体へ雷・光属性のダメージ(220%)",
		turn: 9,
		proc: [ss_damage_all(2.2, [2,3]), ss_ignore_skillcounter()],
	},
	Lawake: [
		Attr_statusup(0,100, [0,0,1,0,0,]),
		Statusup(0,500),
	],
}