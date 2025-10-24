import { useState, useEffect } from 'react'

type Operator = '+' | '-' | '*' | '/' | null

interface CalcProps {
  input1: number | ''
  input2: number | ''
  operation: Operator
}

function useCalculate({ input1, input2, operation }: CalcProps) {
  const [num1, setNum1] = useState(input1)
  const [num2, setNum2] = useState(input2)
  const [op, setOp] = useState(operation)
  const [result, setResult] = useState<string | number>('')

  useEffect(() => {
    // добавить условие для проверки что первое число равно пустоте
    // и второе число равно пустоте
    // добавить условие для проверки что оператор выбран (оператор)
    // выводить соответвующий текст в результате (ко всем)
    if (num1 === '' && num2 === '') {
      setResult('Введите оба числа')
    } else if (num1 === '') {
      setResult('Введите первое число')
    } else if (num2 === '') {
      setResult('Введите второе число')
    } else if (op === null) {
      setResult('Выберите оператор')
    } else {
      switch (op) {
        case '+':
          setResult(num1 + num2)
          break
        case '-':
          setResult(Number(num1) - Number(num2))
          break
        case '*':
          setResult(Number(num1) * Number(num2))
          break
        case '/':
          setResult(Number(num1) / Number(num2))
          break
      }
    }
  }, [num1, num2, op])
  return { num1, setNum1, num2, setNum2, op, setOp, result }
}
export default useCalculate
