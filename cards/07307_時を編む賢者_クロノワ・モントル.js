{
	name: "時を編む賢者 クロノワ・モントル",
	cardno: 7307,
	imageno: 9327,
	hp: 6032,
	atk: 2145,
	cost: 51,
	attr: [0,-1],
	species: [3],
	islegend: true,
	ape: "訣別のクロニクル",
	as1: {
		desc: "<回復>味方全員のHPを回復、天使はさらに回復(11%/20%)",
		proc: [Heal(0.11, [1,1,1,1,1], 0), SpecHeal(0.20, [1,1,1,1,1], [3], 0)],
	},
	ss1: {
		desc: "<遅延>敵単体の攻撃ターンを2遅らせる",
		turn: 7,
		proc: [ss_delay_s(2)],
	},
	awakes: [
		Heal_afterbattle(10),
		Fastskill(1),
		Spec_statusup(200,0, [3,]),
		Panel_boost([1,0,0,0,0,],1),
		Attr_statusup(100,0, [1,0,0,0,0,]),
		Fastskill(2),
		Panel_boost([1,0,0,0,0,],2),
		Attr_statusup(200,0, [1,0,0,0,0,]),
		Attr_statusup(0,200, [1,0,0,0,0,]),
		Awake_noeffect("スキル反射見破り",1),
	],
	as2: {
		desc: "<回復>味方全員のHPを回復、天使はさらに回復(13%/22%)",
		proc: [Heal(0.13, [1,1,1,1,1], 0), SpecHeal(0.22, [1,1,1,1,1], [3], 0)],
	},
	ss2: {
		desc: "<遅延>敵単体の攻撃ターンを3遅らせる",
		turn: 10,
		proc: [ss_delay_s(3)],
	},
	Lawake: [
		Statusup(500,0),
		Attr_statusup(0,100, [1,0,0,0,0,]),
	],
}