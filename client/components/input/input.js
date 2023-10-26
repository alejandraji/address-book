import styles from './input.module.scss'

export default function Input({icon, label, value, onChange, name, placeholder, errorMessage}) {
  const inputClasses = ['block', 'w-full', styles.input]
  if (errorMessage) {
    inputClasses.push('border-red-500')
    inputClasses.push('border-2')
  }
  return (
    <div className="mb-8">
      <label className="block text-lg mb-4" htmlFor="input">{label} {errorMessage && <span>({errorMessage})</span>}</label>
      {icon && <img className={styles['input__icon']} src={`/${icon}`} />}
      <input 
        name={name} 
        onChange={onChange} 
        className={inputClasses.join(' ')}  
        id="input" 
        type="text" 
        placeholder={placeholder} 
        value={value}
      />  
    </div>
  )
}