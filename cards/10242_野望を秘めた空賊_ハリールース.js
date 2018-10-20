{
	name: "野望を秘めた空賊 ハリールース",
	cardno: 10242,
	imageno: 12610,
	hp: 3695,
	atk: 3011,
	cost: 52,
	attr: [1,4],
	species: [8],
	islegend: true,
	ape: "空戦のシュバルツ",
	is_dist: true,
	as1: {
		desc: "<チェイン攻撃>20チェインでダメージアップ(1300%)、40チェインで更にダメージアップ(1200%)",
		proc: [ChainAttack(13.0, 20), ChainAttack(25.0, 40)],
	},
	ss1: {
		desc: "<チェインガード>味方全体のMAXHPの50%を使い、3ターンの間、チェインを保護する",
		turn: 3,
		proc: [ss_chain_protect(3), ss_consume_all(0.5)],
	},
	awakes: [
		Costdown(10),
		Attr_statusup_sattr(0,100, [0,1,0,0,0,], 0,200, [0,0,0,0,1,]),
		Attr_statusup_sattr(100,0, [0,1,0,0,0,], 200,0, [0,0,0,0,1,]),
		Fastskill(1),
		Panel_boost([0,1,0,0,0,],1),
		Attr_statusup(200,0, [0,1,0,0,0,]),
		Attr_statusup(0,200, [0,1,0,0,0,]),
		Panel_boost([0,1,0,0,0,],2),
		Fastskill(1),
		Awake_chainguard(),
	],
	as2: {
		desc: "<チェイン攻撃>20チェインでダメージアップ(1400%)、40チェインで更にダメージアップ(1200%)",
		proc: [ChainAttack(14.0, 20), ChainAttack(26.0, 40)],
	},
	ss2: {
		desc: "<チェインガード>味方全体のMAXHPの50%を使い、6ターンの間、チェインを保護する",
		turn: 6,
		proc: [ss_chain_protect(6), ss_consume_all(0.5)],
	},
	Lawake: [
		Statusup(1000,0),
		Statusup(0,500),
	],
}