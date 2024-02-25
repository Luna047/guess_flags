// 假设我们有一个国家和对应国旗的数组
const countries = [
    { name: "中国", flagUrl: "flags/cn.png", info: "中国位于亚洲..." },
    { name: "美国", flagUrl: "flags/us.png", info: "美国位于北美洲..." },
    { name: "英国", flagUrl: "flags/gb.png", info: "英国位于欧洲..." },
    { name: "法国", flagUrl: "flags/fr.png", info: "法国位于欧洲..." },
    { name: "德国", flagUrl: "flags/de.png", info: "德国位于欧洲..." },
    { name: "意大利", flagUrl: "flags/it.png", info: "意大利位于欧洲..." },
    { name: "日本", flagUrl: "flags/jp.png", info: "日本位于亚洲..." },
    { name: "韩国", flagUrl: "flags/kr.png", info: "韩国位于亚洲..." },
    { name: "澳大利亚", flagUrl: "flags/au.png", info: "澳大利亚位于大洋洲..." },
    { name: "加拿大", flagUrl: "flags/ca.png", info: "加拿大位于北美洲..." },
    { name: "巴西", flagUrl: "flags/br.png", info: "巴西位于南美洲..." },
    { name: "印度", flagUrl: "flags/in.png", info: "印度位于亚洲..." },
    { name: "俄罗斯", flagUrl: "flags/ru.png", info: "俄罗斯位于欧亚大陆..." },
    { name: "南非", flagUrl: "flags/za.png", info: "南非位于非洲..." },
    { name: "埃及", flagUrl: "flags/eg.png", info: "埃及位于非洲..." },
    { name: "尼日利亚", flagUrl: "flags/ng.png", info: "尼日利亚位于非洲..." },
    { name: "沙特阿拉伯", flagUrl: "flags/sa.png", info: "沙特阿拉伯位于亚洲..." },
    { name: "印度尼西亚", flagUrl: "flags/id.png", info: "印度尼西亚位于亚洲..." },
    { name: "阿根廷", flagUrl: "flags/ar.png", info: "阿根廷位于南美洲..." },
    { name: "墨西哥", flagUrl: "flags/mx.png", info: "墨西哥位于北美洲..." },
    { name: "智利", flagUrl: "flags/cl.png", info: "智利位于南美洲..." },
    { name: "新西兰", flagUrl: "flags/nz.png", info: "新西兰位于大洋洲..." },
    { name: "巴基斯坦", flagUrl: "flags/pk.png", info: "巴基斯坦位于亚洲..." },
    { name: "泰国", flagUrl: "flags/th.png", info: "泰国位于亚洲..." },
    { name: "菲律宾", flagUrl: "flags/ph.png", info: "菲律宾位于亚洲..." },
    { name: "越南", flagUrl: "flags/vn.png", info: "越南位于亚洲..." },
    { name: "马来西亚", flagUrl: "flags/my.png", info: "马来西亚位于亚洲..." },
    { name: "新加坡", flagUrl: "flags/sg.png", info: "新加坡位于亚洲..." },
    { name: "印度", flagUrl: "flags/in.png", info: "印度位于亚洲..." },
    { name: "巴基斯坦", flagUrl: "flags/pk.png", info: "巴基斯坦位于亚洲..." },
    { name: "孟加拉国", flagUrl: "flags/bd.png", info: "孟加拉国位于亚洲..." },
    { name: "伊朗", flagUrl: "flags/ir.png", info: "伊朗位于亚洲..." },
    { name: "土耳其", flagUrl: "flags/tr.png", info: "土耳其位于亚洲..." },
    { name: "乌克兰", flagUrl: "flags/ua.png", info: "乌克兰位于欧洲..." },

    // 添加更多国家数据...
];
let g_score = 0;
let g_usedFlags = [];
let g_timer = 0;
let g_time_left = 0;
let g_correctCountryName = '';
let g_countdownTimer;
let g_total_question = 10;
let g_rank = -1;
let g_beat_percentage = '100%';

function startGame(duration) {
    // 初始化游戏设置
    document.getElementById('score').innerText = '0';
    g_usedFlags = [];
    g_score = 0;

    // 清除body背景
    document.body.style.backgroundImage = 'none';

    // 清除现有的选项（如果有）
    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';

    // 开始倒计时
    g_timer = duration;
    g_time_left = g_timer;
    // 设置定时器...（更新倒计时，结束游戏等）
    const timeLeftElement = document.getElementById('time-left');
    timeLeftElement.innerText = formatTime(g_time_left); // 格式化时间显示

    // 清除可能存在的定时器（防止多个计时器同时运行）
    if (g_countdownTimer) {
        clearInterval(g_countdownTimer);
    }
    // 每秒调用一次的定时器
    g_countdownTimer = setInterval(function () {
        g_time_left -= 1; // 减少一秒
        timeLeftElement.innerText = formatTime(g_time_left); // 更新显示

        if (g_time_left <= 0) {
            clearInterval(g_countdownTimer); // 停止计时器
            endGame(); // 调用游戏结束的函数
        }
    }, 1000);
    // 隐藏时间选项
    document.getElementById('time-selector').style.display = 'none';
    // 显示第一个问题
    nextQuestion();
}

