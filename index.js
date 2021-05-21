//使用递归的方式实现数组、对象的深拷贝
function lcone(obj){
  if(typeof obj !== 'object' || obj === null){
    throw new Error('ERROR!')
  }

  let newObj={};
  const keys=Object.keys(obj);

  keys.forEach(value=>{
    const currentValue=obj[value];
    if(typeof currentValue !== 'object'|| currentValue !== null){
      newObj[value]=currentValue;
    }else if(currentValue instanceof Array){
      newObj[value]=[...currentValue]
    }else{
      newObj[value]=lcone(currentValue)
    }
  })
  return newObj
}

module.exports=lcone