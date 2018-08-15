
import createLogger from 'logging'; 
const logger = createLogger('TxMountPoint');

import { TxMountPoint } from '../../src/tx-mountpoint';

import 'mocha';
import { expect } from 'chai';

describe('Mount Point Class', () => {

  it('send tasks to TxMountPoint', () => {
    
    let mp = new TxMountPoint('MP1');
    mp.tasks.subscribe((data) => {
      logger.info('got tasks - data = ' + JSON.stringify(data));
      mp.reply.next('MP1: tasks completed, send reply');
    });

    mp.reply.subscribe((data) => {
      logger.info('MP1: reply, got reply from M1 - data = ' + JSON.stringify(data));
      
      expect(JSON.stringify(data)).to.equal('"MP1: tasks completed, send reply"');
    });
    mp.tasks.next({source: 'me', method: 'create'});
    
  });

});