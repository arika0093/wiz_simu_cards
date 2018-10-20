{
	name: "神宿る器 ゴッドBヘッド",
	cardno: 9787,
	imageno: 12101,
	hp: 2215,
	atk: 5845,
	cost: 40,
	attr: [1,-1],
	species: [6],
	islegend: true,
	ape: "新説桃娘伝2",
	is_dist: true,
	as1: {
		desc: "<属性特効>火属性の敵単体へ特効ダメージ(300%)、デッキに単色の精霊が多いほど、さらにダメージアップ(40%)(上限:5段階)",
		proc: add_cond(ChainAttrAttack(3.0, 0, [1,0,0,0,0]), as_singleattr_num(0, 0.4)),
	},
	ss1: {
		desc: "<特効大魔術>敵単体へ水属性のダメージ(400%)、さらに火属性の敵には特効ダメージ(400%)、さらに敵にトドメを刺した場合チェインプラス3",
		turn: 7,
		chadd_killing: 3,
		proc: [ss_damage_s(special_attr([1, 0, 0, 0, 0], 8.0, 4.0), [1], 1)],
	},
	awakes: [
		Costdown(10),
		Panel_boost([0,1,0,0,0,],1),
		Attr_statusup_oattr(0,300, [0,1,0,0,0,]),
		Attr_statusup_oattr(300,0, [0,1,0,0,0,]),
		Panel_boost([0,1,0,0,0,],2),
		NEFTJOD(30),
		Fastskill(3),
		Attr_statusup(0,200, [0,1,0,0,0,]),
		Attr_statusup(200,0, [0,1,0,0,0,]),
		Awake_damage_multiple(1.1, 500),
	],
	as2: {
		desc: "<属性特効>火属性の敵単体へ特効ダメージ(400%)、デッキに単色の精霊が多いほど、さらにダメージアップ(40%)(上限:5段階)",
		proc: add_cond(ChainAttrAttack(4.0, 0, [1,0,0,0,0]), as_singleattr_num(0, 0.4)),
	},
	ss2: {
		desc: "<特効大魔術>敵単体へ水属性のダメージ(400%)、さらに火属性の敵には特効ダメージ(1200%)、さらに敵にトドメを刺した場合チェインプラス3",
		turn: 10,
		chadd_killing: 3,
		proc: [ss_damage_s(special_attr([1, 0, 0, 0, 0], 16.0, 4.0), [1], 1)],
	},
	Lawake: [
		Statusup(0,1500),
	],
}