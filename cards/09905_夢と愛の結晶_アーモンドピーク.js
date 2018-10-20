{
	name: "夢と愛の結晶 アーモンドピーク",
	cardno: 9905,
	imageno: 6060,
	hp: 5086,
	atk: 2253,
	cost: 53,
	attr: [0,1],
	species: [9],
	islegend: true,
	is_dist: true,
	ape: "大魔道杯 in お菓子",
	as1: {
		desc: "<回復>味方全体のHPを回復(10%)、術士はさらに回復(5%)、15チェインでさらに術士は回復(15%)",
		proc: [Heal(0.1, [1, 1, 1, 1, 1], 0), SpecHeal(0.15, [1, 1, 1, 1, 1], [9], 0), SpecHeal(0.3, [1, 1, 1, 1, 1], [9], 15)],
	},
	as2: {
		desc: "<回復>味方全体のHPを回復(10%)、術士はさらに回復(5%)、15チェインでさらに術士は回復(20%)",
		proc: [Heal(0.1, [1, 1, 1, 1, 1], 0), SpecHeal(0.15, [1, 1, 1, 1, 1], [9], 0), SpecHeal(0.35, [1, 1, 1, 1, 1], [9], 15)],
	},
	ss1: {
		desc: "<スキルチャージ>味方全体のスペシャルスキルの発動ターンを2早める",
		turn: 7,
		proc: [ss_skillboost(2)],
	},
	ss2: {
		desc: "<スキルチャージ>味方全体のスペシャルスキルの発動ターンを3早める、20チェインでさらに1早める",
		turn: 11,
		proc: [ss_skillboost(ss_chain_cond(20, 4, 3))],
	},
	awakes: [
		Panel_boost([1,0,0,0,0,],4),
		Attr_statusup_sattr(0,100,[1,0,0,0,0,],0,100,[0,1,0,0,0,]),
		Attr_statusup(200,0,[1,1,0,0,0,]),
		Fastskill(2),
		Attr_statusup(0,200,[1,1,0,0,0,]),
		Heal_afterbattle(10),
		Attr_statusup_sattr(100,0,[1,0,0,0,0,],100,0,[0,1,0,0,0,]),
		Fastskill(2),
		Spec_statusup(0,200,[9,]),
		Spec_statusup(200,0,[9,]),
	],
	Lawake: [
		Attr_statusup(0,200,[1,1,0,0,0,]),
		Statusup(0,500),
		Statusup(500,0),
	],
}