{
	name: "スイートメモリー パルフェ・ミーロ",
	cardno: 7954,
	imageno: 10067,
	hp: 3013,
	atk: 4043,
	cost: 44,
	attr: [0,-1],
	species: [9],
	islegend: true,
	ape: "大魔道杯 in ショコラフォレスト",
	is_dist: true,
	as1: {
		desc: "<属性特効>HP80%以上で雷属性の敵単体へ特効ダメージ(425%)",
		proc: add_cond(ChainAttrAttack(4.25, 0, [0, 0, 1, 0, 0]), when_hp_more(0.80)),
	},
	ss1: {
		desc: "<ステータスアップ>味方全体のHPを1000ダウンし、攻撃力1000アップ(上限値:2000)",
		turn: 2,
		proc: [ss_statusup_all([-1000, 1000], [2000, 2000], -1)],
	},
	awakes: [
		Panel_boost([1,0,0,0,0,],1),
		Statusup(200,0),
		Statusup(0,200),
		Attr_statusup(300,0, [1,0,0,0,0,]),
		Panel_boost([1,0,0,0,0,],2),
		Attr_statusup(0,300, [1,0,0,0,0,]),
		Fastskill(2),
		Attr_relief([1,1,0,0,0,],20),
		NEFTJOD(30),
		Abstate_invalid("ss_sealed"),
	],
	as2: {
		desc: "<属性特効>HP80%以上で雷属性の敵単体へ特効ダメージ(525%)",
		proc: add_cond(ChainAttrAttack(5.25, 0, [0, 0, 1, 0, 0]), when_hp_more(0.80)),
	},
	ss2: {
		desc: "<ブースト>4ターンの間、味方のMAXHPを20%消費し、味方の攻撃力をアップ(150%)。さらに極稀にクリティカル",
		turn: 6,
		proc: [ss_boost_enhance_all(1.5, 4, 0.2, [1,1,1,1,1])],
	},
	Lawake: [
		Statusup(0,500),
		Statusup(400,0),
	],
}