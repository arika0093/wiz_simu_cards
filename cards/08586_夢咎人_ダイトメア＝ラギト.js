{
	name: "夢咎人 ダイトメア＝ラギト",
	cardno: 8586,
	imageno: 10757,
	hp: 2875,
	atk: 3841,
	cost: 54,
	attr: [0,2],
	species: [8],
	disable: true,
	islegend: true,
	ape: "黄昏メアレスⅢ",
	as1: {
		desc: "<連撃>味方のMAXHP10%を使い、敵単体を3回連続攻撃(600%)",
		proc: add_cond(ChainDualAttack(6.0, 0, 3), as_consume_all(0.10)),
	},
	ss1: {
		desc: "<狂暴化> 5ターンの間、デタラメな方向に攻撃するようになるが、必ずクリティカルが出るようになる",
		turn: 1,
		proc: [ss_berserk_s(5)],
	},
	awakes: [
		Panel_boost([1,0,0,0,0,],2),
		Attr_statusup(0,200, [1,0,1,0,0,]),
		Attr_statusup(200,0, [1,0,1,0,0,]),
		Panel_boost([1,0,1,0,0,],2),
		Fastskill(1),
		NEFTJOD(30),
		Attr_relief([1,1,1,1,1,],10),
		Attr_statusup_sattr(0,100, [1,0,0,0,0,], 0,300, [0,0,1,0,0,]),
		Attr_statusup_sattr(100,0, [1,0,0,0,0,], 300,0, [0,0,1,0,0,]),
		Abstate_invalid(["as_sealed", "ss_sealed"]),
	],
	as2: {
		desc: "<連撃>味方のMAXHP10%を使い、敵単体を3回連続攻撃(700%)",
		proc: add_cond(ChainDualAttack(7.0, 0, 3), as_consume_all(0.10)),
	},
	ss2: {
		desc: "<多弾魔術>スキル反射を無視し、敵単体へ火・雷属性の5回連続ダメージ(650%)",
		turn: 6,
		proc: [ss_damage_s(6.5, [0,2], 5), ss_ignore_skillcounter()],
	},
	Lawake: [
		Attr_statusup(0,200, [1,0,1,0,0,]),
		Statusup(0,1000),
	],
}