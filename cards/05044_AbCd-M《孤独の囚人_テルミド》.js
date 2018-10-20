{
	name: "AbCd-M:《孤独の囚人 テルミド》",
	cardno: 5044,
	imageno: 6786,
	hp: 4210,
	atk: 2433,
	cost: 48,
	attr: [0, 4],
	species: [11],
	disable: true,
	awakes: [
		Attr_relief([0, 0, 0, 1, 1], 30),
		NEFTJOD(60),
		Panel_boost([1,0,0,0,0], 1),
		Fastskill(2),
		Attr_statusup(100, 0, [1,0,0,0,0]),
		Heal_afterbattle(10),
		Attr_statusup(0, 100, [1,0,0,0,0]),
		Attr_statusup(200, 0, [1,0,0,0,0]),
		Attr_statusup(0, 200, [1,0,0,0,0]),
		Fastskill(2),
	],
	as1: {
		desc: "<回復>火属性の味方のHPを回復、リーダー時さらに回復(通常：13％ / リーダー時：17％)",
		proc: [Heal(0.13, [1,0,0,0,0], 0), add_cond(Heal(0.17, [1,0,0,0,0], 0), when_leader())],
	},
	ss1: {
		desc: "<スキルチャージ>味方全体のスペシャルスキルの発動ターンを2早める",
		turn: 8,
		proc: [ss_skillboost(2)],
	},
	islegend: true,
	Lawake: [
		Attr_statusup(0, 100, [1,0,0,0,0]),
		Statusup(500, 0),
	],
	as2: {
		desc: "<回復>火属性の味方のHPを回復、リーダー時さらに回復(通常：16％ / リーダー時：20％)",
		proc: [Heal(0.16, [1,0,0,0,0], 0), add_cond(Heal(0.20, [1,0,0,0,0], 0), when_leader())],
	},
	ss2: {
		desc: "<スキルチャージ>味方全体のスペシャルスキルの発動ターンを2早める。HP20％以下でさらに3早める。",
		turn: 9,
		proc: [ss_skillboost(ss_hp_less(0.2, 5, 2))],
	},
}