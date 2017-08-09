import Magnet from 'magnet';
import config from '../../config/magnet.test.config';
import WeDeploy from 'wedeploy';

describe('hello', function() {
  let magnet;

  const request = () =>
    WeDeploy.url(config.apiServiceUrl)

  before(async () => {
    magnet = new Magnet({directory: process.cwd(), configDir: 'config'});
    await magnet.build();
    await magnet.start();
  });

  after(async () => {
    await magnet.stop();
  });

  describe('GET /', () => {
    it('should get hello world json', async function() {
      const result = await request()
        .path('/')
        .get();
        assert.deepEqual(result.body(), {message: 'Hello World'});
    });
  });
});
