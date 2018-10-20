{
	name: "With a Will エニィ",
	cardno: 8046,
	imageno: 10175,
	hp: 2725,
	atk: 6490,
	cost: 57,
	attr: [1,-1],
	species: [8],
	disable: true,
	islegend: true,
	ape: "クロスディライブ",
	as1: {
		desc: "<チェイン攻撃>3チェインでダメージアップ、リーダー時さらにアップ(350%/500%)",
		proc: [ChainAttack(3.5, 3), ChainAttack_Leader(5.0, 3)],
	},
	ss1: {
		desc: "<詠唱大魔術>スキル反射を無視し、敵単体へ水属性のダメージ、クイズに5問解答し、解答時間が早いほどさらにダメージ(基本:800% 最大:2400%)",
		turn: 9,
		proc: [ss_damage_s(ss_answertime(8.0, 4.0), [1], 1), ss_ignore_skillcounter()],
	},
	awakes: [
		Panel_boost([0,1,0,0,0,],2),
		NEFTJOD(30),
		Fastskill(1),
		Panel_boost([0,1,0,0,0,],2),
		Abstate_invalid("heal_reverse"),
		Attr_statusup(0,400, [0,1,0,0,0,]),
		Attr_statusup(400,0, [0,1,0,0,0,]),
		Fastskill(2),
		Attr_relief([1,0,0,0,0,],20),
		Abstate_invalid(["as_sealed", "ss_sealed"]),
	],
	as2: {
		desc: "<チェイン攻撃>3チェインでダメージアップ、リーダー時さらにアップ(450%/600%)",
		proc: [ChainAttack(4.5, 3), ChainAttack_Leader(6.0, 3)],
	},
	ss2: {
		desc: "<詠唱大魔術>スキル反射を無視し、敵単体へ水属性のダメージ、クイズに5問解答し、解答時間が早いほどさらにダメージ(基本:1100% 最大:2700%)",
		turn: 12,
		proc: [ss_damage_s(ss_answertime(11.0, 4.0), [1], 1), ss_ignore_skillcounter()],
	},
	Lawake: [
		Statusup(0,1000),
		Attr_statusup(0,200, [0,1,0,0,0,]),
	],
}