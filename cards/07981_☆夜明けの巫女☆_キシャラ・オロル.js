{
	name: "☆夜明けの巫女☆ キシャラ・オロル",
	cardno: 7981,
	imageno: 7103,
	hp: 2448,
	atk: 4221,
	cost: 55,
	attr: [2,3],
	species: [9],
	islegend: true,
	ape: "謹賀新年2016",
	as1: {
		desc: "<属性特効>4チェインで水・闇属性の敵単体へ特効ダメージ(600%)",
		proc: ChainAttrAttack(6.0, 4, [0,1,0,0,1]) ,
	},
	ss1: {
		desc: "<多弾魔術>スキル反射を無視し、敵単体へ雷・光の5回連続ダメージ(計350%)",
		turn: 5,
		proc: [ss_damage_s(3.5, [2, 3], 5), ss_ignore_skillcounter()],
	},
	as2: {
		desc: "<属性特効>4チェインで水・闇属性の敵単体へ特効ダメージ(700%)",
		proc: ChainAttrAttack(7.0, 4, [0,1,0,0,1]) ,
	},
	ss2: {
		desc: "<多弾魔術>スキル反射を無視し、敵単体へ雷・光属性の5回連続ダメージ(計650%)、5チェインを消費しさらにダメージアップ(計970%)",
		turn: 8,
		proc: [ss_damage_s(ss_chain_cost(5, 9.7, 6.5), [2, 3], 5), ss_ignore_skillcounter()],
	},
	awakes: [
		Panel_boost([0,0,1,0,0],2),
		Attr_statusup(200,0, [0,0,1,0,0]),
		Attr_statusup(0,200, [0,0,1,0,0]),
		Panel_boost([0,0,1,0,0],2),
		NEFTJOD(30),
		Abstate_invalid("ss_sealed"),
		Fastskill(3),
		Attr_statusup_sattr(0,100,[0,0,1,0,0,],0,300,[0,0,0,1,0,]),
		Attr_statusup_sattr(100,0,[0,0,1,0,0,],300,0,[0,0,0,1,0,]),
		Attr_relief([1,1,1,1,1,],20),
	],
	Lawake: [
		Attr_statusup(0,200, [0,0,1,0,0]),
		Statusup(0,500),
		NEFTJOD(30),
	],
}