{
	name: "忘我の果てに ラーシャ・ルツス",
	cardno: 10670,
	imageno: 13114,
	imageno_prefix: "u8DCdL_",
	hp: 2755,
	atk: 7023,
	cost: 51,
	attr: [1,-1],
	species: [8],
	islegend: true,
	ape: "Birth of New Order 2",
	as1: {
		desc: "<連撃>敵単体を6回連続攻撃(150%)、デッキに単色の精霊が多いほど、ダメージがアップ(70%)(上限:5段階)",
		proc: add_cond(ChainDualAttack(1.5, 0, 6), as_singleattr_num(0, 0.7)),
	},
	ss1: {
		desc: "<パネル変換>ジャンルパネルをALL属性化",
		turn: 4,
		proc: [ss_panel_change([1,1,1,0,0])],
	},
	awakes: [
		Panel_boost([0,1,0,0,0,],2),
		Attr_statusup(0,400, [0,1,0,0,0,]),
		Attr_statusup(400,0, [0,1,0,0,0,]),
		Fastskill(3),
		Panel_boost([0,1,0,0,0,],2),
		Fastskill(3),
		Attr_statusup_oattr(0,400, [0,1,0,0,0,]),
		Attr_statusup_oattr(400,0, [0,1,0,0,0,]),
		NEFTJOD(30),
		Abstate_invalid("ss_sealed"),
	],
	as2: {
		desc: "<連撃>敵単体を6回連続攻撃(250%)、デッキに単色の精霊が多いほど、ダメージがアップ(70%)(上限:5段階)",
		proc: add_cond(ChainDualAttack(2.5, 0, 6), as_singleattr_num(0, 0.7)),
	},
	ss2: {
		desc: "<純属性パネル変換>ジャンルパネルをALL属性化し、スキルチャージの効果を付与、水単色の精霊が多いほどさらに効果値アップ(上限値:3)(効果は、SPスキルを使うまで重複しません)",
		turn: 9,
		proc: [ss_panel_change([1,1,1,0,0]), panel_skillboost(1), panel_skillboost(3)],
	},
	Lawake: [
		Statusup(0,2000),
	],
}