// import {describe, test } from 'jest'
/// <reference path="..\node_modules\@types\jest\index.d.ts" />
import {testing} from '../src/glob' 
test('ts', ()=>{
    expect(testing('/')).toEqual({command:'/', params:{}})
})
test('ts', ()=>{
    expect(testing('/favicon.ico')).toEqual({command:'/favicon.ico', params:{}})
})
test('ts', ()=>{
    expect(testing('/a?b=1&&c=2')).toEqual({command:'/a', params:{b:'1',c:'2'}})
})
test('ts', ()=>{
    expect(testing('/a?b=1&c=2')).toEqual({command:'/a', params:{b:'1',c:'2'}})
})
test('ts', ()=>{
    expect(testing('/a?b=1&c&&d')).toEqual({command:'/a', params:{b:'1',c:true,d:true}})
})