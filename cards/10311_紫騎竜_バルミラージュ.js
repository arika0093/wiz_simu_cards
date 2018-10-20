{
	name: "紫騎竜 バルミラージュ",
	cardno: 10311,
	imageno: 12698,
	hp: 2145,
	atk: 6029,
	cost: 41,
	attr: [2,-1],
	species: [0],
	islegend: true,
	ape: "レイド ドラゴンプロジェクト",
	is_dist: true,
	as1: {
		desc: "<属性特効>水属性の敵単体へ特効ダメージ(250%)、解答が早いほどさらにアップ(60%)(上限:4段階)",
		proc: add_cond(ChainAttrAttack(2.5, 0, [0,1,0,0,0]), as_timedep(0.6)),
	},
	ss1: {
		desc: "<時限大魔術>1ターン溜めた後、スキル反射を無視し、3ターン後に敵単体へ雷属性のダメージ(1000%)(上限設置数:5)",
		turn: 1,
		charged: 1,
		proc: [ss_damage_timebomb(10, [2], 1, 3), ss_ignore_skillcounter()],
	},
	awakes: [
		Panel_boost([0,0,1,0,0,],2),
		Attr_statusup(0,300, [0,0,1,0,0,]),
		Attr_statusup(300,0, [0,0,1,0,0,]),
		Panel_boost([0,0,1,0,0,],2),
		Attr_relief([1,1,1,1,1,],10),
		NEFTJOD(30),
		Abstate_invalid("ss_sealed"),
		Attr_statusup_oattr(0,300, [0,0,1,0,0,]),
		Attr_statusup_oattr(300,0, [0,0,1,0,0,]),
		Fastskill(1),
	],
	as2: {
		desc: "<属性特効>水属性の敵単体へ特効ダメージ(350%)、解答が早いほどさらにアップ(60%)(上限:4段階)",
		proc: add_cond(ChainAttrAttack(3.5, 0, [0,1,0,0,0]), as_timedep(0.6)),
	},
	ss2: {
		desc: "<時限大魔術>1ターン溜めた後、スキル反射を無視し、3ターン後に敵単体へ雷属性のダメージ(2000%)(上限設置数:5)",
		turn: 2,
		charged: 1,
		proc: [ss_damage_timebomb(20, [2], 1, 3), ss_ignore_skillcounter()],
	},
	Lawake: [
		Attr_statusup_oattr(200,0, [0,0,1,0,0,]),
		Statusup(500,0),
	],
}