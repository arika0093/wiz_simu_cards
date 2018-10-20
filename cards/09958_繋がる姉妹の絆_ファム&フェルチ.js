{
	name: "繋がる姉妹の絆 ファム&フェルチ",
	cardno: 9958,
	imageno: 12307,
	imageno_prefix: "F2xTuL_",
	hp: 6555,
	atk: 1599,
	cost: 56,
	attr: [2,0],
	species: [9],
	islegend: true,
	ape: "周年記念精霊(5周年)",
	alias: ["ちっぱい"],
	as1: {
		desc: "<回復>火・雷属性の味方を回復(12%)、パネルの色が2色以上でさらに回復(6%)",
		proc: ChainPanelsHeal(0.12, 0.18, 0.18, [1,0,1,0,0], 0),
	},
	ss1: {
		desc: "<特殊パネル変換>ジャンルパネルにチェインとスキルチャージの効果を付与(1、1)、パネルの色が、増す度さらにアップ(上限値:3、2)",
		turn: 3,
		proc: [panel_multieffect([panel_chainplus(1), panel_skillboost(1)]), panel_multieffect([panel_chainplus(2), panel_skillboost(2)]), panel_multieffect([panel_chainplus(3), panel_skillboost(2)])],
	},
	awakes: [
		Panel_boost([0,0,1,0,0,],2),
		Attr_statusup(0,200, [1,0,1,0,0,]),
		Attr_statusup(200,0, [1,0,1,0,0,]),
		Panel_boost([0,0,1,0,0,],2),
		Attr_relief([1,1,1,1,1,],10),
		Awake_noeffect("心眼・怒",1),
		Abstate_invalid(["as_sealed", "ss_sealed"]),
		Attr_statusup_sattr(0,100, [0,0,1,0,0,], 0,300, [1,0,0,0,0,]),
		Attr_statusup_sattr(100,0, [0,0,1,0,0,], 300,0, [1,0,0,0,0,]),
		Heal_afterbattle(10),
	],
	as2: {
		desc: "<回復>火・雷属性の味方を回復(15%)、パネルの色が2色以上でさらに回復(6%)",
		proc: ChainPanelsHeal(0.15, 0.21, 0.21, [1,0,1,0,0], 0),
	},
	ss2: {
		desc: "<特殊パネル変換>ジャンルパネルにチェインとスキルチャージの効果を付与(1、1)、パネルの色が、増す度さらにアップ(上限値:3、2)",
		turn: 5,
		proc: [panel_multieffect([panel_chainplus(2), panel_skillboost(1)]), panel_multieffect([panel_chainplus(3), panel_skillboost(2)]), panel_multieffect([panel_chainplus(5), panel_skillboost(3)])],
	},
	Lawake: [
		Attr_statusup_sattr(0,100, [0,0,1,0,0,], 0,100, [1,0,0,0,0,]),
		Statusup(500,0),
	],
}