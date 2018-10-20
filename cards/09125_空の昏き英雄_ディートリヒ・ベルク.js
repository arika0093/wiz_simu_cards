{
	name: "空の昏き英雄 ディートリヒ・ベルク",
	cardno: 9125,
	imageno: 6469,
	hp: 2784,
	atk: 4222,
	cost: 57,
	attr: [0,2],
	species: [8],
	disable: true,
	alias: ["元帥"],
	islegend: true,
	ape: "ドルキマスⅠ",
	as1: {
		desc: "<分散攻撃>4チェインで敵全体へ分散攻撃(500%)",
		proc: ChainVarianceAttack(5.0, 4),
	},
	ss1: {
		desc: "<特殊パネル変換>味方全体のMAXHPの50%を使い、ジャンルパネルにチェインがプラス3の効果を付与",
		turn: 5,
		proc: [panel_chainplus(3), ss_consume_all(0.5)],
	},
	awakes: [
		Panel_boost([1,0,0,0,0,],2),
		Attr_statusup(0,200, [1,0,1,0,0,]),
		Attr_statusup(200,0, [1,0,1,0,0,]),
		Panel_boost([1,0,0,0,0,],2),
		NEFTJOD(30),
		Fastskill(4),
		Attr_relief([0,1,0,0,0,],20),
		Attr_statusup_sattr(0,100, [1,0,0,0,0,], 0,300, [0,0,1,0,0,]),
		Attr_statusup_sattr(100,0, [1,0,0,0,0,], 300,0, [0,0,1,0,0,]),
		Abstate_invalid(["as_sealed", "ss_sealed"]),
	],
	as2: {
		desc: "<分散攻撃>4チェインで敵全体へ分散攻撃(600%)",
		proc: ChainVarianceAttack(6.0, 4),
	},
	ss2: {
		desc: "<特殊パネル変換>味方全体のMAXHPの50%を使い、ジャンルパネルにチェインがプラス4の効果を付与",
		turn: 6,
		proc: [panel_chainplus(4), ss_consume_all(0.5)],
	},
	Lawake: [
		Attr_statusup(0,200, [1,0,1,0,0,]),
		Statusup(0,1000),
	],
}