function observer(data){
    if(!data || typeof data !== 'object'){
        return
    }

    Object.keys(data).forEach(key=>{
        defineReactive(data,key,data[key])
    })
}

function defineReactive(data,key,val){
    observer(val)

    var dep = new Dep()

    Object.defineProperty(data,key,{
        configurable:true,
        enumerable:true,
        get:function(){
            if(Dep.target){
                dep.addSub(Dep.target)
            }
            return val
        },
        set: function (newVal){
            if(val === newVal) return

            console.log('I catch it!')

            val = newVal

            dep.notify()
        }
    })
}

function Dep(){
    this.subs = []
}

Dep.prototype.addSub = function(sub){
    this.subs.push(sub)
}

Dep.prototype.notify = function(){
    this.subs.forEach(sub=>{
        sub.update()
    })
}

Dep.target = null


var person = {
    name:'linglong'
}

observer(person)

person.name = 'longlooooooooooooooong'

function Watcher(vm, prop , cb){
    this.vm = vm
    this.prop = prop
    this.cb = cb
    this.value = this.getValue()
}

Watcher.prototype.update = function(){
    const value = this.vm.$data[this.prop]
    const oldVal = this.value
    if(value === oldVal){
        this.value = value
        this.cb(value)
    }
}

Watcher.prototype.getValue = function(){
    Dep.target = this
    const value = this.vm.$data[this.prop]
    Dep.target = null
    return value
}

