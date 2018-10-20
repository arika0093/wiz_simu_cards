{
	name: "星降る夜の希望 ヒカリ・スフィア",
	cardno: 5681,
	imageno: 7486,
	hp: 2688,
	atk: 3347,
	cost: 44,
	attr: [1,3],
	species: [9],
	disable: true,
	islegend: true,
	as1: {
		desc: "<連撃>4チェインで敵単体を3回連続攻撃、パネルの色が増す度さらにダメージアップ(350%/450%/600%)",
		proc: ChainPanelsDualAttack(3.5, 4.5, 6.0, 3, 4),
	},
	ss1: {
		desc: "<パネル変換>ジャンルパネルを水・光属性化",
		turn: 3,
		proc: [ss_panel_change([0,1,0,1,0])],
	},
	awakes: [
		Fastskill(1),
		Statusup(200,0),
		Attr_statusup(0,100, [0,1,0,0,0,]),
		Panel_boost([0,1,0,0,0,],2),
		Statusup(0,200),
		Panel_boost([0,1,0,0,0,],2),
		Attr_statusup(200,0, [0,1,0,0,0,]),
		Attr_relief([1,1,1,1,1,],10),
		Attr_statusup(0,200, [0,1,0,0,0,]),
		Fastskill(2),
	],
	as2: {
		desc: "<連撃>4チェインで敵単体を3回連続攻撃、パネルの色が増す度さらにダメージアップ(450%/550%/700%)",
		proc: ChainPanelsDualAttack(4.5, 5.5, 7.0, 3, 4),
	},
	ss2: {
		desc: "<解答削り>解答を見破る",
		turn: 6,
		proc: [ss_answer_foresight()],
	},
	Lawake: [
		Attr_statusup(0,200, [0,1,0,0,0,]),
	],
}