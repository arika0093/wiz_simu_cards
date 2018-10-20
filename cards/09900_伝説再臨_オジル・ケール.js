{
	name: "伝説再臨 オジル・ケール",
	cardno: 9900,
	imageno: 9621,
	hp: 2544,
	atk: 4095,
	cost: 55,
	attr: [1,2],
	species: [8],
	islegend: true,
	is_dist: true,
	ape: "魔道杯(その他)",
	as1: {
		desc: "<全体攻撃>敵全体へダメージ(150%)、パネルの色が2色以上でさらにダメージアップ(50%)",
		proc: [ChainAllAttack(1.5, 0), add_cond(ChainAllAttack(2.0, 0), as_panel_over2())],
	},
	as2: {
		desc: "<全体攻撃>敵全体へダメージ(180%)、パネルの色が2色以上でさらにダメージアップ(50%)",
		proc: [ChainAllAttack(1.8, 0), add_cond(ChainAllAttack(2.3, 0), as_panel_over2())],
	},
	ss1: {
		desc: "<多弾魔術>4ターン溜めた後、スキル反射を無視し、敵単体へ水・雷属性の20回連続ダメージ(2000%)",
		turn: 8,
		charged: 4,
		proc: [ss_damage_s(20, [1,2], 29), ss_ignore_skillcounter()],
	},
	ss2: {
		desc: "<多弾魔術>4ターン溜めた後、スキル反射を無視し、敵単体へ水・雷属性の20回連続ダメージ(2000%)",
		turn: 8,
		charged: 4,
		proc: [ss_damage_s(20, [1,2], 29), ss_ignore_skillcounter()],
	},
	awakes: [
		NEFTJOD(60),
		Fastskill(2),
		Panel_boost([0,1,0,0,0,],4),
		Attr_statusup(0,200,[0,1,1,0,0,]),
		Abstate_invalid("ss_sealed"),
		Attr_statusup(200,0,[0,1,1,0,0,]),
		Fastskill(2),
		Spec_statusup(400,0,[8,]),
		Spec_statusup(0,400,[8,]),
		Awake_noeffect("心眼",1),
	],
	Lawake: [
		Statusup(0,1000),
		Attr_statusup(0,200,[0,1,1,0,0,]),
	],
}