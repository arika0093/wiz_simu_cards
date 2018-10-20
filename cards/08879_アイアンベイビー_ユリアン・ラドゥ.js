{
	name: "アイアンベイビー ユリアン・ラドゥ",
	cardno: 8879,
	imageno: 11088,
	hp: 5845,
	atk: 1813,
	cost: 42,
	attr: [2,-1],
	species: [2],
	islegend: false,
	is_dist: true,
	ape: "大魔道杯 in 聖サタニック女学院Ⅱ",
	as1: {
		desc: "<回復・攻撃強化>雷属性の味方を回復(11%)し、デッキに単色の精霊が多いほど、攻撃力をアップ(15%)（上限:5段階)",
		proc: [Heal(0.11, [0,0,1,0,0]), add_cond(ChainEnhance(0, [0,0,1,0,0], 0), as_singleattr_num(0, 0.15))],
	},
	ss1: {
		desc: "<AS発動時間延長>10ターンの間、アンサースキル発動時間を5秒延長する(上限値:20秒) ",
		turn: 6,
		proc: [ss_astime_ext(5, 10)],
	},
	awakes: [
		Panel_boost([0,0,1,0,0,],1),
		Statusup(0,300),
		Statusup(300,0),
		Panel_boost([0,0,1,0,0,],2),
		Fastskill(1),
		Heal_afterbattle(10),
		Fastskill(2),
		Attr_statusup_oattr(0,300,[0,0,1,0,0,]),
		Attr_statusup_oattr(300,0,[0,0,1,0,0,]),
		Awake_noeffect("アンサースキル延長",3),
	],
}