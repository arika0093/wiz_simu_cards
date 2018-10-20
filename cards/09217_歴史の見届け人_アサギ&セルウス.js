{
	name: "歴史の見届け人 アサギ&セルウス",
	cardno: 9217,
	imageno: 8243,
	hp: 3767,
	atk: 5054,
	cost: 61,
	attr: [2,3],
	species: [1],
	disable: true,
	islegend: true,
	ape: "幻魔特区スザクⅡ",
	as1: {
		desc: "<チェイン攻撃・種族数攻撃>3チェインでダメージアップ(250%)、神族の仲間の数だけさらにアップ(100%)",
		proc: ChainDeckSpecsAttack(1.0, [1], 3, 1.5),
	},
	ss1: {
		desc: "<状態異常回復>味方全体のHPを回復し(50%)、状態異常を回復する",
		turn: 6,
		proc: [ss_heal(0.5), ss_abstate_cure()],
	},
	awakes: [
		Panel_boost([0,0,1,0,0,],2),
		Attr_statusup(0,200, [0,0,1,0,0,]),
		Attr_statusup(200,0, [0,0,1,0,0,]),
		Panel_boost([0,0,1,0,0,],2),
		Heal_afterbattle(10),
		Fastskill(4),
		NEFTJOD(30),
		Attr_relief([1,1,1,1,1,],10),
		Attr_statusup_sattr(0,100, [0,0,1,0,0,], 0,300, [0,0,0,1,0,]),
		Attr_statusup_sattr(100,0, [0,0,1,0,0,], 300,0, [0,0,0,1,0,]),
	],
	as2: {
		desc: "<チェイン攻撃・種族数攻撃>3チェインでダメージアップ(350%)、神族の仲間の数だけさらにアップ(100%)",
		proc: ChainDeckSpecsAttack(1.0, [1], 3, 2.5),
	},
	ss2: {
		desc: "<状態異常回復>味方全体のHPを完全回復し、状態異常を回復する",
		turn: 8,
		proc: [ss_heal(1), ss_abstate_cure()],
	},
	Lawake: [
		Attr_statusup(0,200, [0,0,1,0,0,]),
		Attr_statusup(200,0, [0,0,1,0,0,]),
	],
}