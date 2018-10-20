{
	name: "時を呼ぶ ステイシー・マーキュリー",
	cardno: 8707,
	imageno: 10883,
	hp: 2831,
	atk: 3842,
	cost: 54,
	attr: [0,3],
	species: [1],
	islegend: true,
	ape: "エタクロⅡ",
	as1: {
		desc: "<快調攻撃>残りHPが80%以上でダメージアップ(400%)",
		proc: add_cond(ChainAttack(4.0, 0), when_hp_more(0.8)),
	},
	ss1: {
		desc: "<パネル変換>ジャンルパネルを火・光属性化",
		turn: 3,
		proc: [ss_panel_change([1,0,0,1,0])],
	},
	awakes: [
		Panel_boost([1,0,0,0,0,],2),
		Attr_statusup(0,200, [1,0,0,0,0,]),
		Attr_statusup(200,0, [1,0,0,0,0,]),
		Panel_boost([1,0,0,0,0,],2),
		Fastskill(3),
		Attr_relief([1,1,1,1,1,],10),
		Attr_statusup_sattr(0,100, [1,0,0,0,0,], 0,300, [0,0,0,1,0,]),
		Attr_statusup_sattr(100,0, [1,0,0,0,0,], 300,0, [0,0,0,1,0,]),
		NEFTJOD(30),
		Abstate_invalid("ss_sealed"),
	],
	as2: {
		desc: "<快調攻撃>残りHPが80%以上でダメージアップ(400%)、7チェインで更にアップ(400%)",
		proc: [add_cond(ChainAttack(4.0, 0), when_hp_more(0.8)), add_cond(ChainAttack(8.0, 7), when_hp_more(0.8))],
	},
	ss2: {
		desc: "<特殊パネル変換>ジャンルパネルを火・光属性化し、チェインがプラス2の効果を付与",
		turn: 6,
		proc: [ss_panel_change([1,0,0,1,0]), panel_chainplus(2)],
	},
	Lawake: [
		Statusup(0,1500),
		Attr_statusup(0,100, [1,0,0,0,0,]),
	],
}