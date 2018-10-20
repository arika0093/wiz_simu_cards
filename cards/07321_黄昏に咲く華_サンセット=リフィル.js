{
	name: "黄昏に咲く華 サンセット=リフィル",
	cardno: 7321,
	imageno: 9346,
	hp: 4201,
	atk: 2975,
	cost: 54,
	attr: [1,2],
	species: [9],
	disable: true,
	islegend: true,
	ape: "黄昏メアレスⅡ",
	as1: {
		desc: "<チェイン攻撃>4チェインでダメージアップ、8チェインで更にダメージアップ(350%/500%)",
		proc: [ChainAttack(3.5, 4), ChainAttack(5.0, 8)],
	},
	ss1: {
		desc: "<ステータスアップ>味方全体のHPを2000ダウンし、攻撃力を2000アップ(上限値:2000)",
		turn: 1,
		proc: [ss_statusup_all([-2000, 2000], [2000, 2000], -1)],
	},
	awakes: [
		Panel_boost([0,1,0,0,0,],1),
		NEFTJOD(30),
		Statusup(200,0),
		Panel_boost([0,1,0,0,0,],2),
		Attr_statusup(0,100, [0,1,1,0,0,]),
		Fastskill(1),
		Panel_boost([0,1,0,0,0,],2),
		Attr_relief([0,1,0,0,0,],10),
		Attr_statusup_sattr(200,0, [0,1,0,0,0,], 200,0, [0,0,1,0,0,]),
		Attr_statusup_sattr(0,200, [0,1,0,0,0,], 0,200, [0,0,1,0,0,]),
	],
	as2: {
		desc: "<チェイン攻撃>4チェインでダメージアップ、8チェインで更にダメージアップ(450%/600%)",
		proc: [ChainAttack(4.5, 4), ChainAttack(6.0, 8)],
	},
	ss2: {
		desc: "<ブースト>4ターンの間、味方のMAXHPを毎ターン10%消費し、味方の攻撃力をアップ(150%)。さらに極稀にクリティカル",
		turn: 5,
		proc: [ss_boost_enhance_all(1.5, 4, 0.1, [1,1,1,1,1])],
	},
	Lawake: [
		Attr_statusup(0,200, [0,1,1,0,0,]),
	],
}