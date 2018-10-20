{
	name: "煌炎の世界へ チェルシー・ネリム",
	cardno: 5189,
	imageno: 7108,
	hp: 2414,
	atk: 2202,
	cost: 32,
	attr: [0,3],
	species: [9],
	disable: true,
	islegend: true,
	is_dist: true,
	as1: {
		desc: "<攻撃強化>火属性の味方の攻撃力をアップ、リーダー時さらにアップ(30%/40%)",
		proc: [ChainEnhance(0.30, [1,0,0,0,0], 0), add_cond(ChainEnhance(0.40, [1,0,0,0,0], 0), when_leader())],
	},
	ss1: {
		desc: "<回復>味方全体のHPを回復する(50%)",
		turn: 6,
		proc: [ss_heal(0.50)],
	},
	awakes: [
		Statusup(0,200),
		Heal_afterbattle(10),
		Fastskill(1),
		Statusup(200,0),
		Costdown(2),
		Fastskill(2),
		Panel_boost([1,0,0,0,0,],2),
		Attr_statusup(0,100, [1,0,0,0,0,]),
		Spec_statusup(0,200, [9,]),
		Spec_statusup(200,0, [9,]),
	],
	as2: {
		desc: "<攻撃強化>火属性の味方の攻撃力をアップ、リーダー時さらにアップ(40%/60%)",
		proc: [ChainEnhance(0.40, [1,0,0,0,0], 0), add_cond(ChainEnhance(0.60, [1,0,0,0,0], 0), when_leader())],
	},
	ss2: {
		desc: "<状態異常回復>味方全体のHPを回復し、状態異常を回復する(50%)",
		turn: 9,
		proc: [ss_heal(0.50), ss_abstate_cure()],
	},
	Lawake: [
		Attr_statusup(0,100, [1,0,0,0,0,]),
		Statusup(500,0),
	],
}