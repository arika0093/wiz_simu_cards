{
	name: "ふわふわ夏祭り ケイトリン・ケイ",
	cardno: 10448,
	imageno: 12863,
	hp: 5985,
	atk: 2018,
	cost: 40,
	attr: [0,-1],
	species: [9],
	islegend: true,
	is_dist: true,
	ape: "大魔道杯 in 夏の祝祭",
	as1: {
		desc: "<攻撃強化・ガード>10チェインで火属性の味方の攻撃力をアップ(90%)し、さらに全属性のダメージを15%軽減",
		proc: [ChainEnhance(0.9, [1,0,0,0,0], 10), as_guard(0.15, [1,1,1,1,1], 10)],
	},
	ss1: {
		desc: "<ステータスアップ>10ターン溜めた後、味方全体の攻撃力とHPを5000アップ(上限値:5000)",
		turn: 4,
		charged: 10,
		proc: [ss_statusup_all([5000, 5000], [5000, 5000], -1)],
	},
	as2: {
		desc: "<攻撃強化・ガード>10チェインで火属性の味方の攻撃力をアップ(120%)し、さらに全属性のダメージを15%軽減",
		proc: [ChainEnhance(1.2, [1,0,0,0,0], 10), as_guard(0.15, [1,1,1,1,1], 10)],
	},
	ss2: {
		desc: "<回復>チェインプラス3の効果、さらに味方全体のHPを回復する(50%)",
		turn: 7,
		proc: [ss_addchain(3), ss_heal(0.5)],
	},
	awakes: [
		Fastskill(3),
		Attr_statusup_oattr(0,300,[1,0,0,0,0,]),
		Attr_statusup_oattr(300,0,[1,0,0,0,0,]),
		Panel_boost([1,0,0,0,0,],1),
		NEFTJOD(30),
		Attr_statusup(0,300,[1,0,0,0,0,]),
		Attr_statusup(300,0,[1,0,0,0,0,]),
		Attr_relief([0,0,1,0,0,],10),
		Awake_noeffect("行動見破り",1),
		Abstate_invalid("ss_sealed"),
	],
	Lawake: [
		Attr_statusup_oattr(0,200,[1,0,0,0,0,]),
		Statusup(500,0),
	],
}