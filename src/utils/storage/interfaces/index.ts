/**
 * Llaves permitidas para el storage usando un objeto constante.
 * 'as const' hace que las propiedades sean de solo lectura y mantiene los valores exactos.
 */
const StorageKeys = {
  TOKEN: 'TOKEN',
  USER: 'USER',
} as const

// Creamos un tipo basado en los valores del objeto para usarlo en las funciones
type StorageKeyTypes = (typeof StorageKeys)[keyof typeof StorageKeys]

export { StorageKeys }
export type { StorageKeyTypes }
