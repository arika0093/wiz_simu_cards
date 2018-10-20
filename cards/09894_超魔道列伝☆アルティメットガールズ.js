{
	name: "超魔道列伝☆アルティメットガールズ",
	cardno: 9894,
	imageno: 12241,
	hp: 1095,
	atk: 4568,
	cost: 50,
	attr: [1,4],
	species: [9],
	islegend: true,
	ape: "英雄凱旋大魔道杯",
	is_dist: true,
	as1: {
		desc: "<連撃>敵単体を3回連続攻撃(200%)、解答時間が早いほどさらにアップ(70%)(上限:4段階)",
		proc: add_cond(ChainDualAttack(2.0, 0, 3), as_timedep(0.7)),
	},
	ss1: {
		desc: "<ブースト>1ターンの間、MAXHPを毎ターン35%消費し、攻撃力をアップ(1100%)。さらに極稀にクリティカル",
		turn: 10,
		proc: [ss_boost_enhance_s(11.0, 1, 0.35)],
	},
	awakes: [
		Panel_boost([0,1,0,0,0,],2),
		Attr_statusup(0,200, [0,1,0,0,0,]),
		Attr_statusup(200,0, [0,1,0,0,0,]),
		Costdown(10),
		Fastskill(5),
		Panel_boost([0,1,0,0,0,],2),
		Fastskill(5),
		Attr_statusup_sattr(0,100, [0,1,0,0,0,], 0,200, [0,0,0,0,1,]),
		Attr_statusup_sattr(100,0, [0,1,0,0,0,], 200,0, [0,0,0,0,1,]),
		Abstate_invalid("ss_sealed"),
	],
	as2: {
		desc: "<連撃>敵単体を3回連続攻撃(300%)、解答時間が早いほどさらにアップ(70%)(上限:4段階)",
		proc: add_cond(ChainDualAttack(3.0, 0, 3), as_timedep(0.7)),
	},
	ss2: {
		desc: "<ブースト>1ターンの間、MAXHPを毎ターン35%消費し、攻撃力をアップ(1100%)。さらに極稀にクリティカル",
		turn: 10,
		proc: [ss_boost_enhance_s(11.0, 1, 0.35)],
	},
	Lawake: [
		Statusup(0,2000),
	],
}