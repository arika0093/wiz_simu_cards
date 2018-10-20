{
	name: "双子の絆は海より深く メル&マナ",
	cardno: 6424,
	imageno: 8363,
	hp: 2100,
	atk: 3120,
	cost: 35,
	attr: [1,2],
	species: [4],
	islegend: true,
	as1: {
		desc: "<快調攻撃>残りHPが80%以上でダメージアップ(350%)",
		proc: add_cond(ChainAttack(3.5, 0), when_hp_more(0.8)),
	},
	ss1: {
		desc: "<大魔術>スキル反射を無視し、敵全体へ水・雷属性のダメージ(150%)",
		turn: 7,
		proc: [ss_damage_all(1.5, [1,2]), ss_ignore_skillcounter()],
	},
	awakes: [
		Fastskill(1),
		Statusup(300,0),
		Panel_boost([0,1,0,0,0,],1),
		Statusup(0,200),
		Fastskill(2),
		Costdown(2),
		Statusup(0,200),
		Attr_statusup(0,100, [0,1,1,0,0,]),
		Panel_boost([0,1,0,0,0,],2),
		Spec_statusup(0,500, [4,]),
	],
	as2: {
		desc: "<快調攻撃>残りHPが80%以上でダメージアップ(450%)",
		proc: add_cond(ChainAttack(4.5, 0), when_hp_more(0.8)),
	},
	ss2: {
		desc: "<大魔術>スキル反射を無視し、敵全体へ水・雷属性のダメージ(220%)",
		turn: 10,
		proc: [ss_damage_all(2.2, [1,2]), ss_ignore_skillcounter()],
	},
	Lawake: [
		Attr_statusup(0,100, [0,1,1,0,0,]),
		Statusup(0,300),
	],
}