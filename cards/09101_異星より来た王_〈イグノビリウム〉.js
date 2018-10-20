{
	name: "異星より来た王 〈イグノビリウム〉",
	cardno: 9101,
	imageno: 11343,
	hp: 2123,
	atk: 2887,
	cost: 41,
	attr: [1,0],
	species: [2],
	islegend: true,
	ape: "ドルキマスⅢ",
	is_dist: true,
	as1: {
		desc: "<分散攻撃>5チェインで敵全体へ分散攻撃(450%)",
		proc: ChainVarianceAttack(4.5, 5),
	},
	ss1: {
		desc: "<ダメージ強化>3ターン味方の攻撃力をアップ(100%)",
		turn: 7,
		proc: [ss_enhance_all(1.0, 3, [1,1,1,1,1])],
	},
	awakes: [
		Panel_boost([0,1,0,0,0,],1),
		Attr_statusup(0,100, [0,1,0,0,0,]),
		Panel_boost([0,1,0,0,0,],1),
		Fastskill(1),
		Panel_boost([0,1,0,0,0,],2),
		Attr_statusup(100,0, [0,1,0,0,0,]),
		Attr_statusup_sattr(0,100, [0,1,0,0,0,], 0,100, [1,0,0,0,0,]),
		Attr_statusup_sattr(100,0, [0,1,0,0,0,], 100,0, [1,0,0,0,0,]),
		Fastskill(2),
		Abstate_invalid("poison"),
	],
	as2: {
		desc: "<分散攻撃>5チェインで敵全体へ分散攻撃(550%)",
		proc: ChainVarianceAttack(5.5, 5),
	},
	ss2: {
		desc: "<ダメージ強化>4ターン味方の攻撃力をアップ(100%)",
		turn: 10,
		proc: [ss_enhance_all(1.0, 4, [1,1,1,1,1])],
	},
	Lawake: [
		Statusup(0,500),
		Attr_statusup(0,100, [0,1,0,0,0,]),
	],
}