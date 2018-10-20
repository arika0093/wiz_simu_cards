{
	name: "協調の神世界 ミカエラ・セラフィム",
	cardno: 5132,
	imageno: 6875,
	hp: 3434,
	atk: 2753,
	cost: 49,
	attr: [0,3],
	species: [3],
	islegend: true,
	disable: true,
	as1: {
		desc: "<種族特効>4チェインでダメージアップ、天使・魔族の敵へさらにダメージアップ(400%/550%)",
		proc: [ChainAttack(4.0, 4), ChainSpecAttack(5.5, 4, [2,3])],
	},
	ss1: {
		desc: "<状態異常回復>味方全体のHPを回復し、状態異常を回復する(50%)",
		turn: 7,
		proc: [ss_heal(0.5), ss_abstate_cure()],
	},
	awakes: [
		Fastskill(2),
		Attr_statusup(100,0, [1,0,0,0,0,]),
		Statusup(200,0),
		Attr_statusup(0,100, [1,0,0,0,0,]),
		Panel_boost([1,0,0,0,0,],1),
		Attr_statusup(100,0, [1,0,0,0,0,]),
		NEFTJOD(30),
		Panel_boost([1,0,0,0,0,],2),
		Fastskill(2),
		Spec_statusup(0,200, [2,3,]),
	],
	as2: {
		desc: "<種族特効>4チェインでダメージアップ、天使・魔族の敵へさらにダメージアップ(500%/650%)",
		proc: [ChainAttack(5.0, 4), ChainSpecAttack(6.5, 4, [2,3])],
	},
	ss2: {
		desc: "<状態異常回復&蘇生>味方全体のHPを回復し、状態異常を回復、さらに火属性の味方を50%で蘇生(50%)",
		turn: 10,
		proc: [ss_heal(0.5), ss_abstate_cure(), ss_resurrection([1,0,0,0,0], 0.5)],
	},
	Lawake: [
		Statusup(500,0),
		Attr_statusup(0,100, [1,0,0,0,0,]),
	],
}