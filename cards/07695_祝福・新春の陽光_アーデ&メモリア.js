{
	name: "祝福・新春の陽光 アーデ&メモリア",
	cardno: 7695,
	imageno: 9777,
	hp: 6451,
	atk: 2145,
	cost: 53,
	attr: [0,-1],
	species: [9],
	disable: true,
	islegend: true,
	ape: "謹賀新年2017",
	as1: {
		desc: "<回復>火属性の味方を回復、HP50%以下なら更に回復(11%/21%)",
		proc: [Heal(0.11, [1,0,0,0,0], 0), add_cond(Heal(0.21, [1,0,0,0,0], 0), when_hp_less(0.50))],
	},
	ss1: {
		desc: "<AS発動時間延長>10ターンの間、アンサースキル発動時間を15秒延長する(上限値:20秒)",
		turn: 3,
		proc: [ss_astime_ext(15, 10)],
	},
	awakes: [
		Panel_boost([1,0,0,0,0,],4),
		Awake_noeffect("心眼",1),
		Fastskill(1),
		Attr_statusup(300,0, [1,0,0,0,0,]),
		Panel_boost([1,0,0,0,0,],4),
		Attr_relief([1,1,1,1,1,],10),
		Attr_statusup(0,300, [1,0,0,0,0,]),
		Fastskill(3),
		Awake_noeffect("難易度ダウン",1),
		Abstate_invalid("ss_sealed"),
	],
	as2: {
		desc: "<回復>火属性の味方を回復、HP50%以下なら更に回復(13%/23%)",
		proc: [Heal(0.13, [1,0,0,0,0], 0), add_cond(Heal(0.23, [1,0,0,0,0], 0), when_hp_less(0.50))],
	},
	ss2: {
		desc: "<蘇生>味方全体のHPを回復し(30%)、さらに火属性の味方を蘇生(10%)",
		turn: 5,
		proc: [ss_heal(0.3), ss_resurrection([1,0,0,0,0], 0.1)],
	},
	Lawake: [
		Attr_statusup(0,100, [1,0,0,0,0,]),
		Abstate_invalid(["poison", "attr_weaken", "death_limit", "all_sealed"]),
		Statusup(500,0),
	],
}