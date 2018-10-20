{
	name: "逆影流継承者 ヒフミ・シシガ",
	cardno: 7800,
	imageno: 9886,
	hp: 2085,
	atk: 5022,
	cost: 44,
	attr: [1,-1],
	species: [8],
	islegend: true,
	ape: "大魔道杯 with 魔轟三鉄傑",
	is_dist: true,
	as1: {
		desc: "<属性特効連撃>4チェインで火属性の敵単体へ特効6連撃(600%)",
		proc: ChainDualAttrAttack(6.0, 4, 6, [1,0,0,0,0]),
	},
	ss1: {
		desc: "<スキルチャージ&遅延>味方のMAXHP50%を使い、スペシャルスキルの発動ターンを1早め、敵全体の攻撃ターンを1遅らせる",
		turn: 5,
		proc: [ss_skillboost(1), ss_delay_all(1), ss_consume_all(0.5)],
	},
	awakes: [
		Fastskill(1),
		Panel_boost([0,1,0,0,0,],1),
		Statusup(0,200),
		NEFTJOD(30),
		Statusup(200,0),
		Panel_boost([0,1,0,0,0,],2),
		Fastskill(2),
		Attr_statusup(0,200, [0,1,0,0,0,]),
		Attr_statusup(200,0, [0,1,0,0,0,]),
		Awake_chainguard(),
	],
	as2: {
		desc: "<属性特効連撃>4チェインで火属性の敵単体へ特効6連撃(700%)",
		proc: ChainDualAttrAttack(7.0, 4, 6, [1,0,0,0,0]),
	},
	ss2: {
		desc: "<スキルチャージ&遅延>味方のMAXHP50%を使い、スペシャルスキルの発動ターンを2早め、敵全体の攻撃ターンを2遅らせる",
		turn: 8,
		proc: [ss_skillboost(2), ss_delay_all(2), ss_consume_all(0.5)],
	},
	Lawake: [
		Attr_statusup(0,100, [0,1,0,0,0,]),
		Statusup(400,0),
	],
}