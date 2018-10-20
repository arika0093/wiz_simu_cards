{
	name: "星彩の祝福 クレティア・ブライユ",
	cardno: 9560,
	imageno: 9556,
	hp: 6421,
	atk: 1990,
	cost: 59,
	attr: [1,3],
	species: [9],
	islegend: true,
	ape: "エステレラⅠ",
	as1: {
		desc: "<回復>水属性の味方のHPを回復(14%)",
		proc: Heal(0.14, [0,1,0,0,0], 0),
	},
	ss1: {
		desc: "<精霊強化>味方全体で1ターン溜めた後、10ターンの間、味方全体を徐々に回復しダメージを軽減、さらに攻撃力アップ(30%, 30%, 350%)",
		turn: 5,
		charged: 1,
		isallcharge: true,
		proc: [ss_reinforcement_all(10, [ss_attr_guard([1, 1, 1, 1, 1], 0.3, 1, "RF"), ss_enhance_all(3.5, 1, [1, 1, 1, 1, 1], "RF"), ss_regenerate(0.3, 1, "RF")])],
	},
	awakes: [
		Panel_boost([0,1,0,0,0,],4),
		Attr_statusup(0,200, [0,1,0,0,0,]),
		Attr_statusup(200,0, [0,1,0,0,0,]),
		Awake_noeffect("経験値取得量アップ",2),
		Fastskill(4),
		NEFTJOD(60),
		Attr_statusup_sattr(0,100, [0,1,0,0,0,], 0,300, [0,0,0,1,0,]),
		Attr_statusup_sattr(100,0, [0,1,0,0,0,], 300,0, [0,0,0,1,0,]),
		Heal_afterbattle(10),
		Abstate_invalid(["as_sealed", "ss_sealed"]),
	],
	as2: {
		desc: "<回復>水属性の味方のHPを回復(17%)",
		proc: Heal(0.17, [0,1,0,0,0], 0),
	},
	ss2: {
		desc: "<精霊強化>味方全体で1ターン溜めた後、15ターンの間、味方全体を徐々に回復しダメージを軽減、さらに攻撃力アップ(30%, 30%, 450%)",
		turn: 8,
		charged: 1,
		isallcharge: true,
		proc: [ss_reinforcement_all(15, [ss_attr_guard([1, 1, 1, 1, 1], 0.3, 1, "RF"), ss_enhance_all(4.5, 1, [1, 1, 1, 1, 1], "RF"), ss_regenerate(0.3, 1, "RF")])],
	},
	Lawake: [
		Attr_statusup(0,300, [1,1,1,1,1,]),
		Statusup(500,0),
	],
}