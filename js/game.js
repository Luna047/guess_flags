// 假设我们有一个国家和对应国旗的数组
//import { original_data } from './countries.js';
const countries = original_data['countries']

let g_score = 0;
let g_usedFlags = [];
let g_correctCountries = []; // 本轮游戏中正确的国家
let g_wrongCountries = [];  // 本轮游戏中错误的国家
let g_timer = 0;
let g_time_left = 0;
let g_correctCountryName = '';
let g_countdownTimer;
let g_total_question = 20;
let g_rank = -1;
let g_beat_percentage = '100%';
let g_user_name = '';

function startGame(duration) {
    // 初始化游戏设置
    document.getElementById('score').innerText = '0';
    g_usedFlags = [];
    g_score = 0;

    // 获取user_name
    const user_name = document.getElementById('user_name').value || '无名英雄';
    g_user_name = user_name;

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
    document.getElementById('flag-display').innerHTML = '<h1>游戏结束</h1><H2><span class="text-info">'+g_user_name+'</span>, 你的得分是：' + g_score/g_total_question*100 + 
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
    // 显示结果...
    showResultTable();

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
        
        // 记录正确的国家
        putIntoResultTable(g_correctCountries, g_correctCountryName);
        
        // 准备下一个问题
        nextQuestion();
    } else {
        // 记录错误的国家
        putIntoResultTable(g_wrongCountries, g_correctCountryName);

        // 答案错误，直接跳转到下一个问题
        nextQuestion();
    }
}

// 把正确的答案保存到结果列表中，答对和答错的分别保存不同的resultTable
function putIntoResultTable(resultTable, countryName) {
    resultTable.push(countryName);
}

function showResultTable() {
    // 在table td id="correct-flags" 中增加 <img src="flagUrl" height="50" />
    // 在table td id="wrong-flags" 中增加 <img src="flagUrl" height="50" />
    for (let i = 0; i < g_correctCountries.length; i++) {
        const each_correct_country = countries.find(country => country.name === g_correctCountries[i]);
        const flagUrl = each_correct_country.flagUrl;
        const countryName = each_correct_country.name;
        document.getElementById('correct-flags').innerHTML += `<img class="result-pic" src="${flagUrl}" height="70" title="${countryName}" />`;
    }
    for (let i = 0; i < g_wrongCountries.length; i++) {
        const each_wrong_country = countries.find(country => country.name === g_wrongCountries[i]);
        const flagUrl = each_wrong_country.flagUrl;
        const countryName = each_wrong_country.name;
        document.getElementById('wrong-flags').innerHTML += `<img class="result-pic" src="${flagUrl}" height="70" title="${countryName}" />`;
    }
    document.getElementById('final-result-id').style.display = 'block';
}

function recordRank() {
    // 记录排名到云存储...
}

function showCountryInfo(countryName) {
    // 根据国家名字找到国家信息并显示
    // 例如：document.getElementById('country-info').innerText = countryInfo;
}
