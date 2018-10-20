{
	name: "星の聖女 クレティア・ブライユ",
	cardno: 10544,
	imageno: 12969,
	imageno_prefix: "Ac7W69_",
	hp: 4095,
	atk: 4115,
	cost: 65,
	attr: [1,3],
	species: [9],
	islegend: true,
	ape: "ゴールデンアワード2018",
	as1: {
		desc: "<回復・複属性攻撃強化>水属性の味方を回復(10%)し、攻撃力もアップ(30%)。複属性を持つ精霊はさらにアップ(20%)",
		proc: [Heal(0.10, [0,1,0,0,0], 0), ChainEnhance_SubAttr(0.3, 0.5, [0,0,1,0,0], [1,1,0,1,1], 0)],
	},
	ss1: {
		desc: "<蓄積解放大魔術・聖>スキル反射を無視し、敵単体へ光属性のダメージ(100%)、さらにクエスト中の累積回復量に応じてダメージアップ(上限値:25万回復で14000%)",
		turn: 10,
		proc: [ss_accumulateDamageOfHeal_s(140.0, 250000, [3], 1), ss_ignore_skillcounter()],
	},
	awakes: [
		Panel_boost([0,1,0,0,0,],4),
		Attr_statusup(0,200, [0,1,0,0,0,]),
		Attr_statusup(200,0, [0,1,0,0,0,]),
		Abstate_invalid("as_sealed"),
		Fastskill(10),
		Attr_statusup_subattr(0, 500),
		Attr_statusup_subattr(500, 0),
		Abstate_invalid("ss_sealed"),
		Heal_afterbattle(20),
		Awake_noeffect("選ばれし者の栄誉",1),
	],
	as2: {
		desc: "<回復・複属性攻撃強化>水属性の味方を回復(13%)し、攻撃力もアップ(30%)。複属性を持つ精霊はさらにアップ(20%)",
		proc: [Heal(0.13, [0,1,0,0,0], 0), ChainEnhance_SubAttr(0.3, 0.5, [0,0,1,0,0], [1,1,0,1,1], 0)],
	},
	ss2: {
		desc: "<蓄積解放大魔術・聖>スキル反射を無視し、敵単体へ光属性のダメージ(100%)、さらにクエスト中の累積回復量に応じてダメージアップ(上限値:25万回復で14000%)",
		turn: 10,
		proc: [ss_accumulateDamageOfHeal_s(140.0, 250000, [3], 1), ss_ignore_skillcounter()],
	},
	Lawake: [
		Attr_statusup(0,200, [0,1,0,0,0,]),
		Attr_statusup(200,0, [0,1,0,0,0,]),
	],
}