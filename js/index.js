//规定每张图片处于的位置和状态

var states = [
    {ZIndex:1,width:120,height:150,top:69,left:134,opac:0.2},
    {ZIndex:2,width:130,height:170,top:59,left:0,opac:0.5},
    {ZIndex:3,width:170,height:218,top:35,left:110,opac:0.7},
    {ZIndex:4,width:224,height:288,top:0,left:263,opac:1},
    {ZIndex:3,width:170,height:218,top:35,left:470,opac:0.7},
    {ZIndex:2,width:130,height:170,top:59,left:620,opac:0.5},
    {ZIndex:1,width:120,height:150,top:69,left:500,opac:0.2},
]
//将状态和位置赋给我们的li
var lis=$('#box li')

function chushi(){
    lis.each(function(index,ele){
        console.log(ele);
        var state=states[index]
        $(ele).css({'z-index':state.ZIndex}).finish().animate(state,1000).find('img').css('opacity',state.opac)
    })
}
chushi()

function move(){
    states.push(states.shift());
    chushi()
}
var timer=setInterval(move,1000)

$('.prev').hover(function(){
    clearInterval(timer)
},function(){
    timer=setInterval(move,1000)
})

$('.next').hover(function(){
    clearInterval(timer)
},function(){
    timer=setInterval(move,1000)
})



$('.prev').click(function(){
        states.push(states.shift());
        chushi()                 
});
$('.next').click(function(){
        states.unshift(states.pop());
        chushi()                 
});
