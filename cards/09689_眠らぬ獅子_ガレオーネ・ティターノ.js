{
	name: "眠らぬ獅子 ガレオーネ・ティターノ",
	cardno: 9689,
	imageno: 11980,
	hp: 2425,
	atk: 6113,
	cost: 43,
	attr: [2,-1],
	species: [5],
	islegend: true,
	ape: "シュガーレスバンビーナ",
	is_dist: true,
	as1: {
		desc: "<分散攻撃>10チェインで敵全体へ分散攻撃(800%)",
		proc: ChainVarianceAttack(8.0, 10),
	},
	ss1: {
		desc: "<激化大魔術>敵単体へ雷属性の10回連続ダメージ(600%)、発動する度に効果値が2倍アップ(上限:3段階)",
		turn: 11,
		proc: [ss_damage_s(ss_intenselyval(0, 6.0, 48), [2], 10)],
	},
	awakes: [
		Panel_boost([0,0,0,0,0,],2),
		Attr_statusup_oattr(0,300, [0,0,1,0,0,]),
		Attr_statusup_oattr(300,0, [0,0,1,0,0,]),
		Panel_boost([0,0,1,0,0,],2),
		Awake_secondfast(3),
		NEFTJOD(30),
		Awake_secondfast(3),
		Attr_statusup(0,300, [0,0,1,0,0,]),
		Attr_statusup(300,0, [0,0,1,0,0,]),
		Awake_secondfast(3),
	],
	as2: {
		desc: "<分散攻撃>10チェインで敵全体へ分散攻撃(900%)",
		proc: ChainVarianceAttack(9.0, 10),
	},
	ss2: {
		desc: "<激化大魔術>敵単体へ雷属性の10回連続ダメージ(600%)、発動する度に効果値が2倍アップ(上限:3段階)",
		turn: 11,
		proc: [ss_damage_s(ss_intenselyval(0, 6.0, 48), [2], 10)],
	},
	Lawake: [
		Statusup(0,1000),
		Attr_statusup(0,100, [0,0,1,0,0,]),
	],
}