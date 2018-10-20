{
	name: "覚醒の天元魔道士 エステル・モカ",
	cardno: 9329,
	imageno: 11473,
	hp: 3694,
	atk: 5239,
	cost: 46,
	attr: [0,-1],
	species: [9],
	islegend: true,
	alias: ["きしだん"],
	as1: {
		desc: "<回復>火属性の味方を回復(11%)、HP50%以下なら更に回復(10%)",
		proc: [Heal(0.11, [1,0,0,0,0], 0), add_cond(Heal(0.21, [1,0,0,0,0], 0), when_hp_less(0.50))],
	},
	ss1: {
		desc: "<犠牲魔術>スキル反射を無視し、味方全体のMAXHPの50%を使い敵全体へ火属性のダメージ(精霊数×240%)",
		turn: 11,
		proc: [ss_damage_all(ss_consume_all_cond(2.4, 0.5), [0]), ss_ignore_skillcounter()],
	},
	awakes: [
		Costdown(10),
		NEFTJOD(30),
		Attr_statusup(300,0, [1,0,0,0,0,]),
		Attr_statusup(0,300, [1,0,0,0,0,]),
		Panel_boost([1,0,0,0,0,],2),
		Fastskill(4),
		Panel_boost([1,0,0,0,0,],2),
		Attr_statusup_oattr(300,0, [1,0,0,0,0,]),
		Attr_statusup_oattr(0,300, [1,0,0,0,0,]),
		Awake_noeffect("境界騎士団の覚悟",1),
	],
	as2: {
		desc: "<回復>火属性の味方を回復(13%)、HP50%以下なら更に回復(10%)",
		proc: [Heal(0.13, [1,0,0,0,0], 0), add_cond(Heal(0.23, [1,0,0,0,0], 0), when_hp_less(0.50))],
	},
	ss2: {
		desc: "<犠牲魔術>スキル反射を無視し、味方全体のMAXHPの50%を使い敵全体へ火属性のダメージ(精霊数×280%)",
		turn: 13,
		proc: [ss_damage_all(ss_consume_all_cond(2.8, 0.5), [0]), ss_ignore_skillcounter()],
	},
	Lawake: [
		Statusup(500,0),
		Attr_statusup(0,200, [1,0,0,0,0,]),
	],
}