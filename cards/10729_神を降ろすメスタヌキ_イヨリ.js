{
	name: "神を降ろすメスタヌキ イヨリ",
	cardno: 10729,
	imageno: 13178,
	imageno_prefix: "W4ripe_",
	hp: 5555,
	atk: 1111,
	cost: 45,
	attr: [2,0],
	species: [5],
	islegend: true,
	ape: "八百八町",
	is_dist: true,
	as1: {
		desc: "<スキルコピー>左隣の精霊のアンサースキルを発動する",
		proc: as_copy(),
	},
	ss1: {
		desc: "<スキルコピー>直前に発動したスペシャルスキルを発動する",
		turn: 10,
		proc: [ss_latest_copy()],
	},
	awakes: [
		Costdown(10),
		Panel_boost([0,0,1,0,0,],1),
		Attr_statusup(0,200, [1,0,1,0,0,]),
		Attr_statusup(200,0, [1,0,1,0,0,]),
		Panel_boost([0,0,1,0,0,],2),
		NEFTJOD(30),
		Attr_statusup_subattr(0, 300),
		Attr_statusup_subattr(300, 0),
		Fastskill(2),
		Abstate_invalid("as_sealed"),
	],
	as2: {
		desc: "<スキルコピー>左隣の精霊のアンサースキルを発動する",
		proc: as_copy(),
	},
	ss2: {
		desc: "<スキルコピー>直前に発動したスペシャルスキルを発動する",
		turn: 10,
		proc: [ss_latest_copy()],
	},
	Lawake: [
		Statusup(0,1000),
		Statusup(500,0),
	],
}