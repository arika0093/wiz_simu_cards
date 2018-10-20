{
	name: "浸透する闇の覇眼 セツナ",
	cardno: 10470,
	imageno: 12886,
	hp: 2315,
	atk: 3821,
	cost: 51,
	attr: [1,2],
	species: [8],
	islegend: true,
	ape: "覇眼戦線Ⅳ",
	is_dist: true,
	as1: {
		desc: "<全体攻撃>敵全体へダメージ(150%)、5チェインで更にダメージアップ(50%)",
		proc: [ChainAllAttack(1.5, 0), ChainAllAttack(2.0, 5)],
	},
	ss1: {
		desc: "<詠唱多弾大魔術>スキル反射を無視し、クイズに正解した数だけ敵単体へ水・雷属性で交互に連続ダメージ(140%)(上限:15段階)",
		turn: 9,
		proc: [ss_undefined("詠唱多弾大魔術")],
	},
	awakes: [
		Panel_boost([0,1,0,0,0,],2),
		Attr_statusup(0,200, [0,1,0,0,0,]),
		Attr_statusup(200,0, [0,1,0,0,0,]),
		Panel_boost([0,1,0,0,0,],2),
		NEFTJOD(30),
		Fastskill(2),
		Abstate_invalid("ss_sealed"),
		Attr_statusup_sattr(0,100, [0,1,0,0,0,], 0,200, [0,0,1,0,0,]),
		Attr_statusup_sattr(100,0, [0,1,0,0,0,], 200,0, [0,0,1,0,0,]),
		Fastskill(2),
	],
	as2: {
		desc: "<全体攻撃>敵全体へダメージ(180%)、5チェインで更にダメージアップ(50%)",
		proc: [ChainAllAttack(1.8, 0), ChainAllAttack(2.3, 5)],
	},
	ss2: {
		desc: "<詠唱多弾大魔術>スキル反射を無視し、クイズに正解した数だけ敵単体へ水・雷属性で交互に連続ダメージ(180%)(上限:15段階)",
		turn: 12,
		proc: [ss_undefined("詠唱多弾大魔術")],
	},
	Lawake: [
		Attr_statusup(0,200, [0,1,0,0,0,]),
		Statusup(500,0),
	],
}