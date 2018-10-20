{
	name: "心蓮沙華の豊穣美神 シャクティ",
	cardno: 5572,
	imageno: 7368,
	hp: 4846,
	atk: 3290,
	cost: 43,
	attr: [0,-1],
	species: [1],
	islegend: true,
	as1: {
		desc: "<回復>火属性の味方を回復、パネルの色が増す度さらに回復(11%/15%/17%)",
		proc: ChainPanelsHeal(0.11, 0.15, 0.17, [1,0,0,0,0], 0),
	},
	ss1: {
		desc: "<状態異常回復&蘇生>自分を犠牲に味方全体のHPを回復し(50%)、状態異常を回復、さらに火属性の味方を50%で蘇生",
		turn: 7,
		proc: [ss_heal(0.5), ss_abstate_cure(), ss_resurrection([1,0,0,0,0], 0.5), ss_consume_own(1)],
	},
	awakes: [
		Costdown(4),
		Statusup(200,0),
		Fastskill(3),
		Statusup(200,0),
		Panel_boost([1,0,0,0,0,],2),
		Attr_statusup(0,200, [1,0,0,0,0,]),
		NEFTJOD(30),
		Attr_statusup(200,0, [1,0,0,0,0,]),
		Panel_boost([1,0,0,0,0,],2),
		Spec_statusup(300,0, [1,]),
	],
	as2: {
		desc: "<回復>火属性の味方を回復、パネルの色が増す度さらに回復(13%/17%/20%)",
		proc: ChainPanelsHeal(0.13, 0.17, 0.20, [1,0,0,0,0], 0),
	},
	ss2: {
		desc: "<状態異常回復&蘇生>自分を犠牲に味方全体のHPを完全回復し、状態異常を回復、さらに火属性の味方を75%で蘇生",
		turn: 10,
		proc: [ss_heal(1), ss_abstate_cure(), ss_resurrection([1,0,0,0,0], 0.75), ss_consume_own(1)],
	},
	Lawake: [
		Attr_statusup(0,100, [1,0,0,0,0,]),
		Statusup(500,0),
		Attr_relief([0,0,1,0,0,],10),
	],
}