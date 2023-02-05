import React from 'react'

type Callback = () => Promise<any> | any

export function useOnceCall(cb: Callback, condition = true) {
  const isCalledRef = React.useRef(false)

  React.useEffect(() => {
    if (condition && !isCalledRef.current) {
      isCalledRef.current = true
      cb()
    }
  }, [cb, condition])
}
