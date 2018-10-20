{
	name: "宇宙、ぞなもし リルム・ロロット",
	cardno: 10538,
	imageno: 12963,
	imageno_prefix: "Ac7W69_",
	hp: 2505,
	atk: 7841,
	cost: 54,
	attr: [2,-1],
	species: [9],
	islegend: true,
	ape: "ゴールデンアワード2018",
	as1: {
		desc: "<連撃>敵単体を6回連続攻撃(250%)、解答が早いほどさらにアップ(70%)(上限:4段階)",
		proc: add_cond(ChainDualAttack(2.5, 0, 6), as_timedep(0.7)),
	},
	ss1: {
		desc: "<パネル爆破大魔術>スキル反射を無視し、パネルを消費(一部の特殊なパネルを除く)し、消費したパネルの属性の数だけ敵全体へダメージ(200%)",
		turn: 5,
		proc: [ss_PanelBurningDamage_all(2)],
	},
	awakes: [
		Panel_boost([0,0,1,0,0,],2),
		Attr_statusup(0,400, [0,0,1,0,0,]),
		Attr_statusup(400,0, [0,0,1,0,0,]),
		Fastskill(4),
		Panel_boost([0,0,1,0,0,],2),
		Attr_relief([1,1,1,1,1,],10),
		Attr_statusup_oattr(0,400, [0,0,1,0,0,]),
		Attr_statusup_oattr(400,0, [0,0,1,0,0,]),
		Awake_damage_multiple(1.1, 500),
		Awake_noeffect("選ばれし者の栄誉",1),
	],
	as2: {
		desc: "<連撃>敵単体を6回連続攻撃(350%)、解答が早いほどさらにアップ(70%)(上限:4段階)",
		proc: add_cond(ChainDualAttack(3.5, 0, 6), as_timedep(0.7)),
	},
	ss2: {
		desc: "<パネル爆破大魔術>スキル反射を無視し、パネルを消費(一部の特殊なパネルを除く)し、消費したパネルの属性の数だけ敵全体へダメージ(500%)",
		turn: 8,
		proc: [ss_PanelBurningDamage_all(5)],
	},
	Lawake: [
		Statusup(0,1500),
		Abstate_invalid("ss_sealed"),
	],
}