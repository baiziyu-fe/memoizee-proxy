import { MemoizeCache } from "./interface";

/**
 * Get the function that can manage the cache manually
 * @param cache
 */
export default function getActionObjFormCache<T>(
  cache: MemoizeCache<T>
): (...args: any[]) => T {
  const manualTarget = Object.create(null)
  manualTarget.set = (key: string | object, val: T) => cache.set(key, val)
  manualTarget.delete = (key: string | object) => cache.delete(key)
  manualTarget.clear = () => cache.clear!()
  if (cache.addRef) {
    manualTarget.addRef = (key: string| object) => cache.addRef!(key)
  }
  if (cache.deleteRef) {
    manualTarget.deleteRef = (key: string| object) => cache.deleteRef!(key)
  }
  return manualTarget
}