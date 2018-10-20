{
	name: "我が魔道 イーニア・ストラマー",
	cardno: 8152,
	imageno: 10286,
	hp: 2775,
	atk: 6450,
	cost: 57,
	attr: [2,-1],
	species: [9],
	disable: true,
	islegend: true,
	ape: "新人王",
	as1: {
		desc: "<属性特効>5チェインで水属性の敵単体へ特効ダメージ(600%)、解答が早いほどさらにアップ(50%)（上限:4段階)",
		proc: add_cond(ChainAttrAttack(6.0, 5, [0,1,0,0,0]), as_timedep(0.5)),
	},
	ss1: {
		desc: "<詠唱大魔術>スキル反射を無視し、敵単体へ雷属性のダメージ(800%)、クイズに5問解答し、解答時間が早いほどさらにダメージ(400%)(上限4段階)",
		turn: 9,
		proc: [ss_damage_s(ss_answertime(8.0, 4.0), [2], 1), ss_ignore_skillcounter()],
	},
	awakes: [
		Panel_boost([0,0,1,0,0,],2),
		NEFTJOD(30),
		Attr_relief([0,1,0,0,0,],20),
		Panel_boost([0,0,1,0,0,],2),
		Abstate_invalid("heal_reverse"),
		Abstate_invalid("ss_sealed"),
		Attr_statusup(0,400, [0,0,1,0,0,]),
		Attr_statusup(400,0, [0,0,1,0,0,]),
		Fastskill(3),
		Awake_noeffect("心眼",1),
	],
	as2: {
		desc: "<属性特効>5チェインで水属性の敵単体へ特効ダメージ(700%)、解答が早いほどさらにアップ(50%)（上限:4段階)",
		proc: add_cond(ChainAttrAttack(7.0, 5, [0,1,0,0,0]), as_timedep(0.5)),
	},
	ss2: {
		desc: "<詠唱大魔術>スキル反射を無視し、敵単体へ雷属性のダメージ(1100%)、クイズに5問解答し、解答時間が早いほどさらにダメージ(400%)(上限4段階)",
		turn: 12,
		proc: [ss_damage_s(ss_answertime(11.0, 4.0), [2], 1), ss_ignore_skillcounter()],
	},
	Lawake: [
		Statusup(0,1000),
		Attr_statusup(0,200, [0,0,1,0,0,]),
	],
}