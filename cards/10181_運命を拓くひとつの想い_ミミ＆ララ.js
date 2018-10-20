{
    name: "運命を拓くひとつの想い ミミ＆ララ",
    cardno: 10181,
    imageno: 10111,
    imageno_prefix: "5cxek1_",
    hp: 6445,
    atk: 1683,
    cost: 57,
    attr: [2,4],
    species: [3],
    islegend: true,
    ape: "周年記念精霊(4周年)",
    as1: {
        desc: "<回復・複属性攻撃強化>雷属性の味方を回復(10%)し、攻撃力もアップ(30%)。複属性が闇属性だとさらに攻撃力をアップ(30%)",
        proc: [Heal(0.10, [0, 0, 1, 0, 0], 0), ChainEnhance_SubAttr(0.30, 0.60, [0, 0, 1, 0, 0], [0, 0, 0, 0, 1], 0)],
    },
    ss1: {
        desc: "<状態異常無効>2ターン溜めた後、10ターン敵の状態異常攻撃を無効化する",
        turn: 3,
        charged: 2,
        proc: [ss_absattack_disable(10)],
    },
    awakes: [
        Panel_boost([0,0,1,0,0,],4),
        NEFTJOD(30),
        Fastskill(1),
        Attr_statusup(0,200, [0,0,1,0,0,]),
        Attr_statusup(200,0, [0,0,1,0,0,]),
        Abstate_invalid("ss_sealed"),
	Attr_statusup_subattr(0, 500),
	Attr_statusup_subattr(500, 0),
        Fastskill(2),
        Heal_afterbattle(10),
    ],
    as2: {
        desc: "<回復・複属性攻撃強化>雷属性の味方を回復(10%)し、攻撃力もアップ(30%)。複属性が闇属性だとさらに攻撃力をアップ(60%)",
        proc: [Heal(0.10, [0,0,1,0,0], 0), ChainEnhance_SubAttr(0.30, 0.90, [0, 0, 1, 0, 0], [0, 0, 0, 0, 1], 0)],
    },
    ss2: {
        desc: "<継続回復>5ターン味方全体を徐々に回復する(20%)",
        turn: 5,
        proc: [ss_regenerate(0.20, 5)],
    },
    Lawake: [
        Statusup(500,0),
        Attr_statusup(0,200, [0,0,1,0,0,]),
        NEFTJOD(30),
    ],
}