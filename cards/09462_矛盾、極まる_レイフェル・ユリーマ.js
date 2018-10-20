{
	name: "矛盾、極まる レイフェル・ユリーマ",
	cardno: 9462,
	imageno: 11715,
	hp: 2745,
	atk: 6815,
	cost: 49,
	attr: [1,-1],
	species: [3],
	islegend: true,
	ape: "大魔道杯 in ロストエデン",
	is_dist: true,
	as1: {
		desc: "<属性特効>火属性の敵単体へ特効ダメージ(300%)、HP80%以上でさらにダメージアップ(150%)",
		proc: [ChainAttrAttack(3.0, 0, [1,0,0,0,0]), add_cond(ChainAttrAttack(4.5, 0, [1,0,0,0,0]), when_hp_more(0.80))],
	},
	ss1: {
		desc: "<反動大魔術>スキル反射を無視し、敵全体へ水属性のダメージ(1050%)(スキル使用後、3ターン封印状態に)",
		turn: 7,
		proc: [ss_damage_all(10.5, [1]), ss_allsealed_own(3), ss_ignore_skillcounter()],
	},
	awakes: [
		Panel_boost([0,1,0,0,0,],2),
		Attr_statusup_oattr(0,400, [0,1,0,0,0,]),
		Attr_statusup_oattr(400,0, [0,1,0,0,0,]),
		Panel_boost([0,1,0,0,0,],2),
		Fastskill(3),
		Attr_statusup(0,300, [0,1,0,0,0,]),
		Attr_statusup(300,0, [0,1,0,0,0,]),
		Costdown(20),
		Abstate_invalid("ss_sealed"),
		Awake_damage_multiple(1.1, 500),
	],
	as2: {
		desc: "<属性特効>火属性の敵単体へ特効ダメージ(400%)、HP80%以上でさらにダメージアップ(150%)",
		proc: [ChainAttrAttack(4.0, 0, [1,0,0,0,0]), add_cond(ChainAttrAttack(5.5, 0, [1,0,0,0,0]), when_hp_more(0.80))],
	},
	ss2: {
		desc: "<反動大魔術>スキル反射を無視し、敵全体へ水属性のダメージ(1350%)(スキル使用後、3ターン封印状態に)",
		turn: 10,
		proc: [ss_damage_all(13.5, [1]), ss_allsealed_own(3), ss_ignore_skillcounter()],
	},
	Lawake: [
		Statusup(0,1000),
		NEFTJOD(30),
	],
}