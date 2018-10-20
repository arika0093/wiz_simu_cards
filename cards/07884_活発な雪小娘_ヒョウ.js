{
	name: "活発な雪小娘 ヒョウ",
	cardno: 7884,
	imageno: 9943,
	hp: 4333,
	atk: 1125,
	cost: 37,
	attr: [1,3],
	species: [5],
	islegend: true,
	is_dist: true,
	ape: "新説桃娘伝",
	as1: {
		desc: "<回復・攻撃強化>味方全体のHPを回復(10%)、さらに攻撃力をアップ(20%)",
		proc: [Heal(0.1, [1,1,1,1,1], 0), ChainEnhance(0.2, [1,1,1,1,1], 0)],
	},
	ss1: {
		desc: "<状態異常回復>味方全体の状態異常を回復する",
		turn: 4,
		proc: [ss_abstate_cure()],
	},
	awakes: [
		Fastskill(1),
		Attr_statusup(0,100,[0,1,0,0,0,]),
		Panel_boost([0,1,0,0,0,],1),
		Attr_statusup(200,0,[0,1,0,0,0,]),
		Spec_statusup(200,0,[5,]),
		Fastskill(2),
		Panel_boost([0,1,0,0,0,],2),
		Spec_statusup(0,200,[5,]),
		Awake_noeffect("経験値取得量アップ", 1),
		Heal_afterbattle(10),
	],
	as2: {
		desc: "<回復・攻撃強化>味方全体のHPを回復(12%)、さらに攻撃力をアップ(20%)",
		proc: [Heal(0.12, [1,1,1,1,1], 0), ChainEnhance(0.2, [1,1,1,1,1], 0)],
	},
	ss2: {
		desc: "<スキルチャージ>味方全体のスペシャルスキル発動ターンを1早める",
		turn: 6,
		proc: [ss_skillboost(1)],
	},
	Lawake: [
		Attr_statusup(0,200,[0,1,0,0,0,]),
		Attr_statusup(200,0,[0,1,0,0,0,]),
	],
}