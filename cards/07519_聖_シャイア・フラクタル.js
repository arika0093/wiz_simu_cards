{
	name: "聖 シャイア・フラクタル",
	cardno: 7519,
	imageno: 9562,
	hp: 4468,
	atk: 2334,
	cost: 50,
	attr: [0,1],
	species: [9],
	islegend: true,
	ape: "エステレラⅠ",
	awakes: [
		Awake_noeffect("経験値取得量アップ", 1),
		Panel_boost([1, 0, 0, 0, 0, ], 1),
		Fastskill(1),
		Panel_boost([1, 0, 0, 0, 0, ], 2),
		Fastskill(2),
		Spec_statusup(200, 0, [9, ]),
		Abstate_invalid("ss_sealed"),
		Attr_statusup_sattr(200,0, [1,0,0,0,0,], 100,0, [0,1,0,0,0,]),
		Attr_statusup_sattr(0,200, [1,0,0,0,0,], 0,100, [0,1,0,0,0,]),
		Heal_afterbattle(10),
	],
	as1: {
		desc: "<複属性攻撃強化>4チェインで火属性の攻撃力をアップ、複属性が水属性だとさらにアップ(50%/100%)",
		proc: [ChainEnhance_SubAttr(0.5, 1.0, [1,0,0,0,0], [0,1,0,0,0], 4)],
	},
	ss1: {
		desc: "<状態異常無効>5ターン溜めた後、8ターン敵の状態異常を無効化する",
		turn: 3,
		charged:5,
		proc: [ss_absattack_disable(8)],
	},
	as2: {
		desc: "<複属性攻撃強化>4チェインで火属性の攻撃力をアップ、複属性が水属性だとさらにアップ(80%/130%)",
		proc: [ChainEnhance_SubAttr(0.8, 1.3, [1,0,0,0,0], [0,1,0,0,0], 4)],
	},
	ss2: {
		desc: "<継続回復>5ターン味方全体を徐々に回復する(20%)",
		turn: 8,
		proc: [ss_regenerate(0.20, 5)],
	},
	Lawake: [
		Statusup(500, 0),
		Attr_statusup(0, 100, [1, 1, 0, 0, 0, ]),
	],
}