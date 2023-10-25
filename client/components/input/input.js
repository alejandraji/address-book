import styles from './input.module.scss'

export default function Input({icon, label, value, onChange, name, placeholder}) {
  return (
    <div className="mb-8">
      <label className="block text-lg mb-4" htmlFor="input">{label}</label>
      {icon && <img className={styles['input__icon']} src={`/${icon}`} />}
      <input name={name} onChange={onChange} className={`block w-full ${styles.input}`}  id="input" type="text" placeholder={placeholder} value={value}/>  
    </div>
  )
}