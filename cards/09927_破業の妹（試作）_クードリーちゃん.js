{
    name: "破業の妹（試作） クードリーちゃん",
    cardno: 9927,
    imageno: 12272,
    hp: 2465,
    atk: 3598,
    cost: 50,
    attr: [2, 3],
    species: [2],
    islegend: true,
    ape: "黒ウィズミュージアム 第2館",
    as1: {
        desc: "<属性特効>水・闇属性の敵単体へ特効ダメージ(350%)",
        proc: ChainAttrAttack(3.5, 0, [0, 1, 0, 0, 1]),
    },
    ss1: {
        desc: "<カウンター>1ターンの間、スキルカウンター待機(100%)",
        turn: 6,
        proc: [ss_skillcounter(1.0, 1)],
    },
    awakes: [
        Costdown(10),
        Panel_boost([0, 0, 1, 0, 0, ], 1),
        Attr_statusup(0, 200, [0, 0, 1, 0, 0, ]),
        Attr_statusup(200, 0, [0, 0, 1, 0, 0, ]),
        Panel_boost([0, 0, 1, 0, 0, ], 2),
        NEFTJOD(30),
        Fastskill(3),
        Attr_statusup_sattr(0, 100, [0, 0, 1, 0, 0, ], 0, 200, [0, 0, 0, 1, 0, ]),
        Attr_statusup_sattr(100, 0, [0, 0, 1, 0, 0, ], 200, 0, [0, 0, 0, 1, 0, ]),
        Abstate_invalid("all_sealed"),
    ],
    as2: {
        desc: "<属性特効>水・闇属性の敵単体へ特効ダメージ(450%)",
        proc: ChainAttrAttack(4.5, 0, [0, 1, 0, 0, 1]),
    },
    ss2:
    {
        desc: "<カウンター>1ターンの間、スキルカウンター待機(200%)",
        turn: 8,
        proc: [ss_skillcounter(2.0, 1)],
    },
    Lawake: [
        Attr_statusup(0, 200, [0, 0, 1, 0, 0, ]),
    ],
}