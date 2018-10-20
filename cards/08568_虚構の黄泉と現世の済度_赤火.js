{
	name: "虚構の黄泉と現世の済度 赤火",
	cardno: 8568,
	imageno: 10738,
	hp: 2375,
	atk: 3685,
	cost: 50,
	attr: [1,4],
	species: [2],
	islegend: true,
	ape: "八百万神秘譚Ⅳ",
	alias: ["あかび", "あかひ"],
	is_dist: true,
	as1: {
		desc: "<瀕死攻撃>HP15%以下でダメージアップ(1600%)",
		proc: add_cond(ChainAttack(16.0, 0), when_hp_less(0.15)),
	},
	ss1: {
		desc: "<多弾魔術>スキル反射を無視し、自分自身のMAXHPの95%を使い敵単体へ水・闇属性の5回連続ダメージ(450%)",
		turn: 5,
		proc: [ss_damage_s(4.5, [1,4], 5), ss_consume_own(0.95), ss_ignore_skillcounter()],
	},
	awakes: [
		Panel_boost([0,1,0,0,0,],2),
		Attr_statusup(0,200, [0,1,0,0,0,]),
		Attr_statusup(200,0, [0,1,0,0,0,]),
		Panel_boost([0,1,0,0,0,],2),
		Fastskill(3),
		NEFTJOD(60),
		Attr_statusup_sattr(0,100, [0,1,0,0,0,], 0,200, [0,0,0,0,1,]),
		Attr_statusup_sattr(100,0, [0,1,0,0,0,], 200,0, [0,0,0,0,1,]),
		Attr_relief([1,0,0,0,0,],10),
		Awake_damage_multiple(1.1, 500),
	],
	as2: {
		desc: "<瀕死攻撃>HP15%以下でダメージアップ(2100%)",
		proc: add_cond(ChainAttack(21.0, 0), when_hp_less(0.15)),
	},
	ss2: {
		desc: "<多弾魔術>スキル反射を無視し、自分自身のMAXHPの95%を使い敵単体へ水・闇属性の5回連続ダメージ(650%)",
		turn: 7,
		proc: [ss_damage_s(6.5, [1,4], 5), ss_consume_own(0.95), ss_ignore_skillcounter()],
	},
	Lawake: [
		Statusup(0,1000),
		Abstate_invalid("as_sealed"),
	],
}