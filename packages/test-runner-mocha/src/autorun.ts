import '../../../node_modules/mocha/mocha.js';
import { runMocha } from './mochaRun.js';

const mocha = (window as any).mocha as BrowserMocha;

runMocha(mocha);
