import { useRef, useEffect } from 'react'
import { throttle } from 'lodash'

/**
 * 节流
 * @param {*} fn 函数
 * @param {*} wait 等待时间
 * @param {*} deps 依赖
 * @example
 * const handleChangeValue = useThrottle((v) => { setValue({ ...v, ...query }) }, 1000, [query])
 */
function useThrottle (fn, wait, deps) {
  const debounceFn = useRef(null)
  useEffect(() => {
    debounceFn.current = throttle(fn, wait)
    // eslint-disable-next-line
  }, [...deps, fn, wait])

  return debounceFn.current || fn
}

export default useThrottle
