{
	name: "貫く想い テーラ&ユースティティア",
	cardno: 9158,
	imageno: 11394,
	hp: 2575,
	atk: 4017,
	cost: 54,
	attr: [2,3],
	species: [8],
	islegend: true,
	ape: "幻魔特区RELOADED",
	as1: {
		desc: "<属性特効連撃>4チェインで水・闇属性の敵単体へ特効4連撃(550%)、解答が早いほどさらにアップ(70%)（上限:4段階)",
		proc: add_cond(ChainDualAttrAttack(5.5, 4, 4, [0, 1, 0, 0, 1]), as_timedep(0.5)),
	},
	ss1: {
		desc: "<詠唱多弾大魔術>スキル反射を無視し、クイズに正解した数だけ敵単体へ雷・光属性で交互に連続ダメージ(180%)(上限:15段階)",
		turn: 9,
		proc: [ss_undefined("詠唱多弾大魔術")],
	},
	awakes: [
		Panel_boost([0,0,1,0,0,],2),
		Attr_statusup(0,200, [0,0,1,0,0,]),
		Attr_statusup(200,0, [0,0,1,0,0,]),
		Panel_boost([0,0,1,0,0,],2),
		Abstate_invalid(["poison", "attr_weaken", "death_limit", "all_sealed"]),
		Fastskill(4),
		Attr_statusup_sattr(0,100, [0,0,1,0,0,], 0,300, [0,0,0,1,0,]),
		Attr_statusup_sattr(100,0, [0,0,1,0,0,], 300,0, [0,0,0,1,0,]),
		NEFTJOD(60),
		Awake_Chainboost(1),
	],
	as2: {
		desc: "<属性特効連撃>4チェインで水・闇属性の敵単体へ特効4連撃(650%)、解答が早いほどさらにアップ(70%)（上限:4段階)",
		proc: add_cond(ChainDualAttrAttack(6.5, 4, 4, [0, 1, 0, 0, 1]), as_timedep(0.5)),
	},
	ss2: {
		desc: "<詠唱多弾大魔術>スキル反射を無視し、クイズに正解した数だけ敵単体へ雷・光属性で交互に連続ダメージ(220%)(上限:15段階)",
		turn: 12,
		proc: [ss_undefined("詠唱多弾大魔術")],
	},
	Lawake: [
		Statusup(0,1500),
		Attr_relief([1,1,1,1,1,],20),
	],
}