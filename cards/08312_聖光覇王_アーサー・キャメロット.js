{
	name: "聖光覇王 アーサー・キャメロット",
	cardno: 8312,
	imageno: 5676,
	hp: 3556,
	atk: 3543,
	cost: 56,
	attr: [2,1],
	species: [8],
	islegend: true,
	ape: "GW2015",
	as1: {
		desc: "<チェイン攻撃>5チェインでダメージアップ(450%)、20チェインで更にダメージアップ(1150%)",
		proc: [ChainAttack(4.5, 5), ChainAttack(16, 20)],
	},
	ss1: {
		desc: "<精霊強化>3ターンの間、味方全体を徐々に回復しダメージを軽減、さらに攻撃力をアップ(15%、15%、150%)(発動中行動不可)",
		turn: 5,
		proc: [ss_reinforcement_all(3, [ss_regenerate(0.15, 1, "RF"), ss_attr_guard([1, 1, 1, 1, 1], 0.15, 1, "RF"), ss_enhance_all(1.5, 1, [1, 1, 1, 1, 1], "RF")])],
	},
	awakes: [
		Panel_boost([0,0,1,0,0,],4),
		Attr_statusup_sattr(0,200, [0,0,1,0,0,], 0,100, [0,1,0,0,0,]),
		Attr_statusup_sattr(200,0, [0,0,1,0,0,], 100,0, [0,1,0,0,0,]),
		Abstate_invalid("ss_sealed"),
		Attr_relief([1,1,1,1,1,],20),
		Abstate_invalid("as_sealed"),
		Attr_statusup_sattr(0,100, [0,0,1,0,0,], 0,300, [0,1,0,0,0,]),
		Attr_statusup_sattr(100,0, [0,0,1,0,0,], 300,0, [0,1,0,0,0,]),
		Fastskill(4),
		Heal_afterbattle(10),
	],
	as2: {
		desc: "<チェイン攻撃>5チェインでダメージアップ(550%)、20チェインで更にダメージアップ(1150%)",
		proc: [ChainAttack(5.5, 5), ChainAttack(17, 20)],
	},
	ss2: {
		desc: "<継続回復>5ターン味方全体を徐々に回復する(20%)、20チェインでさらに5ターン味方全体を徐々に回復する(10%)",
		turn: 8,
		proc: [ss_chain_cond_skill(20, ss_regenerate(0.30, 10), ss_regenerate(0.20, 5))],
	},
	Lawake: [
		Statusup(0,1000),
		Attr_statusup(0,200, [0,1,1,0,0,]),
	],
}