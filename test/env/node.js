import config from '../../config/magnet.test.config';
import assert from 'assert';

process.env.NODE_ENV = 'test';

global.assert = assert;
