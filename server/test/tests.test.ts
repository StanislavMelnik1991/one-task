// import {describe, test } from 'jest'
/// <reference path="..\node_modules\@types\jest\index.d.ts" />
import {parseUrl} from '../src/glob' 
test('ts', ()=>{
    expect(parseUrl('/')).toEqual({command:'/', params:{}})
})
test('ts', ()=>{
    expect(parseUrl('/favicon.ico')).toEqual({command:'/favicon.ico', params:{}})
})
test('ts', ()=>{
    expect(parseUrl('/a?b=1&&c=2')).toEqual({command:'/a', params:{b:'1',c:'2'}})
})
test('ts', ()=>{
    expect(parseUrl('/a?b=1&c=2')).toEqual({command:'/a', params:{b:'1',c:'2'}})
})
test('ts', ()=>{
    expect(parseUrl('/a?b=1&c&&d')).toEqual({command:'/a', params:{b:'1',c:true,d:true}})
})
// test('ts', ()=>{
//     expect(parseUrl('/a?b=&c&&d')).toEqual({command:'/a', params:{b:'',c:true,d:true}})
// })