function main(){
    var expectText='';
    for(var i=99;i>1;i--)
    {
        //expectText=expectText+i+' bottles of beer on the wall,'+i+' bottles of beer.\n'+'Take one down and pass it around,'+(i-1)+' bottles of beer on the wall.\n';
        console.log(i+' bottles of beer on the wall,'+i+' bottles of beer.\n'+'Take one down and pass it around,'+(i-1)+' bottles of beer on the wall.')
    }
    console.log(1+' bottles of beer on the wall,'+1+' bottles of beer.\n'+'Take one down and pass it around,'+'no more bottles of beer on the wall.\n'+'No more bottles of beer on the wall,no more bottles of beer.\n'+'Go to the store and buy some more,99 bottles of beer on the wall.')
    //expectText=expectText+1+' bottles of beer on the wall,'+1+' bottles of beer.\n'+'Take one down and pass it around,'+'no more bottles of beer on the wall.\n'+'No more bottles of beer on the wall,no more bottles of beer.\n'+'Go to the store and buy some more,99 bottles of beer on the wall.'
    //console.log(expectText) ;
      
    return '';
    
}

module.exports = main;
