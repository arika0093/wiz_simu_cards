{
	name: "いつも仲良し さくら&知世",
	cardno: 10339,
	imageno: 12731,
	imageno_prefix: "S5zpwx_",
	hp: 2715,
	atk: 4219,
	cost: 31,
	attr: [0,3],
	species: [9],
	islegend: true,
	ape: "コラボ(カードキャプターさくら)",
	as1: {
		desc: "<連撃>敵単体を4回連続攻撃(200%)、10チェインで更にダメージアップ(700%)",
		proc: [ChainDualAttack(2.0, 0, 4), ChainDualAttack(9.0, 10, 4)],
	},
	ss1: {
		desc: "<残滅大魔術>6ターン溜めた後、スキル反射を無視し、敵全体へ光属性のダメージ(1200%)、さらに10ターンの間、光属性のダメージ(1200%)",
		turn: 6,
		charged: 6,
		proc: [ss_continue_damage(12.0, 12.0, [3], 10), ss_ignore_skillcounter()],
	},
	awakes: [
		Panel_boost([1,0,0,0,0,],2),
		Attr_statusup(0,200, [1,0,0,0,0,]),
		Attr_statusup(200,0, [1,0,0,0,0,]),
		Panel_boost([1,0,0,0,0,],2),
		Fastskill(3),
		Attr_statusup_subattr(0, 500),
		Attr_statusup_subattr(500, 0),
		Fastskill(3),
		Abstate_invalid("ss_sealed"),
		Awake_noeffect("行動見破り",1),
	],
	as2: {
		desc: "<連撃>敵単体を4回連続攻撃(300%)、10チェインで更にダメージアップ(700%)",
		proc: [ChainDualAttack(3.0, 0, 4), ChainDualAttack(10.0, 10, 4)],
	},
	ss2: {
		desc: "<残滅大魔術>6ターン溜めた後、スキル反射を無視し、敵全体へ光属性のダメージ(1200%)、さらに10ターンの間、光属性のダメージ(1200%)",
		turn: 6,
		charged: 6,
		proc: [ss_continue_damage(12.0, 12.0, [3], 10), ss_ignore_skillcounter()],
	},
	Lawake: [
		Statusup(0,2000),
	],
}