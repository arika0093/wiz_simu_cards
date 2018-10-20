{
	name: "逆撃の屠竜者 イケル・ロートレック",
	cardno: 7399,
	imageno: 9454,
	hp: 6002,
	atk: 3504,
	cost: 59,
	attr: [1,-1],
	species: [0],
	islegend: true,
	ape: "心竜天翔 Rising Dragon",
	as1: {
		desc: "<チェイン攻撃>10チェインでダメージアップ(800%)",
		proc: ChainAttack(8.0, 10),
	},
	ss1: {
		desc: "<挑発>4ターン溜めた後、30ターン敵の攻撃を自分に集めダメージを50%軽減する",
		turn: 3,
		charged: 4,
		proc: [ss_provocate(0.5, 30)],
	},
	awakes: [
		Attr_statusup(100,0, [0,1,0,0,0,]),
		Fastskill(3),
		Panel_boost([0,1,0,0,0,],2),
		NEFTJOD(30),
		Awake_noeffect("ゴールド取得量アップ",1),
		Panel_boost([0,1,0,0,0,],2),
		Attr_statusup(0,200, [0,1,0,0,0,]),
		Attr_statusup(200,0, [0,1,0,0,0,]),
		Attr_statusup(0,200, [0,1,0,0,0,]),
		Abstate_invalid("as_sealed"),
	],
	as2: {
		desc: "<チェイン攻撃>10チェインでダメージアップ(900%)",
		proc: ChainAttack(9.0, 10),
	},
	ss2: {
		desc: "<鉄壁・極>3ターンの間、攻撃や状態異常攻撃など様々な効果を無効化する(スキル発動中は行動不可)",
		turn: 7,
		proc: [ss_impregnable_all(3)],
	},
	Lawake: [
		Attr_statusup(0,200, [0,1,0,0,0,]),
	],
}