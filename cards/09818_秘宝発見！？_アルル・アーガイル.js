{
	name: "秘宝発見！？ アルル・アーガイル",
	cardno: 9818,
	imageno: 12161,
	hp: 2315,
	atk: 4434,
	cost: 57,
	attr: [0,3],
	species: [8],
	islegend: true,
	ape: "眠れる遺跡のアウトランダー",
	as1: {
		desc: "<連撃・複属性攻撃強化>敵単体を3回連続攻撃(250%)、さらに火属性の攻撃力をアップ(10%)、複属性が光属性だとさらにアップ(30%)",
		proc: [ChainDualAttack(2.5, 0, 3), ChainEnhance_SubAttr(0.10, 0.40, [1,0,0,0,0], [0,0,0,1,0], 0)],
	},
	ss1: {
		desc: "<残滅大魔術>敵全体へ光属性のダメージ(600%)、さらに10ターンの間、光属性のダメージ(100%)、さらに敵にトドメを刺した数だけチェインプラス1",
		turn: 4,
		chadd_killing: true,
		proc: [ss_continue_damage(6.0, 1.0, [3], 10)],
	},
	awakes: [
		Costdown(20),
		Panel_boost([1,0,0,0,0,],2),
		Attr_statusup(0,200, [1,0,0,0,0,]),
		Attr_statusup(200,0, [1,0,0,0,0,]),
		Panel_boost([1,0,0,0,0,],2),
		Attr_relief([1,1,1,1,1,],10),
		Fastskill(3),
		Attr_statusup_sattr(0,100, [1,0,0,0,0,], 0,300, [0,0,0,1,0,]),
		Attr_statusup_sattr(100,0, [1,0,0,0,0,], 300,0, [0,0,0,1,0,]),
		Abstate_invalid("as_sealed"),
	],
	as2: {
		desc: "<連撃・複属性攻撃強化>敵単体を3回連続攻撃(350%)、さらに火属性の攻撃力をアップ(10%)、複属性が光属性だとさらにアップ(30%)",
		proc: [ChainDualAttack(3.5, 0, 3), ChainEnhance_SubAttr(0.10, 0.40, [1,0,0,0,0], [0,0,0,1,0], 0)],
	},
	ss2: {
		desc: "<残滅大魔術>敵全体へ光属性のダメージ(600%)、さらに10ターンの間、光属性のダメージ(100%)、さらに敵にトドメを刺した数だけチェインプラス1",
		turn: 4,
		chadd_killing: true,
		proc: [ss_continue_damage(6.0, 1.0, [3], 10)],
	},
	Lawake: [
		Statusup(0,1500),
		Abstate_invalid("ss_sealed"),
	],
}