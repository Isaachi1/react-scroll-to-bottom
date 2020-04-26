import AbortController from 'abort-controller-es5';

import sleep from '../utils/sleep';

export default async function wait(condition, timeout = 2000) {
  if (typeof condition === 'function') {
    condition = { fn: condition, message: 'anonymous condition' };
  }

  const abortController = new AbortController();
  const { signal } = abortController;
  const waitFn = async signal => {
    while (!(await condition.fn())) {
      await sleep(50, signal);
    }
  };

  window.__test__.currentCondition = condition;

  return Promise.race([
    waitFn(signal),
    sleep(timeout, signal).then(() => Promise.reject(new Error(`Test code timed out while waiting for "${condition.message}".`)))
  ]).finally(() => {
    abortController.abort();
    window.__test__.currentCondition = null;
  });
}