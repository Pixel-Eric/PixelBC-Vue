export function usePage(router,allpage,page,name,config){
    //上一页的回调逻辑
    function pageUp(){
        if(parseInt(page)-1>0){
            router.push({name,params:{...config,"page":parseInt(page)-1}});
        }
    }
    //获取数据总页数
    function getPage(page){
        allpage.value = page;
    }
    //跳转到下一页
    function pageDown(){
        if((parseInt(page) + 1)<=allpage.value){
            router.push({name,params:{...config,"page":parseInt(page)+1}});
        }
    }
    //跳转任意页面
    function jumpPage(jpage){
        if(jpage>0&&jpage<=allpage.value){
            router.push({name,params:{...config,"page":jpage}});
        }
    }
    return {pageUp,getPage,pageDown,jumpPage}
}