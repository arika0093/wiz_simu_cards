{
	name: "お菓子の遺跡の守護者 クアット",
	cardno: 9841,
	imageno: 12184,
	hp: 3265,
	atk: 1410,
	cost: 33,
	attr: [2,0],
	species: [6],
	islegend: true,
	ape: "眠れる遺跡のアウトランダー",
	is_dist: true,
	as1: {
		desc: "<回復>火・雷属性の味方のHPを回復(12%)",
		proc: Heal(0.12, [1,0,1,0,0], 0),
	},
	ss1: {
		desc: "<継続回復>5ターン味方全体を徐々に回復する(15%)",
		turn: 7,
		charged: 1,
		proc: [ss_regenerate(0.15, 5)],
	},
	awakes: [
		Costdown(10),
		Panel_boost([0,0,1,0,0,],1),
		Attr_statusup(0,200, [1,0,1,0,0,]),
		Attr_statusup(200,0, [1,0,1,0,0,]),
		Panel_boost([1,0,1,0,0,],2),
		NEFTJOD(30),
		Fastskill(1),
		Attr_statusup_sattr(0,100, [0,0,1,0,0,], 0,100, [1,0,0,0,0,]),
		Attr_statusup_sattr(100,0, [0,0,1,0,0,], 100,0, [1,0,0,0,0,]),
		Fastskill(2),
	],
	as2: {
		desc: "<回復>火・雷属性の味方のHPを回復(15%)",
		proc: Heal(0.15, [1,0,1,0,0], 0),
	},
	ss2: {
		desc: "<継続回復>1ターン溜めた後、味方HPを完全回復し、さらに5ターン味方全体を徐々に回復する(30%)",
		turn: 9,
		charged: 1,
		proc: [ss_heal(1), ss_regenerate(0.30, 5)],
	},
	Lawake: [
		Attr_statusup(0,100, [1,0,1,0,0,]),
		Attr_statusup(100,0, [1,0,1,0,0,]),
	],
}