{
	name: "妖精の種火 プラメンチッツァ",
	cardno: 5433,
	imageno: 7206,
	hp: 5023,
	atk: 1545,
	cost: 51,
	attr: [0,3],
	species: [4],
	islegend: true,
	is_dist: true,
	as1: {
		desc: "<回復>火属性の味方を回復、HP20%以下でさらに回復(13%/33%)",
		proc: [Heal(0.13, [1,0,0,0,0], 0), add_cond(Heal(0.33, [1,0,0,0,0], 0), when_hp_less(0.2))],
	},
	ss1: {
		desc: "<起死回生>2ターン、致死ダメージを受けたら一度だけHP25%で起死回生",
		turn: 9,
		proc: [ss_revival(0.25, 2)],
	},
	awakes: [
		Statusup(200,0),
		Panel_boost([1,0,0,0,0,],2),
		NEFTJOD(30),
		Attr_statusup(0,100, [1,0,0,0,0,]),
		Panel_boost([1,0,0,0,0,],2),
		Attr_statusup(100,0, [1,0,0,0,0,]),
		NEFTJOD(30),
		Heal_afterbattle(10),
		Spec_statusup(0,500, [4,]),
		Spec_statusup(500,0, [4,]),
	],
	as2: {
		desc: "<回復>火属性の味方を回復、HP20%以下でさらに回復(17%/37%)",
		proc: [Heal(0.17, [1,0,0,0,0], 0), add_cond(Heal(0.37, [1,0,0,0,0], 0), when_hp_less(0.2))],
	},
	ss2: {
		desc: "<起死回生>2ターン、致死ダメージを受けたら一度だけHP25%で起死回生、5チェインを消費しさらに2ターン継続しHP50%で起死回生",
		turn: 11,
		proc: [ss_chain_cost_skill(5, ss_revival(0.5, 4), ss_revival(0.25, 2))],
	},
	Lawake: [
		Attr_statusup(0,100, [1,0,0,0,0,]),
		Statusup(500,0),
	],
}