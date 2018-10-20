{
	name: "輝光の影で暗躍す シリス・アロキア",
	cardno: 10673,
	imageno: 13117,
	imageno_prefix: "u8DCdL_",
	hp: 2535,
	atk: 4828,
	cost: 62,
	attr: [0,3],
	species: [8],
	islegend: true,
	ape: "Birth of New Order 2",
	as1: {
		desc: "<全体攻撃>敵全体へダメージ(150%)、10チェインでさらにダメージアップ(200%)",
		proc: [ChainAllAttack(1.5, 0), ChainAllAttack(3.5, 10)],
	},
	ss1: {
		desc: "<大魔術>スキル反射を無視し、敵全体へ無属性のダメージ(750%)",
		turn: 7,
		proc: [ss_damage_all(7.5, [-1]), ss_ignore_skillcounter()],
	},
	awakes: [
		Panel_boost([1,0,0,0,0,],2),
		Attr_statusup(0,200, [1,0,0,0,0,]),
		Attr_statusup(200,0, [1,0,0,0,0,]),
		Panel_boost([1,0,0,0,0,],2),
		Attr_relief([0,0,0,1,1,],30),
		Awake_secondfast(5),
		Attr_statusup_subattr(0, 500),
		Attr_statusup_subattr(500, 0),
		Abstate_invalid(["as_sealed", "ss_sealed"]),
		Awake_damage_multiple(1.1, 500),
	],
	as2: {
		desc: "<全体攻撃>敵全体へダメージ(180%)、10チェインでさらにダメージアップ(200%)",
		proc: [ChainAllAttack(1.8, 0), ChainAllAttack(3.8, 10)],
	},
	ss2: {
		desc: "<大魔術>スキル反射を無視し、敵全体へ無属性のダメージ(750%)",
		turn: 7,
		proc: [ss_damage_all(7.5, [-1]), ss_ignore_skillcounter()],
	},
	Lawake: [
		Statusup(0,2000),
	],
}