const original_data = {
    "countries": [
        {
            "name": "安道尔",
            "flagUrl": "flags/ad.png",
            "info": "安道尔，是一个很棒的国家！"
        },
        {
            "name": "阿拉伯联合酋长国",
            "flagUrl": "flags/ae.png",
            "info": "阿拉伯联合酋长国，是一个很棒的国家！"
        },
        {
            "name": "阿富汗",
            "flagUrl": "flags/af.png",
            "info": "阿富汗，是一个很棒的国家！"
        },
        {
            "name": "安提瓜和巴布达",
            "flagUrl": "flags/ag.png",
            "info": "安提瓜和巴布达，是一个很棒的国家！"
        },
        {
            "name": "安圭拉",
            "flagUrl": "flags/ai.png",
            "info": "安圭拉，是一个很棒的国家！"
        },
        {
            "name": "阿尔巴尼亚",
            "flagUrl": "flags/al.png",
            "info": "阿尔巴尼亚，是一个很棒的国家！"
        },
        {
            "name": "亚美尼亚",
            "flagUrl": "flags/am.png",
            "info": "亚美尼亚，是一个很棒的国家！"
        },
        {
            "name": "安哥拉",
            "flagUrl": "flags/ao.png",
            "info": "安哥拉，是一个很棒的国家！"
        },
        {
            "name": "阿根廷",
            "flagUrl": "flags/ar.png",
            "info": "阿根廷，是一个很棒的国家！"
        },
        {
            "name": "美属萨摩亚",
            "flagUrl": "flags/as.png",
            "info": "美属萨摩亚，是一个很棒的国家！"
        },
        {
            "name": "奥地利",
            "flagUrl": "flags/at.png",
            "info": "奥地利，是一个很棒的国家！"
        },
        {
            "name": "澳大利亚",
            "flagUrl": "flags/au.png",
            "info": "澳大利亚，是一个很棒的国家！"
        },
        {
            "name": "阿鲁巴",
            "flagUrl": "flags/aw.png",
            "info": "阿鲁巴，是一个很棒的国家！"
        },
        {
            "name": "奥兰",
            "flagUrl": "flags/ax.png",
            "info": "奥兰，是一个很棒的国家！"
        },
        {
            "name": "阿塞拜疆",
            "flagUrl": "flags/az.png",
            "info": "阿塞拜疆，是一个很棒的国家！"
        },
        {
            "name": "波斯尼亚和黑塞哥维那",
            "flagUrl": "flags/ba.png",
            "info": "波斯尼亚和黑塞哥维那，是一个很棒的国家！"
        },
        {
            "name": "巴巴多斯",
            "flagUrl": "flags/bb.png",
            "info": "巴巴多斯，是一个很棒的国家！"
        },
        {
            "name": "孟加拉国",
            "flagUrl": "flags/bd.png",
            "info": "孟加拉国，是一个很棒的国家！"
        },
        {
            "name": "比利时",
            "flagUrl": "flags/be.png",
            "info": "比利时，是一个很棒的国家！"
        },
        {
            "name": "布吉纳法索",
            "flagUrl": "flags/bf.png",
            "info": "布吉纳法索，是一个很棒的国家！"
        },
        {
            "name": "保加利亚",
            "flagUrl": "flags/bg.png",
            "info": "保加利亚，是一个很棒的国家！"
        },
        {
            "name": "巴林",
            "flagUrl": "flags/bh.png",
            "info": "巴林，是一个很棒的国家！"
        },
        {
            "name": "布隆迪",
            "flagUrl": "flags/bi.png",
            "info": "布隆迪，是一个很棒的国家！"
        },
        {
            "name": "贝宁",
            "flagUrl": "flags/bj.png",
            "info": "贝宁，是一个很棒的国家！"
        },
        {
            "name": "圣巴泰勒米",
            "flagUrl": "flags/bl.png",
            "info": "圣巴泰勒米，是一个很棒的国家！"
        },
        {
            "name": "百慕大",
            "flagUrl": "flags/bm.png",
            "info": "百慕大，是一个很棒的国家！"
        },
        {
            "name": "汶莱",
            "flagUrl": "flags/bn.png",
            "info": "汶莱，是一个很棒的国家！"
        },
        {
            "name": "玻利维亚",
            "flagUrl": "flags/bo.png",
            "info": "玻利维亚，是一个很棒的国家！"
        },
        {
            "name": "巴西",
            "flagUrl": "flags/br.png",
            "info": "巴西，是一个很棒的国家！"
        },
        {
            "name": "巴哈马",
            "flagUrl": "flags/bs.png",
            "info": "巴哈马，是一个很棒的国家！"
        },
        {
            "name": "不丹",
            "flagUrl": "flags/bt.png",
            "info": "不丹，是一个很棒的国家！"
        },
        {
            "name": "博茨瓦纳",
            "flagUrl": "flags/bw.png",
            "info": "博茨瓦纳，是一个很棒的国家！"
        },
        {
            "name": "白俄罗斯",
            "flagUrl": "flags/by.png",
            "info": "白俄罗斯，是一个很棒的国家！"
        },
        {
            "name": "伯利兹",
            "flagUrl": "flags/bz.png",
            "info": "伯利兹，是一个很棒的国家！"
        },
        {
            "name": "加拿大",
            "flagUrl": "flags/ca.png",
            "info": "加拿大，是一个很棒的国家！"
        },
        {
            "name": "科科斯（基林）群岛",
            "flagUrl": "flags/cc.png",
            "info": "科科斯（基林）群岛，是一个很棒的国家！"
        },
        {
            "name": "刚果民主共和国",
            "flagUrl": "flags/cd.png",
            "info": "刚果民主共和国，是一个很棒的国家！"
        },
        {
            "name": "中非共和国",
            "flagUrl": "flags/cf.png",
            "info": "中非共和国，是一个很棒的国家！"
        },
        {
            "name": "刚果共和国",
            "flagUrl": "flags/cg.png",
            "info": "刚果共和国，是一个很棒的国家！"
        },
        {
            "name": "瑞士",
            "flagUrl": "flags/ch.png",
            "info": "瑞士，是一个很棒的国家！"
        },
        {
            "name": "科特迪瓦",
            "flagUrl": "flags/ci.png",
            "info": "科特迪瓦，是一个很棒的国家！"
        },
        {
            "name": "库克群岛",
            "flagUrl": "flags/ck.png",
            "info": "库克群岛，是一个很棒的国家！"
        },
        {
            "name": "智利",
            "flagUrl": "flags/cl.png",
            "info": "智利，是一个很棒的国家！"
        },
        {
            "name": "喀麦隆",
            "flagUrl": "flags/cm.png",
            "info": "喀麦隆，是一个很棒的国家！"
        },
        {
            "name": "中华人民共和国",
            "flagUrl": "flags/cn.png",
            "info": "中华人民共和国，是一个很棒的国家！"
        },
        {
            "name": "哥伦比亚",
            "flagUrl": "flags/co.png",
            "info": "哥伦比亚，是一个很棒的国家！"
        },
        {
            "name": "哥斯达黎加",
            "flagUrl": "flags/cr.png",
            "info": "哥斯达黎加，是一个很棒的国家！"
        },
        {
            "name": "古巴",
            "flagUrl": "flags/cu.png",
            "info": "古巴，是一个很棒的国家！"
        },
        {
            "name": "佛得角",
            "flagUrl": "flags/cv.png",
            "info": "佛得角，是一个很棒的国家！"
        },
        {
            "name": "库拉索",
            "flagUrl": "flags/cw.png",
            "info": "库拉索，是一个很棒的国家！"
        },
        {
            "name": "圣诞岛",
            "flagUrl": "flags/cx.png",
            "info": "圣诞岛，是一个很棒的国家！"
        },
        {
            "name": "塞浦路斯",
            "flagUrl": "flags/cy.png",
            "info": "塞浦路斯，是一个很棒的国家！"
        },
        {
            "name": "捷克",
            "flagUrl": "flags/cz.png",
            "info": "捷克，是一个很棒的国家！"
        },
        {
            "name": "德国",
            "flagUrl": "flags/de.png",
            "info": "德国，是一个很棒的国家！"
        },
        {
            "name": "吉布提",
            "flagUrl": "flags/dj.png",
            "info": "吉布提，是一个很棒的国家！"
        },
        {
            "name": "丹麦",
            "flagUrl": "flags/dk.png",
            "info": "丹麦，是一个很棒的国家！"
        },
        {
            "name": "多米尼克",
            "flagUrl": "flags/dm.png",
            "info": "多米尼克，是一个很棒的国家！"
        },
        {
            "name": "多明尼加",
            "flagUrl": "flags/do.png",
            "info": "多明尼加，是一个很棒的国家！"
        },
        {
            "name": "阿尔及利亚",
            "flagUrl": "flags/dz.png",
            "info": "阿尔及利亚，是一个很棒的国家！"
        },
        {
            "name": "厄瓜多尔",
            "flagUrl": "flags/ec.png",
            "info": "厄瓜多尔，是一个很棒的国家！"
        },
        {
            "name": "爱沙尼亚",
            "flagUrl": "flags/ee.png",
            "info": "爱沙尼亚，是一个很棒的国家！"
        },
        {
            "name": "埃及",
            "flagUrl": "flags/eg.png",
            "info": "埃及，是一个很棒的国家！"
        },
        {
            "name": "西撒哈拉",
            "flagUrl": "flags/eh.png",
            "info": "西撒哈拉，是一个很棒的国家！"
        },
        {
            "name": "厄立特里亚",
            "flagUrl": "flags/er.png",
            "info": "厄立特里亚，是一个很棒的国家！"
        },
        {
            "name": "西班牙",
            "flagUrl": "flags/es.png",
            "info": "西班牙，是一个很棒的国家！"
        },
        {
            "name": "埃塞俄比亚",
            "flagUrl": "flags/et.png",
            "info": "埃塞俄比亚，是一个很棒的国家！"
        },
        {
            "name": "芬兰",
            "flagUrl": "flags/fi.png",
            "info": "芬兰，是一个很棒的国家！"
        },
        {
            "name": "斐济",
            "flagUrl": "flags/fj.png",
            "info": "斐济，是一个很棒的国家！"
        },
        {
            "name": "福克兰群岛",
            "flagUrl": "flags/fk.png",
            "info": "福克兰群岛，是一个很棒的国家！"
        },
        {
            "name": "密克罗尼西亚联邦",
            "flagUrl": "flags/fm.png",
            "info": "密克罗尼西亚联邦，是一个很棒的国家！"
        },
        {
            "name": "法罗群岛",
            "flagUrl": "flags/fo.png",
            "info": "法罗群岛，是一个很棒的国家！"
        },
        {
            "name": "法国",
            "flagUrl": "flags/fr.png",
            "info": "法国，是一个很棒的国家！"
        },
        {
            "name": "加蓬",
            "flagUrl": "flags/ga.png",
            "info": "加蓬，是一个很棒的国家！"
        },
        {
            "name": "英国",
            "flagUrl": "flags/gb.png",
            "info": "英国，是一个很棒的国家！"
        },
        {
            "name": "格鲁吉亚",
            "flagUrl": "flags/ge.png",
            "info": "格鲁吉亚，是一个很棒的国家！"
        },
        {
            "name": "加纳",
            "flagUrl": "flags/gh.png",
            "info": "加纳，是一个很棒的国家！"
        },
        {
            "name": "格陵兰",
            "flagUrl": "flags/gl.png",
            "info": "格陵兰，是一个很棒的国家！"
        },
        {
            "name": "冈比亚",
            "flagUrl": "flags/gm.png",
            "info": "冈比亚，是一个很棒的国家！"
        },
        {
            "name": "几内亚",
            "flagUrl": "flags/gn.png",
            "info": "几内亚，是一个很棒的国家！"
        },
        {
            "name": "赤道几内亚",
            "flagUrl": "flags/gq.png",
            "info": "赤道几内亚，是一个很棒的国家！"
        },
        {
            "name": "希腊",
            "flagUrl": "flags/gr.png",
            "info": "希腊，是一个很棒的国家！"
        },
        {
            "name": "危地马拉",
            "flagUrl": "flags/gt.png",
            "info": "危地马拉，是一个很棒的国家！"
        },
        {
            "name": "几内亚比索",
            "flagUrl": "flags/gw.png",
            "info": "几内亚比索，是一个很棒的国家！"
        },
        {
            "name": "圭亚那",
            "flagUrl": "flags/gy.png",
            "info": "圭亚那，是一个很棒的国家！"
        },
        {
            "name": "洪都拉斯",
            "flagUrl": "flags/hn.png",
            "info": "洪都拉斯，是一个很棒的国家！"
        },
        {
            "name": "克罗地亚",
            "flagUrl": "flags/hr.png",
            "info": "克罗地亚，是一个很棒的国家！"
        },
        {
            "name": "海地",
            "flagUrl": "flags/ht.png",
            "info": "海地，是一个很棒的国家！"
        },
        {
            "name": "匈牙利",
            "flagUrl": "flags/hu.png",
            "info": "匈牙利，是一个很棒的国家！"
        },
        {
            "name": "印度尼西亚",
            "flagUrl": "flags/id.png",
            "info": "印度尼西亚，是一个很棒的国家！"
        },
        {
            "name": "爱尔兰",
            "flagUrl": "flags/ie.png",
            "info": "爱尔兰，是一个很棒的国家！"
        },
        {
            "name": "以色列",
            "flagUrl": "flags/il.png",
            "info": "以色列，是一个很棒的国家！"
        },
        {
            "name": "印度",
            "flagUrl": "flags/in.png",
            "info": "印度，是一个很棒的国家！"
        },
        {
            "name": "伊拉克",
            "flagUrl": "flags/iq.png",
            "info": "伊拉克，是一个很棒的国家！"
        },
        {
            "name": "伊朗",
            "flagUrl": "flags/ir.png",
            "info": "伊朗，是一个很棒的国家！"
        },
        {
            "name": "冰岛",
            "flagUrl": "flags/is.png",
            "info": "冰岛，是一个很棒的国家！"
        },
        {
            "name": "意大利",
            "flagUrl": "flags/it.png",
            "info": "意大利，是一个很棒的国家！"
        },
        {
            "name": "牙买加",
            "flagUrl": "flags/jm.png",
            "info": "牙买加，是一个很棒的国家！"
        },
        {
            "name": "约旦",
            "flagUrl": "flags/jo.png",
            "info": "约旦，是一个很棒的国家！"
        },
        {
            "name": "日本",
            "flagUrl": "flags/jp.png",
            "info": "日本，是一个很棒的国家！"
        },
        {
            "name": "肯尼亚",
            "flagUrl": "flags/ke.png",
            "info": "肯尼亚，是一个很棒的国家！"
        },
        {
            "name": "吉尔吉斯斯坦",
            "flagUrl": "flags/kg.png",
            "info": "吉尔吉斯斯坦，是一个很棒的国家！"
        },
        {
            "name": "柬埔寨",
            "flagUrl": "flags/kh.png",
            "info": "柬埔寨，是一个很棒的国家！"
        },
        {
            "name": "基里巴斯",
            "flagUrl": "flags/ki.png",
            "info": "基里巴斯，是一个很棒的国家！"
        },
        {
            "name": "科摩罗",
            "flagUrl": "flags/km.png",
            "info": "科摩罗，是一个很棒的国家！"
        },
        {
            "name": "圣克里斯多福及尼维斯",
            "flagUrl": "flags/kn.png",
            "info": "圣克里斯多福及尼维斯，是一个很棒的国家！"
        },
        {
            "name": "朝鲜",
            "flagUrl": "flags/kp.png",
            "info": "朝鲜民主主义人民共和国，是一个很棒的国家！"
        },
        {
            "name": "韩国",
            "flagUrl": "flags/kr.png",
            "info": "大韩民国，是一个很棒的国家！"
        },
        {
            "name": "科威特",
            "flagUrl": "flags/kw.png",
            "info": "科威特，是一个很棒的国家！"
        },
        {
            "name": "开曼群岛",
            "flagUrl": "flags/ky.png",
            "info": "开曼群岛，是一个很棒的国家！"
        },
        {
            "name": "哈萨克斯坦",
            "flagUrl": "flags/kz.png",
            "info": "哈萨克斯坦，是一个很棒的国家！"
        },
        {
            "name": "老挝",
            "flagUrl": "flags/la.png",
            "info": "老挝，是一个很棒的国家！"
        },
        {
            "name": "黎巴嫩",
            "flagUrl": "flags/lb.png",
            "info": "黎巴嫩，是一个很棒的国家！"
        },
        {
            "name": "圣卢西亚",
            "flagUrl": "flags/lc.png",
            "info": "圣卢西亚，是一个很棒的国家！"
        },
        {
            "name": "列支敦士登",
            "flagUrl": "flags/li.png",
            "info": "列支敦士登，是一个很棒的国家！"
        },
        {
            "name": "斯里兰卡",
            "flagUrl": "flags/lk.png",
            "info": "斯里兰卡，是一个很棒的国家！"
        },
        {
            "name": "利比里亚",
            "flagUrl": "flags/lr.png",
            "info": "利比里亚，是一个很棒的国家！"
        },
        {
            "name": "莱索托",
            "flagUrl": "flags/ls.png",
            "info": "莱索托，是一个很棒的国家！"
        },
        {
            "name": "立陶宛",
            "flagUrl": "flags/lt.png",
            "info": "立陶宛，是一个很棒的国家！"
        },
        {
            "name": "卢森堡",
            "flagUrl": "flags/lu.png",
            "info": "卢森堡，是一个很棒的国家！"
        },
        {
            "name": "拉脱维亚",
            "flagUrl": "flags/lv.png",
            "info": "拉脱维亚，是一个很棒的国家！"
        },
        {
            "name": "利比亚",
            "flagUrl": "flags/ly.png",
            "info": "利比亚，是一个很棒的国家！"
        },
        {
            "name": "摩洛哥",
            "flagUrl": "flags/ma.png",
            "info": "摩洛哥，是一个很棒的国家！"
        },
        {
            "name": "摩纳哥",
            "flagUrl": "flags/mc.png",
            "info": "摩纳哥，是一个很棒的国家！"
        },
        {
            "name": "摩尔多瓦",
            "flagUrl": "flags/md.png",
            "info": "摩尔多瓦，是一个很棒的国家！"
        },
        {
            "name": "蒙特内哥罗(黑山)",
            "flagUrl": "flags/me.png",
            "info": "蒙特内哥罗，是一个很棒的国家！"
        },
        {
            "name": "马达加斯加",
            "flagUrl": "flags/mg.png",
            "info": "马达加斯加，是一个很棒的国家！"
        },
        {
            "name": "马绍尔群岛",
            "flagUrl": "flags/mh.png",
            "info": "马绍尔群岛，是一个很棒的国家！"
        },
        {
            "name": "马里",
            "flagUrl": "flags/ml.png",
            "info": "马里，是一个很棒的国家！"
        },
        {
            "name": "缅甸",
            "flagUrl": "flags/mm.png",
            "info": "缅甸，是一个很棒的国家！"
        },
        {
            "name": "蒙古国",
            "flagUrl": "flags/mn.png",
            "info": "蒙古国，是一个很棒的国家！"
        },
        {
            "name": "毛里塔尼亚",
            "flagUrl": "flags/mr.png",
            "info": "毛里塔尼亚，是一个很棒的国家！"
        },
        {
            "name": "马耳他",
            "flagUrl": "flags/mt.png",
            "info": "马耳他，是一个很棒的国家！"
        },
        {
            "name": "毛里求斯",
            "flagUrl": "flags/mu.png",
            "info": "毛里求斯，是一个很棒的国家！"
        },
        {
            "name": "马尔代夫",
            "flagUrl": "flags/mv.png",
            "info": "马尔代夫，是一个很棒的国家！"
        },
        {
            "name": "马拉维",
            "flagUrl": "flags/mw.png",
            "info": "马拉维，是一个很棒的国家！"
        },
        {
            "name": "墨西哥",
            "flagUrl": "flags/mx.png",
            "info": "墨西哥，是一个很棒的国家！"
        },
        {
            "name": "马来西亚",
            "flagUrl": "flags/my.png",
            "info": "马来西亚，是一个很棒的国家！"
        },
        {
            "name": "莫桑比克",
            "flagUrl": "flags/mz.png",
            "info": "莫桑比克，是一个很棒的国家！"
        },
        {
            "name": "纳米比亚",
            "flagUrl": "flags/na.png",
            "info": "纳米比亚，是一个很棒的国家！"
        },
        {
            "name": "新喀里多尼亚",
            "flagUrl": "flags/nc.png",
            "info": "新喀里多尼亚，是一个很棒的国家！"
        },
        {
            "name": "尼日尔",
            "flagUrl": "flags/ne.png",
            "info": "尼日尔，是一个很棒的国家！"
        },
        {
            "name": "尼日利亚",
            "flagUrl": "flags/ng.png",
            "info": "尼日利亚，是一个很棒的国家！"
        },
        {
            "name": "尼加拉瓜",
            "flagUrl": "flags/ni.png",
            "info": "尼加拉瓜，是一个很棒的国家！"
        },
        {
            "name": "荷兰",
            "flagUrl": "flags/nl.png",
            "info": "荷兰王国，是一个很棒的国家！"
        },
        {
            "name": "挪威",
            "flagUrl": "flags/no.png",
            "info": "挪威，是一个很棒的国家！"
        },
        {
            "name": "尼泊尔",
            "flagUrl": "flags/np.png",
            "info": "尼泊尔，是一个很棒的国家！"
        },
        {
            "name": "新西兰",
            "flagUrl": "flags/nz.png",
            "info": "新西兰，是一个很棒的国家！"
        },
        {
            "name": "阿曼",
            "flagUrl": "flags/om.png",
            "info": "阿曼，是一个很棒的国家！"
        },
        {
            "name": "巴拿马",
            "flagUrl": "flags/pa.png",
            "info": "巴拿马，是一个很棒的国家！"
        },
        {
            "name": "秘鲁",
            "flagUrl": "flags/pe.png",
            "info": "秘鲁，是一个很棒的国家！"
        },
        {
            "name": "巴布亚新几内亚",
            "flagUrl": "flags/pg.png",
            "info": "巴布亚新几内亚，是一个很棒的国家！"
        },
        {
            "name": "菲律宾",
            "flagUrl": "flags/ph.png",
            "info": "菲律宾，是一个很棒的国家！"
        },
        {
            "name": "巴基斯坦",
            "flagUrl": "flags/pk.png",
            "info": "巴基斯坦，是一个很棒的国家！"
        },
        {
            "name": "波兰",
            "flagUrl": "flags/pl.png",
            "info": "波兰，是一个很棒的国家！"
        },
        {
            "name": "波多黎各",
            "flagUrl": "flags/pr.png",
            "info": "波多黎各，是一个很棒的国家！"
        },
        {
            "name": "巴勒斯坦",
            "flagUrl": "flags/ps.png",
            "info": "巴勒斯坦国，是一个很棒的国家！"
        },
        {
            "name": "葡萄牙",
            "flagUrl": "flags/pt.png",
            "info": "葡萄牙，是一个很棒的国家！"
        },
        {
            "name": "巴拉圭",
            "flagUrl": "flags/py.png",
            "info": "巴拉圭，是一个很棒的国家！"
        },
        {
            "name": "卡塔尔",
            "flagUrl": "flags/qa.png",
            "info": "卡塔尔，是一个很棒的国家！"
        },
        {
            "name": "罗马尼亚",
            "flagUrl": "flags/ro.png",
            "info": "罗马尼亚，是一个很棒的国家！"
        },
        {
            "name": "塞尔维亚",
            "flagUrl": "flags/rs.png",
            "info": "塞尔维亚，是一个很棒的国家！"
        },
        {
            "name": "俄罗斯",
            "flagUrl": "flags/ru.png",
            "info": "俄罗斯，是一个很棒的国家！"
        },
        {
            "name": "卢旺达",
            "flagUrl": "flags/rw.png",
            "info": "卢旺达，是一个很棒的国家！"
        },
        {
            "name": "沙特阿拉伯",
            "flagUrl": "flags/sa.png",
            "info": "沙特阿拉伯，是一个很棒的国家！"
        },
        {
            "name": "所罗门群岛",
            "flagUrl": "flags/sb.png",
            "info": "所罗门群岛，是一个很棒的国家！"
        },
        {
            "name": "塞舌尔",
            "flagUrl": "flags/sc.png",
            "info": "塞舌尔，是一个很棒的国家！"
        },
        {
            "name": "苏丹",
            "flagUrl": "flags/sd.png",
            "info": "苏丹，是一个很棒的国家！"
        },
        {
            "name": "瑞典",
            "flagUrl": "flags/se.png",
            "info": "瑞典，是一个很棒的国家！"
        },
        {
            "name": "新加坡",
            "flagUrl": "flags/sg.png",
            "info": "新加坡，是一个很棒的国家！"
        },
        {
            "name": "圣赫勒拿岛",
            "flagUrl": "flags/sh.png",
            "info": "圣赫勒拿岛，是一个很棒的国家！"
        },
        {
            "name": "斯洛文尼亚",
            "flagUrl": "flags/si.png",
            "info": "斯洛文尼亚，是一个很棒的国家！"
        },
        {
            "name": "斯瓦巴和扬马延",
            "flagUrl": "flags/sj.png",
            "info": "斯瓦巴和扬马延，是一个很棒的国家！"
        },
        {
            "name": "斯洛伐克",
            "flagUrl": "flags/sk.png",
            "info": "斯洛伐克，是一个很棒的国家！"
        },
        {
            "name": "塞拉利昂",
            "flagUrl": "flags/sl.png",
            "info": "塞拉利昂，是一个很棒的国家！"
        },
        {
            "name": "圣马力诺",
            "flagUrl": "flags/sm.png",
            "info": "圣马力诺，是一个很棒的国家！"
        },
        {
            "name": "塞内加尔",
            "flagUrl": "flags/sn.png",
            "info": "塞内加尔，是一个很棒的国家！"
        },
        {
            "name": "索马里",
            "flagUrl": "flags/so.png",
            "info": "索马里，是一个很棒的国家！"
        },
        {
            "name": "苏利南",
            "flagUrl": "flags/sr.png",
            "info": "苏利南，是一个很棒的国家！"
        },
        {
            "name": "圣多美和普林西比",
            "flagUrl": "flags/st.png",
            "info": "圣多美和普林西比，是一个很棒的国家！"
        },
        {
            "name": "萨尔瓦多",
            "flagUrl": "flags/sv.png",
            "info": "萨尔瓦多，是一个很棒的国家！"
        },
        {
            "name": "叙利亚",
            "flagUrl": "flags/sy.png",
            "info": "叙利亚，是一个很棒的国家！"
        },
        {
            "name": "斯威士兰",
            "flagUrl": "flags/sz.png",
            "info": "斯威士兰，是一个很棒的国家！"
        },
        {
            "name": "乍得",
            "flagUrl": "flags/td.png",
            "info": "乍得，是一个很棒的国家！"
        },
        {
            "name": "多哥",
            "flagUrl": "flags/tg.png",
            "info": "多哥，是一个很棒的国家！"
        },
        {
            "name": "泰国",
            "flagUrl": "flags/th.png",
            "info": "泰国，是一个很棒的国家！"
        },
        {
            "name": "塔吉克斯坦",
            "flagUrl": "flags/tj.png",
            "info": "塔吉克斯坦，是一个很棒的国家！"
        },
        {
            "name": "托克劳",
            "flagUrl": "flags/tk.png",
            "info": "托克劳，是一个很棒的国家！"
        },
        {
            "name": "东帝汶",
            "flagUrl": "flags/tl.png",
            "info": "东帝汶，是一个很棒的国家！"
        },
        {
            "name": "土库曼斯坦",
            "flagUrl": "flags/tm.png",
            "info": "土库曼斯坦，是一个很棒的国家！"
        },
        {
            "name": "突尼斯",
            "flagUrl": "flags/tn.png",
            "info": "突尼斯，是一个很棒的国家！"
        },
        {
            "name": "汤加",
            "flagUrl": "flags/to.png",
            "info": "汤加，是一个很棒的国家！"
        },
        {
            "name": "土耳其",
            "flagUrl": "flags/tr.png",
            "info": "土耳其，是一个很棒的国家！"
        },
        {
            "name": "千里达及托巴哥",
            "flagUrl": "flags/tt.png",
            "info": "千里达及托巴哥，是一个很棒的国家！"
        },
        {
            "name": "图瓦卢",
            "flagUrl": "flags/tv.png",
            "info": "图瓦卢，是一个很棒的国家！"
        },
        {
            "name": "坦桑尼亚",
            "flagUrl": "flags/tz.png",
            "info": "坦桑尼亚，是一个很棒的国家！"
        },
        {
            "name": "乌克兰",
            "flagUrl": "flags/ua.png",
            "info": "乌克兰，是一个很棒的国家！"
        },
        {
            "name": "乌干达",
            "flagUrl": "flags/ug.png",
            "info": "乌干达，是一个很棒的国家！"
        },
        {
            "name": "美国",
            "flagUrl": "flags/us.png",
            "info": "美国，是一个很棒的国家！"
        },
        {
            "name": "乌拉圭",
            "flagUrl": "flags/uy.png",
            "info": "乌拉圭，是一个很棒的国家！"
        },
        {
            "name": "乌兹别克斯坦",
            "flagUrl": "flags/uz.png",
            "info": "乌兹别克斯坦，是一个很棒的国家！"
        },
        {
            "name": "梵蒂冈",
            "flagUrl": "flags/va.png",
            "info": "梵蒂冈，是一个很棒的国家！"
        },
        {
            "name": "委内瑞拉",
            "flagUrl": "flags/ve.png",
            "info": "委内瑞拉，是一个很棒的国家！"
        },
        {
            "name": "越南",
            "flagUrl": "flags/vn.png",
            "info": "越南，是一个很棒的国家！"
        },
        {
            "name": "瓦努阿图",
            "flagUrl": "flags/vu.png",
            "info": "瓦努阿图，是一个很棒的国家！"
        },
        {
            "name": "萨摩亚",
            "flagUrl": "flags/ws.png",
            "info": "萨摩亚，是一个很棒的国家！"
        },
        {
            "name": "科索沃",
            "flagUrl": "flags/xk.png",
            "info": "科索沃，是一个很棒的国家！"
        },
        {
            "name": "也门",
            "flagUrl": "flags/ye.png",
            "info": "也门，是一个很棒的国家！"
        },
        {
            "name": "马约特",
            "flagUrl": "flags/yt.png",
            "info": "马约特，是一个很棒的国家！"
        },
        {
            "name": "南非",
            "flagUrl": "flags/za.png",
            "info": "南非，是一个很棒的国家！"
        },
        {
            "name": "赞比亚",
            "flagUrl": "flags/zm.png",
            "info": "赞比亚，是一个很棒的国家！"
        },
        {
            "name": "津巴布韦",
            "flagUrl": "flags/zw.png",
            "info": "津巴布韦，是一个很棒的国家！"
        }
    ]
}
