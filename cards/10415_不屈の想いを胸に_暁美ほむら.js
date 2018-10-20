{
	name: "不屈の想いを胸に 暁美ほむら",
	cardno: 10415,
	imageno: 12754,
	imageno_prefix: "E4pSBg_",
	hp: 2325,
	atk: 5321,
	cost: 45,
	attr: [1,4],
	species: [9],
	islegend: true,
	ape: "コラボ(魔法少女まどか☆マギカ)",
	as1: {
		desc: "<連撃>敵単体を3回連続攻撃(200%)、解答が2秒未満でさらにアップ(250%)(上限:2段階)",
		proc: add_cond(ChainDualAttack(2.0, 0, 3), as_timedep(2.5, 1)),
	},
	ss1: {
		desc: "<解答時間停止>3ターンの間、解答時間を停止する(一部特殊パネルを除く)(※協力バトル及び一部クエストは無効)",
		turn: 6,
		proc: [ss_astime_ext(20, 3)],
	},
	awakes: [
		Awake_noeffect("アンサーリセット",1),
		Attr_statusup(0,200, [0,1,0,0,0,]),
		Attr_statusup(200,0, [0,1,0,0,0,]),
		Panel_boost([0,1,0,0,0,],2),
		Abstate_invalid("ss_sealed"),
		Attr_statusup_subattr(0, 500),
		Attr_statusup_subattr(500, 0),
		Fastskill(2),
		Panel_boost([0,1,0,0,0,],2),
		Fastskill(2),
	],
	as2: {
		desc: "<連撃>敵単体を3回連続攻撃(300%)、解答が2秒未満でさらにアップ(250%)(上限:2段階)",
		proc: add_cond(ChainDualAttack(3.0, 0, 3), as_timedep(2.5, 1)),
	},
	ss2: {
		desc: "<解答時間停止>5ターンの間、解答時間を停止する(一部特殊パネルを除く)(※協力バトル及び一部クエストは無効)",
		turn: 9,
		proc: [ss_astime_ext(20, 5)],
	},
	Lawake: [
		Attr_statusup_subattr(0, 200),
		Statusup(1000,0),
	],
}