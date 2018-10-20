{
	name: "憧れの晴天をゆく ヒサメ・タヅナキ",
	cardno: 90056,
	imageno: 8365,
	hp: 6249,
	atk: 2302,
	cost: 55,
	attr: [1,-1],
	species: [5],
	disable: true,
	islegend: true,
	ape: "DL限定精霊",
	as1: {
		desc: "<回復>水属性の味方のHPを回復、リーダー時さらに回復(13%/17%)",
		proc: [Heal(0.13, [0,1,0,0,0], 0), add_cond(Heal(0.17, [0,1,0,0,0], 0), when_leader())],
	},
	ss1: {
		desc: "<遅延>敵単体の攻撃ターンを1遅らせ、20チェインで更に1遅らせる",
		turn: 4,
		proc: [ss_delay_s(ss_chain_cond(20, 2, 1))],
	},
	awakes: [
		Fastskill(3),
		Heal_afterbattle(10),
		Panel_boost([0,1,0,0,0,],1),
		NEFTJOD(30),
		Attr_statusup(200,0, [0,1,0,0,0,]),
		Panel_boost([0,1,0,0,0,],2),
		Attr_statusup(200,0, [0,1,0,0,0,]),
		Attr_statusup(0,200, [0,1,0,0,0,]),
		NEFTJOD(30),
		Abstate_invalid("as_sealed"),
	],
	as2: {
		desc: "<回復>水属性の味方のHPを回復、リーダー時さらに回復(16%/20%)",
		proc: [Heal(0.16, [0,1,0,0,0], 0), add_cond(Heal(0.20, [0,1,0,0,0], 0), when_leader())],
	},
	ss2: {
		desc: "<遅延>敵単体の攻撃ターンを3遅らせ、20チェインで更に1遅らせる",
		turn: 10,
		proc: [ss_delay_s(ss_chain_cond(20, 4, 3))],
	},
	Lawake: [
		Abstate_invalid("ss_sealed"),
		Attr_statusup(0,100, [0,1,0,0,0,]),
		Statusup(500,0),
	],
}