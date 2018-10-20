{
	name: "託翼の守護聖剣 テオドール・ザザ",
	cardno: 9924,
	imageno: 5819,
	hp: 2731,
	atk: 5982,
	cost: 44,
	attr: [1,-1],
	species: [3],
	islegend: true,
	as1: {
		desc: "<チェイン攻撃・属性特効>3チェインでダメージアップ(350%)、闇属性の敵だとさらにダメージアップ(200%)",
		proc: [ChainAttack(3.5, 3), ChainAttrAttack(5.5, 3, [0,0,0,0,1])],
	},
	ss1: {
		desc: "<純属性大魔術>スキル反射を無視し、敵全体へ水属性のダメージ、水単色精霊が多いほどダメージアップ(上限値:1300%)",
		turn: 8,
		proc: [ss_damage_all(ss_pureattr_cond(13), [1]), ss_ignore_skillcounter()],
	},
	awakes: [
		Costdown(20),
		Attr_statusup_oattr(400,0, [0,1,0,0,0,]),
		Fastskill(3),
		Spec_statusup(0,200, [3,]),
		Attr_statusup(0,300, [0,1,0,0,0,]),
		Attr_statusup(300,0, [0,1,0,0,0,]),
		Panel_boost([0,1,0,0,0,],4),
		Attr_statusup_oattr(0,400, [0,1,0,0,0,]),
		Awake_noeffect("目覚めの輝き",1000),
		Awake_noeffect("目覚めの力",1000),
	],
	as2: {
		desc: "<チェイン攻撃・属性特効>3チェインでダメージアップ(450%)、闇属性の敵だとさらにダメージアップ(200%)",
		proc: [ChainAttack(4.5, 3), ChainAttrAttack(6.5, 3, [0,0,0,0,1])],
	},
	ss2: {
		desc: "<純属性大魔術>スキル反射を無視し、敵全体へ水属性のダメージ、水単色精霊が多いほどダメージアップ(上限値:1600%)",
		turn: 11,
		proc: [ss_damage_all(ss_pureattr_cond(16), [1]), ss_ignore_skillcounter()],
	},
	Lawake: [
		Statusup(500,0),
		Attr_statusup(0,100, [0,1,0,0,0,]),
		Statusup(0,1000),
	],
}