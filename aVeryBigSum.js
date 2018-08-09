//加法
function add(a, b) {
    //把a,b放进total数组
    var total = [String(a), String(b)];
    //创建part数组
    var part = [];
    //把a,b较大的放在前面
    total = getMax(total[0], total[1]);
    //把total数组里面的元素分成单个数字
    total[0] = total[0].split('');
    total[1] = total[1].split('');
    //创建加0变量
    var addZero;
    //判断两个参数是否相同长度
    if(!(total[0].length == total[1].length)) {
        //创建0
        addZero = new Array(total[0].length-total[1].length+1).join('0');
        //把0放进total[1]前面
        total[1] = addZero.split('').concat(total[1]);
    }
    //创建补充上一位的数字
    var next = 0;
    //从个位数起对应单个计算
    for(var i=(total[0].length-1); i>=0; i--) {
        //求和
        var sum = Number(total[0][i]) + Number(total[1][i]) + next;
        //把求和的个位数先放进数组
        part.unshift(sum % 10);
        //把求和的十位数放进补充上一位的数字，留在下一次循环使用
        next = Math.floor(sum / 10);
        //判断最后一次如果求和的结果为两位数则把求和的十位数加在最前面
        if(i == 0 && !(next==0)) {
            part.unshift(next);										
        }						
    }
    //把最后的结果转化成字符串
    var result = part.join('');
    //返回字符串
    return result;
}


//获取最大值
function getMax(a, b) {
    var result = [a, b];
    //如果a长度小于b长度
    if(a.length<b.length)
    {
        //b放前面
        result[0] = b;
        result[1] = a;
        //返回result长度为3，为了减法的不够减而准备
        result[2] = 'not';
        //返回最终数组
        return result;
    }
    //如果a长度等于b长度
    if(a.length == b.length) {
        //循环对比a,b里面的单个元素
        for(var i=0; i<a.length; i++) {
            if(result[0][i]>result[1][i]) {
                result[0] = a;
                result[1] = b;
                return result;
            }
            if(result[0][i]<result[1][i]) {
                result[0] = b;
                result[1] = a;
                result[2] = 'not';
                return result;					
            }
            //假如全部相等，当最后一个元素，以上条件都不执行，则执行默认的返回结果
            if(i == a.length-1) {
                return result;
            }				
        }
    }
    if(a.length>b.length) {
        return result;				
    }
}

console.log(add('999999', '1111'));   // 1124691