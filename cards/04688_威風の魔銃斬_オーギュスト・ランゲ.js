{
	name: "威風の魔銃斬 オーギュスト・ランゲ",
	cardno: 4688,
	imageno: 6447,
	hp: 2431,
	atk: 3273,
	cost: 45,
	attr: [0, -1],
	species: [8],
	awakes: [
		NEFTJOD(30),
		Statusup(0, 100),
		Attr_relief([1,0,0,0,0], 10),
		Statusup(200, 0),
		Costdown(2),
		Fastskill(1),
		Attr_statusup(0, 100, [1,0,0,0,0]),
		Fastskill(1),
		Panel_boost([1,0,0,0,0], 2),
		Spec_statusup(0, 200, [8]),
	],
	as1: {
		desc: "<チェイン攻撃>3チェインでダメージアップ/350％",
		proc: ChainAttack(3.5, 3),
	},
	ss1: {
		desc: "<自己犠牲魔術>MAXHPの50％を使い敵単体へダメージ(380％)",
		turn: 8,
		proc: [ss_damage_s(3.8, [0], 1), ss_consume_own(0.5)],
	},
	islegend: true,
	Lawake: [
		Attr_statusup(0, 100, [1,0,0,0,0]),
		Statusup(0, 500),
	],
	as2: {
		desc: "<チェイン攻撃>3チェインでダメージアップ/450％",
		proc: ChainAttack(4.5, 3),
	},
	ss2: {
		desc: "<自己犠牲魔術>MAXHPの50％を使い敵単体へダメージ(500％)",
		turn: 10,
		proc: [ss_damage_s(5.0, [0], 1), ss_consume_own(0.5)],
	},
}