// 大文件拷贝
// 流的原理：一次性读取在写入的方式不适用于大文件拷贝，容易造成内存爆仓，对于大文件，我们只能读一点写一点知道拷贝完成。
// 由于数据是流，这就意味着在完成文件读取之前，从收到最初几个字节开始，就可以对数据动作。
// （不适用，同时密集型I/O会爆仓）
fs.readFile('',function(err,data){
    if(err){
        throw err;
    }
    fs.writeFile('',data,function(err){
        
    })
}
// （适用，流的方式）
console.time('aaa');
// 1.以流的方式读文件
var rs = fs.ReadStream('path')
// 2.以流的方式写入文件
var ws = fs.WriteStream('path')
// 3.监听只读数据流（当以流的方式读取一定量的文件时即可触发）
rs.on('data',function(chunk){
    // 4.写入
    ws.write(chunk);
    // 将内存中的数据转移到空容器中（返回值为boolean值）
})
5.
re.on('end',function(){
// **关闭只写接口**
  ws.end()  
  console.timeEnd('aaa')
})

// 计算时间：
console.time('name');
// 拷贝流程:
console.timeEnd('name');