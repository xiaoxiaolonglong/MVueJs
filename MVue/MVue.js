let data = {
    person: {
        name: "张三",
        age: 18,
        sex: "男"
    },
    msg: "你好啊"
}
class Observer {
    constructor(obj) {
        this.data = obj;
        this.walk(this.data);
    }
    walk(obj) {
        for (let i in obj) {
            this.defineReactive(obj, i);
        }
    }
    defineReactive(obj, key) {
        let val = obj[key];
        //数据劫持
        Object.defineProperty(obj, key, {
            get() {
                console.log(val)
                return val;
            },
            set(newVal) {
                if (newVal === val) {
                    return;
                }
                val = newVal;
                console.log(val)
            }
        })
        // 递归调用为每个元素都绑定get set
        if(typeof obj[key] === "object"){
            this.walk(obj[key])
        }
    }
}
new Observer(data)
console.log(data)