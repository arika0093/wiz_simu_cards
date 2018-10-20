{
	name: "静かに猛るは荒海神 セイ・シラナミ",
	cardno: 6842,
	imageno: 8814,
	hp: 2827,
	atk: 3623,
	cost: 52,
	attr: [1,0],
	species: [1],
	disable: true,
	islegend: true,
	ape: "YAOYORO Z",
	as1: {
		desc: "<全体攻撃>敵全体にダメージ、5チェインで更にダメージアップ(150%/200%)",
		proc: [ChainAllAttack(1.5, 0), ChainAllAttack(2.0, 5)],
	},
	ss1: {
		desc: "<大魔術>スキル反射を無視し、敵全体に水・火属性のダメージ(80%)、平均解答が早いほどさらにダメージ(40%)【上限値:160】",
		turn: 4,
		proc: [ss_damage_all(ss_answertime(0.8, 0.4), [0, 1]), ss_ignore_skillcounter()],
	},
	awakes: [
		Fastskill(1),
		Statusup(0,200),
		Panel_boost([0,1,0,0,0,],2),
		NEFTJOD(30),
		Attr_statusup(100,0, [1,1,0,0,0,]),
		Panel_boost([0,1,0,0,0,],2),
		Attr_statusup(0,100, [1,1,0,0,0,]),
		Fastskill(2),
		Attr_statusup_sattr(200,0, [0,1,0,0,0,], 200,0, [1,0,0,0,0,]),
		Attr_statusup_sattr(0,200, [0,1,0,0,0,], 0,200, [1,0,0,0,0,]),
	],
	as2: {
		desc: "<全体攻撃>敵全体にダメージ、5チェインで更にダメージアップ(180%/230%)",
		proc: [ChainAllAttack(1.8, 0), ChainAllAttack(2.3, 5)],
	},
	ss2: {
		desc: "<大魔術>スキル反射を無視し、敵全体に水・火属性のダメージ(110%)、平均解答が早いほどさらにダメージ(40%)【上限値:160】",
		turn: 6,
		proc: [ss_damage_all(ss_answertime(1.1, 0.4), [0, 1]), ss_ignore_skillcounter()],
	},
	Lawake: [
		Attr_statusup(0,100, [1,1,0,0,0,]),
		Statusup(0,500),
	],
}