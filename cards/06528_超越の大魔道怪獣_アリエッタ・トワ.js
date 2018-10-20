{
	name: "超越の大魔道怪獣 アリエッタ・トワ",
	cardno: 6528,
	imageno: 6361,
	hp: 2456,
	atk: 4004,
	cost: 53,
	attr: [0,1],
	species: [9],
	disable: true,
	islegend: true,
	ape: "UG",
	as1: {
		desc: "<全体攻撃>敵全体へダメージ、5チェインで更にダメージアップ(150%/200%)",
		proc: [ChainAllAttack(1.5, 0), ChainAllAttack(2.0, 5)],
	},
	ss1: {
		desc: "<大魔術>スキル反射を無視し、敵全体へ火・水属性のダメージ、5チェインを消費しさらにダメージアップ(150%/300%)",
		turn: 4,
		proc: [ss_damage_all(ss_chain_cost(5, 3.0, 1.5), [0, 1]), ss_ignore_skillcounter()],
	},
	awakes: [
		Panel_boost([1,0,0,0,0,],1),
		Fastskill(3),
		Attr_statusup(0,200, [1,1,0,0,0,]),
		NEFTJOD(30),
		Attr_statusup(200,0, [1,1,0,0,0,]),
		Panel_boost([1,0,0,0,0,],2),
		Attr_relief([1,0,0,0,0,],20),
		Spec_statusup(200,0, [9,]),
		Awake_noeffect("ドロップアップ", 1),
		Panel_boost([1,0,0,0,0,],2),
	],
	as2: {
		desc: "<全体攻撃>敵全体へダメージ、5チェインで更にダメージアップ(180%/230%)",
		proc: [ChainAllAttack(1.8, 0), ChainAllAttack(2.3, 5)],
	},
	ss2: {
		desc: "<大魔術>スキル反射を無視し、敵全体へ火・水属性のダメージ、5チェインを消費しさらにダメージアップ(220%/440%)",
		turn: 9,
		proc: [ss_damage_all(ss_chain_cost(5, 4.4, 2.2), [0, 1]), ss_ignore_skillcounter()],
	},
	Lawake: [
		Attr_statusup(0,100, [1,1,0,0,0,]),
		Statusup(0,500),
	],
}