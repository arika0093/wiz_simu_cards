{
	name: "純白きゃっつ リリー&エクセリア",
	cardno: 10036,
	imageno: 12390,
	hp: 2325,
	atk: 4318,
	cost: 56,
	attr: [1,3],
	species: [0],
	alias: ["デバフ", "巨乳"],
	islegend: true,
	ape: "アイドルキャッツ2",
	as1: {
		desc: "<連撃>3チェインで敵単体を3回連続攻撃(200%)、デッキ内の精霊が持つ属性数が多いほどさらにアップ(50%)(上限値:5段階)",
		proc: add_cond(ChainDualAttack(2.0, 3, 3), as_deckinattr_num(0, 0.5)),
	},
	ss1: {
		desc: "<炸裂大魔術>スキル反射を無視し、敵単体へ水・光属性のダメージ(700%)、さらに隣接する敵に水・光属性のダメージ(700%)",
		turn: 7,
		proc: [ss_damage_explosion(7.0, [1,3]), ss_ignore_skillcounter()],
	},
	as2: {
		desc: "<連撃>3チェインで敵単体を3回連続攻撃(300%)、デッキ内の精霊が持つ属性数が多いほどさらにアップ(50%)(上限値:5段階)",
		proc: add_cond(ChainDualAttack(3.0, 3, 3), as_deckinattr_num(0, 0.5)),
	},
	ss2: {
		desc: "<炸裂大魔術>スキル反射を無視し、敵単体へ水・光属性のダメージ(1000%)、さらに隣接する敵に水・光属性のダメージ(1000%)",
		turn: 10,
		proc: [ss_damage_explosion(10.0, [1,3]), ss_ignore_skillcounter()],
	},
	awakes: [
		Costdown(20),
		Fastskill(2),
		Attr_statusup(0,200,[0,1,0,0,0,]),
		Attr_statusup(200,0,[0,1,0,0,0,]),
		Panel_boost([0,1,0,0,0,],3),
		Attr_relief([1,1,1,1,1,],10),
		Fastskill(2),
		Attr_statusup_subattr(0,500),
		Attr_statusup_subattr(500,0),
		Abstate_invalid("as_sealed"),
	],
	Lawake: [
		Statusup(0,1500),
		Abstate_invalid("ss_sealed"),
	],
}