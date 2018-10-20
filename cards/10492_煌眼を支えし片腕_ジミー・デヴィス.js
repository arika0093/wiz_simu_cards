{
	name: "煌眼を支えし片腕 ジミー・デヴィス",
	cardno: 10492,
	imageno: 7866,
	hp: 3033,
	atk: 4058,
	cost: 57,
	attr: [0,1],
	species: [8],
	islegend: true,
	ape: "覇眼戦線Ⅰ",
	as1: {
		desc: "<全体攻撃>敵全体へダメージ(150%)、5チェインで更にダメージアップ(50%)",
		proc: [ChainAllAttack(1.5, 0), ChainAllAttack(2.0, 5)],
	},
	ss1: {
		desc: "<AS発動時間延長>10ターンの間、アンサースキル発動時間を15秒延長する(上限値:20秒)",
		turn: 3,
		proc: [ss_astime_ext(15, 10)],
	},
	awakes: [
		Panel_boost([1,0,0,0,0,],2),
		Attr_statusup_sattr(0,200, [1,0,0,0,0,], 0,100, [0,1,0,0,0,]),
		Attr_statusup_sattr(200,0, [1,0,0,0,0,], 100,0, [0,1,0,0,0,]),
		Panel_boost([1,0,0,0,0,],2),
		Attr_relief([1,1,0,0,0,],20),
		Attr_statusup_sattr(0,100, [1,0,0,0,0,], 0,200, [0,1,0,0,0,]),
		Attr_statusup_sattr(100,0, [1,0,0,0,0,], 200,0, [0,1,0,0,0,]),
		Fastskill(3),
		Awake_noeffect("アンサースキル延長",5),
		Awake_noeffect("心眼",1),
	],
	as2: {
		desc: "<全体攻撃>敵全体へダメージ(180%)、5チェインで更にダメージアップ(50%)",
		proc: [ChainAllAttack(1.8, 0), ChainAllAttack(2.3, 5)],
	},
	ss2: {
		desc: "<スキルチャージ>味方全体のスペシャルスキルの発動ターンを2早め、5チェインを消費しさらに1早める",
		turn: 7,
		proc: [ss_chain_cost_skill(5, ss_skillboost(3), ss_skillboost(2))],
	},
	Lawake: [
		Statusup(0,500),
		Attr_statusup(0,200, [1,0,0,0,0,]),
		NEFTJOD(30),
	],
}