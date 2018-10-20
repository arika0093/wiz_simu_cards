{
	name: "超越の大魔道怪獣 アリエッタ・トワ",
	cardno: 4691,
	imageno: 6361,
	hp: 2302,
	atk: 3038,
	cost: 46,
	attr: [0, 1],
	species: [9],
	disable: true,
	awakes: [
		Panel_boost([1,0,0,0,0], 1),
		Fastskill(1),
		Attr_statusup(0, 100, [1, 1, 0, 0, 0]),
		NEFTJOD(30),
		Attr_statusup(100, 0, [1, 1, 0, 0, 0]),
		Panel_boost([1,0,0,0,0], 1),
		Attr_relief([1,0,0,0,0], 20),
		Spec_statusup(200, 0, [9]),
		Fastskill(2),
		Panel_boost([1,0,0,0,0], 2),
	],
	as1: {
		desc: "<全体攻撃>3チェインで敵全体へダメージ/180％",
		proc: ChainAllAttack(1.8, 3),
	},
	ss1: {
		desc: "<大魔術>敵全体へ火・水属性のダメージ、5チェインを消費しさらにダメージアップ(通常：150％ / 5チェイン消費：230％)",
		turn: 6,
		proc: [ss_damage_all(ss_chain_cost(5, 2.3, 1.5), [0, 1])],
	},
	islegend: true,
	Lawake: [
		Attr_statusup(0, 100, [1, 1, 0, 0, 0]),
		Statusup(0, 500),
	],
	as2: {
		desc: "<全体攻撃>3チェインで敵全体へダメージ/220％",
		proc: ChainAllAttack(2.2, 3),
	},
	ss2: {
		desc: "<大魔術>敵全体へ火・水属性のダメージ、5チェインを消費しさらにダメージアップ(通常：220％ / 5チェイン消費：300％)",
		turn: 9,
		proc: [ss_damage_all(ss_chain_cost(5, 3.0, 2.2), [0, 1])],
	},
}