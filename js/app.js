function readRawData(boolCondition) {
    var datas = _.compact($('#raw').val().split("\n").map(x => _.trim(x)));
    datas = _.filter(datas, x => x != ""); // remove empty string
    if (boolCondition == "true") {
        datas = _.filter(datas, x => $.isNumeric(x)).map(x => parseInt(x));
    }
    else {
        datas = datas.map(x => parseInt(x.replace(/\D+/g, '')));
        datas = _.filter(datas, x => !isNaN(x));
    }

    if ($('#mapFunction').val() != "") {
        try {
            mapFunction = eval($('#mapFunction').val());
            if (_.isFunction(mapFunction))
                datas = datas.map(mapFunction);
        }
        catch (e) {

        }
    }
    if ($('#selectDuplicateCheckbox:checkbox:checked').val() == "true") {
        datas = _.uniq(_.filter(datas, (val, i, iteratee) => _.includes(iteratee, val, i + 1)));
    }
    if ($('#uniqCheckbox:checkbox:checked').val() == "true") {
        datas = _.uniq(datas);
    }
    if ($('#absCheckbox:checkbox:checked').val() == "true") {
        datas = _.map(datas, x => Math.abs(x));
    }
    if ($('#rangeControlMin').val() != "") {
        datas = _.filter(datas, x => parseInt(x) >= parseInt($('#rangeControlMin').val()));
    }
    if ($('#rangeControlMax').val() != "") {
        datas = _.filter(datas, x => parseInt(x) <= parseInt($('#rangeControlMax').val()));
    }
    if ($('#sortCheckbox:checkbox:checked').val() == "true") {
        datas.sort((a, b) => a - b);
    }
    if ($('#reverseCheckbox:checkbox:checked').val() == "true") {
        datas = _.reverse(datas);
    }

    return datas
}

function readRawText() {
    var texts = _.compact($('#raw').val().split("\n").map(x => _.trim(x)));

    if ($('#mapFunction').val() != "") {
        try {
            mapFunction = eval($('#mapFunction').val());
            if (_.isFunction(mapFunction))
                texts = texts.map(mapFunction);
        }
        catch (e) {

        }
    }
    if ($('#selectDuplicateCheckbox:checkbox:checked').val() == "true") {
        texts = _.uniq(_.filter(texts, (val, i, iteratee) => _.includes(iteratee, val, i + 1)));
    }
    if ($('#urlEncodeCheckbox:checkbox:checked').val() == "true") {
        texts = texts.map(x => encodeURI(x));
    }
    if ($('#urlDecodeCheckbox:checkbox:checked').val() == "true") {
        texts = texts.map(x => decodeURI(x));
    }
    if ($('#htmlEncodeCheckbox:checkbox:checked').val() == "true") {
        texts = texts.map(x => $('<a/>').text(x).html());
    }
    if ($('#htmlDecodeCheckbox:checkbox:checked').val() == "true") {
        texts = texts.map(x => $('<a/>').html(x).text());
    }
    if ($('#empIdPadCheckbox:checkbox:checked').val() == "true") {
        texts = texts.map(x => _.padStart(x, 6, '0'));

    }
    if ($('#uniqCheckbox:checkbox:checked').val() == "true") {
        texts = _.uniq(texts);
    }
    if ($('#numberingCheckbox:checkbox:checked').val() == "true") {
        texts = _.zip(_.range(1, texts.length + 1), texts).map(x => x.join('. '));
    }
    caseFunction = x => x;
    switch ($('[name="caseRadio"]:checked').val()) {
        case "camel":
            caseFunction = _.camelCase;
            break;
        case "capitalize":
            caseFunction = _.capitalize;
            break;
        case "upper":
            caseFunction = _.upperCase;
            break;
        case "lower":
            caseFunction = _.lowerCase;
            break;
        case "start":
            caseFunction = _.startCase;
            break;
        case "snake":
            caseFunction = _.snakeCase;
            break;
        case "kebab":
            caseFunction = _.kebabCase;
            break;

        default:
            caseFunction = x => x;
            break;
    } // end of case modify
    texts = texts.map(x => caseFunction(x));

    if ($('#sortCheckbox:checkbox:checked').val() == "true") {
        texts.sort();
    }
    if ($('#reverseCheckbox:checkbox:checked').val() == "true") {
        texts = _.reverse(texts);
    }
    return texts;
}

