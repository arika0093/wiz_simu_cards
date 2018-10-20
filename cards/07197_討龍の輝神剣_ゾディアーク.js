{
	name: "討龍の輝神剣 ゾディアーク",
	cardno: 7197,
	imageno: 9211,
	hp: 3564,
	atk: 3200,
	cost: 53,
	attr: [1,2],
	species: [8],
	islegend: true,
	as1: {
		desc: "<分散攻撃>3チェインで敵全体へ分散攻撃(450%)",
		proc: ChainVarianceAttack(4.5, 3),
	},
	ss1: {
		desc: "<パネル変換>ジャンルパネルを水・雷属性化",
		turn: 3,
		proc: [ss_panel_change([0,1,1,0,0])],
	},
	awakes: [
		Costdown(4),
		Panel_boost([0,1,0,0,0,],2),
		Statusup(400,0),
		Panel_boost([0,1,0,0,0,],2),
		Costdown(4),
		Abstate_invalid("as_sealed"),
		Fastskill(3),
		Attr_statusup(0,100, [0,1,0,0,0,]),
		Attr_statusup(0,200, [0,1,0,0,0,]),
		Attr_statusup(200,0, [0,1,0,0,0,]),
	],
	as2: {
		desc: "<分散攻撃>3チェインで敵全体へ分散攻撃(550%)",
		proc: ChainVarianceAttack(5.5, 3),
	},
	ss2: {
		desc: "<特殊パネル変換>ジャンルパネルを水・雷属性化し、攻撃力アップの効果を付与(100%)",
		turn: 6,
		proc: [panel_attackup(1.0), ss_panel_change([0,1,1,0,0])],
	},
	Lawake: [
		Statusup(500,0),
		Attr_statusup(0,100, [0,1,0,0,0,]),
	],
}