// 将剩余时间（秒）转换为更易读的格式(例如：“1:05”)
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
}

function nextQuestion() {
    const unusedCountries = getUnusedCountries();
    if (unusedCountries.length === 0) {
        endGame();
        return;
    }
    if (g_usedFlags.length === g_total_question) {
        endGame();
        return;
    }
    //console.info('已使用的国家：', usedFlags);
    const selectedCountry = getRandomCountry(unusedCountries);
    //console.info('这次选中的国家：', selectedCountry.name);
    // 记录已经使用的国家
    g_usedFlags.push(selectedCountry.name);
    displayFlag(selectedCountry.flagUrl);
    createOptions(selectedCountry);
    randomizeOptions();
}

function getUnusedCountries() {
    return countries.filter(country => !g_usedFlags.includes(country.name));
}

function endGame() {
    document.getElementById('flag-display').innerHTML = '<h1>游戏结束</h1><H2>你的得分是：' + g_score/g_total_question*100 + 
        '</H2><H2>答题时间：' + formatTime(g_timer - g_time_left) + '</H2>' +
        // '<H2>你的排名：' + g_rank + '</H2>' + '<H2>战胜了' + g_beat_percentage + '的网友</H2>' +
        '<br><button onclick="location.reload()" class="luna-btn">再来一局</button>';
    g_correctCountryName = '';
    // 停止定时器...
    if (g_countdownTimer) {
        clearInterval(g_countdownTimer);
    }
    // 清除选项...
    clearOptionButton();
    // 显示最终得分...
    // 记录排名到云存储...
    // 显示排名
}

function getRandomCountry(unusedCountries) {
    const randomIndex = Math.floor(Math.random() * unusedCountries.length);
    return unusedCountries[randomIndex];
}

function displayFlag(flagUrl) {
    document.getElementById('flag-display').innerHTML = `<img src="${flagUrl}" height="400" />`;
}

function createOptions(selectedCountry) {
    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';
    g_correctCountryName = selectedCountry.name;
    const correctCountry = countries.find(country => country.name === g_correctCountryName);
    const correctOption = createOptionButton(correctCountry.name);
    correctOption.classList.add('luna-btn');
    correctOption.onclick = () => selectAnswer(correctCountry.name);
    optionsContainer.appendChild(correctOption);
    const otherCountries = countries.filter(country => country.name !== g_correctCountryName);
    for (let i = 0; i < 3; i++) {
        const randomCountry = getRandomCountry(otherCountries);
        const option = createOptionButton(randomCountry.name);
        option.classList.add('luna-btn');
        option.onclick = () => selectAnswer(randomCountry.name);
        optionsContainer.appendChild(option);
        otherCountries.splice(otherCountries.indexOf(randomCountry), 1);
    }
}

function createOptionButton(countryName) {
    const option = document.createElement('button');
    option.innerText = countryName;
    return option;
}

function clearOptionButton() {
    document.getElementById('options-container').innerHTML = '';
}

function randomizeOptions() {
    document.getElementById('options-container').randomizeChildren();
}

// 扩展 HTMLElement 原型以包括 randomizeChildren 方法
HTMLElement.prototype.randomizeChildren = function () {
    const parent = this;
    const children = Array.from(parent.children);
    parent.innerHTML = ""; // 清空当前父元素的内容

    // 打乱排序操作（Fisher-Yates 洗牌算法）
    let i = children.length, j, temp;
    while (--i > 0) {
        j = Math.floor(Math.random() * (i + 1));
        temp = children[j];
        children[j] = children[i];
        children[i] = temp;
    }

    // 将打乱后的元素添加回父元素
    for (const child of children) {
        parent.appendChild(child);
    }
};

function selectAnswer(selectedCountryName) {
    if (selectedCountryName === g_correctCountryName) {
        // 答案正确
        g_score++;
        document.getElementById('score').innerText = g_score.toString();

        // 显示国家信息
        showCountryInfo(selectedCountryName);

        // 准备下一个问题
        nextQuestion();
    } else {
        // 答案错误，直接跳转到下一个问题
        nextQuestion();
    }
}

function showCountryInfo(countryName) {
    // 根据国家名字找到国家信息并显示
    // 例如：document.getElementById('country-info').innerText = countryInfo;
}
