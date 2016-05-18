/// <reference path="../index.d.ts"/>
import test = require('blue-tape');

import * as AV from 'leancloud-jssdk';

AV.init({
  appId:'uay57kigwe0b6f5n0e1d4z4xhydsml3dor24bzwvzr57wdap',
  appKey:'kfgz7jjfsk55r5a8a3y4ttd3je1ko11bkibcikonk32oozww',
  masterKey:'o9sd6j9d30kukvljnhpwv5in73ljrmg95m5csl588917kp8s'});

test('test', (t) => {
  t.plan(1);

  let todo = new AV.Object('Todo');

  todo.set('title', '工程师周会');
  todo.set('content', '每周工程师会议，周一下午2点');
  todo.save<AV.Object>().then(
      (data) => {
        // data 是根据 todo.save<AV.Object> 传入的泛型参数决定
        let savedTodo : AV.Object = data;
        t.assert(savedTodo.id !== null, 'save todo object');
      },
      (error) => {
      }
  );
});