function readSet() {
    var leftSet = _.compact($('#leftSet').val().split("\n").map(x => _.trim(x)));
    var rightSet = _.compact($('#rightSet').val().split("\n").map(x => _.trim(x)));

    if ($('#LSmapFunction').val() != "") {
        try {
            mapFunction = eval($('#LSmapFunction').val());
            if (_.isFunction(mapFunction))
                leftSet = leftSet.map(mapFunction);
        }
        catch (e) {

        }
    }
    if ($('#RSmapFunction').val() != "") {
        try {
            mapFunction = eval($('#RSmapFunction').val());
            if (_.isFunction(mapFunction))
                rightSet = rightSet.map(mapFunction);
        }
        catch (e) {

        }
    }


    return { leftSet: leftSet, rightSet: rightSet };
}


function floor10(number) {
    for (let index = 1; index < 10; index++) {
        if (Math.pow(10, index) > number)
            return Math.max(1, Math.pow(10, index - 1));
    }
    return Math.pow(10, index);
}


$(document).ready(function () {

    if (pageLock == "page/index") {
        $(document).bind('keydown', 'Alt+z', function () { $('#raw').focus() });
        $(document).bind('keydown', 'Alt+x', function () { $('#processed').focus() });
        $(document).bind('keydown', 'Alt+o', function () {
            $('#raw').val(_.times(20, i => _.random(1, 100)).join('\n'));
        });
        $(document).bind('keydown', 'Alt+1', function () {
            swal({ timer: 650, type: "info", title: "資料數值化" });
            $('#processBtn').click();
        });
        $(document).bind('keydown', 'Alt+2', function () {
            swal({ timer: 650, type: "info", title: "資料摘要" });
            $('#statisticBtn').click();
        });
        $(document).bind('keydown', 'Alt+3', function () {
            swal({ timer: 650, type: "info", title: "文字處理" });
            $('#textBtn').click();
        });
        $(document).bind('keydown', 'Alt+4', function () {
            swal({ timer: 650, type: "info", title: "次數統計" });
            $('#countsBtn').click();
        });
        $(document).bind('keydown', 'Alt+a', function () {
            $('#mapFunction').focus();
        });
        $(document).bind('keydown', 'Alt+r', function () {
            swal({ timer: 650, type: "info", title: "資料移轉" });
            $('#raw').val($('#processed').val());
            $('#processed').val("");
        });
    }

    if (pageLock == "page/set") {
        $(document).bind('keydown', 'Alt+z', function () { $('#leftSet').focus() });
        $(document).bind('keydown', 'Alt+x', function () { $('#rightSet').focus() });
        $(document).bind('keydown', 'Alt+c', function () { $('#setResult').focus() });
        $(document).bind('keydown', 'Alt+1', function () { $('#setBtn').click() });
        $(document).bind('keydown', 'Alt+a', function () {
            $('#LSmapFunction').focus();
        });
        $(document).bind('keydown', 'Alt+s', function () {
            $('#RSmapFunction').focus();
        });
    }

    $('.form-control').bind('keydown', 'Esc', function () {
        $(this).blur();
    })

    $('#af-select').change(function () {
        var selectedAF = $('#af-select option:selected').val();
        $('#mapFunction').val(selectedAF);
    });

    $(document).bind('keydown', 'Esc', function () {
        window.getSelection().removeAllRanges();
    });

    $('#processBtn').click(
        function () {
            datas = readRawData($('#digitsCheckbox:checkbox:checked').val());
            $('#processed').val(datas.join("\n"));

        }); // end of processBtn

    $('#statisticBtn').click(
        function () {
            datas = readRawData($('#digitsCheckbox:checkbox:checked').val());
            var result = [];
            result.push("加總: " + _.reduce(datas, (sum, next) => sum + next));
            result.push("最大值: " + _.max(datas));
            result.push("最小值: " + _.min(datas));
            result.push("平均值: " + _.mean(datas));
            result.push("資料數: " + datas.length);
            // 次數分配處理
            groupbyNumber = floor10(_.mean(datas));
            frequency = _.groupBy(datas, x => Math.ceil((x + 1) / groupbyNumber) * groupbyNumber);
            result.push("\n資料分布:")
            for (const key in frequency) {
                result.push("[<" + key + "] :" + frequency[key].sort().join(", "));
            }

            $('#processed').val(result.join("\n"));
            //$('#processed').val(JSON.stringify(frequency));
        }); // end of statistic BTN

    $('#textBtn').click(
        function () {
            texts = readRawText();

            $('#processed').val(_.join(texts, '\n'));

        }); // end of textBTN

    $('#countsBtn').click(function () {
        texts = readRawText();
        let counts = {}
        texts.forEach(e => {
            counts[e] = counts[e] === undefined ? 1 : counts[e] + 1;
        });

        res = '';
        Object.keys(counts).sort().forEach(e => res += `${e},${counts[e]}\n`)

        $('#processed').val(res);
    })

    $('#setBtn').click(
        function () {
            var sets = readSet();
            var setFunction = x => x;
            switch ($('[name="setRadio"]:checked').val()) {
                case "union":
                    setFunction = _.union;
                    break;
                case "diff":
                    setFunction = _.difference;
                    break;
                case "intersect":
                    setFunction = _.intersection;
                    break;
                case "sym-diff":
                    setFunction = _.xor;
                    break;
            } // end of set modify
            var result = _.uniq(setFunction(sets.leftSet, sets.rightSet).sort());
            $('#setResult').val(_.join(result, '\n'));
        }); // end of setBTN

    $('#vlookupBtn').on('click', function () {
        var datas = $('#raw').val().split("\n").filter(Boolean);
        var dict = $('#dictionary').val().split("\n").filter(Boolean);
        var dictionary = _.fromPairs(dict.map(x => x.split(":").map(y => y.trim())));
        var result = datas.map(x => x + ',' + (dictionary[x] || 'N/A')).join('\n');
        $('#raw').val(result);
    });

    $('#repeatReplaceBtn').on('click', function () {
        var datas = $('#raw').val().split("\n").filter(Boolean);
        var dict = $('#dictionary').val().split("\n").filter(Boolean);
        var dictionary = _.fromPairs(dict.map(x => x.split(":").map(y => y.trim())));

        var result = '';


        datas.forEach(data => {
            for (const key in dictionary){
                console.log(key)
                data = data.replaceAll(key, dictionary[key])
            }

            result = result + data + '\n';
        });

        console.log(result)

        //var result = datas.map(x => x + ',' + (dictionary[x] || 'N/A')).join('\n');
        $('#raw').val(result);
    });

    $('#zipCodeBtn').on('click', function () {
        var datas = $('#raw').val().split("\n").filter(Boolean);
        var dict = $('#dictionary').val().split("\n").filter(Boolean);
        var dictionary = _.fromPairs(dict.map(x => x.split(":").map(y => y.trim())));
        var result = datas.map(x => x + ', ' + (zipCodeDict[extractAddr(x)] || 'N/A')).join('\n');
        $('#dictionary').val(result);
    });

    $('#swapDictBtn').on('click', function () {
        var dict = _.compact($('#dictionary').val().split("\n"));

        dict = _.map(dict, x => x.split(":")[1] + ':' + x.split(":")[0]);
        $('#dictionary').val(_.join(dict, '\n'));
    }); // end of swapDictBtn

    $('#fstringBtn').on('click', function () {
        var template = $('#template').val();
        var datas = $('#paddingdata').val().split("\n").filter(Boolean);
        var res = '';
        datas.forEach(row => {
            let current = template;
            row.split(',').forEach(e => {
                current = current.replace('{}', e.trim())
            });
            res += current + '\n';
        });
        $('#result').val(res);
    });

    $('#fstringJsonBtn').on('click', function () {
        var template = '`' + $('#template').val() + '`';
        var datas = JSON.parse($('#paddingdata').val());
        var dataFilter = $('#dataFilter').val();
        console.log(dataFilter);
        var res = '';

        datas.filter(eval(dataFilter)).forEach((e) => {
            const interpolatedString = eval(template);
            res += interpolatedString + '\n';
          });

        $('#result').val(res);
    });

    $('#jsonPaddingNoFilterBtn').on('click', function(){
        $('#dataFilter').val('e => e');
    });
});
