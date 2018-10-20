{
    name: "AbCd-Ωω:《我が存在を滅す カイン》",
    cardno: 5036,
    imageno: 6773,
    hp: 2221,
    atk: 3579,
    cost: 46,
    attr: [2, 4],
    species: [11],
    disable: true,
    ape: "AbCd",
    awakes: [
        Fastskill(1),
        NEFTJOD(30),
        Attr_relief([0, 0, 0, 1, 1, ], 30),
        Attr_statusup(0, 200, [0, 0, 1, 0, 0, ]),
        Panel_boost([0, 0, 1, 0, 0, ], 1),
        NEFTJOD(30),
        Attr_statusup(200, 0, [0, 0, 1, 0, 0, ]),
        Fastskill(2),
        Panel_boost([0, 0, 1, 0, 0, ], 2),
        Attr_statusup(200, 0, [0, 0, 1, 0, 0, ]),
    ],
    as1: {
    	desc: "<チェイン攻撃>7チェインでダメージアップ/550％",
    	proc: ChainAttack(5.5, 7),
    },
    ss1: {
    	desc: "<効果解除>敵全体のカウンターを解除する",
    	turn: 8,
    	proc: [ss_break_attackcounter("all")],
    },
    islegend: true,
    Lawake: [
        Statusup(500, 0),
        Statusup(0, 500),
    ],
    as2: {
    	desc: "<チェイン攻撃>7チェインでダメージアップ/650％",
    	proc: ChainAttack(6.5, 7),
    },
    ss2: {
    	desc: "<効果解除大魔術>敵全体のカウンターを解除し、雷属性のダメージ。HP20％以下でさらにスキル反射を解除し、ダメージアップ(通常：180％ / HP20％以下：300％)",
    	turn: 13,
    	proc: [ss_break_attackcounter("all"), ss_damage_all(ss_hp_less(0.20, 3.0, 1.8), ss_hp_less_skill(0.2, ss_break_skillcounter("all")))],
    },
}