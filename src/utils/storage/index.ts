import toast from 'react-hot-toast'

import { type StorageKeyTypes } from '@/utils/storage/interfaces'

const STORAGE = {
  /**
   * Guarda un valor.
   * @param key Usa StorageKeys para asegurar que la llave existe.
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  set: (key: StorageKeyTypes, value: any): void => {
    try {
      const serializedValue = JSON.stringify(value)
      localStorage.setItem(key, serializedValue)
    } catch (e) {
      toast.error(`Error saving to localStorage: ${key} - ${e}`)
    }
  },

  /**
   * Recupera un valor con tipado genérico.
   */
  get: <T>(key: StorageKeyTypes): T | null => {
    try {
      const serializedValue = localStorage.getItem(key)
      if (serializedValue === null) return null
      return JSON.parse(serializedValue) as T
    } catch (e) {
      toast.error(`Error getting from localStorage: ${key} - ${e}`)
      return null
    }
  },

  /**
   * Elimina un item específico.
   */
  remove: (key: StorageKeyTypes): void => {
    try {
      localStorage.removeItem(key)
    } catch (e) {
      toast.error(`Error removing from localStorage: ${key} - ${e}`)
    }
  },

  /**
   * Limpia todo el storage.
   */
  clearAll: (): void => {
    try {
      localStorage.clear()
    } catch (e) {
      toast.error(`Error clearing localStorage - ${e}`)
    }
  },
}

export default STORAGE
