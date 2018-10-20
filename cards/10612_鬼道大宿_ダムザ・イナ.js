{
	name: "鬼道大宿 ダムザ・イナ",
	cardno: 10612,
	imageno: 9823,
	hp: 3878,
	atk: 6473,
	cost: 54,
	attr: [2,-1],
	species: [9],
	islegend: true,
	ape: "魔轟三鉄傑 対 地獄三十六歌仙",
	as1: {
		desc: "<属性特効連撃>10チェインで水属性の敵単体へ特効3連撃(1200%)",
		proc: ChainDualAttrAttack(12, 10, 3, [0,1,0,0,0]),
	},
	ss1: {
		desc: "<残滅大魔術>8ターン溜めた後、スキル反射を無視し、敵全体へ雷属性のダメージ(1200%)、さらに10ターンの間、雷属性のダメージ(1200%)",
		turn: 8,
		charged: 8,
		proc: [ss_continue_damage(12, 12, [2], 10), ss_ignore_skillcounter()],
	},
	awakes: [
		Attr_statusup_oattr(0,400, [0,0,1,0,0,]),
		Attr_statusup_oattr(400,0, [0,0,1,0,0,]),
		Panel_boost([0,0,1,0,0,],4),
		NEFTJOD(30),
		Attr_statusup(400,0, [0,0,1,0,0,]),
		Abstate_invalid("as_selaed"),
		Fastskill(4),
		Attr_statusup(0,400, [0,0,1,0,0,]),
		Fastskill(4),
		Abstate_invalid("ss_sealed"),
	],
	as2: {
		desc: "<属性特効連撃>10チェインで水属性の敵単体へ特効3連撃(1300%)",
		proc: ChainDualAttrAttack(13, 10, 3, [0,1,0,0,0]),
	},
	ss2: {
		desc: "<残滅大魔術>8ターン溜めた後、スキル反射を無視し、敵全体へ雷属性のダメージ(1200%)、さらに10ターンの間、雷属性のダメージ(1200%)",
		turn: 8,
		charged: 8,
		proc: [ss_continue_damage(12, 12, [2], 10), ss_ignore_skillcounter()],
	},
	Lawake: [
		Attr_statusup(0,200, [0,0,1,0,0,]),
		Statusup(500,0),
		NEFTJOD(30),
	],
}