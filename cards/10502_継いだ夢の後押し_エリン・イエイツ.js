{
	name: "継いだ夢の後押し エリン・イエイツ",
	cardno: 10502,
	imageno: 12923,
	hp: 4615,
	atk: 1512,
	cost: 43,
	attr: [1,3],
	species: [8],
	islegend: true,
	ape: "MARELESS2 夢現の狭間",
	as1: {
		desc: "<攻撃>敵単体へのダメージアップ(900%)、ジャンルパネルが3色だとさらにアップ(1000%)",
		proc: ChainPanelsAttack(9.0, 9.0, 19.0, 0),
	},
	ss1: {
		desc: "<特殊パネル変換>ジャンルパネルに攻撃力アップの効果を付与(30%)、パネルの色が3色だとさらにアップ(270%)",
		turn: 5,
		proc: [panel_attackup(0.3), panel_attackup(3.0)],
	},
	awakes: [
		Panel_boost([0,1,0,0,0,],4),
		Attr_statusup(0,200, [0,1,0,0,0,]),
		Attr_statusup(200,0, [0,1,0,0,0,]),
		Attr_relief([1,1,1,1,1,],10),
		Attr_statusup_subattr(0, 500),
		Attr_statusup_subattr(500, 0),
		Fastskill(4),
		Abstate_invalid("ss_sealed"),
		Awake_damage_multiple(1.1, 500),
		Awake_KillHealSkill(3, 0.02)//3体で2%回復
	],
	as2: {
		desc: "<攻撃>敵単体へのダメージアップ(1000%)、ジャンルパネルが3色だとさらにアップ(1000%)",
		proc: ChainPanelsAttack(10.0, 10.0, 20.0, 0),
	},
	ss2: {
		desc: "<特殊パネル変換>ジャンルパネルに攻撃力アップの効果を付与(50%)、パネルの色が3色だとさらにアップ(450%)",
		turn: 8,
		proc: [panel_attackup(0.5), panel_attackup(5.0)],
	},
	Lawake: [
		Abstate_invalid("as_sealed"),
		Statusup(0,1500),
	],
}