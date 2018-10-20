{
	name: "昏き英雄の副官 ローヴィ・フロイセ",
	cardno: 7030,
	imageno: 9027,
	hp: 3544,
	atk: 5009,
	cost: 53,
	attr: [1,-1],
	species: [8],
	disable: true,
	islegend: true,
	ape: "ドルキマスⅡ",
	as1: {
		desc: "<属性特効>4チェインで火属性の敵単体へ特効ダメージ(600%)",
		proc: ChainAttrAttack(6.0, 4, [1,0,0,0,0]),
	},
	ss1: {
		desc: "<反動大魔術・蝕>スキル反射を無視し、敵単体へ水属性のダメージ(200%×人数)◆スキル使用後、味方全体が1ターン封印状態に",
		turn: 4,
		proc: [ss_damage_s(ss_seal_all_cond(2.0), [1], 1), ss_ignore_skillcounter()],
	},
	awakes: [
		Panel_boost([0,1,0,0,0,],2),
		Fastskill(2),
		Statusup(200,0),
		Attr_relief([1,0,0,0,0,],10),
		Attr_statusup(200,0, [0,1,0,0,0,]),
		Fastskill(2),
		NEFTJOD(30),
		Panel_boost([0,1,0,0,0,],2),
		Attr_statusup(0,200, [0,1,0,0,0,]),
		Spec_statusup(0,400, [8,]),
	],
	as2: {
		desc: "<属性特効>4チェインで火属性の敵単体へ特効ダメージ(700%)",
		proc: ChainAttrAttack(7.0, 4, [1,0,0,0,0]),
	},
	ss2: {
		desc: "<反動大魔術・蝕>スキル反射を無視し、敵単体へ水属性のダメージ(240%×人数)◆スキル使用後、味方全体が1ターン封印状態に",
		turn: 6,
		proc: [ss_damage_s(ss_seal_all_cond(2.4), [1], 1), ss_ignore_skillcounter()],
	},
	Lawake: [
		Statusup(0,1000),
	],
}