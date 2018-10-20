{
	name: "嵐めく刃 エッジワース＝ゼラード",
	cardno: 8583,
	imageno: 10754,
	hp: 2475,
	atk: 4097,
	cost: 54,
	attr: [0,4],
	species: [8],
	disable: true,
	islegend: true,
	ape: "黄昏メアレスⅢ",
	as1: {
		desc: "<全体攻撃>敵全体へダメージ(150%),5チェインで更にダメージアップ(50%)",
		proc: [ChainAllAttack(1.5, 0), ChainAllAttack(2.0, 5)],
	},
	ss1: {
		desc: "<スキルチャージ>味方一人のスペシャルスキルの発動ターンを1早める",
		turn: 5,
		proc: [ss_toselect_one(ss_skillboost(1))],
	},
	awakes: [
		Panel_boost([1,0,0,0,0,],2),
		Attr_statusup(0,200, [1,0,0,0,0,]),
		Attr_statusup(200,0, [1,0,0,0,0,]),
		Panel_boost([1,0,0,0,0,],2),
		Attr_relief([1,1,1,1,1,],10),
		Abstate_invalid("discharge"),
		Abstate_invalid("ss_sealed"),
		Attr_statusup_sattr(0,100, [1,0,0,0,0,], 0,300, [0,0,0,0,1,]),
		Attr_statusup_sattr(100,0, [1,0,0,0,0,], 300,0, [0,0,0,0,1,]),
		Fastskill(5),
	],
	as2: {
		desc: "<全体攻撃>敵全体へダメージ(180%),5チェインで更にダメージアップ(50%)",
		proc: [ChainAllAttack(1.8, 0), ChainAllAttack(2.3, 5)],
	},
	ss2: {
		desc: "<スキルチャージ>味方一人のスペシャルスキルの発動ターンを4早める",
		turn: 8,
		proc: [ss_toselect_one(ss_skillboost(4))],
	},
	Lawake: [
		Statusup(500,0),
		Attr_statusup(0,300, [1,0,0,0,0,]),
	],
}