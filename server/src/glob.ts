export function testing(url: string): {command: string, params: Record<string,string>} {
const args = url.split('?');
const command = args[0];
const params = {};
if(args[1]){
    args[1].split('&').forEach(item => {
      
        const it = item.split('=')
        if(it[0]==''){
            return;
        }
        params[it[0]] = it[1] || true
    }) 
}
return {command,params}
}