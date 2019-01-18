requestAnimationFrame(() => {
    let app = new Vue({
        el: '#app',
        data: {
            message: 'the first vue'
        }
    })
    let app2 = new Vue({
        el: '#app-2',
        data: {
            message: '现在时间:' + new Date().toLocaleString()
        }
    })
    let app4 = new Vue({
        el: '#app-4',
        data: {
            todos: [{
                    text: '第一步'
                },
                {
                    text: '第二步'
                },
                {
                    text: '最后'
                }
            ]
        }
    })
    let timeTitle = document.getElementById('app-2');
    timeTitle.onmousemove = () => {
        app2.message = '现在时间:' + new Date().toLocaleString();
    };
})