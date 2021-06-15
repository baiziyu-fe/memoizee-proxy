import ExpiredCacheItem from "../../src/cache/ExpiredCacheItem";


test('new ExpiredCacheItem', () => {

  const cacheItem = new ExpiredCacheItem('e')
  expect(cacheItem.cacheTime - Date.now()).toBeLessThan(10)
  expect(cacheItem.data).toBe('e')
});
