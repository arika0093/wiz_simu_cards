{
	name: "仮初の仲良しトリオ DMA",
	cardno: 10639,
	imageno: 13068,
	hp: 3375,
	atk: 3110,
	cost: 50,
	attr: [0,4],
	species: [6],
	islegend: true,
	ape: "黒ウィズラビリンス",
	is_dist: true,
	as1: {
		desc: "<属性特効>雷・光属性の敵単体へ特効ダメージ(350%)",
		proc: ChainAttrAttack(3.5, 0, [0, 0, 1, 1, 0]),
	},
	ss1: {
		desc: "<解答削り>解答選択肢を1つ削り、4チェインを消費し解答を見破る",
		turn: 1,
		proc: [ss_chain_cost_skill(4, ss_answer_foresight(), ss_answer_narrow(1))],
	},
	awakes: [
		Panel_boost([1,0,0,0,0,],2),
		Attr_statusup(0,200, [1,0,0,0,0,]),
		Attr_statusup(200,0, [1,0,0,0,0,]),
		Panel_boost([1,0,0,0,0,],2),
		Fastskill(2),
		NEFTJOD(30),
		Awake_noeffect("経験値取得量アップ",2),
		Attr_statusup_subattr(0, 500),
		Attr_statusup_subattr(500, 0),
		Abstate_invalid("ss_sealed"),
	],
	as2: {
		desc: "<属性特効>雷・光属性の敵単体へ特効ダメージ(450%)",
		proc: ChainAttrAttack(4.5, 0, [0, 0, 1, 1, 0]),
	},
	ss2: {
		desc: "<解答削り>解答選択肢を1つ削り、3チェインを消費し解答を見破る",
		turn: 2,
		proc: [ss_chain_cost_skill(3, ss_answer_foresight(), ss_answer_narrow(1))],
	},
	Lawake: [
		Statusup(0,1000),
		Statusup(1000,0),
	],
}