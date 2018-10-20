{
	name: "聖なる夜空を渡る ヒカリ・スフィア",
	cardno: 9556,
	imageno: 9544,
	hp: 7549,
	atk: 2185,
	cost: 50,
	attr: [2,-1],
	species: [9],
	alias: ["デバフ", "巨乳"],
	islegend: true,
	ape: "エステレラⅠ",
	as1: {
		desc: "<回復・攻撃強化>雷属性の味方のHPを回復(13%)し、デッキに単色の精霊が多いほど、攻撃力をアップ(15%)(上限:5段階)",
		proc: [Heal(0.13, [0,0,1,0,0]), add_cond(ChainEnhance(0, [0,0,1,0,0], 0), as_singleattr_num(0, 0.15))],
	},
	ss1: {
		desc: "<継続回復>チェインプラス3の効果、さらに8ターン味方全体を徐々に回復する(20%)",
		turn: 8,
		proc: [ss_addchain(3), ss_regenerate(0.2, 8)],
	},
	awakes: [
		Panel_boost([0,0,1,0,0,],4),
		Attr_statusup_oattr(0,400, [0,0,1,0,0,]),
		Attr_statusup_oattr(400,0, [0,0,1,0,0,]),
		NEFTJOD(30),
		Heal_afterbattle(10),
		Fastskill(4),
		Attr_statusup(0,400, [0,0,1,0,0,]),
		Attr_statusup(400,0, [0,0,1,0,0,]),
		Awake_noeffect("経験値取得量アップ",2),
		Awake_noeffect("心眼",1),
	],
	as2: {
		desc: "<回復・攻撃強化>雷属性の味方のHPを回復(16%)し、デッキに単色の精霊が多いほど、攻撃力をアップ(15%)(上限:5段階)",
		proc: [Heal(0.16, [0,0,1,0,0]), add_cond(ChainEnhance(0, [0,0,1,0,0], 0), as_singleattr_num(0, 0.15))],
	},
	ss2: {
		desc: "<継続回復>チェインプラス4の効果、さらに10ターン味方全体を徐々に回復する(25%)",
		turn: 10,
		proc: [ss_addchain(4), ss_regenerate(0.25, 10)],
	},
	Lawake: [
		Attr_statusup(0,200, [0,0,1,0,0,]),
		Abstate_invalid(["as_sealed", "ss_sealed"]),
		Abstate_invalid("heal_reverse"),
	],
}