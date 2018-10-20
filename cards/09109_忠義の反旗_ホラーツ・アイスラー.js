{
	name: "忠義の反旗 ホラーツ・アイスラー",
	cardno: 9109,
	imageno: 11351,
	hp: 2121,
	atk: 5623,
	cost: 38,
	attr: [1,-1],
	species: [8],
	disable: true,
	islegend: true,
	ape: "ドルキマスⅢ",
	is_dist: true,
	as1: {
		desc: "<快調攻撃>残りHPが80％以上でダメージアップ(350%)",
		proc: add_cond(ChainAttack(3.5, 0), when_hp_more(0.8)),
	},
	ss1: {
		desc: "<反動大魔術>スキル反射を無視し、敵全体へ水属性のダメージ(750%)(スキル使用後、1ターン封印状態に)",
		turn: 6,
		proc: [ss_damage_all(7.5, [1]), ss_allsealed_own(1), ss_ignore_skillcounter()],
	},
	awakes: [
		Statusup(0,200),
		Panel_boost([0,1,0,0,0,],1),
		Statusup(200,0),
		Fastskill(1),
		Panel_boost([0,1,0,0,0,],2),
		Attr_statusup_oattr(300,0, [0,1,0,0,0,]),
		Fastskill(2),
		Attr_statusup_oattr(0,300, [0,1,0,0,0,]),
		NEFTJOD(30),
		Abstate_invalid("as_sealed"),
	],
	as2: {
		desc: "<快調攻撃>残りHPが80％以上でダメージアップ(450%)",
		proc: add_cond(ChainAttack(4.5, 0), when_hp_more(0.8)),
	},
	ss2: {
		desc: "<反動大魔術>スキル反射を無視し、敵全体へ水属性のダメージ(1050%)(スキル使用後、1ターン封印状態に)",
		turn: 9,
		proc: [ss_damage_all(10.5, [1]), ss_allsealed_own(1), ss_ignore_skillcounter()],
	},
	Lawake: [
		Statusup(0,500),
		Attr_statusup(0,100, [0,1,0,0,0,]),
	],
}