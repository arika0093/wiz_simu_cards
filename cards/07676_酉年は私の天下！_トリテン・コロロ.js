{
	name: "酉年は私の天下！ トリテン・コロロ",
	cardno: 7676,
	imageno: 9751,
	hp: 2426,
	atk: 500,
	cost: 40,
	attr: [2,-1],
	species: [9],
	islegend: true,
	ape: "レイド Gate Defenders 申(さる)ものは追わず。酉(とり)あえずお餅でもどうぞ。",
	is_dist: true,
	as1: {
		desc: "<攻撃>敵単体へのダメージアップ、解答が早いほどさらにアップ(基本:300%, 3秒台:500%, 2秒台:700%, 1秒台:900%, 0秒台:1100%)",
		proc: add_cond(ChainAttack(3.0, 0), as_timedep(2.0)),
	},
	ss1: {
		desc: "<特殊パネル変換>ジャンルパネルにダメージ15%軽減と回復の効果を付与(10%)",
		turn: 6,
		proc: [panel_attr_guard([1,1,1,1,1], 0.15), panel_healally(0.1)],
	},
	awakes: [
		Panel_boost([0,0,1,0,0,],1),
		Statusup(0,200),
		Statusup(200,0),
		Attr_statusup(0,200, [0,0,1,0,0,]),
		Fastskill(1),
		Attr_statusup(200,0, [0,0,1,0,0,]),
		Panel_boost([0,0,1,0,0,],2),
		Attr_relief([0,0,1,0,0,],10),
		Awake_noeffect("経験値取得量アップ",1),
		Fastskill(2),
	],
	as2: {
		desc: "<攻撃>敵単体へのダメージアップ、解答が早いほどさらにアップ(基本:400%, 3秒台:600%, 2秒台:800%, 1秒台:1000%, 0秒台:1200%)",
		proc: add_cond(ChainAttack(4.0, 0), as_timedep(2.0)),
	},
	ss2: {
		desc: "<特殊パネル変換>ジャンルパネルにダメージ25%軽減と回復の効果を付与(10%)",
		turn: 8,
		proc: [panel_attr_guard([1,1,1,1,1], 0.25), panel_healally(0.1)],
	},
	Lawake: [
		Attr_statusup(0,100, [0,0,1,0,0,]),
		Statusup(500,0),
	],
}