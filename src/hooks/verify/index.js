//传入的值以[{value:"abc",reg:/\.com$/},{value:"abc",reg:/\.com$/}]
export default function verify(obj){
    let result = [];
    if(obj instanceof Array){
        obj.forEach(cur=>{
            let reg = cur.reg;
            let value = reg.test(cur.value);
            result.push({name:cur.name,value});
        });
        let res = result.reduce((pre,cur)=>{
            return pre&&cur.value;
        },true)
        let v = {"result":res,"verobj":result}
        return v;
    }else{
        let reg = obj.reg;
        return reg.test(obj.value);
    }
}