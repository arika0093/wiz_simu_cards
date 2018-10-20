{
	name: "海風流るる焔々と セイ&スオウ",
	cardno: 6830,
	imageno: 6804,
	hp: 3010,
	atk: 3613,
	cost: 53,
	attr: [1,0],
	species: [1],
	disable: true,
	islegend: true,
	ape: "八百万神秘譚Ⅱ",
	as1: {
		desc: "<チェイン攻撃>10チェインでダメージアップ(700%)",
		proc: ChainAttack(7.0, 10),
	},
	ss1: {
		desc: "<犠牲魔術>スキル反射を無視し、味方全体のMAXHPの50%を使い敵単体へ水属性のダメージ(280%×人数)",
		turn: 9,
		proc: [ss_damage_s(ss_consume_all_cond(2.8, 0.5), [1], 1), ss_ignore_skillcounter()],
	},
	awakes: [
		Panel_boost([0,1,0,0,0,],1),
		Fastskill(3),
		Spec_statusup(0,200, [1,]),
		NEFTJOD(30),
		Attr_statusup(0,200, [1,1,0,0,0,]),
		Panel_boost([0,1,0,0,0,],2),
		Panel_boost([0,1,0,0,0,],2),
		Attr_statusup(200,0, [1,1,0,0,0,]),
		Spec_statusup(200,0, [1,]),
		Abstate_invalid("as_sealed"),
	],
	as2: {
		desc: "<チェイン攻撃>10チェインでダメージアップ(800%)",
		proc: ChainAttack(8.0, 10),
	},
	ss2: {
		desc: "<犠牲魔術>スキル反射を無視し、味方全体のMAXHPの50%を使い敵単体へ水属性のダメージ(360%×人数)",
		turn: 12,
		proc: [ss_damage_s(ss_consume_all_cond(3.6, 0.5), [1], 1), ss_ignore_skillcounter()],
	},
	Lawake: [
		Statusup(500,0),
		Statusup(0,500),
	],
}