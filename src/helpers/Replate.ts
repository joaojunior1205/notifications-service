// Exporta um tipo replace que basicamente pode receber 2 tipagem,
// uma tipagem original e uma tipagem de replace, que pode ser substituida
export type Replace<T, R> = Omit<T, keyof R> & R;