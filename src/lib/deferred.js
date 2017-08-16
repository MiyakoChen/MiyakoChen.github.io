
function deferred() {
    let queue = [];  // 回调对列
    let pending = false; // 正在处理

    /**
     * 获取参数类型
     * 
     * @param {any} sender 要确定类型的参数
     * @returns {string}
     */
    function getType(sender) {
        return sender === null ?
            (sender + '') :
            Object.prototype.toString.call(sender).match(/\s(\S+?)\]$/)[1].toLowerCase();
    }

    /**
     * 入列，添加回调
     * 
     * @param {function} cb 回调函数
     * @returns {deferred}
     */
    function then(cb) {
        queue.push(cb);
        return this;
    }

    /**
     * 添加延时
     * 
     * @param {number} time 需要延时的毫秒数
     * @returns {deferred}
     */
    function delay(time) {
        then(time);
        return this;
    }

    /**
     * 出列
     */
    function next() {
        if (pending) return this;

        let item = queue.shift(); // 取出第一项
        let itemType = getType(item);


    }

    return {
        then: then,
        delay: delay
    }

}

export default deferred;