const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <div className=" flex justify-center">
      <div className=" flex flex-col items-center">
        <p className="text-sm font-bold text-slate-600 dark:text-slate-300">
          Savannah Informatics Frontend Engineer Assessment
        </p>
        <p className="text-sm">&copy; {year} John Muthua</p>
      </div>
    </div>
  )
}

export default Footer
