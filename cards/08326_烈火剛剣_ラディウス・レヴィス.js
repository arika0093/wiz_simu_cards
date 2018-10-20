{
	name: "烈火剛剣 ラディウス・レヴィス",
	cardno: 8326,
	imageno: 10470,
	hp: 2915,
	atk: 6337,
	cost: 57,
	attr: [0,-1],
	species: [8],
	disable: true,
	islegend: true,
	ape: "喰牙RIZEⅠ",
	as1: {
		desc: "<チェイン攻撃>4チェインでダメージアップ(300%)、デッキに単色の精霊が多いほど、さらにダメージアップ(60%)（上限:5段階)",
		proc: add_cond(ChainAttack(3.0, 4), as_singleattr_num(0, 0.6)),
	},
	ss1: {
		desc: "<詠唱大魔術>スキル反射を無視し、敵単体へ火属性のダメージ(800%)、クイズに5問解答し、解答時間が早いほどさらにダメージ(400%)(上限4段階)",
		turn: 9,
		proc: [ss_damage_s(ss_answertime(8.0, 4.0), [0], 1), ss_ignore_skillcounter()],
	},
	awakes: [
		Panel_boost([1,0,0,0,0,],2),
		Spec_statusup(0,200, [8,]),
		Attr_relief([0,0,1,0,0,],20),
		Panel_boost([1,0,0,0,0,],2),
		Abstate_invalid("heal_reverse"),
		Attr_statusup(0,400, [1,0,0,0,0,]),
		Attr_statusup(400,0, [1,0,0,0,0,]),
		Fastskill(3),
		Abstate_invalid(["as_sealed", "ss_sealed"]),
		Awake_damage_multiple(1.1, 500),
	],
	as2: {
		desc: "<チェイン攻撃>4チェインでダメージアップ(400%)、デッキに単色の精霊が多いほど、さらにダメージアップ(60%)（上限:5段階)",
		proc: add_cond(ChainAttack(4.0, 4), as_singleattr_num(0, 0.6)),
	},
	ss2: {
		desc: "<詠唱大魔術>スキル反射を無視し、敵単体へ火属性のダメージ(1100%)、クイズに5問解答し、解答時間が早いほどさらにダメージ(400%)(上限4段階)",
		turn: 12,
		proc: [ss_damage_s(ss_answertime(11.0, 4.0), [0], 1), ss_ignore_skillcounter()],
	},
	Lawake: [
		Statusup(0,1500),
		Attr_relief([1,1,1,1,1,],10),
	],
}