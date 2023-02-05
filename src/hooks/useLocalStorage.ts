import { useState } from 'react'

export type Theme = 'dark' | 'light'

export type SupportedStorage = {
  theme: Theme
}

type SupportedStorageKey = keyof SupportedStorage
type SupportedStorageValue<K extends SupportedStorageKey> = SupportedStorage[K]

export function useLocalStorage<T extends SupportedStorageKey>(
  key: T,
  initialValue?: SupportedStorageValue<T>,
) {
  const [storedValue, setStoredValue] = useState<SupportedStorageValue<T>>(() => {
    if (typeof window === 'undefined') {
      return initialValue
    }

    try {
      console.log('caiu aqui')
      const item = localStorage.getItem(key)
      console.log(item)
      return item ? JSON.parse(item) : initialValue
    } catch (_error) {
      return initialValue
    }
  })

  const setValue = (
    value: SupportedStorageValue<T> | ((val: SupportedStorageValue<T>) => SupportedStorageValue<T>),
  ) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value
      console.log('chegou')
      setStoredValue(valueToStore)
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, JSON.stringify(valueToStore))
      }
    } catch (_error) {
      //
    }
  }

  return [storedValue, setValue] as const
}
