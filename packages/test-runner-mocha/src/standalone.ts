import '../../../node_modules/mocha/mocha.js';
import { runMochaTests, sessionFailed, sessionFinished } from './mochaStandalone.js';

const mocha = (window as any).mocha as BrowserMocha;

export async function runTests(testFn: () => unknown | Promise<unknown>) {
  await runMochaTests(mocha, testFn);
}

export { mocha, sessionFailed, sessionFinished };
