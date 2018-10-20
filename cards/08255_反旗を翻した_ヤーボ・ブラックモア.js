{
	name: "反旗を翻した ヤーボ・ブラックモア",
	cardno: 8255,
	imageno: 10396,
	hp: 3322,
	atk: 3045,
	cost: 39,
	attr: [2,-1],
	species: [8],
	islegend: false,
	ape: "大魔道杯 in 覇眼戦線Ⅲ",
	is_dist: true,
	as1: {
		desc: "<回復・攻撃強化>雷属性の味方にHPを回復(11%)、さらに雷属性の味方に攻撃力をアップ(30%)",
		proc: [Heal(0.11, [0,0,1,0,0], 0), ChainEnhance(0.3, [0,0,1,0,0], 0)],
	},
	ss1: {
		desc: "<効果解除>敵全体のガード&ダメージブロックを解除する",
		turn: 5,
		proc: [ss_break_attrguard("all"), ss_break_dblock("all")],
	},
	awakes: [
		Panel_boost([0,0,1,0,0,],1),
		Statusup(0,200),
		Panel_boost([0,0,1,0,0,],2),
		Fastskill(1),
		Statusup(200,0),
		Attr_statusup(200,0, [0,0,1,0,0,]),
		Fastskill(2),
		Attr_relief([1,1,1,1,1,],10),
		Attr_statusup(0,200, [0,0,1,0,0,]),
		Abstate_invalid("ss_sealed"),
	],
}