{
	name: "おめでたおせち ファム&エテルネ",
	cardno: 7686,
	imageno: 9768,
	hp: 3515,
	atk: 3464,
	cost: 55,
	attr: [2,0],
	species: [9],
	disable: true,
	islegend: true,
	ape: "謹賀新年2017",
	as1: {
		desc: "<チェイン攻撃>10チェインでダメージアップ(800%)",
		proc: ChainAttack(8.0, 10),
	},
	ss1: {
		desc: "<ステータスアップ>自身の攻撃力とHPを2000アップ(上限値:6000)し、HPを完全に回復する",
		turn: 8,
		proc: [ss_statusup_own([2000, 2000], [6000, 6000], -1), ss_heal_own(1)],
	},
	awakes: [
		Panel_boost([0,0,1,0,0,],2),
		Attr_statusup(200,0, [1,0,1,0,0,]),
		Panel_boost([0,0,1,0,0,],2),
		Attr_statusup(0,200, [1,0,1,0,0,]),
		NEFTJOD(30),
		Spec_statusup(200,0, [9,]),
		Abstate_invalid("ss_sealed"),
		Awake_secondfast(4),
		Attr_statusup_sattr(200,0, [0,0,1,0,0,], 200,0, [1,0,0,0,0,]),
		Attr_statusup_sattr(0,200, [0,0,1,0,0,], 0,200, [1,0,0,0,0,]),
	],
	as2: {
		desc: "<チェイン攻撃>10チェインでダメージアップ(900%)",
		proc: ChainAttack(9.0, 10),
	},
	ss2: {
		desc: "<ステータスアップ>自身の攻撃力とHPを2000アップ(上限値:6000)し、HPを完全に回復する",
		turn: 8,
		proc: [ss_statusup_own([2000, 2000], [6000, 6000], -1), ss_heal_own(1)],
	},
	Lawake: [
		Abstate_invalid("as_sealed"),
		Attr_statusup_sattr(0,200, [0,0,1,0,0,], 0,100, [1,0,0,0,0,]),
	],
}