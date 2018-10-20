{
	name: "超進化究極変貌 オオミコシガミ",
	cardno: 6883,
	imageno: 8855,
	hp: 3021,
	atk: 3201,
	cost: 38,
	attr: [0,-1],
	species: [6],
	islegend: true,
	ape: "八百万神秘譚Ⅲ(Z)",
	is_dist: true,
	as1: {
		desc: "<ギャンブル攻撃>4チェインでダメージがイチかバチかアップ(300%~600%)",
		proc: ChainStakesAttack(3.0, 6.0, 4),
	},
	ss1: {
		desc: "<ステータスアップ>味方全体のHPを500アップ(上限値:2000)、さらにHPを回復(25%)",
		turn: 6,
		proc: [ss_statusup_all([500, 0], [2000, 2000], -1), ss_heal(0.25)],
	},
	awakes: [
		Panel_boost([1,0,0,0,0,],1),
		Statusup(200,0),
		Fastskill(1),
		Awake_noeffect("ゴールド取得量アップ",1),
		Attr_statusup(0,200, [1,0,0,0,0,]),
		Fastskill(2),
		Attr_relief([0,0,1,0,0,],10),
		Awake_noeffect("経験値取得量アップ",1),
		Attr_statusup(200,0, [1,0,0,0,0,]),
		Panel_boost([1,0,0,0,0,],2),
	],
	as2: {
		desc: "<ギャンブル攻撃>4チェインでダメージがイチかバチかアップ(400%~700%)",
		proc: ChainStakesAttack(4.0, 7.0, 4),
	},
	ss2: {
		desc: "<ステータスアップ>味方全体のHPを750アップ(上限値:2000)、さらにHPを回復(50%)",
		turn: 9,
		proc: [ss_statusup_all([750, 0], [2000, 2000], -1), ss_heal(0.5)],
	},
	Lawake: [
		NEFTJOD(30),
		Attr_statusup(0,100, [1,0,0,0,0,]),
	],
}